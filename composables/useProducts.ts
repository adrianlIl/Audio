export interface Product {
  id: number
  brand: string
  name: string
  description?: string
  price: number
  originalPrice?: number
  discount?: string
  image?: string
  category?: string
}

// 所有商品數據
export const allProducts: Product[] = [
  // 手機配件 - UAG 手機殼
  {
    id: 1,
    brand: 'UAG',
    name: 'UAG 手機殼 iPhone 17 PRO MAX',
    price: 2490,
    category: 'mobile-accessories',
    image: '/mobile-accessories/uag1.jpg'
  },
  {
    id: 2,
    brand: 'UAG',
    name: 'UAG 手機殼 iPhone 17 PRO',
    price: 2490,
    category: 'mobile-accessories',
    image: '/mobile-accessories/uag1.jpg'
  },
  {
    id: 3,
    brand: 'UAG',
    name: 'UAG 手機殼 iPhone 17 AIR',
    price: 2390,
    category: 'mobile-accessories',
    image: '/mobile-accessories/uag2.png'
  },
  {
    id: 4,
    brand: 'UAG',
    name: 'UAG 手機殼 iPhone 17',
    price: 2390,
    category: 'mobile-accessories',
    image: '/mobile-accessories/uag2.png'
  },
  // 手機配件 - 保護貼
  {
    id: 5,
    brand: '保護貼',
    name: '3D滿版保護貼',
    price: 999,
    category: 'mobile-accessories',
    image: '/mobile-accessories/uag3.jpg'
  },
  {
    id: 6,
    brand: '保護貼',
    name: '防窺膜',
    price: 750,
    category: 'mobile-accessories',
    image: '/mobile-accessories/uag4.png'
  },
  // 手機配件 - 充電器
  {
    id: 7,
    brand: '充電器',
    name: '氮化鎵 3孔PD快充頭',
    price: 799,
    category: 'mobile-accessories',
    image: '/mobile-accessories/phone1.jpg'
  },
  {
    id: 8,
    brand: '充電器',
    name: 'TYPE C 快充線',
    price: 299,
    category: 'mobile-accessories',
    image: '/mobile-accessories/phone2.jpg'
  },
  // 舊商品數據
  {
    id: 9,
    brand: 'Behringer',
    name: 'Behringer 耳朵牌 迷你混音器 (限量黑) MICROMIX MX400 四軌/4軌 混音器 單聲道輸出',
    price: 2000,
    originalPrice: 2600,
    discount: '活動下殺97折',
    image: '/behringer.jpg'
  },
  // 喇叭
  {
    id: 10,
    brand: 'Marshall',
    name: 'Marshall Emberton III 藍芽喇叭',
    price: 4900,
    category: 'speakers',
    image: '/players/play1.jpg'
  },
  {
    id: 11,
    brand: 'SANSUI山水',
    name: 'SANSUI山水 全指向藍芽無線音響 SF-LL6',
    price: 2990,
    category: 'speakers',
    image: '/players/play2.jpg'
  },
  {
    id: 12,
    brand: 'JBL',
    name: 'JBL Flip 7可攜型防水藍牙喇叭',
    price: 5900,
    category: 'speakers',
    image: '/players/play3.png'
  },
  // 二手音箱、喇叭 - 二手整新音箱
  {
    id: 13,
    brand: 'Crate',
    name: 'Crate 電貝斯音箱',
    price: 14900,
    category: 'players',
    image: '/repair/repair1.jpg'
  },
  {
    id: 14,
    brand: 'Mesa Boogie',
    name: '9成新Mesa Boogie Mark V 真空管電吉他音箱',
    price: 88000,
    category: 'players',
    image: '/repair/repair2.jpg'
  },
  {
    id: 15,
    brand: 'Marshall',
    name: 'Marshall mg30dfx吉他音箱',
    price: 3500,
    category: 'players',
    image: '/repair/repair3.png'
  },
  {
    id: 16,
    brand: 'Peavey',
    name: 'Peavey micro bass II 第二代 20w 貝斯音箱',
    price: 3700,
    category: 'players',
    image: '/repair/repair4.jpg'
  },
  // 二手音箱、喇叭 - 二手整新喇叭
  {
    id: 17,
    brand: 'ATC',
    name: '英國ATC SCM20 書架式喇叭',
    price: 49800,
    category: 'players',
    image: '/repair/repair5.jpg'
  },
  {
    id: 18,
    brand: 'ROGERS',
    name: '英國ROGERS LS3 5A+AB1落地式喇叭',
    price: 65800,
    category: 'players',
    image: '/repair/repair6.jpg'
  },
  {
    id: 19,
    brand: 'KEF',
    name: '英國製KEF Reference 205_2 落地式喇叭',
    price: 88000,
    category: 'players',
    image: '/repair/repair7.jpg'
  },
  {
    id: 20,
    brand: 'JBL',
    name: 'JBL EON612 12吋二路外場喇叭(單一顆)',
    price: 16000,
    category: 'players',
    image: '/repair/repair8.jpg'
  },
  {
    id: 21,
    brand: 'YAMAHA',
    name: 'YAMAHA CBR10 被動式外場喇叭（單顆）',
    price: 6500,
    category: 'players',
    image: '/repair/repair9.jpg'
  },
  {
    id: 22,
    brand: 'ES',
    name: 'ES-1002 DB 主動式音柱喇叭',
    price: 40000,
    category: 'players',
    image: '/repair/repair10.jpg'
  },
  // 二手音箱、喇叭 - 二手整新擴大機
  {
    id: 23,
    brand: 'SONY',
    name: '日本製 SONY SCD-1 高階SACD播放機',
    price: 85000,
    category: 'players',
    image: '/repair/repair11.jpg'
  },
  {
    id: 24,
    brand: 'DEVIALET',
    name: '法國製DEVIALET 400 MONO超級萬能綜合擴大機',
    price: 130000,
    category: 'players',
    image: '/repair/repair12.jpg'
  }
]

