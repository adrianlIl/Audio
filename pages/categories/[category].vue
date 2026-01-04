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
                <li>
                  <NuxtLink to="/products" class="hover:text-red-600 transition-colors">全部商品</NuxtLink>
                </li>
                <li class="text-gray-400">/</li>
                <li class="text-gray-900 font-medium">{{ categoryName }}</li>
              </ol>
            </nav>

            <!-- 分類標題 -->
            <h1 class="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8">{{ categoryName }}</h1>

            <!-- 專業維修服務介紹頁 -->
            <div v-if="category.startsWith('repair')" class="space-y-8 md:space-y-12">
              <!-- 各類音響線材、導線製作 -->
              <section v-if="category === 'repair-cable'" class="bg-gray-50 rounded-lg p-6 md:p-8">
                <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">各類音響線材、導線製作</h2>
                <p class="text-lg md:text-xl text-red-600 font-semibold mb-4">售價：300~15000（實際金額另報價）</p>
                <p class="text-gray-700 mb-4">專業製作各類音響線材、導線，依需求客製化製作。</p>
                <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
                  <div class="bg-white rounded-lg overflow-hidden shadow-md aspect-square">
                    <img src="/speakers/1.jpg" alt="音響線材範例 1" class="w-full h-full object-cover" />
                  </div>
                  <div class="bg-white rounded-lg overflow-hidden shadow-md aspect-square">
                    <img src="/speakers/6.jpg" alt="音響線材範例 6" class="w-full h-full object-cover" />
                  </div>
                </div>
              </section>

              <!-- 各類BASS音箱、音箱頭專業維修 -->
              <section v-if="category === 'repair-bass'" class="bg-gray-50 rounded-lg p-6 md:p-8">
                <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">各類BASS音箱、音箱頭專業維修</h2>
                <p class="text-lg md:text-xl text-red-600 font-semibold mb-4">售價：1500-5000（檢測後依實際情況報價後維修，檢測酌收500元檢測費）</p>
                <p class="text-gray-700 mb-4">(以下為各類型號維修範例，Fender、Musicman、VOX、Ampeg、Roland)</p>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  <div v-for="i in [2, 3, 4, 5]" :key="i" class="bg-white rounded-lg overflow-hidden shadow-md aspect-square">
                    <img :src="`/speakers/${i}.jpg`" :alt="`BASS音箱維修範例 ${i}`" class="w-full h-full object-cover" />
                  </div>
                </div>
              </section>

              <!-- 各類吉他音箱、音箱頭專業維修 -->
              <section v-if="category === 'repair-guitar'" class="bg-gray-50 rounded-lg p-6 md:p-8">
                <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">各類吉他音箱、音箱頭專業維修</h2>
                <p class="text-lg md:text-xl text-red-600 font-semibold mb-4">售價：1500-5000（檢測後依實際情況報價後維修，檢測酌收500元檢測費）</p>
                <p class="text-gray-700 mb-4">(以下為各類型號維修範例，Black Star、Marshall、Nux、Fender)</p>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                  <div v-for="i in 6" :key="i" class="bg-white rounded-lg overflow-hidden shadow-md aspect-square">
                    <img :src="(i + 6) === 9 ? '/speakers/9.png' : (i + 6) === 10 ? '/speakers/10.png' : `/speakers/${i + 6}.jpg`" :alt="`吉他音箱維修範例 ${i + 6}`" class="w-full h-full object-cover" />
                  </div>
                </div>
              </section>

              <!-- 各類真空管故障維修、保養、改裝 -->
              <section v-if="category === 'repair-tube'" class="bg-gray-50 rounded-lg p-6 md:p-8">
                <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">各類真空管故障維修、保養、改裝</h2>
                <p class="text-lg md:text-xl text-red-600 font-semibold mb-4">售價：3000-8000（檢測後依實際情況報價後維修，檢測酌收500元檢測費）</p>
                <p class="text-gray-700 mb-4">(以下為各類型號維修範例，AIKESI AUDIO SG-50、211、PATHOS TWIN TOWER、SPARK MT-12、UDION SILVER NIGH+、YAQIN MC-10K)</p>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                  <div v-for="i in 6" :key="i" class="bg-white rounded-lg overflow-hidden shadow-md aspect-square">
                    <img :src="`/speakers/${i + 12}.jpg`" :alt="`真空管維修範例 ${i + 12}`" class="w-full h-full object-cover" />
                  </div>
                </div>
              </section>

              <!-- 各類數位、類比混音控台維修 -->
              <section v-if="category === 'repair-mixer'" class="bg-gray-50 rounded-lg p-6 md:p-8">
                <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">各類數位、類比混音控台維修</h2>
                <p class="text-lg md:text-xl text-red-600 font-semibold mb-4">售價：5000-20000（檢測後依實際情況報價後維修，檢測酌收1500元檢測費）</p>
                <p class="text-gray-700 mb-4">(以下為各類型號維修範例，Behringer WING 48、behringer X32、菲尼泰X12 Mixer、貼牌mixer)</p>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  <div v-for="i in 5" :key="i" class="bg-white rounded-lg overflow-hidden shadow-md aspect-square">
                    <img :src="`/speakers/${i + 18}.jpg`" :alt="`混音控台維修範例 ${i + 18}`" class="w-full h-full object-cover" />
                  </div>
                </div>
              </section>

              <!-- 各類舞台用燈光維修 -->
              <section v-if="category === 'repair-light'" class="bg-gray-50 rounded-lg p-6 md:p-8">
                <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">各類舞台用燈光維修</h2>
                <p class="text-lg md:text-xl text-red-600 font-semibold mb-4">售價：500-3000（檢測後依實際情況報價後維修，檢測酌收500元檢測費）</p>
                <p class="text-gray-700 mb-4">(以下為各類型號維修範例，beam230、led球燈、par燈、全彩par燈)</p>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  <div v-for="i in 4" :key="i" class="bg-white rounded-lg overflow-hidden shadow-md aspect-square">
                    <img :src="`/speakers/${i + 23}.jpg`" :alt="`燈光維修範例 ${i + 23}`" class="w-full h-full object-cover" />
                  </div>
                </div>
              </section>

              <!-- 各類外場喇叭、監聽維修 -->
              <section v-if="category === 'repair-speaker'" class="bg-gray-50 rounded-lg p-6 md:p-8">
                <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">各類外場喇叭、監聽維修</h2>
                <p class="text-lg md:text-xl text-red-600 font-semibold mb-4">售價：3000-8000（檢測後依實際情況報價後維修，檢測酌收1500元檢測費）</p>
                <p class="text-gray-700 mb-4">(以下為各類型號維修範例，dB Technologies B-Hype 8 主動式監聽喇叭、db technologies DVX系列、Yamaha DBR 12 主動式喇叭、Yamaha DBR 12 主動式喇叭、Next X15吋喇叭)</p>
                <div class="grid grid-cols-2 md:grid-cols-2 gap-6">
                  <div v-for="i in 4" :key="i" class="bg-white rounded-lg overflow-hidden shadow-md aspect-square">
                    <img :src="(i + 27) === 31 ? '/speakers/31.png' : `/speakers/${i + 27}.jpg`" :alt="`外場喇叭維修範例 ${i + 27}`" class="w-full h-full object-cover" />
                  </div>
                </div>
              </section>

              <!-- 各類動圈、電容麥克風維修 -->
              <section v-if="category === 'repair-mic'" class="bg-gray-50 rounded-lg p-6 md:p-8">
                <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">各類動圈、電容麥克風維修</h2>
                <p class="text-lg md:text-xl text-red-600 font-semibold mb-4">售價：500-3000（檢測後依實際情況報價後維修，檢測酌收500元檢測費）</p>
                <p class="text-gray-700 mb-4">(以下為各類型號維修範例，beta58、sm58、sm57、U87、shure mv7)</p>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  <div v-for="i in 5" :key="i" class="bg-white rounded-lg overflow-hidden shadow-md aspect-square">
                    <img :src="`/speakers/${i + 31}.jpg`" :alt="`麥克風維修範例 ${i + 31}`" class="w-full h-full object-cover" />
                  </div>
                </div>
              </section>

              <!-- 各類二手樂器、燈光音響器材收購 -->
              <section v-if="category === 'repair-buy'" class="bg-gray-50 rounded-lg p-6 md:p-8">
                <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">各類二手樂器、燈光音響器材收購</h2>
                <p class="text-lg md:text-xl text-red-600 font-semibold mb-4">收購價：500-50000（檢測後依實際情況報價收購）</p>
                <p class="text-gray-700">專業收購各類二手樂器、燈光音響器材，歡迎來電洽詢。</p>
              </section>
            </div>

            <!-- 其他分類的商品網格 -->
            <div v-else>
              <div v-if="products.length > 0" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 items-stretch">
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
            </div>

            <!-- 分頁 -->
            <div v-if="!category.startsWith('repair') && products.length > 0" class="mt-12 flex justify-center items-center gap-2">
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
}

