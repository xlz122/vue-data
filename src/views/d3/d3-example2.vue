<template>
  <div>
    <p>示例2</p>
    <svg ref="chart"></svg>
    <div ref="chart2"></div>
    <div ref="chart3"></div>
  </div>
</template>
<script>
import * as d3 from 'd3';
export default {
  mounted() {
    this.init();
    this.init2();
    this.init3();
  },
  methods: {
    init3() {
      let width = 300;
      let height = 300;
      let alphabet = 'hsaofhaohfoasdaijsfpoasmfo'.split('');
      let g = d3
        .select(this.$refs.chart3)
        .append('g')
        .style('display', 'inline-block')
        .style('width', width + 'px')
        .style('height', height + 'px')
        .style('background-color', 'red');
      function update(data) {
        let t = d3.transition().duration(750);
        let text = g.selectAll('text').data(data, d => {
          return d;
        });
        text
          .exit()
          .transition(t)
          .style('fill-opacity', 1e-6)
          .remove();
        // UPDATE old elements present in new data.
        text.style('fill-opacity', 1).transition(t);
        // ENTER new elements present in new data.
        text
          .enter()
          .append('text')
          .style('fill-opacity', 1e-6)
          .text(function(d) {
            return d;
          })
          .transition(t)
          .style('fill-opacity', 1);
        // text.attr('class', 'update');
        // text
        //   .enter()
        //   .append('text')
        //   .attr('class', 'enter')
        //   .attr('x', (d, i) => {
        //     return i * 32;
        //   })
        //   .attr('dy', '.35em')
        //   .merge(text)
        //   .style('font-size', '18px')
        //   .style('line-height', '250px')
        //   .text(d => {
        //     return d;
        //   });
        // text.exit().remove();
      }
      update(alphabet);
      d3.interval(() => {
        update(
          d3
            .shuffle(alphabet)
            .slice(0, Math.floor(Math.random() * 26))
            .sort()
        );
      }, 5000);
    },
    init2() {
      let width = 300;
      let height = 300;
      let data = [10, 20, 30, 40];
      let chart = d3
        .select(this.$refs.chart2)
        .style('display', 'inline-block')
        .style('width', width + 'px')
        .style('height', height + 'px')
        .style('background-color', 'yellow');
      let x = d3
        .scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, width - 30]); // domain 数据区间 range 图表期望宽度
      chart
        .selectAll('div')
        .data(data)
        .enter()
        .append('div')
        .style('width', d => {
          return x(d) + 'px';
        })
        .style('height', 15)
        .style('background-color', 'blue');
      chart
        .selectAll('div')
        .append('div')
        .style('width', d => {
          return x(d) + 30 + 'px';
        })
        .style('color', 'red')
        .style('text-align', 'right')
        .text(d => {
          return d;
        });
    },
    init() {
      let chart = d3
        .select(this.$refs.chart)
        .attr('width', 300)
        .attr('height', 300)
        .style('background-color', 'red');
      chart
        .selectAll('circle') // 查找元素
        .data([30, 40, 50])
        .enter() // 如果现有数据和节点不匹配，补齐缺少的节点
        .append('circle')
        .attr('cx', (d, i) => {
          return i * 100 + 30;
        })
        .attr('cy', 60)
        .attr('r', 10)
        .transition()
        .attr('r', 20);
      // 如果现有数据和节点不匹配，删除多余节点
      chart
        .selectAll('circle')
        .exit()
        .transition()
        .attr('r', 0)
        .remove();
    }
  }
};
</script>

<style scoped>
.enter {
  fill: green !important;
}
.update {
  fill: #333 !important;
}
</style>
