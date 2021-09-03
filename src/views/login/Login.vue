<template>
<div>这是登录页</div>
<div>{{name}}</div>
</template>

<script lang='ts' setup>
import { computed } from 'vue'
import { useStore } from '../../store'
const store = useStore()
const name = computed(() => store.state.name)
</script>

<style scoped lang='scss'>

</style>