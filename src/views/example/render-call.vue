<template>
  <div>
    <render :list="list" />
  </div>
</template>

<script>
import Render from './render.vue';
export default {
  components: {
    Render
  },
  data() {
    return {
      list: ['成人', '一个被年龄吹涨的孩子']
    };
  }
};
</script>
