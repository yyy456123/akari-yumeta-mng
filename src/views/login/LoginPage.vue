<script setup lang="ts">
import { ref, reactive } from 'vue'
import router from '@/router'
const loginForm = ref({
  username: '',
  password: ''
})
const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 5, message: '密码长度为?', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 3, max: 5, message: '密码长度为?', trigger: 'blur' }
  ]
})
const login = () => {
  // TODO:完成登录逻辑
  router.push('/')
}
</script>

<template>
  <div class="login-div">
    <h1>登录</h1>
    <el-form
      ref="formRef"
      :model="loginForm"
      status-icon
      :rules="rules"
      class="login-form"
      autocomplete="off"
    >
      <el-form-item prop="username">
        <el-input
          prefix-icon="User"
          v-model="loginForm.username"
          placeholder="请输入用户名"
          clearable
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          prefix-icon="Lock"
          v-model="loginForm.password"
          type="password"
          placeholder="请输入密码"
          clearable
        />
      </el-form-item>
    </el-form>
    <div class="flex">
      <el-checkbox>记住密码</el-checkbox>
      <el-link type="primary" :underline="false">忘记密码？</el-link>
    </div>
    <el-button class="button" auto-insert-space type="primary" @click="login"
      >登录</el-button
    >
  </div>
</template>

<style scoped lang="less">
.login-div {
  width: 350px;
  height: 300px;
  padding: 0px 30px;
  border: 1px solid #2f2f2f;
  border-radius: 8px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.flex {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.button {
  margin-top: 10px;
  width: 70%;
}
</style>
