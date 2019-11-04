<template>
  <div>
    <div class="gap"></div>
    <div class="recommend-title">
      <span class="iconfont icon-aixin aixin"></span>
      猜你喜欢
    </div>
    <ul>

      <router-link
          class="item"
          v-for="(item,index) in content"
          :key="index"
          tag="li"
          :to="'/detail/' + item.id"
      >
        <div class="item-img-wrapper">
          <img :src="item.src" class="item-img">
        </div>
        <div class="like-img" v-if="item.use">{{item.use}}</div>
        <div class="like-img1" v-if="item.tomorrow">{{item.tomorrow}}</div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">
                        <span class="iconfont icon-jingdiananli_wujiaoxing_shoucanghou star"
                              v-for="core in item.core"></span>
            <span class="comment">{{item.comment}}</span>
          </p>
          <p class="item-price">
            <span class="money">{{item.money}}</span>起
            <span class="city">{{item.city}}</span>
          </p>
          <p class="future" v-if="item.future">{{item.future}}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'HomeRecommend',
    props: {
      content: Array
    }

  }
</script>
<style lang="stylus" scoped>
  .gap
    background: #f5f5f5
    height .2rem

  ul
    margin-left: .15rem

  .recommend-title
    margin-top .2rem
    line-height: .8rem
    background-color: #fff
    text-indent: .2rem
    color: #212121

    .aixin
      color: red

  .item
    overflow: hidden
    display: flex
    padding: .1rem 0
    position: relative
    border-bottom: 1px solid #e0e0e0

  .item-img
    width: 2rem
    height 2rem
    padding: .1rem

  .like-img
    background-image: url(https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png)
    position: absolute;
    top: .2rem;
    left: .1rem;
    width: 1.02rem;
    height: .38rem;
    background-size: 100%;
    color: #fff;
    font-size: .2rem;
    line-height: .38rem;
    text-indent: .04rem;

  .like-img1
    background-image: url(https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png)
    position: absolute;
    top: .2rem;
    left: .1rem;
    width: 1.02rem;
    height: .38rem;
    background-size: 100%;
    color: #fff;
    font-size: .2rem;
    line-height: .38rem;
    text-indent: .04rem;

  .item-info
    flex: 1
    padding: .1rem
    min-width: 0

    .item-title
      line-height: .54rem
      font-size: .32rem

    .item-desc
      color: #616161
      font-size: .24rem
      line-height: .34rem
      vertical-align: text-bottom

      .star
        color: #ffb436
        font-size .2rem

      .comment
        margin-left: .4rem

    .item-price
      line-height: .44rem
      margin-top: .16rem

      .money
        float: left
        color: #ff9300
        font-size: .4rem

      .city
        float right
        color: #616161
        font-size: .24rem
        line-height: .4rem
        padding-left .2rem

    .future
      display: inline-block
      margin-right: .24rem
      background: #fff9f9
      padding: .04rem .1rem
      color: #f55
      font-size: .24rem
      line-height: .34rem
      margin-top: .48rem
</style>
