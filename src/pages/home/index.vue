<template>
  <div class="container">
    <h1>HOME PAGE</h1>
    <p>shallow:{{ shallow }}</p>
    <p>val:{{ val }}</p>
    <p class="test">aaaaaaa</p>
    <el-button type="success" @click="toPage('Pinia')">Success</el-button>
    <h3>
      观察 ref 的数据不直观，不方便<br />可以在控制台的设置面板中开启 「Enable custom
      formatters」选项。
    </h3>
    <el-image :src="clg01" fit="cover" />
    <el-image :src="clg02" fit="cover" />
    <el-image :src="clg03" fit="cover" />
  </div>
</template>
<script setup>
import clg01 from '@/assets/images/clg-01.png'
import clg02 from '@/assets/images/clg-02.png'
import clg03 from '@/assets/images/clg-03.png'
console.log(clg01)
const shallow = shallowRef(0)
const val = ref(1)
const obj = reactive({
  name: 'zoe',
  age: 20
})
console.log(shallow)
console.log(val)
console.log(obj)
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
