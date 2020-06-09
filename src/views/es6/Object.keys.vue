<template>
  <div>
    <p>Object.keys() 对象所有key转为数组</p>
    <router-link to="/">返回目录</router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    // Object.keys() 数组项都是字符串
    // 如果参数是一个数组的话，会返回一个下标数组 [0, 1, 2]
    let arr = ['d', '1', 56];
    console.log(Object.keys(arr));
    // 如果参数是一个对象的话, 会返回一个对象key组成的数组 ['name', 'age', 'sex']
    let obj = { name: 'xxx', age: 123, sex: 'a' };
    console.log(Object.keys(obj));
    // 数组对象 同样会返回下标数组 [0, 1, 2]
    let arr2 = [{ title: 'a' }, { title: 'b' }, { title: 'c' }];
    console.log(Object.keys(arr2));
    // 对象的值是对象，只会返回最外层key [ 'name', 'o', 'age' ]
    let obj2 = { name: [1, 2, 3], o: { a: 26 }, age: 25 };
    console.log(Object.keys(obj2));
  }
};
</script>
