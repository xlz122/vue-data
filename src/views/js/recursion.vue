<template>
  <div>
    <p>递归</p>
    <router-link to="/">返回目录</router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    // 递归 自己调用自己 有时可以代替多层循环 使代码更简洁
    let arr = [
      {
        title: [{ len: 122 }],
        count: 12
      },
      {
        title: [{ len: 123 }],
        count: 13
      },
      {
        title: [{ len: 124 }],
        count: 14
      }
    ];
    let result = [];
    function recursion(array) {
      array.map(item => {
        if (item.title) {
          recursion(item.title);
        } else {
          result.push(item.len);
        }
      });
    }
    recursion(arr);
    console.log(result);
  }
};
</script>
