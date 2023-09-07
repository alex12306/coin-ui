<template>
  <button :class="className">
    <!-- TODO: icon类型太多了找素材耗时间，以后再做 -->
    <Loading v-if="loading" />
    <!-- <i v-else-if="icon" class="iconfont"></i> -->
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
  let fullClassName = 'c-button'
  fullClassName += allowedTypes.includes(props.type)
    ? ` c-button-${props.type}`
    : ' c-button-default'
  fullClassName += props.disabled ? ' c-button-disabled' : ''
  fullClassName += props.round ? ' c-button-round' : ''
  fullClassName += props.size != 'default' ? ` c-button-${props.size}` : ''
  return fullClassName
})
// 规定按钮的props
interface buttonProps {
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'small' | 'default' | 'large';
  round?: boolean;
  disabled?: boolean;
  loading?: boolean;
}
const props = withDefaults(defineProps<buttonProps>(), {
  type: 'default',
  size: 'default',
  round: false,
  disabled: false,
  loading: false
})

const allowedTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'danger',
  'info'
]
const allowedSizes = ['small', 'default', 'large']
// 校验传入的type、size是否合法、发出控制台警告
watchEffect(() => {
  if (props.type && !allowedTypes.includes(props.type)) {
    console.warn(
      `Invalid type "${
        props.type
      }" for CButton. Valid types are: [${allowedTypes.join(', ')}]`
    )
  }
  if (props.size != 'default' && !allowedSizes.includes(props.size)) {
    console.warn(
      `Invalid size "${
        props.size
      }" for CButton. Valid sizes are: [${allowedSizes.join(', ')}]`
    )
  }
})
</script>
