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
          <li class="text-gray-900 font-medium">聯絡我們</li>
        </ol>
      </nav>

      <!-- 標題 -->
      <h1 class="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8">
        聯絡我們
      </h1>

      <!-- 內容區域 -->
      <div class="space-y-8 md:space-y-12">
        <!-- 聯絡表單 -->
        <section>
          <div class="max-w-2xl mx-auto">
            <div class="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
              <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span class="text-red-600">|</span>
                <span>線上留言</span>
              </h2>
              <form class="space-y-4 md:space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                    姓名 <span class="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition"
                    placeholder="請輸入您的姓名"
                  />
                </div>

                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                    Email <span class="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition"
                    placeholder="請輸入您的Email"
                  />
                </div>

                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                    電話
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition"
                    placeholder="請輸入您的電話（選填）"
                  />
                </div>

                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                    主旨 <span class="text-red-600">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition"
                  >
                    <option value="">請選擇主旨</option>
                    <option value="product">商品詢問</option>
                    <option value="repair">維修服務</option>
                    <option value="purchase">收購服務</option>
                    <option value="order">訂單問題</option>
                    <option value="other">其他</option>
                  </select>
                </div>

                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                    留言內容 <span class="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition resize-none"
                    placeholder="請輸入您的留言內容"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  送出留言
                </button>
              </form>
            </div>
          </div>
        </section>

        <!-- 公司資訊 -->
        <section class="bg-red-50 rounded-lg p-6 md:p-8">
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span class="text-red-600">|</span>
            <span>公司資訊</span>
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <h3 class="font-semibold text-gray-900 mb-2">公司名稱</h3>
              <p class="text-gray-700">斗士文創有限公司</p>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 mb-2">銀行資訊</h3>
              <p class="text-gray-700">玉山銀行（808）</p>
              <p class="text-gray-700">帳號：1300940043752</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '聯絡我們 - 音響網站'
})
</script>

