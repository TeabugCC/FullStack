/*
 * @Last Modified by: jihy-c
 * @LastEditTime: 2024-07-14 18:25:12
 * @Description: 
 */
import './assets/main.css'
import t0,{t1,t2} from './utils/test.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as echarts from 'echarts';

import App from './App.vue'
import router from './router'
console.log(t1())
console.log(t0)
console.log(t2)
const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.config.globalProperties.$echarts = echarts;

app.mount('#app')
