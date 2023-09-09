<template>
  <Transition
    name="message"
    @before-leave="deleteInstance(id)"
    @after-leave="$emit('destroy')"
  >
    <div
      :id="id"
      :class="messageClassName"
      v-show="visible"
      ref="messageRef"
      :style="customStyle"
    >
      <i :class="iconClassName"></i>
      <p>{{ message }}</p>
      <i
        v-show="showClose"
        class="iconfont icon-close c-message-closeButton"
        @click="close"
      ></i>
    </div>
  </Transition>
</template>
<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useResizeObserver } from '@vueuse/core'
import { getLastTop, deleteInstance } from './instance'
import { messageProps } from './index'
import './index.scss'
defineOptions({
  name: 'CMessage'
})

const messageRef = ref()
const height = ref(0)
const visible = ref(false)

const props = withDefaults(defineProps<messageProps>(), {
  message: '',
  type: 'info',
  showClose: false,
  duration: 2000
})

onMounted(() => {
  visible.value = true
  if (props.duration != 0)
    setTimeout(() => {
      close()
    }, props.duration)
})

function close() {
  visible.value = false
}

const allowedTypes = ['success', 'warning', 'info', 'error']
let iconClassName = 'iconfont'
const messageClassName = computed(() => {
  let fullClassName = 'c-message'
  fullClassName += allowedTypes.includes(props.type)
    ? ` c-message-${props.type}`
    : ' c-message-info'
  iconClassName += ` icon-${props.type}`
  return fullClassName
})

// 设计思路：多个message触发时，下一个message的top值等于上一个message的 height + top 值
// (还会再加上默认的top:15px,不然message会上下紧贴在一起)
// 前一个message的top值
const lastTop = computed(() => getLastTop(props.id))
const top = computed(() => lastTop.value)
// 每个message都要提供自身的"bottom"值：等于 height + top，用于下一个message计算它的top
const bottom = computed((): number => height.value + top.value)
const customStyle = computed(() => ({
  top: `${top.value}px`
}))

// 监听message的变化，实时更新message的高度
useResizeObserver(messageRef, () => {
  height.value = messageRef.value.getBoundingClientRect().height
})

// 暴露本message实例的bottom值
defineExpose({
  bottom
})
</script>
<style lang="scss" scoped></style>
