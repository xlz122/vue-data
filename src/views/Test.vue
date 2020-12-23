<template>
  <div>
    <button @click="change">触发1</button>
    <button @click="change2">触发2</button>
  </div>
</template>

<script>
import decode from '@/common/decode.js';

export default {
  mounted() {
    console.log(decode);
    const token = decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiaHpzZCIsImp0aSI6IjM4NjE4MjU0ODYxMjQ0ODI1NjAiLCJidXNpbmVzc19pZCI6IjM4NTEwMzc0MjM4ODI0NTMyMTQiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIxMi8yMy8yMDIwIDk6NTc6MTggQU0iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiLpl6jlupfogIHmnb8iLCJuYmYiOjE2MDg2ODUwMzgsImV4cCI6MTYwODY4ODYzOCwiaXNzIjoieXlraiIsImF1ZCI6IndyIn0.FOk1GTjPomJmGVJtf6L1Ey2tsrZTAvwXB0EvR8ODOUA')
    console.log(token);
  },
  methods: {
    change() {
      this.$emit('delList', 'hello world');
    },
    change2() {
      this.$emit('delList2', 'hello world2');
    }
  }
};
</script>