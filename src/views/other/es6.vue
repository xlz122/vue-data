<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // 问题： 当变量被声明之后，对象重复使用，导致的变量重名报错
      // 解决： 给对象重命名
      let name = 'xxx';
      let obj = {
        name: 'xyc',
        desc: '成人，一个被年龄吹涨的孩子'
      };
      // let { name, desc } = obj;
      let { name: objName, desc } = obj;
      console.log(name); // xxx
      console.log(objName); // xyc
      console.log(desc);
      // 使用对象解构的方式传参，并设置默认参数
      // 第一种方式
      function fn({ name, age } = { name: 'xxx', age: 25 }) {
        console.log(name);
        console.log(age);
      }
      fn();
      // 第二种方式
      function fn2(config) {
        let defaultParams = {
          name: 'xxx',
          age: 25
        };
        config = { ...defaultParams, ...config };
        console.log(config);
      }
      fn2({ name: 'xyc' });
      // 数组、对象互换
      let arr = [1, 2, 3];
      let arr2 = [4, 5, 6];
      [arr2, arr] = [arr, arr2];
      console.log(arr);
      console.log(arr2);
      let obj2 = {
        name: 'xyc',
        age: 25
      };
      let obj3 = {
        name: 'xxx'
      };
      [obj3, obj2] = [obj2, obj3];
      console.log(obj2);
      console.log(obj3);
      // for of
      // for of 没有了下标，val相当于了arr3[i]
      let arr3 = [1, 2, 3, 4, 5, 6];
      for (let val of arr3) {
        console.log(val);
      }
      // includes
      // includes 类似 indexOf,查找字符串、对象、数组,includes找到返回true,没找到返回false,indexOf找到返回当项下标,没找到返回 -1
      let str = 'abcd';
      console.log(str.indexOf('c')); // 2
      console.log(str.indexOf('e')); // -1
      console.log(str.includes('b')); // true
      console.log(str.includes('f')); // false
      // new Promise es6
      // 模拟异步执行,函数外部的程序并不会等待fn3函数执行完毕
      // function fn3() {
      //   return new Promise(resolve => {
      //     console.log('进入');
      //     resolve();
      //   });
      // }
      // fn3().then(() => {
      //   console.log('fn3函数回调');
      // });
      // console.log('函数外部');
      // async await es7
      // async 声明在函数前面，表示这个函数有异步操作
      // await 表示需要等待才会往下执行，可以在这这执行请求接口
      async function fn4() {
        await fn5();
        console.log('等待结束执行');
      }
      fn4();
      function fn5() {
        return new Promise(resolve => {
          console.log('进入fn5');
          setTimeout(() => {
            console.log('返回回调');
            resolve();
          }, 2000);
        });
      }
      // dom0级
      // 一个元素只能绑定一个事件，如果同一个元素绑定多个事件，后定义的事件会覆盖前面定义的事件
      // dom2级
      // 一个元素可以绑定多个事件，会依次执行
    }
  }
};
</script>
