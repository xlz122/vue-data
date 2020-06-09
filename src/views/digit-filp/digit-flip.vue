<!-- eslint-disable -->
<template>
  <ul :style="flipStyles" style="font-size: 25px;">
    <li
      v-for="(item, index) in data"
      :key="`${index}index`"
      :style="item.style"
    >
      <span
        v-for="(i, ind) in item.value"
        :key="`${ind}ind`"
        :style="spanStyles"
      >
        {{ i }}
      </span>
    </li>
  </ul>
</template>

<script>
/* eslint-disable */
const FLIP_BASE_STYLE = {
  position: 'relative',
  padding: 0,
  margin: 0,
  'text-align': 'center',
  overflow: 'hidden'
};
const NUMBER_BASE_STYLE = {
  position: 'relative',
  display: 'inline-block',
  transform: 'translate3d(0, 0, 0)',
  '-webkit-transform': 'translate3d(0, 0, 0)',
  'word-break': 'break-all',
  'text-align': 'center',
  'list-style': 'none'
};
const TEXT_BASE_STYLE = {
  position: 'relative',
  display: 'inline-block',
  'list-style': 'none'
};
export default {
  props: {
    text: {},
    // 每加一的执行时间
    duration: {
      default: 0.3
    },
    // 延迟执行
    delay: {
      default: 0
    },
    // 动画曲线
    timingFn: {
      default: 'ease'
    },
    fontSize: {
      default: 12
    },
    singeWidth: {},
    singeHeight: {},
    beginZero: {
      default: false
    },
    // 数字减少时，是否匀速减少
    uniformReduction: {
      default: true
    },
    // 是否无缝滚动
    SeamlessRoll: {
      default: true
    }
  },
  data() {
    return {
      data: [],
      textDefaultStyles: {},
      curWidth: '',
      curHeight: '',
      lastTimeText: '' // 上一次滚动数值
    };
  },
  computed: {
    flipStyles() {
      return {
        ...FLIP_BASE_STYLE,
        height: `${this.curHeight}px`,
        'font-size': `${this.fontSize}px`
      };
    },
    spanStyles() {
      return {
        display: 'inline-block',
        width: `${this.curWidth}px`,
        height: `${this.curHeight}px`,
        'line-height': `${this.curHeight}px`
      };
    }
  },
  mounted() {
    this.init(String(this.text));
  },
  watch: {
    text(cur) {
      this.init(String(cur));
    }
  },
  methods: {
    init(text) {
      if (!text) {
        return false;
      }
      this.getTextCurrStyles();
      // 开始函数
      this.$emit('animationStart');
      // 初始动画
      // 不是从0开始更新，并且是第二次执行
      if (!this.beginZero && this.lastTimeText) {
        // 从原有数据更新,增加位数用0补齐,减少位数相应截取
        let newText = this.lastTimeText;
        let textLength = parseInt(text.length);
        let lastTimeTextLength = parseInt(this.lastTimeText.length);
        if (textLength > lastTimeTextLength) {
          let differLength = textLength - lastTimeTextLength;
          for (let i = 0; i < differLength; i++) {
            newText += '0';
          }
        } else {
          newText = newText.toString().substring(0, textLength);
        }
        this.update(newText);
      } else {
        // 从0开始
        const zero = text.replace(/[0-9]/gi, '0');
        this.update(zero);
      }
      // 执行动画（延迟5是当新增一位数时，动画不执行问题）
      this.timeout(5).then(() => {
        this.update(text);
        this.lastTimeText = text;
      });
      // 完成函数
      const maxNumber = Math.max(...text.replace(/\D/gi, '').split(''));
      this.timeout((this.delay + maxNumber * this.duration) * 1000).then(() => {
        this.$emit('animationEnd');
      });
    },
    timeout(timeout) {
      return new Promise(resolve => {
        setTimeout(resolve, timeout);
      });
    },
    update(text) {
      this.data = String(text).split('').map((item, index) => {
        if (Number.isNaN(parseInt(item))) {
          return {
            type: 'text',
            value: item,
            style: this.setTextStyles()
          };
        } else {
          return {
            type: 'number',
            value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            style: this.setNumberStyles(this.curHeight, item, index)
          };
        }
      });
    },
    update2(text) {
      this.data = String(text).split('').map((item, index) => {
        if (Number.isNaN(parseInt(item))) {
          return {
            type: 'text',
            value: item,
            style: this.setTextStyles()
          };
        } else {
          return {
            type: 'number',
            value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            style: this.setNumberStyles2(this.curHeight, item, index)
          };
        }
      });
    },
    setNumberStyles(curHeight, item, index) {
      // 默认值
      let duration = this.duration;
      // 上一次滚动数值
      let curTextArr = this.text.toString().split('');
      let lastTimeTextArr = this.lastTimeText.toString().split('');
      // 是否匀速减少
      if (this.uniformReduction) {
        // 获取当前和前一次的差值
        // 当前小于上次，匀速减少
        if (parseInt(item) < parseInt(lastTimeTextArr[index])) {
          let differenceValue = parseInt(lastTimeTextArr[index]) - parseInt(item);
          duration = duration * differenceValue;
        } else {
          duration = duration * item;
        }
      } else {
        duration = duration * item;
      }

      // 新值 > 旧值，新值 + 旧值 > 9 往0上滚动
      if (parseInt(item) < parseInt(lastTimeTextArr[index]) && parseInt(item) + parseInt(lastTimeTextArr[index]) > 9) {
        console.log('新值 < 旧值，新值 + 旧值 > 9 往0上滚动')
        curHeight = curHeight * (parseInt(item) + 10);
        setTimeout(() => {
          this.update2(this.text);
        }, duration * 1000);
      } else if (parseInt(item) > parseInt(lastTimeTextArr[index]) && parseInt(item) - parseInt(lastTimeTextArr[index]) <= 9) {
        console.log('新值 > 旧值，新值 - 旧值 <= 9正常滚动')
        curHeight = curHeight * item;
      }
      else {
        // 正常上下滚动
        curHeight = curHeight * item;
      }
      // if (parseInt(item) > parseInt(lastTimeTextArr[index]) && parseInt(item) + parseInt(lastTimeTextArr[index]) > 9) {
      //   console.log(parseInt(item) + parseInt(lastTimeTextArr[index]))
      //   curHeight = curHeight * (parseInt(item) + 10);
      //   setTimeout(() => {
      //     this.update2(this.text);
      //   }, duration * 1000);
      // } else if (parseInt(item) > parseInt(lastTimeTextArr[index]) && parseInt(item) + parseInt(lastTimeTextArr[index]) > 9) {
      //   curHeight = curHeight * item;
      // } else {
      //   curHeight = curHeight * item;
      // }
      // else if (parseInt(item) + parseInt(lastTimeTextArr[index]) > 9) {

      // } 
      // else {
      //   // 正常上下滚动
      //   curHeight = curHeight * item;
      // }
      // // 当前滚动值大于上一次滚动值
      // if (parseInt(this.text) > parseInt(this.lastTimeText)) {
      //   // 思路 旧值加上新值 > 9 往上0 小于9 单个走

      //   // 上一次数值等于9，滚动到数值小于9，使用双倍模板继续向上滚动
      //   if (parseInt(lastTimeTextArr[index]) === 9 && parseInt(curTextArr[index]) < 9) {
      //     // console.log('上一次数值等于9，滚动到数值小于9');
      //     curHeight = curHeight * (parseInt(item) + 10);
      //     // 动画执行完 回到第一倍模板
      //     setTimeout(() => {
      //       this.update2(this.text);
      //     }, duration * 1000);
      //   } else {
      //     curHeight = curHeight * item;
      //   }
      // } else {
      //   curHeight = curHeight * item;
      // }
      return {
        ...NUMBER_BASE_STYLE,
        width: `${this.curWidth}px`,
        height: `${this.curHeight * 10}px`,
        lineHeight: `${this.curHeight}px`,
        transition: `transform ${duration}s ${this.timingFn} ${this.delay}s`,
        transform: `translate3d(0, -${curHeight}px, 0)`,
        'vertical-align': 'top'
      };
    },
    setNumberStyles2(curHeight, item, index) {
      curHeight = curHeight * item;
      return {
        ...NUMBER_BASE_STYLE,
        width: `${this.curWidth}px`,
        height: `${this.curHeight * 10}px`,
        lineHeight: `${this.curHeight}px`,
        transition: `transform 0s`,
        transform: `translate3d(0, -${curHeight}px, 0)`,
        'vertical-align': 'top'
      };
    },
    setTextStyles() {
      const styles = {
        ...TEXT_BASE_STYLE,
        width: `${this.curWidth}px`,
        height: `${this.curHeight}px`,
        lineHeight: `${this.curHeight}px`,
        transform: `translate3d(0, 0, 0)`
      };
      return styles;
    },
    getTextDefaultStyles() {
      const text = '0';
      const fontSize = this.fontSize;
      const SPAN_Element = document.createElement('span');
      SPAN_Element.innerHTML = text;
      SPAN_Element.style.fontSize = fontSize;
      document.body.appendChild(SPAN_Element);
      const RECT = SPAN_Element.getBoundingClientRect();
      setTimeout(() => {
        document.body.removeChild(SPAN_Element);
      });
      return {
        width: RECT.width,
        height: RECT.height
      };
    },
    getTextCurrStyles() {
      if (Object.keys(this.textDefaultStyles).length === 0) {
        this.textDefaultStyles = this.getTextDefaultStyles();
      }
      const { width, height } = this.textDefaultStyles;
      this.curWidth = this.singeWidth || width.toFixed(2);
      this.curHeight = this.singeHeight || height;
    }
  }
};
</script>
