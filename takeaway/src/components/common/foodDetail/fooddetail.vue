<template>
  <transition name="food">
    <div class="food" v-show="showDetail" ref="foodDetail">
      <div>
        <div class="food-content">
          <div class="image-header">
            <img :src="food.image" alt="">
            <div class="icon-wrapper" @click="hide">
              <i class="icon-arrow_left"></i>
            </div>
          </div>
          <div class="content">
            <h1 class="title">{{food.name}}</h1>
            <div class="detail">
              <span class="sell-count">{{food.sellCount}} Sold</span>
              <span class="rating">{{food.rating}}% satisfaction</span>
            </div>
            <div class="price">
              <span class="now">${{food.price}}</span><span class="old" v-show="food.oldPrice">${{food.oldPrice}}</span>
            </div>
            <div class="cartControl-wrapper">
              <cart-num :food="food" @cartadd="addMore"></cart-num>
            </div>
            <transition>
              <div class="add" v-show="showAdd" @click="addCart">
                  Add to cart
              </div>
            </transition>
          </div>
        </div>
        <spliter v-show="food.info"></spliter>
        <div class="intro" v-show="food.info">
          <h1 class="title">Product Info</h1>
          <div class="text">{{food.info}}</div>
        </div>
        <spliter></spliter>
        <div class="rating border-bottom">
          <h1 class="title">Ratings</h1>
          <rating  :only-content="onlyContent"
                   :ratings="food.ratings"
                   :desc="desc"
          >
          </rating>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue'
import Bscroll from 'better-scroll'
import CartNum from '../cart/cartnum'
import Spliter from '../spliter/spliter'
import Rating from '../rating/rating'

export default {
  name: 'FoodDetail',
  components: {
    CartNum,
    Spliter,
    Rating
  },
  props: {
    food: Object
  },
  data () {
    return {
      showDetail: false,
      onlyContent: true,
      desc: {
        all: 'All',
        positive: 'Recommend',
        negative: 'Negative'
      }
    }
  },
  methods: {
    show () {
      this.showDetail = true
      this.onlyContent = true
      this.$nextTick(() => {
        if (!this.foodScroll) {
          console.log('Scroll Called')
          this.foodScroll = new Bscroll(this.$refs.foodDetail, {
            click: true
          })
        } else {
          this.foodScroll.refresh()
        }
      })
    },
    addMore () {
      this.$emit('cartadd', event.target)
    },
    hide () {
      this.showDetail = false
    },
    addCart () {
      this.$emit('cartadd', event.target)
      Vue.set(this.food, 'count', 1)
    }
  },
  computed: {
    showAdd () {
      return !this.food.count || this.food.count === 0
    }
  }
}
</script>

<style lang="stylus" scoped>
  .food
    position fixed
    left 0
    top 0
    background #fff
    bottom .96rem
    z-index 30
    width 100%
    transition all 0.2s linear
    &.food-enter, &.food-leave-to
      transform translate3d(100%, 0, 0)
    .image-header
      position relative
      width 100%
      height 0
      padding-bottom 100%
      img
        position absolute
        top 0
        left 0
        width 100%
        height 100%
      .icon-wrapper
        position absolute
        top .2rem
        left 0
        .icon-arrow_left
          display block
          padding .36rem
          font-size 20px
          color #fff
    .content
      position relative
      padding .36rem
      .title
        line-height .28rem
        margin-bottom .16rem
        font-size 14px
        font-weight 700
        color rgb(7,17,27)
      .detail
        margin-bottom .36rem
        line-height .2rem
        height .2rem
        font-size 0
        .sell-count, .rating
          font-size 10px
          color rgb(147,153,159)
        .sell-count
          margin-right: .24rem
      .price
        font-weight 700
        line-height .48rem
        height .48rem
        .now
          margin-right .16rem
          font-size 14px
          color rgb(240,20,20)
        .old
          text-decoration line-through
          font-size 10px
          color rgb(147,153,159)
      .cartControl-wrapper
        position absolute
        right .24rem
        bottom .24rem
      .add
        position absolute
        right .36rem
        bottom .36rem
        z-index 10
        line-height .48rem
        height .48rem
        padding 0 .24rem
        box-sizing border-box
        border-radius .24rem
        font-size 10px
        color #fff
        background rgb(0,160,220)
        transition all 0.2s
        &.v-enter, &.v-leave-to
          opacity 0
        &.v-enter-to, &.v-leave
          opacity 1
    .intro
      padding .36rem
      .title
        line-height .28rem
        margin-bottom .12rem
        font-size 14px
        color rgb(7,17,27)
      .text
        line-height .48rem
        padding 0 .16rem
        font-size 12px
        color rgb(77,85,93)
    .rating
      .title
        padding-top .36rem
        line-height .28rem
        margin-left .36rem
        font-size 14px
        color rgb(7,17,27)
</style>
