<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
    <div class="p-4">
      <!-- 品牌名称 -->
      <div class="text-sm font-semibold text-black mb-2">{{ product.brand }}</div>
      
      <!-- 产品标题和描述 -->
      <div class="text-sm text-gray-800 mb-2 leading-tight">
        {{ product.name }}
      </div>
      
      <!-- 折扣横幅 -->
      <div v-if="product.discount" class="mb-3">
        <span class="bg-red-600 text-white text-xs px-3 py-1 rounded-md inline-block">
          {{ product.discount }}
        </span>
      </div>
      
      <!-- 产品图片 -->
      <div class="w-full mb-4">
        <img 
          :src="product.image || '/placeholder.png'" 
          :alt="product.name"
          class="w-full h-auto object-contain"
          loading="lazy"
        />
      </div>
      
      <!-- 价格信息 -->
      <div class="mt-4">
        <div v-if="product.originalPrice" class="text-sm text-gray-500 line-through mb-1">
          NT${{ product.originalPrice }}
        </div>
        <div class="text-lg font-bold text-red-600">
          NT${{ product.price }}
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
  description?: string
  price: number
  originalPrice?: number
  discount?: string
  image?: string
}

defineProps<{
  product: Product
}>()
</script>

