<template>
  <div>
    {{ msg }}
    <button @click="xlz">跳转</button>
    <es6-child class="es6-child" />
  </div>
</template>

<script>
import Es6Child from './ES6-child.vue';
export default {
  components: {
    Es6Child
  },
  data() {
    return {
      msg: '呵呵',
      tableData: [
        {
          title: '第一个商品',
          goodsId: 1
        },
        {
          title: '第二个商品',
          goodsId: 2
        },
        {
          title: '第三个商品',
          goodsId: 3
        }
      ]
    };
  },
  mounted() {
    // this.arrow();
    // this.init();
    // let goods = { title: '第三个商品', goodsId: 3 };
    // this.deleteTableData(goods);
  },
  methods: {
    xlz() {
      // let id = 1;
      // this.$router.push({
      //   path: `/xlz/${id}`
      // });
      this.axios.get('http://192.168.1.156:8080/xlz.json').then(res => {
        console.log(res);
      });
    },
    arrow() {
      /*
       * Object.assign(新数组/新对象， 原数组/原对象)
       */
      let _ = require('lodash');
      let obj1 = {
        a: 1,
        b: { f: { g: 1 } },
        c: [1, 2, 3],
        h: () => {
          return 123;
        },
        k: undefined
      };
      let obj2 = _.cloneDeep(obj1);
      console.log(obj1);
      console.log(obj2);
      obj2.b.f.g = 2;
      obj2.c = [1, 2];
      obj2.h = 1;
      console.log(obj1);
      console.log(obj2);

      // let arr = [1, [2, 3, [4, 5]], 6];
      // let arr1 = _.cloneDeep(arr);
      // console.log(arr);
      // console.log(arr1);
      // arr1[1][2][0] = 7;
      // console.log(arr);
      // console.log(arr1);

      // let arr = [1, [2, 3], 4];
      // let arr2 = arr.concat();
      // console.log(arr);
      // console.log(arr2);
      // arr2[0] = 5;
      // console.log(arr);
      // console.log(arr2);
      // arr2[1][0] = 6;
      // console.log(arr);
      // console.log(arr2);
      // let obj = {
      //   name: 'xlz',
      //   age: 22
      // };
      // let { ...obj2 } = obj;
      // obj2.name = 'xxx';
      // console.log(obj);
      // console.log(obj2);
      // let arr = [1, [2, 3], 4];
      // let [...arr2] = arr;
      // console.log(arr);
      // console.log(arr2);
      // arr2[0] = 5;
      // console.log(arr);
      // console.log(arr2);
      // arr[1][0] = 6;
      // console.log(arr);
      // console.log(arr2);
      // let count = obj.count;
      // count--;
      // console.log(count);
      // let obj = {
      //   name: 'xlz',
      //   sex: '男',
      //   age: {
      //     a: 1
      //   }
      // };
      // let obj2 = {};
      // Object.assign(obj2, obj);
      // obj2.age.a = 2;
      // console.log(obj.age.a);
      // let obj = {
      //   name: 'xlz',
      //   age: 25
      // };
      // let obj2 = obj;
      // obj2.name = 'xxx';
      // console.log(obj.name);
      // console.log(obj2.name);
      // let xlz = () => {
      //   console.log(this);
      // }
      // xlz();
      // setTimeout(
      //   function() {
      //     console.log(this.msg);
      //   }.bind(this),
      //   50
      // );
      // let self = this;
      // setTimeout(function() {
      //   console.log(self.msg);
      // }, 50);
      // setTimeout(() => {
      //   console.log(this.msg);
      // }, 50);
    },
    deleteTableData(goods) {
      this.tableData = this.tableData.filter(o => o.goodsId !== goods.goodsId);
    },
    init() {
      // 解构数据
      let [a, b, c] = [1, 2, 3];
      console.log(a);
      console.log(b);
      console.log(c);
      let [d = '呵呵'] = ['1'];
      console.log(d);
      let [e = '呵呵'] = [];
      console.log(e);
      // 解构对象
      let { foo, bar } = { foo: '1', bar: '2' };
      console.log(foo);
      console.log(bar);
      // 解构字符串
      let [a1, b1, c1] = 'xlz';
      console.log(a1);
      console.log(b1);
      console.log(c1);
      // 数组复制
      let arr = [1, 2, 3];
      let arr1 = [...arr];
      arr1.push(4);
      console.log(arr);
      console.log(arr1);
      let arr2 = [1, 2, 3, 4];
      // es6 for循环
      for (let value of arr2) {
        console.log(value);
        console.log(arr2);
      }
      // 字符串模板
      let xlz = 'xlz';
      let xlz2 = 2;
      let xlz3 = 4;
      let text = `${xlz}拖延症严重`;
      let text1 = `${1 + xlz2}`;
      console.log(text);
      console.log(text1);
      // 字符串模板查找
      console.log(text.includes(xlz));
      console.log(text.startsWith(xlz));
      console.log(text.endsWith(xlz));
      // 数组查找
      let arr3 = [4, 5, 6, 7, 8];
      console.log(arr3.includes(xlz2));
      console.log(arr3.includes(xlz3));
    }
  }
};
</script>
