import { createApp } from 'vue'
// 完整引入
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
// 国际化
import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale'
// 引入样式
import '@/style/index.css'
// 引入App
import App from './App'
import router from './route'

// 创建app
const app = createApp(App)

// 设置语言
locale.use(lang)
app.use(router)
app.use(ElementPlus)

// 挂载实例
app.mount('#app')
