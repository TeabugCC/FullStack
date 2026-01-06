<template>
  <div class="register-wrapper">
    <el-card class="register-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <span>🚀 开启 M6 全栈时代</span>
        </div>
      </template>
      <el-form ref="registerFormRef" :model="registerForm" :rules="formRules" label-position="top">
        <el-form-item prop="username" label="用户名">
          <el-input v-model="registerForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input v-model="registerForm.password" placeholder="请输入密码,至少8位，需包含大小写字母及数字/特殊符号" type="password"
            show-password></el-input>
        </el-form-item>
        <el-form-item prop="confirmPassword" label="确认密码">
          <el-input v-model="registerForm.confirmPassword" placeholder="请再次输入密码" type="password"
            show-password></el-input>
        </el-form-item>
        <el-form-item prop="email" label="邮箱">
          <el-input v-model="registerForm.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <!-- <el-form-item prop="code" label="验证码"></el-form-item> -->
        <el-button class="submit-btn" @click="submitForm(registerFormRef!)" type="primary" plain
          :loading="userStore.registerLoading">
          注册
        </el-button>
      </el-form>
      <template #footer>已有账号？ <RouterLink to="/login">登陆</RouterLink></template>
    </el-card>

  </div>
</template>

<script setup lang="ts">
import { ElMessage, type FormInstance } from 'element-plus'
import { reactive, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
const router = useRouter();
const userStore = useAuthStore()
const registerForm = reactive({
  username: '',
  password: '',
  confirmPassword: '',
  email: '',
  code: ''
})
const registerFormRef = ref<FormInstance | null>()// js此处通常传null，ts类型推导会自动识别，默认undefined
const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;//密码必须至少包含一个大写字母、一个小写字母、一个数字和一个特殊字符
const formRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: '用户名长度在 3 到 20 个字符之间', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 8, max: 20, message: '密码长度在 8 到 20 个字符之间', trigger: 'blur' },
    { pattern: /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, message: '密码强度不足：需包含大小写字母及数字/特殊符号', trigger: 'blur' }
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
  const valid = await registerFormRef.validate()
  console.log('校验完毕')
  if (valid) {
    console.log('注册表单验证通过:', registerForm)
    const registerFlag = await userStore.registerUser(registerForm)
    if (registerFlag) {
      // 跳转到登录页
      // router.push('/login');
      router.push({ path: '/login' , query: { user: registerForm.username } }); // 传递用户名到登录页
      ElMessage.success('注册成功！');
    } else {
      console.log('注册表单验证失败')
      ElMessage.error('注册失败！请稍后再试');

    }
  } else {
    console.log('注册表单验证失败')
    ElMessage.error('注册表单验证失败');
    // return false
  }
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