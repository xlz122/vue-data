<template>
  <div>
    <p>使用vue-observable插件，小型vuex</p>
    <p><router-link to="/">返回目录</router-link></p>
    <div>
      <p>token:{{token}}</p>
      <p>
        <button @click="setToken">改变token:</button>
      </p>
    </div>
  </div>
</template>

<script>
import { store, mutations } from './vue-observable.js';
export default {
  computed: {
    token() {
      return store.token;
    }
  },
  methods: {
    setToken() {
      mutations.setToken('新token');
    }
  }
};
</script>
