<template>
  <div>
    <div class="info">
      <span>票面价</span>
      是指通过景区指定窗口售卖的纸质门票上标注的价格
    </div>
    <div class="footer-wrapper">
      <ul class="main_nav">
        <li v-for="(item,index) in content.reserve"
            :key="index"
            class="flight">
          <a :href="item.url">
            <span class="iconfont"></span>
            <span class="title">{{item.name}}</span>
          </a>
        </li>
      </ul>
      <ul class="about_nav">
        <li v-for="(item,index) in content.admin"
            :key="index">
          <a href="">{{item.name}}</a>
        </li>
      </ul>
      <ul class="mobile_nav">
        <li v-for="(item,index) in content.mobile"
            :key="index">
          <a :href="item.url"
             :style="{color:(item.id ===2 ? '#25a4bb' :'')}">{{item.name}}</a>
        </li>
      </ul>
      <div class="copyright">
        <span>{{content.copyright}}</span>
        <a :href="content.copyrightUrl">{{content.copyrightTxt}}</a>
      </div>
    </div>

  </div>

</template>
<script>
  export default {
    name: 'HomeFooter',
    props: {
      content: Object
    }
  }
</script>
<style lang="stylus" scoped>
  @import "~customCSS/mixins.styl"
  .info
    margin-left: .3rem
    color-21()
    bgc-fff()
    font-size: .24rem
    margin-top: .1rem
    padding: .14rem .1rem
    ine-height: .32rem

  .footer-wrapper
    background #f3f3f3

    .main_nav
      position: relative
      width: 300px
      height: 25px
      margin: 0 auto
      padding: 10px 10px 0 10px
      overflow: hidden

      .flight
        margin: 0
        padding-left: 10px
        height: 31px
        width: 65px
        float: left
        position: relative

        a
          display: block
          height: 22px
          width: 100%
          font-size: 12px

          .title
            float: left
            display: inline-block
            margin: 3px 0 0 5px
            color: #9e9e9e
            border-bottom: 1px solid #acacac
            font-size: 12px

    .about_nav
      width: 100%
      height: 39px
      border-bottom: 1px solid #cacaca

      li
        float: left
        padding-left: 20px

        a
          position: relative
          font-size: 14px
          line-height: 39px

    .mobile_nav
      padding: 10px 0 0 0
      text-align: center

      li
        display: inline-block
        margin: 0 15px

        a
          color: black

    .copyright
      color: #9e9e9e
      text-align: center
      font-size: 14px
      padding: 10px

      a
        color: #9e9e9e

</style>
