// 路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入组件

// import MSite from '../pages/MSite/MSite.vue'
// import Order from '../pages/Order/Order.vue'
// import Search from '../pages/Search/Search.vue'
// import Profile from '../pages/Profile/Proile.vue'

import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
const MSite = () => import('../pages/MSite/MSite.vue')
const Order = () => import('../pages/Order/Order.vue')
const Search = () => import('../pages/Search/Search.vue')
const Profile = () => import('../pages/Profile/Proile.vue')
// 路由的懒加载
Vue.use(VueRouter)

export default new VueRouter({
    // 路由懒加载 路由数据太大 把组件分割成不同的包 需要用时才加载
    routes: [
        {
            path: '/MSite',
            component: MSite, // 返回路由组件的函数 只有执行函数才会加载路由组件 这个函数在请求对应路径时才会触发
            meta: {
                showFooter: true
            }
        },
        {
            path: '/Order',
            component: Order,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/Search',
            component: Search,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/Profile',
            component: Profile,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/Login',
            component: Login
        },
        {
            path: '/Shop',
            component: Shop,
            children: [
                {
                    path: '/Shop/goods',
                    component: ShopGoods
                },
                {
                    path: '/Shop/ratings',
                    component: ShopRatings
                },
                {
                    path: '/Shop/info',
                    component: ShopInfo
                },
                {
                    path: '',
                    redirect: '/shop/goods'
                  }
            ]
        }
    ]
})
