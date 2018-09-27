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
        <ul v-if="seller.supports" class="support-item" >
          <good-icon class="support-item icon-style-one" :item="seller.supports[0]"></good-icon>
        </ul>
      </div>
      <div class="support-count" v-if="seller.supports" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" alt="" width="100%" height="100%">
    </div>
    <transition>
      <div class="detail" v-show="detailShow">
        <div class="detail-wrapper clearfix">
          <div class="detail-content">
            <h1 class="name">{{seller.name}}</h1>
            <div class="star-wrapper">
              <star :size="48" :score="seller.score" ></star>
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">Specail</div>
              <div class="line"></div>
            </div>
            <ul v-if="seller.supports" class="supports">
              <good-icon v-for="(item, index) in seller.supports"
                  :key="index"
                  class="support-item icon-style-two"
                  :item="item"
                  v-if="item.type>=0">
              </good-icon>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">Announcement</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              <p class="content">{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <div class="detail-close" @click="hideDetail">
          <i class="icon-close"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Star from '../common/star/star'
import GoodIcon from '../common/goodicon/goodicon'
export default {
  name: 'MainHeader',
  components: {
    Star,
    GoodIcon
  },
  props: {
    seller: Object
  },
  data () {
    return {
      detailShow: false
    }
  },
  methods: {
    showDetail () {
      this.detailShow = true
    },
    hideDetail () {
      this.detailShow = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/stylus/mixins.styl'
  @import '~styles/stylus/variables.styl'
  @import '~styles/stylus/base.styl'
  .header
    position relative
    overflow hidden
    color #fff
    background rgba(7,17,27,0.5)
    .v-enter-active, .v-leave-active
      transition opacity .5s
    .v-enter, .v-leave-to
      opacity 0
    .content-wrapper
      position relative
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
      .support-count
        position absolute
        right .24rem
        bottom .28rem
        padding 0 .16rem
        height .48rem
        line-height .48rem
        border-radius .28rem
        color #fff
        background rgba(0, 0, 0, 0.2)
        text-align center
        .count
          font-size 10px
        .icon-keyboard_arrow_right
          display inline-block
          vertical-align top
          margin-left .04rem
          line-height .48rem
          font-size 10px
    .bulletin-wrapper
      position relative
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
      height .56rem
      line-height .56rem
      padding 0 .44rem 0 .24rem
      background rgba(7,17,27,0.2)
      .bulletin-title
        display inline-block
        margin-top .16rem
        vertical-align top
        width .44rem
        height .24rem
        bg-image('bulletin')
        background-size .44rem .24rem
        background-repeat no-repeat
      .bulletin-text
        vertical-align top
        margin 0 .08rem
        font-size 10px
      .icon-keyboard_arrow_right
        position absolute
        font-size 10px
        right .24rem
        top .16rem
    .background
      position absolute
      top 0
      left 0
      width 100%
      height  100%
      z-index -1
      filter blur(10px)
    .detail
      position fixed
      z-index 100
      top 0
      left 0
      width 100%
      height 100%
      overflow auto
      background rgba(7,17,27,0.8)
      backdrop-filter blur(10px)
      .detail-wrapper
        min-height 100%
        width 100%
        .detail-content
          margin-top 1.28rem
          padding-bottom 1.28rem
          .name
            line-height .32rem
            text-align center
            font-size 16px
            font-weight 700
          .star-wrapper
            margin-top .36rem
            padding .04rem 0
            text-align center
          .title
            display flex
            width 80%
            margin .56rem auto .48rem auto
            .line
              flex 1
              position relative
              top -.12rem
              border-bottom 1px solid rgba(255,255,255,0.2)
            .text
              padding 0 .24rem
              font-weight 700
              font-size 14px
          .supports
            width 80%
            margin 0 auto
            .support-item
              padding 0 .24rem
              margin-bottom .24rem
              font-size 0
              &:last-child
                margin-bottom 0
          .bulletin
            width 80%
            margin 0 auto
            .content
              padding 0 .24rem
              line-height  .48rem
              font-size 12px
      .detail-close
        position relative
        width .64rem
        height .64rem
        margin -1.2rem auto 0 auto
        clear both
        font-size .64rem
</style>
