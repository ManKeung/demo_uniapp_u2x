/**
 * 请求拦截
 * @param {Object} http
 */
import CONFIG from '@/common/config.js'

module.exports = vm => {
  uni.$u.http.interceptors.request.use(
    config => {
      // 可使用async await 做异步操作
      uni.showLoading({
        title: '加载中...',
        mask: true
      })

      const {
        tenant_id = '',
        token = '',
        device_type = '',
        task_id = ''
      } = uni.getStorageSync(CONFIG.app) || {}
      let { data = {}, header = {} } = config
      header = {
        ...header,
        'Tenant-Id': tenant_id,
        Authorization: token,
        'XX-Device-Type': device_type
      }

      data = {
        ...data,
        task_id
      }

      config.header = header
      config.data = data

      // 可以在此通过vm引用vuex中的变量，具体值在vm.$store.state中
      // console.log(vm.$store.state);
      return config
    },
    error => {
      // 可使用async await 做异步操作
      uni.hideLoading()
      uni.$u.toast(error.errMsg ?? error)
      return Promise.reject(error)
    }
  )
}
