<template>
  <div class="w-[300px]">
    <div class="flex flex-col gap-1 py-2 bg-gray-100">
      <NuxtLink
        v-for="category in categories"
        :key="category.id"
        :to="category.path"
        :class="[
          'transition-colors flex items-center gap-2 px-2 py-1 rounded',
          isActive(category.path)
            ? 'text-red-500 bg-red-50 font-semibold'
            : 'text-gray-800 hover:text-red-500 hover:bg-gray-200'
        ]"
      >
        <span>{{ category.name }}</span>
        <svg class="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Category {
  id: number
  name: string
  path: string
}

const route = useRoute()

const categories: Category[] = [
  { id: 1, name: '吉他', path: '/categories/guitar' },
  { id: 2, name: '貝斯', path: '/categories/bass' },
  { id: 3, name: '音箱區', path: '/categories/amplifier' },
  { id: 4, name: '效果器', path: '/categories/effects' },
  { id: 5, name: '鍵盤樂器', path: '/categories/keyboard' },
  { id: 6, name: '耳機', path: '/categories/headphones' },
  { id: 7, name: '麥克風', path: '/categories/microphone' },
  { id: 8, name: '錄音', path: '/categories/recording' },
  { id: 9, name: 'PA音響器材', path: '/categories/pa' },
  { id: 10, name: '打擊樂器', path: '/categories/percussion' },
  { id: 11, name: '配件', path: '/categories/accessories' }
]

// 檢查當前路由是否匹配分類路徑
const isActive = (path: string) => {
  return route.path === path
}
</script>

