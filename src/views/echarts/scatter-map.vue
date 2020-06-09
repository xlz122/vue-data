<template>
  <div class="map-container">
    <p>散点地图(迁移效果)</p>
    <router-link to="/">返回目录</router-link>
    <div class="map" ref="mapChart"></div>
  </div>
</template>

<script>
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// geo 用于绘制散点地图
import 'echarts/lib/component/geo';
// 引入地图js包
import 'echarts/map/js/china.js';
export default {
  data() {
    return {
      mapChart: null // 地图示例
    };
  },
  mounted() {
    this.$nextTick(() => {
      // 初始化地图
      this.initMap();
    });
  },
  beforeDestroy() {
    // 实例销毁前 清空实例
    this.mapChart = null;
    // 解绑屏幕监听事件
    window.removeEventListener('resize', this.resize, false);
  },
  methods: {
    resize() {
      this.mapChart.resize();
    },
    initMap() {
      // 地图实例
      this.mapChart = echarts.init(this.$refs.mapChart);
      // 初始配置地图
      let mapOption = this.mapOption();
      this.mapChart.setOption(mapOption);
      // 绑定监听事件 图形屏幕自适应
      window.addEventListener('resize', this.resize, false);
    },
    mapOption() {
      // 地图配置
      let option = {
        geo: {
          map: 'china', // js地图包
          type: 'scatter', // 散点图
          zoom: 1.16,
          // 地图文本标签设置
          label: {
            normal: {
              show: true, // 显示市级名称
              color: '#035167'
            },
            emphasis: {
              show: true
            }
          },
          // 地图区域设置
          itemStyle: {
            normal: {
              color: 'lightskyblue',
              borderColor: 'rgba(147, 235, 248, 1)',
              borderWidth: 0.5
            },
            emphasis: {
              areaColor: 'orangered',
              borderColor: '#111'
            }
          }
        },
        series: [
          {
            name: '起始涟漪城市',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            symbol: 'circle', // 标记的图形。
            symbolSize: 15, // 标记的大小。
            rippleEffect: {
              period: 4, // 动画速度，值越小，动画越快
              brushType: 'stroke' // 波纹的绘制方式
            },
            // 涟漪文字效果
            label: {
              normal: {
                show: true,
                // 提示内容
                formatter: params => {
                  return params.name;
                },
                position: 'top', // 提示方向
                color: '#fff'
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: 'orangered'
              }
            },
            data: [
              {
                name: '南京', // 城市name
                value: [118.796252, 32.0739, 23] // 城市坐标 前两个经纬度 第三个value值
              },
              {
                name: '西藏',
                value: [91.11, 29.97]
              },
              {
                name: '广西',
                value: [107.88, 22.863, 17]
              }
            ]
          },
          {
            type: 'lines', // 线数据
            zlevel: 1,
            effect: {
              show: true,
              period: 4, // 箭头指向速度，值越小速度越快
              trailLength: 0.01, // 特效尾迹的长度。取从 0 到 1 的值，数值越大尾迹越长。
              symbol: 'arrow', // 特效图形的标记。
              symbolSize: 5 // 特效标记的大小
            },
            lineStyle: {
              normal: {
                width: 1, // 尾迹线条宽度
                color: 'orangered',
                opacity: 0.6, // 尾迹线条透明度
                curveness: 0.2 // 边的曲度，支持从 0 到 1 的值，值越大曲度越大。
              }
            },
            data: [
              {
                fromName: '南京', // 起点城市name
                toName: '广西', // 终点城市name
                value: 2,
                coords: [
                  [107.88, 22.863], // 起点城市坐标
                  [118.796252, 32.0739] // 终点城市坐标
                ]
              },
              {
                fromName: '南京',
                toName: '西藏',
                value: 10,
                coords: [
                  [118.796252, 32.0739],
                  [91.11, 29.97]
                ]
              },
              {
                fromName: '西藏',
                toName: '广西',
                value: 10,
                coords: [
                  [91.11, 29.97],
                  [107.88, 22.863]
                ]
              }
            ]
          }
        ]
      };
      return option;
    }
  }
};
</script>

<style scoped>
.map-container {
  width: 800px;
  height: 600px;
  margin: 0 auto;
}
.map {
  width: 100%;
  height: 100%;
}
</style>
