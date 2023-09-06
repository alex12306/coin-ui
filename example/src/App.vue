<template>
  <div id="main">
    <div class="devBox">
      <div class="father">cdd</div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
#main {
  position: relative;
  height: 100%;
  width: 100%;

  .devBox {
    background-color: rgb(2, 87, 2);
    height: 300px;
    width: 100%;
    display: flex;
    // align-items: center;
    // justify-content: center;
    position: relative;
    .father {
      position: absolute;
      top: 50%;
      left: 50%;
      // transform: translate(-50%, -50%);
      height: 50px;
      width: 50px;
      background-color: red;
    }
  }
}
</style>
