<template>
  <div>
    <p>是否包含</p>
    <router-link to="/">返回目录</router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    // es7新增 includes 参数一 要查找的内容， 参数二 查找开始的下标
    let arr = ['a', 'b', 'c'];
    console.log(arr.includes('a', 1)); // false
    let str = 'abcdefghijk';
    console.log(str.includes('b', 1)); // true 下标1开始查找 找到返回true
  }
};
</script>
