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
      ],
      books: [
        {
          type: 'novel',
          name: '英雄志',
          date: new Date(Date.now()).toLocaleString('zh-cn')
        },
        {
          type: 'novel',
          name: '昆仑',
          date: new Date(Date.now()).toLocaleString('zh-cn',{dateStyle:'long'})
        },
        {
          type: 'tool',
          name:'vue设计与实现',
          date: new Date(Date.now()).toLocaleString('zh-cn')
        }
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