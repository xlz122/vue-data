<!-- eslint-disable -->
<template>
  <div id="nav" class="home">
    <div>
      <dl class="list">
        <dt>js语法</dt>
        <dd>
          <router-link to="/filter">filter 筛选数组</router-link>
        </dd>
        <dd>
          <router-link to="/closure">closure 闭包</router-link>
        </dd> 
        <dd>
          <router-link to="/recursion">recursion 递归</router-link>
        </dd>
        <dd>
          <router-link to="/callbackFunction">callback 回调函数</router-link>
        </dd>
        <dd>
          <router-link to="/newFunction">new Function() 构造函数</router-link>
        </dd>
        <dd>
          <router-link to="/newFunctionThis">new Function() this指向</router-link>
        </dd>
      </dl>
      <dl class="list">
        <dt>es6+语法</dt>
        <dd>
          <router-link to="/class">class类</router-link>
        </dd>
        <dd>
          <router-link to="/includes">includes 是否包含</router-link>
        </dd>
        <dd>
          <router-link to="/async+await">async+await 异步等待</router-link>
        </dd>
        <dd>
          <router-link to="/finally">finally 最终回调</router-link>
        </dd>
        <dd>
          <router-link to="/try+catch">try catch 异常代码检测</router-link>
        </dd>
         <dd>
          <router-link to="/find+findIndex">find findIndex数组查找</router-link>
        </dd>
        <dd>
          <router-link to="/Object.keys">Object.keys() 对象所有key转为数组</router-link>
        </dd>
        <dd>
          <router-link to="/Object.values">Object.values() 对象所有value转为数组</router-link>
        </dd>
        <dd>
          <router-link to="/getOwnPropertyDescriptors">getOwnPropertyDescriptor 获取对象属性描述符，defineProperty 设置对象属性描述符</router-link>
        </dd>
        <dd>
          <router-link to="/new-set">new Set() 用于简单的数组去重</router-link>
        </dd>
        <dd>
          <router-link to="/Array.flat">Array.flat 多维数组转成一维数组</router-link>
        </dd>
        <dd>
          <router-link to="/Array.from">Array.from 将类数组转为数组</router-link>
        </dd>
        <dd>
          <router-link to="/Object.entries+Object.fromEntries">Object.entries() Object.fromEntries() 对象转数组方法</router-link>
        </dd>
        
        <dd>
          <router-link to="/padStrat+padEnd">padStrat+padEnd 字符串填充</router-link>
        </dd>
        <dd>
          <router-link to="/trim+trimStart+trimEnd">trim() trimStart() trimEnd()去除字符串空格</router-link>
        </dd>
        <dd>
          <router-link to="/repeat">repeat 字符串重复</router-link>
        </dd>
      </dl>
    </div>
    <div>
      <dl class="list">
        <dt>实例</dt>
        <dd>
          <router-link to="/lodash-clone">lodash.js 对象数组深拷贝</router-link>
        </dd>
        <dd>
          <router-link to="/digit-flip-parent">digit-flip-parent 数字翻转</router-link>
        </dd>
        <dd>
          <router-link to="/list-scroll-seamless">list-scroll-seamless 列表无缝滚动</router-link>
        </dd>
        <dd>
          <router-link to="/scatter-map">ECharts 散点迁移地图</router-link>
        </dd>
        <dd>
          <router-link to="/scatter-map-coords">ECharts 地图坐标json文件</router-link>
        </dd>
        <dd>
          <router-link to="/sort-arr">输入一个数值，返回数组项最接近的一项</router-link>
        </dd>
        <dd>
          <router-link to="/animation">animation 动画</router-link>
        </dd>
        <dd>
          <router-link to="/render-call">render函数渲染组件</router-link>
        </dd>
        <dd>
          <router-link to="/iview-uploadFile">iveiw 上传多文件只请求一次ajax</router-link>
        </dd>
        <dd>
          <router-link to="/vue-awesome-swiper">vue-awesome-swiper 轮播</router-link>
        </dd>
        <dd>
          <router-link to="/vue-lazyload">vue-lazyload 图片懒加载</router-link>
        </dd>
        <dd>
          <router-link to="/vue-observable">vue-observable全局API，小型vuex</router-link>
        </dd>
      </dl>
      <dl class="list">
        <dt>其他</dt>
      </dl>
    </div>
    <Test @delList="delList" @delList2="delList2" />
  </div>
</template>

<script>
import Test from './Test.vue';

export default {
  name: 'Home',
  components: {
    Test
  },
  methods: {
    delList(value) {
      console.log(value);
    },
    delList2(value) {
      console.log(value);
    }
  }
};
</script>

<style lang="less" scoped>
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #42b983;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .list {
    display: inline-block;
    width: 50%;
    vertical-align: top;
    text-align: left;
    dd {
      margin-top: 5px;
    }
  }
}
</style>
