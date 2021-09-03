import { createApp } from 'vue'
import App from './App.vue'
import initRouter from './router'

function initApp() {
  const app = createApp(App)
  initRouter(app)
  app.mount('#app')
}

initApp()
