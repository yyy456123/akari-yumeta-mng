<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const echartsRef = ref(null)
onMounted(() => {
  var myChart = echarts.init(echartsRef.value)
  const option = {
    title: {
      text: '近一月用户数量变化图',
      left: 'center'
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
        itemStyle: {
          normal: {
            label: {
              show: true
            }
          }
        }
      }
    ]
  }

  myChart.setOption(option)
})
</script>

<template>
  <div ref="echartsRef" style="width: 600px; height: 400px"></div>
</template>

<style scoped></style>
