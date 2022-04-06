# 构建部署

## 环境变量配置

由于不同环境有不同的配置信息，所以这里就需要更具不同环境配置不同信息，避免每次构建时修改配置信息。

### 环境变量介绍

1. `.env.dev.js`

开发环境配置

2. `.env.test.js`

测试环境配置

3. `.env.prod.js`

生成环境

> 可根据项目情况新增环境变量

### HBuilderX配置

可以看[官方文档](https://uniapp.dcloud.io/collocation/package.html)进行了解，本项目只配置了h5与微信小程序，由于官方不支持app。

@[code{33-93} ts](@/package.json)


### 运行

#### 开发运行

本地运行时，点击运行选择对应的环境配置运行。

![示例图](/assets/dev.png)

#### 发布运行

发布时，点击发行选择自定义发行，选择对应的环境配置发布。

![示例图](/assets/build.png)

#### 注意事项

由于uniapp不支持app环境配置，这时需要自己手动修改环境变量。

@[code js{15}](@/.env.js)

> 修改15行代对应需要的开发环境

## 使用

示例代码

```js
// 获取所有
process.uniEnv
```