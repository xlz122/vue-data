<template>
  <div>
    <p>Object.entries() Object.fromEntries() 对象转数组方法</p>
    <router-link to="/">返回目录</router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    let obj = {
      name: 'xxx',
      age: 22,
      sex: '男',
      hobby: 'money'
    };
    let arr = Object.entries(obj);
    // 转成数组方法 第一项为key(string) 第二项为value(value本身是什么，对应的就是什么)
    console.log(arr); // [['name', 'xxx'], ['age', 22], ['sex', '男'], ['hobby', 'money']]
    // Object.fromEntries() 方法 则是将arr这种格式的数组 转换成对象 键值对的方法
    let obj1 = Object.fromEntries(arr);
    console.log(obj1); // { name: 'xxx', age: 22, sex: '男', hobby: 'money' }

    // Object.entries()
    // 对象每一项单独一个数组 包裹在一个数组集合里
    // 简单的对象 一一对应(key为字符串，value类型一一对应)， [ ['name', 'xyc'], ['age', 26], ['bool', false]]
    let obj3 = {
      name: 'xyc',
      age: 26,
      sex: '男',
      bool: false
    };
    console.log(Object.entries(obj3));
    // 复杂对象 每个key value对会在同一个数组，数组第二项对应整个value
    let obj2 = { name: [1, 2, 3], o: { a: 26 }, age: 25 };
    console.log(Object.entries(obj2));
    // 普通数组 每一项会在一个单独的数组里，数组第一项为原数组对应的下标，第二项为原数组对应的值
    let arr2 = ['d', '1', 56];
    console.log(Object.entries(arr2));
    // 数组对象，每一项会在一个单独的数组里，数组第一项为原数组对应的下标，第二项为原数组对应的值
    let arr3 = [{ title: 'a' }, { title: 'b' }, { title: 'c' }];
    console.log(Object.entries(arr3));
  }
};
</script>
