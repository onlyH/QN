<template>
  <div>
    <div
        v-for="(item,index) in content"
        class="item"
        :key="index"
    >
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}

      </div>
      <div v-if="item.children" class="item-children">
        <detailList :content="item.children"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailList",
    props: {
      content: {
        type: Array
      }
    }
  }
</script>

<style scoped lang="stylus">
  .item-title
    line-height: .8rem
    font-size .32rem
    padding: 0 .2rem

    .item-title-icon
      display: inline-block
      width: .32rem
      height: .36rem
      background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
      margin-right: .1rem;
      background-size: .4rem 3rem;

  .item-children
    padding: 0 .2rem
</style>
