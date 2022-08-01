<template>
  <h1>Unplugin Auto Import PAGE</h1>
  <h2>自动导入Vue Api</h2>
  <h3>1.安装依赖</h3>
  <p>npm i unplugin-auto-import -D</p>
  <h3>2.配置vite.config.js</h3>
  <p>import AutoImport from 'unplugin-auto-import/vite'</p>
  <pre>
    <code>
      AutoImport({
        imports: ['vue'],
        // Generate corresponding .eslintrc-auto-import.json file.
        eslintrc: {
          enabled: false, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
        dts: './auto-import.d.ts'
      }),
    </code>
  </pre>
  <div class="image-wrap">
    <img :src="getImageUrl('unpluginAutoImport-01')" />
  </div>
  <h3>3. .eslintrc.js文件extends属性加入./.eslintrc-auto-import.json文件的引用</h3>
  <div class="image-wrap">
    <img :src="getImageUrl('unpluginAutoImport-02')" />
  </div>
  <h3>4. .gitignore文件忽略auto-import.d.ts文件，不然每次都会生成配置文件</h3>
  <div>{{ name }} {{ phoneNumber }}</div>
</template>
<script setup>
import { getImageUrl } from '@/utils'
const name = ref('cy')
const phoneNumber = ref('15800033233')
</script>
<style lang="scss" scoped>
.image-wrap {
  height: 400px;
  img {
    object-fit: contain;
    height: 100%;
  }
}
</style>
