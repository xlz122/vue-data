import Vue from 'vue';

export const store = Vue.observable({
  token: '旧token'
})

export const mutations = {
  setToken(token) {
    store.token = token;
  }
}