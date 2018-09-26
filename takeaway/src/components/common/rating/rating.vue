<template>
  <div class="ratingselect">
    <div class="rating-type border-bottom">
      <div class="bottom-wrapper">
        <span class="block all"
          :class="{'active': ratingType===2}"
          @click="select(2,$event)"
        >{{desc.all}}<span class="count">{{ratings.length}}</span></span>
        <span class="block positive"
          :class="{'active': ratingType===0}"
          @click="select(0,$event)"
        >{{desc.positive}}<span class="count">{{positive}}</span></span>
        <span class="block negative"
          :class="{'active': ratingType===1}"
          @click="select(1,$event)"
          >{{desc.negative}}<span class="count">{{negative}}</span></span>
      </div>
    </div>
    <div class="switch border-bottom" :class="{'on': onlyContent}" @click="toggleContent">
      <span class="icon-check_circle"></span>
      <span class="text">Rating with comments</span>
    </div>
  </div>
</template>

<script>
const POSITIVE = 0
const NEGATIVE = 1
const ALL = 2

export default {
  name: 'Comment',
  props: {
    ratings: {
      type: Array,
      default () {
        return []
      }
    },
    desc: {
      type: Object,
      default () {
        return {
          all: 'All',
          positive: 'Positive',
          negative: 'Negative'
        }
      }
    },
    ratingType: {
      type: Number,
      default: ALL
    },
    onlyContent: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    positive () {
      return this.ratings.filter((rating) => {
        return rating.rateType === POSITIVE
      }).length
    },
    negative () {
      return this.ratings.filter((rating) => {
        return rating.rateType === NEGATIVE
      }).length
    }
  },
  methods: {
    select (type, event) {
      // this.ratingType = type
      this.$emit('ratingtype', type)
    },
    toggleContent () {
      // this.onlyContent = !this.onlyContent
      this.$emit('contenttype')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .ratingselect
    .rating-type
      padding .36rem 0
      .bottom-wrapper
        margin 0 .36rem
        font-size 0
        .block
          display inline-block
          padding .16rem .24rem
          margin-right .16rem
          border-radius .02rem
          line-height .32rem
          font-size 12px
          color rgb(77,85,93)
          &.active
            color #fff
          .count
            margin-left .04rem
            font-size 8px
          &.all
            background rgba(102,205,0,0.2)
            &.active
              background rgb(102,205,0)
          &.positive
            background rgba(0,160,220,0.2)
            &.active
              background rgb(0,160,220)
          &.negative
            background rgba(77,85,93,0.2)
            &.active
              background rgb(77,85,93)
    .switch
      padding .24rem .36rem
      line-height .48rem
      color rgb(147, 153, 159)
      font-size 0
      &.on
        .icon-check_circle
          color #00c850
      .icon-check_circle
        display inline-block
        vertical-align top
        margin-right .08rem
        font-size 24px
      .text
        display inline-block
        vertical-align top
        font-size 12px
</style>
