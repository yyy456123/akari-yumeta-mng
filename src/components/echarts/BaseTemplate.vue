<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const echartsRef = ref(null)
onMounted(() => {
  var myChart = echarts.init(echartsRef.value)
  const option = {}
  myChart.setOption(option)
})
</script>

<template>
  <div ref="echartsRef" style="width: 600px; height: 400px"></div>
</template>

<style scoped></style>
