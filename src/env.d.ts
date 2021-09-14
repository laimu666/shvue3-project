/*
 * @Description: 
 * @Version: 1.0
 * @Autor: 司浩
 * @Date: 2021-09-01 17:49:18
 * @LastEditors: 司浩
 * @LastEditTime: 2021-09-14 15:19:27
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare type Nullable<T> = T | null; // 空
