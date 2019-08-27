// 直接更新state的多个方法对象
import Vue from 'vue'
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_INFO,
    RECEIVE_RATINGS,
    RECEIVE_GOODS,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,
    CLEAR_CART,
    SEARCH_SHOPS
} from './mutation-types'
export default{
    [RECEIVE_ADDRESS] (state, {address}) {
        state.address = address
    },
    [RECEIVE_CATEGORYS] (state, {categorys}) {
        state.categorys = categorys
    },
    [RECEIVE_SHOPS] (state, {shops}) {
        state.shops = shops
    },
    [RECEIVE_USER_INFO] (state, {userInfo}) {
        state.userInfo = userInfo
    },
    [RESET_USER_INFO] (state) {
        state.userInfo = {}
    },
    [RECEIVE_INFO] (state, {info}) {
        state.info = info
        },
    [RECEIVE_RATINGS] (state, {ratings}) {
        state.ratings = ratings
        },
    [RECEIVE_GOODS] (state, {goods}) {
        state.goods = goods
        },
    [INCREMENT_FOOD_COUNT] (state, {food}) {
        if (!food.count) { // 第一次增加
            // food.count = 1 新增屬性 (沒有數據綁定)
            // vue添加數據的方法 先引入vue vue.set(對象，屬性名(字符串),屬性值) 可以讓新增的數據也有數據綁定
            Vue.set(food, 'count', 1)
            // 将food添加到cartFoods中
            state.cartFoods.push(food)
        } else {
            food.count++
        }
        },
    [DECREMENT_FOOD_COUNT] (state, {food}) {
        if (food.count) {
            food.count--
            // 将food从cartFoods中移除
            if (food.count === 0) {
                state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
            }
        }
    },
    [CLEAR_CART] (state) {
        // 清空food中的count
        state.cartFoods.forEach(food => {
            food.count = 0
        })
        // 移除购物车中的所有购物项
        state.cartFoods = []
    },
    // 根据关键字搜索店铺
    [SEARCH_SHOPS] (state, {searchShops}) {
        state.searchShops = searchShops
        }
}
