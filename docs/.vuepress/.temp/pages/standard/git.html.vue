<template><h1 id="git规范" tabindex="-1"><a class="header-anchor" href="#git规范" aria-hidden="true">#</a> Git规范</h1>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>不管是团队还是个人开发，规范的提交代码是非常重要的</p>
</div>
<h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项<tip /></h2>
<ol>
<li>开发之前都应该拉下代码。</li>
<li>每天至少保证下班提交一次代码<sup><a href="#footnote-1">[1]</a></sup>。</li>
<li>当有一个小功能或则bug修复就应当提交代码，不要编码了很多代码后才提交，这样不利于代码评审。</li>
</ol>
<h2 id="git开发流程" tabindex="-1"><a class="header-anchor" href="#git开发流程" aria-hidden="true">#</a> git开发流程<tip /></h2>
<img src="/assets/git.png" style="margin-top: 1.6em;" />
<p>如图所示：开发分支根据主分支建立，个人在开发分支建立分支开发，开发完成合并到开发分支，在开发分支新建合并分支，没问题再合主分支，当线上有bug在主分支建立bug修复分支，修复完成再合并到开发分支，再开发分支到合并分支再到主分支，最后删除bug修复分支。</p>
<h2 id="代码提交" tabindex="-1"><a class="header-anchor" href="#代码提交" aria-hidden="true">#</a> 代码提交<tip type="b" /></h2>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>'dev' // 开发中
'feat' // 新特性
'improvement' // 加强现有特性
'fix' // 修补bug
'refactor' // 重构
'docs' // 文档
'test' // 单元测试
'config' // 配置文件
'style' // 格式需改
'perf' // 性能提升
'ci' // ci 主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
'revert' // 版本回退
'chore' // 其他修改
'scope' // commit 影响的范围（选填） 比如: route component utils build
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><code-type title="例子">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># type后面空格</span>
<span class="token function">git</span> commit -m <span class="token string">'dev: 描述信息'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></code-type>
<p><small><strong>注释</strong><br>
<a id="footnote-1"></a>[1] 这里提交一次是表示提交到代码仓库，不是本地提交。
</small></p>
</template>
