<template><h1 id="css规范" tabindex="-1"><a class="header-anchor" href="#css规范" aria-hidden="true">#</a> Css规范</h1>
<h2 id="css文件的分类和引用顺序" tabindex="-1"><a class="header-anchor" href="#css文件的分类和引用顺序" aria-hidden="true">#</a> css文件的分类和引用顺序</h2>
<p>通常一个项目只需要引入一个样式，但是对于大项目，我们需要把css文件分类。按照css性质和用途，分成：公共样式、特殊样式、皮肤样式，并以此顺序引入（按需求是否添加版本号）。</p>
<ol>
<li>公共样式：标签重置、设置默认值等公共样式。</li>
<li>特殊样式：某个功能某个页面样式与网站整体风格差异较大或者维护率较高时可以独立引用一个样式。</li>
<li>皮肤样式：按需换肤功能，我们将颜色、背景等抽离出来。</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>static/css/common.css?v=1.0.0<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>static/css/index.css?v=1.0.0<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>static/css/skin.css?v=1.0.0<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="命名规范" tabindex="-1"><a class="header-anchor" href="#命名规范" aria-hidden="true">#</a> 命名规范<tip /></h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>语义化，可读性强。</p>
</div>
<ol>
<li>使用类选择器，放弃ID选择器</li>
</ol>
<blockquote>
<p>id唯一性，导致无法样式重用。</p>
</blockquote>
<ol start="2">
<li>命名小写，两个或多个单词用'-'连接</li>
</ol>
<code-type bad>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.RED</span> <span class="token punctuation">{</span>
    ...
<span class="token punctuation">}</span>

