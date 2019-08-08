<template>
  <div>
    <div class="shopcart">
      <div class="content" @click="toggleList">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo" :class="{'highlight':totalFoods.totalCount>0}">
              <i class="icon-shopping_cart" :class="{'highlight':totalFoods.totalCount>0}"></i>
            </div>
            <div class="num" v-show="totalFoods.totalCount > 0">{{totalFoods.totalCount}}</div>
          </div>
          <div class="price border-right" :class="{'highlight':totalFoods.totalPrice>0}">$ {{totalFoods.totalPrice}}</div>
          <div class="desc">Delivery fee ${{seller.deliveryPrice}}</div>
        </div>
        <div class="content-right" @click.stop.prevent="pay">
          <div class="pay" :class="payClass">
            {{payDesc}}
          </div>
        </div>
      </div>
      <div class="ball-container">
        <div v-for="(ball,index) in balls" :key="index">
          <transition name="drop" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div v-show="ball.show" class="ball">
              <div class="inner inner-hook">
              </div>
            </div>
          </transition>
        </div>
      </div>
      <transition name="fade">
        <div class="cartlist" v-show="!listShow">
          <div class="list-header">
            <h1 class="title">Cart</h1>
            <div class="empty" @click="empty">Clear</div>
          </div>
          <div class="list-content" ref="listContent">
            <ul>
              <li class="food" v-for="(food,index) in selectFoods" :key="index">
                <span class="name">{{food.name}}</span>
                <div class="price">
                  <span>$ {{food.price * food.count}}</span>
                </div>
                <div class="cartControl-wrapper">
                  <cart-num :food="food"></cart-num>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <transition name="fade">
      <div class="list-mask" v-show="!listShow"  @click="hideList"></div>
    </transition>
  </div>
</template>

