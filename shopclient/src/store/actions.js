// 简介更新
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
import {
    reqAddress,
    reqFoodCategorys,
    reqShops,
    reqUserInfo,
    reqLogout,
    reqShopInfo,
    reqShopGoods,
    reqShopRatings,
    reqSearchShop

} from '../api/index'
export default{
    // 异步获取地址
   async getAddress ({commit, state}) {
        const geohash = state.latitude + ',' + state.longitude
        // 发送异步ajax请求

        const result = await reqAddress(geohash)
        if (result.code === 0) {
            const address = result.data
            commit(RECEIVE_ADDRESS, {address})
        }
        // 根据结果提交一个mutation
    },
    // 异步获取食品分类列表
    async getCategorys ({commit}) {
        // 发送异步ajax请求
        const result = await reqFoodCategorys()
        // 提交一个mutation
        if (result.code === 0) {
          const categorys = result.data
          commit(RECEIVE_CATEGORYS, {categorys})
        }
      },
    // 异步获取商家列表
    async getShops ({commit, state}) {
        // 发送异步ajax请求
        const {longitude, latitude} = state
        const result = await reqShops(longitude, latitude)
        // 提交一个mutation
        if (result.code === 0) {
          const shops = result.data
          commit(RECEIVE_SHOPS, {shops})
        }
      },
      // 同步记录用户信息
      recordUser ({commit}, userInfo) {
        commit(RECEIVE_USER_INFO, {userInfo})
      },
      // 异步获取用户信息
     async getUserInfo ({commit}) {
       const result = await reqUserInfo()
       if (result.code === 0) {
         const userInfo = result.data
         commit(RECEIVE_USER_INFO, {userInfo})
       }
      },
      // 异步登出
      async logout ({commit}) {
        const result = await reqLogout()
        if (result.code === 0) {
          commit(RESET_USER_INFO)
        }
      },
      // 异步获取商家信息
async reqShopInfo ({commit}) {
  const result = await reqShopInfo()
  if (result.code === 0) {
  const info = result.data
  info.score = 3.5
  commit(RECEIVE_INFO, {info})
  }
  },
  // 异步获取商家评价列表
  async getShopRatings ({commit}, callback) {
  const result = await reqShopRatings()
  if (result.code === 0) {
  const ratings = result.data
  commit(RECEIVE_RATINGS, {ratings})
    // 数据更新成功 通知一下组件shopGoods
    callback && callback()
  }
  },
  // 异步获取商家商品列表
  async getShopGoods ({commit}, callback) {
  const result = await reqShopGoods()
  if (result.code === 0) {
  const goods = result.data
  commit(RECEIVE_GOODS, {goods})
  // 数据更新成功 通知一下组件shopGoods
    callback && callback()
  }
  },
  // 同步處理food里的count的加減
  updateFoodCount ({commit}, {food, isAdd}) {
    if (isAdd) {
      commit(INCREMENT_FOOD_COUNT, {food})
    } else {
      commit(DECREMENT_FOOD_COUNT, {food})
    }
  },
  // 同步清空购物车
  clearCart ({commit}) {
    commit(CLEAR_CART)
  },
  // 根据关键字搜索店铺
  async reqSearchShop ({commit, state}, keyword) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqSearchShop(geohash, keyword)
    if (result.code === 0) {
      const searchShops = result.data
      commit(SEARCH_SHOPS, {searchShops})
    }
  }
}
