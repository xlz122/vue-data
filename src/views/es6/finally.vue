<template>
  <div>
    <p>finally最终回调</p>
    <router-link to="/">返回目录</router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    async function init() {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('定时器');
          // resolve();
          reject('1');
        }, 1000);
      });
      return 123;
    }

    init()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        console.log('最终回调，不管成功还是失败都会调用这个函数');
      });
  }
};
</script>
