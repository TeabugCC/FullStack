<!--
 * @Last Modified by: jihy-c
 * @LastEditTime: 2024-07-14 18:29:05
 * @Description: 
-->
<template>
  <div class="about">
    <el-upload class="upload-demo" drag :action="actionPath" multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <!-- // eslint-disable-next-line vue/no-deprecated-slot-attribute -->
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      <template v-slot:tip>
        <div class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </template>
    </el-upload>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const uploadRef = ref(null)

const submitUpload = () => {
  uploadRef.value.submit();
}
const actionPath = ref('')
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
