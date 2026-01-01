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
          <li class="text-gray-900 font-medium">音響維修</li>
        </ol>
      </nav>

      <!-- 標題 -->
      <h1 class="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8">
        音響維修服務
      </h1>

      <!-- 服務介紹區塊 -->
      <div class="space-y-8 md:space-y-12 mb-8 md:mb-12">
        <!-- 服務概述 -->
        <section class="bg-gray-50 rounded-lg p-6 md:p-8">
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
            <span class="text-red-600">|</span>
            <span>專業維修服務</span>
          </h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            我們擁有專業的技術團隊，提供各類音響設備的維修服務。無論是專業PA系統、錄音設備、樂器音箱，還是家用音響設備，我們都能為您提供專業、可靠的維修服務。
          </p>
          <p class="text-gray-700 leading-relaxed">
            所有維修服務均提供保固，讓您安心使用。我們使用原廠零件或同等品質的替代零件，確保維修品質。
          </p>
        </section>

        <!-- 服務項目 -->
        <section>
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 flex items-center gap-2">
            <span class="text-red-600">|</span>
            <span>維修項目</span>
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div
              v-for="service in services"
              :key="service.id"
              class="bg-white border border-gray-200 rounded-lg p-5 md:p-6 hover:shadow-lg transition-shadow"
            >
              <div class="flex items-start gap-3">
                <div class="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span class="text-red-600 text-xl">{{ service.icon }}</span>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ service.title }}</h3>
                  <p class="text-gray-600 text-sm md:text-base leading-relaxed">{{ service.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 服務流程 -->
        <section>
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 flex items-center gap-2">
            <span class="text-red-600">|</span>
            <span>服務流程</span>
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

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Service {
  id: number
  icon: string
  title: string
  description: string
}

interface ProcessStep {
  title: string
  description: string
}

const services: Service[] = [
  {
    id: 1,
    icon: '🎵',
    title: 'PA音響系統維修',
    description: '專業PA系統、擴大機、喇叭、混音器等設備的檢測與維修服務。'
  },
  {
    id: 2,
    icon: '🎤',
    title: '錄音設備維修',
    description: '錄音介面、麥克風、監聽喇叭等錄音設備的專業維修服務。'
  },
  {
    id: 3,
    icon: '🎸',
    title: '樂器音箱維修',
    description: '吉他音箱、貝斯音箱、鍵盤音箱等樂器專用音箱的維修服務。'
  },
  {
    id: 4,
    icon: '🔊',
    title: '家用音響維修',
    description: '家用音響系統、藍牙喇叭、音響主機等設備的維修服務。'
  },
  {
    id: 5,
    icon: '⚡',
    title: '電路板維修',
    description: '各類音響設備的電路板檢測、零件更換與修復服務。'
  },
  {
    id: 6,
    icon: '🔌',
    title: '電源系統維修',
    description: '電源供應器、變壓器、電源線路等電源相關問題的維修服務。'
  }
]

const processSteps: ProcessStep[] = [
  {
    title: '預約檢測',
    description: '透過電話或線上預約，將設備送至我們服務據點，或安排到府檢測服務。'
  },
  {
    title: '專業診斷',
    description: '由專業技術人員進行詳細檢測，診斷問題並提供維修方案與報價。'
  },
  {
    title: '確認維修',
    description: '確認維修方案與報價後，開始進行維修作業，使用原廠或同等品質零件。'
  },
  {
    title: '測試驗收',
    description: '維修完成後進行完整測試，確保設備正常運作，並提供維修保固。'
  },
  {
    title: '取件服務',
    description: '通知客戶取件，或提供到府送件服務，確保設備安全送達。'
  }
]

useHead({
  title: '音響維修服務 - 音響網站'
})
</script>

