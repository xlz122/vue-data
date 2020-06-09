<template>
  <div>
    <div
      class="item1"
      style="width: 100px; height: 100px; margin: 0 auto; background-color: red;"
    ></div>
    <div
      class="item2"
      style="width: 100px; height: 100px; margin: 0 auto; background-color: yellow;"
    ></div>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  mounted() {
    // 模块化
    // 命名空间 解决命名冲突问题
    // import 命令输入的变量是只读的，因为它的本质就是输入接口
    // 如果import输入的变量是一个对象，可以对这个变量增加属性，但是不推荐这样做
    // import 的变量会有变量提升
    // 重复加载一个模块，最终编译的时候 只会加载一次
    /*
      例： 
        import { aaa } from './xlz.js';
        import { bbb } from './xlz.js';
        import { ccc } from './xlz.js';
      最终会编译成 
        import { aaa, bbb, ccc } from './xlz.js'
    */

   // 可以给导出变量名重名
   /*
    // obj as o
    // as固定写法，as是一个关键字 obj（变量在左） as o (重命名在右)
    例：
      let obj = { name: 'xxx', age: 26 };
      export { obj as o }
   */


    // 原型链知识es6的class类 静态方法 
    class X {
      constructor(name) {
        this.name = name;
      }
      getName() {
        console.log(this.name);
      }
      // 动态方法和静态方法可以重名使用
      static getName() {
        console.log(this.name);
      }
    }
    let x = new X('xxx');
    x.getName(); // 实例不能调用静态方法
    X.getName(); // 静态方法只能被类本身调用，并且静态不会继承
    // 继承
    class Point {
      constructor(name) {
        this.name = name;
      }
      getName() {
        console.log(1);
      }
      // getName = () => {
      //   console.log(1);
      // }
    }
    class PO extends Point {
      constructor(name) {
        super(name);
      }
      pName() {
        super.getName();
      }
    }
    let po = new PO('x1');
    console.log(po.name);
    po.pName();
    // let { pName } = po;
    // pName();

    // 变量提升（var）,var会存在变量提升，使用var声明的变量，会被提升到当前作用域的顶部
    var k = 1;
    function j() {
      console.log(k); // undefined
      var k = 2;
      // 相当于
      /*
        var k;
        console.log(k);
        k = 2;
      */
    }
    j();
    // let
    // 变量提升注意的点：
      // vue的mounted和普通html的script，使用let会得到不一样的结果
      // mounted 未声明前报的undefined，普通html控制台报错，let声明的变量 不能在定义前使用
    let l = 1;
    function z() {
      console.log(l); // undefined
      let l = 2;
    }
    z();
    // dom0级 一个元素只能绑定一个事件
    // dom2级 一个元素可以绑定多个事件
    let item1 = document.querySelector('.item1');
    let item2 = document.querySelector('.item2');
    item1.onclick = function() {
      console.log('我是item1的点击事件');
    }
    item1.onmouseleave = function() {
      console.log('我是item1的划出事件，覆盖了前面定义的事件函数');
    }
    item2.addEventListener('click', function() {
      console.log('我是item2的点击事件，dom2级');
    }, false);
    item2.addEventListener('mouseleave', function() {
      console.log('我是item2的划出事件，dom2级');
    }, false);
    // es7 async 结合 es6 new Promise使用
    async function h() {
      // 并行写法
      const a = new Promise(resolve => {
        setTimeout(() => {
          console.log('h-第一个定时器');
          resolve();
        }, 2000);
      });
      const b = new Promise(resolve => {
        setTimeout(() => {
          console.log('h-第二个定时器');
          resolve();
        }, 1000);
      });
      await a;
      await b;
      console.log('等待结束执行');
    };
    h();
    async function g() {
      // 串行写法
      await new Promise(resolve => {
        setTimeout(() => {
          console.log('第一个定时器');
          resolve();
        }, 1000);
      });
      await new Promise(resolve => {
        setTimeout(() => {
          console.log('第二个定时器');
          resolve();
        }, 1000);
      });
      console.log('等待结束执行');
    };
    g();
    // es6的new Promise模拟异步
    function d() {
      f()
        .then(res => {
          console.log(res);
        })
      console.log('执行完成');
    }
    d();
    function f() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('定时器');
          resolve('回调');
        }, 1000);
      })
    }
    // for of 
    // 当不需要用到下标的时候，可以使用for of，val 代替 s[i]
    let s = [1, 2, 3, 4, 5, 6];
    for (let val of s) {
      console.log(val);
    }
    // 对象 数组互换
    let i = { name: 'xxx', age: 25 };
    let o = { name: 'xxxx', age: 52 };
    [o, i] = [i, o];
    console.log(i);
    console.log(o);
    let p = [1, 2, 3];
    let a = [4, 5, 6];
    [a, p] = [p, a];
    console.log(p);
    console.log(a);
    // 使用...扩展运算符，对象浅拷贝设置默认值
    function u(config) {
      let defaultConfig = {
        name: 'xxx',
        age: 25
      };
      config = { ...defaultConfig, ...config };
      console.log(config);
    }
    u({ age: 26 });
    // 使用Object.assign对象浅拷贝设置函数默认值
    function y(config) {
      config = Object.assign({
        name: 'xxx',
        age: 25
      }, config);
      console.log(config);
    }
    y({ age: 26 });
    // 使用对象解构 给函数赋值默认值
    // 缺点：如果一个参数不传的话，那么两个参数就会使用默认值，如果只传入其中一个参数的话，没有传入的那个参数会变成undefined
    function t({ name, age } = { name: 'xxx', age: 25 }) {
      console.log(name);
      console.log(age);
    }
    t({ age: 26 });
    // 变量和对象解构赋值命名冲突问题
    let q = 'q';
    let w = {
      q: 'w-q',
      e: 0
    };
    let { q: r, e } = w;
    console.log(q);
    console.log(r);
    console.log(e);
  }
};
</script>
