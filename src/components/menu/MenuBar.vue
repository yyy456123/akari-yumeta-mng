<script setup lang="ts">
const menuItems = [
  { route: '/home', icon: 'House', title: '首页' },
  {
    hasSubmenu: true,
    icon: 'User',
    title: '用户管理',
    children: [
      { route: '/children', icon: 'User', title: '儿童管理' },
      { route: '/volunteer', icon: 'UserFilled', title: '志愿者管理' },
      { route: '/contributor', icon: 'Avatar', title: '捐助者管理' }
    ]
  },
  { route: '/news', icon: 'Document', title: '新闻推送' },
  { route: '/donation', icon: 'Coin', title: '捐款捐物分配' },
  { route: '/learning', icon: 'EditPen', title: '学习任务发布' },
  { route: '/interaction', icon: 'Connection', title: '交互任务分配' },
  { route: '/personal', icon: 'Setting', title: '个人信息' }
]
</script>

<template>
  <el-menu default-active="0" class="el-menu-vertical-demo" router>
    <template v-for="(item, index) in menuItems" :key="index">
      <el-menu-item
        v-if="!item.hasSubmenu"
        :index="index + ''"
        :route="item.route"
      >
        <component class="el-icon" :is="item.icon"></component>
        <span>{{ item.title }}</span>
      </el-menu-item>
      <el-sub-menu v-else :index="index + ''">
        <template #title>
          <component class="el-icon" :is="item.icon"></component>
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item
          v-for="(child, subIndex) in item.children"
          :key="subIndex"
          :index="index + '-' + subIndex"
          :route="child.route"
          >{{ child.title }}</el-menu-item
        >
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<style scoped></style>
