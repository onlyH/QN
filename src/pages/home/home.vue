<template>
  <div class="home">
    <home-header/>
    <home-swiper :content="swiperList"/>
    <home-icons :content="iconList"/>
    <home-recommend :content="recommendList"/>
    <home-weekend :content="weekendList"/>
    <home-footer :content="footerList"/>
  </div>
</template>
<script>
  import HomeHeader from './components/header'
  import HomeSwiper from './components/swiper'
  import HomeIcons from './components/icons'
  import HomeRecommend from './components/recommend'
  import HomeWeekend from './components/weekend'
  import HomeFooter from './components/footer'
  import HomeApi from '../../../utils/api'


  export default {
    name: 'Home',
    components: {
      HomeHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend, HomeFooter

    },
    data() {
      return {
        iconList: [],
        recommendList: [],
        swiperList: [],
        weekendList: [],
        footerList: {}
      }
    },
    mounted() {
      HomeApi.getHome().then(res => {
        let data = res.data.data
        if (data) {
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.swiperList = data.swiperList
          this.weekendList = data.weekendList
          this.footerList = data.footerList
        }
        console.log(res)
      })

    }

  }
</script>
<style lang="stylus" scoped>

</style>
