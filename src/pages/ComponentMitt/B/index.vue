<template>
<h1>B Component</h1>
<div>{{str}}</div>
</template>
<script setup>
import emitter from '@/utils/mitt'

const str = ref('')

onMounted(() => {
  emitter.on('clickEvent', (e) => {
    str.value = e
  })
})

</script>
<style lang="scss" scoped>

</style>
