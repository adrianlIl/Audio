<template>
  <div class="bg-white">
    <!-- 商品區域 -->
    <div class="w-full bg-white rounded-lg p-4 md:p-6">
      <!-- 麵包屑導航 -->
      <nav class="mb-4 md:mb-6 text-xs md:text-sm">
        <ol class="flex items-center gap-1 md:gap-2 text-gray-600 flex-wrap">
          <li>
            <NuxtLink to="/" class="hover:text-red-600 transition-colors">首頁</NuxtLink>
          </li>
          <li class="text-gray-400">/</li>
          <li class="text-gray-900 font-medium">全部商品</li>
        </ol>
      </nav>

      <!-- 分類標題和篩選 -->
      <div class="mb-6 md:mb-8">
        <h1 class="text-2xl md:text-3xl font-bold text-black mb-4">
          全部商品
        </h1>
        
        <!-- 商品數量 -->
        <p class="text-gray-600 text-sm md:text-base">
          共找到 <span class="font-semibold text-red-600">{{ allProducts.length }}</span> 件商品
        </p>
      </div>

      <!-- 商品網格 -->
      <div v-if="products.length > 0" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 items-stretch">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>

      <!-- 無商品提示 -->
      <div v-else class="text-center py-16">
        <p class="text-gray-500 text-lg">暫無商品</p>
      </div>

      <!-- 分頁 -->
      <div v-if="products.length > 0" class="mt-12 flex justify-center items-center gap-2">
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
  </div>
</template>

<script setup lang="ts">
interface Product {
  id: number
  brand: string
  name: string
  description?: string
  price: number
  originalPrice?: number
  discount?: string
  image?: string
}

// 模擬所有商品數據（實際應該從 API 獲取）
const allProducts: Product[] = [
  {
    id: 1,
    brand: 'Behringer',
    name: 'Behringer 耳朵牌 迷你混音器 (限量黑) MICROMIX MX400 四軌/4軌 混音器 單聲道輸出',
    price: 2000,
    originalPrice: 2600,
    discount: '活動下殺97折',
    image: '/behringer.jpg'
  },
  {
    id: 2,
    brand: 'Yamaha',
    name: 'Yamaha 專業音響系統 PA-300 高品質音響設備',
    price: 15000,
    originalPrice: 18000,
    discount: '新品上市',
    image: '/behringer.jpg'
  },
  {
    id: 3,
    brand: 'Sony',
    name: 'Sony 專業錄音設備 PCM-D100 高解析度錄音筆',
    price: 25000,
    originalPrice: 30000,
    discount: '限時優惠',
    image: '/behringer.jpg'
  },
  {
    id: 4,
    brand: 'Audio-Technica',
    name: 'Audio-Technica AT2020 專業錄音室電容式麥克風',
    price: 3500,
    originalPrice: 4200,
    discount: '熱銷商品',
    image: '/behringer.jpg'
  },
  {
    id: 5,
    brand: 'Shure',
    name: 'Shure SM58 動圈式人聲麥克風 專業演唱麥克風',
    price: 4500,
    originalPrice: 5500,
    discount: '經典款',
    image: '/behringer.jpg'
  },
  {
    id: 6,
    brand: 'Bose',
    name: 'Bose Professional L1 Pro32 便攜式PA系統',
    price: 85000,
    originalPrice: 100000,
    discount: '旗艦新品',
    image: '/behringer.jpg'
  },
  {
    id: 7,
    brand: 'Focusrite',
    name: 'Focusrite Scarlett 2i2 第三代 USB 錄音介面',
    price: 5500,
    originalPrice: 6500,
    discount: '專業推薦',
    image: '/behringer.jpg'
  },
  {
    id: 8,
    brand: 'Behringer',
    name: 'Behringer 耳朵牌 迷你混音器 (限量黑) MICROMIX MX400 四軌/4軌 混音器 單聲道輸出',
    price: 2000,
    originalPrice: 2600,
    discount: '活動下殺97折',
    image: '/behringer.jpg'
  },
  {
    id: 9,
    brand: 'Yamaha',
    name: 'Yamaha 專業音響系統 PA-300 高品質音響設備',
    price: 15000,
    originalPrice: 18000,
    discount: '新品上市',
    image: '/behringer.jpg'
  },
  {
    id: 10,
    brand: 'Sony',
    name: 'Sony 專業錄音設備 PCM-D100 高解析度錄音筆',
    price: 25000,
    originalPrice: 30000,
    discount: '限時優惠',
    image: '/behringer.jpg'
  },
  {
    id: 11,
    brand: 'Audio-Technica',
    name: 'Audio-Technica AT2020 專業錄音室電容式麥克風',
    price: 3500,
    originalPrice: 4200,
    discount: '熱銷商品',
    image: '/behringer.jpg'
  },
  {
    id: 12,
    brand: 'Shure',
    name: 'Shure SM58 動圈式人聲麥克風 專業演唱麥克風',
    price: 4500,
    originalPrice: 5500,
    discount: '經典款',
    image: '/behringer.jpg'
  },
  {
    id: 13,
    brand: 'Bose',
    name: 'Bose Professional L1 Pro32 便攜式PA系統',
    price: 85000,
    originalPrice: 100000,
    discount: '旗艦新品',
    image: '/behringer.jpg'
  },
  {
    id: 14,
    brand: 'Focusrite',
    name: 'Focusrite Scarlett 2i2 第三代 USB 錄音介面',
    price: 5500,
    originalPrice: 6500,
    discount: '專業推薦',
    image: '/behringer.jpg'
  },
  {
    id: 15,
    brand: 'Behringer',
    name: 'Behringer 耳朵牌 迷你混音器 (限量黑) MICROMIX MX400 四軌/4軌 混音器 單聲道輸出',
    price: 2000,
    originalPrice: 2600,
    discount: '活動下殺97折',
    image: '/behringer.jpg'
  },
  {
    id: 16,
    brand: 'Yamaha',
    name: 'Yamaha 專業音響系統 PA-300 高品質音響設備',
    price: 15000,
    originalPrice: 18000,
    discount: '新品上市',
    image: '/behringer.jpg'
  },
  {
    id: 17,
    brand: 'Sony',
    name: 'Sony 專業錄音設備 PCM-D100 高解析度錄音筆',
    price: 25000,
    originalPrice: 30000,
    discount: '限時優惠',
    image: '/behringer.jpg'
  },
  {
    id: 18,
    brand: 'Audio-Technica',
    name: 'Audio-Technica AT2020 專業錄音室電容式麥克風',
    price: 3500,
    originalPrice: 4200,
    discount: '熱銷商品',
    image: '/behringer.jpg'
  },
  {
    id: 19,
    brand: 'Shure',
    name: 'Shure SM58 動圈式人聲麥克風 專業演唱麥克風',
    price: 4500,
    originalPrice: 5500,
    discount: '經典款',
    image: '/behringer.jpg'
  },
  {
    id: 20,
    brand: 'Bose',
    name: 'Bose Professional L1 Pro32 便攜式PA系統',
    price: 85000,
    originalPrice: 100000,
    discount: '旗艦新品',
    image: '/behringer.jpg'
  }
]

// 分頁
const currentPage = ref(1)
const itemsPerPage = 20
const totalPages = computed(() => Math.ceil(allProducts.length / itemsPerPage))
const products = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return allProducts.slice(start, end)
})

// 設置頁面標題
useHead({
  title: '全部商品 - 音響網站'
})
</script>

