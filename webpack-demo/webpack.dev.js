const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'develpoment',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
});