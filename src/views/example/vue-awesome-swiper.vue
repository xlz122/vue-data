<template>
  <div>
    <p>vue-awesome-swiper 轮播</p>
    <router-link to="/">返回目录</router-link>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>I'm Slide 1</swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
      <swiper-slide>I'm Slide 5</swiper-slide>
      <swiper-slide>I'm Slide 6</swiper-slide>
      <swiper-slide>I'm Slide 7</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>
<script>
// import { swiper, swiperSlide } from 'vue-awesome-swiper';
// import 'swiper/swiper-bundle.css'
export default {
  // components: {
  //   swiper,
  //   swiperSlide
  // },
  data() {
    return {
      swiperOption: {
        notNextTick: true,
        //循环
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        //滑动速度
        speed: 800,
        //滑动方向
        direction: 'horizontal',
        //小手掌抓取滑动
        grabCursor: false,
        //滑动之后回调函数
        on: {
          slideChangeTransitionEnd: function() {
            console.log(this.activeIndex); //切换结束时，告诉我现在是第几个slide
          }
        },
        //左右点击
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        //分页器设置
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'custom',
          //自定义分页器样式
          renderCustom: function(swiper, current, total) {
            const activeColor = '#168fed';
            const normalColor = '#aeaeae';
            let color = '';
            let paginationStyle = '';
            let html = '';
            for (let i = 1; i <= total; i++) {
              if (i === current) {
                color = activeColor;
              } else {
                color = normalColor;
              }
              paginationStyle = `background:${color};opacity:1;margin-right:20px;width:20px;height:20px;transform:skew(15deg);border-radius:0;`;
              html += `<span class="swiper-pagination-bullet" style=${paginationStyle}></span>`;
            }
            return html;
          }
        }
      }
    };
  },

  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper-container {
  height: 200px;
  overflow: hidden;
  margin-top: 88px; /*px*/
}
.swiper-wrapper {
  height: 200px;
}
.swiper-slide {
  height: 200px;
  float: left;
  background: red;
}
</style>