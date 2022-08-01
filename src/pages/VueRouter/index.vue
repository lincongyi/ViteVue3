<template>
  <div class="container">
    <h1>Vue Router Page</h1>
    <el-button type="primary" @click="handleErrorRouter">跳转到不存在的路由</el-button>
    <el-button type="info" @click="toPage('/VueRouter/childPage')">跳转到子路由</el-button>
    <router-view />
  </div>
</template>
<script setup>
const router = useRouter()
const handleErrorRouter = () => {
  router.push({ path: '/Pinia111' })
}
const toPage = path => {
  // const route = useRoute()
  router.push({ path })
}
</script>
<style lang="scss" scoped></style>
