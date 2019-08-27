<template>
    <div>
        <ShopHeader/>
            <div class="tab">
                <div class="tab-item">
                    <router-link to="/Shop/goods" replace>点餐</router-link>
                </div>
                <div class="tab-item">
                    <router-link to="/Shop/ratings" replace>评价</router-link>
                </div>
                 <div class="tab-item">
                    <router-link to="/Shop/info" replace>商家</router-link>
                </div>
            </div>
            <keep-alive>
                <!-- 缓存路由状态 可以重复使用后台获取的数据 -->
             <router-view></router-view>
            </keep-alive>
           
    </div>
</template>

<script>
import ShopHeader from '../../components/ShopHeader/ShopHeader'
export default {
    mounted() {
        this.$store.dispatch('reqShopInfo')
    },
    components:{
        ShopHeader
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .tab
    height 40px
    line-height 40px
    background #fff
    bottom-border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      float left
      width: 33.33333%
      text-align center
      font-size 14px
      color rgb(77, 85, 93)
      a
        display block
        position relative
        &.router-link-active
          color #02a774
          &::after
            content ''
            position absolute
            left 50%
            bottom 1px
            width 35px
            height 2px
            transform translateX(-50%)
            background #02a774
</style>