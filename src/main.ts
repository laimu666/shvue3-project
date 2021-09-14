/*
 * @Description: 
 * @Version: 1.0
 * @Autor: 司浩
 * @Date: 2021-09-01 17:49:18
 * @LastEditors: 司浩
 * @LastEditTime: 2021-09-14 14:23:18
 */
import { createApp } from 'vue'
import App from './App.vue'
import { initRouter } from './router'
import { initVuex } from './store'
import initMock from '../mock'

function initApp() {
  const app = createApp(App)
  initRouter(app)
  initVuex(app)
  initMock()
  app.mount('#app')
}

initApp()
