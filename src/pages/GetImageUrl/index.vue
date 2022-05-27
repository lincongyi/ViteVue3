<template>
  <h1>Get Image Url PAGE</h1>
  <h2>引入图片</h2>

  <h3>方法1：在assets前面加上src</h3>
  <div class="image-wrap">
    <img src="/src/assets/images/getImageUrl-03.png" />
  </div>

  <h3>方法2：new URL()</h3>
  <p>import.meta.url 是一个 ESM 的原生功能，会暴露当前模块的 URL。</p>
  <div class="image-wrap">
    <img :src="getImageUrl('getImageUrl-04')" />
  </div>
  <p>在生产构建时，Vite 才会进行必要的转换保证 URL 在打包和资源哈希后仍指向正确的地址。然而，这个 URL 字符串必须是静态的，这样才好分析。</p>
  <p>Vite 不会转换这个</p>
  <p>const imgUrl = new URL(imagePath, import.meta.url).href</p>

  <h3>补充：背景图片引入（一定要使用相对路径）</h3>
  <div class="background-image"></div>
  <div class="image-wrap">
    <img :src="getImageUrl('getImageUrl-05')" />
  </div>
  <p>使用绝对路径在开发环境能够正常显示，但将导致打包后的路径不正确</p>
</template>
<script setup>
import { getImageUrl } from '@/utils'
</script>
<style lang="scss" scoped>
.image-wrap{
  height: 200px;
  img{
    height: 100%;
  }
}
.background-image{
  width: 200px;
  height: 200px;
  background: url('@/assets/images/getImageUrl-01.jpg') no-repeat center;
  background-size: contain;
}
</style>