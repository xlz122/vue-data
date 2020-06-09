<template>
  <div>
    <p>new Function() this指向</p>
    <router-link to="/">返回目录</router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    let obj = {
      name: 'xxx',
      fn: function() {
        console.log(this.age);
        console.log(this === obj);
      }
    };
    obj.fn();
    // 构造函数的this就是指向构造函数
    class Point {
      constructor(name) {
        this.name = name;
      }
      static getName = () => {
        console.log(this.name);
      };
      getName() {
        console.log(this.name);
      }
    }
    let point = new Point('xxx');
    Point.getName(); // Point 函数名
    point.getName(); // xxx
  }
};
</script>
