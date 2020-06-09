<template>
  <div>
    <p>callback 回调函数</p>
    <router-link to="/">返回目录</router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    function a(name, callback) {
      console.log(name);
      callback();
    }
    function b() {
      console.log('我是回调函数');
    }
    a('xxx', b);
  }
};
</script>
