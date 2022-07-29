<template>
<h1>B Component</h1>
<el-alert :title="initNum.toString()" type="success" effect="dark" />
<el-divider />
<el-button type="success" @click="increaseFn">+</el-button>
<el-button type="success" @click="decreaseFn">-</el-button>
<el-button type="success" @click="restFn">reset</el-button>
</template>
<script setup>
import mixin from '@/mixins'
let {initNum, increaseFn, decreaseFn, restFn} = mixin()

</script>
<style lang="scss" scoped>

</style>
