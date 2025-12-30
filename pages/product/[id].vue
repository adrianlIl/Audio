<template>
  <div class="bg-white min-h-screen">
    <!-- Category List and Product Content Section -->
    <section class="bg-white border-t border-gray-300">
      <div class="container mx-auto px-4 py-6">
        <div class="flex gap-4 items-start">
          <!-- 左侧：分类列表 -->
          <CategoryList />
          
          <!-- 右侧：商品内容 -->
          <div class="flex-1 bg-white rounded-lg p-6">
            <!-- 面包屑导航 -->
            <nav class="mb-6 text-sm">
              <ol class="flex items-center gap-2 text-gray-600">
                <li>
                  <NuxtLink to="/" class="hover:text-red-600 transition-colors">首頁</NuxtLink>
                </li>
                <li class="text-gray-400">/</li>
                <li>
                  <NuxtLink to="/products" class="hover:text-red-600 transition-colors">全部商品</NuxtLink>
                </li>
                <li class="text-gray-400">/</li>
                <li>
                  <NuxtLink to="/products?category=recording" class="hover:text-red-600 transition-colors">錄音</NuxtLink>
                </li>
                <li class="text-gray-400">/</li>
                <li class="text-gray-900 font-medium">{{ product.brand }}</li>
              </ol>
            </nav>

            <!-- 商品主要信息区域 -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <!-- 左侧：商品图片 -->
              <div>
                <!-- 主图 -->
                <div class="bg-white rounded-lg p-8 flex items-center justify-center min-h-[500px]">
                  <img
                    :src="product.image || '/placeholder.png'"
                    :alt="product.name"
                    class="max-w-full max-h-[500px] object-contain"
                  />
                </div>
              </div>

              <!-- 右侧：商品信息 -->
              <div class="space-y-6">
                <!-- 活动标签 -->
                <div v-if="product.discount" class="flex justify-start">
                  <span class="bg-red-600 text-white text-sm px-4 py-1 rounded-md inline-block">
                    {{ product.discount }}
                  </span>
                </div>
                
                <!-- 商品标题 -->
                <h1 class="text-2xl font-bold text-gray-900 leading-tight">
                  {{ product.name }}
                </h1>

                <!-- 商品编号和价格信息 -->
                <div class="space-y-2">
                  <!-- 商品编号 -->
                  <div class="text-gray-600">
                    <span class="font-medium">編號:</span>
                    <span class="ml-2">{{ product.code || `MX400(限量黑)` }}</span>
                  </div>
                  
                  <!-- 原价和折扣说明 -->
                  <div class="space-y-4">
                    <div v-if="product.originalPrice" class="text-gray-500 line-through text-lg">
                      定價: NT${{ product.originalPrice }}
                    </div>
                    <div v-if="product.discount" class="text-sm text-gray-600">
                      直殺直購價↘結帳享97折優惠(折扣於結帳頁顯示)
                    </div>
                  </div>
                </div>
                <!-- 预购信息 -->
                <div v-if="product.isPreOrder" class="bg-gray-700 rounded-lg p-4">
                  <p class="text-sm text-white">
                    預購商品預計15-35天出貨,預計出貨日:{{ product.estimatedShippingDate || '2026/2月' }}
                  </p>
                </div>

                <!-- 价格 -->
                <div class="text-4xl font-medium text-red-600">
                  <span class="text-2xl">NT$</span>{{ product.price }}
                </div>

                <!-- 购买按钮 -->
                <div class="flex gap-4">
                  <button
                    @click="handleBuyNow"
                    class="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    馬上購買
                  </button>
                  <button
                    @click="handleAddToCart"
                    class="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 商品介绍和其他内容 -->
    <div class="container mx-auto px-4 py-6">
      <div class="flex gap-4 items-start">
        <!-- 左侧：分类列表占位（保持布局一致） -->
        <div class="w-[300px]"></div>
        
        <!-- 右侧：商品介绍等内容 -->
        <div class="flex-1">
      <!-- 商品介绍 -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">
          <span class="text-red-600">|</span> 商品介紹
        </h2>
        <div class="space-y-6">
          <!-- 第一段文字 -->
          <div class="prose max-w-none">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              {{ product.name }}
            </h3>
            <p class="text-gray-700 leading-relaxed whitespace-pre-line">
              {{ product.introText1 || '高品質的元件和極其牢固的結構,確保使用壽命長\n德國百靈達(耳朵牌)設計 台灣限量黑色MX400\n超小型4軌混音器' }}
            </p>
          </div>
          
          <!-- 第一张图片 -->
          <div class="bg-white rounded-lg p-8 flex items-center justify-start">
            <img
              :src="product.introImage1 || '/v1.jpg'"
              :alt="product.name"
              class="max-w-full max-h-[600px] object-contain"
            />
          </div>

          <!-- 第二段文字 -->
          <div class="prose max-w-none">
            <p class="text-gray-700 leading-relaxed whitespace-pre-line">
              {{ product.introText2 || 'MX400儘管其體積超迷你,但仍是強大的4軌混音器!\n它產生於所有的產出水平最高的音質,擁有超低噪音出色的聲音性能。' }}
            </p>
          </div>

          <!-- 第二张图片 -->
          <div class="bg-white rounded-lg p-8 flex items-center justify-start">
            <img
              :src="product.introImage2 || '/v2.png'"
              :alt="`${product.name} - 側面`"
              class="max-w-full max-h-[600px] object-contain"
            />
          </div>
        </div>
      </section>

      <!-- 商品规格 -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">
          <span class="text-red-600">|</span> 商品規格
        </h2>
        <div class="space-y-3">
          <div
            v-for="(spec, index) in product.specifications"
            :key="index"
            class="flex items-start gap-3"
          >
            <span class="text-red-600 font-bold">•</span>
            <span class="text-gray-700">{{ spec }}</span>
          </div>
        </div>
      </section>

      <!-- 相关产品 -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-200">
          相關產品
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard
            v-for="relatedProduct in relatedProducts"
            :key="relatedProduct.id"
            :product="relatedProduct"
          />
        </div>
      </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Product {
  id: number
  brand: string
  name: string
  code?: string
  description?: string
  introText1?: string
  introText2?: string
  price: number
  originalPrice?: number
  discount?: string
  image?: string
  introImage1?: string
  introImage2?: string
  backImage?: string
  isPreOrder?: boolean
  estimatedShippingDate?: string
  specifications?: string[]
  images?: string[]
}

