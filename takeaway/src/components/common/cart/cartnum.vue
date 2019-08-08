<template>
  <div class="cartcontrol">
    <transition>
      <div class="cart-dec" @click.stop.prevent="decsCart" v-show="this.food.count>0">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="this.food.count>0">{{this.food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'CartNum',
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    addCart () {
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
      this.$emit('cartadd', event.target)
    },
    decsCart (event) {
      if (this.food.count) {
        this.food.count--
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .cartcontrol
    font-size 0
    .v-enter-active, .v-leave-active
      transition opacity .5s linear
    .v-enter, .v-leave-to
      opacity 0
      transform translate3d(6px,0,0)
      .inner
        transform rotate(180deg)
    .v-enter-to, .v-leave
      opacity 1
      transform translate3d(0,0,0)
      .inner
        display inline-block
        line-height .48rem
        font-size 24px
        color rgb(0,160,220)
        transition all 0.4s linear
        transform rotate(0)
    .cart-dec
      display inline-block
      padding .12rem
      .inner
        display inline-block
        line-height .48rem
        font-size 24px
        color rgb(0,160,220)
        transition all 0.4s linear
    .cart-count
      display inline-block
      vertical-align top
      width .24rem
      padding-top .12rem
      line-height .48rem
      text-align center
      font-size 10px
      color rgb(147,153,159)
    .cart-add
      display inline-block
      padding .12rem
      font-size 24px
      color rgb(0,160,220)
</style>
