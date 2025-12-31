<template>
  <div class="min-h-screen bg-white">
    <Navbar />

    <main>
      <!-- 首页使用自己的布局，其他页面使用 CategoryList 布局 -->
      <template v-if="isHomePage">
        <slot />
      </template>
      <template v-else>
        <!-- Category List and Content Section -->
        <section class="bg-white border-t border-gray-300">
          <div class="container mx-auto px-4 pb-3">
            <div class="flex flex-col md:flex-row gap-4 items-stretch">
              <!-- 左侧：分类列表 - 手机版隐藏，桌面版显示 -->
              <div class="hidden md:block">
                <CategoryList />
              </div>
              
              <!-- 右侧：页面内容 -->
              <div class="flex-1 w-full">
                <slot />
              </div>
            </div>
          </div>
        </section>
      </template>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const isHomePage = computed(() => route.path === '/')
</script>

