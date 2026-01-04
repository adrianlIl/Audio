<template>
  <div class="bg-white">
    <!-- 商品内容 -->
    <div class="bg-white rounded-lg p-4 md:p-6">
            <!-- 面包屑导航和活动标签 - 同一行对齐 -->
            <div class="flex items-center justify-between gap-4 mb-4 md:mb-6 flex-wrap">
              <!-- 面包屑导航 -->
              <nav class="text-xs md:text-sm">
                <ol class="flex items-center gap-1 md:gap-2 text-gray-600 flex-wrap">
                  <li>
                    <NuxtLink to="/" class="hover:text-red-600 transition-colors">首頁</NuxtLink>
                  </li>
                  <li class="text-gray-400">/</li>
                  <li>
                    <NuxtLink to="/products" class="hover:text-red-600 transition-colors">全部商品</NuxtLink>
                  </li>
                  <li class="text-gray-400">/</li>
                  <li v-if="product.category">
                    <NuxtLink :to="`/categories/${product.category}`" class="hover:text-red-600 transition-colors">{{ getCategoryName(product.category) }}</NuxtLink>
                  </li>
                  <li class="text-gray-400">/</li>
                  <li class="text-gray-900 font-medium truncate">{{ product.brand }}</li>
                </ol>
              </nav>
              
              <!-- 活动标签 -->
              <div v-if="product.discount" class="flex justify-start mr-[435px]">
                <span class="bg-red-600 text-white text-sm px-4 py-1 rounded-full inline-block">
                  {{ product.discount }}
                </span>
              </div>
            </div>

            <!-- 商品主要信息区域 -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
              <!-- 左侧：商品图片 -->
              <div>
                <!-- 主图 -->
                <div class="bg-white rounded-lg p-4 md:p-8 flex items-center justify-center min-h-[300px] md:min-h-[500px]">
                  <img
                    :src="product.image || '/placeholder.png'"
                    :alt="product.name"
                    class="max-w-full max-h-[300px] md:max-h-[500px] object-contain"
                  />
                </div>
              </div>

              <!-- 右侧：商品信息 -->
              <div class="space-y-4 md:space-y-6">
                
                <!-- 商品标题 -->
                <h1 class="text-lg md:text-2xl font-bold text-gray-900 leading-tight">
                  {{ product.name }}
                </h1>

                <!-- 商品编号和价格信息 -->
                <div class="space-y-2">
                  <!-- 商品编号 -->
                  <div class="text-gray-600">
                    <span class="font-medium">編號:</span>
                    <span class="ml-2">{{ product.code || `MX400(限量黑)` }}</span>
                  </div>
                  
                  <!-- 原价和折扣说明 -->
                  <div class="space-y-4">
                    <div v-if="product.originalPrice" class="text-gray-500 line-through text-lg">
                      定價: NT${{ product.originalPrice }}
                    </div>
                    <div v-if="product.discount" class="text-sm text-gray-600">
                      直殺直購價↘結帳享97折優惠(折扣於結帳頁顯示)
                    </div>
                  </div>
                </div>
                <!-- 预购信息 -->
                <div v-if="product.isPreOrder">
                  <p class="text-sm text-white bg-[#5B5B5B] rounded-lg px-4 py-2 inline-block">
                    預購商品預計15-35天出貨,預計出貨日:{{ product.estimatedShippingDate || '2026/2月' }}
                  </p>
                </div>

                <!-- 价格 -->
                <div class="text-3xl md:text-4xl font-medium text-red-600">
                  <span class="text-xl md:text-2xl">NT$</span>{{ product.price }}
                </div>

                <!-- 购买按钮 -->
                <div class="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <button
                    @click="handleBuyNow"
                    class="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-full transition-colors"
                  >
                    馬上購買
                  </button>
                  <button
                    @click="handleAddToCart"
                    class="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-full transition-colors"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
    </div>

    <!-- 商品介绍和其他内容 -->
    <div class="py-4 md:py-6">
      <!-- 商品介绍 -->
      <section class="mb-8 md:mb-12">
        <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
          <span class="text-red-600">|</span> 商品介紹
        </h2>
        <div class="space-y-4 md:space-y-6">
          <!-- 第一段文字 -->
          <div class="prose max-w-none">
            <h3 class="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
              {{ product.name }}
            </h3>
            <p class="text-sm md:text-base text-gray-700 leading-relaxed whitespace-pre-line">
              {{ product.introText1 || '高品質的元件和極其牢固的結構,確保使用壽命長\n德國百靈達(耳朵牌)設計 台灣限量黑色MX400\n超小型4軌混音器' }}
            </p>
          </div>
          
          <!-- 第一张图片 -->
          <div class="bg-white rounded-lg p-4 md:p-8 flex items-center justify-start">
            <img
              :src="product.introImage1 || '/v1.jpg'"
              :alt="product.name"
              class="max-w-full max-h-[400px] md:max-h-[600px] object-contain"
            />
          </div>

          <!-- 第二段文字 -->
          <div class="prose max-w-none">
            <p class="text-gray-700 leading-relaxed whitespace-pre-line">
              {{ product.introText2 || 'MX400儘管其體積超迷你,但仍是強大的4軌混音器!\n它產生於所有的產出水平最高的音質,擁有超低噪音出色的聲音性能。' }}
            </p>
          </div>

          <!-- 第二张图片 -->
          <div class="bg-white rounded-lg p-8 flex items-center justify-start">
            <img
              :src="product.introImage2 || '/v2.png'"
              :alt="`${product.name} - 側面`"
              class="max-w-full max-h-[600px] object-contain"
            />
          </div>
        </div>
      </section>

      <!-- 商品规格 -->
      <section class="mb-8 md:mb-12">
        <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
          <span class="text-red-600">|</span> 商品規格
        </h2>
        <div class="space-y-2 md:space-y-3">
          <div
            v-for="(spec, index) in product.specifications"
            :key="index"
            class="flex items-start gap-3"
          >
            <span class="text-red-600 font-bold">•</span>
            <span class="text-gray-700">{{ spec }}</span>
          </div>
        </div>
      </section>

      <!-- 相关产品 -->
      <section class="mb-8 md:mb-12">
        <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 pb-2 border-b-2 border-gray-200">
          相關產品
        </h2>
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <ProductCard
            v-for="relatedProduct in relatedProducts"
            :key="relatedProduct.id"
            :product="relatedProduct"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Product {
  id: number
  brand: string
  name: string
  code?: string
  description?: string
  introText1?: string
  introText2?: string
  price: number
  originalPrice?: number
  discount?: string
  image?: string
  introImage1?: string
  introImage2?: string
  backImage?: string
  isPreOrder?: boolean
  estimatedShippingDate?: string
  specifications?: string[]
  images?: string[]
  category?: string
}

