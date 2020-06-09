<template>
  <div>
    <p>new Set() 用于简单的数组去重</p>
    <router-link to="/">返回目录</router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    let arr = [1, 2, 1, 3, 4, 5, 2];
    let res = new Set(arr);
    console.log(res);
  }
};
</script>
