<template>
  <div>
    <p>输入一个数值，返回数组项最接近的一项</p>
    <router-link to="/">返回目录</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: []
    };
  },
  mounted() {
    for (let i = 0; i < 100000; i++) {
      this.arr.push(Math.floor(Math.random() * 105551));
    }
    setTimeout(() => {
      // 打印为返回值
      console.log(this.lookup(this.arr, 23));
      console.log(this.limit(this.arr, 23));
    }, 3000);
  },
  methods: {
    lookup(array, value) {
      console.time();
      // 将原数组复制，不会影响原数组
      let arr = array.concat([]);
      arr.push(value);
      // 数据排序
      arr.sort((a, b) => {
        return a - b;
      });
      let index = arr.indexOf(value);
      // 当前项在数组第一项 / 最后一项，返回当前项的后一项 / 前一项
      if (index === 0) {
        return arr[index + 1];
      } else if (index === array.length - 1) {
        return arr[index - 1];
      }
      // 当前项和前一项或者后一项比较，返回差值小的项
      let resultIndex =
        arr[index] - arr[index - 1] > arr[index + 1] - arr[index]
          ? index + 1
          : index - 1;
      console.timeEnd();
      return arr[resultIndex];
    },
    limit(arr, num) {
      console.time();
      let newArr = [];
      arr.map(item => {
        // 对数组各个数值求差值
        newArr.push(Math.abs(item - num));
      });
      // 求最小值的索引
      let index = newArr.indexOf(Math.min.apply(null, newArr));
      console.timeEnd();
      return arr[index];
    }
  }
};
</script>
