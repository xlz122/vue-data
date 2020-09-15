import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  // js部分
  {
    path: '/closure',
    name: 'closure',
    component: () => import('../views/js/closure.vue')
  },
  {
    path: '/filter',
    name: 'filter',
    component: () => import('../views/js/filter.vue')
  },
  {
    path: '/newFunction',
    name: 'newFunction',
    component: () => import('../views/js/newFunction.vue')
  },
  {
    path: '/newFunctionThis',
    name: 'newFunctionThis',
    component: () => import('../views/js/newFunctionThis.vue')
  },
  {
    path: '/recursion',
    name: 'recursion',
    component: () => import('../views/js/recursion.vue')
  },
  {
    path: '/callbackFunction',
    name: 'callbackFunction',
    component: () => import('../views/js/callbackFunction.vue')
  },
  // es6+
  {
    path: '/includes',
    name: 'includes',
    component: () => import('../views/es6/includes.vue')
  },
  {
    path: '/padStrat+padEnd',
    name: 'padStrat+padEnd',
    component: () => import('../views/es6/padStrat+padEnd.vue')
  },
  {
    path: '/async+await',
    name: 'async+await',
    component: () => import('../views/es6/async+await.vue')
  },
  {
    path: '/Array.flat',
    name: 'Array.flat',
    component: () => import('../views/es6/Array.flat.vue')
  },
  {
    path: '/Array.from',
    name: 'Array.from',
    component: () => import('../views/es6/Array.from.vue')
  },
  {
    path: '/finally',
    name: 'finally',
    component: () => import('../views/es6/finally.vue')
  },
  {
    path: '/find+findIndex',
    name: 'find+findIndex',
    component: () => import('../views/es6/find+findIndex.vue')
  },
  {
    path: '/getOwnPropertyDescriptors',
    name: 'getOwnPropertyDescriptors',
    component: () => import('../views/es6/getOwnPropertyDescriptors.vue')
  },
  {
    path: '/new-set',
    name: 'new-set',
    component: () => import('../views/es6/new-set.vue')
  },
  {
    path: '/Object.entries+Object.fromEntriest',
    name: 'Object.entries+Object.fromEntries',
    component: () =>
      import('../views/es6/Object.entries+Object.fromEntries.vue')
  },
  {
    path: '/repeat',
    name: 'repeat',
    component: () => import('../views/es6/repeat.vue')
  },
  {
    path: '/trim+trimStart+trimEnd',
    name: 'trim+trimStart+trimEnd',
    component: () => import('../views/es6/trim+trimStart+trimEnd.vue')
  },
  {
    path: '/try+catch',
    name: 'try+catch',
    component: () => import('../views/es6/try+catch.vue')
  },
  {
    path: '/class',
    name: 'class',
    component: () => import('../views/es6/class.vue')
  },
  {
    path: '/Object.keys',
    name: 'claObject.keysss',
    component: () => import('../views/es6/Object.keys.vue')
  },
  {
    path: '/Object.values',
    name: 'Object.values',
    component: () => import('../views/es6/Object.values.vue')
  },
  // 实例
  {
    path: '/lodash-clone',
    name: 'lodash-clone',
    component: () => import('../views/example/lodash-clone.vue')
  },
  {
    path: '/digit-flip-parent',
    name: 'digit-flip-parent',
    component: () => import('../views/digit-filp/digit-flip-parent.vue')
  },
  {
    path: '/list-scroll-seamless',
    name: 'list-scroll-seamless',
    component: () => import('../views/example/list-scroll-seamless.vue')
  },
  {
    path: '/scatter-map',
    name: 'scatter-map',
    component: () => import('../views/echarts/scatter-map.vue')
  },
  {
    path: '/scatter-map-coords',
    name: 'scatter-map-coords',
    component: () => import('../views/echarts/scatter-map-coords.vue')
  },
  {
    path: '/sort-arr',
    name: 'sort-arr',
    component: () => import('../views/example/sort-arr.vue')
  },
  {
    path: '/animation',
    name: 'animation',
    component: () => import('../views/example/animation.vue')
  },
  {
    path: '/render-call',
    name: 'render-call',
    component: () => import('../views/example/render-call.vue')
  },
  {
    path: '/iview-uploadFile',
    name: 'iview-uploadFile',
    component: () => import('../views/example/iview-uploadFile.vue')
  },
  {
    path: '/vue-awesome-swiper',
    name: 'vue-awesome-swiper',
    component: () => import('../views/example/vue-awesome-swiper.vue')
  },
  {
    path: '/vue-lazyload',
    name: 'vue-lazyload',
    component: () => import('../views/example/vue-lazyload.vue')
  },
  {
    path: '/vue-observable',
    name: 'vue-observable',
    component: () => import('../views/example/vue-observable.vue')
  }
  // 其他
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
