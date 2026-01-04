<template>
  <div class="register-wrapper">
    <el-card class="register-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <span>🚀 开启 M6 全栈时代</span>
        </div>
      </template>
      <el-form ref="registerForm" :model="registerForm" :rules="formRules" label-position="top">
        <el-form-item prop="username" label="用户名">
          <el-input v-model="registerForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input v-model="registerForm.password" placeholder="请输入密码,至少6位，包含字母数字" type="password"
            show-password></el-input>
        </el-form-item>
        <el-form-item prop="confirmPassword" label="确认密码">
          <el-input v-model="registerForm.confirmPassword" placeholder="请再次输入密码" type="password"
            show-password></el-input>
        </el-form-item>
        <el-form-item prop="email" label="邮箱">
          <el-input v-model="registerForm.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="code" label="验证码"></el-form-item>
        <el-button class="submit-btn" @click="submitForm(registerFormRef!)" type="primary" plain
          :loading="userStore.registerLoading">
          注册
        </el-button>
      </el-form>
      <!-- <template #footer></template> -->
    </el-card>

  </div>
</template>

<script setup lang="ts">
import { ElMessage, type FormInstance } from 'element-plus'
import { reactive, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
const userStore = useAuthStore()
const registerForm = reactive({
  username: '',
  password: '',
  confirmPassword: '',
  email: '',
  code: ''
})
const registerFormRef = ref<FormInstance | null>()// js此处通常传null，ts类型推导会自动识别，默认undefined
const formRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: '用户名长度在 3 到 20 个字符之间', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '密码长度在 6 到 20 个字符之间', trigger: 'blur' }
  ],
  confirmPassword: [
    { required: true, message: '请确认密码', trigger: 'blur' },
    {
      validator: (rule: any, value: string, callback: any) => {
        console.log(rule, value)
        if (value !== registerForm.password) {
          callback(new Error('两次输入的密码不一致'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入有效的邮箱地址', trigger: 'blur' }
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: 'blur' }
  ]
}
const submitForm = async (registerFormRef: FormInstance | undefined) => {
  if (!registerFormRef) return;
  console.log('注册表单数据:', registerFormRef)
  await registerFormRef.validate(async (valid) => {
    if (valid) {
      console.log('注册表单验证通过:', registerForm)
      await userStore.registerUser(registerForm)
      ElMessage.success('注册成功！');
    } else {
      console.log('注册表单验证失败')
      ElMessage.error('注册表单验证失败');
      // return false
    }
  })
}

</script>

<style lang="scss" scoped>
.register-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.register-card {
  width: 420px;
}

.submit-btn {
  width: 100%;
  margin-top: 20px;
}
</style>