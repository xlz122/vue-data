<!--
  数字翻转
  rollDigits(滚动到的数字)
  dur(滚动持续时间，单位ms)
  easeFn(滚动的缓动函数) 
    默认: 'Cubic.easeInOut'(慢-快-慢)
    可选: 'Linear'(匀速), 'Quad.easeIn', 'Quad.easeOut', 'Quad.easeInOut','Cubic.easeIn', 'Cubic.easeOut'
  flipStra(滚动时的翻屏策略)
    布尔值:
      true 一直向上滚动 
      flase 新值比旧值大，向上滚动。新值比旧值小，向下滚动
    函数：
      可以定义一个函数，返回值true或false
    详细访问：https://github.com/gitWhatever/vue-digitroll
  @roll-start 动画开始时触发
  @roll-finish 动画结束时触发
  setDigit 自定义动画
    customSetDigit
      统一设置全部数值的数据，digits是必填项，其他项可缺省。 [{ digits: 500, dur: '2000', easeFn: 'ease', flipStra: true }]
      单独设置每一项。 [
                        { value: 2, dur: 600, easeFn: 'ease' },
                        { value: 4, dur: 900, flipStra: true },
                        { value: 6, dur: 1200, flipStra: false },
                        { value: 8, dur: 1500 }
                      ]
    数字翻滚bug:
      当动画没执行完时，更新数据，会出现数据不准确的情况
      例：实际数据 2536 实际可能时1654
-->
<template>
  <digit-roll
    ref="digitroll"
    :rollDigits="digits"
    :dur="time"
    :easeFn="easeFn"
    :flipStra="flipStra"
    @roll-start="rollStart"
    @roll-finish="rollEnd"
  />
</template>

<script>
import DigitRoll from '@huoyu/vue-digitroll';
export default {
  components: {
    DigitRoll
  },
  props: {
    digits: {
      type: [String, Number],
      default: 0
    },
    time: {
      type: Number,
      default: 0
    },
    easeFn: {
      type: String,
      default: 'Cubic.easeInOut'
    },
    flipStra: {
      type: [Boolean, Function],
      default: false
    },
    customSetDigit: {
      type: [Object, Array],
      defalut: null
    }
  },
  watch: {
    customSetDigit(cur) {
      if (cur) {
        this.setDigit(cur);
      }
    }
  },
  methods: {
    rollStart() {
      this.$emit('rollStart');
    },
    rollEnd() {
      this.$emit('rollEnd');
    },
    setDigit(config) {
      if (config.constructor === Object) {
        // 自定义动画 - 整体控制
        let digits = config.digits;
        delete config.digits;
        this.$refs.digitroll.setDigit(digits, config);
      } else if (config.constructor === Array) {
        // 自定义动画 - 单独控制每一个数字
        this.$refs.digitroll.setDigit(config);
      }
    }
  }
};
</script>
