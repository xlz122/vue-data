<template>
  <div>
    <p>repeat 字符串重复</p>
    <router-link to="/">返回目录</router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    let str = 'jdfaofaosfajjij';
    let num = str.repeat(2); // 类似 num = str + str; num = str + str + str;
    console.log(num);
  }
};
</script>
