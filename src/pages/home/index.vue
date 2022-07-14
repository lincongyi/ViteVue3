<template>
<h1>HOME PAGE</h1>
<p>shallow:{{shallow}}</p>
<p>val:{{val}}</p>
</template>
<script setup>
const shallow = shallowRef(0)
const val = ref(1)
console.log(shallow)
console.log(val)
shallow.value = 100
val.value = 200
</script>
<style lang="scss" scoped>

</style>