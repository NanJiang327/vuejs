<template>
  <div>
    <main-header :city="city"></main-header>
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
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>

</style>