// 分類名稱映射
export const categoryMap: Record<string, string> = {
  'mobile-accessories': '手機配件',
  speakers: '喇叭',
  players: '二手音箱、喇叭',
  'repair-cable': '音響線材、導線製作',
  'repair-bass': 'BASS音箱、音箱頭專業維修',
  'repair-guitar': '吉他音箱、音箱頭專業維修',
  'repair-tube': '真空管故障維修、保養、改裝',
  'repair-mixer': '數位、類比混音控台維修',
  'repair-light': '舞台用燈光維修',
  'repair-speaker': '外場喇叭、監聽維修',
  'repair-mic': '動圈、電容麥克風維修',
  'repair-buy': '二手樂器、燈光音響器材收購'
}

/**
 * 搜尋商品
 * @param query 搜尋關鍵字
 * @param category 可選的分類過濾
 * @returns 符合條件的商品列表
 */
export function searchProducts(query: string, category?: string): Product[] {
  if (!query.trim()) {
    return []
  }

  const searchTerm = query.toLowerCase().trim()
  
  return allProducts.filter(product => {
    // 如果指定了分類，先過濾分類
    if (category && product.category !== category) {
      return false
    }

    // 搜尋商品名稱
    const nameMatch = product.name.toLowerCase().includes(searchTerm)
    
    // 搜尋品牌
    const brandMatch = product.brand.toLowerCase().includes(searchTerm)
    
    // 搜尋分類名稱（中文）
    const categoryName = categoryMap[product.category || ''] || ''
    const categoryMatch = categoryName.includes(searchTerm)
    
    // 搜尋描述（如果有）
    const descriptionMatch = product.description?.toLowerCase().includes(searchTerm) || false

    return nameMatch || brandMatch || categoryMatch || descriptionMatch
  })
}

/**
 * 根據分類獲取商品
 */
export function getProductsByCategory(category: string): Product[] {
  return allProducts.filter(product => product.category === category)
}

/**
 * 獲取所有商品
 */
export function getAllProducts(): Product[] {
  return allProducts
}
