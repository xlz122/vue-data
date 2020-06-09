<template>
  <div>
    <div class="header">
      <p>列表无缝滚动</p>
      <router-link to="/">返回目录</router-link>
    </div>
    <button class="btn" @click="next">左移一个</button>
    <div class="container">
      <ul class="list" :style="listStyles">
        <li
          class="item"
          v-for="(item, index) in concatList"
          :key="`${index}index`"
          ref="item"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
    <button class="btn" @click="prev">右移一个</button>
  </div>
</template>

<script>
/* eslint-disable */
const LIST_BASE_STYLE = {
  transform: 'translate3d(0, 0, 0)',
  '-webkit-transform': 'translate3d(0, 0, 0)',
  'word-break': 'break-all'
};
const lodash = require('lodash');
export default {
  data() {
    return {
      liStyles: {
        width: 0
      },
      list: [
        { title: '数据1' },
        { title: '数据2' },
        { title: '数据3' },
        { title: '数据4' },
        { title: '数据5' },
        { title: '数据6' },
        { title: '数据7' },
        { title: '数据8' },
        { title: '数据9' }
      ],
      time: 0.3, // 动画执行时间
      listOffset: 0, // 当前偏移量
      offsetIndex: 0 // 当前偏移下标
    };
  },
  computed: {
    listStyles() {
      return {
        ...LIST_BASE_STYLE,
        transition: `transform ${this.time}s linear 0s`,
        transform: `translate3d(-${this.listOffset}px, 0, 0)`
      };
    },
    concatList() {
      return [...this.list, ...this.list];
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (this.list.length === 0) {
        return false;
      }
      // 获取单个li的宽度
      this.liStyles.width = this.$refs.item[0].offsetWidth;
    },
    next: lodash.throttle(function() {
      // 左移
      if (this.offsetIndex === 0) {
        this.offsetIndex = this.list.length;
        this.time = 0;
        setTimeout(() => {
          this.offsetIndex--;
          this.time = 0.3;
          this.listOffset = this.liStyles.width * this.offsetIndex;
        })
      } else {
        this.offsetIndex--;
        this.time = 0.3;
      }
      this.listOffset = this.liStyles.width * this.offsetIndex;
    }, 350, {
      leading: true, // 点击第一下是否执行
      trailing: false // 节流时间内，多次点击，节流结束后，是否执行一次
    }),
    prev: lodash.throttle(function() {
      // 右移
      if (this.offsetIndex === this.list.length) {
        this.offsetIndex = 0;
        this.time = 0;
        setTimeout(() => {
          this.offsetIndex++;
          this.time = 0.3;
          this.listOffset = this.liStyles.width * this.offsetIndex;
        })
      } else {
        this.offsetIndex++;
        this.time = 0.3;
      }
      this.listOffset = this.liStyles.width * this.offsetIndex;
    }, 350, {
      leading: true, // 点击第一下是否执行
      trailing: false // 节流时间内，多次点击，节流结束后，是否执行一次
    })
  }
};
</script>

<style lang="less" scoped>
.header {
  margin-bottom: 20px;
}
.container {
  display: inline-block;
  width: 500px;
  height: 100px;
  margin: 0 auto;
  overflow: hidden;
  vertical-align: middle;
}
.btn {
  display: inline-block;
  height: 50px;
  margin: 0 15px;
  vertical-align: middle;
  cursor: pointer;
}
.list {
  width: 500%;
  height: 100%;
  padding: 0;
  margin: 0;
  text-align: left;
  .item {
    display: inline-block;
    width: 100px;
    height: 100%;
    line-height: 100px;
    text-align: center;
    border: 1px solid red;
    box-sizing: border-box;
  }
}
</style>
