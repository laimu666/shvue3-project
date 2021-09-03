import { createApp } from 'vue'
import App from './App.vue'
import { initRouter } from './router'
import { initVuex } from './store'

function initApp() {
  const app = createApp(App)
  initRouter(app)
  initVuex(app)
  app.mount('#app')
}

initApp()
