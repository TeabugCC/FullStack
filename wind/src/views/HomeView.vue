<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const router = useRouter()
const activeIndex = ref('1')
function toLogin() {
  router.push({ path: '/login' })
}
function toRegister() {
  router.push('/register')
}
function handleSelect(key: string, keyPath: string[]) {
  console.log(key, keyPath);
}
</script>

<template>
  <el-container>
    <el-header>
      <el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="false" @select="handleSelect">
        <el-menu-item index="1">Home</el-menu-item>
        <el-menu-item index="2" @click="toLogin">Login</el-menu-item>
        <el-menu-item index="3" @click="toRegister">Register</el-menu-item>
        <el-sub-menu index="4">
          <template #title>More</template>
          <el-menu-item index="4-1">Settings</el-menu-item>
          <el-menu-item index="4-2">Profile</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-header>
    <el-aside  width="200px">tree</el-aside>
    <el-main>
      <TheWelcome />
    </el-main>
    <el-footer>MIT</el-footer>
  </el-container>
</template>
