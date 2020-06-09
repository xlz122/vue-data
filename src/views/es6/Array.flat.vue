<template>
  <div>
    <p>多维数组转成一维数组</p>
    <router-link to="/">返回目录</router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    let arr = ['1', [false, 'str'], 1, ['bool', true, [1, 2, 3]]];
    console.log(arr.flat(3)); // flat参数是深度 指多少层
    console.log(arr.flat(Infinity)); // 无穷 不管多少层 都组成一个一维数组
  }
};
</script>
