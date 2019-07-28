<template>
  <div class="city">
    <div class="header">
      <router-link to="/" class="iconfont icon-fanhui fanhui "></router-link>
      <p>城市选择</p>
    </div>
    <div class="tab">
      <ul>
        <li v-for="(item,index) in cityList"
            :class="light === index ? 'active' :'' "
            @click="active(index)">
          {{item.name}}
        </li>
      </ul>
    </div>
    <!--热门城市-->
    <div class="hot">
      <h2 class="hot-title">热门城市</h2>
    </div>
    <ul class="hot-ul">
      <li v-for="(item,index) in hotCities"
          :key="item.id"
          @click="hasHandleChange(item.name)">
        <a>{{item.name}}</a>
      </li>
    </ul>
    <!--字母排序-->
    <div class="hot">
      <h2 class="hot-title">字母排序</h2>
    </div>
    <ul class="sort-ul">
      <li v-for="(item,key) in cities">
        <a :href="item.spell">{{key}}</a>
      </li>
    </ul>

    <!--排序序列-->
    <!--热门城市-->
    <div v-for="(item,key) in cities">
      <div class="hot">
        <h2 class="hot-title">{{key}}</h2>
      </div>
      <ul class="hot-ul">
        <li v-for="(orgin,index) in item"
            @click="hasHandleChange(orgin.name)">
          <a>{{orgin.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import cityApi from './../../../utils/api'

  export default {
    name: "city",
    data() {
      return {
        hotCities: [],
        cities: {},
        light: 0,
        cityList: [
          {
            name: '境内',
            id: 1
          }, {
            name: '境外.港澳台',
            id: 2
          }
        ]
      }
    },
    methods: {
      active(index) {
        this.light = index
      },
      hasHandleChange(value) {
        this.$store.dispatch('changHandle',value)
        this.$router.push('/')
      }
    },
    mounted() {
      cityApi.getCity().then(res => {
        let data = res.data.data
        this.hotCities = data.hotCities
        this.cities = data.cities
        console.log(data)
      })
    }
  }
</script>

<style scoped lang="stylus">
  @import "~customCSS/mixins.styl"
  .city
    position: relative
    top: 0
    left: 0
    width: 100%
    min-height: 100%
    height: 100%;
    bgc-f5()

    .header
      height: .86rem
      line-height: .68rem
      border-bottom: 0
      background-color: #00bcd4

      .fanhui
        position: absolute
        font-size .36rem
        text-align: center
        left: 0
        top: 0
        width: .8rem
        height: .88rem
        line-height: .88rem
        color: #fff

      p
        overflow: hidden
        margin: 0 1rem
        height: .88rem
        line-height: .88rem
        font-size .32rem
        color: #ffffff
        text-align: center
        ellipsis()

    .tab
      height: .4rem
      line-height: .4rem
      background-color: #00bcd4
      padding: .2rem 1rem
      color: #fff

      ul
        border: 1px solid #ffffff
        border-radius .03rem
        overflow: hidden
        zoom: 1

        li
          font-size .28rem
          background-color: #00bcd4
          width: 50%
          float: left
          color: #fff
          text-align: center

        .active
          background-color: #fff
          color: #00bcd4

    .hot
      .hot-title
        font-size .24rem
        margin: .24rem

    .hot-ul
      bgc-fff()
      position: relative
      overflow: hidden

      &:before
        content: '';
        position: absolute;
        width: 33.3%;
        left: 33.3%;
        height: 100%;
        border-left: .02rem solid #ddd;
        border-right: .02rem solid #ddd;

      li
        width: 33.3%
        height: .9rem
        line-height: .9rem
        font-size .28rem
        text-align: center
        border-bottom: .02rem solid #ddd
        margin-bottom: -1px
        float: left
        position: relative
        z-index: 10
        color-21()

        &:last-child
          border-right: none

        a
          color-21()
          display: block
          overflow: hidden
          font-size .28rem
          ellipsis()

    .sort-ul
      position: relative
      overflow: hidden
      padding: .3rem 0
      bgc-fff()

      li
        width: 16.6%
        height: .9rem
        line-height: .9rem
        color-21()
        font-size .28rem
        float: left
        text-align: center
        position: relative

        a
          font-size .28rem
          display: block
          color-21()
          ellipsis()
          overflow: hidden

</style>
