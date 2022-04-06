import{_ as n,c as s}from"./app.77e98066.js";const a={},p=s(`<h1 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u6CE8\u610F\u4E8B\u9879</h1><h2 id="git-commit\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#git-commit\u89C4\u8303" aria-hidden="true">#</a> git commit\u89C4\u8303</h2><p><strong>\u63D0\u4EA4\u683C\u5F0F\uFF08\u6CE8\u610F\u5192\u53F7\u540E\u9762\u6709\u7A7A\u683C\uFF09</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&lt;</span>type<span class="token operator">&gt;</span>: <span class="token operator">&lt;</span>subject<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u5E38\u7528\u7684type" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u7684type" aria-hidden="true">#</a> \u5E38\u7528\u7684type</h4><ul><li>\u6587\u4EF6\u4F4D\u7F6E\uFF1Acommitlint.config.js</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>                <span class="token string">&#39;dev&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5F00\u53D1\u4E2D</span>
                <span class="token string">&#39;feat&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u65B0\u7279\u6027</span>
                <span class="token string">&#39;improvement&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u52A0\u5F3A\u73B0\u6709\u7279\u6027</span>
                <span class="token string">&#39;fix&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u4FEE\u8865bug</span>
                <span class="token string">&#39;refactor&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u91CD\u6784</span>
                <span class="token string">&#39;docs&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6587\u6863</span>
                <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5355\u5143\u6D4B\u8BD5</span>
                <span class="token string">&#39;config&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u914D\u7F6E\u6587\u4EF6</span>
                <span class="token string">&#39;style&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u683C\u5F0F\u9700\u6539</span>
                <span class="token string">&#39;perf&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u6027\u80FD\u63D0\u5347</span>
                <span class="token string">&#39;ci&#39;</span><span class="token punctuation">,</span> <span class="token comment">// ci \u4E3B\u8981\u76EE\u7684\u662F\u4FEE\u6539\u9879\u76EE\u7EE7\u7EED\u96C6\u6210\u6D41\u7A0B(\u4F8B\u5982 Travis\uFF0CJenkins\uFF0CGitLab CI\uFF0CCircle\u7B49)\u7684\u63D0\u4EA4</span>
                <span class="token string">&#39;revert&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u7248\u672C\u56DE\u9000</span>
                <span class="token string">&#39;chore&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5176\u4ED6\u4FEE\u6539</span>
				<span class="token string">&#39;scope&#39;</span> <span class="token comment">// commit \u5F71\u54CD\u7684\u8303\u56F4\uFF08\u9009\u586B\uFF09, \u6BD4\u5982: route, component, utils, build</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h4 id="\u4E3E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4E3E\u4F8B" aria-hidden="true">#</a> \u4E3E\u4F8B</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> commit -m <span class="token string">&#39;dev: \u9879\u76EE\u521D\u59CB\u5316&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="h5\u63D0\u4F9Bnprogress\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#h5\u63D0\u4F9Bnprogress\u529F\u80FD" aria-hidden="true">#</a> h5\u63D0\u4F9Bnprogress\u529F\u80FD</h2><ul><li>\u6587\u4EF6\u4F4D\u7F6E\uFF1Arouter/index.js</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\r
 * @Author: ManKeung\r
 * <span class="token keyword">@description</span>: \u8DEF\u7531\u914D\u7F6E\r
 */</span>\r
\r
<span class="token keyword">import</span> <span class="token punctuation">{</span>\r
  RouterMount<span class="token punctuation">,</span>\r
  createRouter\r
  <span class="token comment">// runtimeQuit</span>\r
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;uni-simple-router&#39;</span>\r
\r
<span class="token comment">// #ifdef H5</span>\r
<span class="token keyword">import</span> NProgress <span class="token keyword">from</span> <span class="token string">&#39;nprogress&#39;</span>\r
<span class="token comment">// #endif</span>\r
\r
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
  <span class="token literal-property property">platform</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_PLATFORM</span><span class="token punctuation">,</span>\r
  <span class="token comment">// \u4F18\u96C5\u89E3\u9501</span>\r
  <span class="token function-variable function">routerErrorEach</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> router</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
      router<span class="token punctuation">.</span>$lockStatus <span class="token operator">=</span> <span class="token boolean">false</span>\r
    <span class="token punctuation">}</span>\r
\r
    <span class="token comment">// #ifdef APP-PLUS</span>\r
    <span class="token comment">// \u7B80\u6613\u5B9A\u4F4D</span>\r
    <span class="token comment">// if (type === 3) {</span>\r
    <span class="token comment">// 	router.$lockStatus = false;</span>\r
    <span class="token comment">// 	uni.showModal({</span>\r
    <span class="token comment">// 		title: &#39;\u63D0\u793A&#39;,</span>\r
    <span class="token comment">// 		content: &#39;\u60A8\u786E\u5B9A\u8981\u9000\u51FA\u5E94\u7528\u5417\uFF1F&#39;,</span>\r
    <span class="token comment">// 		success: function(res) {</span>\r
    <span class="token comment">// 			if (res.confirm) {</span>\r
    <span class="token comment">// 				plus.runtime.quit();</span>\r
    <span class="token comment">// 			}</span>\r
    <span class="token comment">// 		}</span>\r
    <span class="token comment">// 	})</span>\r
    <span class="token comment">// }</span>\r
    <span class="token comment">// \u66F4\u7CBE\u51C6\u5B9A\u4F4D</span>\r
    <span class="token comment">// if (error.type === 3) {</span>\r
    <span class="token comment">// 	router.$lockStatus = false</span>\r
    <span class="token comment">// 	const pages = getCurrentPages()</span>\r
    <span class="token comment">// 	const currentPage = pages[pages.length - 1]</span>\r
    <span class="token comment">// 	if (level == 1 &amp;&amp; args.uniActualData.from === &#39;backbutton&#39;) {</span>\r
    <span class="token comment">// 		if (currentPage.$page.meta.isQuit) {</span>\r
    <span class="token comment">// 			runtimeQuit()</span>\r
    <span class="token comment">// 		}</span>\r
    <span class="token comment">// 	}</span>\r
    <span class="token comment">// }</span>\r
    <span class="token comment">// #endif</span>\r
  <span class="token punctuation">}</span><span class="token punctuation">,</span>\r
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>\r
    <span class="token operator">...</span><span class="token constant">ROUTES</span><span class="token punctuation">,</span>\r
    <span class="token punctuation">{</span>\r
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span>\r
      <span class="token function-variable function">redirect</span><span class="token operator">:</span> <span class="token parameter">to</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
        <span class="token keyword">return</span> <span class="token punctuation">{</span>\r
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;404&#39;</span>\r
        <span class="token punctuation">}</span>\r
      <span class="token punctuation">}</span>\r
    <span class="token punctuation">}</span>\r
  <span class="token punctuation">]</span><span class="token punctuation">,</span>\r
  <span class="token comment">// \u52A8\u6001\u6539\u53D8\u53C2\u6570</span>\r
  <span class="token literal-property property">beforeProxyHooks</span><span class="token operator">:</span> <span class="token punctuation">{</span>\r
    <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">options<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">[</span>router<span class="token punctuation">.</span>currentRoute<span class="token punctuation">.</span>query<span class="token punctuation">]</span><span class="token punctuation">)</span>\r
    <span class="token punctuation">}</span><span class="token punctuation">,</span>\r
    <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>options<span class="token punctuation">]</span><span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
      <span class="token keyword">const</span> args <span class="token operator">=</span> options <span class="token operator">||</span> router<span class="token punctuation">.</span>currentRoute<span class="token punctuation">.</span>query\r
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">[</span>args<span class="token punctuation">]</span><span class="token punctuation">)</span>\r
    <span class="token punctuation">}</span>\r
  <span class="token punctuation">}</span>\r
<span class="token punctuation">}</span><span class="token punctuation">)</span>\r
\r
<span class="token comment">//\u5168\u5C40\u8DEF\u7531\u524D\u7F6E\u5B88\u536B</span>\r
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
  <span class="token comment">// #ifdef H5</span>\r
  NProgress<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\r
    <span class="token literal-property property">showSpinner</span><span class="token operator">:</span> <span class="token boolean">false</span>\r
  <span class="token punctuation">}</span><span class="token punctuation">)</span>\r
  NProgress<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\r
  <span class="token comment">// #endif</span>\r
\r
  <span class="token comment">// \u53D6\u6D88\u4E0A\u4E00\u9875\u9762\u63A5\u53E3\u8BF7\u6C42</span>\r
  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>taskArr<span class="token punctuation">)</span> <span class="token punctuation">{</span>\r
    process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>taskArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">task<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
      task<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\r
      <span class="token keyword">delete</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>taskArr<span class="token punctuation">[</span>index<span class="token punctuation">]</span>\r
    <span class="token punctuation">}</span><span class="token punctuation">)</span>\r
  <span class="token punctuation">}</span>\r
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\r
<span class="token punctuation">}</span><span class="token punctuation">)</span>\r
\r
<span class="token comment">// \u5168\u5C40\u8DEF\u7531\u540E\u7F6E\u5B88\u536B</span>\r
router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\r
  <span class="token comment">// #ifdef H5</span>\r
  NProgress<span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\r
  <span class="token comment">// #endif</span>\r
<span class="token punctuation">}</span><span class="token punctuation">)</span>\r
\r
<span class="token keyword">export</span> <span class="token punctuation">{</span> router<span class="token punctuation">,</span> RouterMount <span class="token punctuation">}</span>\r
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br></div></div>`,12);function t(e,r){return p}var o=n(a,[["render",t],["__file","index.html.vue"]]);export{o as default};
