import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import * as echarts from 'echarts'
const app = createApp(App);

app.use(store).use(router).use(ElementPlus).mount('#app')
app.config.globalProperties.$echarts = echarts
// createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
// App.prototype.$axios=axios