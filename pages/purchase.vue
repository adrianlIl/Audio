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
          <li class="text-gray-900 font-medium">音響收購</li>
        </ol>
      </nav>

      <!-- 標題 -->
      <h1 class="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8">
        音響收購服務
      </h1>

      <!-- 服務介紹區塊 -->
      <div class="space-y-8 md:space-y-12 mb-8 md:mb-12">
        <!-- 服務概述 -->
        <section class="bg-gray-50 rounded-lg p-6 md:p-8">
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
            <span class="text-red-600">|</span>
            <span>專業收購服務</span>
          </h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            我們提供專業的音響設備收購服務，無論是新舊設備、品牌音響、專業器材，我們都能為您提供合理的收購價格。讓您的閒置設備變現，同時也讓更多音樂愛好者能夠以優惠價格獲得優質設備。
          </p>
          <p class="text-gray-700 leading-relaxed">
            我們會根據設備的品牌、型號、使用狀況、配件完整性等因素進行專業評估，提供公平透明的收購價格。
          </p>
        </section>

        <!-- 收購項目 -->
        <section>
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 flex items-center gap-2">
            <span class="text-red-600">|</span>
            <span>收購項目</span>
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div
              v-for="item in purchaseItems"
              :key="item.id"
              class="bg-white border border-gray-200 rounded-lg p-5 md:p-6 hover:shadow-lg transition-shadow"
            >
              <div class="flex items-start gap-3">
                <div class="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span class="text-red-600 text-xl">{{ item.icon }}</span>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ item.title }}</h3>
                  <p class="text-gray-600 text-sm md:text-base leading-relaxed">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 收購流程 -->
        <section>
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 flex items-center gap-2">
            <span class="text-red-600">|</span>
            <span>收購流程</span>
          </h2>
          <div class="space-y-4 md:space-y-6">
            <div
              v-for="(step, index) in processSteps"
              :key="index"
              class="flex items-start gap-4 md:gap-6"
            >
              <div class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl">
                {{ index + 1 }}
              </div>
              <div class="flex-1 pt-1">
                <h3 class="text-lg md:text-xl font-semibold text-gray-900 mb-2">{{ step.title }}</h3>
                <p class="text-gray-600 leading-relaxed">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- 價格評估因素 -->
        <section>
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 flex items-center gap-2">
            <span class="text-red-600">|</span>
            <span>價格評估因素</span>
          </h2>
          <div class="bg-gradient-to-r from-red-50 to-gray-50 rounded-lg p-6 md:p-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div
                v-for="factor in priceFactors"
                :key="factor.id"
                class="flex items-start gap-3"
              >
                <svg class="w-5 h-5 md:w-6 md:h-6 text-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">{{ factor.title }}</h3>
                  <p class="text-gray-600 text-sm">{{ factor.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface PurchaseItem {
  id: number
  icon: string
  title: string
  description: string
}

interface ProcessStep {
  title: string
  description: string
}

interface PriceFactor {
  id: number
  title: string
  description: string
}

const purchaseItems: PurchaseItem[] = [
  {
    id: 1,
    icon: '🎵',
    title: 'PA音響系統',
    description: '專業PA系統、擴大機、喇叭、混音器等設備收購。'
  },
  {
    id: 2,
    icon: '🎤',
    title: '錄音設備',
    description: '錄音介面、麥克風、監聽設備等專業錄音器材收購。'
  },
  {
    id: 3,
    icon: '🎸',
    title: '樂器音箱',
    description: '吉他音箱、貝斯音箱、鍵盤音箱等樂器專用設備收購。'
  },
  {
    id: 4,
    icon: '🔊',
    title: '家用音響',
    description: '家用音響系統、藍牙喇叭、音響主機等設備收購。'
  },
  {
    id: 5,
    icon: '🎹',
    title: '鍵盤樂器',
    description: '數位鋼琴、合成器、MIDI鍵盤等鍵盤樂器收購。'
  },
  {
    id: 6,
    icon: '🎧',
    title: '監聽設備',
    description: '監聽耳機、監聽喇叭等專業監聽設備收購。'
  }
]

const processSteps: ProcessStep[] = [
  {
    title: '線上諮詢',
    description: '透過電話、Email或到店諮詢，提供設備資訊（品牌、型號、使用狀況等）。'
  },
  {
    title: '現場評估',
    description: '將設備帶至服務據點，或安排到府評估，由專業人員進行詳細檢測與評估。'
  },
  {
    title: '報價確認',
    description: '根據設備狀況、市場行情等因素，提供公平透明的收購價格，雙方確認後進行交易。'
  },
  {
    title: '完成交易',
    description: '確認價格後，當場完成交易，提供現金或轉帳服務，確保交易安全快速。'
  }
]

const priceFactors: PriceFactor[] = [
  {
    id: 1,
    title: '品牌與型號',
    description: '知名品牌與熱門型號通常有較高的收購價值。'
  },
  {
    id: 2,
    title: '使用狀況',
    description: '外觀完整度、功能正常性、使用年限等影響收購價格。'
  },
  {
    id: 3,
    title: '配件完整性',
    description: '原廠配件、說明書、包裝盒等完整度會影響價格。'
  },
  {
    id: 4,
    title: '市場行情',
    description: '根據當前市場供需狀況與二手行情進行評估。'
  }
]

useHead({
  title: '音響收購服務 - 音響網站'
})
</script>

