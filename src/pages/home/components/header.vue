<template>
  <div class="header">
    <div class="header-left" >
      <span class="iconfont icon-fanhui"></span>
    </div>
    <div class="header-input">
      <span class="iconfont icon-sousuo"></span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.$store.state.city}}
        <span class="iconfont icon-jiantouarrow486"></span>
      </div>
    </router-link>


  </div>
</template>
<script>
  export default {
    name: 'HomeHeader'
  }
</script>
<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .header
    display: flex
    line-height: .86rem
    background $bgColor
    color: #fff

    .header-left
      float: left
      width: .64rem

    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      background-color: #fff
      border-radius: .1rem
      color: #ccc

    .header-right
      width: 1.24rem
      float right
      text-align: center
      color: #ffffff


</style>
