<!--
 * @Description:
 * @Version: 1.0
 * @Autor: 司浩
 * @Date: 2021-09-03 15:41:13
 * @LastEditors: 司浩
 * @LastEditTime: 2021-09-15 14:01:49
-->
<template>
<div class="login">这是登录页<span class="child">child</span></div>
<div>{{name}}</div>
<HomeOutlined />
<SettingFilled />
<SmileOutlined />
<SyncOutlined spin />
<SmileOutlined :rotate="180" />
<LoadingOutlined />
<a-time-picker v-model="value" />
<a-time-picker v-model="strValue" valueFormat="HH:mm:ss" />
</template>

<script lang='ts' setup>
import { defineComponent, ref, watch, computed } from 'vue'
import { useStore } from '../../store'
import moment, { Moment } from 'moment'
import Is from 'utils/is'
import Http from 'utils/http/index'

import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
  timePicker
} from '@ant-design/icons-vue'

// const store = useStore()
// const name = computed(() => store.state.name)
const value = ref<Moment>(moment('08:00:00', 'HH:mm:ss'))
const strValue = ref<string>('09:00:00')
console.log(Is.isFunction(Http.request))
Http.request({
  url: '/user',
  params: {
    ID: 12345
  },
  data: {
    firstName: 'Fred'
  }
}).then((res) => {
  console.log('res', res)
}).catch((error) => {
  console.log('error', error)
})
</script>

<style scoped lang='scss'>
@import './login.scss'
</style>
