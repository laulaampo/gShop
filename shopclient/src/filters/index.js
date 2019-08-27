import Vue from 'vue'
import moment from 'moment'
// 自定义过滤
Vue.filter('date-format', function (value, formatStr) {
    return moment(value).format('YYYY-MM-DD HH:mm:ss' || formatStr)
 })
