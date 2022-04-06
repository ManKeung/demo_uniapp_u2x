// 主要设置app开发模式
// 设置环境变量

const ENV = {
  DEV: 'dev', // 开发模式
  TEST: 'test', // 测试环境
  PROD: 'prod' // 生成环境
}

// 当前环境变量
let ENV_KEY = ''

// app手动设置环境变量
// #ifdef APP-PLUS
ENV_KEY = ENV.DEV
// #endif

// h5 微信小程序开发环境
// #ifdef H5-DEV || WX-DEV
ENV_KEY = ENV.DEV
// #endif

// h5 微信小程序测试环境
// #ifdef H5-TEST || WX-TEST
ENV_KEY = ENV.TEST
// #endif

// h5 微信小程序生产环境
// #ifdef H5-PROD || WX-PROD
ENV_KEY = ENV.PROD
// #endif

// 配置信息
let config = {}
if (ENV_KEY === 'dev') config = require('./.env.dev')
if (ENV_KEY === 'test') config = require('./.env.test')
if (ENV_KEY === 'prod') config = require('./.env.prod')

// 设置版本号
config.version = 'v20220113'

process.uniEnv = {}

for (const key in config) process.uniEnv[key] = config[key]
