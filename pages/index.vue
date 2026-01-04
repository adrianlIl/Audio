<template>
  <div>
    <!-- Category List and Banner Section -->
    <section class="bg-white border-t border-gray-300">
      <div class="container mx-auto px-4 pb-3">
        <!-- 手機版：分類列表在上方 -->
        <div class="md:hidden">
          <div class="pt-2 pb-3">
            <CategoryList />
          </div>
        </div>
        
        <div class="flex flex-col md:flex-row gap-4 items-stretch">
          <!-- 桌面版：分類列表在左側 -->
          <div class="hidden md:block md:w-auto">
            <CategoryList />
          </div>
          <!-- Banner 区域 -->
          <div class="pt-2 md:p-4 md:mt-0 flex-1 flex h-[250px] md:h-[460px]">
            <Banner />
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section>
      <div class="container mx-auto pl-4 pr-7 py-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="rounded-lg overflow-hidden transition">
            <img :src="'/speakers.png'" alt="音箱" class="w-full h-auto object-contain block" loading="lazy" />
          </div>
          <div class="rounded-lg overflow-hidden transition">
            <img :src="'/repair.png'" alt="音響維修" class="w-full h-auto object-contain block" loading="lazy" />
          </div>
          <div class="rounded-lg overflow-hidden transition">
            <img :src="'/support.png'" alt="聯絡客服" class="w-full h-auto object-contain block" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- Products Preview -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-black mb-12 flex items-center gap-2">
          <span class="text-orange-500">🔥</span>
          <span class="font-bold text-black text-xl">熱門商品</span>
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 items-stretch">
          <ProductCard
            v-for="product in featuredProducts"
            :key="product.id"
            :product="product"
          />
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
  category?: string
}

// 從分類頁面獲取所有商品數據（與 categories/[category].vue 保持一致）
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
  }
]

// 過濾掉專業維修分類的商品
const featuredProducts = computed(() => {
  return allProducts.filter(product => product.category !== 'repair')
})

useHead({
  title: '首頁 - 音響網站'
})
</script>


