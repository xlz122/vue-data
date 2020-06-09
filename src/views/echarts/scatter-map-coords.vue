<template>
  <div class="map-container">
    <p>ECharts 地图坐标json文件</p>
    <router-link to="/">返回目录</router-link>
    <div class="map" ref="mapChart"></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  mounted() {
    // ECharts 地图坐标json文件
    axios
      .get('echarts-map.json')
      .then(res => {
        // 各省份地图坐标数据
        console.log(res.data);
      })
      .catch(() => {});
  }
};
</script>
