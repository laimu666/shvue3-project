import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'

const routes: RouteRecordRaw[] = [
  {
    name: 'login',
    path: '/login',
    component: () => import('../views/login/Login.vue'), // 懒加载路由组件
    meta: {
      title: '登录页'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default function initRouter(app: App) {
  app.use(router)
}