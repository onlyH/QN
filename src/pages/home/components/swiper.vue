<template>
    <div class="wrapper">
        <swiper :options="swiperOption"
                v-if="content.length"
                ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="item of content" :key="item.id">
                <img class="custom-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
            <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
            <!--<div class="swiper-button-next" slot="button-next"></div>-->
            <!--<div class="swiper-scrollbar" slot="scrollbar"></div>-->
        </swiper>
    </div>
</template>
<script>
    export default {
        name: 'HomeSwiper',
        props: {
            content: Array
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
                        el: '.swiper-pagination'
                    },
                },
        }
        },
    }
</script>
<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background: #fff !important

    .wrapper
        width: 100%
        height: 0
        overflow: hidden
        padding-bottom: 29%

        .custom-img
            width 100%
</style>
