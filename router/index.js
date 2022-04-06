/**
 * @Author: ManKeung
 * @description: 路由配置
 */

import {
  RouterMount,
  createRouter
  // runtimeQuit
} from 'uni-simple-router'

// #ifdef H5
import NProgress from 'nprogress'
// #endif

const router = createRouter({
  platform: process.env.VUE_APP_PLATFORM,
  // 优雅解锁
  routerErrorEach: (error, router) => {
    if (error.type === 3) {
      router.$lockStatus = false
    }

    // #ifdef APP-PLUS
    // 简易定位
    // if (type === 3) {
    // 	router.$lockStatus = false;
    // 	uni.showModal({
    // 		title: '提示',
    // 		content: '您确定要退出应用吗？',
    // 		success: function(res) {
    // 			if (res.confirm) {
    // 				plus.runtime.quit();
    // 			}
    // 		}
    // 	})
    // }
    // 更精准定位
    // if (error.type === 3) {
    // 	router.$lockStatus = false
    // 	const pages = getCurrentPages()
    // 	const currentPage = pages[pages.length - 1]
    // 	if (level == 1 && args.uniActualData.from === 'backbutton') {
    // 		if (currentPage.$page.meta.isQuit) {
    // 			runtimeQuit()
    // 		}
    // 	}
    // }
    // #endif
  },
  routes: [
    ...ROUTES,
    {
      path: '*',
      redirect: to => {
        return {
          name: '404'
        }
      }
    }
  ],
  // 动态改变参数
  beforeProxyHooks: {
    onLoad(options, next) {
      next([router.currentRoute.query])
    },
    onShow([options], next) {
      const args = options || router.currentRoute.query
      next([args])
    }
  }
})

//全局路由前置守卫
router.beforeEach((to, from, next) => {
  // #ifdef H5
  NProgress.configure({
    showSpinner: false
  })
  NProgress.start()
  // #endif

  // 取消上一页面接口请求
  if (process.env.taskArr) {
    process.env.taskArr.forEach((task, index) => {
      task.abort()
      delete process.env.taskArr[index]
    })
  }
  next()
})

// 全局路由后置守卫
router.afterEach((to, from) => {
  // #ifdef H5
  NProgress.done()
  // #endif
})

export { router, RouterMount }
