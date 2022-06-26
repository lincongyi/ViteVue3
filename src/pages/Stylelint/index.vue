<template>
<h1>stylelint PAGE</h1>
<h3>1.安装依赖（开发环境使用即可）：</h3>
<p>npm i stylelint stylelint-config-standard stylelint-order stylelint-config-rational-order</p>
<h3>2.新建.stylelint.js文件：</h3>
<p>复制如下代码写入js文件</p>
<pre>
  <code>
    "extends": ["stylelint-config-standard", "stylelint-config-rational-order"],
    "plugins": ["stylelint-order"],
    "rules": {
      "string-quotes": "single"
    }
  </code>
</pre>
<p>stylelint-order用于强制你按照某个顺序编写 css，stylelint-config-rational-order提供了CSS顺序的规则，这两个插件可以帮助矫正样式顺序。</p>
<p>备注：vscode配置文件stylelint.validate属性值添加'vue'文件进行校验的话，stylelint好像兼容得不太好，建议新建index.scss来写样式</p>
<h3>3.vscode安装stylelint拓展插件：</h3>
<div class="scss-module">
  <div class="box"></div>
</div>
</template>
<script setup>
import './index.scss'
</script>
<style lang="scss">
.box{
  background-color: aquamarine;
  height: 200px;
}
</style>