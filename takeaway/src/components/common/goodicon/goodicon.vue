<template>
    <li v-if="iconInside" @click.prevent="selectMenu">
      <span class="text">
        <span class="icon" :class="classMap[item.type]" v-show="item.type>=0"></span>{{item.description}}
      </span>
    </li>
    <li v-else>
      <span class="icon" :class="classMap[item.type]" v-show="item.type>=0"></span>
      <span class="text">{{item.description}}</span>
    </li>
</template>

<script>
export default {
  name: 'GoodIcon',
  props: {
    item: Object,
    iconInside: Boolean
  },
  created () {
    this.classMap = ['special', 'discount', 'decrease', 'invoice', 'guarantee']
  },
  methods: {
    selectMenu () {
      this.$emit('selectedMenu')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/stylus/mixins.styl'
  .icon-style-one
    .icon
      display inline-block
      vertical-align top
      width .24rem
      height .24rem
      margin-right .08rem
      background-size .24rem .24rem
      background-repeat no-repeat
      &.decrease
        bg-image('decrease_1')
      &.discount
        bg-image('discount_1')
      &.guarantee
        bg-image('guarantee_1')
      &.invoice
        bg-image('invoice_1')
      &.special
        bg-image('special_1')
    .text
      vertical-align top
      display inline-block
      line-height .24rem
      font-size 10px
  .icon-style-two
    .icon
      display inline-block
      width .32rem
      height .32rem
      vertical-align top
      margin-right .12rem
      background-size .32rem .32rem
      background-repeat no-repeat
      &.decrease
        bg-image('decrease_2')
      &.discount
        bg-image('discount_2')
      &.guarantee
        bg-image('guarantee_2')
      &.invoice
        bg-image('invoice_2')
      &.special
        bg-image('special_2')
    .text
      line-height  .32rem
      font-size 12px
  .icon-style-three
    .text
      display table-cell
      width 1.12rem
      vertical-align middle
      font-size 12px
      .icon
        display inline-block
        width .24rem
        height .24rem
        vertical-align top
        margin-right .04rem
        background-size .24rem .24rem
        background-repeat no-repeat
        &.decrease
          bg-image('decrease_3')
        &.discount
          bg-image('discount_3')
        &.guarantee
          bg-image('guarantee_3')
        &.invoice
          bg-image('invoice_3')
        &.special
          bg-image('special_3')
</style>
