<script setup lang="ts"></script>

<template>
  <div class="container-layout">
    <el-container>
      <el-aside width="200px">
        <h2>Logo</h2>
        <hr />
        <menu-bar></menu-bar>
      </el-aside>
      <el-container>
        <el-header><h1>Header</h1></el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped></style>
