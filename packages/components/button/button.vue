<template>
  <button :class="className">
    <!-- <i class="iconfont icon-loading"></i> -->
    <Loading v-if="loading" />
    <span><slot>默认按钮</slot></span>
  </button>
</template>

<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import Loading from '../icon/loading.vue'
import './index.scss'
// 定义组件名字，决定了组件被使用时的标签名
defineOptions({
  name: 'CButton'
})
// 返回类名
const className = computed(() => {
  return `
  c-button
  c-button-${allowedTypes.includes(props.type) ? props.type : 'default'}`
})
// 规定按钮的props
interface buttonProps {
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
  loading?: boolean;
}
const props = withDefaults(defineProps<buttonProps>(), {
  type: 'default',
  size: 'default',
  disabled: false,
  loading: false
})
console.log(props)

const allowedTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'danger',
  'info'
]
// 校验传入的type是否合法、发出控制台警告
watchEffect(() => {
  if (props.type && !allowedTypes.includes(props.type)) {
    console.warn(
      `Invalid type "${
        props.type
      }" for CButton. Valid types are: ${allowedTypes.join(', ')}`
    )
  }
})
</script>
<style lang="scss" scoped></style>
