<template>
  <div class="bg-white">
    <div class="w-full bg-white rounded-lg p-4 md:p-6">
      <!-- 麵包屑導航 -->
      <nav class="mb-4 md:mb-6 text-xs md:text-sm">
        <ol class="flex items-center gap-1 md:gap-2 text-gray-600 flex-wrap">
          <li>
            <NuxtLink to="/" class="hover:text-red-600 transition-colors">首頁</NuxtLink>
          </li>
          <li class="text-gray-400">/</li>
          <li class="text-gray-900 font-medium">搜尋結果</li>
        </ol>
      </nav>

      <!-- 搜尋標題和結果統計 -->
      <div class="mb-6 md:mb-8">
        <h1 class="text-2xl md:text-3xl font-bold text-black mb-2">
          搜尋結果
        </h1>
        <div class="flex items-center gap-2 flex-wrap">
          <span class="text-gray-600">
            關鍵字：<span class="font-semibold text-black">"{{ searchQuery }}"</span>
          </span>
          <span v-if="selectedCategoryName" class="text-gray-600">
            | 分類：<span class="font-semibold text-black">{{ selectedCategoryName }}</span>
          </span>
          <span class="text-gray-600">
            | 找到 <span class="font-semibold text-red-600">{{ searchResults.length }}</span> 個商品
          </span>
        </div>
      </div>

      <!-- 搜尋結果 -->
      <div v-if="searchResults.length > 0">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 items-stretch">
          <ProductCard
            v-for="product in paginatedResults"
            :key="product.id"
            :product="product"
          />
        </div>

        <!-- 分頁 -->
        <div v-if="totalPages > 1" class="mt-12 flex justify-center items-center gap-2">
          <button
            v-if="currentPage > 1"
            @click="currentPage = currentPage - 1"
            class="px-3 py-2 rounded transition-colors bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            v-for="page in totalPages"
            :key="page"
            @click="currentPage = page"
            :class="[
              'px-4 py-2 rounded transition-colors',
              currentPage === page
                ? 'bg-black text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            ]"
          >
            {{ String(page).padStart(2, '0') }}
          </button>
          <button
            v-if="currentPage < totalPages"
            @click="currentPage = currentPage + 1"
            class="px-3 py-2 rounded transition-colors bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- 無結果提示 -->
      <div v-else class="text-center py-16">
        <svg class="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <p class="text-gray-500 text-lg mb-2">找不到相關商品</p>
        <p class="text-gray-400 text-sm mb-6">請嘗試使用其他關鍵字搜尋</p>
        <NuxtLink
          to="/products"
          class="inline-block px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          瀏覽全部商品
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/composables/useProducts'
import { searchProducts, categoryMap } from '~/composables/useProducts'

const route = useRoute()
const router = useRouter()

// 從 URL 參數獲取搜尋關鍵字和分類
const searchQuery = computed(() => (route.query.q as string) || '')
const categoryFilter = computed(() => (route.query.category as string) || undefined)

// 搜尋結果
const searchResults = computed(() => {
  if (!searchQuery.value.trim()) {
    return []
  }
  return searchProducts(searchQuery.value, categoryFilter.value)
})

// 獲取分類名稱
const selectedCategoryName = computed(() => {
  if (!categoryFilter.value) return ''
  return categoryMap[categoryFilter.value] || ''
})

// 分頁
const currentPage = ref(1)
const itemsPerPage = 20
const totalPages = computed(() => Math.ceil(searchResults.value.length / itemsPerPage))
const paginatedResults = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return searchResults.value.slice(start, end)
})

// 當搜尋關鍵字或分類改變時，重置到第一頁
watch([searchQuery, categoryFilter], () => {
  currentPage.value = 1
})

// 設置頁面標題
useHead({
  title: searchQuery.value 
    ? `搜尋「${searchQuery.value}」- 音響網站`
    : '搜尋結果 - 音響網站'
})

// 如果沒有搜尋關鍵字，重定向到首頁
onMounted(() => {
  if (!searchQuery.value.trim()) {
    router.push('/')
  }
})
</script>
