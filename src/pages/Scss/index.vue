<template>
<h1>SCSS PAGE</h1>
<h3>1.安装依赖（开发环境使用即可）：</h3>
<p>npm i node-sass sass sass-loader style-loader -D</p>
<h3>2.在vue.config.js中添加配置</h3>
<pre>
  <code>
    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'scss',
        patterns: []
      }
    }
  </code>
</pre>
<div class="image-wrap">
  <img :src="getImageUrl('scss-01')" />
</div>
</template>
<script setup>
import { getImageUrl } from '@/utils'
</script>
<style lang="scss" scoped>
.image-wrap{
  height: 400px;
  img{
    object-fit: contain;
    height: 100%;
  }
}
</style>