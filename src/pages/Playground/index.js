export const calcFn = () => {
  let total = 0
  for (let i = 0; i < 20000; i++) {
    for (let i = 0; i < 10000; i++) {
      total += Math.random()
    }
  }
  return total
}
