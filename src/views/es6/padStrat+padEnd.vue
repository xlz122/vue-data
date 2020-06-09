<template>
  <div>
    <p>字符串填充</p>
    <router-link to="/">返回目录</router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    // es7新增 padStrat padEnd 字符串填充
    let str1 = 'aaa';
    console.log(str1.padStart(10, 'xlz'));
    console.log(str1.padEnd(str1.length + 1, 'x'));
    // padStrat padEnd 字符串拼接方法 有两个参数，参数一，指定拼接之后的字符串长度 参数二 拼接的字符，拼接的字符如果小于拼接的长度，那么会进行重复拼接
    let str = '456';
    str.padStart(6, '1234');
    console.log(str);
    console.log(str.padStart(6, '1234'));
    // 拼接方法 是返回的方式 不会改变原字符串 所以需要赋值给一个变量
    let resStr = str.padEnd(6, '789');
    console.log(resStr);
  }
};
</script>
