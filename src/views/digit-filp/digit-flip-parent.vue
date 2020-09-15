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
import DigitFlip from './digit-flip.vue';
export default {
  components: {
    DigitFlip
  },
  data() {
    return {
      text: 9,
      duration: 0.3, // 执行时间
      delay: 0, // 延迟执行需要小于数据更新3s
      timingFn: '',
      beginZero: false
    }
  },
  methods: {
    animationStart() {
      // console.log('开始执行');
    },
    animationEnd() {
      console.log('执行完成了');
      let timer = null;
      timer = setTimeout(() => {
        console.log(Math.floor(Math.random() * 10000));
        this.text = Math.floor(Math.random() * 10000);
      }, 3000);
      // if (this.text === 30) {
      //   clearInterval(timer);
      // }
      // if (this.text >= 10) {
      //   timer = setTimeout(() => {
      //     this.text--;
      //   }, 5000);
      // } else {
      //   clearInterval(timer);
      // }
    }
  }
}
</script>