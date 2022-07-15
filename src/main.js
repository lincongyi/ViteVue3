import { createApp } from 'vue'
import App from './App.vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// console.log( import.meta.env )
import router from './router/index'
import { createPinia } from 'pinia'
createApp(App)
  .use(router)
  // .use(ElementPlus)
  .use(createPinia())
  .mount('#app')
