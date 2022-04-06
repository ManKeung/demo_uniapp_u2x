import Vue from 'vue'
import App from './App'

import { router, RouterMount } from './router'

// vuex
import store from './store'

// 引入全局uView
import uView from '@/uni_modules/uview-ui'

import mixin from './mixins'

Vue.prototype.$store = store

// 设置环境变量
import './.env.js'

Vue.config.productionTip = false

App.mpType = 'app'
Vue.use(uView)

// #ifdef MP
// 引入uView对小程序分享的mixin封装
const mpShare = require('@/uni_modules/uview-ui/libs/mixin/mpShare.js')
Vue.mixin(mpShare)
// #endif

Vue.mixin(mixin)

Vue.use(router)

const app = new Vue({
  store,
  ...App
})

// #ifdef H5
RouterMount(app, router, '#app')
// #endif

// #ifndef H5
app.$mount() // 为了兼容小程序及app端必须这样写才有效果
// #endif

// 引入请求封装
require('./util/request/index')(app)

console.log(process.uniEnv.version)
console.log(process.uniEnv)
console.log(process.env.VUE_APP_PLATFORM)