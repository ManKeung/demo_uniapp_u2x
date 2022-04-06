<template><h1 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h1>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"uview-ui"</span><span class="token punctuation">,</span>
	<span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">"docs:dev"</span><span class="token operator">:</span> <span class="token string">"vuepress dev docs"</span><span class="token punctuation">,</span>
		<span class="token property">"docs:build"</span><span class="token operator">:</span> <span class="token string">"vuepress build docs"</span><span class="token punctuation">,</span>
		<span class="token property">"test"</span><span class="token operator">:</span> <span class="token string">"eslint . --fix"</span><span class="token punctuation">,</span>
		<span class="token property">"war"</span><span class="token operator">:</span> <span class="token string">"node ./scripts/war.js"</span><span class="token punctuation">,</span>
		<span class="token property">"prepare"</span><span class="token operator">:</span> <span class="token string">"node ./scripts/prepare.js"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">"warName"</span><span class="token operator">:</span> <span class="token string">"uview"</span><span class="token punctuation">,</span>
	<span class="token property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">"nprogress"</span><span class="token operator">:</span> <span class="token string">"^0.2.0"</span><span class="token punctuation">,</span>
		<span class="token property">"uni-read-pages"</span><span class="token operator">:</span> <span class="token string">"^1.0.5"</span><span class="token punctuation">,</span>
		<span class="token property">"uni-simple-router"</span><span class="token operator">:</span> <span class="token string">"^2.0.8-beta.3"</span><span class="token punctuation">,</span>
		<span class="token property">"vuepress"</span><span class="token operator">:</span> <span class="token string">"^2.0.0-beta.37"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">"@commitlint/cli"</span><span class="token operator">:</span> <span class="token string">"^16.1.0"</span><span class="token punctuation">,</span>
		<span class="token property">"@commitlint/config-conventional"</span><span class="token operator">:</span> <span class="token string">"^16.0.0"</span><span class="token punctuation">,</span>
		<span class="token property">"@snippetors/vuepress-plugin-code-copy"</span><span class="token operator">:</span> <span class="token string">"^1.1.2"</span><span class="token punctuation">,</span>
		<span class="token property">"@vuepress/plugin-git"</span><span class="token operator">:</span> <span class="token string">"^2.0.0-beta.37"</span><span class="token punctuation">,</span>
		<span class="token property">"@vuepress/plugin-register-components"</span><span class="token operator">:</span> <span class="token string">"^2.0.0-beta.37"</span><span class="token punctuation">,</span>
		<span class="token property">"@vuepress/plugin-search"</span><span class="token operator">:</span> <span class="token string">"^2.0.0-beta.37"</span><span class="token punctuation">,</span>
		<span class="token property">"chalk"</span><span class="token operator">:</span> <span class="token string">"4"</span><span class="token punctuation">,</span>
		<span class="token property">"enquirer"</span><span class="token operator">:</span> <span class="token string">"^2.3.6"</span><span class="token punctuation">,</span>
		<span class="token property">"eslint"</span><span class="token operator">:</span> <span class="token string">"^8.8.0"</span><span class="token punctuation">,</span>
		<span class="token property">"eslint-config-airbnb"</span><span class="token operator">:</span> <span class="token string">"^19.0.0"</span><span class="token punctuation">,</span>
		<span class="token property">"eslint-plugin-vue"</span><span class="token operator">:</span> <span class="token string">"^8.4.1"</span><span class="token punctuation">,</span>
		<span class="token property">"folder-zip-sync"</span><span class="token operator">:</span> <span class="token string">"^1.0.5"</span><span class="token punctuation">,</span>
		<span class="token property">"husky"</span><span class="token operator">:</span> <span class="token string">"^7.0.4"</span><span class="token punctuation">,</span>
		<span class="token property">"vite"</span><span class="token operator">:</span> <span class="token string">"2.8.2"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">"uni-app"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">"h5-dev"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"h5-develop"</span><span class="token punctuation">,</span>
				<span class="token property">"BROWSER"</span><span class="token operator">:</span> <span class="token string">"Chrome"</span><span class="token punctuation">,</span>
				<span class="token property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">"UNI_PLATFORM"</span><span class="token operator">:</span> <span class="token string">"h5"</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">"define"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">"H5-DEV"</span><span class="token operator">:</span> <span class="token boolean">true</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">"h5-test"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"h5-test"</span><span class="token punctuation">,</span>
				<span class="token property">"BROWSER"</span><span class="token operator">:</span> <span class="token string">"Chrome"</span><span class="token punctuation">,</span>
				<span class="token property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">"UNI_PLATFORM"</span><span class="token operator">:</span> <span class="token string">"h5"</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">"define"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">"H5-TEST"</span><span class="token operator">:</span> <span class="token boolean">true</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">"h5-prod"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"h5-production"</span><span class="token punctuation">,</span>
				<span class="token property">"BROWSER"</span><span class="token operator">:</span> <span class="token string">"Chrome"</span><span class="token punctuation">,</span>
				<span class="token property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">"UNI_PLATFORM"</span><span class="token operator">:</span> <span class="token string">"h5"</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">"define"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">"H5-PROD"</span><span class="token operator">:</span> <span class="token boolean">true</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">"wx-dev"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"微信小程序-develop"</span><span class="token punctuation">,</span>
				<span class="token property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">"UNI_PLATFORM"</span><span class="token operator">:</span> <span class="token string">"mp-weixin"</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">"define"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">"WX-DEV"</span><span class="token operator">:</span> <span class="token boolean">true</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">"wx-test"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"微信小程序-test"</span><span class="token punctuation">,</span>
				<span class="token property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">"UNI_PLATFORM"</span><span class="token operator">:</span> <span class="token string">"mp-weixin"</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">"define"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">"WX-TEST"</span><span class="token operator">:</span> <span class="token boolean">true</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">"wx-prod"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"微信小程序-production"</span><span class="token punctuation">,</span>
				<span class="token property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">"UNI_PLATFORM"</span><span class="token operator">:</span> <span class="token string">"mp-weixin"</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">"define"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">"WX-PROD"</span><span class="token operator">:</span> <span class="token boolean">true</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br></div></div><h2 id="工具配置" tabindex="-1"><a class="header-anchor" href="#工具配置" aria-hidden="true">#</a> 工具配置</h2>
<h2 id="代码获取" tabindex="-1"><a class="header-anchor" href="#代码获取" aria-hidden="true">#</a> 代码获取</h2>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
</template>
