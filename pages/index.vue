<template>
  <div>
    <!-- Category List and Banner Section -->
    <section class="bg-white border-t border-gray-300">
      <div class="container mx-auto px-4 pb-3">
        <div class="flex flex-col md:flex-row gap-4 items-stretch">
          <!-- 分类列表 - 手机版隐藏，桌面版显示 -->
          <div class="hidden md:block">
            <CategoryList />
          </div>
          <!-- Banner 区域 -->
          <div class="pt-2 md:p-4 mt-[23px] flex-1 flex h-[250px] md:h-[400px]">
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
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
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
}

const featuredProducts: Product[] = [
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
  }
]

useHead({
  title: '首頁 - 音響網站'
})
</script>


