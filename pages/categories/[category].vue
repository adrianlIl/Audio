<template>
  <div class="bg-white">
    <!-- Category List and Content Section -->
    <section class="bg-white border-t border-gray-300">
      <div class="container mx-auto px-4 pb-3">
        <div class="flex flex-col md:flex-row gap-4 items-stretch">
          <!-- 左側：分類列表 - 手機版隱藏，桌面版顯示 -->
          <div class="hidden md:block">
            <CategoryList />
          </div>

          <!-- 右側：商品區域 -->
          <div class="flex-1 w-full bg-white rounded-lg p-4 md:p-6">
            <!-- 麵包屑導航 -->
            <nav class="mb-4 md:mb-6 text-xs md:text-sm">
              <ol class="flex items-center gap-1 md:gap-2 text-gray-600 flex-wrap">
                <li>
                  <NuxtLink to="/" class="hover:text-red-600 transition-colors">首頁</NuxtLink>
                </li>
                <li class="text-gray-400">/</li>
                <li>
                  <NuxtLink to="/products" class="hover:text-red-600 transition-colors">全部商品</NuxtLink>
                </li>
                <li class="text-gray-400">/</li>
                <li class="text-gray-900 font-medium">{{ categoryName }}</li>
              </ol>
            </nav>

            <!-- 分類標題 -->
            <h1 class="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8">{{ categoryName }}</h1>

            <!-- 商品網格 -->
            <div v-if="products.length > 0" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              <ProductCard
                v-for="product in products"
                :key="product.id"
                :product="product"
              />
            </div>

            <!-- 無商品提示 -->
            <div v-else class="text-center py-16">
              <p class="text-gray-500 text-lg">此分類暫無商品</p>
            </div>

            <!-- 分頁 -->
            <div v-if="products.length > 0" class="mt-12 flex justify-center items-center gap-2">
              <button
                v-if="currentPage > 1"
                @click="currentPage = currentPage - 1"
                class="px-3 py-2 rounded transition-colors bg-white text-gray-700 hover:bg-gray-100"
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
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                ]"
              >
                {{ String(page).padStart(2, '0') }}
              </button>
              <button
                v-if="currentPage < totalPages"
                @click="currentPage = currentPage + 1"
                class="px-3 py-2 rounded transition-colors bg-white text-gray-700 hover:bg-gray-100"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
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

const route = useRoute()
const category = computed(() => route.params.category as string)

// 分類名稱映射
const categoryMap: Record<string, string> = {
  guitar: '吉他',
  bass: '貝斯',
  amplifier: '音箱區',
  effects: '效果器',
  keyboard: '鍵盤樂器',
  headphones: '耳機',
  microphone: '麥克風',
  recording: '錄音',
  pa: 'PA音響器材',
  percussion: '打擊樂器',
  accessories: '配件'
}

const categoryName = computed(() => categoryMap[category.value] || category.value)

