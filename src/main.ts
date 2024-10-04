import { createApp } from 'vue'
import '@/assets/scss/app.scss'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import { preventInspect } from './global'

const app = createApp(App)

preventInspect()
app.use(router)
app.use(Antd)
app.mount('#app')