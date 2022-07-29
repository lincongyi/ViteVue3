<template>
<div class="container">
  <h1>MIXIN PAGE</h1>
  <A></A>
  <B></B>
</div>
</template>
<script setup>
import A from './A/index.vue'
const B = defineAsyncComponent(() => import('./B/index.vue'))
</script>
<style lang="scss" scoped>

</style>