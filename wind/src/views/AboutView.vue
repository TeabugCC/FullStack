<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <div id="chartContainer" ref="chartContainer" width="500" height="500"> </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
onMounted(() => {
  const chartContainer = ref('chartContainer')
  const chartContainerDom = chartContainer.value
  // 基于准备好的dom，初始化echarts实例
  var myChart = $echarts.init(chartContainerDom);
  // 绘制图表
  myChart.setOption({
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  });

})
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
