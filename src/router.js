import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home/home'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/city',
            name: 'city',
            component: () =>
                import ('./pages/city/city')
        },
      {
        path:'/detail/:id',
        name:'detail',
        component:()=>import('./pages/detail/detail')
      }
    ]
})
