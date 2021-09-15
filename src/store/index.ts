/*
 * @Description:
 * @Version: 1.0
 * @Autor: 司浩
 * @Date: 2021-09-03 16:57:59
 * @LastEditors: 司浩
 * @LastEditTime: 2021-09-15 14:01:18
 */
import type { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import type { App } from 'vue'

export interface State {
  count: number
  name: string
}

export const key: InjectionKey<Store<State>> = Symbol('key')

export const store = createStore<State>({
  state: {
    count: 0,
    name: '1111'
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}

export function initVuex(app: App) {
  // 传入 injection key
  app.use(store, key)
}
