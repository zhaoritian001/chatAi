import { createApp } from 'vue'
import App from './App.vue'
// 导入Unocss
import 'uno.css'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)
app.use(createPinia())
app.use(ElementPlus)
app.mount('#app')
