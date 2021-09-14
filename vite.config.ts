/*
 * @Description: 
 * @Version: 1.0
 * @Autor: 司浩
 * @Date: 2021-09-01 17:49:18
 * @LastEditors: 司浩
 * @LastEditTime: 2021-09-13 16:03:46
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';
import { resolve } from 'path'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: 'utils',
        replacement: pathResolve('src') + '/utils',
      },
    ],
  },
  plugins: [
    vue(),
    // 按需加载ant-design-vue组件
    ViteComponents({
      customComponentResolvers: [AntDesignVueResolver()],
    }),
  ]
})
