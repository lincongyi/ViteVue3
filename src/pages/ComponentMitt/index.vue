<template>
<div class="container">
  <h1>Component Mitt PAGE</h1>

  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
  <el-button color="#626aef">Default</el-button>

  <A></A>
  <B></B>
</div>

</template>
<script setup>
// import A from './A/index.vue'
// import B from './B/index.vue'

const A = defineAsyncComponent(() => import('./A/index.vue'))
const B = defineAsyncComponent(() => import('./B/index.vue'))
</script>
<style lang="scss" scoped>

</style>