const route = useRoute()
const router = useRouter()

// 获取商品ID
const productId = computed(() => route.params.id as string)

// 商品數據庫
const productsDatabase: Record<number, Product> = {
  // 手機配件 - UAG 手機殼
  1: {
    id: 1,
    brand: 'UAG',
    name: 'UAG 手機殼 iPhone 17 PRO MAX',
    code: 'UAG-IP17PM',
    description: 'UAG 軍規級防護手機殼，專為 iPhone 17 PRO MAX 設計，提供卓越的防護性能和時尚外觀。',
    introText1: 'UAG 手機殼 iPhone 17 PRO MAX\n\n採用軍規級防護標準，通過 MIL-STD-810G 測試\n提供360度全方位保護，有效防止手機摔落損壞\n輕量化設計，不增加手機負擔\n精準開孔，完美貼合 iPhone 17 PRO MAX',
    introText2: 'UAG 手機殼採用獨特的蜂巢式結構設計，在提供強力防護的同時保持輕薄。\n\n• 四角加厚設計，有效吸收衝擊力\n• 背面凸起設計，保護相機鏡頭\n• 防滑紋理，提供更好的握持感\n• 支援無線充電功能',
    price: 2490,
    category: 'mobile-accessories',
    image: '/mobile-accessories/uag1.jpg',
    introImage1: '/mobile-accessories/uag1.jpg',
    introImage2: '/mobile-accessories/uag1.jpg',
    specifications: [
      '適用機型: iPhone 17 PRO MAX',
      '防護等級: 軍規級 MIL-STD-810G',
      '材質: 複合材料 + TPU',
      '重量: 輕量化設計',
      '支援無線充電: 是',
      '顏色: 多色可選'
    ],
    images: ['/mobile-accessories/uag1.jpg']
  },
  2: {
    id: 2,
    brand: 'UAG',
    name: 'UAG 手機殼 iPhone 17 PRO',
    code: 'UAG-IP17P',
    description: 'UAG 軍規級防護手機殼，專為 iPhone 17 PRO 設計，提供卓越的防護性能和時尚外觀。',
    introText1: 'UAG 手機殼 iPhone 17 PRO\n\n採用軍規級防護標準，通過 MIL-STD-810G 測試\n提供360度全方位保護，有效防止手機摔落損壞\n輕量化設計，不增加手機負擔\n精準開孔，完美貼合 iPhone 17 PRO',
    introText2: 'UAG 手機殼採用獨特的蜂巢式結構設計，在提供強力防護的同時保持輕薄。\n\n• 四角加厚設計，有效吸收衝擊力\n• 背面凸起設計，保護相機鏡頭\n• 防滑紋理，提供更好的握持感\n• 支援無線充電功能',
    price: 2490,
    category: 'mobile-accessories',
    image: '/mobile-accessories/uag1.jpg',
    introImage1: '/mobile-accessories/uag1.jpg',
    introImage2: '/mobile-accessories/uag1.jpg',
    specifications: [
      '適用機型: iPhone 17 PRO',
      '防護等級: 軍規級 MIL-STD-810G',
      '材質: 複合材料 + TPU',
      '重量: 輕量化設計',
      '支援無線充電: 是',
      '顏色: 多色可選'
    ],
    images: ['/mobile-accessories/uag1.jpg']
  },
  3: {
    id: 3,
    brand: 'UAG',
    name: 'UAG 手機殼 iPhone 17 AIR',
    code: 'UAG-IP17A',
    description: 'UAG 軍規級防護手機殼，專為 iPhone 17 AIR 設計，提供卓越的防護性能和時尚外觀。',
    introText1: 'UAG 手機殼 iPhone 17 AIR\n\n採用軍規級防護標準，通過 MIL-STD-810G 測試\n提供360度全方位保護，有效防止手機摔落損壞\n輕量化設計，不增加手機負擔\n精準開孔，完美貼合 iPhone 17 AIR',
    introText2: 'UAG 手機殼採用獨特的蜂巢式結構設計，在提供強力防護的同時保持輕薄。\n\n• 四角加厚設計，有效吸收衝擊力\n• 背面凸起設計，保護相機鏡頭\n• 防滑紋理，提供更好的握持感\n• 支援無線充電功能',
    price: 2390,
    category: 'mobile-accessories',
    image: '/mobile-accessories/uag2.png',
    introImage1: '/mobile-accessories/uag2.png',
    introImage2: '/mobile-accessories/uag2.png',
    specifications: [
      '適用機型: iPhone 17 AIR',
      '防護等級: 軍規級 MIL-STD-810G',
      '材質: 複合材料 + TPU',
      '重量: 輕量化設計',
      '支援無線充電: 是',
      '顏色: 多色可選'
    ],
    images: ['/mobile-accessories/uag2.png']
  },
  4: {
    id: 4,
    brand: 'UAG',
    name: 'UAG 手機殼 iPhone 17',
    code: 'UAG-IP17',
    description: 'UAG 軍規級防護手機殼，專為 iPhone 17 設計，提供卓越的防護性能和時尚外觀。',
    introText1: 'UAG 手機殼 iPhone 17\n\n採用軍規級防護標準，通過 MIL-STD-810G 測試\n提供360度全方位保護，有效防止手機摔落損壞\n輕量化設計，不增加手機負擔\n精準開孔，完美貼合 iPhone 17',
    introText2: 'UAG 手機殼採用獨特的蜂巢式結構設計，在提供強力防護的同時保持輕薄。\n\n• 四角加厚設計，有效吸收衝擊力\n• 背面凸起設計，保護相機鏡頭\n• 防滑紋理，提供更好的握持感\n• 支援無線充電功能',
    price: 2390,
    category: 'mobile-accessories',
    image: '/mobile-accessories/uag2.png',
    introImage1: '/mobile-accessories/uag2.png',
    introImage2: '/mobile-accessories/uag2.png',
    specifications: [
      '適用機型: iPhone 17',
      '防護等級: 軍規級 MIL-STD-810G',
      '材質: 複合材料 + TPU',
      '重量: 輕量化設計',
      '支援無線充電: 是',
      '顏色: 多色可選'
    ],
    images: ['/mobile-accessories/uag2.png']
  },
  // 手機配件 - 保護貼
  5: {
    id: 5,
    brand: '保護貼',
    name: '3D滿版保護貼',
    code: 'SP-3D-FULL',
    description: '3D滿版保護貼，完美貼合螢幕曲面，提供全面保護，不影響觸控靈敏度。',
    introText1: '3D滿版保護貼\n\n採用高品質鋼化玻璃材質\n完美貼合螢幕曲面，不留白邊\n9H硬度，有效防止刮傷\n高透光率，不影響螢幕顯示效果',
    introText2: '3D滿版保護貼經過特殊工藝處理，能夠完美貼合各種曲面螢幕。\n\n• 疏油疏水塗層，指紋不易殘留\n• 高靈敏度觸控，不影響操作體驗\n• 防爆設計，破碎不傷手\n• 易於安裝，氣泡自動排出',
    price: 999,
    category: 'mobile-accessories',
    image: '/mobile-accessories/uag3.jpg',
    introImage1: '/mobile-accessories/uag3.jpg',
    introImage2: '/mobile-accessories/uag3.jpg',
    specifications: [
      '材質: 鋼化玻璃',
      '硬度: 9H',
      '厚度: 0.33mm',
      '透光率: 99%',
      '疏油疏水: 是',
      '適用機型: 多款iPhone機型'
    ],
    images: ['/mobile-accessories/uag3.jpg']
  },
  6: {
    id: 6,
    brand: '保護貼',
    name: '防窺膜',
    code: 'SP-PRIVACY',
    description: '防窺保護貼，有效防止側面偷窺，保護個人隱私，同時提供螢幕保護功能。',
    introText1: '防窺膜\n\n採用微細百葉窗技術\n正面清晰可見，側面無法窺視\n有效保護個人隱私\n同時提供螢幕防護功能',
    introText2: '防窺膜採用先進的微細百葉窗技術，在保護隱私的同時不影響正常使用。\n\n• 正面視角清晰，不影響觀看體驗\n• 側面防窺角度約30度\n• 高透光率，保持螢幕亮度\n• 防指紋、防刮傷',
    price: 750,
    category: 'mobile-accessories',
    image: '/mobile-accessories/uag4.png',
    introImage1: '/mobile-accessories/uag4.png',
    introImage2: '/mobile-accessories/uag4.png',
    specifications: [
      '材質: 防窺玻璃',
      '防窺角度: 約30度',
      '透光率: 85%',
      '厚度: 0.3mm',
      '防指紋: 是',
      '適用機型: 多款iPhone機型'
    ],
    images: ['/mobile-accessories/uag4.png']
  },
  // 手機配件 - 充電器
  7: {
    id: 7,
    brand: '充電器',
    name: '氮化鎵 3孔PD快充頭',
    code: 'CHG-GA3-PD',
    description: '氮化鎵 3孔PD快充頭，採用最新氮化鎵技術，體積小巧、充電快速，支援多設備同時充電。',
    introText1: '氮化鎵 3孔PD快充頭\n\n採用最新氮化鎵(GaN)技術\n體積比傳統充電器小50%\n支援PD快充協議，充電速度更快\n3孔設計，可同時為多設備充電',
    introText2: '氮化鎵技術讓充電器在保持小巧體積的同時，提供強大的充電功率。\n\n• 支援PD 3.0快充協議\n• 3個USB-C接口，最大輸出65W\n• 智能分流技術，自動分配功率\n• 過流、過壓、過溫保護\n• 適用於手機、平板、筆電等多種設備',
    price: 799,
    category: 'mobile-accessories',
    image: '/mobile-accessories/phone1.jpg',
    introImage1: '/mobile-accessories/phone1.jpg',
    introImage2: '/mobile-accessories/phone1.jpg',
    specifications: [
      '技術: 氮化鎵(GaN)',
      '接口: 3個USB-C',
      '最大輸出: 65W',
      '快充協議: PD 3.0',
      '尺寸: 小巧便攜',
      '保護功能: 過流/過壓/過溫保護',
      '適用設備: 手機、平板、筆電等'
    ],
    images: ['/mobile-accessories/phone1.jpg']
  },
  8: {
    id: 8,
    brand: '充電器',
    name: 'TYPE C 快充線',
    code: 'CABLE-TYPEC-FAST',
    description: 'TYPE C 快充線，支援PD快充協議，傳輸速度快，耐用可靠，適用於各種TYPE C設備。',
    introText1: 'TYPE C 快充線\n\n支援PD快充協議\n傳輸速度快，充電效率高\n高品質線材，耐用可靠\n適用於各種TYPE C設備',
    introText2: '採用高品質線材和接頭，確保充電穩定快速。\n\n• 支援PD快充，充電速度提升50%\n• 數據傳輸速度可達480Mbps\n• 加粗線芯，降低電阻\n• 編織線身，抗拉扯耐用\n• 適用於手機、平板、筆電等TYPE C設備',
    price: 299,
    category: 'mobile-accessories',
    image: '/mobile-accessories/phone2.jpg',
    introImage1: '/mobile-accessories/phone2.jpg',
    introImage2: '/mobile-accessories/phone2.jpg',
    specifications: [
      '接口: USB-C to USB-C',
      '長度: 1米',
      '快充協議: PD 3.0',
      '數據傳輸: 480Mbps',
      '線材: 編織線身',
      '電流: 最大5A',
      '適用設備: TYPE C接口設備'
    ],
    images: ['/mobile-accessories/phone2.jpg']
  },
  // 喇叭
  10: {
    id: 10,
    brand: 'Marshall',
    name: 'Marshall Emberton III 藍芽喇叭',
    code: 'MARSHALL-EMBER3',
    description: 'Marshall Emberton III 藍芽喇叭，經典Marshall音質，便攜設計，續航長達20小時，IPX7防水等級。',
    introText1: 'Marshall Emberton III 藍芽喇叭\n\n經典Marshall音質，重現搖滾傳奇\n便攜設計，輕巧易攜帶\n續航長達20小時，音樂不間斷\nIPX7防水等級，無懼雨水',
    introText2: 'Marshall Emberton III 繼承了Marshall的經典音質特色，採用True Stereophonic技術，提供360度立體聲體驗。\n\n• 20小時續航時間，滿足全天使用\n• IPX7防水等級，可在1米深水中使用30分鐘\n• 藍牙5.1連接，穩定快速\n• 經典Marshall外觀設計，復古時尚\n• 支援多設備連接，方便切換',
    price: 4900,
    category: 'speakers',
    image: '/players/play1.jpg',
    introImage1: '/players/play1.jpg',
    introImage2: '/players/play1.jpg',
    specifications: [
      '品牌: Marshall',
      '型號: Emberton III',
      '連接方式: 藍牙5.1',
      '續航時間: 20小時',
      '防水等級: IPX7',
      '音質技術: True Stereophonic',
      '重量: 輕便設計',
      '顏色: 多色可選'
    ],
    images: ['/players/play1.jpg']
  },
  11: {
    id: 11,
    brand: 'SANSUI山水',
    name: 'SANSUI山水 全指向藍芽無線音響 SF-LL6',
    code: 'SANSUI-SF-LL6',
    description: 'SANSUI山水 全指向藍芽無線音響 SF-LL6，360度全指向音效，立體聲環繞，適合各種場合使用。',
    introText1: 'SANSUI山水 全指向藍芽無線音響 SF-LL6\n\n360度全指向音效設計\n立體聲環繞，音質清晰\n藍牙無線連接，使用方便\n適合室內外各種場合',
    introText2: '採用全指向音效技術，無論從哪個角度都能享受優質音質。\n\n• 360度全指向音效，無死角聆聽\n• 立體聲環繞技術，沉浸式體驗\n• 藍牙5.0連接，穩定快速\n• 長續航設計，音樂不間斷\n• 簡約時尚外觀，融入各種環境',
    price: 2990,
    category: 'speakers',
    image: '/players/play2.jpg',
    introImage1: '/players/play2.jpg',
    introImage2: '/players/play2.jpg',
    specifications: [
      '品牌: SANSUI山水',
      '型號: SF-LL6',
      '連接方式: 藍牙5.0',
      '音效技術: 360度全指向',
      '音質: 立體聲環繞',
      '適用場合: 室內外通用',
      '顏色: 多色可選'
    ],
    images: ['/players/play2.jpg']
  },
  12: {
    id: 12,
    brand: 'JBL',
    name: 'JBL Flip 7可攜型防水藍牙喇叭',
    code: 'JBL-FLIP7',
    description: 'JBL Flip 7可攜型防水藍牙喇叭，IPX7防水等級，強勁低音，便攜設計，適合戶外活動使用。',
    introText1: 'JBL Flip 7可攜型防水藍牙喇叭\n\nIPX7防水等級，無懼水濺\n強勁低音，震撼音效\n便攜設計，輕鬆攜帶\n適合戶外活動使用',
    introText2: 'JBL Flip 7採用JBL Pro Sound技術，提供強勁低音和清晰高音。\n\n• IPX7防水等級，可在1米深水中使用30分鐘\n• 12小時續航時間，滿足全天使用\n• 藍牙5.1連接，穩定快速\n• PartyBoost功能，可串聯多個喇叭\n• 便攜設計，適合戶外活動',
    price: 5900,
    category: 'speakers',
    image: '/players/play3.png',
    introImage1: '/players/play3.png',
    introImage2: '/players/play3.png',
    specifications: [
      '品牌: JBL',
      '型號: Flip 7',
      '連接方式: 藍牙5.1',
      '續航時間: 12小時',
      '防水等級: IPX7',
      '音質技術: JBL Pro Sound',
      '特殊功能: PartyBoost串聯',
      '適用場景: 戶外活動'
    ],
    images: ['/players/play3.png']
  },
  // 專業維修 - 二手整新音箱
  13: {
    id: 13,
    brand: 'Crate',
    name: 'Crate 電貝斯音箱',
    code: 'CRATE-BASS-AMP',
    description: 'Crate 電貝斯音箱，二手整新，功能正常，適合貝斯手使用。',
    introText1: 'Crate 電貝斯音箱\n\n二手整新商品，功能正常\n適合電貝斯使用\n音質清晰，低音強勁\n專業級品質',
    introText2: '經過專業檢測與整新，確保功能正常運作。\n\n• 二手整新，品質保證\n• 功能測試正常\n• 適合電貝斯演奏\n• 音質清晰，低音表現優異',
    price: 14900,
    category: 'players',
    image: '/repair/repair1.jpg',
    introImage1: '/repair/repair1.jpg',
    introImage2: '/repair/repair1.jpg',
    specifications: [
      '品牌: Crate',
      '類型: 電貝斯音箱',
      '狀態: 二手整新',
      '功能: 正常',
      '適用: 電貝斯'
    ],
    images: ['/repair/repair1.jpg']
  },
  14: {
    id: 14,
    brand: 'Mesa Boogie',
    name: '9成新Mesa Boogie Mark V 真空管電吉他音箱',
    code: 'MESA-MARKV',
    description: '9成新Mesa Boogie Mark V 真空管電吉他音箱，經典真空管音色，狀態極佳。',
    introText1: '9成新Mesa Boogie Mark V 真空管電吉他音箱\n\n9成新狀態，外觀良好\n經典真空管音色\nMesa Boogie 頂級品質\n適合專業演出使用',
    introText2: 'Mesa Boogie Mark V 是備受推崇的真空管音箱，提供豐富的音色變化。\n\n• 9成新狀態，保養良好\n• 真空管音色，溫暖飽滿\n• 多種音色模式可選\n• 適合錄音室及現場演出',
    price: 88000,
    category: 'players',
    image: '/repair/repair2.jpg',
    introImage1: '/repair/repair2.jpg',
    introImage2: '/repair/repair2.jpg',
    specifications: [
      '品牌: Mesa Boogie',
      '型號: Mark V',
      '類型: 真空管電吉他音箱',
      '狀態: 9成新',
      '音色: 真空管音色'
    ],
    images: ['/repair/repair2.jpg']
  },
  15: {
    id: 15,
    brand: 'Marshall',
    name: 'Marshall mg30dfx吉他音箱',
    code: 'MARSHALL-MG30DFX',
    description: 'Marshall mg30dfx吉他音箱，二手整新，經典Marshall音色，適合練習及小型演出。',
    introText1: 'Marshall mg30dfx吉他音箱\n\n二手整新商品\n經典Marshall音色\n適合練習及小型演出\n功能齊全',
    introText2: 'Marshall mg30dfx 提供經典的Marshall音色，適合各種音樂風格。\n\n• 二手整新，功能正常\n• 經典Marshall音色\n• 內建效果器\n• 適合練習及小型演出',
    price: 3500,
    category: 'players',
    image: '/repair/repair3.png',
    introImage1: '/repair/repair3.png',
    introImage2: '/repair/repair3.png',
    specifications: [
      '品牌: Marshall',
      '型號: mg30dfx',
      '類型: 電吉他音箱',
      '狀態: 二手整新',
      '功率: 30W'
    ],
    images: ['/repair/repair3.png']
  },
  16: {
    id: 16,
    brand: 'Peavey',
    name: 'Peavey micro bass II 第二代 20w 貝斯音箱',
    code: 'PEAVEY-MICRO-BASS2',
    description: 'Peavey micro bass II 第二代 20w 貝斯音箱，二手整新，輕便設計，適合練習使用。',
    introText1: 'Peavey micro bass II 第二代 20w 貝斯音箱\n\n二手整新商品\n20W功率輸出\n輕便設計，易於攜帶\n適合練習使用',
    introText2: 'Peavey micro bass II 第二代提供清晰的低音表現，適合貝斯練習。\n\n• 二手整新，功能正常\n• 20W功率輸出\n• 輕便設計\n• 適合練習及小型演出',
    price: 3700,
    category: 'players',
    image: '/repair/repair4.jpg',
    introImage1: '/repair/repair4.jpg',
    introImage2: '/repair/repair4.jpg',
    specifications: [
      '品牌: Peavey',
      '型號: micro bass II 第二代',
      '類型: 貝斯音箱',
      '功率: 20W',
      '狀態: 二手整新'
    ],
    images: ['/repair/repair4.jpg']
  },
  // 專業維修 - 二手整新喇叭
  17: {
    id: 17,
    brand: 'ATC',
    name: '英國ATC SCM20 書架式喇叭',
    code: 'ATC-SCM20',
    description: '英國ATC SCM20 書架式喇叭，二手整新，英國製造，音質優異，適合監聽使用。',
    introText1: '英國ATC SCM20 書架式喇叭\n\n英國製造，品質優異\n二手整新商品\n書架式設計\n適合監聽使用',
    introText2: 'ATC SCM20 是備受推崇的監聽喇叭，提供精準的音質表現。\n\n• 英國製造，品質保證\n• 二手整新，狀態良好\n• 精準音質，適合監聽\n• 書架式設計，節省空間',
    price: 49800,
    category: 'players',
    image: '/repair/repair5.jpg',
    introImage1: '/repair/repair5.jpg',
    introImage2: '/repair/repair5.jpg',
    specifications: [
      '品牌: ATC',
      '型號: SCM20',
      '產地: 英國',
      '類型: 書架式喇叭',
      '狀態: 二手整新'
    ],
    images: ['/repair/repair5.jpg']
  },
  18: {
    id: 18,
    brand: 'ROGERS',
    name: '英國ROGERS LS3 5A+AB1落地式喇叭',
    code: 'ROGERS-LS3-5A-AB1',
    description: '英國ROGERS LS3 5A+AB1落地式喇叭，二手整新，經典英國音色，適合Hi-Fi系統。',
    introText1: '英國ROGERS LS3 5A+AB1落地式喇叭\n\n英國製造，經典品牌\n二手整新商品\n落地式設計\n適合Hi-Fi系統',
    introText2: 'ROGERS LS3 5A+AB1 是經典的英國喇叭，提供溫暖自然的音色。\n\n• 英國製造，經典品牌\n• 二手整新，狀態良好\n• 落地式設計，音場寬闊\n• 適合Hi-Fi音響系統',
    price: 65800,
    category: 'players',
    image: '/repair/repair6.jpg',
    introImage1: '/repair/repair6.jpg',
    introImage2: '/repair/repair6.jpg',
    specifications: [
      '品牌: ROGERS',
      '型號: LS3 5A+AB1',
      '產地: 英國',
      '類型: 落地式喇叭',
      '狀態: 二手整新'
    ],
    images: ['/repair/repair6.jpg']
  },
  19: {
    id: 19,
    brand: 'KEF',
    name: '英國製KEF Reference 205_2 落地式喇叭',
    code: 'KEF-REF205-2',
    description: '英國製KEF Reference 205_2 落地式喇叭，二手整新，KEF頂級系列，音質卓越。',
    introText1: '英國製KEF Reference 205_2 落地式喇叭\n\n英國製造，KEF頂級系列\n二手整新商品\n落地式設計\n音質卓越',
    introText2: 'KEF Reference 205_2 是KEF的頂級系列，提供卓越的音質表現。\n\n• 英國製造，頂級品質\n• 二手整新，狀態良好\n• 落地式設計，音場寬闊\n• 適合高級Hi-Fi系統',
    price: 88000,
    category: 'players',
    image: '/repair/repair7.jpg',
    introImage1: '/repair/repair7.jpg',
    introImage2: '/repair/repair7.jpg',
    specifications: [
      '品牌: KEF',
      '型號: Reference 205_2',
      '產地: 英國',
      '類型: 落地式喇叭',
      '狀態: 二手整新'
    ],
    images: ['/repair/repair7.jpg']
  },
  20: {
    id: 20,
    brand: 'JBL',
    name: 'JBL EON612 12吋二路外場喇叭(單一顆)',
    code: 'JBL-EON612',
    description: 'JBL EON612 12吋二路外場喇叭(單一顆)，二手整新，適合外場演出使用。',
    introText1: 'JBL EON612 12吋二路外場喇叭(單一顆)\n\nJBL專業外場喇叭\n12吋低音單體\n二手整新商品\n適合外場演出',
    introText2: 'JBL EON612 是專業的外場喇叭，提供強勁的音量和清晰的音質。\n\n• 12吋低音單體，低音強勁\n• 二路分音設計\n• 二手整新，功能正常\n• 適合外場演出及PA系統',
    price: 16000,
    category: 'players',
    image: '/repair/repair8.jpg',
    introImage1: '/repair/repair8.jpg',
    introImage2: '/repair/repair8.jpg',
    specifications: [
      '品牌: JBL',
      '型號: EON612',
      '類型: 外場喇叭',
      '尺寸: 12吋',
      '狀態: 二手整新'
    ],
    images: ['/repair/repair8.jpg']
  },
  21: {
    id: 21,
    brand: 'YAMAHA',
    name: 'YAMAHA CBR10 被動式外場喇叭（單顆）',
    code: 'YAMAHA-CBR10',
    description: 'YAMAHA CBR10 被動式外場喇叭（單顆），二手整新，適合外場演出使用。',
    introText1: 'YAMAHA CBR10 被動式外場喇叭（單顆）\n\nYAMAHA專業外場喇叭\n被動式設計\n二手整新商品\n適合外場演出',
    introText2: 'YAMAHA CBR10 提供清晰的音質和良好的投射能力。\n\n• 被動式設計，需搭配擴大機\n• 二手整新，功能正常\n• 適合外場演出\n• 音質清晰，投射力強',
    price: 6500,
    category: 'players',
    image: '/repair/repair9.jpg',
    introImage1: '/repair/repair9.jpg',
    introImage2: '/repair/repair9.jpg',
    specifications: [
      '品牌: YAMAHA',
      '型號: CBR10',
      '類型: 被動式外場喇叭',
      '狀態: 二手整新',
      '設計: 被動式'
    ],
    images: ['/repair/repair9.jpg']
  },
  22: {
    id: 22,
    brand: 'ES',
    name: 'ES-1002 DB 主動式音柱喇叭',
    code: 'ES-1002-DB',
    description: 'ES-1002 DB 主動式音柱喇叭，二手整新，內建擴大機，適合各種場合使用。',
    introText1: 'ES-1002 DB 主動式音柱喇叭\n\n主動式設計，內建擴大機\n音柱式外型\n二手整新商品\n適合各種場合',
    introText2: 'ES-1002 DB 主動式音柱喇叭，內建擴大機，使用方便。\n\n• 主動式設計，內建擴大機\n• 音柱式外型，節省空間\n• 二手整新，功能正常\n• 適合各種場合使用',
    price: 40000,
    category: 'players',
    image: '/repair/repair10.jpg',
    introImage1: '/repair/repair10.jpg',
    introImage2: '/repair/repair10.jpg',
    specifications: [
      '品牌: ES',
      '型號: 1002 DB',
      '類型: 主動式音柱喇叭',
      '設計: 內建擴大機',
      '狀態: 二手整新'
    ],
    images: ['/repair/repair10.jpg']
  },
  // 專業維修 - 二手整新擴大機
  23: {
    id: 23,
    brand: 'SONY',
    name: '日本製 SONY SCD-1 高階SACD播放機',
    code: 'SONY-SCD1',
    description: '日本製 SONY SCD-1 高階SACD播放機，二手整新，SONY頂級SACD播放機，音質卓越。',
    introText1: '日本製 SONY SCD-1 高階SACD播放機\n\n日本製造，SONY頂級機種\n支援SACD格式\n二手整新商品\n音質卓越',
    introText2: 'SONY SCD-1 是SONY的頂級SACD播放機，提供卓越的音質表現。\n\n• 日本製造，頂級品質\n• 支援SACD及CD格式\n• 二手整新，功能正常\n• 適合高級Hi-Fi系統',
    price: 85000,
    category: 'players',
    image: '/repair/repair11.jpg',
    introImage1: '/repair/repair11.jpg',
    introImage2: '/repair/repair11.jpg',
    specifications: [
      '品牌: SONY',
      '型號: SCD-1',
      '產地: 日本',
      '類型: SACD播放機',
      '狀態: 二手整新'
    ],
    images: ['/repair/repair11.jpg']
  },
  24: {
    id: 24,
    brand: 'DEVIALET',
    name: '法國製DEVIALET 400 MONO超級萬能綜合擴大機',
    code: 'DEVIALET-400-MONO',
    description: '法國製DEVIALET 400 MONO超級萬能綜合擴大機，二手整新，DEVIALET頂級擴大機，功能強大。',
    introText1: '法國製DEVIALET 400 MONO超級萬能綜合擴大機\n\n法國製造，DEVIALET頂級機種\nMONO單聲道設計\n二手整新商品\n功能強大',
    introText2: 'DEVIALET 400 MONO 是DEVIALET的頂級擴大機，提供強大的驅動能力和卓越音質。\n\n• 法國製造，頂級品質\n• MONO單聲道設計，音質純淨\n• 二手整新，功能正常\n• 適合高級Hi-Fi系統',
    price: 130000,
    category: 'players',
    image: '/repair/repair12.jpg',
    introImage1: '/repair/repair12.jpg',
    introImage2: '/repair/repair12.jpg',
    specifications: [
      '品牌: DEVIALET',
      '型號: 400 MONO',
      '產地: 法國',
      '類型: 綜合擴大機',
      '設計: MONO單聲道',
      '狀態: 二手整新'
    ],
    images: ['/repair/repair12.jpg']
  },
  // 預設商品（舊商品）
  9: {
    id: 9,
    brand: 'Behringer',
    name: 'Behringer 耳朵牌 迷你混音器(限量黑) MICROMIX MX400 四軌/4軌混音器 單聲道輸出',
    code: 'MX400(限量黑)',
    description: 'Behringer MICROMIX MX400 是一款超小型4軌混音器，採用高品質元件製造，結構堅固耐用。這款由德國Behringer設計的台灣限量黑色MX400，雖然體積小巧，但功能強大，能夠提供高品質音質，並具有超低噪音特性。',
    introText1: '高品質的元件和極其牢固的結構,確保使用壽命長\n德國百靈達(耳朵牌)設計 台灣限量黑色MX400\n超小型4軌混音器',
    introText2: 'MX400儘管其體積超迷你,但仍是強大的4軌混音器!\n它產生於所有的產出水平最高的音質,擁有超低噪音出色的聲音性能。',
    price: 2000,
    originalPrice: 2600,
    discount: '活動下殺97折',
    image: '/behringer.jpg',
    backImage: '/behringer.jpg',
    isPreOrder: true,
    estimatedShippingDate: '2026/2月',
    specifications: [
      'Ultra-compact 4-channel line mixer 超小型混音器',
      'Highest sonic quality even at maximum output level 最高音質,即使大輸出時',
      'Input Level control for each channel 輸入可控制每個Channel',
      'Ultra low-noise 4580 operational amplifiers 超低噪音4580',
      'DC 12 volt adapter included 使用12V直流電'
    ],
    images: ['/behringer.jpg', '/behringer.jpg', '/behringer.jpg', '/behringer.jpg']
  }
}

