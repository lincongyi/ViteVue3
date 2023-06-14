<template>
  <div class="container">
    <h1>PINIA PAGE</h1>
    <p>count:{{ counter.count }}</p>
    <el-button type="primary" @click="handleIncrement">increment</el-button>
    <el-button type="success" @click="handleDecrement">decrement</el-button>
    <el-button type="info" @click="handleReset">reset</el-button>
    <el-divider />

    <el-button type="warning" @click="handlePatchEvent1">patchEvent1</el-button>
    <el-button type="danger" @click="handlePatchEvent2">patchEvent2</el-button>
    <el-button color="#626aef">Default</el-button>
    <el-divider />

    <el-card class="box-card">
      <template #header>
        <div>
          <span>{{ counter.cardName }}</span>
        </div>
      </template>
      <div v-for="(item, index) in counter.userList" :key="index">
        name:{{ item.name }}<el-divider direction="vertical" /> age:{{ item.age }}
      </div>
    </el-card>
    <el-divider />

    <p>doubleCount:{{ counter.doubleCount }}</p>
    <p>doubleCountPlusOne:{{ counter.doublesCountPlusOne }}</p>
    <el-button type="success" @click="handleBack">back</el-button>

    <el-divider />
    <template v-for="(item, key) in Car">
      <el-card class="box-card">
        <template #header>
          <div>
            <span>{{ key }}</span>
          </div>
        </template>
        <div v-for="(_item, _index) in item" :key="_index">type:{{ _item }}</div>
      </el-card>
    </template>
    <el-button type="success" @click="handleAddType">Change Type</el-button>
    <el-button color="#626aef" @click="handleChangeType">Change Type</el-button>

    <el-divider />
    <div style="display: flex">
      <template v-for="(item, key) in books">
        <el-card class="box-card">
          <template #header>
            <div>
              <span>{{ item.type }}</span>
            </div>
          </template>
          <div>{{ item.name }}</div>
          <div>{{ item.date }}</div>
        </el-card>
      </template>
    </div>
    <el-button color="#626aef" @click="handleEvent1">尝试改变解构出来的内容</el-button>
    <el-button type="warning" @click="handleEvent2">$patch批量修改数据</el-button>
    <el-button type="danger" @click="handleEvent3">cb批量修改数据</el-button>
  </div>
</template>
<script setup>
import { useCounterStore } from '@/stores/index'
import { storeToRefs } from 'pinia'
const counter = useCounterStore()

/**
 * 加1
 */
const handleIncrement = () => {
  console.log(JSON.stringify(counter.$state))
  counter.increment()
}

/**
 * 减n
 */
const handleDecrement = () => {
  counter.decrement(2)
}

/**
 * 重置初始值
 */
const handleReset = () => {
  counter.$reset()
}

/**
 * 修改state的方法（不推荐直接修改state）
 */
/**
 * 传入targe对象进行修改
 */
const handlePatchEvent1 = () => {
  counter.$patch({
    cardName: `CY`,
    count: (Math.random() * 100).toFixed(2)
  })
}

/**
 * 回调函数进行修改
 */
const handlePatchEvent2 = () => {
  counter.$patch(state => {
    state.userList.push({ name: 'lora', age: 21 })
  })
}

const router = useRouter()
const handleBack = () => {
  router.go(-1)
}

const Car = reactive({
  tesla: ['tesla', 'model 3', 'model X', 'model Y'],
  ferrari: ['california T', 'f430', '59xxe']
})
const handleAddType = () => {
  if ('mclaren' in Car) return
  Car.mclaren = ['570s coupe', '720s', 'artura', '675lt']
}
const handleChangeType = () => {
  Car.ferrari = ['612', 'leferrari', 'F458']
}

// 使用storeToRefs可以保证解构出来的数据也是响应式的
const { books } = storeToRefs(counter)
const handleEvent1 = () => {
  console.log(books) // Ref<>
  books.value[1].name = books.value[1].name === '沧海' ? '昆仑' : '沧海'
}

// 方法1：$patch，接收对象参数
const handleEvent2 = () => {
  counter.$patch({
    books: [{ type: 'tool', name: 'typescript' }]
  })
}
// 方法2：$patch，回调函数批量修改数据
const handleEvent3 = () => {
  counter.$patch(item => {
    // 特别有效作用于针对性修改数组或对象某项
    item.books[1] = {
      type: 'tool',
      name: 'react',
      date: new Date(Date.now()).toLocaleString('zh-cn')
    }
  })
}
</script>
<style lang="scss" scoped>
.box-card {
  width: 480px;
}
</style>
