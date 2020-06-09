<template>
  <div>
    <p>filter筛选数组</p>
    <router-link to="/">返回目录</router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    let arr = [
      {
        name: 'x',
        age: 17
      },
      {
        name: 'xx',
        age: 18
      },
      {
        name: 'xxx',
        age: 19
      },
      {
        name: 'xxxx',
        age: 20
      }
    ];
    // filter有三个参数 当前项 下标 源数据
    let res = arr.filter(item => {
      return item.age === 20;
    });
    console.log(res);

    let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
    // filter 返回为true的项
    let res2 = arr2.filter(item => {
      console.log(item % 2); // 1 % 2 -> 1; 2 % 2 -> 0
      console.log(Boolean(item % 2)); // 1 -> true; 0 -> false
      return item % 2;
    });
    console.log(res2);

    // 省略return
    let arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
    let res3 = arr3.filter(item => item % 2);
    console.log(res3);
  }
};
</script>
