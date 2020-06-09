<template>
  <div>
    <p>lodash.js 对象数组深拷贝</p>
    <router-link to="/">返回目录</router-link>
  </div>
</template>

<script>
export default {
  mounted() {
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
    obj2.b.f.g = 2;
    obj2.c = [1, 2];
    obj2.h = 1;
    console.log(obj1); // obj2.b.f.g = 1  obj1.c = [1, 2, 3]  obj1.h = function () {}
    console.log(obj2); // obj2.b.f.g = 2  obj2.c = [1, 2] obj2.h = 1
  }
};
</script>
