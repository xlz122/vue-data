<template>
  <div>
    <p>new Function() 构造函数</p>
    <router-link to="/">返回目录</router-link>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  mounted() {
    // C/S 客户端/服务端 不能跨平台
    // B/S 浏览器/服务端 可以跨平台

    // Nginx非常擅长处理静态资源(img,css,js,video)，所以也经常作为静态资源服务器，也就是我们平时所说的CDN
    // 浏览器html默认的字体大小是16px,如果没有手动设置，浏览器默认以 16px = 1rem
    
    // 虚拟dom随react的诞生而诞生，由fackbook提出，紧随react之后，vue2.0随之将虚拟dom的概念引入
    // 虚拟dom就会为了解决浏览器性能问题而被设计出来的
    // 基于js计算的，开销比较小，执行效率高

    
    // 构造函数的this指向函数本身
    function Person(name, age) {
      this.name = name;
      this.age = age;
    }
    // 每个函数都一个prototype属性，这个属性指向原型对象
    Person.prototype.say = function() {
      console.log(this.name);
    };
    console.log(Person);
    let person = new Person('xxx', 18); // 变量person是构造函数Person的实例 
    // person.constructor 实例有个constructor属性，该属性是一个指针，指向函数本身
    console.log(person.__proto__);
    console.log(person.__proto__ === Person.prototype);
    console.log(person.say);
    console.log(Person.prototype.say);
    console.log(person.say === Person.prototype.say);
    person.say();
  }
};
</script>
