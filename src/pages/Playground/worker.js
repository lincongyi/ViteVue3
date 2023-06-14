import { calcFn } from '.'
let timer = null
let count = 0

const onInterval = () => {
  const start = performance.now()
  timer = setInterval(() => {
    count++
    const end = performance.now()
    postMessage({
      type: 'basic',
      data: { count, error: end - start - 1000 * count }
    })
    console.log(`误差值：${end - start - 1000 * count} ms`)
  }, 1000)
}

const onCalc = () => {
  const start = performance.now()
  const total = calcFn()
  const end = performance.now()
  postMessage({
    type: 'calc',
    data: { time: end - start, total }
  })
}

onmessage = function (event) {
  const { data } = event
  if (data === 'start') {
    if (timer) return
    onInterval()
  }
  if (data === 'stop') {
    clearInterval(timer)
    timer = null
    // this.postMessage('ended')
  }
  if (data === 'calc') {
    onCalc()
  }
  console.log(event.data)
}