<script>
import CartNum from '../common/cart/cartnum'
import Bscroll from 'better-scroll'
export default {
  name: 'ShopCart',
  components: {
    CartNum
  },
  data () {
    return {
      balls: [{
        show: false
      }, {
        show: false
      }, {
        show: false
      }, {
        show: false
      }, {
        show: false
      }],
      dropBalls: [],
      fold: true
    }
  },
  methods: {
    drop (el) {
      for (let i = 0; i < this.balls.length; i++) {
        let ball = this.balls[i]
        if (!ball.show) {
          ball.show = true
          ball.el = el
          this.dropBalls.push(ball)
          return
        }
      }
    },
    hideList () {
      this.fold = true
    },
    beforeEnter (el) {
      let count = this.balls.length
      while (count--) {
        let ball = this.balls[count]
        if (ball.show) {
          let rect = ball.el.getBoundingClientRect()
          let x = rect.left - 32
          let y = -(window.innerHeight - rect.top - 22)
          el.style.display = ''
          el.style.webkitTransform = `translate3d(0,${y}px,0)`
          el.style.transform = `translate3d(0,${y}px,0)`
          let inner = el.getElementsByClassName('inner-hook')[0]
          inner.style.webkitTransform = `translate3d(${x}px,0,0)`
          inner.style.transform = `translate3d(${x}px,0,0)`
        }
      }
    },
    enter (el) {
      /* eslint-disable no-unused-vars */
      // 因为改变了元素位置 所以需要让浏览器进行重绘
      let rf = el.offsetHeight
      this.$nextTick(() => {
        el.style.webkitTransform = 'translate3d(0,0,0)'
        el.style.transform = 'translate3d(0,0,0)'
        let inner = el.getElementsByClassName('inner-hook')[0]
        inner.style.webkitTransform = 'translate3d(0,0,0)'
        inner.style.transform = 'translate3d(0,0,0)'
      })
    },
    afterEnter (el) {
      let ball = this.dropBalls.shift()
      if (ball) {
        ball.show = false
        el.style.display = 'none'
      }
    },
    toggleList () {
      if (this.totalFoods.totalCount) {
        this.fold = !this.fold
      }
      if (!this.fold) {
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new Bscroll(this.$refs.listContent, {
              click: true
            })
          } else {
            this.scroll.refresh()
          }
        })
      }
    },
    empty () {
      this.selectFoods.forEach((food) => {
        food.count = 0
        this.fold = true
      })
    },
    pay () {
      if (this.totalFoods.totalPrice < this.minPrice) {
        return
      }
      window.alert('Total $' + this.totalFoods.totalPrice)
    }
  },
  props: {
    selectFoods: {
      type: Array,
      default () {
        return []
      }
    },
    seller: Object
  },
  computed: {
    totalFoods () {
      let totalPrice = 0
      let totalCount = 0
      this.selectFoods.forEach((food) => {
        totalPrice += food.price * food.count
        totalCount += food.count
      })
      return {
        totalPrice,
        totalCount
      }
    },
    payDesc () {
      if (this.totalFoods.totalPrice === 0) {
        return `$${this.seller.minPrice} 起送`
      } else if (this.totalFoods.totalPrice < this.seller.minPrice) {
        let diff = this.seller.minPrice - this.totalFoods.totalPrice
        return `还差 $${diff} 起送`
      } else {
        return 'Check Out'
      }
    },
    payClass () {
      return this.totalFoods.totalPrice < this.seller.minPrice ? 'not-enough' : 'enough'
    },
    listShow: {
      get: function () {
        return this.fold
      },
      set: function () {
        if (!this.totalFoods.totalCount) {
          this.fold = true
          return false
        }
        let show = !this.fold
        return show
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .shopcart
    position fixed
    left 0
    bottom 0
    z-index 50
    width 100%
    height .96rem
    .content
      display flex
      background #141d27
      color rgba(255, 255, 255, 0.4)
      font-size 0
      .content-left
        flex 1
        .logo-wrapper
          display inline-block
          vertical-align top
          position relative
          top -.2rem
          margin 0 .24rem
          padding .12rem
          width 1.12rem
          height 1.12rem
          box-sizing border-box
          vertical-align top
          border-radius 50%
          background #141d27
          .logo
            width 100%
            height 100%
            border-radius 50%
            text-align center
            background #2b343c
            &.highlight
              background rgb(0,160,220)
            .icon-shopping_cart
              line-height .88rem
              font-size 24px
              color #80858a
              &.highlight
                color #fff
          .num
            position absolute
            top 0
            right 0
            width .48rem
            height .32rem
            line-height .32rem
            text-align center
            border-radius .32rem
            font-size 9px
            font-weight 700
            color #fff
            background rgb(240,20,20)
            box-shadow 0 4px 8px 0 rgba(0,0,0,0.4)
        .price
          display inline-block
          vertical-align top
          margin-top .24rem
          line-height .48rem
          padding-right .24rem
          box-sizing border-box
          font-size 16px
          font-weight 700
          &.highlight
            color #fff
        .desc
          display inline-block
          vertical-align top
          margin .24rem 0 0 .24rem
          line-height .48rem
          font-size 10px
      .content-right
        flex 0 0 2.1rem
        width 2.1rem
        .pay
          height .96rem
          line-height .96rem
          text-align center
          font-size 12px
          font-weight 700
          &.not-enough
            background #2b333b
          &.enough
            background #00b43c
            color #fff
    .ball-container
      .ball
        position fixed
        left .64rem
        bottom .44rem
        z-index 200
        transition: all 0.6s cubic-bezier(0.49, -0.29, 0.75, 0.41)
        .inner
          width 16px
          height 16px
          border-radius 50%
          background rgb(0, 160, 220)
          transition: all 0.4s linear
    .cartlist
      position absolute
      top 0
      left 0
      z-index -1
      transition: all 0.4s
      width 100%
      transform translate3d(0, -100%, 0)
      &.fade-enter-active, &.fade-leave {
        transform translate3d(0, -100%, 0)
      }
      &.fade-enter, &.fade-leave-active {
        transform translate3d(0, 0, 0)
      }
      .list-header
        height .8rem
        line-height .8rem
        padding 0 .36rem
        background #f3f5f7
        border-bottom 1px solid rgba(7,17,27,0.1)
        .title
          float: left
          font-size 14px
          color rgb(7,17,27)
        .empty
          float right
          font-size 12px
          color rgb(0,160,220)
      .list-content
        padding 0 18px
        max-height 217px
        overflow hidden
        background #ffffff
        .food
          position relative
          padding 12px 0
          box-sizing border-box
          border-bottom 1px solid rgba(7,17,27,0.1)
          .name
            line-height 24px
            font-size 14px
            color rgb(7, 17, 27)
          .price
            position absolute
            right 90px
            bottom 12px
            line-height 24px
            font-size 14px
            font-weight 700
            color rgb(240, 20, 20)
          .cartControl-wrapper
            position absolute
            right 0
            bottom 6px
  .list-mask
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    z-index 40
    transition all 0.4s linear
    backdrop-filter blur(10px)
    opacity 1
    background rgba(7,17,27,0.6)
    &.fade-enter,  &.fade-leave-to
      opacity 0
      background rgba(7,17,27,0)

</style>
