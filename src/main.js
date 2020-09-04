import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
Vue.use(VueAwesomeSwiper, /* { default options with global component } */);

// 图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: require('./assets/img-loading.gif'), // 加载中图片，一定要有，不然会一直重复加载占位图
  error: require('./assets/img-error.jpg'), // 加载失败图片
  preLoad: 1, // 提前加载高度，默认1.3
  attempt: 1, // 加载错误后最大重试次数，默认3
});

// 引入iview
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
