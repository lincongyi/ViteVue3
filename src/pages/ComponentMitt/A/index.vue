<template>
<h1>A Component</h1>
<el-button type="primary" @click="handleClick">兄弟组件传值</el-button>
</template>
<script setup>
import emitter from '@/utils/mitt'

const handleClick = () => {
  emitter.emit('clickEvent', `这是A组件传递过去的数据：${Math.random()*100 >> 0}`)
}
</script>
<style lang="scss" scoped>

</style>
