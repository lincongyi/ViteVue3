import { defineStore } from 'pinia'
export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 0,
      cardName: 'Card name',
      userList: [
        {name: 'cora', age: 18},
        {name: 'candice', age: 19},
        {name: 'zoe', age: 20},
      ]
    }
  },
  getters: {
    doubleCount: (state) => state.count*2,
    doubleCountPlusOne(){
      return this.doubleCount+1
    }
  },
  actions: {
    increment(){
      this.count++
    },
    decrement(number){
      this.count -= number
    }
  }
})