<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}} / {{seller.deliveryTime}} 分钟送达
        </div>
      </div>
      <div v-if="seller.supports" class="support">
        <span class="icon"></span>
        <span class="text">{{seller.supports[0].description}}</span>
      </div>
    </div>
    <div class="bulletin-wrapper"></div>
  </div>
</template>

<script>
export default {
  name: 'MainHeader',
  props: {
    seller: Object
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/stylus/mixins.styl'
  @import '~styles/stylus/variables.styl'
  .header
    color #fff
    background #000
    .content-wrapper
      padding .48rem .24rem .36rem .48rem
      font-size 0
      .avatar
        display inline-block
        vertical-align top
        font-size 50px
        & > img
          width 1.28rem
          height 1.28rem
          border-radius .04rem
      .content
        display inline-block
        margin-left .32rem
        font-size 14px
        .title
          margin .04rem 0 .16rem 0
          .brand
            display inline-block
            vertical-align top
            width .6rem
            height .36rem
            bg-image('brand')
            background-size .6rem .36rem
            background-repeat no-repeat
          .name
            margin-left .12rem
            line-height .36rem
            font-size 16px
            font-weight bold
        .description
          margin-bottom .2rem
          line-height .24rem
          font-size 12px
        .support
          .icon
            display inline-block
            width .24rem
            height .24rem
            margin-right .08rem
</style>
