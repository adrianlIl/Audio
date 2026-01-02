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

      <!-- 消息列表 - 手風琴式 -->
      <div class="space-y-4 md:space-y-6">
        <article
          v-for="news in newsList"
          :key="news.id"
          class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300"
        >
          <!-- 可點擊的標題區域 -->
          <div
            @click="toggleNews(news.id)"
            class="p-5 md:p-6 cursor-pointer hover:bg-gray-50 transition-colors"
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
              <div class="flex-1 flex items-start justify-between gap-4">
                <div class="flex-1">
                  <div class="flex items-start justify-between gap-4 mb-3">
                    <h2 class="text-lg md:text-xl font-bold text-gray-900 hover:text-red-600 transition-colors">
                      {{ news.title }}
                    </h2>
                    <span
                      v-if="news.category"
                      class="flex-shrink-0 bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {{ news.category }}
                    </span>
                  </div>
                  
                  <div class="flex items-center gap-4 text-sm text-gray-500 mb-3">
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

                  <!-- 摘要（未展開時顯示） -->
                  <p v-if="!expandedNews.includes(news.id)" class="text-gray-600 leading-relaxed line-clamp-2">
                    {{ news.summary }}
                  </p>
                </div>

                <!-- 展開/收合圖標 -->
                <div class="flex-shrink-0">
                  <svg
                    class="w-6 h-6 text-gray-400 transition-transform duration-300"
                    :class="{ 'rotate-180': expandedNews.includes(news.id) }"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- 展開的內容區域 -->
          <Transition
            enter-active-class="news-expand-enter-active"
            enter-from-class="news-expand-enter-from"
            enter-to-class="news-expand-enter-to"
            leave-active-class="news-expand-leave-active"
            leave-from-class="news-expand-leave-from"
            leave-to-class="news-expand-leave-to"
          >
            <div
              v-if="expandedNews.includes(news.id)"
              class="news-content-expanded"
            >
              <div class="px-5 md:px-6 pb-5 md:pb-6 border-t border-gray-100">
                <div class="pt-5 md:pt-6">
                  <!-- 詳細內容 -->
                  <div class="prose prose-sm max-w-none text-gray-700 leading-relaxed">
                    <div v-html="getNewsContent(news)"></div>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
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
    content: `
      <p>我們很榮幸宣布推出2024年度全新系列專業音響設備，包括高品質PA系統、錄音介面、監聽設備等，為音樂愛好者帶來更優質的選擇。經過長達一年的研發與測試，我們終於可以將這些創新產品呈現給大家。</p>
      
      <p class="mt-4"><strong>本次發表會重點產品：</strong></p>
      <ul class="list-disc list-inside mt-2 space-y-2">
        <li><strong>全新PA系統系列</strong> - 採用最新D類放大技術，提供更強大的音效輸出，功率提升30%，同時降低功耗與發熱量。適合中小型演出場地使用。</li>
        <li><strong>專業錄音介面</strong> - 支援最高192kHz/32bit高解析度錄音，配備多組XLR/TRS輸入，內建高品質前級放大器，為專業錄音室提供無可挑剔的音質。</li>
        <li><strong>監聽設備系列</strong> - 全新設計的監聽喇叭與耳機，採用最新單體技術，精準還原聲音細節，頻率響應範圍更廣，為音樂製作提供最真實的參考。</li>
        <li><strong>無線音響系統</strong> - 支援藍牙5.3與Wi-Fi 6E雙模連接，延遲低至10ms，音質無損傳輸，讓您擺脫線材束縛，享受自由移動的音樂體驗。</li>
        <li><strong>數位混音器</strong> - 觸控式操作介面，支援多軌錄音與即時效果處理，內建多種專業效果器，適合現場演出與錄音室使用。</li>
      </ul>
      
      <p class="mt-4"><strong>發表會資訊：</strong></p>
      <p>日期：2024年12月20日（五）<br>
      時間：下午2:00 - 6:00<br>
      地點：本公司展示中心（地址：台北市信義區信義路五段7號）<br>
      活動內容：產品展示、現場試聽、技術講座、優惠活動</p>
      
      <p class="mt-4">所有新品將於發表會當天正式開賣，現場購買還可享有特別優惠價格，前50名購買者更可獲得精美贈品。歡迎音樂愛好者、專業音樂人及音響發燒友前來參觀體驗，與我們的技術團隊面對面交流。</p>
      
      <p class="mt-4">報名方式：請來電預約或透過官方網站報名，名額有限，請盡早報名以免向隅。</p>
    `,
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
    content: `
      <p>即日起至12月31日，全館商品參與冬季特惠活動，部分商品最高可享8折優惠。活動期間購買指定商品還可獲得精美贈品，數量有限，敬請把握！這是年度最後一次大型優惠活動，錯過就要等到明年了。</p>
      
      <p class="mt-4"><strong>活動詳情：</strong></p>
      <ul class="list-disc list-inside mt-2 space-y-2">
        <li><strong>活動時間</strong>：即日起至2024年12月31日晚上11:59止</li>
        <li><strong>優惠幅度</strong>：全館商品8折起，部分熱門商品享75折優惠</li>
        <li><strong>指定商品優惠</strong>：購買指定型號可獲得精美贈品（價值最高$2,000）</li>
        <li><strong>滿額贈禮</strong>：單筆消費滿$10,000送專業音響線材組，滿$20,000送監聽耳機</li>
        <li><strong>數量限制</strong>：贈品數量有限，送完為止，先買先得</li>
        <li><strong>分期優惠</strong>：活動期間購買指定商品可享12期0利率分期</li>
      </ul>
      
      <p class="mt-4"><strong>熱門商品推薦：</strong></p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>專業錄音介面 - 原價$15,000，特價$12,000（8折）</li>
        <li>監聽喇叭套組 - 原價$25,000，特價$18,750（75折）</li>
        <li>無線音響系統 - 原價$8,000，特價$6,400（8折）</li>
        <li>數位混音器 - 原價$30,000，特價$24,000（8折）</li>
      </ul>
      
      <p class="mt-4"><strong>注意事項：</strong></p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>本次活動不與其他優惠活動併用</li>
        <li>優惠商品數量有限，售完為止</li>
        <li>贈品以現場實物為準</li>
        <li>詳細優惠內容請洽門市或線上客服</li>
      </ul>
      
      <p class="mt-4">把握機會，為您的音響設備升級！無論是專業音樂人、音響發燒友，還是剛入門的新手，都能在這次活動中找到適合的產品。歡迎來電或親臨門市洽詢。</p>
    `,
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
    content: `
      <p>為提供更便利的服務，我們新增到府檢測服務。專業技術人員將親自到府為您的音響設備進行檢測，讓您無需出門即可享受專業維修服務。這項服務特別適合大型音響系統、固定安裝設備，或是行動不便的客戶。</p>
      
      <p class="mt-4"><strong>服務內容：</strong></p>
      <ul class="list-disc list-inside mt-2 space-y-2">
        <li><strong>專業技術人員到府檢測</strong> - 由資深技術人員親自到府，使用專業檢測儀器進行全面檢查</li>
        <li><strong>設備故障診斷與報價</strong> - 詳細診斷設備問題，提供透明化的維修報價，絕不亂收費</li>
        <li><strong>現場簡易維修服務</strong> - 可現場處理的簡易故障，當場完成維修，無需等待</li>
        <li><strong>維修建議與保養指導</strong> - 提供專業的維修建議，並指導正確的設備保養方法</li>
        <li><strong>系統優化建議</strong> - 針對您的音響系統配置，提供優化建議，提升整體音質表現</li>
      </ul>
      
      <p class="mt-4"><strong>服務範圍與時間：</strong></p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>服務範圍：大台北地區（台北市、新北市）</li>
        <li>服務時間：週一至週六 上午9:00 - 下午6:00</li>
        <li>其他地區：請來電洽詢，我們可安排特殊服務</li>
        <li>預約方式：需提前3天預約，歡迎來電預約時間</li>
      </ul>
      
      <p class="mt-4"><strong>服務費用：</strong></p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>到府檢測費：$500（檢測後進行維修可折抵）</li>
        <li>維修費用：依實際維修項目報價，透明化收費</li>
        <li>零件費用：依實際更換零件計費，使用原廠或同等級零件</li>
      </ul>
      
      <p class="mt-4"><strong>適用設備：</strong></p>
      <p>適用於各品牌音響設備、PA系統、錄音設備、監聽設備、擴大機、混音器等。無論是家用音響還是專業設備，我們都能提供專業的檢測與維修服務。</p>
      
      <p class="mt-4">歡迎來電預約，我們的專業團隊將為您提供最優質的服務體驗。</p>
    `,
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
    content: `
      <p>我們將於本月底舉辦專業音響知識講座，邀請業界專家分享音響設備選購、使用與保養知識。講座完全免費，歡迎有興趣的朋友報名參加。這是一個難得的學習機會，無論您是音響新手還是資深玩家，都能從中獲益。</p>
      
      <p class="mt-4"><strong>講座主題與內容：</strong></p>
      <ul class="list-disc list-inside mt-2 space-y-2">
        <li><strong>如何選擇適合的音響設備</strong> - 從預算、空間、用途等面向，教您如何選擇最適合的音響系統。包含不同品牌特色分析、性價比評估、新手入門建議等。</li>
        <li><strong>音響系統配置與優化</strong> - 深入講解音響系統的配置原則，包括訊源、擴大機、喇叭的搭配技巧，以及空間聲學處理的基本概念。</li>
        <li><strong>設備日常保養與維護</strong> - 實用的保養技巧，延長設備使用壽命。包含清潔方法、存放注意事項、定期檢查要點等實務經驗分享。</li>
        <li><strong>常見問題排除與解決</strong> - 針對常見的音響問題，提供診斷與解決方法。現場示範故障排除流程，讓您成為自己的音響技師。</li>
        <li><strong>最新技術趨勢分享</strong> - 介紹音響產業的最新技術發展，包括無線技術、數位處理、智慧音響等趨勢。</li>
      </ul>
      
      <p class="mt-4"><strong>講師介紹：</strong></p>
      <p>本次講座邀請到業界資深專家，擁有超過20年的音響從業經驗，曾參與多項大型音響工程，並獲得國際音響工程師認證。講師將以深入淺出的方式，分享實務經驗與專業知識。</p>
      
      <p class="mt-4"><strong>講座資訊：</strong></p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>日期：2024年11月30日（六）</li>
        <li>時間：下午2:00-4:00（含Q&A時間）</li>
        <li>地點：本公司展示中心（台北市信義區信義路五段7號）</li>
        <li>費用：完全免費</li>
        <li>名額：限30人，額滿為止</li>
        <li>報名方式：請來電或透過官方網站報名</li>
      </ul>
      
      <p class="mt-4"><strong>活動特色：</strong></p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>現場提供精美茶點</li>
        <li>講座後可免費參觀展示中心</li>
        <li>參加者享有當日購物特別優惠</li>
        <li>可獲得講義資料與保養手冊</li>
      </ul>
      
      <p class="mt-4">名額有限，請盡早報名以免向隅。這是一個難得的學習與交流機會，歡迎所有對音響有興趣的朋友參加！</p>
    `,
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
    content: `
      <p>我們提供專業的音響設備收購服務，無論是新舊設備、品牌音響、專業器材，我們都能為您提供合理的收購價格。讓您的閒置設備變現，歡迎來電諮詢。我們擁有豐富的收購經驗，價格公道透明，流程簡單快速。</p>
      
      <p class="mt-4"><strong>收購項目：</strong></p>
      <ul class="list-disc list-inside mt-2 space-y-2">
        <li><strong>各品牌音響設備</strong> - 包含家用音響、書架型喇叭、落地型喇叭、主動式喇叭等</li>
        <li><strong>專業錄音設備</strong> - 錄音介面、麥克風、前級放大器、AD/DA轉換器等</li>
        <li><strong>PA系統與擴大機</strong> - 功率擴大機、綜合擴大機、PA喇叭、線陣列系統等</li>
        <li><strong>監聽設備與耳機</strong> - 監聽喇叭、監聽耳機、參考級耳機等</li>
        <li><strong>混音器與效果器</strong> - 類比/數位混音器、效果器、處理器等</li>
        <li><strong>其他專業器材</strong> - 音響線材、電源處理器、聲學處理設備等</li>
      </ul>
      
      <p class="mt-4"><strong>收購優勢：</strong></p>
      <ul class="list-disc list-inside mt-2 space-y-2">
        <li><strong>專業估價</strong> - 由資深技術人員親自檢測評估，價格公道合理，絕不低價收購</li>
        <li><strong>快速流程</strong> - 檢測完成後立即報價，雙方同意後當場完成交易，流程簡單快速</li>
        <li><strong>現金交易</strong> - 提供現金或轉帳付款，交易安全有保障</li>
        <li><strong>不限品牌</strong> - 無論是國際知名品牌還是台灣品牌，我們都願意收購</li>
        <li><strong>新舊皆收</strong> - 新設備、二手設備、甚至故障設備，我們都能提供合理報價</li>
      </ul>
      
      <p class="mt-4"><strong>收購流程：</strong></p>
      <ol class="list-decimal list-inside mt-2 space-y-1">
        <li>來電或親臨門市諮詢，說明欲出售的設備</li>
        <li>攜帶設備至門市，或我們可安排到府檢測（大型設備）</li>
        <li>專業技術人員檢測設備狀況，評估功能與外觀</li>
        <li>提供透明化的收購報價，說明估價依據</li>
        <li>雙方同意後，當場完成交易，立即付款</li>
      </ol>
      
      <p class="mt-4"><strong>估價考量因素：</strong></p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>設備品牌與型號</li>
        <li>使用年限與外觀狀況</li>
        <li>功能是否正常</li>
        <li>配件是否齊全</li>
        <li>市場行情與需求度</li>
      </ul>
      
      <p class="mt-4">讓您的閒置設備找到新主人，同時獲得合理回饋。無論是升級設備、搬家出清，或是設備故障需要處理，我們都能為您提供專業的收購服務。歡迎來電或親臨門市洽詢，我們將為您提供最優惠的收購價格。</p>
    `,
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
    content: `
      <p>我們很高興宣布新服務據點正式開幕，提供更便利的服務體驗。新據點位於交通便利的地點，歡迎舊雨新知蒞臨參觀。開幕期間還有特別優惠活動。這是我們擴大服務版圖的重要里程碑，希望能為更多客戶提供優質的音響服務。</p>
      
      <p class="mt-4"><strong>新據點資訊：</strong></p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>地址：台北市信義區信義路五段7號1樓</li>
        <li>營業時間：週一至週六 10:00-21:00，週日 11:00-20:00</li>
        <li>電話：02-2345-6789</li>
        <li>交通：捷運信義線信義安和站步行5分鐘，備有停車位</li>
      </ul>
      
      <p class="mt-4"><strong>新據點特色：</strong></p>
      <ul class="list-disc list-inside mt-2 space-y-2">
        <li><strong>寬敞舒適的展示空間</strong> - 佔地200坪，展示超過500款音響產品，讓您有充足的空間比較與選擇</li>
        <li><strong>專業的試聽環境</strong> - 設有多間專業試聽室，採用聲學處理設計，提供最真實的試聽體驗</li>
        <li><strong>完善的服務設施</strong> - 包含維修服務區、諮詢區、休息區等，提供一站式的服務體驗</li>
        <li><strong>交通便利，停車方便</strong> - 位於信義區精華地段，捷運、公車皆可到達，備有專屬停車位</li>
        <li><strong>專業技術團隊</strong> - 駐店技術人員隨時提供專業諮詢與技術支援</li>
        <li><strong>數位化展示</strong> - 採用最新數位展示技術，可即時查詢產品資訊與庫存狀況</li>
      </ul>
      
      <p class="mt-4"><strong>開幕活動：</strong></p>
      <ul class="list-disc list-inside mt-2 space-y-2">
        <li><strong>開幕期間</strong>：2024年11月15日至11月30日</li>
        <li><strong>特別優惠</strong>：全館商品9折優惠，指定商品享85折</li>
        <li><strong>開幕禮品</strong>：前100名來店顧客可獲得精美開幕紀念品</li>
        <li><strong>滿額贈禮</strong>：單筆消費滿$15,000送專業音響線材組，滿$30,000送監聽耳機</li>
        <li><strong>免費檢測</strong>：開幕期間提供免費音響設備檢測服務（限前50名）</li>
        <li><strong>技術講座</strong>：每週六下午舉辦免費音響知識講座</li>
      </ul>
      
      <p class="mt-4"><strong>服務項目：</strong></p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>音響設備銷售與諮詢</li>
        <li>專業試聽服務</li>
        <li>設備維修與保養</li>
        <li>系統規劃與安裝</li>
        <li>設備收購服務</li>
        <li>技術支援與教學</li>
      </ul>
      
      <p class="mt-4">歡迎舊雨新知蒞臨參觀，體驗我們的專業服務。新據點將為您帶來更便利、更專業的音響購物與服務體驗。開幕當天（11月15日）將舉辦開幕剪綵儀式，歡迎共襄盛舉！</p>
    `,
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
    content: `
      <p>為提供更優質的服務，我們擴編專業技術團隊，新增多位資深技術人員。無論是產品諮詢、維修服務或技術支援，我們都能為您提供更專業的協助。這次擴編將大幅提升我們的服務能力與品質，為客戶帶來更好的服務體驗。</p>
      
      <p class="mt-4"><strong>團隊擴編內容：</strong></p>
      <ul class="list-disc list-inside mt-2 space-y-2">
        <li>新增5位資深技術工程師，專精不同領域的音響技術</li>
        <li>新增3位產品顧問，提供專業的產品選購建議</li>
        <li>新增2位維修技師，提升維修服務效率</li>
        <li>成立技術支援專線，提供即時技術諮詢服務</li>
        <li>建立技術知識庫，提供線上技術文件與教學資源</li>
      </ul>
      
      <p class="mt-4"><strong>團隊優勢：</strong></p>
      <ul class="list-disc list-inside mt-2 space-y-2">
        <li><strong>資深技術人員</strong> - 平均從業經驗超過10年，最資深者擁有25年經驗，累積豐富的實務經驗</li>
        <li><strong>專業認證</strong> - 團隊成員持有國際音響工程師認證、電器技術士證照等專業資格，持續進修最新技術</li>
        <li><strong>快速響應</strong> - 提供即時技術支援，一般問題24小時內回覆，緊急問題4小時內處理</li>
        <li><strong>全方位服務</strong> - 從產品諮詢、系統規劃、安裝施工、維修保養到技術教學，提供一條龍服務</li>
        <li><strong>專業分工</strong> - 不同領域有專精人員負責，確保每個環節都有專業把關</li>
        <li><strong>持續進修</strong> - 定期參加國內外技術研討會與訓練課程，掌握最新技術趨勢</li>
      </ul>
      
      <p class="mt-4"><strong>服務能力提升：</strong></p>
      <ul class="list-disc list-inside mt-2 space-y-2">
        <li><strong>諮詢服務</strong> - 提供更詳細的產品比較與選購建議，協助客戶找到最適合的產品</li>
        <li><strong>維修服務</strong> - 維修效率提升50%，大部分故障可在3-5個工作天內完成</li>
        <li><strong>技術支援</strong> - 提供遠端技術支援服務，協助客戶解決使用問題</li>
        <li><strong>系統規劃</strong> - 提供專業的音響系統規劃服務，包含空間聲學分析與設備配置建議</li>
        <li><strong>教育訓練</strong> - 定期舉辦技術講座與工作坊，分享音響知識與使用技巧</li>
      </ul>
      
      <p class="mt-4"><strong>服務時間：</strong></p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>門市服務：週一至週六 10:00-21:00，週日 11:00-20:00</li>
        <li>技術支援專線：週一至週五 9:00-18:00</li>
        <li>緊急維修服務：24小時待命，提供緊急故障處理</li>
      </ul>
      
      <p class="mt-4">無論您有任何音響相關問題，我們的專業團隊都能為您提供最專業的建議與服務。從產品選購、系統配置、故障排除到技術教學，我們都有專業人員為您服務。歡迎來電或親臨門市諮詢，體驗我們升級後的專業服務。</p>
    `,
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
    content: `
      <p>正確的保養可以大幅延長音響設備的使用壽命，並維持最佳的音質表現。我們整理了音響設備保養的實用技巧，包括清潔方法、存放注意事項、定期檢查要點等，幫助您更好地維護設備。這些保養方法簡單易行，只要定期執行，就能讓您的音響設備保持最佳狀態。</p>
      
      <p class="mt-4"><strong>日常保養要點：</strong></p>
      <ul class="list-disc list-inside mt-2 space-y-2">
        <li><strong>定期清潔設備表面</strong> - 每週使用柔軟的乾布或微濕布擦拭設備表面，避免灰塵堆積。注意不要使用化學清潔劑，以免損壞設備表面。</li>
        <li><strong>保持設備通風良好</strong> - 確保設備周圍有足夠的散熱空間，避免過熱。建議設備上方至少保留10公分空間，兩側保留5公分空間。</li>
        <li><strong>避免陽光直射</strong> - 將設備放置在避免陽光直射的位置，防止外殼老化、變色，以及內部元件受損。</li>
        <li><strong>定期檢查線材連接</strong> - 每月檢查一次線材連接是否牢固，接觸是否良好。鬆動的連接會影響音質，甚至造成設備損壞。</li>
        <li><strong>清潔接頭</strong> - 每3-6個月使用接頭清潔劑清潔音響接頭，確保良好的訊號傳輸。</li>
        <li><strong>檢查電源</strong> - 定期檢查電源線是否有破損，電源插座是否正常，避免電源問題造成設備故障。</li>
      </ul>
      
      <p class="mt-4"><strong>存放注意事項：</strong></p>
      <ul class="list-disc list-inside mt-2 space-y-2">
        <li><strong>乾燥通風的環境</strong> - 存放在相對濕度40-60%的環境中，避免過於潮濕或過於乾燥。可使用除濕機或加濕器維持適當濕度。</li>
        <li><strong>避免潮濕與高溫</strong> - 絕對不要將設備存放在浴室、廚房等潮濕環境，或陽光直射、靠近暖氣的地方。理想溫度為15-25°C。</li>
        <li><strong>使用防塵罩保護</strong> - 不使用時使用防塵罩或布蓋住設備，防止灰塵進入。選擇透氣性好的材質，避免塑膠袋等不透氣材質。</li>
        <li><strong>定期開機使用</strong> - 即使不常使用，也建議每週至少開機1-2小時，讓設備保持運作狀態，避免長期閒置造成電容老化等問題。</li>
        <li><strong>正確的搬運方式</strong> - 搬運設備時要輕拿輕放，避免劇烈震動。大型設備建議兩人搬運，並使用原廠包裝材料。</li>
      </ul>
      
      <p class="mt-4"><strong>不同設備的特殊保養：</strong></p>
      <ul class="list-disc list-inside mt-2 space-y-2">
        <li><strong>喇叭</strong> - 定期檢查單體是否有破損，清潔喇叭網罩。避免將喇叭放置在角落或緊貼牆壁，影響音質表現。</li>
        <li><strong>擴大機</strong> - 注意散熱，避免長時間高功率輸出。定期檢查風扇運作是否正常，清潔散熱孔。</li>
        <li><strong>錄音設備</strong> - 保持接頭清潔，定期檢查麥克風防震架是否穩固。錄音介面要注意USB/Thunderbolt接頭的清潔。</li>
        <li><strong>混音器</strong> - 定期清潔推桿與旋鈕，使用接點清潔劑清潔接點，避免接觸不良。</li>
      </ul>
      
      <p class="mt-4"><strong>定期檢查項目：</strong></p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>每月：檢查線材連接、清潔設備表面</li>
        <li>每季：清潔接頭、檢查電源線、測試所有功能</li>
        <li>每半年：深度清潔、檢查內部灰塵、專業檢測</li>
        <li>每年：送至專業維修中心進行全面檢測與保養</li>
      </ul>
      
      <p class="mt-4"><strong>常見問題與解決方法：</strong></p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>設備有雜音 → 檢查線材連接，清潔接頭</li>
        <li>聲音變小 → 檢查音量設定，清潔音量控制元件</li>
        <li>設備過熱 → 檢查散熱空間，清潔散熱孔</li>
        <li>無法開機 → 檢查電源線與插座，檢查保險絲</li>
      </ul>
      
      <p class="mt-4">遵循這些保養要點，可以讓您的音響設備保持最佳狀態，延長使用壽命，並維持優異的音質表現。如有任何問題或需要專業保養服務，歡迎諮詢我們的專業技術團隊。我們提供專業的設備檢測與保養服務，讓您的音響設備永保如新。</p>
    `,
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

