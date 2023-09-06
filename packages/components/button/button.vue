<template>
  <button class="red"><slot>默认按钮</slot></button>
</template>
<script setup lang="ts">
//定义组件名字，决定了组件被使用时的标签名
defineOptions({
  name: 'CButton'
})
</script>
<style lang="scss" scoped>
.red {
  color: red;
}
</style>
