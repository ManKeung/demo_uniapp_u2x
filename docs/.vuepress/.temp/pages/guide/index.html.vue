<template><h1 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h1>
<h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>建议安装能使您开发更方便快捷，并非必须安装（因HBuilder内包含环境编译）</p>
</div>
<p>本地环境建议安装<a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">npm<ExternalLinkIcon/></a>、<a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js<ExternalLinkIcon/></a>和<a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git<ExternalLinkIcon/></a></p>
<h2 id="工具配置" tabindex="-1"><a class="header-anchor" href="#工具配置" aria-hidden="true">#</a> 工具配置</h2>
<p>HBuilder是HBuilderX(推荐)的话，可以安装以下工具来提高开发效率及代码格式化</p>
<ul>
<li>[App真机运行]</li>
<li>[eslint-plugin-vue]</li>
<li>[Git插件]</li>
<li>[less插件]</li>
<li>[scss/sass编译]</li>
<li>[typescript语言服务]</li>
<li>[uni-app编译]</li>
<li>[内置浏览器]</li>
<li>[内置终端]</li>
</ul>
<h2 id="代码获取" tabindex="-1"><a class="header-anchor" href="#代码获取" aria-hidden="true">#</a> 代码获取</h2>
<p>因国内github访问比较慢，您可以尝试用Gitee clone下来即可。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone https://gitee.com/mankeung/demo_uniapp_u2x.git
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<h3 id="安装node-js" tabindex="-1"><a class="header-anchor" href="#安装node-js" aria-hidden="true">#</a> 安装Node.js</h3>
<p>如果您电脑未安装<a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js<ExternalLinkIcon/></a>，请安装它。</p>
<h4 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 出现相应npm版本即可</span>
<span class="token function">npm</span> -v
<span class="token comment"># 出现相应node版本即可</span>
<span class="token function">node</span> -v
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote>
<p>如果你需要同时存在多个node版本，可以使用<a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noopener noreferrer">Nvm<ExternalLinkIcon/></a>或者其他工具进行 Node.js 进行版本管理。</p>
</blockquote>
<h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h3>
<p>保证本地安装HBuilder，如果你需要调试小程序请按官方要求安装对应小程序并进行配置。</p>
<h2 id="目录说明" tabindex="-1"><a class="header-anchor" href="#目录说明" aria-hidden="true">#</a> 目录说明</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>.
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div></template>
