<!-- github: https://www.npmjs.com/package/vue-lazyload -->
<!-- vue图片懒加载 —— vue-lazyload的使用：https://blog.csdn.net/halo1416/article/details/81302419 -->
<!-- vue 图片懒加载插件 vue-lazyload 使用说明：https://segmentfault.com/a/1190000014928116 -->
<!-- 踩的小坑：图片重复加载，加上key，同时浏览器调试工具，network中，把 disable cache勾选取消 -->
<template>
  <div>
    <p>使用vue-lazyload插件，测试图片懒加载</p>
    <p><router-link to="/">返回目录</router-link></p>
    <ul>
      <li class="item" v-for="(item, index) in imgArr" :key="index">
        <!-- 将 :src 属性直接改为v-lazy, :key是为了防止刷新页面或图片更改时图片不更新 -->
        <!-- :key=""  必须要加，否则就会出现，页面刷新，其他内容都刷新了，但是只有图片不刷新的情况 。因为key可能相同，所以页面不会更新！！！  -->
        <!-- 背景图中使用图片懒加载。 v-lazy:background-image = "" -->
        <img v-lazy="item.url" :key="item.url" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgArr: [
        {
          url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2229258317,1629892341&fm=26&gp=0.jpg'
        },
        {
          url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1931615359,2874258743&fm=26&gp=0.jpg'
        },
        {
          url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2365021903,2761717699&fm=26&gp=0.jpg'
        },
        {
          url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3404600363,606033532&fm=26&gp=0.jpg'
        },
        {
          url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2081362183,2237717106&fm=26&gp=0.jpg'
        },
        {
          url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=328616222,1885605737&fm=26&gp=0.jpg'
        },
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597921609534&di=008e8802abd3fb2623c684c0c83aa137&imgtype=0&src=http%3A%2F%2Fa-ssl.duitang.com%2Fuploads%2Fitem%2F201409%2F07%2F20140907205840_BzzNw.gif'
        },
        {
          url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1874247941,2152365204&fm=26&gp=0.jpg'
        },
        {
          url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2476872783,332525312&fm=11&gp=0.jpg'
        }
      ]
    }
  },
  mounted () {
    for (let i = 1; i < 3; i++) {
      this.imgArr.push(this.imgArr);
    }
    setTimeout(() => {
      this.imgArr[0].url = 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2369082158,2093898088&fm=26&gp=0.jpg';
    }, 3000);
  }
};
</script>

<style lang="less" scoped>
.item {
  display: block;
  img {
    display: inline-block;
    width: 200px;
    height: 200px;
  }
}
</style>
