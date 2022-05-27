import { createApp } from 'vue'
import App from './App.vue'
console.log( import.meta.env )
import router from './router/index'
createApp(App)
  .use(router)
  .mount('#app')
