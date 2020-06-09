<template>
  <div>
    <p>Object.values() 对象所有value转为数组</p>
    <router-link to="/">返回目录</router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    // Object.values 将对象的所有的value值返回成一个数组
    // Object.values 返回的对应的value 不会变成字符串
    let obj = {
      name: 'xyc',
      age: 26,
      sex: '男',
      bool: false
    };
    // 返回对象value 是一个数组 ['xyc', 26, '男', false ]
    console.log(Object.values(obj));
    // 复杂对象会把复杂项原模原样返回来，key: value 单一对应的会会返回value值
    let obj2 = { name: [1, 2, 3], o: { a: 26 }, age: 25 };
    console.log(Object.values(obj2));
    // 普通数组 整个数组原模原样返回来
    let arr = ['d', '1', 56];
    console.log(Object.values(arr));
    // 数组对象 整个数组原模原样返回来
    let arr2 = [{ title: 'a' }, { title: 'b' }, { title: 'c' }];
    console.log(Object.values(arr2));
  }
};
</script>
