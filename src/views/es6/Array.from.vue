<template>
  <div>
    <p>类数组转数组</p>
    <router-link to="/">返回目录</router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    let obj = {
      0: 'z',
      1: 'x',
      2: 'c',
      length: 3
    };
    // 使用 Array.from 将类数组转为数组
    // 注： Array.from 下标需要从0开始 并且需要length属性
    console.log(Array.from(obj));
    // 第二种方法 使用Object.values 也可以将类数组转成数组
    // 该方法不需要从0开始，会默认从0开始，并且不需要length属性
    let obj1 = {
      1: 'a',
      5: 'b',
      6: 'c'
    };
    console.log(Object.values(obj1));
  }
};
</script>
