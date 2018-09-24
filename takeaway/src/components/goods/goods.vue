<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuwrapper">
      <ul>
        <good-icon v-for="(item, index) in goods"
                  :key="index"
                  :item="item"
                  class="menu-item icon-style-three border-bottom"
                  :class="{'current':currentIndex===index}"
                  :iconInside="true"
                  @selectedMenu="selectedMenu(index)">
        </good-icon>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodwrapper">
      <ul>
        <li v-for="(item, index) in goods" :key="index" class="food-list  food-list-hook">
          <h1 class="title">{{item.description}}</h1>
          <ul>
            <li v-for="(food, index) in item.foods"
                :key="index"
                class="food-item border-bottom"
              >
              <div class="icon">
                <img width="57" height="57" :src="food.icon" alt="">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="description">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">${{food.price}}</span><span v-show="food.oldPrice" class="old">${{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cart-num :food="food"></cart-num>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shop-cart :seller="seller" :selectFoods="selectFoods"></shop-cart>
  </div>
</template>

<script>
import axios from 'axios'
import GoodIcon from '../common/goodicon/goodicon'
import CartNum from '../common/cart/cartnum'
import ShopCart from '../cart/cart'
import Bscroll from 'better-scroll'

const ERR_OK = '0'

export default {
  name: 'Goods',
  components: {
    GoodIcon,
    ShopCart,
    CartNum
  },
  data () {
    return {
      goods: [],
      listHeight: [],
      scrollY: 0,
      seller: {}
    }
  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i
        }
      }
      return 0
    },
    selectFoods () {
      let foods = []
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count) {
            foods.push(food)
          }
        })
      })
      return foods
    }
  },
  mounted () {
    this.menuScroll = new Bscroll(this.$refs.menuwrapper)
    this.foodScroll = new Bscroll(this.$refs.foodwrapper, {probeType: 3})
    this.foodScroll.on('scroll', (pos) => {
      this.scrollY = Math.abs(Math.round(pos.y))
    })
  },
  created () {
    // this.$router.go('/goods')
    this.getSellerInfo()
  },
  methods: {
    getSellerInfo () {
      axios.get('/api/all.json')
        .then(this.getGoodsSuccessInfo)
    },
    getGoodsSuccessInfo (res) {
      if (res.data.error === ERR_OK) {
        this.goods = res.data.data.goods
        this.seller = res.data.data.seller
        this.$nextTick(() => {
          this._calculateHeight()
        })
      }
    },
    _calculateHeight () {
      let foodList = this.$refs.foodwrapper.getElementsByClassName('food-list-hook')
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    selectedMenu (index) {
      let foodList = this.$refs.foodwrapper.getElementsByClassName('food-list-hook')
      let el = foodList[index]
      this.foodScroll.scrollToElement(el, 300)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .goods
    display flex
    position absolute
    top 3.48rem
    bottom .92rem
    width 100%
    overflow hidden
    .menu-wrapper
      flex 0 0 1.6rem
      width 1.6rem
      background #f3f5f7
      .menu-item
        display table
        height 1.08rem
        width 1.16rem
        line-height .28rem
        padding 0 .22rem
        &.current
          position relative
          z-index 10
          margin-top -.02rem
          background #fff
          font-weight 700
          .text
            border-bottom none
    .foods-wrapper
      flex 1
      .title
        padding-left .28rem
        height .52rem
        line-height .52rem
        border-left 2px solid #d9dde1
        font-size 12px
        color rgb(147,153,159)
        background #f3f5f7
      .food-item
        display flex
        margin .36rem
        padding-bottom .36rem
        &:last-child
          border-bottom none
          margin-bottom 0
        .icon
          flex 0 0 1.14rem
          margin-right .2rem
        .content
          flex 1
          position relative
          .name
            margin .04rem 0 .16rem 0
            height .28rem
            line-height .28rem
            font-size 14px
            color rgb(7,17,27)
          .description, .extra
            line-height .24rem
            font-size 10px
            color rgb(7,17,27)
            font-weight 200
          .description
            margin-bottom .16rem
          .extra
            .count
              margin-right .24rem
          .price
            font-weight 700
            line-height .48rem
            .now
              margin-right .16rem
              font-size 14px
              color rgb(240,20,20)
            .old
              text-decoration line-through
              font-size 10px
              color rgb(147,153,159)
          .cartcontrol-wrapper
            position absolute
            right -12px
            bottom 0
</style>
