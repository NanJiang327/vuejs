<template>
  <div>
    <main-header></main-header>
    <main-swiper :swiperList="swiperList"></main-swiper>
    <main-icons :iconList="iconList"></main-icons>
    <main-recommend :recommendList="recommendList"></main-recommend>
    <main-weekend :weekendList="weekendList"></main-weekend>
  </div>
</template>

<script>
import MainHeader from './components/Header'
import MainSwiper from './components/Swiper'
import MainIcons from './components/Icons'
import MainRecommend from './components/Recommend'
import MainWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Main',
  components: {
    MainHeader,
    MainSwiper,
    MainIcons,
    MainRecommend,
    MainWeekend
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    // 在app.vue中使用keep-alive会多一个activated钩子函数, 在页面重新显示的时候会调用钩子函数
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style>

</style>
