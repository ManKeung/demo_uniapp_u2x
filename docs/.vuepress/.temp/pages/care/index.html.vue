<template><h1 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h1>
<h2 id="git-commit规范" tabindex="-1"><a class="header-anchor" href="#git-commit规范" aria-hidden="true">#</a> git commit规范</h2>
<p><strong>提交格式（注意冒号后面有空格）</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">&lt;</span>type<span class="token operator">></span>: <span class="token operator">&lt;</span>subject<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="常用的type" tabindex="-1"><a class="header-anchor" href="#常用的type" aria-hidden="true">#</a> 常用的type</h4>
<ul>
<li>文件位置：commitlint.config.js</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>                <span class="token string">'dev'</span><span class="token punctuation">,</span> <span class="token comment">// 开发中</span>
                <span class="token string">'feat'</span><span class="token punctuation">,</span> <span class="token comment">// 新特性</span>
                <span class="token string">'improvement'</span><span class="token punctuation">,</span> <span class="token comment">// 加强现有特性</span>
                <span class="token string">'fix'</span><span class="token punctuation">,</span> <span class="token comment">// 修补bug</span>
                <span class="token string">'refactor'</span><span class="token punctuation">,</span> <span class="token comment">// 重构</span>
                <span class="token string">'docs'</span><span class="token punctuation">,</span> <span class="token comment">// 文档</span>
                <span class="token string">'test'</span><span class="token punctuation">,</span> <span class="token comment">// 单元测试</span>
                <span class="token string">'config'</span><span class="token punctuation">,</span> <span class="token comment">// 配置文件</span>
                <span class="token string">'style'</span><span class="token punctuation">,</span> <span class="token comment">// 格式需改</span>
                <span class="token string">'perf'</span><span class="token punctuation">,</span> <span class="token comment">// 性能提升</span>
                <span class="token string">'ci'</span><span class="token punctuation">,</span> <span class="token comment">// ci 主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交</span>
                <span class="token string">'revert'</span><span class="token punctuation">,</span> <span class="token comment">// 版本回退</span>
                <span class="token string">'chore'</span><span class="token punctuation">,</span> <span class="token comment">// 其他修改</span>
				<span class="token string">'scope'</span> <span class="token comment">// commit 影响的范围（选填）, 比如: route, component, utils, build</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h4 id="举例" tabindex="-1"><a class="header-anchor" href="#举例" aria-hidden="true">#</a> 举例</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> commit -m <span class="token string">'dev: 项目初始化'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="h5提供nprogress功能" tabindex="-1"><a class="header-anchor" href="#h5提供nprogress功能" aria-hidden="true">#</a> h5提供nprogress功能</h2>
<ul>
<li>文件位置：router/index.js</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * @Author: ManKeung
 * <span class="token keyword">@description</span>: 路由配置
 */</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
  RouterMount<span class="token punctuation">,</span>
  createRouter
  <span class="token comment">// runtimeQuit</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'uni-simple-router'</span>

<span class="token comment">// #ifdef H5</span>
<span class="token keyword">import</span> NProgress <span class="token keyword">from</span> <span class="token string">'nprogress'</span>
<span class="token comment">// #endif</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">platform</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_PLATFORM</span><span class="token punctuation">,</span>
  <span class="token comment">// 优雅解锁</span>
  <span class="token function-variable function">routerErrorEach</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> router</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      router<span class="token punctuation">.</span>$lockStatus <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// #ifdef APP-PLUS</span>
    <span class="token comment">// 简易定位</span>
    <span class="token comment">// if (type === 3) {</span>
    <span class="token comment">// 	router.$lockStatus = false;</span>
    <span class="token comment">// 	uni.showModal({</span>
    <span class="token comment">// 		title: '提示',</span>
    <span class="token comment">// 		content: '您确定要退出应用吗？',</span>
    <span class="token comment">// 		success: function(res) {</span>
    <span class="token comment">// 			if (res.confirm) {</span>
    <span class="token comment">// 				plus.runtime.quit();</span>
    <span class="token comment">// 			}</span>
    <span class="token comment">// 		}</span>
    <span class="token comment">// 	})</span>
    <span class="token comment">// }</span>
    <span class="token comment">// 更精准定位</span>
    <span class="token comment">// if (error.type === 3) {</span>
    <span class="token comment">// 	router.$lockStatus = false</span>
    <span class="token comment">// 	const pages = getCurrentPages()</span>
    <span class="token comment">// 	const currentPage = pages[pages.length - 1]</span>
    <span class="token comment">// 	if (level == 1 &amp;&amp; args.uniActualData.from === 'backbutton') {</span>
    <span class="token comment">// 		if (currentPage.$page.meta.isQuit) {</span>
    <span class="token comment">// 			runtimeQuit()</span>
    <span class="token comment">// 		}</span>
    <span class="token comment">// 	}</span>
    <span class="token comment">// }</span>
    <span class="token comment">// #endif</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span><span class="token constant">ROUTES</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'*'</span><span class="token punctuation">,</span>
      <span class="token function-variable function">redirect</span><span class="token operator">:</span> <span class="token parameter">to</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'404'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 动态改变参数</span>
  <span class="token literal-property property">beforeProxyHooks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">options<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">[</span>router<span class="token punctuation">.</span>currentRoute<span class="token punctuation">.</span>query<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>options<span class="token punctuation">]</span><span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> args <span class="token operator">=</span> options <span class="token operator">||</span> router<span class="token punctuation">.</span>currentRoute<span class="token punctuation">.</span>query
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">[</span>args<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//全局路由前置守卫</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// #ifdef H5</span>
  NProgress<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">showSpinner</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  NProgress<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// #endif</span>

  <span class="token comment">// 取消上一页面接口请求</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>taskArr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>taskArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">task<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      task<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">delete</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>taskArr<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 全局路由后置守卫</span>
router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// #ifdef H5</span>
  NProgress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// #endif</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> router<span class="token punctuation">,</span> RouterMount <span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br></div></div></template>
