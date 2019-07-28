import {get, post} from '../axios'

let base_api = process.env.VUE_APP_HOST ? process.env.VUE_APP_HOST : '......'
let city_api = process.env.VUE_APP_CITY ? process.env.VUE_APP_CITY : '......'


export default {
  getHome() {
    return get(`${base_api}`)
  },
  getCity() {
    return get(`${city_api}`)
  }
}
