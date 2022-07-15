<template>
<h1>IMPORT ELEMENT PLUS PAGE</h1>
<h3>1.安装 Element Plus</h3>
<p>npm install element-plus --save</p>
<h3>2.引入 Element Plus</h3>
<h4>全局引入</h4>
<pre>
  <code>
    mport { createApp } from 'vue'
    import ElementPlus from 'element-plus'
    import 'element-plus/dist/index.css'
    import App from './App.vue'

    const app = createApp(App)

    app.use(ElementPlus)
    app.mount('#app')
  </code>
</pre>
<h4>按需导入</h4>
<p>安装unplugin-vue-components 和 unplugin-auto-import</p>
<p>npm install -D unplugin-vue-components unplugin-auto-import</p>
<p>修改vite.config.js配置文件</p>
<pre>
  <code>
    // vite.config.ts
    import { defineConfig } from 'vite'
    import AutoImport from 'unplugin-auto-import/vite'
    import Components from 'unplugin-vue-components/vite'
    import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

    export default defineConfig({
      // ...
      plugins: [
        // ...
        AutoImport({
          resolvers: [ElementPlusResolver()],
        }),
        Components({
          resolvers: [ElementPlusResolver()],
        }),
      ],
    })
  </code>
</pre>

<el-button>Default</el-button>
<el-button type="primary">Primary</el-button>
<el-button type="success">Success</el-button>
<el-button type="info">Info</el-button>
<el-button type="warning">Warning</el-button>
<el-button type="danger">Danger</el-button>
<el-button color="#626aef">Default</el-button>
</template>
<script setup>

</script>
<style lang="scss" scoped>

</style>