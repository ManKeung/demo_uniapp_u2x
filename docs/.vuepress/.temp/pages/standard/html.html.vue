<template><h1 id="html规范" tabindex="-1"><a class="header-anchor" href="#html规范" aria-hidden="true">#</a> Html规范</h1>
<h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释<tip type="b" /></h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>好的注释使代码可读性更强。</p>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 单行注释 --></span>

<span class="token comment">&lt;!--
多行注释
 --></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><code-type>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>...

<span class="token comment">&lt;!-- nav start --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">></span></span>
...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- nav end --></span>
...
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></code-type>
<h2 id="书写规范" tabindex="-1"><a class="header-anchor" href="#书写规范" aria-hidden="true">#</a> 书写规范<tip /></h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>标签语义化</p>
</div>
<ol>
<li>tab键用（必须）四个空格代替</li>
</ol>
<blockquote>
<p>因为在不同系统的编辑工具对tab解析不一样，windows下的tab键是占四个空格的位置，而在linux下会变成占八个空格的位置（除非你自己设定了tab键所占的位置长度）</p>
</blockquote>
<ol start="2">
<li>使用小写元素名</li>
</ol>
<code-type bad>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SELECT</span><span class="token punctuation">></span></span>
    ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SELECT</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></code-type>
<code-type>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span><span class="token punctuation">></span></span>
    ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></code-type>
<ol start="3">
<li>关闭所有HTML元素</li>
</ol>
<code-type>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charet</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></code-type>
<ol start="4">
<li>
<p>使用小写属性名</p>
</li>
<li>
<p>属性值可以不使用引号（属性值包括空格必须使用引号）</p>
</li>
<li>
<p>图片属性alt避免图片显示出错</p>
</li>
<li>
<p>避免一行代码过长</p>
</li>
<li>
<p>空行和缩进</p>
</li>
<li>
<p>样式表放头部，javascript放尾部</p>
</li>
</ol>
</template>
