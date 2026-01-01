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
          <li class="text-gray-900 font-medium">隱私權政策</li>
        </ol>
      </nav>

      <!-- 標題 -->
      <h1 class="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8">
        隱私權政策
      </h1>

      <!-- 內容區域 -->
      <div class="space-y-6 md:space-y-8">
        <!-- 最後更新日期 -->
        <div class="bg-gray-50 rounded-lg p-4 md:p-6">
          <p class="text-sm md:text-base text-gray-600">
            <span class="font-semibold">最後更新日期：</span>2024年12月
          </p>
        </div>

        <!-- 政策內容 -->
        <section>
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
            <span class="text-red-600">|</span>
            <span>一、隱私權保護政策的適用範圍</span>
          </h2>
          <div class="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
            <span class="text-red-600">|</span>
            <span>二、個人資料的蒐集、處理及利用方式</span>
          </h2>
          <div class="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。</p>
            <p>本網站在您使用服務信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。</p>
            <p>於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備的IP位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公布。</p>
          </div>
        </section>

        <section>
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
            <span class="text-red-600">|</span>
            <span>三、資料之保護</span>
          </h2>
          <div class="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，加以保護網站及您的個人資料採用嚴格的保護措施，只由經過授權的人員才能接觸您的個人資料，相關處理人員皆簽有保密合約，如有違反保密義務者，將會受到相關的法律處分。</p>
            <p>如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。</p>
          </div>
        </section>

        <section>
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
            <span class="text-red-600">|</span>
            <span>四、網站對外的相關連結</span>
          </h2>
          <div class="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。</p>
          </div>
        </section>

        <section>
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
            <span class="text-red-600">|</span>
            <span>五、與第三人共用個人資料之政策</span>
          </h2>
          <div class="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。</p>
            <p>前項但書之情形包括但不限於：</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>經由您書面同意。</li>
              <li>法律明文規定。</li>
              <li>為免除您生命、身體、自由或財產上之危險。</li>
              <li>與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理或蒐集著依其揭露方式無從識別特定之當事人。</li>
              <li>當您在網站的行為，違反服務條款或可能損害或妨礙網站與其他使用者權益或導致任何人遭受損害時，經網站管理單位研析揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。</li>
              <li>有利於您的權益。</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
            <span class="text-red-600">|</span>
            <span>六、Cookie之使用</span>
          </h2>
          <div class="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的Cookie，若您不願接受Cookie的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕Cookie的寫入，但可能會導致網站某些功能無法正常執行。</p>
          </div>
        </section>

        <section>
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
            <span class="text-red-600">|</span>
            <span>七、隱私權保護政策之修正</span>
          </h2>
          <div class="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。</p>
          </div>
        </section>

        <section>
          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
            <span class="text-red-600">|</span>
            <span>八、聯絡方式</span>
          </h2>
          <div class="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>如果您對本網站的隱私權保護政策有任何疑問，歡迎與我們聯絡。</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '隱私權政策 - 音響網站'
})
</script>

