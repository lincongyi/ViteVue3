<template>
<h1>B Component</h1>
<div>{{str}}</div>
<el-button type="success" @click="handleClick">子组件defineEmits</el-button>
</template>
<script setup>
import emitter from '@/utils/mitt'

const str = ref('这是B组件等待接收A组件传过来的值')

// const emit = defineEmits('clickEvent')
const emit = defineEmits(['clickEvent'])

const handleClick = () => {
  emit('clickEvent', Math.random()*100>>0)
}

onMounted(() => {
  emitter.on('clickEventMitt', (e) => {
    str.value = e
  })
})

</script>
<style lang="scss" scoped>

</style>
