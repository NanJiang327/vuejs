<template>
  <div class="seller">
    <div class="seller-content">
      <div class="overview">
        <h1 class="title">{{seller.name}}</h1>
        <div class="desc border-bottom">
          <star :size="36" :score="seller.score"></star>
          <span class="text">({{seller.ratingCount}})</span>
          <span class="text">Monthly Sold {{seller.sellCount}}</span>
        </div>
        <ul class="remark">
          <li class="block">
            <h2>Start Price</h2>
            <div class="content">
              <span class="stress">${{seller.minPrice}}</span>
            </div>
          </li>
          <li class="block">
            <h2>Seller Delivery</h2>
            <div class="content">
              <span class="stress">${{seller.deliveryPrice}}</span>
            </div>
          </li>
          <li class="block">
            <h2>Average delivery time</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryTime}} mins</span>
            </div>
          </li>
        </ul>
        <div class="favorite" @click="toggleFavorite($event)">
          <i class="iconfont icon-favorite" :class="{'active':favorite}"></i>
          <span>{{favoriteText}}</span>
        </div>
      </div>
      <split></split>
      <div class="bulletin">
        <h1 class="title">Special</h1>
        <div class="content-wrapper border-bottom">
          <p class="content">{{seller.bulletin}}</p>
        </div>
        <ul v-if="seller.supports" class="supports">
          <good-icon v-for="(item, index) in seller.supports"
                :key="index"
                class="support-item icon-style-four"
                :item="item"
                :iconInside="false"
                v-if="item.type>=0">
          </good-icon>
        </ul>
      </div>
      <split></split>
      <div class="pics">
        <h1 class="title">Views</h1>
        <div class="pic-wrapper" ref="picWrapper">
          <ul class="pic-list" ref="picList">
            <li class="pic-item" v-for="(pic,index) in seller.pics" :key="index">
              <img :src="pic" width="120" height="120">
            </li>
          </ul>
        </div>
      </div>
      <split></split>
      <div class="info">
        <div class="title  border-bottom">Seller Info</div>
        <ul>
          <li class="info-item boder-bottom" v-for="(info,index) in seller.infos" :key="index">{{info}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import star from '../common/star/star'
import split from '../common/spliter/spliter'
import BScroll from 'better-scroll'
import {savaToLocal, loadFromlLocal} from '../../assets/js/store'
import GoodIcon from '../common/goodicon/goodicon'
export default {
  props: {
    seller: {
      type: Object
    }
  },
  components: {
    star,
    split,
    GoodIcon
  },
  data () {
    return {
      favorite: (() => {
        return loadFromlLocal(this.seller.id, 'favorite', false)
      })()
    }
  },
  computed: {
    favoriteText () {
      return this.favorite ? 'Remove' : 'Favorite'
    }
  },
  created () {
    if (!this.picScroll) {
      if (this.seller.pics) {
        this.$nextTick(() => {
          let picWidth = 120
          let margin = 6
          let width = (picWidth + margin) * this.seller.pics.length - margin
          this.$refs.picList.style.width = width + 'px'
          this.picScroll = new BScroll(this.$refs.picWrapper, {
            scrollX: true,
            eventPassthrough: 'vertical'
          })
        })
      }
    } else {
      this.picScroll.refresh()
    }
    if (!this.scroll) {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$el, {click: true})
      })
    } else {
      this.scroll.refresh()
    }
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  methods: {
    toggleFavorite (event) {
      if (!event._constructed) {
        return
      }
      this.favorite = !this.favorite
      savaToLocal(this.seller.id, 'favorite', this.favorite)
    }
  }
}

</script>
<style lang="stylus" scoped>
  @import '~styles/stylus/variables.styl'
  @import '~styles/stylus/base.styl'
.seller
  position absolute
  top 174px
  bottom 0
  left 0
  width 100%
  overflow hidden
  .overview
    padding 18px
    .title
      margin-bottom 8px
      line-height 14px
      color rgb(7, 17, 27)
      font-size 14px
    .desc
      padding-bottom 18px
      font-size 0
      .star
        display inline-block
        vertical-align top
        margin-right 8px
      .text
        display inline-block
        vertical-align top
        margin-right 12px
        line-height 18px
        font-size 10px
        color rgb(77, 85, 93)
    .remark
      display flex
      padding-top 18px
      .block
        flex 1
        text-align center
        border-right 1px solid rgba(7, 17, 27, 0.1)
        &:last-child
          border none
        h2
          margin-bottom 4px
          line-height 10px
          font-size 10px
          color rgb(147, 153, 149)
        .content
          line-height 24px
          font-size 10px
          color rgb(7, 17, 27)
          .stress
            font-size 24px
    .favorite
      position absolute
      right 11px
      top 18px
      width 50px
      text-align center
      .iconfont
        display block
        margin-bottom 4px
        line-height 24px
        font-size 24px
        width 50px
        color #d4d6d9
        &.active
          color rgb(240,20,20)
      .text
        line-height 10px
        font-size 10px
        color rgb(77,85,93)
  .bulletin
    padding 18px 18px 0 18px
    .title
      margin-bottom 8px
      line-height 14px
      color rgb(7, 17, 27)
      font-size 14px
    .content-wrapper
      padding 0 12px 16px 16px
      .content
        line-height 24px
        font-size 12px
        color red
    .supports
      .support-item
        padding 16px 12px
        font-size 0
        &:last-child
          border none
  .pics
    padding 18px
    .title
      margin-bottom 12px
      line-height 14px
      color rgb(7, 17, 27)
      font-size 14px
    .pic-wrapper
      width 100%
      overflow hidden
      white-space nowrap /*不这行*/
      .pic-list
        font-size 0
        .pic-item
          display inline-block
          margin-right 6px
          width 120px
          height 90px
          &:last-child
            margin 0
  .info
    padding 18px 18px 0 18px
    color rgb(7, 17, 27)
    .title
      padding-bottom 12px
      line-height 14px
      font-size 14px
    .info-item
      padding 16px 12px
      line-height 16px
      font-size 12px
      &:last-child
        border none
</style>
