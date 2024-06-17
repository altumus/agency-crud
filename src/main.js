import App from '@/App.vue'
import router from '@/router/index'
import { createPinia } from 'pinia'
import { createApp } from 'vue'


import './index.css'
import './reset.css'

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
