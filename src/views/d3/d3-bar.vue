<template>
  <div>
    <p>柱形图</p>
    <svg ref="barChart"></svg>
  </div>
</template>

<script>
import * as d3 from 'd3';
export default {
  data() {
    return {
      // width: 960,
      // height: 500,
      // barChartData: [1, 2, 3, 4, 5]
      barChart: null
    };
  },
  mounted() {
    // this.init();
    // this.init2();
    // this.init3();
  },
  methods: {
    goRouter() {
      this.$router.push({ name: 'home' });
    },
    init3() {
      let width = Math.max(900, innerWidth);
      let height = Math.max(500, innerHeight);
      console.log(width);
      console.log(height);
      let i = 0;
      let barChart = d3
        .select(this.$refs.barChart)
        .attr('width', width)
        .attr('height', height);
      function particle() {
        let m = d3.mouse(this);
        barChart
          .insert('circle', 'rect')
          .attr('cx', m[0])
          .attr('cy', m[1])
          .attr('r', 1e-6)
          .style('stroke', d3.hsl((i = (i + 1) % 360), 1, 0.5))
          .style('stroke-opacity', 1)
          .transition()
          .duration(2000)
          .ease(Math.sqrt)
          .attr('r', 100)
          .style('stroke-opacity', 1e-6)
          .remove();
        d3.event.preventDefault();
      }
      barChart
        .append('rect')
        .attr('width', width)
        .attr('height', height)
        .on('ontouchstart' in document ? 'touchmove' : 'mousemove', particle);
    },
    particle() {
      let i = 0;
      let m = d3.mouse(this);
      this.barChart
        .insert('circle', 'rect')
        .attr('cx', m[0])
        .attr('cy', m[1])
        .attr('r', 1e-6)
        .style('stroke', d3.hsl((i = (i + 1) % 360), 1, 0.5))
        .style('stroke-opacity', 1)
        .transition()
        .duration(2000)
        .ease(Math.sqrt)
        .attr('r', 100)
        .style('stroke-opacity', 1e-6)
        .remove();
      d3.event.preventDefault();
    },
    init2() {
      // d3.range() 参数可以是一个数字，也可以是一个区间，获得一个数列
      let nodes = d3.range(200).map(() => {
        return { radius: Math.random() * 12 + 4 };
      });
      console.log(nodes);
      // 数列第一项
      let root = nodes[0];
      // console.log(root);
      // 用10种颜色构建一个ordinal变换。
      let color = d3.schemeCategory10;
      console.log(color);
      // 重置数列第一项
      root.radius = 0;
      // console.log(root);
      root.fixed = true;
      console.log(root);
      let force = d3
        .forceSimulation()
        // .gravity(0.5)
        .x()
        .y()
        .change((d, i) => {
          console.log(d);
          console.log(i);
        })
        .nodes(nodes)
        .size([this.width, this.height]);
      console.log(force);
    },
    init() {
      // 绘制画布
      let barChart = d3
        .select(this.$refs.barChart)
        .attr('width', this.width)
        .attr('height', this.height * this.barChartData.length);
      console.log(barChart);
      // 绘制x轴比例尺
      let xScale = d3
        .scaleLinear()
        .domain([0, d3.max(this.barChartData)]) // d3.max() 参数为数组，获取数组中得最大值
        .range([0, this.width - 20]);
      console.log(xScale);
      // 矩形和label组合的容器
      let g = barChart
        .selectAll('g')
        .data(this.barChartData)
        .enter()
        .append('g')
        .attr('transform', (d, i) => {
          console.log(d);
          console.log(i);
          return 'translate(0,' + i * this.height * 0.21 + ')';
        });
      console.log(g);
      // 添加矩形和label文字
      g.append('rect')
        .attr('width', xScale)
        .attr('height', this.height * 0.2)
        .attr('fill', 'green');
      g.append('text')
        .attr('x', d => {
          return xScale(d) + 3;
        })
        .attr('y', this.height * 0.1)
        .attr('dy', '0.3em')
        .attr('fill', 'red')
        .style('font-size', '12px')
        .text(d => {
          return d;
        });
    }
  }
};
</script>
