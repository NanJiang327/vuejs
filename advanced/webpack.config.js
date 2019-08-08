const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const pkgInfo = require('./package.json')
const url = require('url')

module.exports = (options = {}) => {
  const config = require('./config/' + (process.env.npm_config_config || options.config || 'default'))

  return {
    /*
    这里entry我们改用对象来定义
    属性名在下面的output.filename中使用, 值为文件路径
    */
    entry: {
      vendor: './src/vendor',
      index: './src/index'
    },

    output: {
      path: resolve(__dirname, 'dist'),
      /*
      entry字段配置的入口js的打包输出文件名
      [name]作为占位符, 在输出时会被替换为entry里定义的属性名, 比如这里会被替换为"index"
      [chunkhash]是打包后输出文件的hash值的占位符, 把[chunkhash]加入文件名可以防止浏览器使用缓存的过期内容,
      这里, webpack会生成以下代码插入到index.html中:
      <script type="text/javascript" src="/assets/index.d835352892e6aac768bf.js"></script>
      这里/assets/目录前缀是output.publicPath配置的

      options.dev是命令行传入的参数. 这里是由于使用webpack-dev-server启动开发环境时, 是没有[chunkhash]的, 用了会报错
      因此我们不得已在使用webpack-dev-server启动项目时, 命令行跟上--env.dev参数, 当有该参数时, 不在文件名中加入[chunkhash]
      */
      filename: options.dev ? '[name].js' : '[name].[chunkhash].js',
      /*
      import()加载的文件会被分开打包, 我们称这个包为chunk, chunkFilename用来配置这个chunk输出的文件名.

      [chunkhash]: 这个chunk的hash值, 文件发生变化时该值也会变. 使用[chunkhash]作为文件名可以防止浏览器读取旧的缓存文件.

      还有一个占位符[id], 编译时每个chunk会有一个id. 我们在这里不使用它, 因为这个id是个递增的数字, 引入一个新的异步加载的文件或删掉一个, 都会导致其他文件的id发生改变, 导致缓存失效.
      */
      chunkFilename: '[chunkhash].js',
      publicPath: config.publicPath
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader']
        },
        /*
        html-loader接受attrs参数, 表示什么标签的什么属性需要调用webpack的loader进行打包.
        比如<img>标签的src属性, webpack会把<img>引用的图片打包, 然后src的属性值替换为打包后的路径.
        使用什么loader代码, 同样是在module.rules定义中使用匹配的规则.

        如果html-loader不指定attrs参数, 默认值是img:src, 意味着会默认打包<img>标签的图片.
        这里我们加上<link>标签的href属性, 用来打包入口index.html引入的favicon.png文件.
        */
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: {
                root: resolve(__dirname, 'src'),
                attrs: ['img:src', 'link:href']
              }
            }
          ]
        },

        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader']
        },

        {
          /*
          匹配favicon.png
          上面的html-loader会把入口index.html引用的favicon.png图标文件解析出来进行打包
          打包规则就按照这里指定的loader执行
          */
          test: /favicon\.png$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]'
              }
            }
          ]
        },

        {
          test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
          // 排除favicon.png, 因为它已经由上面的loader处理了. 如果不排除掉, 它会被这个loader再处理一遍
          exclude: /favicon\.png$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000
              }
            }
          ]
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      }),
      /*
      使用文件路径的hash作为moduleId
      webpack默认使用递增的数字作为moduleId, 如果引入了一个新文件或删掉一个文件, 会导致其他的文件的moduleId也发生改变,
      这样未发生改变的文件在打包后会生成新的[chunkhash], 导致缓存失效
      */
      new webpack.HashedModuleIdsPlugin(),
      /*
      使用CommonsChunkPlugin插件来处理重复代码
      因为vendor.js和index.js都引用了spa-history, 如果不处理的话, 两个文件里都会有spa-history包的代码,
      我们用CommonsChunkPlugin插件来使共同引用的文件只打包进vendor.js
      */
      new webpack.optimize.CommonsChunkPlugin({
        /*
        names: 将entry文件中引用的相同文件打包进指定的文件, 可以是新建文件, 也可以是entry中已存在的文件
        这里我们指定打包进vendor.js

        但这样还不够, 还记得那个chunkFilename参数吗? 这个参数指定了chunk的打包输出的名字,
        我们设置为 [chunkhash].js 的格式. 那么打包时这个文件名存在哪里的呢?
        它就存在引用它的文件中. 这就意味着被引用的文件发生改变, 会导致引用的它文件也发生改变.

        然后CommonsChunkPlugin有个附加效果, 会把所有chunk的文件名记录到names指定的文件中.
        那么这时当我们修改页面foo或者bar时, vendor.js也会跟着改变, 而index.js不会变.
        那么怎么处理这些chunk, 使得修改页面代码而不会导致entry文件改变呢?

        这里我们用了一点小技巧. names参数可以是一个数组, 意思相当于调用多次CommonsChunkPlugin,
        比如:

        plugins: [
          new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
          })
        ]

        相当于

        plugins: [
          new webpack.optimize.CommonsChunkPlugin({
            names: 'vendor'
          }),

          new webpack.optimize.CommonsChunkPlugin({
            names: 'manifest'
          })
        ]

        首先把重复引用的库打包进vendor.js, 这时候我们的代码里已经没有重复引用了, chunk文件名存在vendor.js中,
        然后我们在执行一次CommonsChunkPlugin, 把所有chunk的文件名打包到manifest.js中.
        这样我们就实现了chunk文件名和代码的分离. 这样修改一个js文件不会导致其他js文件在打包时发生改变, 只有manifest.js会改变.
        */
        names: ['vendor', 'manifest']
      }),

      new webpack.DefinePlugin({
        DEBUG: Boolean(options.dev),
        VERSION: JSON.stringify(pkgInfo.version),
        CONFIG: JSON.stringify(config.runtimeConfig)
      })
    ],
    // 简化import路径
    // 这样, 我们可以以src目录为基础路径来import文件:
    // html中的<img>标签没法使用这个别名功能, 但html-loader有一个root参数, 可以使/开头的文件相对于root目录解析.
    resolve: {
      alias: {
        '~': resolve(__dirname, 'src')
      }
    },

    devServer: config.devServer ? {
      host: '0.0.0.0',
      disableHostCheck: true,
      port: config.devServer.port,
      proxy: config.devServer.proxy,
      historyApiFallback: {
        index: url.parse(config.publicPath).pathname,
        /* 
        webpack-dev-server会认为它应该是一个实际存在的文件, 就算找不到该文件, 也不会fallback到index.html, 而是返回404. 但在SPA应用中这不是我们希望的. 幸好webpack-dev-server有一个配置选项disableDotRule: true可以禁用这个规则, 使带后缀的文件当不存在时也能fallback到index.html
        */
        disableDotRule: true
      }
    } : undefined,

    performance: {
      hints: options.dev ? false : 'warning'
    }
  }
}
