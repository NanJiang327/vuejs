<template>
  <div class="ratings">
  <div>
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">Overall</div>
          <div class="rank">Better than {{seller.rankRate}}%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">Satisfaction</span>
            <star :size="36" :score="seller.serviceScore"></star>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">Score</span>
            <star :size="36" :score="seller.foodScore"></star>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">Delivery Time</span>
            <span class="delivery">{{seller.deliveryTime}} mins</span>
          </div>
        </div>
      </div>
    </div>
    <split></split>
    <ratingselect
      @contenttype="contentOnly"
      @ratingtype="typeChange"
      :ratingType="ratingType"
      :onlyContent="onlyContent"
      :ratings="ratings">
    </ratingselect>
    <div class="rating-wrapper border-bottom">
      <ul>
        <li v-for="(rating,index) in ratings" :key="index" class="rating-item border-bottom" v-show="needShow(rating.rateType, rating.text)">
          <div class="avatar">
            <img :src="rating.avatar" alt="" width="28" height="28">
          </div>
          <div class="content">
            <h1 class="name">{{rating.username}}</h1>
            <div class="star-wrapper">
              <star :size="24" :score="rating.score"></star>
              <span class="delivery" v-show="rating.deliveryTime">
                {{rating.deliveryTime}}
              </span>
            </div>
            <p class="text">{{rating.text}}</p>
            <div class="recommend" v-show="rating.recommend &&rating.recommend.length">
              <i class="iconfont icon-damuzhi"></i>
              <span  class="item" v-for="(item,index) in rating.recommend" :key="index" >{{item}}</span>
            </div>
            <div class="time">
              {{rating.rateTime | formateDate}}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
import star from '../common/star/star'
import split from '../common/spliter/spliter'
import ratingselect from '../common/rating/rating'
import {formateDate} from '../../assets/js/data'

const ALL = 2
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      ratings: [],
      showFlag: false,
      ratingType: ALL,
      onlyContent: true
    }
  },
  created () {
    axios.get('/api/ratings.json').then((response) => {
      let data = response.data
      if (data.error === '0') {
        this.ratings = data.data
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$el, {click: true})
        })
      }
    })
  },
  methods: {
    typeChange (type) {
      this.ratingType = type
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    },
    contentOnly () {
      this.onlyContent = !this.onlyContent
      this.$nextTick(() => {
        this.scroll.refresh()
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
  filters: {
    formateDate (time) {
      let date = new Date(time)
      return formateDate(date, 'yyyy-MM-dd hh:mm')
    }
  },
  components: {
    star,
    split,
    ratingselect
  }
}
</script>

<style lang="stylus" scoped>
.ratings
  position absolute
  top 3.48rem
  bottom 0
  left 0
  width 100%
  overflow hidden
  .overview
    display flex
    padding .36rem 0 .36rem .36rem
    .overview-left
      flex 0 0 2.74rem
      width 2.74rem
      padding .12rem 0
      border-right 1px solid rgba(7, 17, 27, 0.1)
      text-align center
      @media only screen and (max-width 320px)
        flex 0 0 2.2rem
        width 2.2rem
      .score
        margin-bottom .24rem
        line-height .56rem
        font-size 24px
        color rgb(255, 153, 0)
      .title
        margin-bottom .16rem
        line-height .24rem
        font-size 12px
        color rgb(7, 17, 27)
      .rank
        line-height .2rem
        font-size 12px
        color rgb(147, 153, 159)
    .overview-right
      flex 1
      padding .12rem 0 .12rem .48rem
      @media only screen and (max-width 320px)
        padding-left .12rem
      .score-wrapper
        line-height .36rem
        margin-top .16rem
        font-size 0
        .title
          display inline-block
          vertical-align top
          min-width 1.24rem
          line-height .36rem
          font-size 12px
          color rgb(7, 17, 27)
        .star
          display inline-block
          margin 0 .24rem
          vertical-align top
        .score
          display inline-block
          vertical-align top
          line-height .36rem
          font-size 12px
          color rgb(266, 153, 0)
      .delivery-wrapper
        font-size 0
        .title
          display inline-block
          vertical-align top
          line-height .36rem
          font-size 12px
          color rgb(7, 17, 27)
        .delivery
          display inline-block
          margin-left .24rem
          vertical-align top
          line-height .36rem
          font-size 12px
          color rgb(147, 153, 159)
  .rating-wrapper
    padding 0 .36rem
    .rating-item
      display flex
      padding .36rem 0
      .avatar
        flex 0 0 .56rem
        width .56rem
        margin-right .24rem
        img
          border-radius 50%
      .content
        position relative
        flex 1
        .name
          margin-bottom .08rem
          line-height .24rem
          font-weight 700
          font-size 10px
          color rgb(7, 17, 27)
        .star-wrapper
          margin-bottom .12rem
          font-size 0
          .star
            display inline-block
            margin-right .32rem
            vertical-align top
          .delivery
            display inline-block
            vertical-align top
            line-height .24rem
            font-size 10px
            color rgb(147, 153, 159)
        .text
          margin-bottom .16rem
          line-height .36rem
          color rgb(7, 17, 27)
          font-size 12px
        .recommend
          line-height .32rem
          font-size 0
          .iconfont, .item
            display inline-block
            margin 0 .16rem .08rem 0
            font-size 9px
          .iconfont
            color rgb(0, 160, 220)
          .item
            padding 0 .12rem
            border 1px solid rgba(7, 17, 27, 0.1)
            border-radius 1px
            color rgb(147, 153, 159)
            background #fffff
        .time
          position absolute
          top 0
          right 0
          line-height .24rem
          font-size 10px
          color rgb(147, 153, 159)
</style>
