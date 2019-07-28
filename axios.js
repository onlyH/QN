import axios from 'axios'
import router from 'vue-router'

const service = axios.create({
    timeout: 30000 //请求超时时间
})
// 添加request拦截器
/*
service.interceptors.request.use(config => {
    return config
}, error => {
    Promise.reject(error)
})
//添加response拦截器
service.interceptors.response.use(
    response => {
        let res = {}
        res.status = response.status
        res.data = response.data
        return res
    },
    error => {
        if (error.response && error.response.status == 404) {
            router.push('/index.vue')
        }
    }
)
*/


export function get(url, params = {}) {
    params.t = Date.now(); //get方法加一个时间参数,解决ie下可能缓存问题.
    return service({
        url: url,
        method: 'get',
        header: {},
        params
    })
}

export function post(url, data = {}) {
    //默认配置
    return service({
            url: url,
            method: 'post',
            header: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: JSON.stringify(data)
        }
    )
}

export function put(url, data = {}) {
    return service({
        url: url,
        method: 'put',
        header: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data: JSON.stringify(data)
    })
}


export function deletes(url) {
    return service({
        url: url,
        method: 'delete',
        header: {}
    })
}


export {service}
