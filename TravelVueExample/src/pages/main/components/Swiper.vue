<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img :src="item.imgUrl" class="swiper-img" alt="">
        <p class="swiper-text">{{ item.text }}</p>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'MainSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  },
  props: {
    swiperList: Array
  }
}

</script>

<style lang="stylus" scoped>
  // 表示对所有class名为swiper-pagination-bullet-active的项目进行穿透使用样式
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    position relative
    width: 100%
    height: 0
    padding-bottom: 34%
    background: #eee
    overflow: hidden
    .swiper-img
      width: 100%
    .swiper-text
      width 100%
      position absolute
      font-size 20px
      color #ffffff
      bottom .35rem
      text-align center
      text-transform uppercase

</style>
