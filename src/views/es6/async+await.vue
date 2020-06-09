<template>
  <div>
    <p>异步等待</p>
    <router-link to="/">返回目录</router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    // async await es7新增
    // 需要return 才会进入then
    async function fn() {
      return await new Promise(resolve => {
        setTimeout(() => {
          console.log('定时器');
          resolve('成功回调');
        }, 1000);
      });
    }
    fn().then(res => {
      console.log(res);
    });
  }
};
</script>
