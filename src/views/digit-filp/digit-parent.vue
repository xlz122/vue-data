<!--eslint-disable-->
<template>
  <div class="digit-roll-container">
    <jump-number :text="text" />
  </div>
</template>

<script>
/*eslint-disable*/
import JumpNumber from '../jumpNumber.vue';
export default {
  components: {
    JumpNumber
  },
  data() {
    return {
      text: 888
    }
  },
  mounted () {
  //   setInterval(() => {
  //     Number(this.text++);
  //   }, 1000);
  }
};
</script>

<style scoped>
.digit-roll-container {
  width: 320px;
  height: 24px;
  margin: 20px auto;
  color: red;
  /* background-color: yellowgreen; */
}
.digit-roll-list {
  display: flex;
  height: 24px;
  padding: 0;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
}
.digit-roll-item {
  height: 36px;
  list-style: none;
  flex-grow: 1;
  overflow: hidden;
}
</style>
