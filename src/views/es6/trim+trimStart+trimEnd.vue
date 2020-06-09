<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    let str = ' 11 ';
    console.log(str);
    console.log(str.length); // 4
    // trimStart() / trimEnd() 方法 以返回值的方式 需要赋值给新的变量来接收
    // trimStart 去除字符串开头空格
    let str1 = str.trimStart();
    console.log(str1.length); // 3
    // trimEnd() 去除字符串末尾空格
    str1 = str1.trimEnd();
    console.log(str1.length);
  }
};
</script>
