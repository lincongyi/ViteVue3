export default function(){
  let initNum = ref(100)
  const increaseFn = (num) => {
    num = typeof num === 'number' ? num : 1
    initNum.value += num
  }

  const decreaseFn = () => {
    if (initNum.value) initNum.value--
  }

  const restFn = () => {
    initNum.value = 100
  }
  return {
    initNum, increaseFn, decreaseFn, restFn
  }
}