const route = useRoute()
const category = computed(() => route.params.category as string)

// 分類名稱映射
const categoryMap: Record<string, string> = {
  'mobile-accessories': '手機配件',
  speakers: '喇叭',
  players: '二手音箱、喇叭',
  'repair-cable': '各類音響線材、導線製作',
  'repair-bass': '各類BASS音箱、音箱頭專業維修',
  'repair-guitar': '各類吉他音箱、音箱頭專業維修',
  'repair-tube': '各類真空管故障維修、保養、改裝',
  'repair-mixer': '各類數位、類比混音控台維修',
  'repair-light': '各類舞台用燈光維修',
  'repair-speaker': '各類外場喇叭、監聽維修',
  'repair-mic': '各類動圈、電容麥克風維修',
  'repair-buy': '各類二手樂器、燈光音響器材收購'
}

const categoryName = computed(() => categoryMap[category.value] || category.value)

// 模擬商品數據（實際應該從 API 或數據庫獲取）
const allProducts: Product[] = [
  // 手機配件 - UAG 手機殼
  {
    id: 1,
    brand: 'UAG',
    name: 'UAG 手機殼 iPhone 17 PRO MAX',
    price: 2490,
    category: 'mobile-accessories',
    image: '/mobile-accessories/uag1.jpg'
  },
  {
    id: 2,
    brand: 'UAG',
    name: 'UAG 手機殼 iPhone 17 PRO',
    price: 2490,
    category: 'mobile-accessories',
    image: '/mobile-accessories/uag1.jpg'
  },
  {
    id: 3,
    brand: 'UAG',
    name: 'UAG 手機殼 iPhone 17 AIR',
    price: 2390,
    category: 'mobile-accessories',
    image: '/mobile-accessories/uag2.png'
  },
  {
    id: 4,
    brand: 'UAG',
    name: 'UAG 手機殼 iPhone 17',
    price: 2390,
    category: 'mobile-accessories',
    image: '/mobile-accessories/uag2.png'
  },
  // 手機配件 - 保護貼
  {
    id: 5,
    brand: '保護貼',
    name: '3D滿版保護貼',
    price: 999,
    category: 'mobile-accessories',
    image: '/mobile-accessories/uag3.jpg'
  },
  {
    id: 6,
    brand: '保護貼',
    name: '防窺膜',
    price: 750,
    category: 'mobile-accessories',
    image: '/mobile-accessories/uag4.png'
  },
  // 手機配件 - 充電器
  {
    id: 7,
    brand: '充電器',
    name: '氮化鎵 3孔PD快充頭',
    price: 799,
    category: 'mobile-accessories',
    image: '/mobile-accessories/phone1.jpg'
  },
  {
    id: 8,
    brand: '充電器',
    name: 'TYPE C 快充線',
    price: 299,
    category: 'mobile-accessories',
    image: '/mobile-accessories/phone2.jpg'
  },
  // 喇叭
  {
    id: 10,
    brand: 'Marshall',
    name: 'Marshall Emberton III 藍芽喇叭',
    price: 4900,
    category: 'speakers',
    image: '/players/play1.jpg'
  },
  {
    id: 11,
    brand: 'SANSUI山水',
    name: 'SANSUI山水 全指向藍芽無線音響 SF-LL6',
    price: 2990,
    category: 'speakers',
    image: '/players/play2.jpg'
  },
  {
    id: 12,
    brand: 'JBL',
    name: 'JBL Flip 7可攜型防水藍牙喇叭',
    price: 5900,
    category: 'speakers',
    image: '/players/play3.png'
  },
  // 二手音箱、喇叭 - 二手整新音箱
  {
    id: 13,
    brand: 'Crate',
    name: 'Crate 電貝斯音箱',
    price: 14900,
    category: 'players',
    image: '/repair/repair1.jpg'
  },
  {
    id: 14,
    brand: 'Mesa Boogie',
    name: '9成新Mesa Boogie Mark V 真空管電吉他音箱',
    price: 88000,
    category: 'players',
    image: '/repair/repair2.jpg'
  },
  {
    id: 15,
    brand: 'Marshall',
    name: 'Marshall mg30dfx吉他音箱',
    price: 3500,
    category: 'players',
    image: '/repair/repair3.png'
  },
  {
    id: 16,
    brand: 'Peavey',
    name: 'Peavey micro bass II 第二代 20w 貝斯音箱',
    price: 3700,
    category: 'players',
    image: '/repair/repair4.jpg'
  },
  // 二手音箱、喇叭 - 二手整新喇叭
  {
    id: 17,
    brand: 'ATC',
    name: '英國ATC SCM20 書架式喇叭',
    price: 49800,
    category: 'players',
    image: '/repair/repair5.jpg'
  },
  {
    id: 18,
    brand: 'ROGERS',
    name: '英國ROGERS LS3 5A+AB1落地式喇叭',
    price: 65800,
    category: 'players',
    image: '/repair/repair6.jpg'
  },
  {
    id: 19,
    brand: 'KEF',
    name: '英國製KEF Reference 205_2 落地式喇叭',
    price: 88000,
    category: 'players',
    image: '/repair/repair7.jpg'
  },
  {
    id: 20,
    brand: 'JBL',
    name: 'JBL EON612 12吋二路外場喇叭(單一顆)',
    price: 16000,
    category: 'players',
    image: '/repair/repair8.jpg'
  },
  {
    id: 21,
    brand: 'YAMAHA',
    name: 'YAMAHA CBR10 被動式外場喇叭（單顆）',
    price: 6500,
    category: 'players',
    image: '/repair/repair9.jpg'
  },
  {
    id: 22,
    brand: 'ES',
    name: 'ES-1002 DB 主動式音柱喇叭',
    price: 40000,
    category: 'players',
    image: '/repair/repair10.jpg'
  },
  // 二手音箱、喇叭 - 二手整新擴大機
  {
    id: 23,
    brand: 'SONY',
    name: '日本製 SONY SCD-1 高階SACD播放機',
    price: 85000,
    category: 'players',
    image: '/repair/repair11.jpg'
  },
  {
    id: 24,
    brand: 'DEVIALET',
    name: '法國製DEVIALET 400 MONO超級萬能綜合擴大機',
    price: 130000,
    category: 'players',
    image: '/repair/repair12.jpg'
  },
  // 舊商品數據（保留作為示例）
  {
    id: 9,
    brand: 'Behringer',
    name: 'Behringer 耳朵牌 迷你混音器 (限量黑) MICROMIX MX400 四軌/4軌 混音器 單聲道輸出',
    price: 2000,
    originalPrice: 2600,
    discount: '活動下殺97折',
    image: '/behringer.jpg'
  },
]

// 根據分類過濾商品
const filteredProducts = computed(() => {
  if (!category.value) {
    return allProducts
  }
  return allProducts.filter(product => product.category === category.value)
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

