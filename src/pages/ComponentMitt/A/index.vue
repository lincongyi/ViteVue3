<template>
  <h1>A Component</h1>
  <div>{{ propsA }}</div>
  <el-button type="primary" @click="handleClick">兄弟组件传值mitt</el-button>
</template>
<script setup>
import emitter from '@/utils/mitt'

const props = defineProps({
  propsA: {
    type: String,
    default: 'A component is waiting'
  }
})

console.log(props.propsA) // 访问父组件传过来的data
const handleClick = () => {
  emitter.emit(
    'clickEvent',
    `这是A组件传递过去的数据：${(Math.random() * 100) >> 0}`
  )
}
</script>
<style lang="scss" scoped></style>
