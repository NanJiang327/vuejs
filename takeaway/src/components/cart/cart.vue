<template>
  <div class="shopcart">
    <div class="content">
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
      <div class="content-right">
        <div class="pay" :class="payClass">
          {{payDesc}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopCart',
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
</style>
