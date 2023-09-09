<template>
  <div id="main">
    <div class="devBox">
      <c-button type="success" @click="show"></c-button>
    </div>
  </div>
</template>
<script setup lang="ts">
// import { ref } from 'vue'
import { CMessage } from 'coin-ui'
// const showMessage = ref(false)
let num = 1
function show() {
  CMessage({
    message: `${num++}`,
    type: 'error',
    showClose: true,
    duration: 0,
    onClose: () => {
      console.log('关闭')
    }
  })
}
</script>
<style lang="scss" scoped>
#main {
  position: relative;
  height: 100%;
  width: 100%;
  .devBox {
    // background-color: rgb(2, 87, 2);
    height: 300px;
    width: 100%;
    display: flex;
    align-items: center;
    // justify-content: center;
    position: relative;
  }
}
</style>
