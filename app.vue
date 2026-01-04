<template>
  <div id="__nuxt" :class="{ 'nuxt-ready': isReady }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const isReady = ref(false)

onMounted(() => {
  // 等待下一個 tick 確保所有樣式都已加載
  nextTick(() => {
    isReady.value = true
    // 添加 nuxt-ready class 到 body
    if (process.client) {
      document.body.classList.add('nuxt-ready')
    }
  })
})
</script>


