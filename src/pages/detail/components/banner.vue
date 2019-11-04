<template>
<div class="banner">
  <img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" class="banner-img">
  <div class="mp-headfeagure-info"><div class="mp-headfeagure-title">故宫(AAAAA景区)</div></div>
  <div class="mp-imgswipeicon"><span class="mp-iconfont mp-imgswipeicon-icon"></span><em class="mp-imgswipeicon-number">12</em></div>
</div>
</template>

<script>
  export default {
    name: "banner"
  }
</script>

<style scoped lang="stylus">
.banner
  overflow: hidden
  height: 0
  padding-bottom 55%
  position: relative
  .banner-img
    width: 100%
  .mp-headfeagure-info
    position: absolute
    right: .2rem
    bottom: .36rem
    left: .2rem
    min-height: .4rem
    .mp-headfeagure-title
      position: relative;
      z-index: 1;
      line-height: .4rem;
      color: #fff;
      font-size: .36rem;
      text-shadow: 0 1px 2px rgba(0,0,0,0.70);
  .mp-imgswipeicon
    position: absolute;
    left: .2rem;
    bottom: .86rem;
    height: .4rem;
    background: rgba(0,0,0,.5);
    border-radius: .2rem;
    padding:0 .1rem
    font-size: .24rem;
    color: #fff;
    line-height: .4rem;
    text-align: center;
    .mp-imgswipeicon-icon
      position: relative;
      top: .02rem;
      font-family: 'mpiconfont';
      speak: none;
      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      text-transform: none;
      line-height: 1;
      -webkit-font-smoothing: antialiased;
    .mp-imgswipeicon-number
      margin-left: .1rem;


</style>
