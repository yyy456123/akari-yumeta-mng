<script setup lang="ts"></script>

<template>
  <div class="container-layout">
    <el-container>
      <el-aside width="200px">
        <img class="logo" src="../../assets/logo.png" alt="logo" />
        <hr />
        <menu-bar></menu-bar>
      </el-aside>
      <el-container>
        <el-header class="header"
          ><h1 class="title">明光筑梦-后台管理系统</h1></el-header
        >
        <el-main>
          <hr />
          <router-view></router-view>
        </el-main>

        <el-footer
          ><hr />
          <div>Footer</div>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.header {
  height: 120px;
}
.logo {
  width: 150px;
  height: 150px;
}
.title {
  text-align: center;
  font-size: 48px;
}
</style>
