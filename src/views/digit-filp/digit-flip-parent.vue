<!-- eslint-disable -->
<template>
  <DigitFlip
    :text="text"
    :delay="delay"
    :timingFn="timingFn"
    :beginZero="beginZero"
    @animationStart="animationStart"
    @animationEnd="animationEnd"
  />
</template>

<script>
/* eslint-disable */
import DigitFlip from './digit-flip.vue';
export default {
  components: {
    DigitFlip
  },
  data() {
    return {
      text: 9,
      duration: 0.8, // 执行时间
      delay: 0, // 延迟执行需要小于数据更新3s
      timingFn: '',
      beginZero: false
    }
  },
  mounted () {
    // setTimeout(() => {
    //   this.text++;
    // }, 1000);
  },
  methods: {
    animationStart() {
      console.log('开始执行');
    },
    animationEnd() {
      console.log('执行完成了');
      setTimeout(() => {
        this.text++;
      }, 5000);
    }
  }
}
</script>