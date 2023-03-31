<template>
  <el-input v-model="input" placeholder="Please input" @change="handleChange" />
  <h1>{{ message }}</h1>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import axios from "axios";
const input = ref('')
let message = ref('')
const sendMessage = (data: string) => {
  axios({
    url: `${import.meta.env.VITE_APP_BASE_URL}/chat/completions`,
    method: 'POST',
    data: {
      apiKey: "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",
      sessionId: "8d1cb9b0-d535-43a8-b738-4f61b1608579",
      content: data
    }
  }).then((res) => {
    message.value = res.data.data
  })
}
const handleChange = (val: string) => {
  sendMessage(val)
}
</script>
<style scoped>
</style>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>
