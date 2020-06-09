<template>
  <div>
    <p>animation 动画</p>
    <router-link to="/">返回目录</router-link>
    <div class="ani"></div>
  </div>
</template>

<style lang="less" scoped>
.ani {
  position: relative;
  width: 100px;
  height: 100px;
  background: red;
  margin: 40px auto 0;
  animation: mymove 1.4s linear 1;
}

@keyframes mymove {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
