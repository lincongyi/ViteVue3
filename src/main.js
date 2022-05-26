import { createApp } from 'vue'
import App from './App.vue'
console.log( import.meta.env )
console.log( import.meta.env.VITE_NAME )
console.log( import.meta.env.VITE_POSITION )
createApp(App).mount('#app')
