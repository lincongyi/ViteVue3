<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <router-view></router-view> -->

  <!-- 设置过渡动效，页面文件的template下必须只有一个根元素 -->
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-active {
  transition: opacity .5s ease;
}
.fade-leave-active {
  transition: none;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
