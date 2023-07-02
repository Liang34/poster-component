import { createApp } from 'vue'
import PosterComponents from './index'
import App from './App.vue'
const app = createApp(App)
app.use(PosterComponents)
app.mount('#app')