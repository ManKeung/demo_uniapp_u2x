<template><h1 id="js规范" tabindex="-1"><a class="header-anchor" href="#js规范" aria-hidden="true">#</a> Js规范</h1>
<h2 id="命名规范" tabindex="-1"><a class="header-anchor" href="#命名规范" aria-hidden="true">#</a> 命名规范<tip type="b" /></h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>语义化，可读性强。</p>
</div>
<ol>
<li>
<p>变量名</p>
<ul>
<li>全局变量</li>
<li>局部变量</li>
<li>类变量</li>
<li>函数变量</li>
</ul>
</li>
<li>
<p>构造函数（类）命名</p>
</li>
</ol>
<blockquote>
<p>首字母大写，驼峰命名</p>
</blockquote>
<ol start="3">
<li>普通函数</li>
</ol>
<blockquote>
<p>首字母小写，驼峰命名，内部函数命名'-'如：_getName</p>
</blockquote>
<ol start="4">
<li>前缀规范</li>
</ol>
<blockquote>
<p>根据项目团队需要增加，例如$-&gt;jquery</p>
</blockquote>
<h2 id="注释规范" tabindex="-1"><a class="header-anchor" href="#注释规范" aria-hidden="true">#</a> 注释规范<tip type="b" /></h2>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>好的注释使代码可读性更强。</p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 单行注释</span>
<span class="token doc-comment comment">/**
 * 多行注释
 * /
</span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><code-type>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 注释信息很多写在变量上方</span>
<span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">'mkimq'</span> <span class="token comment">// 注释信息少</span>

<span class="token comment">// 函数参数超过2个或以上</span>

<span class="token doc-comment comment">/**
 * @Author: Mankeung
 * <span class="token keyword">@description</span>: 方法描述
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">name</span> 参数描述
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">age</span> 参数描述
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> 返回
 */</span>
<span class="token keyword">function</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 函数参数少于2个</span>

<span class="token comment">// 方法描述 name [string] 参数描述</span>
<span class="token keyword">function</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 方法描述</span>
<span class="token keyword">function</span>  <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div></code-type>
<h2 id="书写规范" tabindex="-1"><a class="header-anchor" href="#书写规范" aria-hidden="true">#</a> 书写规范<tip /></h2>
<ol>
<li>公共组件维护者和各栏目WD都需要在文件头部加上注释说明</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/*
 * @Description: 描述信息
 * @Author: 作者
 * @Date: 创建事件
 * @LastEditors: 最后更新作者
 * @LastEditTime: 最后修改时间
 */</span>

<span class="token comment">/*
 * @Description: sidebar
 * @Author: Mankeung
 * @Date: 2022-03-02 16:01:40
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-03-31 17:16:35
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote>
<p>介意借助编辑器自动生成</p>
</blockquote>
<ol start="2">
<li>空格换行使用</li>
</ol>
<code-type bad>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>
<span class="token punctuation">.</span>
<span class="token punctuation">.</span>
<span class="token keyword">let</span> name<span class="token operator">=</span><span class="token string">''</span>
<span class="token keyword">let</span> num<span class="token operator">=</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">2</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>num<span class="token operator">></span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
<span class="token punctuation">.</span>
<span class="token punctuation">.</span>
<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></code-type>
<code-type>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>
<span class="token punctuation">.</span>
<span class="token punctuation">.</span>

<span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">''</span>
<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">></span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>
<span class="token punctuation">.</span>
<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></code-type>
<ol start="3">
<li>变量</li>
</ol>
<code-type>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 全局变量</span>
<span class="token keyword">const</span> globalName <span class="token operator">=</span> <span class="token string">''</span>

<span class="token comment">// 其他变量</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">''</span>

<span class="token comment">// 常量全大写多个单词下换线分隔</span>
<span class="token keyword">const</span> <span class="token constant">MAX</span> <span class="token operator">=</span> <span class="token number">111</span>
<span class="token keyword">const</span> <span class="token constant">BASE_URL</span> <span class="token operator">=</span> <span class="token string">'/api'</span>

<span class="token comment">// 类</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 函数</span>
<span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>

    <span class="token keyword">function</span> <span class="token function">_setName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span>

    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div></code-type>
<ol start="4">
<li>末尾分号使用</li>
</ol>
<blockquote>
<p>根据团队规定</p>
</blockquote>
</template>
