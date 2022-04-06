<template><h1 id="构建部署" tabindex="-1"><a class="header-anchor" href="#构建部署" aria-hidden="true">#</a> 构建部署</h1>
<h2 id="环境变量配置" tabindex="-1"><a class="header-anchor" href="#环境变量配置" aria-hidden="true">#</a> 环境变量配置</h2>
<p>由于不同环境有不同的配置信息，所以这里就需要更具不同环境配置不同信息，避免每次构建时修改配置信息。</p>
<h3 id="环境变量介绍" tabindex="-1"><a class="header-anchor" href="#环境变量介绍" aria-hidden="true">#</a> 环境变量介绍</h3>
<ol>
<li><code>.env.dev.js</code></li>
</ol>
<p>开发环境配置</p>
<ol start="2">
<li><code>.env.test.js</code></li>
</ol>
<p>测试环境配置</p>
<ol start="3">
<li><code>.env.prod.js</code></li>
</ol>
<p>生成环境</p>
<blockquote>
<p>可根据项目情况新增环境变量</p>
</blockquote>
<h3 id="hbuilderx配置" tabindex="-1"><a class="header-anchor" href="#hbuilderx配置" aria-hidden="true">#</a> HBuilderX配置</h3>
<p>可以看<a href="https://uniapp.dcloud.io/collocation/package.html" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a>进行了解，本项目只配置了h5与微信小程序，由于官方不支持app。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>			<span class="token string-property property">"h5-dev"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token string-property property">"title"</span><span class="token operator">:</span> <span class="token string">"h5-develop"</span><span class="token punctuation">,</span>
				<span class="token string-property property">"BROWSER"</span><span class="token operator">:</span> <span class="token string">"Chrome"</span><span class="token punctuation">,</span>
				<span class="token string-property property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token string-property property">"UNI_PLATFORM"</span><span class="token operator">:</span> <span class="token string">"h5"</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token string-property property">"define"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token string-property property">"H5-DEV"</span><span class="token operator">:</span> <span class="token boolean">true</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token string-property property">"h5-test"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token string-property property">"title"</span><span class="token operator">:</span> <span class="token string">"h5-test"</span><span class="token punctuation">,</span>
				<span class="token string-property property">"BROWSER"</span><span class="token operator">:</span> <span class="token string">"Chrome"</span><span class="token punctuation">,</span>
				<span class="token string-property property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token string-property property">"UNI_PLATFORM"</span><span class="token operator">:</span> <span class="token string">"h5"</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token string-property property">"define"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token string-property property">"H5-TEST"</span><span class="token operator">:</span> <span class="token boolean">true</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token string-property property">"h5-prod"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token string-property property">"title"</span><span class="token operator">:</span> <span class="token string">"h5-production"</span><span class="token punctuation">,</span>
				<span class="token string-property property">"BROWSER"</span><span class="token operator">:</span> <span class="token string">"Chrome"</span><span class="token punctuation">,</span>
				<span class="token string-property property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token string-property property">"UNI_PLATFORM"</span><span class="token operator">:</span> <span class="token string">"h5"</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token string-property property">"define"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token string-property property">"H5-PROD"</span><span class="token operator">:</span> <span class="token boolean">true</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token string-property property">"wx-dev"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token string-property property">"title"</span><span class="token operator">:</span> <span class="token string">"微信小程序-develop"</span><span class="token punctuation">,</span>
				<span class="token string-property property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token string-property property">"UNI_PLATFORM"</span><span class="token operator">:</span> <span class="token string">"mp-weixin"</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token string-property property">"define"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token string-property property">"WX-DEV"</span><span class="token operator">:</span> <span class="token boolean">true</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token string-property property">"wx-test"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token string-property property">"title"</span><span class="token operator">:</span> <span class="token string">"微信小程序-test"</span><span class="token punctuation">,</span>
				<span class="token string-property property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token string-property property">"UNI_PLATFORM"</span><span class="token operator">:</span> <span class="token string">"mp-weixin"</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token string-property property">"define"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token string-property property">"WX-TEST"</span><span class="token operator">:</span> <span class="token boolean">true</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token string-property property">"wx-prod"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token string-property property">"title"</span><span class="token operator">:</span> <span class="token string">"微信小程序-production"</span><span class="token punctuation">,</span>
				<span class="token string-property property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token string-property property">"UNI_PLATFORM"</span><span class="token operator">:</span> <span class="token string">"mp-weixin"</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token string-property property">"define"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token string-property property">"WX-PROD"</span><span class="token operator">:</span> <span class="token boolean">true</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><h3 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h3>
