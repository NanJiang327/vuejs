<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">
          Current City
        </div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">Auckland</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">
          Hot Cities
        </div>
        <div class="button-list">
          <div class="button-wrapper" v-for="city in hotCities" :key="city.id">
            <div class="button">{{ city.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(region,key) in cities" :key="key" :ref="key.substring(0,1)">
        <div class="title border-topbottom"> {{ key }}</div>
        <div class="item-list">
          <div class="item border-bottom"  v-for="city in region" :key="city.id">
            {{ city.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  watch: {
    letter () {
      if (this.letter) {
        const el = this.$refs[this.letter][0]
        this.scroll.scrollToElement(el)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color:#ccc
    &:after
      boroder-color:#ccc
  .border-bottom
    &:before
      border-color:#ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    bottom: 0
    right: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>
