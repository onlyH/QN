<template>
  <div class="container" @click="closeSwiper">
    <div class="wrapper">
      <swiper
          :options="swiperOption"
          v-if="content.length"
          ref="mySwiper"
      />
      <swiper-slide
          v-for="item of content"
          :key="item.id"
      >
        <img
            class="gallary-img"
            :src="item.imgUrl"
        />
      </swiper-slide>
      <div
          class="swiper-pagination"
          slot="pagination"
      ></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "gallary",
    props: {
      content: {
        type: Array
      }
    },
    data() {
      return {
        swiperOption: {
          loop: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            paginationType: 'fraction',
            observeParents: true,
            observer: true
          },
        },
      }
    },
    methods:{
      closeSwiper() {
        this.$emit('close')
      }
    }
  }
</script>

<style scoped lang="stylus">
  .container >>> .swiper-pagination
    overflow: hidden
  .container
    display: flex
    flex-direction: column
    justify-content center
    z-index 99
    position: fixed
    left: 0
    right: 0
    bottom: 0
    background-color: #000
    height: 100%


    .wrapper
      background: #fff
      height: 0
      width: 100%
      padding-bottom 100%

      .gallary-img
        width: 100%

      .swiper-pagination
        color: #fff
</style>
