<!-- eslint-disable -->
<template>
  <div class="container">
    <digit-roll
      :digits="digits"
      :time="time"
      :flipStra="flipStra"
      @rollStart="rollStart"
      @rollEnd="rollEnd"
      :customSetDigit="customSetDigit2"
    />
  </div>
</template>

<script>
/* eslint-disable */
// npm install --save @huoyu/vue-digitroll
import DigitRoll from './digit-roll.vue';
export default {
  components: {
    DigitRoll
  },
  data() {
    return {
      digits: 2218,
      time: 500,
      customSetDigit: {},
      customSetDigit2: [],
      flipStra: true
    };
  },
  mounted() {
    setInterval(() => {
      this.digits++;
    }, 3000)
    // 控制上下滚动 / 一直向上
    // setTimeout(() => {
    //   this.flipStra(5678, 4321);
    // }, 4000);
    // 自定义动画 - 整体控制
    // setTimeout(() => {
    //   this.customSetDigit = { digits: 8888, dur: '2000', easeFn: 'ease', flipStra: false }
    // }, 4000)
    // 自定义动画 - 单独控制每一个数字
    // setTimeout(() => {
    //   this.customSetDigit2 = [
    //     {
    //       value: 2,
    //       dur: 600,
    //       easeFn: 'ease'
    //     },
    //     {
    //       value: 4,
    //       dur: 900,
    //       flipStra: true
    //     },
    //     {
    //       value: 6,
    //       dur: 1200,
    //       flipStra: false
    //     },
    //     {
    //       value: 7,
    //       dur: 1500
    //     }
    //   ];
    // }, 4000);
  },
  methods: {
    rollStart() {
      console.log('动画开始触发');
    },
    rollEnd() {
      console.log('动画结束触发');
    },
    flipStra(before, next) {
      // before 旧值
      // next 新值
      // if (before > next) {
      //   console.log('true');
      //   return true;
      // }
      // return false;
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 320px;
  margin: 0 auto;
  background-color: yellowgreen;
}
</style>