<span class="token selector">.fontlarge</span> <span class="token punctuation">{</span>
    ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></code-type>
<code-type>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.red</span> <span class="token punctuation">{</span>
    ...
<span class="token punctuation">}</span>

<span class="token selector">.font-large</span> <span class="token punctuation">{</span>
    ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></code-type>
<ol start="3">
<li>后代选择器，父级-孩子</li>
</ol>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.nav</span> <span class="token punctuation">{</span>
    ...
<span class="token punctuation">}</span>

<span class="token selector">.nav-title</span> <span class="token punctuation">{</span>
    ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="注释规范" tabindex="-1"><a class="header-anchor" href="#注释规范" aria-hidden="true">#</a> 注释规范<tip type="b" /></h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>好的注释使代码可读性更强。</p>
</div>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* 单行注释 */</span>

<span class="token comment">/*
多行注释
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><code-type>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* 导航栏 start */</span>

<span class="token selector">.nav</span> <span class="token punctuation">{</span>
    ...
<span class="token punctuation">}</span>
.
.
.

<span class="token comment">/* 导航栏 end */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></code-type>
<h2 id="书写规范" tabindex="-1"><a class="header-anchor" href="#书写规范" aria-hidden="true">#</a> 书写规范<tip /></h2>
<ol>
<li>tab键用（必须）四个空格代替</li>
</ol>
<blockquote>
<p>因为在不同系统的编辑工具对tab解析不一样，windows下的tab键是占四个空格的位置，而在linux下会变成占八个空格的位置（除非你自己设定了tab键所占的位置长度）</p>
</blockquote>
<ol start="2">
<li>
<p>属性后必须加';'，方便压缩工具断句。</p>
</li>
<li>
<p>空格的使用</p>
<ul>
<li>选择器与 { 之前（必须）要有空格</li>
<li>属性名的 : 后（必须）要有空格</li>
<li>属性名的 : 前（禁止）加空格</li>
</ul>
</li>
</ol>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.font-large</span> <span class="token punctuation">{</span>
    ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote>
<p>一个原因是美观，其次IE6（目前一般不考虑IE兼容性）存在一个bug</p>
</blockquote>
<ol start="4">
<li>样式禁止单行</li>
</ol>
<code-type bad>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">a</span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></code-type>
<code-type>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">a</span> <span class="token punctuation">{</span>
    ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></code-type>
<ol start="5">
<li>多选择器规则之间必须换行</li>
</ol>
<code-type bad>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">a.btn, input.btn, input[type="button"]</span> <span class="token punctuation">{</span>
    ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></code-type>
<code-type>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">a.btn,
input.btn,
input[type="button"]</span> <span class="token punctuation">{</span>
    ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></code-type>
<ol start="6">
<li>
<p>禁止向0后面添加单位</p>
</li>
<li>
<p>禁止使用css原生 import</p>
</li>
</ol>
<blockquote>
<p>使用css原生import有很多弊端，比如会增加请求数等</p>
</blockquote>
<ol start="8">
<li>属性书写顺序
<ul>
<li>定位相关, 常见的有：display position left top float 等</li>
<li>盒模型相关, 常见的有：width height margin padding border 等</li>
<li>其他属性</li>
</ul>
</li>
</ol>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>按照这样的顺序书写可见提升浏览器渲染dom的性能。简单举个例子，网页中的图片，如果没有设置width和height，在图片载入之前，他所占的空间为0，但是当他加载完毕之后，那块为0的空间突然被撑开了，这样会导致，他下面的元素重新排列和渲染，造成重绘（repaint）和回流（reflow）。我们在写css的时候，把元素的定位放在前头，首先让浏览器知道该元素是在文本流内还是外，具体在页面的哪个部位，接着让浏览器知道他们的宽度和高度，border等这些占用空间的属性，其他的属性都是在这个固定的区域内渲染的。</p>
</div>
<code-type>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.content</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 定位 */</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token comment">/* 盒模型 */</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
    <span class="token comment">/* 其他 */</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></code-type>
<ol start="9">
<li>
<p>小图片sprite合并</p>
</li>
<li>
<p>禁止使用行内样式</p>
</li>
</ol>
<code-type bad>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>&lt;p style=<span class="token string">"..."</span> />
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></code-type>
<ol start="11">
<li>
<p>使用<a href="http://www.cssreset.com/" target="_blank" rel="noopener noreferrer">rest.css<ExternalLinkIcon/></a>，样式统一</p>
</li>
<li>
<p>禁止使用'*'来选择元素</p>
</li>
<li>
<p>连接的样式，书写顺序</p>
</li>
</ol>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">a</span><span class="token punctuation">:</span>link -> <span class="token property">a</span><span class="token punctuation">:</span>visited -> <span class="token property">a</span><span class="token punctuation">:</span>hover -> <span class="token property">a</span><span class="token punctuation">:</span>active
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="14">
<li>样式属性顺序
<ul>
<li>Positioning Model 布局方式、位置，相关属性包括：position, top, z-index, display, float等</li>
<li>Box Model 盒模型，相关属性包括：width, height, padding, margin，border,overflow</li>
<li>Typographic 文本排版，相关属性包括：font, line-height, text-align</li>
<li>Visual 视觉外观，相关属性包括：color, background, list-style, transform, animation</li>
</ul>
</li>
</ol>
<p>Positioning Model &gt; Box Model &gt; Typographic &gt; Visual 的顺序书写，提高代码的可读性。</p>
<ol start="15">
<li>16进制表示颜色值</li>
</ol>
<p>除非你需要透明度而使用rgba，否则都使用#f0f0f0这样的表示方法，并尽量缩写。</p>
<ol start="16">
<li>选择器顺序
<ul>
<li>从大到小（以选择器的范围为准）</li>
<li>从低到高（以等级上的高低为准）</li>
<li>从先到后（以结构上的先后为准）</li>
<li>从父到子（以结构上的嵌套为准）</li>
</ul>
</li>
</ol>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* 从大到小 */</span>
<span class="token selector">.m-list p</span> <span class="token punctuation">{</span>
    ...
<span class="token punctuation">}</span>
<span class="token selector">.m-list p.part</span> <span class="token punctuation">{</span>
    ...
<span class="token punctuation">}</span>
<span class="token comment">/* 从低到高 */</span>
<span class="token selector">.m-logo a</span> <span class="token punctuation">{</span>
    ...
<span class="token punctuation">}</span>
<span class="token selector">.m-logo a:hover</span> <span class="token punctuation">{</span>
    ...
<span class="token punctuation">}</span>
<span class="token comment">/* 从先到后 */</span>
<span class="token selector">.g-hd</span> <span class="token punctuation">{</span>
    ...
<span class="token punctuation">}</span>
<span class="token selector">.g-bd</span><span class="token punctuation">{</span>
    ...
<span class="token punctuation">}</span>
<span class="token selector">.g-ft</span> <span class="token punctuation">{</span>
    ...
<span class="token punctuation">}</span>
<span class="token comment">/* 从父到子 */</span>
<span class="token selector">.m-list</span> <span class="token punctuation">{</span>
    ...
<span class="token punctuation">}</span>
<span class="token selector">.m-list .itm</span><span class="token punctuation">{</span>
    ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div></template>
