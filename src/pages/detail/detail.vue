<template>
  <div>
    <banner/>
    <detailHeader/>
    <detailList :content="detailList"/>
  </div>
</template>

<script>
  import banner from './components/banner'
  import detailHeader from './components/header'
  import detailList from './components/list'
  import detailApi from '../../../utils/api'

  export default {
    name: "detail",
    components: {banner,detailHeader,detailList},
    data() {
      return {
        detailList:[]
      }
    },
    created() {
      detailApi.getDetail().then(res=> {
        this.detailList = res.data.data.categoryList
      })
    }
  }
</script>

<style scoped lang="stylus">

</style>
