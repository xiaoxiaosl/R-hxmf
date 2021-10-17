import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import './assets/css/global.scss'

createApp(App)
  .use(VueAxios, axios)
  .use(ElementPlus)
  .use(store)
  .use(router)
  .mount('#app')