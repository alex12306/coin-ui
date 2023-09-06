<template>
  <div id="main">
    <div class="devBox">
      <c-button type="success"></c-button>
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
    // background-color: rgb(2, 87, 2);
    height: 300px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
}
</style>
