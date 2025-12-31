<template>
  <nav class="bg-black text-white">
    <!-- 第一行：Logo、搜索栏和汉堡菜单 -->
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center gap-4">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center md:ml-[45px] flex-1 md:flex-none">
          <img src="/logo.png" alt="Asena" class="h-16 md:h-[86px] object-contain" />
        </NuxtLink>

        <!-- 手机版：汉堡菜单按钮 - 放在右边 -->
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg
            v-if="!isMenuOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- 搜索栏 -->
        <div class="hidden md:block md:ml-[100px] md:flex-1">
          <div class="w-full max-w-2xl">
            <div class="flex items-center bg-white rounded-full overflow-hidden">
              <!-- 分类下拉菜单 -->
              <div class="relative">
                <button
                  @click="isCategoryDropdownOpen = !isCategoryDropdownOpen"
                  class="flex items-center gap-1 px-4 py-[0.45rem] text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <span class="text-sm whitespace-nowrap">{{ selectedCategory.label }}</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <!-- 下拉菜单 -->
                <div
                  v-if="isCategoryDropdownOpen"
                  class="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 min-w-[150px]"
                >
                  <NuxtLink
                    v-for="item in navItems"
                    :key="item.id"
                    :to="item.path"
                    @click="selectCategory(item); isCategoryDropdownOpen = false"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    {{ item.label }}
                  </NuxtLink>
                </div>
              </div>
              <input
                type="text"
                placeholder="搜尋商品、類別、型號"
                class="flex-1 px-4 py-[0.45rem] text-gray-800 outline-none bg-white"
              />
              <button class="bg-red-700 hover:bg-red-600 px-6 py-[0.6rem] transition-colors rounded-full">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 手机版：搜索栏（在Logo下方） -->
      <div class="md:hidden mt-4">
        <div class="flex items-center bg-white rounded-full overflow-hidden">
          <!-- 分类下拉菜单 -->
          <div class="relative">
            <button
              @click="isCategoryDropdownOpen = !isCategoryDropdownOpen"
              class="flex items-center gap-1 px-3 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <span class="text-sm whitespace-nowrap">{{ selectedCategory.label }}</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <!-- 下拉菜单 -->
            <div
              v-if="isCategoryDropdownOpen"
              class="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 min-w-[150px]"
            >
              <NuxtLink
                v-for="item in navItems"
                :key="item.id"
                :to="item.path"
                @click="selectCategory(item); isCategoryDropdownOpen = false"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
              >
                {{ item.label }}
              </NuxtLink>
            </div>
          </div>
          <input
            type="text"
            placeholder="搜尋商品、類別、型號"
            class="flex-1 px-4 py-2 text-gray-800 outline-none bg-white text-sm"
          />
          <button class="bg-red-500 hover:bg-red-600 px-4 py-2 transition-colors">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- 手机版：汉堡菜单展开内容 -->
    <div
      v-if="isMenuOpen"
      class="md:hidden bg-black border-t border-gray-800"
    >
      <div class="container mx-auto px-4 py-4">
        <!-- 全站分类 -->
        <div class="bg-red-700 px-4 py-2 mb-4">
          <span class="text-white font-medium">全站分類</span>
        </div>
        <!-- 导航菜单 -->
        <div class="flex flex-col gap-2">
          <NuxtLink
            v-for="item in navItems"
            :key="item.id"
            :to="item.path"
            @click="isMenuOpen = false"
            class="text-white hover:text-red-400 transition-colors flex items-center justify-between py-2 px-4 border-b border-gray-800"
          >
            <span>{{ item.label }}</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- 第二行：桌面版全站分类标题和导航菜单 -->
    <div class="hidden md:block bg-black">
      <div class="container mx-auto px-4">
        <div class="flex items-end gap-6">
          <!-- 全站分类区域（固定宽度） -->
          <div class="w-[300px] flex flex-col justify-end">
            <!-- 全站分类（小标题，不是菜单） -->
            <div class="bg-red-700 px-4 py-2 w-full">
              <span class="text-white font-medium">全站分類</span>
            </div>
          </div>

          <!-- 导航菜单 -->
          <div class="flex items-end gap-10 pb-2 ml-[10px]">
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

// 手机版菜单开关
const isMenuOpen = ref(false)

// 分类下拉菜单
const isCategoryDropdownOpen = ref(false)
const defaultCategory = navItems.find(item => item.id === 3) ?? navItems[0] ?? { id: 0, label: '全部商品', path: '/products' }
const selectedCategory = ref<NavItem>(defaultCategory) // 默认选择"音響維修"或第一个

// 选择分类
const selectCategory = (item: NavItem) => {
  if (item) {
    selectedCategory.value = item
    isCategoryDropdownOpen.value = false
  }
}

// 点击外部关闭下拉菜单
onMounted(() => {
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    if (!target.closest('.relative')) {
      isCategoryDropdownOpen.value = false
    }
  }
  document.addEventListener('click', handleClickOutside)
  
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})
</script>

