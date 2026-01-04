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
  { id: 1, name: '手機配件', path: '/categories/mobile-accessories' },
  { id: 2, name: '喇叭', path: '/categories/speakers' },
  { id: 3, name: '二手音箱、喇叭', path: '/categories/players' },
  { id: 4, name: '各類音響線材、導線製作', path: '/categories/repair-cable' },
  { id: 5, name: '各類BASS音箱、音箱頭專業維修', path: '/categories/repair-bass' },
  { id: 6, name: '各類吉他音箱、音箱頭專業維修', path: '/categories/repair-guitar' },
  { id: 7, name: '各類真空管故障維修、保養、改裝', path: '/categories/repair-tube' },
  { id: 8, name: '各類數位、類比混音控台維修', path: '/categories/repair-mixer' },
  { id: 9, name: '各類舞台用燈光維修', path: '/categories/repair-light' },
  { id: 10, name: '各類外場喇叭、監聽維修', path: '/categories/repair-speaker' },
  { id: 11, name: '各類動圈、電容麥克風維修', path: '/categories/repair-mic' },
  { id: 12, name: '各類二手樂器、燈光音響器材收購', path: '/categories/repair-buy' }
]

// 檢查當前路由是否匹配分類路徑
const isActive = (path: string) => {
  return route.path === path
}
</script>