// 追蹤展開的新聞項目
const expandedNews = ref<number[]>([])

// 切換新聞展開/收合
const toggleNews = (newsId: number) => {
  const index = expandedNews.value.indexOf(newsId)
  if (index > -1) {
    expandedNews.value.splice(index, 1)
  } else {
    expandedNews.value.push(newsId)
  }
}

// 獲取新聞完整內容
const getNewsContent = (news: News) => {
  return news.content || news.summary
}

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
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-content-expanded {
  overflow: visible;
}

.news-expand-enter-active {
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  overflow: visible;
}

.news-expand-leave-active {
  transition: opacity 0.3s ease-in, transform 0.3s ease-in;
  overflow: hidden;
}

.news-expand-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.news-expand-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.news-expand-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.news-expand-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.prose {
  color: #374151 !important;
}

.prose ul {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  color: #374151 !important;
}

.prose li {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  color: #374151 !important;
}

.prose p {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: #374151 !important;
}

.prose p:first-child {
  margin-top: 0;
}

.prose strong {
  font-weight: 600;
  color: #1f2937 !important;
}

.prose ol {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  color: #374151 !important;
}

.prose div {
  color: #374151 !important;
}

.prose br {
  display: block;
  content: "";
  margin-top: 0.5rem;
}
</style>