// 模擬商品數據（實際應該從 API 或數據庫獲取）
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
    brand: 'Behringer',
    name: 'Behringer 耳朵牌 迷你混音器 (限量黑) MICROMIX MX400 四軌/4軌 混音器 單聲道輸出',
    price: 2000,
    originalPrice: 2600,
    discount: '活動下殺97折',
    image: '/behringer.jpg'
  },
  {
    id: 3,
    brand: 'Behringer',
    name: 'Behringer 耳朵牌 迷你混音器 (限量黑) MICROMIX MX400 四軌/4軌 混音器 單聲道輸出',
    price: 2000,
    originalPrice: 2600,
    discount: '活動下殺97折',
    image: '/behringer.jpg'
  },
  {
    id: 4,
    brand: 'Behringer',
    name: 'Behringer 耳朵牌 迷你混音器 (限量黑) MICROMIX MX400 四軌/4軌 混音器 單聲道輸出',
    price: 2000,
    originalPrice: 2600,
    discount: '活動下殺97折',
    image: '/behringer.jpg'
  },
  {
    id: 5,
    brand: 'Behringer',
    name: 'Behringer 耳朵牌 迷你混音器 (限量黑) MICROMIX MX400 四軌/4軌 混音器 單聲道輸出',
    price: 2000,
    originalPrice: 2600,
    discount: '活動下殺97折',
    image: '/behringer.jpg'
  },
  {
    id: 6,
    brand: 'Behringer',
    name: 'Behringer 耳朵牌 迷你混音器 (限量黑) MICROMIX MX400 四軌/4軌 混音器 單聲道輸出',
    price: 2000,
    originalPrice: 2600,
    discount: '活動下殺97折',
    image: '/behringer.jpg'
  },
  {
    id: 7,
    brand: 'Behringer',
    name: 'Behringer 耳朵牌 迷你混音器 (限量黑) MICROMIX MX400 四軌/4軌 混音器 單聲道輸出',
    price: 2000,
    originalPrice: 2600,
    discount: '活動下殺97折',
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
    brand: 'Behringer',
    name: 'Behringer 耳朵牌 迷你混音器 (限量黑) MICROMIX MX400 四軌/4軌 混音器 單聲道輸出',
    price: 2000,
    originalPrice: 2600,
    discount: '活動下殺97折',
    image: '/behringer.jpg'
  },
  {
    id: 10,
    brand: 'Behringer',
    name: 'Behringer 耳朵牌 迷你混音器 (限量黑) MICROMIX MX400 四軌/4軌 混音器 單聲道輸出',
    price: 2000,
    originalPrice: 2600,
    discount: '活動下殺97折',
    image: '/behringer.jpg'
  },
  {
    id: 11,
    brand: 'Behringer',
    name: 'Behringer 耳朵牌 迷你混音器 (限量黑) MICROMIX MX400 四軌/4軌 混音器 單聲道輸出',
    price: 2000,
    originalPrice: 2600,
    discount: '活動下殺97折',
    image: '/behringer.jpg'
  },
  {
    id: 12,
    brand: 'Behringer',
    name: 'Behringer 耳朵牌 迷你混音器 (限量黑) MICROMIX MX400 四軌/4軌 混音器 單聲道輸出',
    price: 2000,
    originalPrice: 2600,
    discount: '活動下殺97折',
    image: '/behringer.jpg'
  },
  {
    id: 13,
    brand: 'Behringer',
    name: 'Behringer 耳朵牌 迷你混音器 (限量黑) MICROMIX MX400 四軌/4軌 混音器 單聲道輸出',
    price: 2000,
    originalPrice: 2600,
    discount: '活動下殺97折',
    image: '/behringer.jpg'
  },
  {
    id: 14,
    brand: 'Behringer',
    name: 'Behringer 耳朵牌 迷你混音器 (限量黑) MICROMIX MX400 四軌/4軌 混音器 單聲道輸出',
    price: 2000,
    originalPrice: 2600,
    discount: '活動下殺97折',
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
    brand: 'Behringer',
    name: 'Behringer 耳朵牌 迷你混音器 (限量黑) MICROMIX MX400 四軌/4軌 混音器 單聲道輸出',
    price: 2000,
    originalPrice: 2600,
    discount: '活動下殺97折',
    image: '/behringer.jpg'
  },
  {
    id: 17,
    brand: 'Behringer',
    name: 'Behringer 耳朵牌 迷你混音器 (限量黑) MICROMIX MX400 四軌/4軌 混音器 單聲道輸出',
    price: 2000,
    originalPrice: 2600,
    discount: '活動下殺97折',
    image: '/behringer.jpg'
  },
  {
    id: 18,
    brand: 'Behringer',
    name: 'Behringer 耳朵牌 迷你混音器 (限量黑) MICROMIX MX400 四軌/4軌 混音器 單聲道輸出',
    price: 2000,
    originalPrice: 2600,
    discount: '活動下殺97折',
    image: '/behringer.jpg'
  },
  {
    id: 19,
    brand: 'Behringer',
    name: 'Behringer 耳朵牌 迷你混音器 (限量黑) MICROMIX MX400 四軌/4軌 混音器 單聲道輸出',
    price: 2000,
    originalPrice: 2600,
    discount: '活動下殺97折',
    image: '/behringer.jpg'
  },
  {
    id: 20,
    brand: 'Behringer',
    name: 'Behringer 耳朵牌 迷你混音器 (限量黑) MICROMIX MX400 四軌/4軌 混音器 單聲道輸出',
    price: 2000,
    originalPrice: 2600,
    discount: '活動下殺97折',
    image: '/behringer.jpg'
  }
]

// 根據分類過濾商品（這裡簡化處理，實際應該根據分類ID過濾）
const filteredProducts = computed(() => {
  // 實際應用中，這裡應該根據分類過濾商品
  // 目前返回所有商品作為示例
  return allProducts
})

// 分頁
const currentPage = ref(1)
const itemsPerPage = 20
const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage))
const products = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredProducts.value.slice(start, end)
})

// 設置頁面標題
useHead({
  title: `${categoryName.value} - 音響網站`
})
</script>

