<template>
  <nav class="bg-black text-white">
    <!-- 第一行：Logo 和搜索栏 -->
    <div class="container mx-auto px-4 py-4">
      <div class="grid grid-cols-3 items-center gap-6">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center ml-[45px]">
          <img src="/logo.png" alt="Asena" class="h-[72px] object-contain" />
        </NuxtLink>

        <!-- 搜索栏 -->
        <div class="flex justify-center">
          <div class="w-full max-w-2xl">
            <div class="flex items-center bg-black rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="搜尋商品、類別、型號"
                class="flex-1 px-4 py-[0.45rem] text-gray-800 outline-none bg-white "
              />
              <button class="bg-red-500 hover:bg-red-600 px-6 py-[0.6rem] transition-colors">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- 空白区域保持平衡 -->
        <div></div>
      </div>
    </div>

    <!-- 第二行：全站分类标题和导航菜单 -->
    <div class="bg-black">
      <div class="container mx-auto px-4 ">
        <div class="flex items-end gap-6">
          <!-- 全站分类区域（固定宽度） -->
          <div class="w-[250px] flex flex-col justify-end">
            <!-- 全站分类（小标题，不是菜单） -->
            <div class="bg-red-700 px-4 py-2  w-full">
              <span class="text-white font-medium">全站分類</span>
            </div>
          </div>

          <!-- 导航菜单 -->
          <div class="flex items-end gap-6 pb-2">
            <NuxtLink
              v-for="item in navItems"
              :key="item.id"
              :to="item.path"
              class="text-white hover:text-red-400 transition-colors flex items-center gap-1 font-light"
            >
              <span>{{ item.label }}</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
interface NavItem {
  id: number
  label: string
  path: string
}

const navItems: NavItem[] = [
  { id: 1, label: '最新上架', path: '/latest' },
  { id: 2, label: '全部商品', path: '/products' },
  { id: 3, label: '音響維修', path: '/repair' },
  { id: 4, label: '音響收購', path: '/purchase' },
  { id: 5, label: '最新消息', path: '/news' }
]
</script>

