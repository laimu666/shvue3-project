<template>
<div class="login">这是登录页<span class="child">child</span></div>
<div>{{name}}</div>
<HomeOutlined />
<SettingFilled />
<SmileOutlined />
<SyncOutlined spin />
<SmileOutlined :rotate="180" />
<LoadingOutlined />
<a-time-picker v-model:value="value" />
<a-time-picker v-model:value="strValue" valueFormat="HH:mm:ss" />
</template>

<script lang='ts' setup>
import { defineComponent, ref, watch, computed } from 'vue'
import { useStore } from '../../store'
import moment, { Moment } from 'moment'
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
</script>

<style scoped lang='scss'>
@import './login.scss'
</style>