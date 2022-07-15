<template>
<h1>PINIA PAGE</h1>
<p>count:{{counter.count}}</p>
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
      <span>{{counter.cardName}}</span>
    </div>
  </template>
  <div v-for="(item,index) in counter.userList" :key="index">
    name:{{item.name}}<el-divider direction="vertical" />
    age:{{item.age}}
  </div>
</el-card>
<el-divider />

<p>doubleCount:{{counter.doubleCount}}</p>
<p>doubleCountPlusOne:{{counter.doubleCountPlusOne}}</p>
</template>
<script setup>
import {useCounterStore} from '@/stores/index'
const counter = useCounterStore()

const handleIncrement = () => {
  counter.increment(100)
}
const handleDecrement = () => {
  counter.decrement(2)
}
const handleReset = () => {
  counter.$reset()
}

const handlePatchEvent1 = () => {
  counter.$patch({
    cardName: 'CY',
    count: 100
  })
}
const handlePatchEvent2 = () => {
  counter.$patch((state) => {
    state.userList.push({name: 'lora', age: 21})
  })
}
</script>
<style lang="scss" scoped>
.box-card {
  width: 480px;
}
</style>