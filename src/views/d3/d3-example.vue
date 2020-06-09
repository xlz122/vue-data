<template>
  <div>
    <p>示例</p>
    <svg class="chart" ref="chart"></svg>
    <svg width="50" height="50">
      <rect x="0" y="0" width="50" height="50" fill="green" />
    </svg>

    <svg width="50" height="50">
      <circle cx="25" cy="25" r="25" fill="purple" />
    </svg>

    <svg width="50" height="50">
      <ellipse cx="25" cy="25" rx="15" ry="10" fill="red" />
    </svg>

    <svg width="50" height="50">
      <line x1="5" y1="5" x2="40" y2="40" stroke="gray" stroke-width="5" />
    </svg>

    <svg width="50" height="50">
      <polyline
        fill="none"
        stroke="blue"
        stroke-width="2"
        points="05,30
          15,30
          15,20
          25,20
          25,10
          35,10"
      />
    </svg>

    <svg width="50" height="50">
      <polygon
        fill="yellow"
        stroke="blue"
        stroke-width="2"
        points="05,30
          15,10
          25,30"
      />
    </svg>
  </div>
</template>

<script>
import * as d3 from 'd3';
export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let width = 720;
      let height = 200;
      let chartdata = [40, 60, 80, 100, 70, 120, 100, 60, 70, 150, 120, 140];
      let chart = d3
        .select(this.$refs.chart)
        .attr('width', width)
        .attr('height', height)
        .style('background-color', '#dff0d8');
      // 数据根据图表范围撑满
      let xScale = d3
        .scaleOrdinal()
        .domain(chartdata) // d3.max() 参数为数组，获取数组中得最大值
        .range([0, height]);
      let yScale = d3
        .scaleLinear()
        .domain([0, d3.max(chartdata)])
        .range([0, height]);
      chart
        .selectAll('rect')
        .data(chartdata)
        .enter()
        .append('rect')
        .style('width', 20)
        .style('height', d => {
          return yScale(d);
        })
        // .style('fill', '#3c763d')
        // .style('stroke', '#d6e9c6')
        // .style('stroke-width', '5')
        .attr('class', 'bar')
        .attr('x', d => {
          return xScale(d);
        })
        .attr('y', d => {
          return height - yScale(d);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.chart {
  /deep/.bar {
    fill: #3c763d;
    stroke: black;
    stroke-width: 5;
  }
  /deep/.bar:hover {
    fill: red;
    stroke: black;
    stroke-width: 5;
  }
}
</style>
