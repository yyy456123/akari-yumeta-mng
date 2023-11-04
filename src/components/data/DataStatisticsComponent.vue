<script setup lang="ts">
const data = {
  title: '今日访问量',
  amount: 124
}
</script>

<template>
  <div class="data-box">
    <div class="title">{{ data.title }}</div>
    <hr />
    <div class="data">
      <h2>{{ data.amount }}</h2>
    </div>
  </div>
</template>

<style scoped>
.data-box {
  width: 200px;
  padding: 15px 10px 5px 10px;
  border-radius: 5px;
  box-shadow: 0 6px 20px rgba(48, 65, 86, 0.2);
}

hr {
}
</style>
