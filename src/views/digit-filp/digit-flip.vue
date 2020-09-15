<!-- eslint-disable -->
<template>
  <ul ref="digit-flip" :style="flipStyles" style="font-size: 25px;">
    <li v-for="(item, index) in data" :key="`${index}index`" :style="item.style">
      <span v-for="(i, ind) in item.value" :key="`${ind}ind`" :style="spanStyles">{{ i }}</span>
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
    text: {
      type: [Number, String],
      default: 0
    },
    // 初始化是否需要动画
    initZero: {
      default: true
    },
    // 字体大小
    fontSize: {
      default: 12
    },
    // 每加一的执行时间
    duration: {
      default: 0.3
    },
    // 动画曲线
    timingFn: {
      default: 'ease'
    },
    // 延迟执行
    delay: {
      default: 0
    },
    // 单个字体的宽度
    singeWidth: {},
    // 单个字体的高度
    singeHeight: {},
    // 是否每次从0开始
    beginZero: {
      default: false
    },
    // 数字减少时，是否匀速减少
    uniformReduction: {
      default: true
    },
    // 是否无缝滚动
    seamlessRoll: {
      default: true
    }
  },
  data() {
    return {
      data: [],
      isInitZero: this.initZero,
      textDefaultStyles: {}, // 用于存储计算得出的宽高
      curWidth: '', // 计算后单个文本宽度
      curHeight: '', // 计算后单个文本高度
      oldText: '' // 上一次滚动数值
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
    text(curText, oldText) {
      // 存储旧值
      this.oldText = oldText;
      // 对比新旧值
      const newText = this.textChange(curText, oldText);
      this.init(String(newText));
    }
  },
  methods: {
    init(text) {
      if (!text) {
        return false;
      }
      // 获取单个文本宽高
      this.getTextCurrStyles();

      // 动画开始回调
      this.$emit('animationStart');

      // 执行动画
      // 第一次执行是否需要动画
      if (this.isInitZero) {
        const zero = text.replace(/[0-9]/gi, '0');
        this.update(zero);
        this.timeout(5).then(() => {
          this.update(text);
        });
        this.isInitZero = false;
      } else {
        this.update(text);
      }

      // 动画完成回调(有bug)
      // const maxNumber = Math.max(...text.replace(/\D/gi, '').split(''));
      // this.timeout((this.delay + maxNumber * this.duration) * 1000).then(() => {
      this.timeout(this.duration * 1000).then(() => {
        this.$emit('animationEnd');
      });
    },

    /**
     * @desc 获取单个文本的宽高
     */
    getTextCurrStyles() {
      if (Object.keys(this.textDefaultStyles).length === 0) {
        this.textDefaultStyles = this.getTextDefaultStyles();
      }
      const { width, height } = this.textDefaultStyles;
      // 优先使用传入的单个文本宽高
      this.curWidth = this.singeWidth || width.toFixed(2);
      this.curHeight = this.singeHeight || height;
    },

    /**
     * @desc 往body添加一个数字0的dom元素，使用传入的字体大小，获得单个文本所占的宽高
     */
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

    /**
     * @desc 动画更新函数
     */
    update(text) {
      this.data = String(text)
        .split('')
        .map((item, index) => {
          if (Number.isNaN(parseInt(item))) {
            return {
              type: 'text',
              value: item,
              style: this.setTextStyles()
            };
          } else {
            return {
              type: 'number',
              value: this.digitalTemplate(),
              style: this.setNumberStyles(this.curHeight, item, index)
            };
          }
        });
    },

    /**
     * @desc 生成数字模板
     */
    digitalTemplate() {
      let arr = Array.from({ length: 10 }).map((item, index) => {
        return index;
      });
      arr = arr.concat(arr.slice());
      return arr;
    },

    /**
     * @desc 当前文本不是数字
     */
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

    /**
     * @desc 当前文本是数字
     * @param { Number } - curHeigiht 当前当个文本高度
     * @param { Number } - item 当前文本
     * @param { Number } - index 当前文本所在索引
     */
    setNumberStyles(curHeight, item, index) {
      // 每次加1的时间
      let duration = this.duration;
      // 滚动高度
      let transFormHeight = 0;

      // this.text是否纯数字/不是第一次加载
      if (this.isItPureNumber(this.text) && this.oldText) {
        // 新旧值差异对比
        const { contrastDuration, contrastTransFormHeight } = this.contrast(
          curHeight,
          Number(item),
          index
        );
        duration = contrastDuration;
        transFormHeight = contrastTransFormHeight;
      } else {
        // this.text不是纯数字/第一次加载，不进行新旧值差异计算
        duration = duration * Number(item);
        transFormHeight = curHeight * Number(item);
      }

      return {
        ...NUMBER_BASE_STYLE,
        width: `${this.curWidth}px`,
        height: `${this.curHeight * 20}px`,
        lineHeight: `${this.curHeight}px`,
        transform: `translate3d(0px, -${transFormHeight}px, 0px)`,
        '-webkit-transform': `translate3d(0, -${transFormHeight}px, 0)`,
        transition: `transform ${duration}s ${this.timingFn} ${this.delay}s`,
        'vertical-align': 'top'
      };
    },

    /**
     * @desc 文本新旧值差异处理
     * @param { Number } - curHeigiht 当前当个文本高度
     * @param { Number } - item 当前文本
     * @param { Number } - index 当前文本所在索引
     */
    contrast(curHeight, item, index) {
      // 每次加1的时间
      let duration = this.duration;
      // 滚动高度
      let transFormHeight = 0;
      // 新值数组
      // 以下链表，转成字符串 -> 数组 -> 数字数组
      let curTextArr = this.text
        .toString()
        .split('')
        .map(item => parseInt(item));
      // 旧值数组
      // 以下链表，转成字符串 -> 数组 -> 数字数组
      let oldTextArr = this.oldText
        .toString()
        .split('')
        .map(item => parseInt(item));

      // 计算动画时间
      if (item < oldTextArr[index]) {
        let differenceValue = oldTextArr[index] - item;
        duration = duration * differenceValue;
      } else {
        let differenceValue = item - oldTextArr[index];
        duration = duration * differenceValue;
      }

      transFormHeight = curHeight * item;

      // 重新计算滚动高度
      if (this.text > this.oldText) {
        if (curTextArr.length > oldTextArr.length) {
          // 新值小于5，旧值大于5，往二倍模板滚动
          if (item < 5 && oldTextArr[index] > 5) {
            transFormHeight = curHeight * (item + 10);
            // 解决：动画时间计算差值，比如 9 - 0，时间按照9来计算了
            // 时间重新计算
            if (item === 0) {
              // 0的时候，直接给定一个动画时间
              duration = this.duration;
            } else {
              // 非0，按照新值计算时间
              duration = duration * item;
            }
            // 动画结束，将模板复位到一倍模板位置
            setTimeout(() => {
              transFormHeight = curHeight * item;
              this.templateReset(transFormHeight, index);
            }, duration * 1000 + 1);
          }
        } else {
          // 新值 < 旧值，新值 + 旧值 >= 9，往二倍模板滚动
          if (item < oldTextArr[index] && item + oldTextArr[index] >= 9) {
            transFormHeight = curHeight * (item + 10);
            // 时间重新计算
            if (item === 0) {
              // 0的时候，直接给定一个动画时间
              duration = this.duration;
            } else {
              // 非0，按照新值计算时间
              duration = duration * item;
            }
            // 动画结束，将模板复位到一倍模板位置
            setTimeout(() => {
              transFormHeight = curHeight * item;
              this.templateReset(transFormHeight, index);
            }, duration * 1000 + 1);
          } else {
            // 正常滚动
            const digitFilpRef = this.$refs['digit-flip'];
            digitFilpRef.children[
              index
            ].style.transition = `transform ${duration}s ease 0s`;
          }
        }
      } else if (this.text < this.oldText) {
        if (curTextArr.length < oldTextArr.length) {
          transFormHeight = curHeight * (oldTextArr[index + 1] + 10);
          duration = 0;

          setTimeout(() => {
            let duration = this.duration;
            if (item === 0) {
              transFormHeight = curHeight * 10;
              // 0的时候，直接给定一个动画时间
              duration = this.duration;
            } else {
              transFormHeight = curHeight * item;
              // 非0，按照新值计算时间
              let differenceValue = oldTextArr[index + 1] + 10 - item;
              duration = duration * differenceValue;
            }
            const digitFilpRef = this.$refs['digit-flip'];
            digitFilpRef.children[
              index
            ].style.transform = `translate3d(0px, -${transFormHeight}px, 0px)`;
            digitFilpRef.children[index].style[
              '-webkit-transform'
            ] = `translate3d(0px, -${transFormHeight}px, 0px)`;
            digitFilpRef.children[
              index
            ].style.transition = `transform ${duration}s ease 0s`;
            // 动画结束，将模板复位到一倍模板位置
            setTimeout(() => {
              transFormHeight = curHeight * (item + 10);
              this.templateReset(transFormHeight, index);
            }, duration * 1000 + 1);
          }, 1);
        } else {
          // 正常滚动
          const digitFilpRef = this.$refs['digit-flip'];
          digitFilpRef.children[
            index
          ].style.transition = `transform ${duration}s ease 0s`;
        }
      }

      console.log(duration);
      console.log(transFormHeight);
      return {
        contrastDuration: duration,
        contrastTransFormHeight: transFormHeight
      };
    },

    /**
     * @desc 模板复位
     * @param { Number } - transFormHeight 滚动高度
     * @param { Number } - index 当前文本下标
     */
    templateReset(transFormHeight, index) {
      const digitFilpRef = this.$refs['digit-flip'];
      digitFilpRef.children[
        index
      ].style.transform = `translate3d(0px, -${transFormHeight}px, 0px)`;
      digitFilpRef.children[index].style[
        '-webkit-transform'
      ] = `translate3d(0px, -${transFormHeight}px, 0px)`;
      digitFilpRef.children[index].style.transition = `transform 0s ease 0s`;
    },

    /**
     * @desc 延迟函数
     */
    timeout(timeout) {
      return new Promise(resolve => {
        setTimeout(resolve, timeout);
      });
    },

    /**
     * @desc 判断是否纯数字
     */
    isItPureNumber(text) {
      const reg = /^[\d|\.]*$/;
      return reg.test(Number(text));
    },

    /**
     * @desc 文本更改处理
     * @param { Number | String } - curText 新文本
     * @param { Number | String } - oldText 旧文本
     */
    textChange(curText, oldText) {
      // 如果curText不是纯数字，不进行新旧值差异计算
      if (!this.isItPureNumber(curText)) {
        return curText;
      }

      if (curText.length > oldText.length) {
        // 如果新值大于旧值，增加一位
        curText = curText + '0';
      } else if (curText.length < oldText.length) {
        // 如果新值小于旧值，截取一位
        curText = newText.toString().substring(0, curText.length);
      }
      return Number(curText);
    }
  }
};
</script>
