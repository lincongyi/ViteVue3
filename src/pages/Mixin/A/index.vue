<template>
  <h1>A Component</h1>
  <el-alert :title="initNum.toString()" type="error" effect="dark" />
  <el-divider />
  <el-button type="primary" @click="increaseFn(4)">+</el-button>
  <el-button type="primary" @click="decreaseFn">-</el-button>
  <el-button type="primary" @click="restFn">reset</el-button>
</template>
<script setup>
import mixin from '@/mixins'
let { initNum, increaseFn, decreaseFn, restFn } = mixin()
</script>
<style lang="scss" scoped></style>
