<script setup>
import { reactive } from 'vue'
import MyWorker from './worker.js?worker'
import { calcFn } from '.'

const count = ref(0)
const error = ref(0)
const input = ref('')
const worker = new MyWorker()

worker.onmessage = e => {
  if (e.data === 'ended') {
    worker.terminate() // 终止Web Worker任务
  } else {
    console.log(e.data)
    const { type, data } = e.data
    if (type === 'basic') {
      count.value = e.data.count
      error.value = e.data.error
    } else if (type === 'calc') {
      workerThread.time = data.time
      workerThread.total = data.total
    } else return
  }
}

/**
 * 开启线程
 */
const onStartThread = () => {
  worker.postMessage('start')
}

/**
 * 终止线程
 */
const onStopThread = () => {
  worker.postMessage('stop')
}

const mainThread = reactive({
  time: 0,
  total: 0
})

/**
 * 主线程计算
 */
const onMainThreadCalc = () => {
  const start = performance.now()
  const total = calcFn()
  const end = performance.now()
  mainThread.time = end - start
  mainThread.total = total
}

const workerThread = reactive({
  time: 0,
  total: 0
})

/**
 * Web Worker线程计算
 */
const onWorkerThreadCalc = () => {
  worker.postMessage('calc')
}
</script>
<template>
  <div class="container">
    <h1>PLAYGROUND PAGE</h1>
    <el-divider content-position="left">Web Worker</el-divider>
    <el-input v-model="input" placeholder="Please input" />

    <h3>1.基础用例</h3>
    <el-space>
      <el-button type="primary" @click="onStartThread">开启线程</el-button>
      <el-button @click="onStopThread">终止线程</el-button>
    </el-space>
    <el-divider></el-divider>
    <el-space direction="vertical">
      <el-text type="success" size="large">count: {{ count }}</el-text>
      <el-text type="info" size="large">error: {{ error }}</el-text>
    </el-space>

    <h3>2.复杂计算</h3>
    <el-space>
      <el-button @click="onMainThreadCalc">主线程计算</el-button>
      <el-button type="primary" @click="onWorkerThreadCalc">Web Worker线程计算</el-button>
    </el-space>
    <el-divider></el-divider>
    <el-text type="success" size="large"
      >mainThread<br />耗时：{{ mainThread.time }} ms<br />总计：{{ mainThread.total }}</el-text
    >
    <br />
    <el-text type="info" size="large"
      >workerThread<br />耗时：{{ workerThread.time }} ms<br />总计：{{
        workerThread.total
      }}</el-text
    >
  </div>
</template>
