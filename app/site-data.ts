export const siteData = {
  assets: {
    hero: "/assets/hero-ingredients.png",
    fiber: "/assets/category-fiber.png",
    protein: "/assets/category-protein.png",
    starch: "/assets/category-starch.png",
    fillings: "/assets/category-fillings.png",
    bread: "/assets/application-bread.png",
    about: "/assets/about-dough.png"
  },
  categories: [
    {
      id: "bakery-basics",
      image: "hero",
      zh: { name: "烘焙酶制剂及基础配料", summary: "改善烘焙组织与基础加工表现的配料选择。" },
      en: { name: "Bakery Enzymes & Essentials", summary: "Ingredient options for bakery structure and foundational processing needs." },
      products: ["maltogenic-amylase-3d", "baking-soda"]
    },
    {
      id: "premixes",
      image: "about",
      zh: { name: "预拌粉", summary: "面向蛋糕、米面包与甜品应用的标准化原料组合。" },
      en: { name: "Premixes", summary: "Standardized ingredient systems for cakes, rice bread and desserts." },
      products: ["butter-cake-premix", "rice-bread-premix", "rice-pudding-premix"]
    },
    {
      id: "fiber-sweeteners",
      image: "fiber",
      zh: { name: "膳食纤维与代糖", summary: "服务高纤、减糖与配方结构优化等应用方向。" },
      en: { name: "Dietary Fiber & Sugar Alternatives", summary: "For high-fiber, reduced-sugar and formulation development needs." },
      products: ["wheat-fiber-premix", "psyllium-husk", "inulin", "gos", "fos", "isomaltulose", "isomalt", "allulose", "black-malt-powder"]
    },
    {
      id: "proteins",
      image: "protein",
      zh: { name: "高蛋白原料", summary: "覆盖乳源、酵母与植物来源的蛋白原料。" },
      en: { name: "Protein Ingredients", summary: "Dairy, yeast and plant-sourced protein ingredients." },
      products: ["whey-milk-protein", "yeast-protein", "pea-fava-protein", "vital-wheat-gluten"]
    },
    {
      id: "starches",
      image: "starch",
      zh: { name: "变性淀粉", summary: "面向保湿、弹性、耐冻、组织与酱料稳定等需求。" },
      en: { name: "Modified Starches", summary: "For moisture, elasticity, freeze tolerance, texture and sauce stability." },
      products: ["qq1", "n5", "bk", "modified-glutinous-rice-starch", "native-rice-starch", "pregelatinized-rice-starch", "physically-modified-rice-starch", "instant-pure-flo-f"]
    },
    {
      id: "fillings",
      image: "fillings",
      zh: { name: "馅料", summary: "适用于蛋糕、面包夹心、注馅及耐烘焙应用。" },
      en: { name: "Fillings", summary: "For cakes, bread centers, injection filling and bake-stable applications." },
      products: ["frozen-taro-filling", "chestnut-paste", "frozen-pumpkin-puree", "purple-rice-filling"]
    }
  ],
  products: [
    {
      slug: "maltogenic-amylase-3d",
      category: "bakery-basics",
      zh: { name: "麦芽糖淀粉酶 3D", spec: "20kg", feature: "麦芽糖淀粉酶，保软抗老化", note: "单体酶制剂（3D）", applications: "80–100ppm，预拌粉" },
      en: { name: "Maltogenic Amylase 3D", spec: "20 kg", feature: "Maltogenic amylase for softness retention and anti-staling", note: "Single-enzyme preparation (3D)", applications: "80–100 ppm; premixes" }
    },
    {
      slug: "baking-soda",
      category: "bakery-basics",
      zh: { name: "烘焙碱", spec: "1kg×8 / 250g×32", feature: "食品级烘焙碱", note: "基础烘焙配料", applications: "碱水面包" },
      en: { name: "Baking Soda", spec: "1 kg × 8 / 250 g × 32", feature: "Food-grade baking soda", note: "Essential bakery ingredient", applications: "Alkaline-water breads" }
    },
    {
      slug: "butter-cake-premix",
      category: "premixes",
      zh: { name: "黄油蛋糕预拌粉", spec: "5×5kg", feature: "浓郁黄油香味，细密组织结构", note: "预拌粉", applications: "蛋糕" },
      en: { name: "Butter Cake Premix", spec: "5 × 5 kg", feature: "Rich buttery aroma and fine crumb structure", note: "Premix", applications: "Cakes" }
    },
    {
      slug: "rice-bread-premix",
      category: "premixes",
      zh: { name: "大米面包预拌粉", spec: "5×5kg", feature: "天然大米香，Q弹米感，性价比高", note: "预拌粉", applications: "米面包" },
      en: { name: "Rice Bread Premix", spec: "5 × 5 kg", feature: "Natural rice aroma and a pleasantly chewy rice texture", note: "Premix", applications: "Rice bread" }
    },
    {
      slug: "rice-pudding-premix",
      category: "premixes",
      zh: { name: "大米布丁预拌粉", spec: "10×1kg", feature: "五常大米版本", note: "预拌粉", applications: "大米布丁类产品" },
      en: { name: "Rice Pudding Premix", spec: "10 × 1 kg", feature: "Wuchang rice version", note: "Premix", applications: "Rice pudding products" }
    },
    {
      slug: "wheat-fiber-premix",
      category: "fiber-sweeteners",
      zh: { name: "小麦纤维预拌粉", spec: "20kg", feature: "纤维含量99%，保水保油，组织立体；建议添加量0.1%，不超过0.15%", note: "国产", applications: "传统馅料、吐司、餐包、软欧包" },
      en: { name: "Wheat Fiber Premix", spec: "20 kg", feature: "99% fiber; water and oil retention; supports structure. Suggested dosage 0.1%, not above 0.15%", note: "China", applications: "Traditional fillings, toast, dinner rolls and soft European bread" }
    },
    {
      slug: "psyllium-husk",
      category: "fiber-sweeteners",
      zh: { name: "圆苞车前子壳粉", spec: "20kg", feature: "吸水性强，保证吸水性40倍以上", note: "印度进口", applications: "代餐" },
      en: { name: "Psyllium Husk Powder", spec: "20 kg", feature: "High water absorption, specified at over 40 times its weight", note: "Imported from India", applications: "Meal replacements" }
    },
    {
      slug: "inulin",
      category: "fiber-sweeteners",
      zh: { name: "菊粉", spec: "25kg", feature: "口感细腻，约30%甜度，可在面包或蛋糕中代糖", note: "智利进口", applications: "欧包、吐司饼干、蛋糕、肠丸、酱料" },
      en: { name: "Inulin", spec: "25 kg", feature: "Fine mouthfeel, about 30% relative sweetness; suitable for partial sugar replacement", note: "Imported from Chile", applications: "European-style bread, toast, biscuits, cakes, processed meat and sauces" }
    },
    {
      slug: "gos",
      category: "fiber-sweeteners",
      zh: { name: "低聚半乳糖", spec: "25kg", feature: "优质益生元原料，广泛用于配方食品、乳制品与保健食品", note: "国产 / 荷兰", applications: "面包、蛋糕、益生元及高纤产品" },
      en: { name: "Galacto-oligosaccharides (GOS)", spec: "25 kg", feature: "Prebiotic ingredient used across formulated foods, dairy and nutrition products", note: "China / Netherlands", applications: "Bread, cakes, prebiotic and high-fiber products" }
    },
    {
      slug: "fos",
      category: "fiber-sweeteners",
      zh: { name: "低聚果糖", spec: "25kg", feature: "天然膳食纤维及益生元，约30%甜度，可用于代糖", note: "智利进口", applications: "面包、蛋糕、益生元及高纤产品" },
      en: { name: "Fructo-oligosaccharides (FOS)", spec: "25 kg", feature: "Dietary fiber and prebiotic ingredient with about 30% relative sweetness", note: "Imported from Chile", applications: "Bread, cakes, prebiotic and high-fiber products" }
    },
    {
      slug: "isomaltulose",
      category: "fiber-sweeteners",
      zh: { name: "异麦芽酮糖", spec: "25kg", feature: "甜菜来源，约50%甜度，GI值32，能量释放较缓慢", note: "德国", applications: "低糖产品、运动能量棒、代餐及低糖饮料" },
      en: { name: "Isomaltulose", spec: "25 kg", feature: "Beet-derived, about 50% relative sweetness, GI 32, with slower energy release", note: "Germany", applications: "Reduced-sugar products, energy bars, meal replacements and low-sugar beverages" }
    },
    {
      slug: "isomalt",
      category: "fiber-sweeteners",
      zh: { name: "异麦芽酮糖醇", spec: "20kg / 25kg", feature: "约45%–65%甜度，耐酸耐热，吸湿性较低", note: "德国", applications: "餐厅糖醇零食、浅色冷加工与烘焙点心" },
      en: { name: "Isomalt", spec: "20 kg / 25 kg", feature: "About 45%–65% relative sweetness; acid and heat tolerant with low hygroscopicity", note: "Germany", applications: "Sugar-alcohol snacks, light-color cold processing and baked goods" }
    },
    {
      slug: "allulose",
      category: "fiber-sweeteners",
      zh: { name: "阿洛酮糖", spec: "25kg", feature: "约70%蔗糖甜度，热量约为蔗糖的10%", note: "国产", applications: "需要上色且便于脱模的烘焙糕点" },
      en: { name: "Allulose", spec: "25 kg", feature: "About 70% of sucrose sweetness and approximately 10% of its calories", note: "China", applications: "Baked goods requiring browning and easy release" }
    },
    {
      slug: "black-malt-powder",
      category: "fiber-sweeteners",
      zh: { name: "黑麦芽粉", spec: "25kg", feature: "着色力强，适用于全麦面包调色；建议添加量0.5%–2%", note: "英国", applications: "烘焙面包" },
      en: { name: "Black Malt Powder", spec: "25 kg", feature: "Strong coloring power for whole-wheat bread; suggested dosage 0.5%–2%", note: "United Kingdom", applications: "Baked bread" }
    },
    {
      slug: "whey-milk-protein",
      category: "proteins",
      zh: { name: "乳清 / 牛奶蛋白粉", spec: "20kg", feature: "高蛋白质、高热稳定性、凝胶、持水、良好风味", note: "进口", applications: "烘焙、酱料、零食" },
      en: { name: "Whey / Milk Protein Powder", spec: "20 kg", feature: "High protein, heat stability, gelation, water holding and clean flavor", note: "Imported", applications: "Bakery, sauces and snacks" }
    },
    {
      slug: "yeast-protein",
      category: "proteins",
      zh: { name: "酵母蛋白粉", spec: "20kg", feature: "高蛋白，性价比高", note: "国产", applications: "烘焙、零食" },
      en: { name: "Yeast Protein Powder", spec: "20 kg", feature: "High-protein ingredient with strong value", note: "China", applications: "Bakery and snacks" }
    },
    {
      slug: "pea-fava-protein",
      category: "proteins",
      zh: { name: "豌豆 / 蚕豆蛋白", spec: "20kg", feature: "植物蛋白，具有一定乳化性", note: "国产 / 进口", applications: "烘焙、酱料、零食" },
      en: { name: "Pea / Fava Bean Protein", spec: "20 kg", feature: "Plant protein with emulsifying properties", note: "China / Imported", applications: "Bakery, sauces and snacks" }
    },
    {
      slug: "vital-wheat-gluten",
      category: "proteins",
      zh: { name: "谷朊粉", spec: "25kg", feature: "蛋白质含量85%+，增强面包筋力、延缓老化、改善口感并增加蛋白质含量", note: "一级谷朊粉", applications: "各种面包、吐司" },
      en: { name: "Vital Wheat Gluten", spec: "25 kg", feature: "85%+ protein; strengthens dough, supports softness and increases protein content", note: "Grade I wheat gluten", applications: "Breads and toast" }
    },
    {
      slug: "qq1",
      category: "starches",
      zh: { name: "QQ-1", spec: "25kg", feature: "保湿保水、增加弹性、Q感强", note: "复配增稠剂", applications: "麻薯、卡拉棒、面包" },
      en: { name: "QQ-1", spec: "25 kg", feature: "Moisture retention, added elasticity and pronounced chewy texture", note: "Compound thickener", applications: "Mochi-style products, snack sticks and bread" }
    },
    {
      slug: "n5",
      category: "starches",
      zh: { name: "N-5", spec: "25kg", feature: "湿润、增弹、耐冷冻（非预糊化）", note: "羟丙基二淀粉磷酸酯", applications: "蛋糕卷、贝壳蛋糕、软欧包冷冻面团" },
      en: { name: "N-5", spec: "25 kg", feature: "Moist texture, added elasticity and freeze tolerance (non-pregelatinized)", note: "Hydroxypropyl distarch phosphate", applications: "Cake rolls, shell cakes and frozen soft-European bread dough" }
    },
    {
      slug: "bk",
      category: "starches",
      zh: { name: "BK", spec: "25kg", feature: "改善化口性，增加组织细腻度与脆性", note: "磷酸酯双淀粉", applications: "牛轧糖、派蛋糕、轻蛋糕类" },
      en: { name: "BK", spec: "25 kg", feature: "Improves melt-in-mouth quality, fineness and crispness", note: "Phosphated distarch phosphate", applications: "Nougat, pie cakes and light cakes" }
    },
    {
      slug: "modified-glutinous-rice-starch",
      category: "starches",
      zh: { name: "糯米变性淀粉", spec: "25kg", feature: "化口性、耐冻", note: "乙酰化二淀粉磷酸酯", applications: "面包、蛋糕、酱料" },
      en: { name: "Modified Glutinous Rice Starch", spec: "25 kg", feature: "Melt-in-mouth quality and freeze tolerance", note: "Acetylated distarch phosphate", applications: "Bread, cakes and sauces" }
    },
    {
      slug: "native-rice-starch",
      category: "starches",
      zh: { name: "大米原淀粉", spec: "25kg", feature: "颗粒细、色白、脂肪感与光亮度良好", note: "大米淀粉", applications: "清洁标签、面包、蛋糕" },
      en: { name: "Native Rice Starch", spec: "25 kg", feature: "Fine particle size, white color, creamy mouthfeel and sheen", note: "Rice starch", applications: "Clean-label products, bread and cakes" }
    },
    {
      slug: "pregelatinized-rice-starch",
      category: "starches",
      zh: { name: "预糊化米淀粉", spec: "25kg", feature: "入口即化、吸水、保湿，可用于冷加工", note: "预糊化米淀粉", applications: "清洁标签、预拌粉、固体饮料、蛋糕、面包" },
      en: { name: "Pregelatinized Rice Starch", spec: "25 kg", feature: "Quick-dissolving, water-absorbing and moisture-retaining; suitable for cold processing", note: "Pregelatinized rice starch", applications: "Clean-label products, premixes, powdered drinks, cakes and bread" }
    },
    {
      slug: "physically-modified-rice-starch",
      category: "starches",
      zh: { name: "物理改良米淀粉", spec: "25kg", feature: "质量稳定，适合酱料；保水并具有良好流动性", note: "米淀粉", applications: "酱料、卡仕达粉 / 酱" },
      en: { name: "Physically Modified Rice Starch", spec: "25 kg", feature: "Stable quality for sauces, with water retention and good flow", note: "Rice starch", applications: "Sauces and custard powders / sauces" }
    },
    {
      slug: "instant-pure-flo-f",
      category: "starches",
      zh: { name: "Instant Pure-FLO F", spec: "25kg", feature: "蛋糕保湿抗老化，并提供支撑性（预糊化）", note: "羟丙基二淀粉磷酸酯", applications: "馅料、蛋糕" },
      en: { name: "Instant Pure-FLO F", spec: "25 kg", feature: "Moisture retention, anti-staling and structure support in cakes (pregelatinized)", note: "Hydroxypropyl distarch phosphate", applications: "Fillings and cakes" }
    },
    {
      slug: "frozen-taro-filling",
      category: "fillings",
      zh: { name: "冷冻芋泥馅系列", spec: "15×1kg", feature: "采用荔浦芋头，可反复冻融；常温3–30天不酸败、不渗", note: "芋泥馅（GB / QB）", applications: "蛋糕或面包夹心、注馅、耐烘焙" },
      en: { name: "Frozen Taro Filling Series", spec: "15 × 1 kg", feature: "Made with Lipu taro; retains its characteristic flavor; designed for ambient handling without souring or weeping for 3–30 days", note: "Taro filling (GB / QB)", applications: "Cake or bread centers, injection filling and bake-stable applications" }
    },
    {
      slug: "chestnut-paste",
      category: "fillings",
      zh: { name: "栗子蓉系列（罐装常温）", spec: "950g×12罐/箱等", feature: "提供栗子碎、黄金栗子蓉、法式栗子蓉等多种规格", note: "常温罐装", applications: "西点蛋糕、包馅或夹心面包" },
      en: { name: "Chestnut Paste Series (Ambient Cans)", spec: "950 g × 12 cans/carton and other formats", feature: "Multiple chestnut paste styles and pack formats are available", note: "Ambient canned filling", applications: "Western cakes, filled pastries and bread centers" }
    },
    {
      slug: "frozen-pumpkin-puree",
      category: "fillings",
      zh: { name: "南瓜泥（冷冻）", spec: "15×1kg", feature: "精选贝贝南瓜，南瓜味道足；常温3–30天不酸败、不渗", note: "冷冻馅料", applications: "西点蛋糕、包馅或夹心面包" },
      en: { name: "Frozen Pumpkin Purée", spec: "15 × 1 kg", feature: "Made with selected Beibei pumpkin for a full pumpkin flavor; designed for ambient handling without souring or weeping for 3–30 days", note: "Frozen filling", applications: "Western cakes, filled pastries and bread centers" }
    },
    {
      slug: "purple-rice-filling",
      category: "fillings",
      zh: { name: "墨江紫米馅料（冷冻）", spec: "15×1kg", feature: "冷冻紫米馅料", note: "冷冻馅料", applications: "西点蛋糕、包馅或夹心面包" },
      en: { name: "Mojiang Purple Rice Filling (Frozen)", spec: "15 × 1 kg", feature: "Frozen purple-rice filling", note: "Frozen filling", applications: "Western cakes, filled pastries and bread centers" }
    }
  ],
  applications: [
    { id: "bread", image: "bread", products: ["wheat-fiber-premix", "inulin", "n5", "pregelatinized-rice-starch", "vital-wheat-gluten"], zh: "面包与吐司", en: "Bread & Toast" },
    { id: "cakes", image: "about", products: ["butter-cake-premix", "n5", "bk", "instant-pure-flo-f"], zh: "蛋糕与西点", en: "Cakes & Pastry" },
    { id: "centers", image: "fillings", products: ["wheat-fiber-premix", "psyllium-husk", "frozen-taro-filling", "chestnut-paste"], zh: "馅料与夹心", en: "Fillings & Centers" },
    { id: "meal", image: "protein", products: ["psyllium-husk", "whey-milk-protein", "pea-fava-protein", "gos"], zh: "餐饮与代餐", en: "Foodservice & Meal Replacement" },
    { id: "sauces", image: "starch", products: ["whey-milk-protein", "pea-fava-protein", "modified-glutinous-rice-starch", "physically-modified-rice-starch"], zh: "酱料与食品加工", en: "Sauces & Food Processing" }
  ],
  copy: {
    zh: {
      nav: ["首页", "产品中心", "应用方案", "关于橙益", "联系我们"],
      heroTitle: "让每一种原料，找到合适的应用",
      heroBody: "聚焦食品原料与烘焙应用，为烘焙、餐饮及食品加工客户提供清晰、高效的原料选择支持。",
      browse: "浏览产品",
      consult: "联系咨询",
      productHeading: "从原料出发，连接更多食品应用",
      allProducts: "查看全部产品",
      enterCategory: "进入分类",
      appHeading: "按应用场景寻找合适的原料",
      appBody: "从产品应用出发，更快找到匹配的原料方向。",
      suitable: "适用原料",
      related: "查看相关产品",
      aboutHeading: "关于橙益",
      aboutBody: "上海橙益食品贸易有限公司专注于食品原料及烘焙应用相关产品，产品涵盖预拌粉、膳食纤维与代糖、高蛋白原料、变性淀粉、馅料及烘焙配料。我们致力于通过清晰的产品信息、贴近应用场景的选品建议和及时的业务响应，为烘焙、餐饮及食品加工客户提供更高效的原料选择支持。",
      learnMore: "了解更多",
      contactHeading: "让我们从一次原料需求开始",
      phone: "电话",
      address: "地址",
      addressValue: "上海市松江区九亭镇涞寅路78号2号楼南楼202室",
      catalogTitle: "产品目录",
      catalogBody: "按分类浏览，或输入产品名称快速查找。",
      searchPlaceholder: "搜索产品名称",
      all: "全部",
      noResults: "没有找到匹配的产品",
      close: "关闭",
      detailLabels: ["规格", "产品特点", "说明", "推荐应用"],
      imageNotice: "图片为原料与应用场景示意",
      sourceNotice: "产品信息以正式资料与业务确认为准。"
    },
    en: {
      nav: ["Home", "Products", "Applications", "About", "Contact"],
      heroTitle: "The right ingredient for every application",
      heroBody: "Focused on food ingredients and bakery applications, we help bakery, foodservice and food-processing customers navigate ingredient choices with clarity and efficiency.",
      browse: "Explore Products",
      consult: "Contact Us",
      productHeading: "From ingredients to more food applications",
      allProducts: "View All Products",
      enterCategory: "Explore Category",
      appHeading: "Find ingredients by application",
      appBody: "Start with the end application and reach relevant ingredient options faster.",
      suitable: "Relevant Ingredients",
      related: "View Related Products",
      aboutHeading: "About Chengyi",
      aboutBody: "Shanghai Chengyi Food Trading Co., Ltd. focuses on food ingredients and bakery-related applications. Our portfolio spans premixes, dietary fiber and sugar alternatives, protein ingredients, modified starches, fillings and bakery essentials. Through clear product information, application-oriented selection support and responsive communication, we aim to help bakery, foodservice and food-processing customers make ingredient choices more efficiently.",
      learnMore: "Learn More",
      contactHeading: "Let’s start with your ingredient requirement",
      phone: "Phone",
      address: "Address",
      addressValue: "Room 202, South Building, Building 2, No. 78 Laiyin Road, Jiuting Town, Songjiang District, Shanghai, China",
      catalogTitle: "Product Catalog",
      catalogBody: "Browse by category or search by product name.",
      searchPlaceholder: "Search products",
      all: "All",
      noResults: "No matching products found",
      close: "Close",
      detailLabels: ["Pack Size", "Key Features", "Description", "Applications"],
      imageNotice: "Images illustrate ingredients and application scenarios",
      sourceNotice: "Product information is subject to formal documentation and business confirmation."
    }
  }
} as const;