<h4 id="开发运行" tabindex="-1"><a class="header-anchor" href="#开发运行" aria-hidden="true">#</a> 开发运行</h4>
<p>本地运行时，点击运行选择对应的环境配置运行。</p>
<p><img src="/assets/dev.png" alt="示例图"></p>
<h4 id="发布运行" tabindex="-1"><a class="header-anchor" href="#发布运行" aria-hidden="true">#</a> 发布运行</h4>
<p>发布时，点击发行选择自定义发行，选择对应的环境配置发布。</p>
<p><img src="/assets/build.png" alt="示例图"></p>
<h4 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h4>
<p>由于uniapp不支持app环境配置，这时需要自己手动修改环境变量。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 主要设置app开发模式</span>
<span class="token comment">// 设置环境变量</span>

<span class="token keyword">const</span> <span class="token constant">ENV</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">DEV</span><span class="token operator">:</span> <span class="token string">'dev'</span><span class="token punctuation">,</span> <span class="token comment">// 开发模式</span>
  <span class="token constant">TEST</span><span class="token operator">:</span> <span class="token string">'test'</span><span class="token punctuation">,</span> <span class="token comment">// 测试环境</span>
  <span class="token constant">PROD</span><span class="token operator">:</span> <span class="token string">'prod'</span> <span class="token comment">// 生成环境</span>
<span class="token punctuation">}</span>

<span class="token comment">// 当前环境变量</span>
<span class="token keyword">let</span> <span class="token constant">ENV_KEY</span> <span class="token operator">=</span> <span class="token string">''</span>

<span class="token comment">// app手动设置环境变量</span>
<span class="token comment">// #ifdef APP-PLUS</span>
<span class="token constant">ENV_KEY</span> <span class="token operator">=</span> <span class="token constant">ENV</span><span class="token punctuation">.</span><span class="token constant">DEV</span>
<span class="token comment">// #endif</span>

<span class="token comment">// h5 微信小程序开发环境</span>
<span class="token comment">// #ifdef H5-DEV || WX-DEV</span>
<span class="token constant">ENV_KEY</span> <span class="token operator">=</span> <span class="token constant">ENV</span><span class="token punctuation">.</span><span class="token constant">DEV</span>
<span class="token comment">// #endif</span>

<span class="token comment">// h5 微信小程序测试环境</span>
<span class="token comment">// #ifdef H5-TEST || WX-TEST</span>
<span class="token constant">ENV_KEY</span> <span class="token operator">=</span> <span class="token constant">ENV</span><span class="token punctuation">.</span><span class="token constant">TEST</span>
<span class="token comment">// #endif</span>

<span class="token comment">// h5 微信小程序生产环境</span>
<span class="token comment">// #ifdef H5-PROD || WX-PROD</span>
<span class="token constant">ENV_KEY</span> <span class="token operator">=</span> <span class="token constant">ENV</span><span class="token punctuation">.</span><span class="token constant">PROD</span>
<span class="token comment">// #endif</span>

<span class="token comment">// 配置信息</span>
<span class="token keyword">let</span> config <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">ENV_KEY</span> <span class="token operator">===</span> <span class="token string">'dev'</span><span class="token punctuation">)</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./.env.dev'</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">ENV_KEY</span> <span class="token operator">===</span> <span class="token string">'test'</span><span class="token punctuation">)</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./.env.test'</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">ENV_KEY</span> <span class="token operator">===</span> <span class="token string">'prod'</span><span class="token punctuation">)</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./.env.prod'</span><span class="token punctuation">)</span>

<span class="token comment">// 设置版本号</span>
config<span class="token punctuation">.</span>version <span class="token operator">=</span> <span class="token string">'v20220113'</span>

process<span class="token punctuation">.</span>uniEnv <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> config<span class="token punctuation">)</span> process<span class="token punctuation">.</span>uniEnv<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> config<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><blockquote>
<p>修改15行代对应需要的开发环境</p>
</blockquote>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<p>示例代码</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 获取所有</span>
process<span class="token punctuation">.</span>uniEnv
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></template>
