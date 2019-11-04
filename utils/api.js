import {get, post} from '../axios'

let base_api = process.env.VUE_APP_HOST ? process.env.VUE_APP_HOST : '......'
let city_api = process.env.VUE_APP_CITY ? process.env.VUE_APP_CITY : '......'
let detail_api = process.env.VUE_APP_DETAIL ? process.env.VUE_APP_DETAIL : '......'


export default {
  getHome() {
    return get(`${base_api}`)
  },
  getCity() {
    return get(`${city_api}`)
  },
  getDetail() {
    return get(`${detail_api}`)
  }
}
