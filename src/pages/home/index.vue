<template>
  <div class="container">
    <h1>HOME PAGE</h1>
    <p>shallow:{{ shallow }}</p>
    <p>val:{{ val }}</p>
    <p class="test">aaaaaaa</p>
    <el-button type="success" @click="toPage('Pinia')">Success</el-button>
  </div>
</template>
<script setup>
const shallow = shallowRef(0)
const val = ref(1)
console.log(shallow)
console.log(val)
shallow.value = 100
val.value = 200
const pcolor = ref('#ff0')

// const name = $ref('cy')
// console.log(name)

const router = useRouter()
const toPage = path => {
  // const route = useRoute()
  router.push({ path })
}
</script>
<style lang="scss" scoped>
.test {
  color: v-bind('pcolor');
}
</style>
