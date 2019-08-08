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
          <rating  :ratings="food.ratings"
                   :desc="desc"
                   :ratingType="ratingType"
                   :onlyContent="onlyContent"
                   @ratingtype="typeChange"
                   @contenttype="contentOnly"
          >
          </rating>
          <div class="rating-wrapper">
            <ul v-show="food.ratings && food.ratings.length">
              <li v-show="needShow(rating.rateType, rating.text)" v-for="(rating,index) in food.ratings" :key="index" class="rating-item border-bottom">
                <div class="user">
                  <span class="name">{{rating.username}}</span>
                  <img :src="rating.avatar" alt="" width="12" height="12" class="avatar">
                </div>
                <div class="time">{{rating.rateTime | formateDate}}</div>
                <p class="text">
                  <span :class="{'icon-thumb_up':rating.rateType===0,'icon-thumb_down': rating.rateType===1}"></span>{{rating.text}}
                </p>
              </li>
            </ul>
            <div class="no-rating" v-show="!food.ratings || !food.ratings.length">No Comments</div>
          </div>
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
import {formateDate} from '../../../assets/js/data'

const ALL = 2

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
      ratingType: ALL,
      onlyContent: false,
      desc: {
        all: 'All',
        positive: 'Recommend',
        negative: 'Negative'
      }
    }
  },
  filters: {
    formateDate (time) {
      let date = new Date(time)
      return formateDate(date, 'yyyy-MM-dd hh:mm')
    }
  },
  methods: {
    show () {
      this.showDetail = true
      this.ratingType = ALL
      this.onlyContent = false
      this.$nextTick(() => {
        if (!this.foodScroll) {
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
    },
    typeChange (type) {
      this.ratingType = type
      this.$nextTick(() => {
        this.foodScroll.refresh()
      })
    },
    contentOnly () {
      this.onlyContent = !this.onlyContent
      this.$nextTick(() => {
        this.foodScroll.refresh()
      })
    },
    needShow (type, text) {
      if (this.onlyContent && !text) {
        return false
      }
      if (this.ratingType === ALL) {
        return true
      } else {
        return type === this.ratingType
      }
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
      .rating-wrapper
        padding 0 .36rem
        .rating-item
          position relative
          padding .32rem 0
          .user
            position absolute
            right 0
            top .32rem
            line-height .24rem
            font-size 0
            .name
              display inline-block
              margin-right .12rem
              vertical-align top
              font-size 10px
              color rgb(147,153,159)
            .avatar
              border-radius 50%
          .time
            margin-bottom .12rem
            line-height .24rem
            font-size 10px
            color rgb(147,153,159)
          .text
            line-height .32rem
            font-size 12px
            color rgb(7,17,27)
            .icon-thumb_up, .icon-thumb_down
              margin-right .08rem
              line-height .32rem
              font-size 12px
            .icon-thumb_up
              color rgb(0,160,220)
            .icon-thumb_down
              color rgb(147,153,159)
      .no-rating
        padding .32rem 0
        font-size 12px
        color rgb(147,153,159)
</style>
