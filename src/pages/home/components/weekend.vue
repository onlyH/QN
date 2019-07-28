<template>
  <div>
    <p class="week">周末去哪</p>
    <ul>
      <li v-for="(item,index) in content" :key="index" class="week-list">
        <div class="week-list-img">
          <img :src="item.imgUrl" alt="" class="">
        </div>
        <p class="week-txt">{{item.title}}</p>
        <p class="week-desc">{{item.desc}}</p>
        <div class="gap"></div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'HomeWeekend',
    props: {
      content: Array
    }
  }
</script>
<style lang="stylus" scoped>
  @import "~customCSS/mixins.styl"
  .week
    height: .8rem
    line-height: .8rem
    padding-left: .26rem
    color-21()
    bgc-f5()

  .week-list
    .week-list-img
      overflow: hidden
      height: 0
      padding-bottom: 37.4%

      img
        width 100%

    .week-txt
      color-21()
      ellipsis()
      overflow: hidden
      font-size: .28rem
      line-height: .48rem

    .week-desc
      ellipsis()
      color: #616161
      font-size: .24rem
      line-height: .42rem

    .gap
      height: .1rem
      bgc-f5()


</style>
