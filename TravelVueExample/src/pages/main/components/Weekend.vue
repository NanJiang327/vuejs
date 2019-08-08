<template>
  <div>
    <div class="recommend-title">Weekend</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-text">{{ item.text }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainWeekend',
  props: {
    weekendList: Array
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/mixins.styl'
  .recommend-title
    line-height: .8rem
    background: #eeeeee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 56%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-text
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
