<template>
  <div class="min-h-screen bg-gray-50">
    <Navbar />

    <main>
      <slot />
    </main>

    <footer class="bg-gray-900 text-white mt-20">
      <div class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">关于我们</h3>
            <p class="text-gray-400">
              专业的音响设备供应商，致力于为您提供高品质的音响体验。
            </p>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">快速链接</h3>
            <ul class="space-y-2 text-gray-400">
              <li><NuxtLink to="/" class="hover:text-white transition">首页</NuxtLink></li>
              <li><NuxtLink to="/products" class="hover:text-white transition">产品</NuxtLink></li>
              <li><NuxtLink to="/about" class="hover:text-white transition">关于我们</NuxtLink></li>
              <li><NuxtLink to="/contact" class="hover:text-white transition">联系我们</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">联系方式</h3>
            <p class="text-gray-400">
              邮箱: info@audio.com<br>
              电话: +86 123 4567 8900
            </p>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 音响网站. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>

