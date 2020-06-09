<template>
  <div>
    <p>try catch 异常代码检测</p>
    <router-link to="/">返回目录</router-link>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  mounted() {
    // 这是es10之前的写法
    try {
      arr = [];
    } catch (err) {
      console.log(err); // ReferenceError arr is not defined 引用错误
    }
    // es10 支持可以把异常变量省略
    // 如果发生了错误，还是会进入异常回调
    try {
      arr1 = [];
    } catch {
      console.log('省略异常变量后的异常错误');
    }
  }
};
</script>
