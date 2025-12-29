<template>
  <div>
    <!-- Category List and Banner Section -->
    <section class="bg-gray-100 border-t border-gray-300">
      <div class="container mx-auto px-4 pb-3">
        <div class="flex gap-4 items-stretch">
          <!-- 分类列表 -->
          <CategoryList />
          <!-- Banner 区域 -->
          <div class="p-4 flex-1 flex h-[400px]">
            <Banner />
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section>
      <div class="container mx-auto px-4 py-8">
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
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">热门产品</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="product in featuredProducts"
            :key="product.id"
            class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <div class="h-48 bg-gray-200 flex items-center justify-center">
              <span class="text-gray-400">产品图片</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">{{ product.name }}</h3>
              <p class="text-gray-600 mb-4">{{ product.description }}</p>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-blue-600">¥{{ product.price }}</span>
                <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  查看详情
                </button>
              </div>
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
  name: string
  description: string
  price: number
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: '专业音响系统 A1',
    description: '高保真音质，适合家庭和商业使用',
    price: 2999
  },
  {
    id: 2,
    name: '蓝牙音响 B2',
    description: '便携式设计，无线连接，音质清晰',
    price: 899
  },
  {
    id: 3,
    name: '家庭影院套装 C3',
    description: '完整的家庭影院解决方案',
    price: 5999
  }
]

useHead({
  title: '首页 - 音响网站'
})
</script>


