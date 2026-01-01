<template>
  <div class="bg-white">
    <div class="w-full bg-white rounded-lg p-4 md:p-6">
      <!-- 麵包屑導航 -->
      <nav class="mb-4 md:mb-6 text-xs md:text-sm">
        <ol class="flex items-center gap-1 md:gap-2 text-gray-600 flex-wrap">
          <li>
            <NuxtLink to="/" class="hover:text-red-600 transition-colors">首頁</NuxtLink>
          </li>
          <li class="text-gray-400">/</li>
          <li class="text-gray-900 font-medium">最新消息</li>
        </ol>
      </nav>

      <!-- 標題 -->
      <h1 class="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8">
        最新消息
      </h1>

      <!-- 消息列表 -->
      <div class="space-y-6 md:space-y-8">
        <article
          v-for="news in newsList"
          :key="news.id"
          class="bg-white border border-gray-200 rounded-lg p-5 md:p-6 hover:shadow-lg transition-shadow"
        >
          <div class="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
            <!-- 日期標籤 -->
            <div class="flex-shrink-0">
              <div class="bg-red-600 text-white rounded-lg px-4 py-2 text-center min-w-[80px]">
                <div class="text-xs font-medium">{{ news.date.month }}</div>
                <div class="text-xl font-bold">{{ news.date.day }}</div>
                <div class="text-xs font-medium">{{ news.date.year }}</div>
              </div>
            </div>

            <!-- 內容區域 -->
            <div class="flex-1">
              <div class="flex items-start justify-between gap-4 mb-3">
                <h2 class="text-lg md:text-xl font-bold text-gray-900 hover:text-red-600 transition-colors cursor-pointer">
                  {{ news.title }}
                </h2>
                <span
                  v-if="news.category"
                  class="flex-shrink-0 bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full font-medium"
                >
                  {{ news.category }}
                </span>
              </div>
              
              <p class="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                {{ news.summary }}
              </p>

              <div class="flex items-center justify-between">
                <div class="flex items-center gap-4 text-sm text-gray-500">
                  <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {{ news.date.full }}
                  </span>
                  <span v-if="news.author" class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {{ news.author }}
                  </span>
                </div>
                <NuxtLink
                  :to="`/news/${news.id}`"
                  class="text-red-600 hover:text-red-700 font-medium text-sm flex items-center gap-1 transition-colors"
                >
                  閱讀更多
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- 分頁 -->
      <div v-if="totalPages > 1" class="mt-12 flex justify-center items-center gap-2">
        <button
          v-if="currentPage > 1"
          @click="currentPage = currentPage - 1"
          class="px-3 py-2 rounded transition-colors bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
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
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
          ]"
        >
          {{ String(page).padStart(2, '0') }}
        </button>
        <button
          v-if="currentPage < totalPages"
          @click="currentPage = currentPage + 1"
          class="px-3 py-2 rounded transition-colors bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- 無消息提示 -->
      <div v-if="newsList.length === 0" class="text-center py-16">
        <p class="text-gray-500 text-lg">暫無最新消息</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface News {
  id: number
  title: string
  summary: string
  content?: string
  date: {
    full: string
    year: string
    month: string
    day: string
  }
  category?: string
  author?: string
  image?: string
}

// 模擬新聞數據（實際應該從 API 獲取）
const allNews: News[] = [
  {
    id: 1,
    title: '2024年度新品發表會 - 專業音響設備全新登場',
    summary: '我們很榮幸宣布推出2024年度全新系列專業音響設備，包括高品質PA系統、錄音介面、監聽設備等，為音樂愛好者帶來更優質的選擇。',
    date: {
      full: '2024-12-15',
      year: '2024',
      month: '12月',
      day: '15'
    },
    category: '新品發表',
    author: '管理員'
  },
  {
    id: 2,
    title: '冬季特惠活動開跑 - 全館商品最高享8折優惠',
    summary: '即日起至12月31日，全館商品參與冬季特惠活動，部分商品最高可享8折優惠。活動期間購買指定商品還可獲得精美贈品，數量有限，敬請把握！',
    date: {
      full: '2024-12-10',
      year: '2024',
      month: '12月',
      day: '10'
    },
    category: '優惠活動',
    author: '管理員'
  },
  {
    id: 3,
    title: '音響維修服務升級 - 新增到府檢測服務',
    summary: '為提供更便利的服務，我們新增到府檢測服務。專業技術人員將親自到府為您的音響設備進行檢測，讓您無需出門即可享受專業維修服務。',
    date: {
      full: '2024-12-05',
      year: '2024',
      month: '12月',
      day: '05'
    },
    category: '服務公告',
    author: '管理員'
  },
  {
    id: 4,
    title: '專業音響知識講座 - 免費報名中',
    summary: '我們將於本月底舉辦專業音響知識講座，邀請業界專家分享音響設備選購、使用與保養知識。講座完全免費，歡迎有興趣的朋友報名參加。',
    date: {
      full: '2024-11-28',
      year: '2024',
      month: '11月',
      day: '28'
    },
    category: '活動資訊',
    author: '管理員'
  },
  {
    id: 5,
    title: '音響收購服務 - 高價收購各類音響設備',
    summary: '我們提供專業的音響設備收購服務，無論是新舊設備、品牌音響、專業器材，我們都能為您提供合理的收購價格。讓您的閒置設備變現，歡迎來電諮詢。',
    date: {
      full: '2024-11-20',
      year: '2024',
      month: '11月',
      day: '20'
    },
    category: '服務公告',
    author: '管理員'
  },
  {
    id: 6,
    title: '新店開幕 - 擴大服務據點',
    summary: '我們很高興宣布新服務據點正式開幕，提供更便利的服務體驗。新據點位於交通便利的地點，歡迎舊雨新知蒞臨參觀。開幕期間還有特別優惠活動。',
    date: {
      full: '2024-11-15',
      year: '2024',
      month: '11月',
      day: '15'
    },
    category: '公司動態',
    author: '管理員'
  },
  {
    id: 7,
    title: '專業技術團隊擴編 - 提升服務品質',
    summary: '為提供更優質的服務，我們擴編專業技術團隊，新增多位資深技術人員。無論是產品諮詢、維修服務或技術支援，我們都能為您提供更專業的協助。',
    date: {
      full: '2024-11-10',
      year: '2024',
      month: '11月',
      day: '10'
    },
    category: '公司動態',
    author: '管理員'
  },
  {
    id: 8,
    title: '音響設備保養小知識 - 延長設備使用壽命',
    summary: '正確的保養可以大幅延長音響設備的使用壽命。我們整理了音響設備保養的實用技巧，包括清潔方法、存放注意事項、定期檢查要點等，幫助您更好地維護設備。',
    date: {
      full: '2024-11-05',
      year: '2024',
      month: '11月',
      day: '05'
    },
    category: '知識分享',
    author: '技術團隊'
  }
]

// 按日期排序（最新的在前）
const sortedNews = computed(() => {
  return [...allNews].sort((a, b) => {
    return new Date(b.date.full).getTime() - new Date(a.date.full).getTime()
  })
})

// 分頁
const currentPage = ref(1)
const itemsPerPage = 10
const totalPages = computed(() => Math.ceil(sortedNews.value.length / itemsPerPage))
const newsList = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return sortedNews.value.slice(start, end)
})

useHead({
  title: '最新消息 - 音響網站'
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