// 分類名稱映射
const categoryMap: Record<string, string> = {
  'mobile-accessories': '手機配件',
  speakers: '喇叭',
  players: '二手音箱、喇叭',
  repair: '專業維修'
}

const getCategoryName = (category?: string) => {
  if (!category) return ''
  return categoryMap[category] || category
}

// 模拟商品数据（实际应该从API获取）
const product = computed<Product>(() => {
  const id = Number(productId.value) || 1
  return productsDatabase[id] || productsDatabase[9]
})

// 相关产品（根据当前商品分类显示）
const relatedProducts = computed<Product[]>(() => {
  const currentProduct = product.value
  if (!currentProduct.category) {
    return []
  }
  // 返回同分類的其他商品（排除當前商品）
  return Object.values(productsDatabase)
    .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
    .slice(0, 4)
})

// 处理立即购买
const handleBuyNow = () => {
  // TODO: 实现购买逻辑
  console.log('立即购买:', product.value.id)
  // router.push('/checkout')
}

// 处理加入购物车
const handleAddToCart = () => {
  // TODO: 实现购物车逻辑
  console.log('加入购物车:', product.value.id)
  // 可以显示一个提示消息
}

// SEO设置
useHead({
  title: `${product.value.name} - 音響網站`,
  meta: [
    {
      name: 'description',
      content: product.value.description || product.value.name
    }
  ]
})
</script>

