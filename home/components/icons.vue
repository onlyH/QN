<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(pag,index) in pages" :key="index">
                <div class="icon" v-for="(item,index) in pag" :key="index">
                    <div class="icon-img">
                        <img :src="item.imgUrl" alt="" class="icon-img-content">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>


    </div>
</template>
<script>
    export default {
        name: 'HomeIcons',
        props: {
            content: Array
        },
        data() {
            return {
                swiperOption: {
                    autoplay: false
                },
            }
        },
        computed: {
            pages() {
                const pages = []
                this.content.forEach((item, index) => {
                    const page = Math.floor(index / 8)
                    if (!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .icons >>> .swiper-container
        height: 0
        padding-bottom: 50%

    .icons
        margin-top: .1rem

        .icon
            position: relative
            overflow: hidden
            float: left
            width: 25%
            height: 0
            padding-bottom: 25%

            .icon-img
                position: absolute
                top: 0
                left: 0
                right: 0
                bottom: .44rem
                box-sizing: border-box
                padding: .1rem

                .icon-img-content
                    display: block
                    margin: 0 auto
                    height: 100%

            .icon-desc
                position: absolute
                left: 0
                right: 0
                bottom: 0
                height: .44rem
                line-height: .44rem
                text-align: center
                color: #212121
</style>
