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
          <li class="text-gray-900 font-medium">最新上架</li>
        </ol>
      </nav>

      <!-- 分類標題 -->
      <h1 class="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8">
        最新上架
      </h1>

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
        <p class="text-gray-500 text-lg">暫無最新商品</p>
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
  category?: string
  createdAt?: string
}

// 從分類頁面獲取所有商品數據（與 categories/[category].vue 保持一致）
const allProductsRaw: Product[] = [
  // 手機配件 - UAG 手機殼
  {
    id: 1,
    brand: 'UAG',
    name: 'UAG 手機殼 iPhone 17 PRO MAX',
    price: 2490,
    category: 'mobile-accessories',
    image: '/mobile-accessories/uag1.jpg',
    createdAt: '2024-12-01'
  },
  {
    id: 2,
    brand: 'UAG',
    name: 'UAG 手機殼 iPhone 17 PRO',
    price: 2490,
    category: 'mobile-accessories',
    image: '/mobile-accessories/uag1.jpg',
    createdAt: '2024-12-02'
  },
  {
    id: 3,
    brand: 'UAG',
    name: 'UAG 手機殼 iPhone 17 AIR',
    price: 2390,
    category: 'mobile-accessories',
    image: '/mobile-accessories/uag2.png',
    createdAt: '2024-12-03'
  },
  {
    id: 4,
    brand: 'UAG',
    name: 'UAG 手機殼 iPhone 17',
    price: 2390,
    category: 'mobile-accessories',
    image: '/mobile-accessories/uag2.png',
    createdAt: '2024-12-04'
  },
  // 手機配件 - 保護貼
  {
    id: 5,
    brand: '保護貼',
    name: '3D滿版保護貼',
    price: 999,
    category: 'mobile-accessories',
    image: '/mobile-accessories/uag3.jpg',
    createdAt: '2024-12-05'
  },
  {
    id: 6,
    brand: '保護貼',
    name: '防窺膜',
    price: 750,
    category: 'mobile-accessories',
    image: '/mobile-accessories/uag4.png',
    createdAt: '2024-12-06'
  },
  // 手機配件 - 充電器
  {
    id: 7,
    brand: '充電器',
    name: '氮化鎵 3孔PD快充頭',
    price: 799,
    category: 'mobile-accessories',
    image: '/mobile-accessories/phone1.jpg',
    createdAt: '2024-12-07'
  },
  {
    id: 8,
    brand: '充電器',
    name: 'TYPE C 快充線',
    price: 299,
    category: 'mobile-accessories',
    image: '/mobile-accessories/phone2.jpg',
    createdAt: '2024-12-08'
  },
  // 喇叭
  {
    id: 10,
    brand: 'Marshall',
    name: 'Marshall Emberton III 藍芽喇叭',
    price: 4900,
    category: 'speakers',
    image: '/players/play1.jpg',
    createdAt: '2024-12-09'
  },
  {
    id: 11,
    brand: 'SANSUI山水',
    name: 'SANSUI山水 全指向藍芽無線音響 SF-LL6',
    price: 2990,
    category: 'speakers',
    image: '/players/play2.jpg',
    createdAt: '2024-12-10'
  },
  {
    id: 12,
    brand: 'JBL',
    name: 'JBL Flip 7可攜型防水藍牙喇叭',
    price: 5900,
    category: 'speakers',
    image: '/players/play3.png',
    createdAt: '2024-12-11'
  },
  // 二手音箱、喇叭 - 二手整新音箱
  {
    id: 13,
    brand: 'Crate',
    name: 'Crate 電貝斯音箱',
    price: 14900,
    category: 'players',
    image: '/repair/repair1.jpg',
    createdAt: '2024-12-12'
  },
  {
    id: 14,
    brand: 'Mesa Boogie',
    name: '9成新Mesa Boogie Mark V 真空管電吉他音箱',
    price: 88000,
    category: 'players',
    image: '/repair/repair2.jpg',
    createdAt: '2024-12-13'
  },
  {
    id: 15,
    brand: 'Marshall',
    name: 'Marshall mg30dfx吉他音箱',
    price: 3500,
    category: 'players',
    image: '/repair/repair3.png',
    createdAt: '2024-12-14'
  },
  {
    id: 16,
    brand: 'Peavey',
    name: 'Peavey micro bass II 第二代 20w 貝斯音箱',
    price: 3700,
    category: 'players',
    image: '/repair/repair4.jpg',
    createdAt: '2024-12-15'
  },
  // 二手音箱、喇叭 - 二手整新喇叭
  {
    id: 17,
    brand: 'ATC',
    name: '英國ATC SCM20 書架式喇叭',
    price: 49800,
    category: 'players',
    image: '/repair/repair5.jpg',
    createdAt: '2024-12-16'
  },
  {
    id: 18,
    brand: 'ROGERS',
    name: '英國ROGERS LS3 5A+AB1落地式喇叭',
    price: 65800,
    category: 'players',
    image: '/repair/repair6.jpg',
    createdAt: '2024-12-17'
  },
  {
    id: 19,
    brand: 'KEF',
    name: '英國製KEF Reference 205_2 落地式喇叭',
    price: 88000,
    category: 'players',
    image: '/repair/repair7.jpg',
    createdAt: '2024-12-18'
  },
  {
    id: 20,
    brand: 'JBL',
    name: 'JBL EON612 12吋二路外場喇叭(單一顆)',
    price: 16000,
    category: 'players',
    image: '/repair/repair8.jpg',
    createdAt: '2024-12-19'
  },
  {
    id: 21,
    brand: 'YAMAHA',
    name: 'YAMAHA CBR10 被動式外場喇叭（單顆）',
    price: 6500,
    category: 'players',
    image: '/repair/repair9.jpg',
    createdAt: '2024-12-20'
  },
  {
    id: 22,
    brand: 'ES',
    name: 'ES-1002 DB 主動式音柱喇叭',
    price: 40000,
    category: 'players',
    image: '/repair/repair10.jpg',
    createdAt: '2024-12-21'
  },
  // 二手音箱、喇叭 - 二手整新擴大機
  {
    id: 23,
    brand: 'SONY',
    name: '日本製 SONY SCD-1 高階SACD播放機',
    price: 85000,
    category: 'players',
    image: '/repair/repair11.jpg',
    createdAt: '2024-12-22'
  },
  {
    id: 24,
    brand: 'DEVIALET',
    name: '法國製DEVIALET 400 MONO超級萬能綜合擴大機',
    price: 130000,
    category: 'players',
    image: '/repair/repair12.jpg',
    createdAt: '2024-12-23'
  }
]

// 過濾掉專業維修分類的商品
const allProductsFiltered = computed(() => {
  return allProductsRaw.filter(product => product.category !== 'repair')
})

// 按創建時間排序（最新的在前）
const sortedProducts = computed(() => {
  return [...allProductsFiltered.value].sort((a, b) => {
    const dateA = new Date(a.createdAt || 0).getTime()
    const dateB = new Date(b.createdAt || 0).getTime()
    return dateB - dateA
  })
})

// 分頁
const currentPage = ref(1)
const itemsPerPage = 20
const totalPages = computed(() => Math.ceil(sortedProducts.value.length / itemsPerPage))
const products = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return sortedProducts.value.slice(start, end)
})

// 設置頁面標題
useHead({
  title: '最新上架 - 音響網站'
})
</script>

