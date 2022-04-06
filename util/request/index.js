// 初始化请求配置
uni.$u.http.setConfig(defaultConfig => {
  /* defaultConfig 为默认全局配置 */
  defaultConfig.baseURL = process.uniEnv.baseUrl /* 根域名 */
  // 处理路由跳转后取消上一个页面的请求
  defaultConfig.getTask = (task, _config) => {
    // 没有默认空数组
    if (!process.env.taskArr) process.env.taskArr = []
    process.env.taskArr.push(task)
  }

  return defaultConfig
})

module.exports = vm => {
  require('./requestInterceptors')(vm)
  require('./responseInterceptors')(vm)
}
