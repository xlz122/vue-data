<template>
  <div>
    <p>find findIndex数组查找</p>
    <router-link to="/">返回目录</router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    let arr = [
      {
        name: '王一',
        age: 20,
        sex: '男'
      },
      {
        name: '小红',
        age: 21,
        sex: '女'
      },
      {
        name: '李二',
        age: 22,
        sex: '男'
      },
      {
        name: '小丽',
        age: 24,
        sex: '女'
      }
    ];
    // filter 筛选掉不符合的项，返回符合项，不会影响原数组
    let arr1 = arr.filter(item => item.age !== 22); // 筛选掉年龄22岁的
    console.log(arr);
    console.log(arr1);
    // map 不会改变原数组，会返回 boolean 值 [ false, true, false, false ]
    let arr2 = arr.map(item => item.age === 21);
    console.log(arr);
    console.log(arr2);
    // find 不会改变原数组，返回匹配到的item项，如果没有匹配到返回undefined
    let res = arr.find(item => item.age === 24);
    let res1 = arr.find(item => item.age === 25);
    console.log(res); // { name: '小丽',age: 24, sex: '女' }
    console.log(res1); // undefined
    // findIndex 不会改变原数组，返回匹配到项的下标，如果没有匹配到返回-1
    let ind = arr.findIndex(item => item.age === 21);
    let ind1 = arr.findIndex(item => item.age === 25);
    console.log(ind); // 1
    console.log(ind1); // -1
    // // find方法 条件为true 后续代码不会执行
    // let arr = [1, 2, 1, 3, 4, 5, 6];
    // let res = arr.find((item, index, array) => {
    //   console.log(item);
    //   console.log(index);
    //   console.log(array);
    //   if (item === 1) {
    //     return true;
    //   }
    // })
    // console.log(res);
    // // findIndex 用于查找当前项是否在数组存在
    // // 存在的话 返回所在数组第一次出现的下标
    // // 不存在，返回 -1
    // let id = 6;
    // let arr1 = [1, 5, 6, 10];
    // let res1 = arr1.findIndex(i => i == id);
    // console.log(res1);
  }
};
</script>
