import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 按需加载ant-design-vue组件
    ViteComponents({
      customComponentResolvers: [AntDesignVueResolver()],
    }),
  ]
})
