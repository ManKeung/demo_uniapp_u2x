# 开始

## 环境准备

::: warning 注意
建议安装能使您开发更方便快捷，并非必须安装（因HBuilder内包含环境编译）
:::

本地环境建议安装[npm](https://www.npmjs.com/)、[Node.js](https://nodejs.org/en/)和[Git](https://git-scm.com/)

## 工具配置

HBuilder是HBuilderX(推荐)的话，可以安装以下工具来提高开发效率及代码格式化

+ [App真机运行]
+ [eslint-plugin-vue]
+ [Git插件]
+ [less插件]
+ [scss/sass编译]
+ [typescript语言服务]
+ [uni-app编译]
+ [内置浏览器]
+ [内置终端]

## 代码获取

因国内github访问比较慢，您可以尝试用Gitee clone下来即可。

```bash
git clone https://gitee.com/mankeung/demo_uniapp_u2x.git
```

## 安装

### 安装Node.js

如果您电脑未安装[Node.js](https://nodejs.org/en/)，请安装它。

#### 验证

```bash
# 出现相应npm版本即可
npm -v
# 出现相应node版本即可
node -v
```

> 如果你需要同时存在多个node版本，可以使用[Nvm](https://github.com/nvm-sh/nvm)或者其他工具进行 Node.js 进行版本管理。

### 其他

保证本地安装HBuilder，如果你需要调试小程序请按官方要求安装对应小程序并进行配置。

## 目录说明

```text
.
├── .husky // git钩子
├── common // 项目相关公共js方法
├── components // 项目中使用到的功能封装
├── docs // 在线文档
├── hybrid // app静态页面存放
├── mixins // 公共混合
├── pages // 公共混合
├── router // 路由
├── scripts // 自定义命令脚本
├── static // 静态资源
├── store // 状态管理
├── style // 公共样式
├── uni_modules // uview-ui
├── util // 工具
├── .env.dev.js // 开发环境
├── .env.js
├── .env.prod.js // 生产环境
├── .env.test.js // 测试环境
├── .eslintignore // eslint忽略
├── .eslintrc.js // eslint配置
├── .npmrc
├── App.vue // vue项目入口文件
├── LICENSE // 许可证
├── README.md // 说明文档
├── commitlint.config.js // git提交规范配置
├── main.js // 公共js
├── manifest.json // uniapp项目配置文件
├── package.json
├── pages.json // 页面路由配置页
├── pnpm-lock.yaml
├── template.h5.html
├── uni.scss // uniapp内置的常用样式变量
└── vue.config.js
```