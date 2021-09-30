import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import './assets/css/global.scss'

createApp(App)
.use(ElementPlus)
.use(store)
.use(router)
.mount('#app')
