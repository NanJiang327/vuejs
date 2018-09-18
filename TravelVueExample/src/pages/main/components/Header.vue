<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      Enter cities
    </div>
    <router-link to='/city'>
      <div class="header-right">
        {{ this.city }}
        <span class="iconfont arrow-down">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MainHeader',
  props: {
    city: String
  }
}
</script>

<style scoped lang="stylus">
// 在build中的wepack.base.conf.js中配置了styles路径, 则styles代表/src/assets/styles
// 在css中引用路径前需要加个 '~'
  @import '~styles/varibles.styl';
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      color: #ccc
      border-radius: .1rem
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      color: #fff
      .arrow-down
        margin-left: -.04rem
        font-size: .24rem
</style>
