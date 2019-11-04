<template>
  <div>
    <router-link
        class="header-abs"
        to="/"
        tag="div"
        v-show="showAbs"
    >
      <div
          class="iconfont header-abs-back"
          @click="backHome"
      >&#xe624;
      </div>
    </router-link>
    <div
        class="header-fixed"
        v-show="!showAbs"
        :style="opacityStyle"
    >
      <router-link to="/">
        <div class="iconfont header-fixed-back">
          &#xe624;
        </div>
      </router-link>
      <p>景点详情</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailHeader",
    data() {
      return {
        showAbs: true,
        opacityStyle: {
          opacity: 0
        }
      }
    },
    created() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      backHome() {
        this.$router.push('/')
      },
      handleScroll() {
        let top = document.documentElement.scrollTop;
        if (top > 60) {
          if (top < 140) {
            const opacity = top / 140
            this.opacityStyle = {
              opacity
            }
          }

          this.showAbs = false
        } else {
          this.showAbs = true
        }
        // console.log(document.documentElement.scrollTop)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width .8rem
    height: .8rem
    line-height: .8rem
    border-radius .4rem
    background rgba(0, 0, 0, .8)

    .header-abs-back
      color: #ffffff
      font-size: .4rem
      text-align: center;

  .header-fixed
    position: fixed
    top: 0
    left: 0
    right: 0
    overflow: hidden
    height: .86rem
    line-height: .86rem
    text-align: center
    color: #ffffff
    background-color: #00bcd4
    font-size: .32rem
    z-index: 100

    .header-fixed-back
      color: #ffffff
      font-size: .4rem
      text-align: center;
      position: absolute


</style>
