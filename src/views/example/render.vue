<script>
export default {
  props: {
    list: {
      type: Array,
      default: null
    }
  },
  render: function(h) {
    return h(
      'ul',
      this.list.map(item => {
        return h('li', item);
      })
    );
  }
};
</script>
