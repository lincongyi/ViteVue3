<template>
<div class="container">
  <img class="error-image" :src="getImageUrl('404','jpeg')" />
</div>
</template>
<script setup>
import { getImageUrl } from '@/utils'
</script>
<style lang="scss" scoped>
.container{
  display: flex;
  justify-content: center;
}
.error-image{
  width: 400px;
  height: 300px
}
</style>