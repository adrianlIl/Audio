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
          <li class="text-gray-900 font-medium">服務條款</li>
        </ol>
      </nav>

      <!-- 標題 -->
      <h1 class="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8">
        服務條款
      </h1>

      <!-- 內容區域 -->
      <div class="space-y-6 md:space-y-8">
        <!-- 最後更新日期 -->
        <div class="bg-gray-50 rounded-lg p-4 md:p-6">
          <p class="text-sm md:text-base text-gray-600">
            <span class="font-semibold">最後更新日期：</span>2024年12月
          </p>
        </div>

        <!-- 條款內容 -->
        <section>
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
            <span class="text-red-600">|</span>
            <span>一、服務條款的接受</span>
          </h2>
          <div class="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              歡迎使用本網站提供的服務。當您使用本網站時，即表示您已閱讀、瞭解並同意接受本服務條款的所有內容。如果您不同意本服務條款的任何內容，或者您所屬的國家或地區排除本服務條款內容的適用，請立即停止使用本網站。
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
            <span class="text-red-600">|</span>
            <span>二、服務說明</span>
          </h2>
          <div class="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>本網站提供音響設備銷售、維修、收購等相關服務。我們保留隨時修改或中斷服務而不需知會用戶的權利。本網站不保證服務不會中斷，亦不保證服務的及時性、安全性、準確性。</p>
          </div>
        </section>

        <section>
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
            <span class="text-red-600">|</span>
            <span>三、用戶義務</span>
          </h2>
          <div class="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>用戶在使用本網站服務時，應遵守以下規定：</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>提供正確、最新及完整的個人資料。</li>
              <li>維持並更新個人資料，確保其正確、最新及完整。</li>
              <li>不得利用本網站從事任何非法行為或侵害他人權益之行為。</li>
              <li>不得干擾或破壞本網站服務或相關伺服器及網路連線。</li>
              <li>遵守所有與本網站服務相關之法律、法規、命令及規定。</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
            <span class="text-red-600">|</span>
            <span>四、商品資訊與價格</span>
          </h2>
          <div class="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>本網站致力於提供正確的商品資訊，但我們不保證網站上所有資訊的完整性、準確性或即時性。商品價格、規格、圖片等資訊如有變更，恕不另行通知。</p>
            <p>本網站保留隨時修改商品價格的權利，實際價格以訂購時網站顯示的價格為準。</p>
          </div>
        </section>

        <section>
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
            <span class="text-red-600">|</span>
            <span>五、訂購與付款</span>
          </h2>
          <div class="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>當您完成訂購程序後，即表示您已向本網站提出購買商品的要約，本網站將於確認收到您的訂單後，以電子郵件或電話方式通知您訂單已成立。</p>
            <p>付款方式以網站上顯示的付款方式為準。本網站保留決定是否接受訂單的權利。</p>
          </div>
        </section>

        <section>
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
            <span class="text-red-600">|</span>
            <span>六、退換貨政策</span>
          </h2>
          <div class="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>根據消費者保護法規定，您享有商品到貨後七天猶豫期的權益。但猶豫期並非試用期，請注意以下事項：</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>退回的商品必須是全新狀態且完整包裝（包含商品本體、配件、贈品、保證書、原廠包裝及所有附隨文件）。</li>
              <li>商品必須未經使用，且無非人為因素造成的損壞。</li>
              <li>若商品因消費者不當使用而產生損壞，本網站有權拒絕退換貨。</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
            <span class="text-red-600">|</span>
            <span>七、智慧財產權</span>
          </h2>
          <div class="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>本網站所使用之軟體或程式、網站上所有內容，包括但不限於著作、圖片、檔案、資訊、資料、網站架構、網站畫面的安排、網頁設計，均由本網站或其他權利人依法擁有其智慧財產權，包括但不限於商標權、專利權、著作權、營業秘密與專有技術等。</p>
            <p>任何人未經本網站或權利人事先書面同意，不得重製、公開傳輸、公開播送、公開上映、改作、編輯、散布、發行、公開發表、進行還原工程、解編或反向組譯。</p>
          </div>
        </section>

        <section>
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
            <span class="text-red-600">|</span>
            <span>八、免責聲明</span>
          </h2>
          <div class="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>本網站對於使用者因使用本網站服務而產生之任何直接、間接、衍生或附隨損失，不負任何賠償責任。</p>
            <p>本網站不保證服務的及時性、安全性、準確性，亦不保證服務不會中斷。</p>
          </div>
        </section>

        <section>
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
            <span class="text-red-600">|</span>
            <span>九、服務條款的修改</span>
          </h2>
          <div class="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>本網站有權隨時修改本服務條款，修改後的服務條款將公佈於本網站上，不另外個別通知。如果您不同意修改的內容，請停止使用本網站服務。如果您繼續使用本網站服務，則視為您已接受修改後的服務條款。</p>
          </div>
        </section>

        <section>
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
            <span class="text-red-600">|</span>
            <span>十、聯絡方式</span>
          </h2>
          <div class="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>如果您對本服務條款有任何疑問，歡迎與我們聯絡。</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '服務條款 - 音響網站'
})
</script>

