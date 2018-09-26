<template>
  <div id="app">
    <!-- 使用keepalive把已经加载的内容放入内存 -->
    <!-- KEEP ALIVE 可以设置exclude来选择不缓存这个数据 -->
    <!-- <keep-alive exclude="Detial"></keep-alive> -->
    <main-header :seller="seller"></main-header>
    <div class="tab border-bottom">
      <div class="tab-item">
        <router-link to="/goods">Goods</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/rating">Rating</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">Seller</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from './components/header/header'
import axios from 'axios'

const ERR_OK = '0'

export default {
  name: 'App',
  data () {
    return {
      seller: {}
    }
  },
  components: {
    MainHeader
  },
  created () {
    // this.$router.go('/goods')
    this.getSellerInfo()
  },
  methods: {
    getSellerInfo () {
      axios.get('/api/seller.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      if (res.data.error === ERR_OK) {
        this.seller = res.data.data
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .tab
    display flex
    width 100%
    height 0.8rem
    line-height 0.8rem
    .tab-item
      flex 1
      text-align center
      & > a
        display block
        font-size .28rem
        color rgb(77,85,93)
        &.link-active
          color rgb(240,20,20)

</style>
