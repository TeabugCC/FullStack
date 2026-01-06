<template>
  <div class="login-wrapper">
    <el-card class="login-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <span>🚀 开启 M6 全栈时代</span>
        </div>
      </template>
      <el-form ref="loginFormRef" :model="loginForm" :rules="formRules" label-position="top">
        <el-form-item prop="username" label="用户名">
          <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input v-model="loginForm.password" placeholder="请输入密码,至少8位，需包含大小写字母及数字/特殊符号" type="password"
            show-password></el-input>
        </el-form-item>
        <!-- <el-form-item prop="email" label="邮箱">
          <el-input v-model="loginForm.email" placeholder="请输入邮箱"></el-input>
        </el-form-item> -->
        <!-- <el-form-item prop="code" label="验证码"></el-form-item> -->
        <el-button class="submit-btn" @click="submitForm(loginFormRef!)" type="primary" plain
          :loading="userStore.loginLoading">
          登陆
        </el-button>
      </el-form>
      <template #footer>没有账号？ <RouterLink to="/register">注册</RouterLink></template>
    </el-card>

  </div>
</template>

<script setup lang="ts">
import { ElMessage, type FormInstance } from 'element-plus'
import { reactive, ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRoute } from 'vue-router'
const userStore = useAuthStore()
const route = useRoute()
const loginForm = reactive({
  username: '',
  password: '',
})
const loginFormRef = ref<FormInstance | null>()// js此处通常传null，ts类型推导会自动识别，默认undefined
const formRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: '用户名长度在 3 到 20 个字符之间', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 8, max: 20, message: '密码长度在 8 到 20 个字符之间', trigger: 'blur' }
  ],
}
onMounted(() => {
  const username = Array.isArray(route.query.username) ? route.query.username[0] : (route.query.username || '')
  loginForm.username = username as string
})
const submitForm = async (formRef: FormInstance | undefined) => {
  if (!formRef) return;
  console.log('登陆表单数据:', formRef)
  const valid = await formRef.validate()
  console.log('校验完毕')
  if (valid) {
    console.log('登陆表单验证通过:', loginForm)
    console.log('--- Debug Start ---');
    console.log('userStore对象:', userStore);
    console.log('loginUser 的真面目:', userStore.loginUser, userStore.loginLoading);
    console.log('--- Debug End ---');
    const flag = await userStore.loginUser(loginForm)
    ElMessage.success('登陆成功！');
    if (flag) {
      // 跳转到首页
      window.location.href = '/';
    }
  } else {
    console.log('登陆表单验证失败')
    ElMessage.error('登陆表单验证失败');
    // return false
  }
}

</script>

<style lang="scss" scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.login-card {
  width: 420px;
}

.submit-btn {
  width: 100%;
  margin-top: 20px;
}
</style>