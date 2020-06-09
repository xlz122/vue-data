<template>
  <div>
    <p>class类</p>
    <router-link to="/">返回目录</router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    class Foo {
      constructor(name) {
        this.name = name;
      }
      abl() {
        console.log(this.name);
      }
    }
    let foo = new Foo('xxx');
    console.log(foo.name);
    foo.abl();
    // 定义一个立即执行的class类
    let classAge = new (class {
      constructor(age) {
        this.age = age;
      }
      getAge() {
        console.log(this.age);
      }
    })(25);
    classAge.getAge();
    // class没有变量提升
    // new Bar(); // Bar is not a constructor" Bar不是一个构造函数
    // class Bar {
    //   setName() {
    //     console.log('设置name方法');
    //   }
    // }
    // class类的this指向
    // 使用es6的按需引入方式，this找不到
    // 第一种方式，通过绑定this的方法，将this绑定给方法
    // 第二种方式，使用箭头函数
    class Person {
      constructor() {
        this.printAge = this.printAge.bind(this);
      }
      printAge(age) {
        this.age(`还有20天，就是20年了，${age}岁了`);
      }
      age(text) {
        console.log(text);
      }
      printName = name => {
        this.name(`大傻逼:${name}`);
      };
      name(text) {
        console.log(text);
      }
    }
    let person = new Person();
    person.printAge(18);
    let { printAge } = person;
    printAge(26);
    let { printName } = person;
    printName('xxx');
    // class类中的静态方法
    // 静态方法 可以和不是静态方法重名
    // 静态方法不能被实例调用，只能被类本身调用，并且静态方法不会被继承
    class Hello {
      constructor() {
        this.getName = this.getName.bind(this);
      }
      getName(name) {
        this.name(`${name}`);
      }
      name(name) {
        console.log(name);
      }
      getAge = age => {
        this.age(age);
      };
      age(age) {
        console.log(age);
      }
      static bar(bar = 'bar') {
        console.log(`静态方法${bar}`);
      }
      bar(bar = 'bar') {
        console.log(`不是静态方法，且可以和静态方法重名--${bar}`);
      }
      text = '我是text文本';
    }
    let hello = new Hello();
    hello.getName('xxx');
    let { getAge } = hello;
    getAge(26);
    hello.bar('实例调用');
    Hello.bar('类本身调用');
    console.log(hello.text);
    // class类的继承
    // 通过super来调用调用父类的方法的时候，this会指向当前的子类实例
    // 由于this指向当前子类实例，子类赋值的时候，赋值会变成子类的属性
    class Point {
      constructor(name) {
        this.name = name;
      }
      getName() {
        console.log(this.name);
      }
    }
    class P extends Point {
      constructor(name) {
        super(name);
      }
      pName() {
        super.getName();
      }
    }
    let p = new P('x1');
    console.log(p.name);
    p.pName();
    // console.log(Point.prototype);
    // console.log(P.prototype);
  }
};
</script>
