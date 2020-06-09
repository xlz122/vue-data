<template>
  <div class="map-container">
    <p>地图下钻</p>
    <div ref="mapChart" style="width:100%; height:100%;"></div>
  </div>
</template>

<script>
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入tooltip组件
import 'echarts/lib/component/tooltip';
import mapJson from '@/assets/echarts-map.json';
// geo 用于绘制散点地图
import 'echarts/lib/component/geo';
// 引入各个地图的js包
import 'echarts/map/js/china.js';
import 'echarts/map/js/province/fujian.js';
import 'echarts/map/js/province/guangdong.js';
import 'echarts/map/js/province/jiangxi.js';
// 引入各个地图的json包
import china from 'echarts/map/json/china.json';
import fujian from 'echarts/map/json/province/fujian.json';
import guangdong from 'echarts/map/json/province/guangdong.json';
import jiangxi from 'echarts/map/json/province/jiangxi.json';

export default {
  data() {
    return {
      mapChart: null, // 地图实例
      timer: null, // 用于区分单双击事件
      // 各省份数据
      allProvincial: [
        { name: '北京', value: 0 }, // name地区名称 vlaue 值
        { name: '天津', value: 0 },
        { name: '上海', value: 0 },
        { name: '重庆', value: 0 },
        { name: '河北', value: 0 },
        { name: '河南', value: 0 },
        { name: '云南', value: 0 },
        { name: '辽宁', value: 0 },
        { name: '黑龙江', value: 0 },
        { name: '湖南', value: 0 },
        { name: '安徽', value: 0 },
        { name: '山东', value: 0 },
        { name: '新疆', value: 0 },
        { name: '江苏', value: 0 },
        { name: '浙江', value: 0 },
        { name: '江西', value: 0 },
        { name: '湖北', value: 0 },
        { name: '广西', value: 0 },
        { name: '甘肃', value: 0 },
        { name: '山西', value: 0 },
        { name: '内蒙古', value: 0 },
        { name: '陕西', value: 0 },
        { name: '吉林', value: 0 },
        { name: '福建', value: 0 },
        { name: '贵州', value: 0 },
        { name: '广东', value: 0 },
        { name: '青海', value: 0 },
        { name: '西藏', value: 0 },
        { name: '四川', value: 0 },
        { name: '宁夏', value: 0 },
        { name: '海南', value: 0 },
        { name: '台湾', value: 0 },
        { name: '香港', value: 0 },
        { name: '澳门', value: 0 }
      ],
      // 单个省份数据
      singleProvincial: [
        { name: '南平市', value: Math.round(Math.random() * 1000) }, // name地区名称 vlaue 值
        { name: '宁德市', value: Math.round(Math.random() * 1000) },
        { name: '三明市', value: Math.round(Math.random() * 1000) },
        { name: '福州市', value: Math.round(Math.random() * 1000) },
        { name: '龙岩市', value: Math.round(Math.random() * 1000) },
        { name: '泉州市', value: Math.round(Math.random() * 1000) },
        { name: '莆田市', value: Math.round(Math.random() * 1000) },
        { name: '漳州市', value: Math.round(Math.random() * 1000) },
        { name: '厦门市', value: Math.round(Math.random() * 1000) }
      ],
      // 涟漪数据
      // name和value
      GZData: [],
      // 坐标
      geoCoordMap: {}
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initMap();
    });
  },
  methods: {
    resize() {
      this.mapChart.resize();
    },
    initMap() {
      // 基于准备好的dom，初始化echarts实例
      this.mapChart = echarts.init(this.$refs.mapChart);

      // 福建省
      let fujianData = [
        { name: '福州市', value: 69 },
        { name: '厦门市', value: 136 },
        { name: '莆田市', value: 80 },
        { name: '三明市', value: 73 },
        { name: '泉州市', value: 106 },
        { name: '漳州市', value: 116 },
        { name: '南平市', value: 72 },
        { name: '龙岩市', value: 72 },
        { name: '宁德市', value: 72 }
      ];
      let fujiangCoordMap = {
        福州市: [119.306239, 26.075302],
        厦门市: [118.11022, 24.490474],
        莆田市: [119.007558, 25.431011],
        三明市: [117.635001, 26.265444],
        泉州市: [118.589421, 24.908853],
        漳州市: [117.661801, 24.510897],
        南平市: [118.178459, 26.635627],
        龙岩市: [117.02978, 25.091603],
        宁德市: [119.527082, 26.65924]
      };
      // 江西
      let jiangxiData = [
        { name: '南昌市', value: 102 },
        { name: '吉安市', value: 72 },
        { name: '赣州市', value: 82 }
      ];
      let jiangxiCoordMap = {
        南昌市: [115.892151, 28.676493],
        吉安市: [114.986373, 27.111699],
        赣州市: [114.940278, 25.85097]
      };
      // 广东
      let guangdongData = [
        { name: '汕头市', value: 82 },
        { name: '佛山市', value: 82 },
        { name: '江门市', value: 92 },
        { name: '肇庆市', value: 98 },
        { name: '惠州市', value: 98 },
        { name: '梅州市', value: 98 },
        { name: '韶关市', value: 98 },
        { name: '清远市', value: 98 }
      ];
      let guangdongCoordMap = {
        汕头市: [116.708463, 23.37102],
        佛山市: [113.122717, 23.028762],
        江门市: [113.094942, 22.590431],
        惠州市: [114.412599, 23.079404],
        梅州市: [116.117582, 24.299112],
        韶关市: [113.591544, 24.801322],
        清远市: [113.051227, 23.685022]
      };

      // 初始化涟漪数据
      fujianData.map(item => {
        this.GZData.push(item);
      });
      jiangxiData.map(item => {
        this.GZData.push(item);
      });
      guangdongData.map(item => {
        this.GZData.push(item);
      });
      this.geoCoordMap = Object.assign(fujiangCoordMap, this.geoCoordMap);
      this.geoCoordMap = Object.assign(jiangxiCoordMap, this.geoCoordMap);
      this.geoCoordMap = Object.assign(guangdongCoordMap, this.geoCoordMap);
      // 初始化全国地图
      this.loadMap('china', china, 10, 12, this.allProvincial);

      // 单击切换到省级地图，
      this.mapChart.on('click', params => {
        clearTimeout(this.timer);
        //由于单击事件和双击事件冲突，故单击的响应事件延迟250毫秒执行
        this.timer = setTimeout(() => {
          // 进入省级地图清空涟漪数据
          this.GZData = [];
          this.geoCoordMap = {};
          // 当前省的json文件
          let mapJson;
          if (params.name === '福建') {
            // 重新赋值当前省的涟漪数据
            fujianData.map(item => {
              this.GZData.push(item);
            });
            this.geoCoordMap = Object.assign(fujiangCoordMap, this.geoCoordMap);
            mapJson = fujian;
          } else if (params.name === '广东') {
            guangdongData.map(item => {
              this.GZData.push(item);
            });
            this.geoCoordMap = Object.assign(
              guangdongCoordMap,
              this.geoCoordMap
            );
            mapJson = guangdong;
          } else if (params.name === '江西') {
            jiangxiData.map(item => {
              this.GZData.push(item);
            });
            this.geoCoordMap = Object.assign(jiangxiCoordMap, this.geoCoordMap);
            mapJson = jiangxi;
          } else {
            // alert('未找到地图包，请选择其他省份/城市')
            return;
          }
          this.loadMap(params.name, mapJson, 10, 14, this.singleProvincial); // this.singleProvincial 是福建省数据 tooltip
        }, 250);
      });

      // 绑定双击事件，返回全国地图
      this.mapChart.on('dblclick', () => {
        //当双击事件发生时，清除单击事件，仅响应双击事件
        clearTimeout(this.timer);
        // 赋值全国涟漪数据
        fujianData.map(item => {
          this.GZData.push(item);
        });
        jiangxiData.map(item => {
          this.GZData.push(item);
        });
        guangdongData.map(item => {
          this.GZData.push(item);
        });
        this.geoCoordMap = Object.assign(fujiangCoordMap, this.geoCoordMap);
        this.geoCoordMap = Object.assign(jiangxiCoordMap, this.geoCoordMap);
        this.geoCoordMap = Object.assign(guangdongCoordMap, this.geoCoordMap);
        //返回全国地图
        this.loadMap('china', china, 10, 12, this.allProvincial);
      });
    },
    loadMap(name, jsonName, size1, size2, placeData) {
      // 绘制地图
      /*
        形参注解：
            上一级地图名称
            当前位置json包名
            普通圆点大小
            涟漪圆点大小
            当前位置data数据，可用于tooltip
       */
      echarts.registerMap(name, jsonName);
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b}'
        },
        series: [
          {
            type: 'map',
            // 设置不同的地点切换脚本
            map: name,
            mapType: name,
            selectedMode: 'single',
            // 放大
            zoom: 1,
            // 地图文本标签设置
            label: {
              // 默认
              normal: {
                show: true, // 显示市级名称
                color: '#035167' // 标签颜色
              },
              // 高亮
              emphasis: {
                show: true
              }
            },
            // 地图区域设置
            itemStyle: {
              normal: {
                areaColor: '#30c1cc', // 区域背景色
                borderColor: 'rgba(12,35,69,0.2)', // 市级分界线颜色
                borderWidth: 1
              },
              emphasis: {
                areaColor: '#52ffff',
                borderColor: 'rgba(12,35,69,0.2)' // 市级分界线颜色
              }
            },
            // 配合位置设置数值，改变地图大小 有个缺点 导致地图自适应失效 改用画布大小来控制大小
            // layoutCenter: ['50%','45%'],
            // layoutSize : 700,
            // 地图数据 用于tooltip提示框
            data: placeData
          },
          {
            type: 'scatter', // series图表类型 散点
            coordinateSystem: 'geo', // series坐标系类型
            symbolSize: size1, // 标记的大小
            itemStyle: {
              normal: {
                // 圆点颜色
                color: '#f4e925'
              },
              emphasis: {
                // 高亮设置边框
                borderColor: '#fff',
                borderWidth: 1
              }
            },
            data: this.convertData(this.GZData)
          },
          {
            // 设置会动的点
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: this.convertData(
              this.GZData.sort(function(a, b) {
                return b.value - a.value;
              }).slice(0, 3)
            ),
            symbolSize: size2,
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
              normal: {
                show: false, // 是否显示name
                formatter: '{b}',
                position: 'right'
              }
            },
            itemStyle: {
              normal: {
                color: '#f4e925',
                shadowColor: '#333'
              }
            },
            zlevel: 1
          }
        ],
        geo: {
          map: name, //map类型使用name，设置和series一样的配置，避免显示双地图
          type: 'scatter',
          zoom: 1,
          // 地图文本标签设置
          label: {
            // 默认
            normal: {
              show: true, // 显示市级名称
              color: '#035167' // 标签颜色
            },
            // 高亮
            emphasis: {
              show: true
            }
          },
          // 地图区域设置
          itemStyle: {
            normal: {
              areaColor: '#52ffff', // 区域背景色
              borderColor: '#035167' // 市级分界线颜色
            },
            emphasis: {
              areaColor: '#fee614',
              borderColor: '#111'
            }
          }
          // 配合位置设置数值，改变地图大小
          // layoutCenter: ['50%','45%'],
          // layoutSize : 700,
        }
      };
      this.mapChart.setOption(option);
      // 绑定监听事件 图形屏幕自适应
      window.addEventListener('resize', this.resize, false);
    },
    convertData(data) {
      // 格式化数据 合并
      let res = [];
      for (let i = 0; i < data.length; i++) {
        let geoCoord = this.geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          });
        }
      }
      return res;
    }
  },
  beforeDestroy() {
    // vue实例销毁前 清除定时器 清空实例 解绑事件
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.mapChart = null;
    window.removeEventListener('resize', this.resize, false);
  }
};
</script>

<style lang="less" scoped>
.map-container {
  width: 100%;
  height: 800px;
}
</style>
