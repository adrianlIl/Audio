<template>
  <footer class="bg-black text-white mt-20">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- Logo 区域 -->
        <div class="md:col-span-1">
          <NuxtLink to="/" class="inline-block mb-4">
            <img src="/logo.png" alt="Asena" class="h-24 md:h-28 object-contain" />
          </NuxtLink>
        </div>

        <!-- 快速链接 -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">快速链接</h3>
          <ul class="space-y-2 text-gray-400">
            <li>
              <NuxtLink to="/" class="hover:text-white transition-colors">首頁</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/products" class="hover:text-white transition-colors">全部商品</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/latest" class="hover:text-white transition-colors">最新上架</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/repair" class="hover:text-white transition-colors">音響維修</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/purchase" class="hover:text-white transition-colors">音響收購</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- 服务信息 -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">服務資訊</h3>
          <ul class="space-y-2 text-gray-400">
            <li>
              <NuxtLink to="/news" class="hover:text-white transition-colors">最新消息</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/privacy" class="hover:text-white transition-colors">隱私權政策</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/terms" class="hover:text-white transition-colors">服務條款</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="hover:text-white transition-colors">聯絡我們</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- 公司信息 -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">公司資訊</h3>
          <div class="space-y-2 text-gray-400 text-sm">
            <p>斗士文創有限公司</p>
            <p>玉山銀行（808）</p>
            <p>1300940043752</p>
          </div>
        </div>
      </div>

      <!-- 底部版权信息 -->
      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>&copy; 2024 斗士文創有限公司. 保留所有權利.</p>
          <div class="flex gap-6">
            <NuxtLink to="/privacy" class="hover:text-white transition-colors">隱私權政策</NuxtLink>
            <NuxtLink to="/terms" class="hover:text-white transition-colors">服務條款</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

