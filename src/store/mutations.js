export default {
  // 存储token
  setToken(state, token) {
    state.token = token;
    localStorage.setItem('token', token);
  },
  // 清除token
  removeToken(state) {
    state.token = '';
    localStorage.removeItem('token');
  }
};
