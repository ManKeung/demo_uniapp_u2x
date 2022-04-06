<template><h1 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h1>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>目录结构一般是团队规定，这里不做统一要求。</p>
</div>
<code-type title="示例">
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>vite_vue_ts // 项目根
├── .husky // git规范
│   ├── _
│   ├── commit-msg
│   └── pre-commit
├── .vscode // ide设置
│   ├── extensions.json
│   └── settings.json
├── config // vite配置
│   ├── plugins
│   ├── build.ts
│   ├── css.ts
│   ├── index.ts
│   ├── resolve.ts
│   └── server.ts
├── mock // 模拟数据
│   └── home.ts
├── public // 静态目录
│   └── favicon.ico
├── src // 源码
│   ├── assets
│   ├── components
│   ├── config
│   ├── directives
│   ├── global
│   ├── http
│   ├── icons
│   ├── lang
│   ├── mixins
│   ├── pages
│   ├── routers
│   ├── store
│   ├── style
│   ├── utils
│   ├── vuex
│   ├── App.vue
│   ├── env.d.ts
│   ├── index.d.ts
│   └── main.ts
├── templates // 模板生成
│   ├── component
│   ├── store
│   └── utils.js
├── types // ts类型
│   ├── auto-imports.d.ts
│   └── components.d.ts
├── .editorconfig // 编码规范
├── .env.dev // 环境设置
├── .env.prod
├── .env.test
├── .eslintignore
├── .eslintrc.js // eslint设置
├── .prettierignore
├── .prettierrc.js // 风格设置
├── .stylelintignore
├── .stylelintrc.js // 样式统一
├── README.md //说明问答
├── commitlint.config.js // 配置信息
├── index.html
├── package.json // 包管理
├── plopfile.js
├── pnpm-lock.yaml
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br></div></div></code-type></template>
