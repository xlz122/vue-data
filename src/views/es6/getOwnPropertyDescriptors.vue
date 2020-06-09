<!-- eslint-disable -->
<template>
  <div>
    <p>getOwnPropertyDescriptor 获取对象属性描述符，defineProperty 设置对象属性描述符</p>
    <router-link to="/">返回目录</router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    // Object.getOwnPropertyDescriptor(obj, key) // 获取单个
    // Object.getOwnPropertyDescriptors(obj) // 获取全部
    // Object.defineProperty(obj, key, { }) // 设置单个key
    // Object.defineProperties(ojb, { key: { } }) // 设置多个
    /*
      历史了解： es5 中getOwnPropertyDescriptor('a', 1) 如果传入的不是一个对象，会报TypeError a不是一个对象
      在es6中，传入的如果不是一个对象的话，会强制转换成一个对象
    */
    let obj = {
      name: 'l',
      age: 23,
      sex: '女'
    };
    // es5
    // getOwnPropertyDescriptor 获取自己的属性描述符
    // 传入两个参数，参数一为对象集合，参数二为对象的某个key，方法返回该key的属性描述符
    let name1 = Object.getOwnPropertyDescriptor(obj, 'name');
    console.log(name1);
    Object.defineProperty(obj, 'name', {
      value: '123',
      writable: false,
      enumerable: false,
      configurable: false
    });
    console.log(obj);
    console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
    // obj.name = 'xxx'; // writable 是否可写（值能否被改变）
    // console.log(obj);
    // delete obj.name; // configurable 是否可配置（能否被删除）
    // console.log(obj);
    // 一次性修改多个属性
    Object.defineProperties(obj, {
      age: {
        value: 24,
        writable: true,
        enumerable: true,
        configurable: true
      },
      sex: {
        configurable: false
      }
    });
    console.log(Object.getOwnPropertyDescriptors(obj));
    // 如果查找的key不存在对象集合上，返回undefined
    console.log(Object.getOwnPropertyDescriptor(obj, 'hobby'));

    // es8
    let obj1 = {
      name: 'l',
      age: 23,
      sex: '女'
    };
    let obj2 = {
      hobby: '打篮球'
    };
    // getOwnPropertyDescriptors  加s的区别，获取对象所有key的属性描述符
    let descriptors = Object.getOwnPropertyDescriptors(obj1);
    console.log(descriptors);
    // Object.assign() 方法无法拷贝对象的get 和 set方法
    // 搭配 Object.getOwnPropertyDescriptors 来实现get set的拷贝
    // 示例：
    Object.assign(obj1, Object.getOwnPropertyDescriptors(obj2));
  }
};
</script>
