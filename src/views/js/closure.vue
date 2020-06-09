<template>
  <div>
    <p>闭包</p>
    <router-link to="/">返回目录</router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    let res = this.init();
    console.log(res());
    console.log(res());
    let res2 = this.init();
    console.log(res2());
    console.log(res2());
  },
  methods: {
    // 闭包会使得函数得变量都保存在内存中，内存消耗很大
    // 解决方法：在退出函数之前，清除所有没有被使用的局部变量
    init() {
      let num = 0;
      return function() {
        return (num += 1);
      };
    }
  }
};
</script>