const route = useRoute()
const router = useRouter()

// 获取商品ID
const productId = computed(() => route.params.id as string)

// 默认商品描述
const defaultDescription = `Behringer MICROMIX MX400 是一款超小型4軌混音器，採用高品質元件製造，結構堅固耐用。這款由德國Behringer設計的台灣限量黑色MX400，雖然體積小巧，但功能強大，能夠提供高品質音質，並具有超低噪音特性。`

// 模拟商品数据（实际应该从API获取）
const product = computed<Product>(() => {
  // 这里可以根据productId从API获取数据
  // 目前使用模拟数据
  return {
    id: Number(productId.value) || 1,
    brand: 'Behringer',
    name: 'Behringer 耳朵牌 迷你混音器(限量黑) MICROMIX MX400 四軌/4軌混音器 單聲道輸出',
    code: 'MX400(限量黑)',
    description: defaultDescription,
    price: 2000,
    originalPrice: 2600,
    discount: '活動下殺97折',
    image: '/behringer.jpg',
    backImage: '/behringer.jpg',
    isPreOrder: true,
    estimatedShippingDate: '2026/2月',
    specifications: [
      'Ultra-compact 4-channel line mixer 超小型混音器',
      'Highest sonic quality even at maximum output level 最高音質,即使大輸出時',
      'Input Level control for each channel 輸入可控制每個Channel',
      'Ultra low-noise 4580 operational amplifiers 超低噪音4580',
      'DC 12 volt adapter included 使用12V直流電'
    ],
    images: ['/behringer.jpg', '/behringer.jpg', '/behringer.jpg', '/behringer.jpg']
  }
})

// 相关产品（模拟数据）
const relatedProducts: Product[] = [
  {
    id: 2,
    brand: 'Behringer',
    name: 'Behringer 耳朵牌 迷你混音器 (限量) MICROMIX MX400',
    price: 2000,
    originalPrice: 2600,
    discount: '活動下殺97折',
    image: '/behringer.jpg'
  },
  {
    id: 3,
    brand: 'Behringer',
    name: 'Behringer 耳朵牌 迷你混音器 (限量) MICROMIX MX400',
    price: 2000,
    originalPrice: 2600,
    discount: '活動下殺97折',
    image: '/behringer.jpg'
  },
  {
    id: 4,
    brand: 'Behringer',
    name: 'Behringer 耳朵牌 迷你混音器 (限量) MICROMIX MX400',
    price: 2000,
    originalPrice: 2600,
    discount: '活動下殺97折',
    image: '/behringer.jpg'
  },
  {
    id: 5,
    brand: 'Behringer',
    name: 'Behringer 耳朵牌 迷你混音器 (限量) MICROMIX MX400',
    price: 2000,
    originalPrice: 2600,
    discount: '活動下殺97折',
    image: '/behringer.jpg'
  }
]

// 处理立即购买
const handleBuyNow = () => {
  // TODO: 实现购买逻辑
  console.log('立即购买:', product.value.id)
  // router.push('/checkout')
}

// 处理加入购物车
const handleAddToCart = () => {
  // TODO: 实现购物车逻辑
  console.log('加入购物车:', product.value.id)
  // 可以显示一个提示消息
}

// SEO设置
useHead({
  title: `${product.value.name} - 音響網站`,
  meta: [
    {
      name: 'description',
      content: product.value.description || product.value.name
    }
  ]
})
</script>

