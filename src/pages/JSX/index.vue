<template>
  <div class="container">
    <h1>VUE IN JSX</h1>
    <h3>1.安装依赖（开发环境使用即可）：</h3>
    <p>npm i @vitejs/plugin-vue-jsx -D</p>
    <h3>2.配置vite.config.ts，添加插件</h3>
    <pre>
      <code>
        import vueJsx from "@vitejs/plugin-vue-jsx";

        export default defineConfig({
          plugins: [..., vueJsx()],
        });
      </code>
    </pre>
    <h3>3.使用JSX的方式有两种：</h3>
    <h4>方式1：</h4>
    <p>
      <el-text type="primary" size="large"
        >在<el-text tag="mark">.vue</el-text>文件中使用,需要将 script 中的 lang 设置为<el-text
          tag="mark"
          >tsx</el-text
        >,在 setup 函数中返回模板</el-text
      >
    </p>
    <M1E1 :value="value" />
    <h4>方式2：</h4>
    <p>
      把<el-text tag="mark">.vue</el-text>文件改为<el-text tag="mark">.tsx</el-text>文件，无需在
      script 中声明lang
    </p>
    <M2E1 :value="value" />
    <h3>4.展示更多JSX例子</h3>
    <h4>（1）插值 && 事件绑定</h4>
    <p>JSX插值变量需要加上<el-text tag="mark">.value</el-text></p>
    <M1E2 />
    <el-divider />
    <M2E2 />
    <h4>（2）条件渲染</h4>
    <p>JSX支持v-show标签，不支持v-if</p>
    <M1E3 />
    <el-divider />
    <M2E3 />
  </div>
</template>
<script setup>
import M1E1 from './Method1/Example1/index.vue'
import M1E2 from './Method1/Example2/index.vue'
import M1E3 from './Method1/Example3/index.vue'
import M2E1 from './Method2/Example1'
import M2E2 from './Method2/Example2'
import M2E3 from './Method2/Example3'
const value = ref(100)
</script>
