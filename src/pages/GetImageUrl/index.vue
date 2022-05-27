<template>
<h1>Get Image Url PAGE</h1>
<p>引入jpg图片</p>
<div class="image-wrap">
  <img :src="getImageUrl('getImageUrl-01','jpg')" />
</div>
<p>引入png图片</p>
<div class="image-wrap">
  <img :src="getImageUrl('getImageUrl-02')" />
</div>
</template>
<script setup>
/**
  * 引入静态图片
 */
let getImageUrl = (name, type='png') => {
  return new URL(`/src/assets/images/${name}.${type}`, import.meta.url).href
}
</script>
<!-- <style lang="scss"> -->
<style scoped>
p{
  text-align: left;
}
.image-wrap img{
  width: 200px;
  height: 200px;
  display: block;
}

</style>