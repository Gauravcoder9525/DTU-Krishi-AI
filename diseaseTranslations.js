/**
 * 🌾 Krishi AI — Master Crop Disease Translations Dictionary
 * Complete bilingual (Hindi & English) agronomic mapping for all 63 classes + generic fallbacks.
 */

export const SEVERITY_TRANSLATIONS = {
  'Critical': { en: 'Critical Risk', hi: 'अति गंभीर (Critical)', color: 'bg-rose-600', text: 'text-rose-900', border: 'border-rose-300' },
  'Severe': { en: 'Severe Risk', hi: 'गंभीर जोखिम (Severe)', color: 'bg-red-600', text: 'text-red-900', border: 'border-red-300' },
  'High': { en: 'High Risk', hi: 'उच्च जोखिम (High)', color: 'bg-orange-600', text: 'text-orange-900', border: 'border-orange-300' },
  'Moderate': { en: 'Moderate Risk', hi: 'मध्यम जोखिम (Moderate)', color: 'bg-amber-500', text: 'text-amber-900', border: 'border-amber-300' },
  'Low': { en: 'Low Risk', hi: 'हल्का / कम जोखिम (Low)', color: 'bg-blue-600', text: 'text-blue-900', border: 'border-blue-300' },
  'None': { en: 'Healthy', hi: 'रोगमुक्त एवं स्वस्थ', color: 'bg-emerald-600', text: 'text-emerald-900', border: 'border-emerald-300' },
  'Healthy': { en: 'Healthy', hi: 'रोगमुक्त एवं स्वस्थ', color: 'bg-emerald-600', text: 'text-emerald-900', border: 'border-emerald-300' }
};

export const CROP_TRANSLATIONS = {
  'Wheat': { en: 'Wheat', hi: 'गेहूं' },
  'Rice': { en: 'Rice (Paddy)', hi: 'धान (चावल)' },
  'Cotton': { en: 'Cotton', hi: 'कपास (नरमा)' },
  'Maize': { en: 'Maize (Corn)', hi: 'मक्का' },
  'Maize (Corn)': { en: 'Maize (Corn)', hi: 'मक्का' },
  'Sugarcane': { en: 'Sugarcane', hi: 'गन्ना' },
  'Potato': { en: 'Potato', hi: 'आलू' },
  'Tomato': { en: 'Tomato', hi: 'टमाटर' },
  'Pepper Bell': { en: 'Capsicum / Pepper', hi: 'शिमला मिर्च' },
  'Pepper (Capsicum)': { en: 'Capsicum / Pepper', hi: 'शिमला मिर्च' },
  'Pearl Millet': { en: 'Pearl Millet (Bajra)', hi: 'बाजरा (श्रीअन्न)' },
  'General Crop': { en: 'Field Crop', hi: 'खेत की फसल' }
};

export const CATEGORY_TRANSLATIONS = {
  'Pest Infestation': { en: 'Pest Infestation', hi: 'कीट प्रकोप' },
  'Fungal Disease': { en: 'Fungal Disease', hi: 'फफूंद जनित रोग' },
  'Bacterial Disease': { en: 'Bacterial Disease', hi: 'जीवाणु (बैक्टीरियल) रोग' },
  'Viral Disease': { en: 'Viral Disease', hi: 'विषाणु (वायरस) रोग' },
  'Soil-borne Fungal Disease': { en: 'Soil-borne Fungal Disease', hi: 'मृदा जनित कवक रोग' },
  'Vascular Fungal Disease': { en: 'Vascular Fungal Disease', hi: 'संवहनी कवक रोग' },
  'Healthy Crop': { en: 'Healthy Crop', hi: 'रोगमुक्त एवं स्वस्थ फसल' },
  'Condition': { en: 'Crop Health Status', hi: 'फसल स्वास्थ्य स्थिति' }
};

export const MASTER_DISEASE_DB = {
  // ── Wheat Classes ──
  'wheat aphid': {
    nameEn: 'Wheat Aphid Infestation',
    nameHi: 'गेहूं का माहू (एफिड) कीट प्रकोप',
    cropEn: 'Wheat',
    cropHi: 'गेहूं',
    categoryEn: 'Pest Infestation',
    categoryHi: 'कीट प्रकोप',
    severity: 'Moderate',
    symptomsHi: 'बालियों, झंडा पत्ती और तने पर हरे/काले माहू कीटों का चिपचिपा झुंड; पत्तियों पर चिपचिपा स्राव और काला फफूंद; दानों का सिकुड़ना।',
    immediateActionHi: 'खेत में प्रति पौधा 5 से अधिक माहू दिखने पर तुरंत इमिडाक्लोप्रिड या नीम तेल का छिड़काव करें।',
    recommendationsHi: [
      '⚡ तुरंत उपाय: इमिडाक्लोप्रिड 17.8% SL @ 0.5 मिली प्रति लीटर पानी की दर से छिड़काव करें।',
      '📋 दिन 1-2: खेत में पीले चिपचिपे ट्रैप (Yellow Sticky Traps) @ 15 प्रति एकड़ लगाएं।',
      '📋 दिन 3-5: मित्र कीट जैसे लेडीबर्ड बीटल का संरक्षण करें और शाम के समय जैविक नीम तेल 10000 ppm @ 2-3 मिली/लीटर स्प्रे करें।',
      '📋 दिन 7+: यदि कीट का प्रकोप बना रहे तो थायमेथोक्सम 25% WG @ 0.5 ग्राम/लीटर का दूसरा स्प्रे करें।'
    ],
    organicControlHi: [
      'नीम तेल (10,000 ppm) @ 3 मिली प्रति लीटर पानी में मिलाकर शाम के समय छिड़कें।',
      'पीले चिपचिपे कार्ड (Yellow Sticky Traps) 15 ट्रैप प्रति एकड़ की दर से लगाएं।'
    ],
    chemicalControlHi: [
      'इमिडाक्लोप्रिड 17.8% SL @ 0.5 मिली/लीटर (100 मिली/एकड़)',
      'थायमेथोक्सम 25% WG @ 0.5 ग्राम/लीटर (80-100 ग्राम/एकड़)',
      'डाइमेथोएट 30% EC @ 1.7 मिली/लीटर पानी'
    ],
    preventiveMeasuresHi: 'संतुलित नाइट्रोजन उर्वरक डालें (अत्यधिक यूरिया से माहू बढ़ता है); फसल में हवा का आवागमन बनाए रखें।'
  },

  'wheat brown leaf rust': {
    nameEn: 'Wheat Brown Rust (Leaf Rust)',
    nameHi: 'गेहूं का भूरा रतुआ (ब्राउन लीफ रस्ट)',
    cropEn: 'Wheat',
    cropHi: 'गेहूं',
    categoryEn: 'Fungal Disease',
    categoryHi: 'फफूंद जनित रोग',
    severity: 'High',
    symptomsHi: 'पत्तियों की ऊपरी सतह पर नारंगी-भूरे रंग के बिखरे हुए दाने (पस्ट्यूल्स); हाथ लगाने पर उंगलियों पर नारंगी पाउडर जैसा लगना।',
    immediateActionHi: 'संक्रमण के पहले लक्षण दिखते ही प्रोपिकोनाज़ोल 25% EC का तुरंत छिड़काव करें।',
    recommendationsHi: [
      '⚡ तुरंत उपाय: प्रोपिकोनाज़ोल (टिल्ट) 25% EC @ 1 मिली प्रति लीटर पानी में मिलाकर स्प्रे करें।',
      '📋 दिन 1-3: खेत का निरीक्षण करें और रोगग्रस्त पत्तियों के फैलाव की निगरानी करें।',
      '📋 दिन 5-7: टेबुकोनाज़ोल 25.9% EC @ 1.25 मिली/लीटर का दूसरा स्प्रे 10-12 दिन बाद दोहराएं।'
    ],
    organicControlHi: [
      'खट्टी छाछ (5%) या नीम अर्क का छिड़काव शुरुआती अवस्था में करें।',
      'ट्राइकोडर्मा विरिडी @ 5 ग्राम/लीटर पानी में घोलकर छिड़कें।'
    ],
    chemicalControlHi: [
      'प्रोपिकोनाज़ोल 25% EC (टिल्ट) @ 1 मिली/लीटर (200 मिली/एकड़)',
      'टेबुकोनाज़ोल 25.9% EC @ 1.25 मिली/लीटर',
      'मैनकोज़ेब 75% WP @ 2.5 ग्राम/लीटर'
    ],
    preventiveMeasuresHi: 'रतुआ-रोधी प्रमाणित गेहूं किस्मों (जैसे HD 2967, DBW 187, DBW 222) की ही बुवाई करें।'
  },

  'wheat black rust': {
    nameEn: 'Wheat Black Rust (Stem Rust)',
    nameHi: 'गेहूं का काला रतुआ (स्टेम रस्ट)',
    cropEn: 'Wheat',
    cropHi: 'गेहूं',
    categoryEn: 'Fungal Disease',
    categoryHi: 'फफूंद जनित रोग',
    severity: 'Critical',
    symptomsHi: 'तनों और पत्तियों पर गहरे भूरे से काले रंग के लंबे धब्बे; तने का फटना और पौधे का कमजोर होकर गिरना।',
    immediateActionHi: 'तने पर काले धब्बे दिखते ही पूरे खेत में तुरंत कवकनाशी स्प्रे करें।',
    recommendationsHi: [
      '⚡ तुरंत उपाय: प्रोपिकोनाज़ोल 25% EC @ 1 मिली/लीटर का छिड़काव तुरंत करें।',
      '📋 दिन 1-4: खेत की सिंचाई सीमित करें ताकि अत्यधिक नमी न बने।',
      '📋 दिन 7: एज़ोक्सीस्ट्रोबिन + डिफेनोकोनाज़ोल @ 1 मिली/लीटर का दूसरा स्प्रे करें।'
    ],
    organicControlHi: ['ट्राइकोडर्मा हरज़ियानम @ 10 ग्राम/लीटर का स्प्रे करें।'],
    chemicalControlHi: ['प्रोपिकोनाज़ोल 25% EC @ 1 मिली/लीटर', 'डिफेनोकोनाज़ोल 25% EC @ 0.5 मिली/लीटर'],
    preventiveMeasuresHi: 'फसल चक्र अपनाएं और समय पर बुवाई पूरी करें।'
  },

  'wheat___yellow_rust': {
    nameEn: 'Wheat Yellow Rust (Stripe Rust)',
    nameHi: 'गेहूं का पीला रतुआ (स्ट्राइप रस्ट)',
    cropEn: 'Wheat',
    cropHi: 'गेहूं',
    categoryEn: 'Fungal Disease',
    categoryHi: 'फफूंद जनित रोग',
    severity: 'Critical',
    symptomsHi: 'पत्तियों पर पीले रंग की समानांतर धारियां (स्ट्राइप्स); पीले चूर्ण का हाथ पर लगना; पत्ती का सूखना।',
    immediateActionHi: 'पीली धारियां दिखते ही पूरे खेत में बिना देरी किए प्रोपिकोनाज़ोल का स्प्रे करें।',
    recommendationsHi: [
      '⚡ तुरंत उपाय: प्रोपिकोनाज़ोल 25% EC (टिल्ट) @ 1 मिली/लीटर (200 मिली/200 लीटर पानी प्रति एकड़)।',
      '📋 दिन 1-3: पीले रतुआ के शुरुआती केंद्र (हॉटस्पॉट) पर अतिरिक्त छिड़काव करें।',
      '📋 दिन 10: 10-12 दिन बाद यदि मौसम ठंडा व नम रहे तो दूसरा स्प्रे दोहराएं।'
    ],
    organicControlHi: ['स्यूडोमोनास फ्लोरोसेंस @ 5 ग्राम/लीटर का फोलियर स्प्रे।'],
    chemicalControlHi: ['प्रोपिकोनाज़ोल 25% EC @ 1 मिली/लीटर', 'टेबुकोनाज़ोल 25.9% EC @ 1.25 मिली/लीटर'],
    preventiveMeasuresHi: 'ठंडे व तराई क्षेत्रों में पीला रतुआ प्रतिरोधी किस्में (DBW 303, PBW 725) लगाएं।'
  },

  'wheat powdery mildew': {
    nameEn: 'Wheat Powdery Mildew',
    nameHi: 'गेहूं का चूर्णिल आसिता (पाउडरी मिल्ड्यू)',
    cropEn: 'Wheat',
    cropHi: 'गेहूं',
    categoryEn: 'Fungal Disease',
    categoryHi: 'फफूंद जनित रोग',
    severity: 'Moderate',
    symptomsHi: 'पत्तियों और तने की सतह पर सफेद पाउडर जैसी फफूंदी की परत; बाद में धूसर-भूरे रंग में बदलना।',
    immediateActionHi: 'सल्फर 80% WP या हेक्साकोनाज़ोल का छिड़काव करें।',
    recommendationsHi: [
      '⚡ घुलनशील सल्फर 80% WP @ 3 ग्राम प्रति लीटर पानी का छिड़काव करें।',
      '📋 हेक्साकोनाज़ोल 5% EC @ 2 मिली/लीटर का छिड़काव 7 दिन बाद करें।'
    ],
    organicControlHi: ['सल्फर चूर्ण (Dust) @ 10 किग्रा/एकड़', 'नीम अर्क 5%'],
    chemicalControlHi: ['सल्फर 80% WP @ 3 ग्राम/लीटर', 'हेक्साकोनाज़ोल 5% EC @ 2 मिली/लीटर'],
    preventiveMeasuresHi: 'घनी बुवाई से बचें ताकि फसल में हवा व धूप बनी रहे।'
  },

  'wheat leaf blight': {
    nameEn: 'Wheat Spot Blight / Leaf Blight',
    nameHi: 'गेहूं का पत्ती झुलसा (लीफ ब्लाइट)',
    cropEn: 'Wheat',
    cropHi: 'गेहूं',
    categoryEn: 'Fungal Disease',
    categoryHi: 'फफूंद जनित रोग',
    severity: 'Moderate',
    symptomsHi: 'पत्तियों पर अंडाकार भूरे धब्बे जिनके चारों ओर पीला घेरा होता है; पत्तियां सिरे से झुलसने लगती हैं।',
    immediateActionHi: 'मैनकोज़ेब 75% WP @ 2.5 ग्राम प्रति लीटर की दर से स्प्रे करें।',
    recommendationsHi: [
      '⚡ मैनकोज़ेब 75% WP @ 2.5 ग्राम/लीटर या ज़ीनेब 75% WP @ 2 ग्राम/लीटर का छिड़काव करें।'
    ],
    organicControlHi: ['ट्राइकोडर्मा विरिडी @ 5 ग्राम/लीटर'],
    chemicalControlHi: ['मैनकोज़ेब 75% WP @ 2.5 ग्राम/लीटर', 'प्रोपिकोनाज़ोल 25% EC @ 1 मिली/लीटर'],
    preventiveMeasuresHi: 'पोटाश खाद की पर्याप्त मात्रा दें जिससे पत्ती की रोग प्रतिरोधक क्षमता बढ़े।'
  },

  'wheat mite': {
    nameEn: 'Brown Wheat Mite Infestation',
    nameHi: 'गेहूं का भूरा बरूथी (माइट कीट प्रकोप)',
    cropEn: 'Wheat',
    cropHi: 'गेहूं',
    categoryEn: 'Pest Infestation',
    categoryHi: 'कीट प्रकोप',
    severity: 'Moderate',
    symptomsHi: 'पत्तियों पर महीन पीले-सफेद बिंदु, पत्तियां तांबई या कांस्य रंग की दिखने लगती हैं; पौधा बौना रह जाता है।',
    immediateActionHi: 'खेत में हल्की सिंचाई करें और प्रोपरगाइट या घुलनशील गंधक का स्प्रे करें।',
    recommendationsHi: ['⚡ प्रोपरगाइट 57% EC @ 2 मिली/लीटर या सल्फर 80% WDG @ 3 ग्राम/लीटर स्प्रे करें।'],
    organicControlHi: ['नीम तेल 10000 ppm @ 3 मिली/लीटर'],
    chemicalControlHi: ['प्रोपरगाइट 57% EC @ 2 मिली/लीटर', 'फेनपायरोक्सिमेट 5% EC @ 1 मिली/लीटर'],
    preventiveMeasuresHi: 'शुष्क मौसम में खेत में हल्की सिंचाई कर नमी बनाए रखें।'
  },

  'wheat stem fly': {
    nameEn: 'Wheat Shoot Fly / Stem Fly',
    nameHi: 'गेहूं का तना मक्खी (शूट फ्लाई)',
    cropEn: 'Wheat',
    cropHi: 'गेहूं',
    categoryEn: 'Pest Infestation',
    categoryHi: 'कीट प्रकोप',
    severity: 'Moderate',
    symptomsHi: 'केंद्रीय कल्ले का सूखना (डेड हार्ट); पौधे में नए कल्ले कमजोर निकलना।',
    immediateActionHi: 'क्लोरपायरीफॉस या इमिडाक्लोप्रिड का छिड़काव करें।',
    recommendationsHi: ['⚡ क्लोरपायरीफॉस 20% EC @ 2 मिली प्रति लीटर पानी में मिलाकर स्प्रे करें।'],
    organicControlHi: ['नीम अर्क 5%'],
    chemicalControlHi: ['क्लोरपायरीफॉस 20% EC @ 2 मिली/लीटर', 'थायमेथोक्सम 25% WG @ 0.5 ग्राम/लीटर'],
    preventiveMeasuresHi: 'समय पर सही गहराई पर बुवाई करें और बीज उपचार अवश्य करें।'
  },

  'wheat scab': {
    nameEn: 'Wheat Scab (Fusarium Head Blight)',
    nameHi: 'गेहूं का सिट्टा झुलसा / स्केब रोग',
    cropEn: 'Wheat',
    cropHi: 'गेहूं',
    categoryEn: 'Fungal Disease',
    categoryHi: 'फफूंद जनित रोग',
    severity: 'High',
    symptomsHi: 'बालियों का समय से पहले सफेद या बदरंग होना; दानों पर गुलाबी/नारंगी फफूंद; दाने हल्के व सिकुड़े हुए।',
    immediateActionHi: 'फूल आने के समय टेबुकोनाज़ोल या प्रोपिकोनाज़ोल का सुरक्षात्मक छिड़काव करें।',
    recommendationsHi: ['⚡ टेबुकोनाज़ोल 25.9% EC @ 1.25 मिली/लीटर का छिड़काव करें।'],
    organicControlHi: ['जैविक कवकनाशी ट्राइकोडर्मा का छिड़काव।'],
    chemicalControlHi: ['टेबुकोनाज़ोल 25.9% EC @ 1.25 मिली/लीटर', 'एज़ोक्सीस्ट्रोबिन 23% SC @ 1 मिली/लीटर'],
    preventiveMeasuresHi: 'फसल अवशेषों को गहरा जोतकर मिट्टी में दबाएं।'
  },

  'flag smut': {
    nameEn: 'Flag Smut of Wheat',
    nameHi: 'गेहूं का ध्वज कंडुआ (फ्लैग स्मट)',
    cropEn: 'Wheat',
    cropHi: 'गेहूं',
    categoryEn: 'Fungal Disease',
    categoryHi: 'फफूंद जनित रोग',
    severity: 'Moderate',
    symptomsHi: 'पत्तियों की शिराओं के समानांतर लंबी काली/धूसर धारियां; पत्तियों का मुड़ना और फटना, काला पाउडर निकलना।',
    immediateActionHi: 'संक्रमित पौधों को उखाड़कर नष्ट करें और टेबुकोनाज़ोल का स्प्रे करें।',
    recommendationsHi: ['⚡ कार्बोक्सिन + थीरम (विटावैक्स) @ 2 ग्राम/किग्रा बीज उपचार और टेबुकोनाज़ोल स्प्रे।'],
    organicControlHi: ['बीज को गोमूत्र व नीम अर्क से उपचारित करें।'],
    chemicalControlHi: ['टेबुकोनाज़ोल 25.9% EC @ 1 मिली/लीटर', 'कार्बोक्सिन 37.5% + थीरम 37.5% DS'],
    preventiveMeasuresHi: 'प्रमाणित रोगमुक्त बीज का उपयोग करें और बीज उपचार कभी न छोड़ें।'
  },

  'healthy wheat': {
    nameEn: 'Healthy Wheat Crop',
    nameHi: 'रोगमुक्त एवं स्वस्थ गेहूं',
    cropEn: 'Wheat',
    cropHi: 'गेहूं',
    categoryEn: 'Healthy Crop',
    categoryHi: 'रोगमुक्त फसल',
    severity: 'None',
    symptomsHi: 'पत्तियां पूर्ण रूप से हरी, चमकदार और रोगमुक्त हैं। कोई कीट या फंगल लक्षण नहीं मिले।',
    immediateActionHi: 'वर्तमान देखरेख जारी रखें। नियमित निगरानी बनाए रखें।',
    recommendationsHi: [
      '✅ गेहूं की फसल एकदम स्वस्थ है — कोई रासायनिक दवा न डालें।',
      '📋 बालियां बनते समय 0:52:34 या 13:0:45 @ 10 ग्राम/लीटर का एक पोषक स्प्रे कर सकते हैं।',
      '📋 दाना भराव के समय खेत में नमी की कमी न होने दें।'
    ],
    organicControlHi: ['नियमित जैविक खाद और जीवामृत का उपयोग जारी रखें।'],
    chemicalControlHi: ['किसी भी रासायनिक कीटनाशक की आवश्यकता नहीं है।'],
    preventiveMeasuresHi: 'हर सप्ताह खेत का मुआयना करें ताकि कीट/रोग का पहला लक्षण तुरंत पकड़ा जा सके।'
  },

  // ── Cotton Classes ──
  'american bollworm on cotton': {
    nameEn: 'American Bollworm (Cotton)',
    nameHi: 'कपास का अमेरिकन बॉलवर्म (सुंडी कीट)',
    cropEn: 'Cotton',
    cropHi: 'कपास (नरमा)',
    categoryEn: 'Pest Infestation',
    categoryHi: 'कीट प्रकोप',
    severity: 'Critical',
    symptomsHi: 'कलियों और टिंडों में गोल छेद; टिंडों के बाहर सुंडी का मल दिखना; कलियों का खुलकर गिरना (फ्लेयर्ड स्क्वेयर्स)।',
    immediateActionHi: 'प्रति पौधा 1 सुंडी दिखने पर इमामेक्टिन बेंजोएट या स्पिनोसैड का तुरंत स्प्रे करें।',
    recommendationsHi: [
      '⚡ इमामेक्टिन बेंजोएट 5% SG @ 0.5 ग्राम प्रति लीटर या स्पिनोसैड 45% SC @ 0.3 मिली/लीटर स्प्रे करें।',
      '📋 हेलील्यूर फेरोमोन ट्रैप (Helilure Traps) @ 8-10 ट्रैप प्रति एकड़ लगाएं।',
      '📋 बीटी कपास में भी नियमित जांच रखें और शाम के समय छिड़काव करें।'
    ],
    organicControlHi: ['नीम तेल 10000 ppm @ 3 मिली/लीटर', 'Bt कुरस्टाकी @ 2 ग्राम/लीटर'],
    chemicalControlHi: ['इमामेक्टिन बेंजोएट 5% SG @ 0.5 ग्राम/लीटर', 'क्लोरेंट्रानिलिप्रोल 18.5% SC @ 0.3 मिली/लीटर'],
    preventiveMeasuresHi: 'खेत के चारों ओर अरंडी या मक्का की ट्रैप क्रॉप (Trap crop) लगाएं।'
  },

  'pink bollworm in cotton': {
    nameEn: 'Pink Bollworm in Cotton',
    nameHi: 'कपास की गुलाबी सुंडी (पिंक बॉलवर्म)',
    cropEn: 'Cotton',
    cropHi: 'कपास (नरमा)',
    categoryEn: 'Pest Infestation',
    categoryHi: 'कीट प्रकोप',
    severity: 'Critical',
    symptomsHi: 'फूलों का गुलाब जैसा बंद रह जाना (रोसेटेड फ्लावर्स); टिंडों के अंदर बीज और रेशे को खा जाना; टिंडों का न खुलना।',
    immediateActionHi: 'रोसेटेड फूलों को हाथ से तोड़कर नष्ट करें और पेक्टिनोफोर फेरोमोन ट्रैप लगाएं।',
    recommendationsHi: [
      '⚡ प्रोफेनोफॉस 50% EC @ 2 मिली/लीटर या एम्प्लीगो (क्लोरान्ट्रानिलिप्रोल + लैम्ब्डा-साइहलोथ्रिन) @ 0.5 मिली/लीटर स्प्रे करें।',
      '📋 गुलाबी सुंडी के फेरोमोन ट्रैप 10 ट्रैप/एकड़ लगाएं।'
    ],
    organicControlHi: ['ट्राइकोग्रामा परजीवी ततैया (Trichogramma @ 50,000/एकड़) छोड़ें।'],
    chemicalControlHi: ['प्रोफेनोफॉस 50% EC @ 2 मिली/लीटर', 'इमामेक्टिन बेंजोएट 5% SG @ 0.5 ग्राम/लीटर'],
    preventiveMeasuresHi: 'कपास की फसल कटने के बाद बकरियों/भेड़ों को चराएं और ठूंठों को तुरंत नष्ट करें।'
  },

  'cotton aphid': {
    nameEn: 'Cotton Aphid Infestation',
    nameHi: 'कपास का माहू (एफिड कीट प्रकोप)',
    cropEn: 'Cotton',
    cropHi: 'कपास (नरमा)',
    categoryEn: 'Pest Infestation',
    categoryHi: 'कीट प्रकोप',
    severity: 'Moderate',
    symptomsHi: 'कोमल पत्तियों के नीचे छोटे काले/हरे कीड़ों का जमावड़ा; पत्तियों का नीचे की ओर मुड़ना; चिपचिपा मधुस्राव।',
    immediateActionHi: 'इमिडाक्लोप्रिड या एसीटामिप्रिड का छिड़काव करें।',
    recommendationsHi: ['⚡ एसीटामिप्रिड 20% SP @ 0.4 ग्राम/लीटर या इमिडाक्लोप्रिड 17.8% SL @ 0.5 मिली/लीटर का छिड़काव करें।'],
    organicControlHi: ['नीम अर्क 5% या नीम तेल 10000 ppm @ 3 मिली/लीटर'],
    chemicalControlHi: ['एसीटामिप्रिड 20% SP @ 0.4 ग्राम/लीटर', 'थायमेथोक्सम 25% WG @ 0.5 ग्राम/लीटर'],
    preventiveMeasuresHi: 'अत्यधिक यूरिया के प्रयोग से बचें।'
  },

  'cotton whitefly': {
    nameEn: 'Cotton Whitefly Infestation',
    nameHi: 'कपास की सफेद मक्खी (व्हाइटफ्लाई)',
    cropEn: 'Cotton',
    cropHi: 'कपास (नरमा)',
    categoryEn: 'Pest Infestation',
    categoryHi: 'कीट प्रकोप',
    severity: 'Critical',
    symptomsHi: 'पौधे को हिलाने पर सफेद महीन मक्खियों का उड़ना; पत्तियों का पीला पड़ना; लीफ कर्ल वायरस का फैलना।',
    immediateActionHi: 'पायरीप्रॉक्सीफेन + डाइफेंथियूरॉन या स्पाइरोमेसिफेन का छिड़काव करें।',
    recommendationsHi: [
      '⚡ पायरीप्रॉक्सीफेन 10% EC @ 2 मिली/लीटर या डायफेनथियूरॉन 50% WP @ 1.25 ग्राम/लीटर स्प्रे करें।',
      '📋 पीले चिपचिपे ट्रैप 20 कार्ड प्रति एकड़ लगाएं।'
    ],
    organicControlHi: ['वर्टिसिलियम लेकानी @ 5 ग्राम/लीटर', 'नीम तेल @ 4 मिली/लीटर'],
    chemicalControlHi: ['डायफेनथियूरॉन 50% WP @ 1.25 ग्राम/लीटर', 'स्पाइरोमेसिफेन 22.9% SC @ 1 मिली/लीटर'],
    preventiveMeasuresHi: 'खेत के आसपास गाजर घास व खरपतवार नष्ट करें।'
  },

  'cotton mealy bug': {
    nameEn: 'Cotton Mealybug Infestation',
    nameHi: 'कपास का मिलीबग (चिपचिपा कीट)',
    cropEn: 'Cotton',
    cropHi: 'कपास (नरमा)',
    categoryEn: 'Pest Infestation',
    categoryHi: 'कीट प्रकोप',
    severity: 'Severe',
    symptomsHi: 'शाखाओं और टिंडों पर सफेद मोमी पाउडर जैसे कीड़ों का मोटा झुंड; पत्तियों का सूखना और झड़ना।',
    immediateActionHi: 'प्रोफेनोफॉस + साइपरमेथ्रिन या क्लोरपायरीफॉस का तेज धार से छिड़काव करें।',
    recommendationsHi: ['⚡ प्रोफेनोफॉस 50% EC @ 2.5 मिली/लीटर के साथ 1 मिली सर्फ/स्टिकर मिलाकर स्प्रे करें।'],
    organicControlHi: ['क्रिप्टोलेमस लेडीबर्ड बीटल मित्र कीट छोड़ें।'],
    chemicalControlHi: ['प्रोफेनोफॉस 50% EC @ 2.5 मिली/लीटर', 'ब्यूप्रोफेज़िन 25% SC @ 2 मिली/लीटर'],
    preventiveMeasuresHi: 'खेत की मेड़ों को खरपतवार मुक्त रखें।'
  },

  'cotton alternaria leaf spot': {
    nameEn: 'Cotton Alternaria Leaf Spot',
    nameHi: 'कपास का अल्टरनेरिया पत्ती धब्बा',
    cropEn: 'Cotton',
    cropHi: 'कपास (नरमा)',
    categoryEn: 'Fungal Disease',
    categoryHi: 'फफूंद जनित रोग',
    severity: 'Moderate',
    symptomsHi: 'पत्तियों पर संकेंद्रित छल्लों (कंसेंट्रिक रिंग्स) वाले भूरे-लाल गोल धब्बे; पत्तियां पीली होकर गिरना।',
    immediateActionHi: 'मैनकोज़ेब 75% WP @ 2.5 ग्राम/लीटर या कॉपर ऑक्सीक्लोराइड स्प्रे करें।',
    recommendationsHi: ['⚡ मैनकोज़ेब 75% WP @ 2.5 ग्राम/लीटर या एज़ोक्सीस्ट्रोबिन 23% SC @ 1 मिली/लीटर का छिड़काव करें।'],
    organicControlHi: ['ट्राइकोडर्मा विरिडी @ 5 ग्राम/लीटर'],
    chemicalControlHi: ['मैनकोज़ेब 75% WP @ 2.5 ग्राम/लीटर', 'प्रोपिकोनाज़ोल 25% EC @ 1 मिली/लीटर'],
    preventiveMeasuresHi: 'पोटाश खाद की पर्याप्त मात्रा दें।'
  },

  'cotton fusarium wilt': {
    nameEn: 'Cotton Fusarium Wilt',
    nameHi: 'कपास का फ्यूजेरियम उकठा (मुरझान रोग)',
    cropEn: 'Cotton',
    cropHi: 'कपास (नरमा)',
    categoryEn: 'Soil-borne Fungal Disease',
    categoryHi: 'मृदा जनित कवक रोग',
    severity: 'Critical',
    symptomsHi: 'पौधे की पत्तियां एक तरफ से पीली होकर मुरझाना; तने को चीरने पर अंदर की नसें भूरी/काली दिखना।',
    immediateActionHi: 'कार्बेंडाजिम 50% WP @ 2 ग्राम/लीटर से जड़ क्षेत्र में ड्रेंचिंग (सिंचाई) करें।',
    recommendationsHi: ['⚡ कार्बेंडाजिम 50% WP @ 2 ग्राम/लीटर की दर से पौधों की जड़ों में पानी डालें (Drenching)।'],
    organicControlHi: ['गोबर की खाद में ट्राइकोडर्मा मिलाकर प्रति एकड़ 250 किग्रा मिट्टी में मिलाएं।'],
    chemicalControlHi: ['कार्बेंडाजिम 50% WP @ 2 ग्राम/लीटर', 'थायोफैनेट-मिथाइल 70% WP @ 1.5 ग्राम/लीटर'],
    preventiveMeasuresHi: 'उकठा-रोधी किस्मों की बुवाई करें और मक्का/ज्वार के साथ फसल चक्र अपनाएं।'
  },

  'cotton verticillium wilt': {
    nameEn: 'Cotton Verticillium Wilt',
    nameHi: 'कपास का वर्टिसिलियम विल्ट',
    cropEn: 'Cotton',
    cropHi: 'कपास (नरमा)',
    categoryEn: 'Vascular Fungal Disease',
    categoryHi: 'संवहनी कवक रोग',
    severity: 'Critical',
    symptomsHi: 'पत्तियों की शिराओं के बीच पीलापन (टाइगर-स्ट्राइप पैटर्न); पौधे का सूखकर पत्तियां गिराना।',
    immediateActionHi: 'जलजमाव रोकें और पोटेशियम खाद के साथ कवकनाशी ड्रेंचिंग करें।',
    recommendationsHi: ['⚡ थायोफैनेट मिथाइल @ 1.5 ग्राम/लीटर जड़ ड्रेंचिंग करें और पोटाश खाद दें।'],
    organicControlHi: ['नीम की खली @ 200 किग्रा/एकड़ मिट्टी में मिलाएं।'],
    chemicalControlHi: ['थायोफैनेट-मिथाइल 70% WP @ 1.5 ग्राम/लीटर'],
    preventiveMeasuresHi: 'खेत में पानी का निकास सुगम रखें।'
  },

  'bacterial_blight in cotton': {
    nameEn: 'Bacterial Blight of Cotton (Black Arm)',
    nameHi: 'कपास का जीवाणु झुलसा (ब्लैक आर्म रोग)',
    cropEn: 'Cotton',
    cropHi: 'कपास (नरमा)',
    categoryEn: 'Bacterial Disease',
    categoryHi: 'जीवाणु (बैक्टीरियल) रोग',
    severity: 'Severe',
    symptomsHi: 'पत्तियों पर कोणीय जलीय धब्बे (एंगुलर लीफ स्पॉट); तनों और शाखाओं पर काले घाव (ब्लैक आर्म)।',
    immediateActionHi: 'स्ट्रेप्टोसाइक्लिन + कॉपर ऑक्सीक्लोराइड का तुरंत स्प्रे करें।',
    recommendationsHi: ['⚡ स्ट्रेप्टोसाइक्लिन @ 1 ग्राम (1 पाउच) + कॉपर ऑक्सीक्लोराइड 50% WP @ 25 ग्राम प्रति 10 लीटर पानी में मिलाकर स्प्रे करें।'],
    organicControlHi: ['स्यूडोमोनास फ्लोरोसेंस @ 5 ग्राम/लीटर का फोलियर स्प्रे।'],
    chemicalControlHi: ['कॉपर ऑक्सीक्लोराइड 50% WP @ 2.5-3 ग्राम/लीटर', 'स्ट्रेप्टोसाइक्लिन @ 0.1 ग्राम/लीटर'],
    preventiveMeasuresHi: 'प्रमाणित रोगमुक्त बीजों का उपयोग करें।'
  },

  'bollrot on cotton': {
    nameEn: 'Cotton Boll Rot Complex',
    nameHi: 'कपास का टिंडा सड़न रोग (बॉल रॉट)',
    cropEn: 'Cotton',
    cropHi: 'कपास (नरमा)',
    categoryEn: 'Fungal Disease',
    categoryHi: 'फफूंद जनित रोग',
    severity: 'High',
    symptomsHi: 'टिंडों पर भूरे-काले धब्बे; टिंडों का सड़ना और अंदर का रेशा बदरंग व खराब होना।',
    immediateActionHi: 'कॉपर ऑक्सीक्लोराइड + कार्बेन्डाजिम का छिड़काव करें और खेत में हवा का संचार बढ़ाएं।',
    recommendationsHi: ['⚡ कॉपर हाइड्रोक्साइड 53.8% DF @ 2 ग्राम/लीटर या कार्बेन्डाजिम 12% + मैनकोज़ेब 63% WP @ 2 ग्राम/लीटर स्प्रे करें।'],
    organicControlHi: ['ट्राइकोडर्मा विरिडी @ 5 ग्राम/लीटर'],
    chemicalControlHi: ['कॉपर ऑक्सीक्लोराइड 50% WP @ 3 ग्राम/लीटर', 'कैब्रियो टॉप (पायराक्लोस्ट्रोबिन + मेटीराम) @ 2 ग्राम/लीटर'],
    preventiveMeasuresHi: 'पौधों की अत्यधिक घनी शाखाओं की छंटाई करें।'
  },

  'healthy cotton': {
    nameEn: 'Healthy Cotton Crop',
    nameHi: 'रोगमुक्त एवं स्वस्थ कपास',
    cropEn: 'Cotton',
    cropHi: 'कपास (नरमा)',
    categoryEn: 'Healthy Crop',
    categoryHi: 'रोगमुक्त फसल',
    severity: 'None',
    symptomsHi: 'कपास के पौधे और पत्तियां पूर्ण स्वस्थ हैं। कोई कीट या रोग के लक्षण नहीं हैं।',
    immediateActionHi: 'वर्तमान पोषण और सिंचाई प्रबंधन जारी रखें।',
    recommendationsHi: ['✅ फसल स्वस्थ है — नियमित निगरानी बनाए रखें और अनावश्यक कीटनाशक न डालें।'],
    organicControlHi: ['नियमित जैविक खाद व नीम अर्क का उपयोग करें।'],
    chemicalControlHi: ['किसी भी रासायनिक दवा की आवश्यकता नहीं है।'],
    preventiveMeasuresHi: 'साप्ताहिक रूप से सुंडी और रस चूसक कीटों के लिए स्काउटिंग करें।'
  },

  // ── Rice Classes ──
  'becterial blight in rice': {
    nameEn: 'Bacterial Blight of Rice (Kresek)',
    nameHi: 'धान का जीवाणु झुलसा (बैक्टीरियल ब्लाइट / क्रेसेक)',
    cropEn: 'Rice',
    cropHi: 'धान (चावल)',
    categoryEn: 'Bacterial Disease',
    categoryHi: 'जीवाणु (बैक्टीरियल) रोग',
    severity: 'Critical',
    symptomsHi: 'पत्तियों के किनारों से शुरू होकर लहरदार पीले-सफेद सूखने वाले धब्बे; सुबह के समय पत्तियों पर जीवाणु की बूंदें (बैक्टीरियल ऊज)।',
    immediateActionHi: 'खेत से अतिरिक्त पानी निकालें, यूरिया देना तुरंत बंद करें और स्ट्रेप्टोसाइक्लिन + कॉपर स्प्रे करें।',
    recommendationsHi: [
      '⚡ स्ट्रेप्टोसाइक्लिन @ 1.5 ग्राम + कॉपर ऑक्सीक्लोराइड 50% WP @ 25 ग्राम प्रति 10 लीटर पानी स्प्रे करें।',
      '📋 खेत में यूरिया का टॉप-ड्रेसिंग तुरंत रोकें और पोटाश 15-20 किग्रा/एकड़ दें।'
    ],
    organicControlHi: ['स्यूडोमोनास फ्लोरोसेंस @ 5 ग्राम/लीटर'],
    chemicalControlHi: ['स्ट्रेप्टोसाइक्लिन @ 0.15 ग्राम/लीटर + COC @ 2.5 ग्राम/लीटर'],
    preventiveMeasuresHi: 'जलजमाव से बचें और संतुलित एनपीके (NPK) डालें।'
  },

  'rice blast': {
    nameEn: 'Rice Blast (Leaf / Neck Blast)',
    nameHi: 'धान का झोंका रोग (राइस ब्लास्ट)',
    cropEn: 'Rice',
    cropHi: 'धान (चावल)',
    categoryEn: 'Fungal Disease',
    categoryHi: 'फफूंद जनित रोग',
    severity: 'Critical',
    symptomsHi: 'पत्तियों पर नाव या आंख के आकार के भूरे-धूसर धब्बे; बाली की गर्दन का काला पड़कर टूटना (नेक ब्लास्ट)।',
    immediateActionHi: 'ट्राइसाइक्लाज़ोल 75% WP @ 0.6 ग्राम प्रति लीटर पानी का छिड़काव तुरंत करें।',
    recommendationsHi: [
      '⚡ ट्राइसाइक्लाज़ोल 75% WP (बिम/बाण) @ 0.6 ग्राम/लीटर या इसोप्रोथियोलेन 40% EC @ 1.5 मिली/लीटर स्प्रे करें।',
      '📋 बाली निकलने की अवस्था पर दूसरा स्प्रे 10-12 दिन बाद अवश्य करें।'
    ],
    organicControlHi: ['स्यूडोमोनास फ्लोरोसेंस @ 10 ग्राम/लीटर'],
    chemicalControlHi: ['ट्राइसाइक्लाज़ोल 75% WP @ 0.6 ग्राम/लीटर', 'एज़ोक्सीस्ट्रोबिन 18.2% + डिफेनोकोनाज़ोल 11.4% SC @ 1 मिली/लीटर'],
    preventiveMeasuresHi: 'ब्लास्ट प्रतिरोधी किस्में लगाएं और अत्यधिक नाइट्रोजन से बचें।'
  },

  'brownspot': {
    nameEn: 'Brown Spot of Rice',
    nameHi: 'धान का भूरा धब्बा रोग (ब्राउन स्पॉट)',
    cropEn: 'Rice',
    cropHi: 'धान (चावल)',
    categoryEn: 'Fungal Disease',
    categoryHi: 'फफूंद जनित रोग',
    severity: 'Moderate',
    symptomsHi: 'पत्तियों और दानों पर तिल के आकार के गहरे भूरे गोल/अंडाकार धब्बे; पोषक तत्वों की कमी से बढ़ना।',
    immediateActionHi: 'मैनकोज़ेब या प्रोपिकोनाज़ोल का छिड़काव करें और खेत में पोटाश व जिंक खाद दें।',
    recommendationsHi: ['⚡ मैनकोज़ेब 75% WP @ 2.5 ग्राम/लीटर या एडिफेनफॉस 50% EC @ 1 मिली/लीटर स्प्रे करें।'],
    organicControlHi: ['ट्राइकोडर्मा विरिडी @ 5 ग्राम/लीटर'],
    chemicalControlHi: ['मैनकोज़ेब 75% WP @ 2.5 ग्राम/लीटर', 'प्रोपिकोनाज़ोल 25% EC @ 1 मिली/लीटर'],
    preventiveMeasuresHi: 'खेत में जिंक और पोटाश की कमी पूरी करें।'
  },

  'leaf smut': {
    nameEn: 'Leaf Smut of Rice',
    nameHi: 'धान का पत्ती कंडुआ रोग (लीफ स्मट)',
    cropEn: 'Rice',
    cropHi: 'धान (चावल)',
    categoryEn: 'Fungal Disease',
    categoryHi: 'फफूंद जनित रोग',
    severity: 'Moderate',
    symptomsHi: 'पत्तियों पर छोटे, उभरे हुए काले कोणीय धब्बे; पत्तियां पीली पड़कर सूखना।',
    immediateActionHi: 'कॉपर ऑक्सीक्लोराइड या कार्बेन्डाजिम का छिड़काव करें।',
    recommendationsHi: ['⚡ कॉपर ऑक्सीक्लोराइड 50% WP @ 2.5 ग्राम/लीटर का स्प्रे करें।'],
    organicControlHi: ['गोमूत्र व नीम अर्क का छिड़काव।'],
    chemicalControlHi: ['कॉपर ऑक्सीक्लोराइड 50% WP @ 2.5 ग्राम/लीटर', 'हेक्साकोनाज़ोल 5% EC @ 2 मिली/लीटर'],
    preventiveMeasuresHi: 'प्रमाणित बीज का उपयोग करें।'
  },

  'tungro': {
    nameEn: 'Rice Tungro Disease (RTD)',
    nameHi: 'धान का टुंग्रो विषाणु रोग',
    cropEn: 'Rice',
    cropHi: 'धान (चावल)',
    categoryEn: 'Viral Disease',
    categoryHi: 'विषाणु (वायरस) रोग',
    severity: 'Severe',
    symptomsHi: 'पौधों का बौना रह जाना; पत्तियों का सिरे से नारंगी-पीला पड़ना; कल्लों की संख्या बहुत कम होना।',
    immediateActionHi: 'रोग फैलाने वाले हरे फुदके (Green Leafhopper) कीट को नियंत्रित करें।',
    recommendationsHi: ['⚡ थायमेथोक्सम 25% WG @ 0.5 ग्राम/लीटर या डिनोटेफ्यूरॉन 20% SG @ 0.4 ग्राम/लीटर का छिड़काव करें।'],
    organicControlHi: ['नीम तेल 10000 ppm @ 3 मिली/लीटर'],
    chemicalControlHi: ['थायमेथोक्सम 25% WG @ 0.5 ग्राम/लीटर', 'डिनोटेफ्यूरॉन 20% SG @ 0.4 ग्राम/लीटर'],
    preventiveMeasuresHi: 'हरा फुदका कीट दिखने पर तुरंत नियंत्रण करें।'
  },

  // ── Maize Classes ──
  'common_rust': {
    nameEn: 'Common Rust of Maize',
    nameHi: 'मक्का का साधारण रतुआ (कॉमन रस्ट)',
    cropEn: 'Maize (Corn)',
    cropHi: 'मक्का',
    categoryEn: 'Fungal Disease',
    categoryHi: 'फफूंद जनित रोग',
    severity: 'Moderate',
    symptomsHi: 'पत्तियों के दोनों तरफ उभरे हुए सुनहरे-भूरे से लाल रंग के फफोले (पस्ट्यूल्स); पत्ती का समय से पहले सूखना।',
    immediateActionHi: 'मैनकोज़ेब या एज़ोक्सीस्ट्रोबिन का छिड़काव करें।',
    recommendationsHi: ['⚡ मैनकोज़ेब 75% WP @ 2.5 ग्राम/लीटर या एज़ोक्सीस्ट्रोबिन 23% SC @ 1 मिली/लीटर स्प्रे करें।'],
    organicControlHi: ['ट्राइकोडर्मा विरिडी @ 5 ग्राम/लीटर'],
    chemicalControlHi: ['मैनकोज़ेब 75% WP @ 2.5 ग्राम/लीटर', 'प्रोपिकोनाज़ोल 25% EC @ 1 मिली/लीटर'],
    preventiveMeasuresHi: 'रतुआ प्रतिरोधी संकर मक्का किस्में लगाएं।'
  },

  'gray_leaf_spot': {
    nameEn: 'Gray Leaf Spot (GLS) of Maize',
    nameHi: 'मक्का का धूसर पत्ती धब्बा (ग्रे लीफ स्पॉट)',
    cropEn: 'Maize (Corn)',
    cropHi: 'मक्का',
    categoryEn: 'Fungal Disease',
    categoryHi: 'फफूंद जनित रोग',
    severity: 'High',
    symptomsHi: 'पत्तियों की शिराओं के बीच आयताकार धूसर-भूरे धब्बे (रेक्टेंगुलर लीजंस); प्रकाश संश्लेषण कम होना।',
    immediateActionHi: 'पायराक्लोस्ट्रोबिन या टेबुकोनाज़ोल का स्प्रे करें।',
    recommendationsHi: ['⚡ पायराक्लोस्ट्रोबिन 20% WG @ 1 ग्राम/लीटर या टेबुकोनाज़ोल 25.9% EC @ 1.25 मिली/लीटर स्प्रे करें।'],
    organicControlHi: ['ट्राइकोडर्मा हरज़ियानम @ 5 ग्राम/लीटर'],
    chemicalControlHi: ['पायराक्लोस्ट्रोबिन 20% WG @ 1 ग्राम/लीटर', 'एज़ोक्सीस्ट्रोबिन + डिफेनोकोनाज़ोल @ 1 मिली/लीटर'],
    preventiveMeasuresHi: 'गहरी जुताई कर फसल अवशेषों को नष्ट करें।'
  },

  'maize fall armyworm': {
    nameEn: 'Maize Fall Armyworm (FAW)',
    nameHi: 'मक्का का फॉल आर्मीवॉर्म (सैनिक सुंडी)',
    cropEn: 'Maize (Corn)',
    cropHi: 'मक्का',
    categoryEn: 'Pest Infestation',
    categoryHi: 'कीट प्रकोप',
    severity: 'Critical',
    symptomsHi: 'मक्का की पोंगी (Whorl) में सुंडी द्वारा पत्तियों को छलनी करना; पोंगी में भारी मात्रा में लकड़ी के बुरादे जैसा मल।',
    immediateActionHi: 'पोंगी (Whorl) के अंदर सीधे क्लोरेंट्रानिलिप्रोल या स्पिनोटोराम का स्प्रे करें।',
    recommendationsHi: [
      '⚡ कोराजन (क्लोरेंट्रानिलिप्रोल 18.5% SC) @ 0.4 मिली/लीटर या स्पिनोटोराम 11.7% SC @ 0.5 मिली/लीटर सीधे पोंगी में डालें।',
      '📋 खेत में 4-6 फेरोमोन ट्रैप प्रति एकड़ लगाएं।'
    ],
    organicControlHi: ['पोंगी में सूखी छनी हुई रेत/राख में थोड़ा चूना मिलाकर डालें।', 'Bt कुरस्टाकी @ 2 ग्राम/लीटर'],
    chemicalControlHi: ['क्लोरेंट्रानिलिप्रोल 18.5% SC @ 0.4 मिली/लीटर', 'स्पिनोटोराम 11.7% SC @ 0.5 मिली/लीटर'],
    preventiveMeasuresHi: 'सामूहिक रूप से समय पर बुवाई करें और शुरुआत से ही निगरानी रखें।'
  },

  'healthy maize': {
    nameEn: 'Healthy Maize Crop',
    nameHi: 'रोगमुक्त एवं स्वस्थ मक्का',
    cropEn: 'Maize (Corn)',
    cropHi: 'मक्का',
    categoryEn: 'Healthy Crop',
    categoryHi: 'रोगमुक्त फसल',
    severity: 'None',
    symptomsHi: 'मक्का की फसल पूर्ण रूप से स्वस्थ और मजबूत है। पोंगी व पत्तियों पर कोई कीट या रोग नहीं है।',
    immediateActionHi: 'वर्तमान पोषण और जल प्रबंधन जारी रखें।',
    recommendationsHi: ['✅ मक्का की फसल स्वस्थ है — किसी भी कीटनाशक की आवश्यकता नहीं है।'],
    organicControlHi: ['जीवामृत व जैविक खाद का उपयोग जारी रखें।'],
    chemicalControlHi: ['कोई रासायनिक दवा न डालें।'],
    preventiveMeasuresHi: 'भुट्टा बनते समय खेत में नमी की कमी न होने दें।'
  },

  // ── Sugarcane Classes ──
  'redrot sugarcane': {
    nameEn: 'Sugarcane Red Rot ("Cancer of Sugarcane")',
    nameHi: 'गन्ने का लाल सड़न रोग (रेड रॉट / गन्ने का कैंसर)',
    cropEn: 'Sugarcane',
    cropHi: 'गन्ना',
    categoryEn: 'Fungal Disease',
    categoryHi: 'फफूंद जनित रोग',
    severity: 'Critical',
    symptomsHi: 'तीसरी-चौथी पत्ती का पीला पड़कर सूखना; तने को लंबाई में फाड़ने पर अंदर का गूदा लाल दिखना और सफेद आड़ी पट्टियां; शराब जैसी खट्टी बदबू।',
    immediateActionHi: 'संक्रमित गन्नों को जड़ सहित उखाड़कर जलाएं और उस थाले में ब्लीचिंग पाउडर या कार्बेंडाजिम डालें।',
    recommendationsHi: [
      '⚡ संक्रमित थूम्हों को खेत से बाहर निकालकर जलाएं।',
      '📋 कार्बेन्डाजिम 50% WP @ 2 ग्राम/लीटर से जड़ क्षेत्र में ड्रेंचिंग करें।',
      '📋 रोगग्रस्त खेत से पेड़ी (Ratoon) फसल न लें और अगली बार गैर-घास फसल लगाएं।'
    ],
    organicControlHi: ['ट्राइकोडर्मा विरिडी से समृद्ध सड़ी गोबर की खाद @ 500 किग्रा/एकड़ मिट्टी में मिलाएं।'],
    chemicalControlHi: ['कार्बेन्डाजिम 50% WP @ 2 ग्राम/लीटर (टुकड़ा उपचार व ड्रेंचिंग)', 'थायोफैनेट मिथाइल @ 1.5 ग्राम/लीटर'],
    preventiveMeasuresHi: 'रेड रॉट रोधी गन्ने की किस्में (जैसे Co 0238 के स्थान पर Co 0118, Co 15023) लगाएं और गर्म जल उपचारित बीज का प्रयोग करें।'
  },

  'mosaic sugarcane': {
    nameEn: 'Sugarcane Mosaic Disease',
    nameHi: 'गन्ने का मोज़ेक विषाणु रोग',
    cropEn: 'Sugarcane',
    cropHi: 'गन्ना',
    categoryEn: 'Viral Disease',
    categoryHi: 'विषाणु (वायरस) रोग',
    severity: 'Moderate',
    symptomsHi: 'पत्तियों पर गहरे और हल्के हरे रंग के चितकबरे धब्बे व धारियां; पौधे का बौना रह जाना।',
    immediateActionHi: 'रोग फैलाने वाले एफिड कीट का नियंत्रण करें और रोगमुक्त बीज टुकड़ों का ही उपयोग करें।',
    recommendationsHi: ['⚡ इमिडाक्लोप्रिड 17.8% SL @ 0.5 मिली/लीटर स्प्रे कर वाहक कीट को रोकें।'],
    organicControlHi: ['नीम अर्क 5%'],
    chemicalControlHi: ['इमिडाक्लोप्रिड 17.8% SL @ 0.5 मिली/लीटर', 'थायमेथोक्सम 25% WG @ 0.5 ग्राम/लीटर'],
    preventiveMeasuresHi: 'रोगमुक्त नर्सरी से प्रमाणित बीज टुकड़े ही बोएं।'
  },

  'sugarcane healthy': {
    nameEn: 'Healthy Sugarcane Crop',
    nameHi: 'रोगमुक्त एवं स्वस्थ गन्ना',
    cropEn: 'Sugarcane',
    cropHi: 'गन्ना',
    categoryEn: 'Healthy Crop',
    categoryHi: 'रोगमुक्त फसल',
    severity: 'None',
    symptomsHi: 'गन्ने की पत्तियां और तने पूर्ण स्वस्थ व ओजस्वी हैं। कोई रोग नहीं है।',
    immediateActionHi: 'संतुलित सिंचाई और मिट्टी चढ़ाने का कार्य समय पर करें।',
    recommendationsHi: ['✅ गन्ने की फसल स्वस्थ है — नियमित प्रबंधन जारी रखें।'],
    organicControlHi: ['जैविक पोषण जारी रखें।'],
    chemicalControlHi: ['कोई रासायनिक दवा आवश्यक नहीं।'],
    preventiveMeasuresHi: 'नियमित रूप से तना छेदक और लाल सड़न के लिए खेत का निरीक्षण करें।'
  },

  // ── Potato & Tomato Classes ──
  'potato early blight': {
    nameEn: 'Potato Early Blight',
    nameHi: 'आलू का अगेती झुलसा (अर्ली ब्लाइट)',
    cropEn: 'Potato',
    cropHi: 'आलू',
    categoryEn: 'Fungal Disease',
    categoryHi: 'फफूंद जनित रोग',
    severity: 'Moderate',
    symptomsHi: 'निचली पत्तियों पर संकेंद्रित छल्लों (टारगेट बोर्ड पैटर्न) वाले भूरे-काले धब्बे; पत्तियां पीली होकर सूखना।',
    immediateActionHi: 'मैनकोज़ेब 75% WP @ 2.5 ग्राम/लीटर का सुरक्षात्मक छिड़काव करें।',
    recommendationsHi: ['⚡ मैनकोज़ेब 75% WP @ 2.5 ग्राम/लीटर या क्लोरोथैलोनिल 75% WP @ 2 ग्राम/लीटर का स्प्रे करें।'],
    organicControlHi: ['ट्राइकोडर्मा विरिडी @ 5 ग्राम/लीटर'],
    chemicalControlHi: ['मैनकोज़ेब 75% WP @ 2.5 ग्राम/लीटर', 'डिफेनोकोनाज़ोल 25% EC @ 1 मिली/लीटर'],
    preventiveMeasuresHi: 'खेत में संतुलित पोटाश खाद दें।'
  },

  'potato late blight': {
    nameEn: 'Potato Late Blight',
    nameHi: 'आलू का पछेती झुलसा (लेट ब्लाइट)',
    cropEn: 'Potato',
    cropHi: 'आलू',
    categoryEn: 'Fungal Disease',
    categoryHi: 'फफूंद जनित रोग',
    severity: 'Critical',
    symptomsHi: 'पत्तियों के किनारों पर पानी से भीगे भूरे-काले धब्बे; पत्ती के नीचे सफेद फफूंद; कंदों का अंदर से सड़ना।',
    immediateActionHi: 'मौसम में कोहरा/बादल होने पर तुरंत साइमोक्सानिल + मैनकोज़ेब या रिडोमिल का स्प्रे करें।',
    recommendationsHi: [
      '⚡ साइमोक्सानिल 8% + मैनकोज़ेब 64% WP (कर्जेट) @ 2.5 ग्राम/लीटर या मेटलॉक्सिल + मैनकोज़ेब (रिडोमिल) @ 2.5 ग्राम/लीटर स्प्रे करें।',
      '📋 7-10 दिन के अंतराल पर दवा बदलकर दूसरा स्प्रे करें।'
    ],
    organicControlHi: ['कॉपर सल्फेट + चूना (बोर्डो मिश्रण 1%)'],
    chemicalControlHi: ['मेटालैक्सिल 8% + मैनकोज़ेब 64% WP @ 2.5 ग्राम/लीटर', 'डाइमेथोमॉर्फ 50% WP @ 1 ग्राम/लीटर'],
    preventiveMeasuresHi: 'रोग-प्रतिरोधी किस्में (कुफरी पुखराज, कुफरी ज्योति) लगाएं।'
  },

  'potato healthy': {
    nameEn: 'Healthy Potato Crop',
    nameHi: 'रोगमुक्त एवं स्वस्थ आलू',
    cropEn: 'Potato',
    cropHi: 'आलू',
    categoryEn: 'Healthy Crop',
    categoryHi: 'रोगमुक्त फसल',
    severity: 'None',
    symptomsHi: 'आलू के पौधे पूर्ण रूप से स्वस्थ और हरे-भरे हैं।',
    immediateActionHi: 'नियमित मिट्टी चढ़ाना और हल्की सिंचाई जारी रखें।',
    recommendationsHi: ['✅ आलू की फसल एकदम स्वस्थ है — कोई कीटनाशक न डालें।'],
    organicControlHi: ['जैविक खाद जारी रखें।'],
    chemicalControlHi: ['रासायनिक दवा की आवश्यकता नहीं।'],
    preventiveMeasuresHi: 'कोहरे के मौसम में लेट ब्लाइट के लिए सतर्क रहें।'
  },

  'tomato early blight': {
    nameEn: 'Tomato Early Blight',
    nameHi: 'टमाटर का अगेती झुलसा (अर्ली ब्लाइट)',
    cropEn: 'Tomato',
    cropHi: 'टमाटर',
    categoryEn: 'Fungal Disease',
    categoryHi: 'फफूंद जनित रोग',
    severity: 'Moderate',
    symptomsHi: 'पत्तियों पर संकेंद्रित छल्लों वाले भूरे धब्बे; फलों पर डंठल के पास काले धंसे हुए धब्बे।',
    immediateActionHi: 'मैनकोज़ेब या एज़ोक्सीस्ट्रोबिन का छिड़काव करें।',
    recommendationsHi: ['⚡ मैनकोज़ेब 75% WP @ 2.5 ग्राम/लीटर या एज़ोक्सीस्ट्रोबिन 23% SC @ 1 मिली/लीटर स्प्रे करें।'],
    organicControlHi: ['ट्राइकोडर्मा विरिडी @ 5 ग्राम/लीटर'],
    chemicalControlHi: ['मैनकोज़ेब 75% WP @ 2.5 ग्राम/लीटर', 'डिफेनोकोनाज़ोल 25% EC @ 0.5 मिली/लीटर'],
    preventiveMeasuresHi: 'निचली रोगग्रस्त पत्तियों को तोड़कर खेत से दूर फेंकें।'
  },

  'tomato late blight': {
    nameEn: 'Tomato Late Blight',
    nameHi: 'टमाटर का पछेती झुलसा (लेट ब्लाइट)',
    cropEn: 'Tomato',
    cropHi: 'टमाटर',
    categoryEn: 'Fungal Disease',
    categoryHi: 'फफूंद जनित रोग',
    severity: 'Critical',
    symptomsHi: 'पत्तियों पर बड़े काले जलीय धब्बे; फलों पर भूरे कड़े चकत्ते; पौधे का तेजी से झुलसना।',
    immediateActionHi: 'मेटालैक्सिल + मैनकोज़ेब (रिडोमिल गोल्ड) का तुरंत छिड़काव करें।',
    recommendationsHi: ['⚡ मेटलॉक्सिल 8% + मैनकोज़ेब 64% WP @ 2.5 ग्राम/लीटर का स्प्रे करें।'],
    organicControlHi: ['बोर्डो मिश्रण (1%)'],
    chemicalControlHi: ['मेटालैक्सिल 8% + मैनकोज़ेब 64% WP @ 2.5 ग्राम/लीटर', 'साइमोक्सानिल + मैनकोज़ेब @ 2.5 ग्राम/लीटर'],
    preventiveMeasuresHi: 'पौधों को सहारा (Staking) दें ताकि पत्तियां जमीन को न छुएं।'
  },

  'tomato yellow leaf curl virus': {
    nameEn: 'Tomato Yellow Leaf Curl Virus (TYLCV)',
    nameHi: 'टमाटर का पीला पत्ती मरोड़ (लीफ कर्ल वायरस)',
    cropEn: 'Tomato',
    cropHi: 'टमाटर',
    categoryEn: 'Viral Disease',
    categoryHi: 'विषाणु (वायरस) रोग',
    severity: 'Critical',
    symptomsHi: 'पत्तियों का ऊपर की ओर मुड़ना (प्यालेनुमा); पत्तियां पीली व छोटी होना; पौधे का झाड़ीनुमा बौना हो जाना।',
    immediateActionHi: 'सफेद मक्खी (Whitefly) कीट का तुरंत नियंत्रण करें और अत्यधिक बीमार पौधों को उखाड़कर नष्ट करें।',
    recommendationsHi: [
      '⚡ डायफेनथियूरॉन 50% WP @ 1.25 ग्राम/लीटर या स्पाइरोमेसिफेन 22.9% SC @ 1 मिली/लीटर स्प्रे करें।',
      '📋 पीले चिपचिपे ट्रैप @ 15 प्रति एकड़ लगाएं।'
    ],
    organicControlHi: ['नीम तेल 10000 ppm @ 3 मिली/लीटर'],
    chemicalControlHi: ['डायफेनथियूरॉन 50% WP @ 1.25 ग्राम/लीटर', 'थायमेथोक्सम 25% WG @ 0.5 ग्राम/लीटर'],
    preventiveMeasuresHi: 'नर्सरी को 40-मेष की नेट जाली से ढककर पौधे तैयार करें।'
  },

  'tomato healthy': {
    nameEn: 'Healthy Tomato Crop',
    nameHi: 'रोगमुक्त एवं स्वस्थ टमाटर',
    cropEn: 'Tomato',
    cropHi: 'टमाटर',
    categoryEn: 'Healthy Crop',
    categoryHi: 'रोगमुक्त फसल',
    severity: 'None',
    symptomsHi: 'टमाटर के पौधे स्वस्थ हैं। पत्तियां व फूल पूर्ण रूप से रोगमुक्त हैं।',
    immediateActionHi: 'संतुलित ड्रिप सिंचाई और सहारा (Staking) प्रबंधन जारी रखें।',
    recommendationsHi: ['✅ टमाटर की फसल स्वस्थ है — अनावश्यक स्प्रे न करें।'],
    organicControlHi: ['नियमित जैविक खाद जारी रखें।'],
    chemicalControlHi: ['कोई रासायनिक दवा आवश्यक नहीं।'],
    preventiveMeasuresHi: 'फल छेदक सुंडी और रस चूसक कीटों की साप्ताहिक निगरानी रखें।'
  },

  // ── Generic & Fallback Diseases ──
  'leaf blight': {
    nameEn: 'Leaf Blight Disease',
    nameHi: 'पत्ती झुलसा रोग',
    cropEn: 'Field Crop',
    cropHi: 'खेत की फसल',
    categoryEn: 'Fungal Disease',
    categoryHi: 'फफूंद जनित रोग',
    severity: 'High',
    symptomsHi: 'पत्तियों पर भूरे-काले झुलसे हुए धब्बे; पत्तियां किनारों से सूखने लगती हैं।',
    immediateActionHi: 'मैनकोज़ेब 75% WP @ 2.5 ग्राम/लीटर का छिड़काव करें।',
    recommendationsHi: [
      '⚡ तुरंत उपाय: मैनकोज़ेब 75% WP @ 2.5 ग्राम प्रति लीटर पानी का छिड़काव करें।',
      '📋 दिन 1-3: गंभीर रूप से संक्रमित निचली पत्तियों को हटाकर नष्ट करें।',
      '📋 दिन 7: 7 दिन बाद कार्बेन्डाजिम 50% WP @ 1 ग्राम/लीटर का दूसरा स्प्रे करें।'
    ],
    organicControlHi: ['ट्राइकोडर्मा विरिडी @ 5 ग्राम/लीटर', 'नीम अर्क 5%'],
    chemicalControlHi: ['मैनकोज़ेब 75% WP @ 2.5 ग्राम/लीटर', 'कार्बेन्डाजिम 50% WP @ 1 ग्राम/लीटर'],
    preventiveMeasuresHi: 'खेत में पौधों के बीच पर्याप्त दूरी रखें ताकि हवा का आवागमन बना रहे।'
  },

  'powdery mildew': {
    nameEn: 'Powdery Mildew Disease',
    nameHi: 'चूर्णिल आसिता (पाउडरी मिल्ड्यू)',
    cropEn: 'Field Crop',
    cropHi: 'खेत की फसल',
    categoryEn: 'Fungal Disease',
    categoryHi: 'फफूंद जनित रोग',
    severity: 'Moderate',
    symptomsHi: 'पत्तियों और तने पर सफेद पाउडर जैसी फफूंद की परत; पत्तियों का पीला पड़ना।',
    immediateActionHi: 'घुलनशील सल्फर 80% WP या हेक्साकोनाज़ोल का छिड़काव करें।',
    recommendationsHi: [
      '⚡ घुलनशील सल्फर 80% WP @ 3 ग्राम प्रति लीटर पानी स्प्रे करें।',
      '📋 हेक्साकोनाज़ोल 5% EC @ 2 मिली/लीटर का छिड़काव 7 दिन बाद दोहराएं।'
    ],
    organicControlHi: ['सल्फर चूर्ण (Dust) @ 8-10 किग्रा/एकड़', 'खट्टी छाछ (5%) स्प्रे'],
    chemicalControlHi: ['सल्फर 80% WP @ 3 ग्राम/लीटर', 'हेक्साकोनाज़ोल 5% EC @ 2 मिली/लीटर'],
    preventiveMeasuresHi: 'हवा में अत्यधिक नमी रोकने के लिए फव्वारा सिंचाई से बचें।'
  },

  'rust': {
    nameEn: 'Rust Disease (गेरुआ / रतुआ)',
    nameHi: 'गेरुआ / रतुआ रोग (रस्ट)',
    cropEn: 'Field Crop',
    cropHi: 'खेत की फसल',
    categoryEn: 'Fungal Disease',
    categoryHi: 'फफूंद जनित रोग',
    severity: 'High',
    symptomsHi: 'पत्तियों पर नारंगी, भूरे या लाल रंग के फफोले (पस्ट्यूल्स); हाथ लगाने पर चूर्ण जैसा लगना।',
    immediateActionHi: 'प्रोपिकोनाज़ोल 25% EC @ 1 मिली/लीटर का तुरंत छिड़काव करें।',
    recommendationsHi: [
      '⚡ प्रोपिकोनाज़ोल 25% EC @ 1 मिली प्रति लीटर पानी में मिलाकर स्प्रे करें।',
      '📋 मैनकोज़ेब 75% WP @ 2.5 ग्राम/लीटर का सुरक्षात्मक छिड़काव करें।'
    ],
    organicControlHi: ['ट्राइकोडर्मा विरिडी @ 5 ग्राम/लीटर'],
    chemicalControlHi: ['प्रोपिकोनाज़ोल 25% EC @ 1 मिली/लीटर', 'टेबुकोनाज़ोल 25.9% EC @ 1.25 मिली/लीटर'],
    preventiveMeasuresHi: 'रतुआ-रोधी प्रमाणित बीज बोएं।'
  },

  'anthracnose': {
    nameEn: 'Anthracnose Disease',
    nameHi: 'श्यामवर्ण रोग (एन्थ्रेक्नोज)',
    cropEn: 'Field Crop',
    cropHi: 'खेत की फसल',
    categoryEn: 'Fungal Disease',
    categoryHi: 'फफूंद जनित रोग',
    severity: 'High',
    symptomsHi: 'पत्तियों और फलों पर गहरे धंसे हुए काले-भूरे घाव; फलों का समय से पहले सड़ना।',
    immediateActionHi: 'कार्बेन्डाजिम + मैनकोज़ेब या कॉपर ऑक्सीक्लोराइड का छिड़काव करें।',
    recommendationsHi: ['⚡ कार्बेन्डाजिम 12% + मैनकोज़ेब 63% WP @ 2 ग्राम/लीटर का छिड़काव करें।'],
    organicControlHi: ['बोर्डो मिश्रण (1%) या कॉपर सल्फेट घोल'],
    chemicalControlHi: ['कार्बेन्डाजिम 12% + मैनकोज़ेब 63% WP @ 2 ग्राम/लीटर', 'कॉपर ऑक्सीक्लोराइड @ 3 ग्राम/लीटर'],
    preventiveMeasuresHi: 'गीले खेत में काम करने से बचें ताकि कवक बीजाणु न फैलें।'
  },

  'healthy': {
    nameEn: 'Healthy Crop (No Disease)',
    nameHi: 'रोगमुक्त एवं स्वस्थ फसल',
    cropEn: 'Field Crop',
    cropHi: 'खेत की फसल',
    categoryEn: 'Healthy Crop',
    categoryHi: 'रोगमुक्त फसल',
    severity: 'None',
    symptomsHi: 'फसल पूर्ण रूप से स्वस्थ, ओजस्वी और रोगमुक्त है। कोई फंगल, जीवाणु या कीट लक्षण नहीं मिले।',
    immediateActionHi: 'वर्तमान फसल प्रबंधन और पोषण जारी रखें।',
    recommendationsHi: [
      '✅ फसल पूर्ण स्वस्थ है — किसी भी कीटनाशक दवा की आवश्यकता नहीं है।',
      '📋 सूक्ष्म पोषक तत्वों (जिंक, बोरॉन) का सुरक्षात्मक फोलियर स्प्रे करें।',
      '📋 संतुलित सिंचाई और उर्वरक प्रबंधन बनाए रखें।',
      '📋 कीटों की नियमित निगरानी के लिए साप्ताहिक निरीक्षण जारी रखें।'
    ],
    organicControlHi: ['नियमित जैविक पोषण जारी रखें।'],
    chemicalControlHi: ['कोई रासायनिक दवा आवश्यक नहीं।'],
    preventiveMeasuresHi: 'समय पर सिंचाई व खरपतवार नियंत्रण बनाए रखें।'
  }
};

/**
 * Normalizes an arbitrary class or disease string to find its match in MASTER_DISEASE_DB
 */
export function getTranslatedDiseaseInfo(rawName = '', lang = 'hi') {
  if (!rawName) {
    return {
      nameEn: 'Plant Disease Diagnosis',
      nameHi: 'पादप रोग निदान',
      cropEn: 'Crop',
      cropHi: 'फसल',
      categoryEn: 'Condition',
      categoryHi: 'स्थिति',
      severity: 'Moderate',
      symptomsHi: 'लक्षण विवरण उपलब्ध नहीं है।',
      immediateActionHi: 'खेत का निरीक्षण करें।',
      recommendationsHi: []
    };
  }

  const cleanKey = String(rawName).toLowerCase().replace(/___/g, ' ').replace(/[_\-\/\(\)]/g, ' ').trim();

  // 1. Direct match
  if (MASTER_DISEASE_DB[cleanKey]) {
    return MASTER_DISEASE_DB[cleanKey];
  }

  // 2. Substring search in keys
  for (const [key, val] of Object.entries(MASTER_DISEASE_DB)) {
    if (cleanKey.includes(key) || key.includes(cleanKey)) {
      return val;
    }
  }

  // 3. Keyword based matching
  if (cleanKey.includes('healthy') || cleanKey.includes('clean') || cleanKey.includes('स्वस्थ')) {
    if (cleanKey.includes('wheat') || cleanKey.includes('गेहूं')) return MASTER_DISEASE_DB['healthy wheat'];
    if (cleanKey.includes('cotton') || cleanKey.includes('कपास')) return MASTER_DISEASE_DB['healthy cotton'];
    if (cleanKey.includes('maize') || cleanKey.includes('मक्का')) return MASTER_DISEASE_DB['healthy maize'];
    if (cleanKey.includes('potato') || cleanKey.includes('आलू')) return MASTER_DISEASE_DB['potato healthy'];
    if (cleanKey.includes('tomato') || cleanKey.includes('टमाटर')) return MASTER_DISEASE_DB['tomato healthy'];
    if (cleanKey.includes('sugarcane') || cleanKey.includes('गन्ना')) return MASTER_DISEASE_DB['sugarcane healthy'];
    return MASTER_DISEASE_DB['healthy'];
  }

  if (cleanKey.includes('aphid') || cleanKey.includes('माहू') || cleanKey.includes('चेपा')) {
    if (cleanKey.includes('cotton') || cleanKey.includes('कपास')) return MASTER_DISEASE_DB['cotton aphid'];
    return MASTER_DISEASE_DB['wheat aphid'];
  }

  if (cleanKey.includes('yellow rust') || cleanKey.includes('stripe rust') || cleanKey.includes('पीला रतुआ')) {
    return MASTER_DISEASE_DB['wheat___yellow_rust'];
  }
  if (cleanKey.includes('brown rust') || cleanKey.includes('leaf rust') || cleanKey.includes('भूरा रतुआ')) {
    return MASTER_DISEASE_DB['wheat brown leaf rust'];
  }
  if (cleanKey.includes('black rust') || cleanKey.includes('stem rust') || cleanKey.includes('काला रतुआ')) {
    return MASTER_DISEASE_DB['wheat black rust'];
  }
  if (cleanKey.includes('blast') || cleanKey.includes('झोंका')) {
    return MASTER_DISEASE_DB['rice blast'];
  }
  if (cleanKey.includes('bollworm') || cleanKey.includes('सुंडी')) {
    if (cleanKey.includes('pink') || cleanKey.includes('गुलाबी')) return MASTER_DISEASE_DB['pink bollworm in cotton'];
    return MASTER_DISEASE_DB['american bollworm on cotton'];
  }
  if (cleanKey.includes('armyworm') || cleanKey.includes('army worm')) {
    return MASTER_DISEASE_DB['maize fall armyworm'];
  }
  if (cleanKey.includes('whitefly') || cleanKey.includes('सफेद मक्खी')) {
    return MASTER_DISEASE_DB['cotton whitefly'];
  }
  if (cleanKey.includes('mealy') || cleanKey.includes('मिलीबग')) {
    return MASTER_DISEASE_DB['cotton mealy bug'];
  }
  if (cleanKey.includes('red rot') || cleanKey.includes('लाल सड़न')) {
    return MASTER_DISEASE_DB['redrot sugarcane'];
  }
  if (cleanKey.includes('late blight') || cleanKey.includes('पछेती झुलसा')) {
    if (cleanKey.includes('tomato') || cleanKey.includes('टमाटर')) return MASTER_DISEASE_DB['tomato late blight'];
    return MASTER_DISEASE_DB['potato late blight'];
  }
  if (cleanKey.includes('early blight') || cleanKey.includes('अगेती झुलसा')) {
    if (cleanKey.includes('tomato') || cleanKey.includes('टमाटर')) return MASTER_DISEASE_DB['tomato early blight'];
    return MASTER_DISEASE_DB['potato early blight'];
  }
  if (cleanKey.includes('blight') || cleanKey.includes('झुलसा')) {
    if (cleanKey.includes('rice') || cleanKey.includes('धान')) return MASTER_DISEASE_DB['becterial blight in rice'];
    if (cleanKey.includes('wheat') || cleanKey.includes('गेहूं')) return MASTER_DISEASE_DB['wheat leaf blight'];
    return MASTER_DISEASE_DB['leaf blight'];
  }
  if (cleanKey.includes('mildew') || cleanKey.includes('चूर्णिल')) {
    return MASTER_DISEASE_DB['wheat powdery mildew'];
  }
  if (cleanKey.includes('wilt') || cleanKey.includes('उकठा')) {
    return MASTER_DISEASE_DB['cotton fusarium wilt'];
  }

  // Fallback generic
  return {
    nameEn: rawName,
    nameHi: `${rawName} (रोग लक्षण)`,
    cropEn: 'Field Crop',
    cropHi: 'खेत की फसल',
    categoryEn: 'Plant Disease',
    categoryHi: 'पादप रोग',
    severity: 'Moderate',
    symptomsHi: `${rawName} के विशिष्ट रोग लक्षण दिखाई दे रहे हैं। पत्ती पर धब्बे व संक्रमण क्षेत्र पाए गए।`,
    immediateActionHi: 'संक्रमित पौधों को अलग करें और नजदीकी कृषि विज्ञान केंद्र (KVK) या अनुशंसित कवकनाशी का छिड़काव करें।',
    recommendationsHi: [
      `⚡ ${rawName} के नियंत्रण हेतु मैनकोज़ेब 75% WP @ 2.5 ग्राम/लीटर या नीम तेल का छिड़काव करें।`,
      '📋 संक्रमित पत्तियों को हटाकर नष्ट करें और खेत में जलजमाव न होने दें।'
    ],
    organicControlHi: ['नीम तेल (10,000 ppm) @ 3 मिली/लीटर पानी में मिलाकर स्प्रे करें।'],
    chemicalControlHi: ['मैनकोज़ेब 75% WP @ 2.5 ग्राम/लीटर', 'कार्बेंडाजिम 50% WP @ 1 ग्राम/लीटर'],
    preventiveMeasuresHi: 'फसल की नियमित निगरानी रखें और संतुलित उर्वरकों का उपयोग करें।'
  };
}

/**
 * Universal phrase & sentence dictionary for any agronomic strings
 */
const AGRONOMIC_PHRASE_DICT = {
  // ── Recommendations & Healthy Strings ──
  'cotton crop appears healthy — continue routine monitoring': '✅ कपास की फसल एकदम स्वस्थ है — नियमित निगरानी बनाए रखें',
  'cotton crop appears healthy - continue routine monitoring': '✅ कपास की फसल एकदम स्वस्थ है — नियमित निगरानी बनाए रखें',
  'wheat crop appears healthy — continue routine monitoring': '✅ गेहूं की फसल एकदम स्वस्थ है — नियमित निगरानी बनाए रखें',
  'wheat crop appears healthy - continue routine monitoring': '✅ गेहूं की फसल एकदम स्वस्थ है — नियमित निगरानी बनाए रखें',
  'rice crop appears healthy — continue routine monitoring': '✅ धान की फसल एकदम स्वस्थ है — नियमित निगरानी बनाए रखें',
  'rice crop appears healthy - continue routine monitoring': '✅ धान की फसल एकदम स्वस्थ है — नियमित निगरानी बनाए रखें',
  'maize crop appears healthy — continue routine monitoring': '✅ मक्का की फसल एकदम स्वस्थ है — नियमित निगरानी बनाए रखें',
  'maize crop appears healthy - continue routine monitoring': '✅ मक्का की फसल एकदम स्वस्थ है — नियमित निगरानी बनाए रखें',
  'sugarcane crop appears healthy — continue routine monitoring': '✅ गन्ने की फसल एकदम स्वस्थ है — नियमित निगरानी बनाए रखें',
  'sugarcane crop appears healthy - continue routine monitoring': '✅ गन्ने की फसल एकदम स्वस्थ है — नियमित निगरानी बनाए रखें',
  'potato crop appears healthy — continue routine monitoring': '✅ आलू की फसल एकदम स्वस्थ है — नियमित निगरानी बनाए रखें',
  'potato crop appears healthy - continue routine monitoring': '✅ आलू की फसल एकदम स्वस्थ है — नियमित निगरानी बनाए रखें',
  'tomato crop appears healthy — continue routine monitoring': '✅ टमाटर की फसल एकदम स्वस्थ है — नियमित निगरानी बनाए रखें',
  'tomato crop appears healthy - continue routine monitoring': '✅ टमाटर की फसल एकदम स्वस्थ है — नियमित निगरानी बनाए रखें',
  'crop appears healthy — continue routine monitoring': '✅ फसल पूर्ण स्वस्थ है — नियमित निगरानी बनाए रखें',
  'crop appears healthy - continue routine monitoring': '✅ फसल पूर्ण स्वस्थ है — नियमित निगरानी बनाए रखें',
  'crop is healthy — continue routine monitoring': '✅ फसल पूर्ण स्वस्थ है — नियमित निगरानी बनाए रखें',
  'crop is healthy - continue routine monitoring': '✅ फसल पूर्ण स्वस्थ है — नियमित निगरानी बनाए रखें',
  'apply preventive foliar spray of micronutrients': 'सूक्ष्म पोषक तत्वों (जिंक, बोरॉन आदि) का सुरक्षात्मक फोलियर स्प्रे करें',
  'scout for pests weekly to catch issues early': 'कीटों व बीमारियों की जल्द पहचान हेतु हर हफ्ते खेत का निरीक्षण करें',
  'maintain optimal irrigation and fertilization schedule': 'संतुलित सिंचाई और खाद (उर्वरक) का सही समय बनाए रखें',
  'maintain optimal irrigation schedule': 'संतुलित सिंचाई और जल प्रबंधन का सही समय बनाए रखें',
  
  // ── Symptoms ──
  'lush dark green palmate leaves, vigorous sympodial fruiting branch development, intact flower squares, no boll shedding, clean bolls': 'पत्तियां गहरे हरे रंग की, पूर्ण स्वस्थ एवं ओजस्वी हैं। कलियां और टिंडे सुरक्षित हैं, कोई रोग या टिंडा झड़ने के लक्षण नहीं हैं।',
  'lush dark green palmate leaves, vigorous sympodial fruiting branch development, intact flower squares, no boll shedding, clean bolls.': 'पत्तियां गहरे हरे रंग की, पूर्ण स्वस्थ एवं ओजस्वी हैं। कलियां और टिंडे सुरक्षित हैं, कोई रोग या टिंडा झड़ने के लक्षण नहीं हैं।',
  'healthy dark green erect leaves, uniform tillering, clean culms, fully developed disease-free spikes': 'पत्तियां पूर्ण रूप से हरी, चमकदार और रोगमुक्त हैं। बालियां स्वस्थ और दाना भराव अनुकूल है।',
  'healthy dark green erect leaves, uniform tillering, clean culms, fully developed disease-free spikes.': 'पत्तियां पूर्ण रूप से हरी, चमकदार और रोगमुक्त हैं। बालियां स्वस्थ और दाना भराव अनुकूल है।',
  'vigorous dark green broad leaves with strong erect stalks, clean silks and tassels, fully formed ears free from rot or insect damage': 'मक्का के पौधे पूर्ण रूप से मजबूत, पत्तियां हरी व चौड़ी हैं। भुट्टा और बालियां रोग व कीट से पूर्ण सुरक्षित हैं।',
  'vigorous dark green broad leaves with strong erect stalks, clean silks and tassels, fully formed ears free from rot or insect damage.': 'मक्का के पौधे पूर्ण रूप से मजबूत, पत्तियां हरी व चौड़ी हैं। भुट्टा और बालियां रोग व कीट से पूर्ण सुरक्षित हैं।',
  'robust tillering, lush green canopy, clean smooth stems with intact internodes, thick waxy coating, no red discoloration or wilting': 'गन्ने की पत्तियां और तने पूर्ण स्वस्थ व ओजस्वी हैं। तने में कोई लाल सड़न या कीट के लक्षण नहीं हैं।',
  'robust tillering, lush green canopy, clean smooth stems with intact internodes, thick waxy coating, no red discoloration or wilting.': 'गन्ने की पत्तियां और तने पूर्ण स्वस्थ व ओजस्वी हैं। तने में कोई लाल सड़न या कीट के लक्षण नहीं हैं।',
  'dense dark green compound foliage with sturdy erect stems, vigorous stolon and tuber initiation, no blight lesions or leaf rolling': 'आलू के पौधे पूर्ण रूप से स्वस्थ और हरे-भरे हैं। पत्तियों और कंदों पर कोई झुलसा या मरोड़िया लक्षण नहीं हैं।',
  'dense dark green compound foliage with sturdy erect stems, vigorous stolon and tuber initiation, no blight lesions or leaf rolling.': 'आलू के पौधे पूर्ण रूप से स्वस्थ और हरे-भरे हैं। पत्तियों और कंदों पर कोई झुलसा या मरोड़िया लक्षण नहीं हैं।',
  'healthy vigorous growth': 'फसल की बढ़वार पूर्ण रूप से स्वस्थ, ओजस्वी और रोगमुक्त है।',
  'healthy vigorous growth.': 'फसल की बढ़वार पूर्ण रूप से स्वस्थ, ओजस्वी और रोगमुक्त है।',

  // ── Organic Controls ──
  'foliar spray panchagavya 3% or vermiwash 10% during peak flowering': 'फूल आने की अवस्था में 3% पंचगव्य या 10% वर्मीवॉश का फोलियर स्प्रे करें।',
  'foliar spray panchagavya 3% or vermiwash 10% during peak flowering.': 'फूल आने की अवस्था में 3% पंचगव्य या 10% वर्मीवॉश का फोलियर स्प्रे करें।',
  'conserve spiders, chrysoperla, and mirid bugs in the field': 'खेत में मित्र कीटों (मकड़ी, क्राइसोपर्ला और मिरेड बग) का संरक्षण करें।',
  'conserve spiders, chrysoperla, and mirid bugs in the field.': 'खेत में मित्र कीटों (मकड़ी, क्राइसोपर्ला और मिरेड बग) का संरक्षण करें।',
  'install yellow and blue sticky traps for sucking pest monitoring': 'रस चूसक कीटों की निगरानी के लिए पीले और नीले चिपचिपे कार्ड लगाएं।',
  'install yellow and blue sticky traps for sucking pest monitoring.': 'रस चूसक कीटों की निगरानी के लिए पीले और नीले चिपचिपे कार्ड लगाएं।',
  'foliar spray seaweed extract bio-stimulant @ 2 ml/l': 'समुद्री शैवाल का अर्क (बायो-स्टिमुलेंट) @ 2 मिली/लीटर पानी में स्प्रे करें।',
  'foliar spray seaweed extract bio-stimulant @ 2 ml/l.': 'समुद्री शैवाल का अर्क (बायो-स्टिमुलेंट) @ 2 मिली/लीटर पानी में स्प्रे करें।',
  'apply vermicompost @ 2 tons/acre during land preparation': 'खेत की तैयारी के समय 2 टन प्रति एकड़ वर्मीकंपोस्ट (केंचुआ खाद) डालें।',
  'apply vermicompost @ 2 tons/acre during land preparation.': 'खेत की तैयारी के समय 2 टन प्रति एकड़ वर्मीकंपोस्ट (केंचुआ खाद) डालें।',
  'release chrysoperla predators if stray aphids are observed': 'यदि माहू कीट दिखाई दें तो क्राइसोपर्ला मित्र कीट छोड़ें।',
  'release chrysoperla predators if stray aphids are observed.': 'यदि माहू कीट दिखाई दें तो क्राइसोपर्ला मित्र कीट छोड़ें।',
  'spray neem oil (10,000 ppm) @ 3 ml/l': 'नीम तेल (10,000 ppm) @ 3 मिली प्रति लीटर पानी में मिलाकर स्प्रे करें।',
  'spray neem oil (10,000 ppm) @ 3 ml/l.': 'नीम तेल (10,000 ppm) @ 3 मिली प्रति लीटर पानी में मिलाकर स्प्रे करें।',
  'spray neem oil (10000 ppm) @ 3 ml/l': 'नीम तेल (10,000 ppm) @ 3 मिली प्रति लीटर पानी में मिलाकर स्प्रे करें।',
  'spray neem oil (10000 ppm) @ 3 ml/l.': 'नीम तेल (10,000 ppm) @ 3 मिली प्रति लीटर पानी में मिलाकर स्प्रे करें।',
  'soil application of trichoderma viride enriched farmyard manure': 'ट्राइकोडर्मा विरिडी से समृद्ध सड़ी गोबर की खाद मिट्टी में मिलाएं।',
  'soil application of trichoderma viride enriched farmyard manure.': 'ट्राइकोडर्मा विरिडी से समृद्ध सड़ी गोबर की खाद मिट्टी में मिलाएं।',
  'neem cake incorporation @ 200 kg/acre': 'नीम की खली @ 200 किग्रा प्रति एकड़ मिट्टी में मिलाएं।',
  'neem cake incorporation @ 200 kg/acre.': 'नीम की खली @ 200 किग्रा प्रति एकड़ मिट्टी में मिलाएं।',
  'neem-based formulation': 'नीम आधारित जैविक कीटनाशक (10,000 ppm) का उपयोग करें।',
  'neem-based formulation.': 'नीम आधारित जैविक कीटनाशक (10,000 ppm) का उपयोग करें।',
  'maintain organic matter': 'खेत में जीवांश व कंपोस्ट खाद का नियमित प्रयोग करें।',
  'maintain organic matter.': 'खेत में जीवांश व कंपोस्ट खाद का नियमित प्रयोग करें।',
  'compost maintenance': 'सड़ी हुई गोबर खाद और जैविक पोषण का प्रयोग करें।',
  'compost maintenance.': 'सड़ी हुई गोबर खाद और जैविक पोषण का प्रयोग करें।',

  // ── Chemical Controls ──
  'no chemical pesticides needed': 'किसी भी रासायनिक कीटनाशक दवा की आवश्यकता नहीं है।',
  'no chemical pesticides needed.': 'किसी भी रासायनिक कीटनाशक दवा की आवश्यकता नहीं है।',
  'no chemical intervention required': 'किसी भी रासायनिक दवा की आवश्यकता नहीं है।',
  'no chemical intervention required.': 'किसी भी रासायनिक दवा की आवश्यकता नहीं है।',
  'prophylactic seed treatment with carboxin was effective': 'कार्बोक्सिन से किया गया सुरक्षात्मक बीज उपचार प्रभावी रहा है।',
  'prophylactic seed treatment with carboxin was effective.': 'कार्बोक्सिन से किया गया सुरक्षात्मक बीज उपचार प्रभावी रहा है।',
  'none required': 'किसी भी रासायनिक दवा की आवश्यकता नहीं है।',
  'none required.': 'किसी भी रासायनिक दवा की आवश्यकता नहीं है।',
  'foliar micronutrient spray (mg, zn, b) as per agronomic recommendation': 'कृषि वैज्ञानिक सलाह अनुसार मैग्नीशियम, जिंक और बोरॉन का फोलियर पोषण स्प्रे करें।',
  'foliar micronutrient spray (mg, zn, b) as per agronomic recommendation.': 'कृषि वैज्ञानिक सलाह अनुसार मैग्नीशियम, जिंक और बोरॉन का फोलियर पोषण स्प्रे करें।',
  'apply recommended systemic crop protection chemical': 'अनुशंसित प्रणालीगत कीटनाशक या कवकनाशी का सही मात्रा में छिड़काव करें।',
  'apply recommended systemic crop protection chemical.': 'अनुशंसित प्रणालीगत कीटनाशक या कवकनाशी का सही मात्रा में छिड़काव करें।',

  // ── Preventive Measures ──
  'maintain drip fertigation; keep fields clean of malvaceous weeds (abutilon indicum); pick cotton dry in morning': 'ड्रिप फर्टिगेशन जारी रखें; खेत को खरपतवार मुक्त रखें और सुबह ओस सूखने के बाद कपास की चुनाई करें।',
  'maintain drip fertigation; keep fields clean of malvaceous weeds (abutilon indicum); pick cotton dry in morning.': 'ड्रिप फर्टिगेशन जारी रखें; खेत को खरपतवार मुक्त रखें और सुबह ओस सूखने के बाद कपास की चुनाई करें।',
  'timely sowing between nov 5–25; maintain certified seed purity; ensure laser land leveling for uniform irrigation': '5 से 25 नवंबर के बीच समय पर बुवाई करें; प्रमाणित शुद्ध बीज का उपयोग करें और लेजर लैंड लेवलिंग कराएं।',
  'timely sowing between nov 5–25; maintain certified seed purity; ensure laser land leveling for uniform irrigation.': '5 से 25 नवंबर के बीच समय पर बुवाई करें; प्रमाणित शुद्ध बीज का उपयोग करें और लेजर लैंड लेवलिंग कराएं।',
  'timely sowing between nov 5-25; maintain certified seed purity; ensure laser land leveling for uniform irrigation': '5 से 25 नवंबर के बीच समय पर बुवाई करें; प्रमाणित शुद्ध बीज का उपयोग करें और लेजर लैंड लेवलिंग कराएं।',
  'timely sowing between nov 5-25; maintain certified seed purity; ensure laser land leveling for uniform irrigation.': '5 से 25 नवंबर के बीच समय पर बुवाई करें; प्रमाणित शुद्ध बीज का उपयोग करें और लेजर लैंड लेवलिंग कराएं।',
  'follow standard integrated pest and crop management practices': 'एकीकृत कीट व फसल प्रबंधन (IPM) की मानक विधियों का पालन करें।',
  'follow standard integrated pest and crop management practices.': 'एकीकृत कीट व फसल प्रबंधन (IPM) की मानक विधियों का पालन करें।'
};

/**
 * Normalizes string for translation matching (removes unicode dashes, extra spaces, bullets)
 */
function normalizeAgronomicText(text = '') {
  return String(text)
    .toLowerCase()
    .replace(/[\u2014\u2013]/g, '-') // Normalize em-dash and en-dash to hyphen
    .replace(/^[✅📋⚡\s•\-\*\d\.\)]+/, '') // Remove leading checkmarks, numbers, bullets
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Translates any single agricultural item or sentence into Hindi if lang === 'hi'
 */
export function translateAgronomicItem(text = '', lang = 'hi') {
  if (!text || typeof text !== 'string') return text;
  if (lang !== 'hi') return text;

  const rawClean = text.trim();
  const lower = normalizeAgronomicText(rawClean);
  const lowerNoPunct = lower.replace(/[\.\,\;\:]+$/, '').trim();

  // Prefix preserve (✅, 📋, ⚡, etc.)
  const prefix = rawClean.startsWith('✅') ? '✅ ' : rawClean.startsWith('📋') ? '📋 ' : rawClean.startsWith('⚡') ? '⚡ ' : '';

  // 1. Direct dictionary check (exact & without trailing punctuation)
  if (AGRONOMIC_PHRASE_DICT[lower]) {
    return prefix + AGRONOMIC_PHRASE_DICT[lower];
  }
  if (AGRONOMIC_PHRASE_DICT[lowerNoPunct]) {
    return prefix + AGRONOMIC_PHRASE_DICT[lowerNoPunct];
  }

  // 2. Substring search in dictionary
  for (const [enKey, hiVal] of Object.entries(AGRONOMIC_PHRASE_DICT)) {
    const cleanEn = normalizeAgronomicText(enKey);
    if (lower.includes(cleanEn) || cleanEn.includes(lower)) {
      return prefix + hiVal;
    }
  }

  // 3. Roadmap steps translation: "Day X (...): ..."
  const dayMatch = rawClean.match(/^📋?\s*Day\s*(\d+)\s*\(([^)]+)\)\s*:\s*(.+)$/i);
  if (dayMatch) {
    const [, dayNum, phaseName, actionText] = dayMatch;
    const transAction = translateAgronomicItem(actionText, 'hi');
    return `📋 दिन ${dayNum} (${phaseName}): ${transAction}`;
  }

  // 4. Semantic / pattern-based translation rules
  if (lower.includes('appears healthy') || lower.includes('is healthy') || lower.includes('optimum crop health')) {
    return prefix + 'फसल पूर्ण रूप से स्वस्थ है — नियमित निगरानी बनाए रखें और अनावश्यक कीटनाशक न डालें।';
  }
  if (lower.includes('micronutrient') || lower.includes('foliar spray of micronutrient')) {
    return prefix + 'सूक्ष्म पोषक तत्वों (जिंक, बोरॉन आदि) का सुरक्षात्मक फोलियर स्प्रे करें।';
  }
  if (lower.includes('scout for pest') || lower.includes('scouting') || lower.includes('pest monitoring')) {
    return prefix + 'कीटों व बीमारियों की जल्द पहचान हेतु हर हफ्ते खेत का निरीक्षण व स्काउटिंग करें।';
  }
  if (lower.includes('irrigation and fert') || lower.includes('fertilization schedule') || lower.includes('drip fertigation')) {
    return prefix + 'संतुलित ड्रिप सिंचाई और खाद (उर्वरक) का सही समय बनाए रखें।';
  }
  if (lower.includes('no chemical') || lower.includes('none required') || lower.includes('no chemical intervention')) {
    return prefix + 'किसी भी रासायनिक कीटनाशक दवा की आवश्यकता नहीं है।';
  }
  if (lower.includes('panchagavya') || lower.includes('vermiwash')) {
    return prefix + 'फूल आने की अवस्था में 3% पंचगव्य या 10% वर्मीवॉश का फोलियर स्प्रे करें।';
  }
  if (lower.includes('chrysoperla') || lower.includes('spider') || lower.includes('mirid bug')) {
    return prefix + 'खेत में मित्र कीटों (मकड़ी, क्राइसोपर्ला और मिरेड बग) का संरक्षण करें।';
  }
  if (lower.includes('sticky trap') || lower.includes('yellow and blue')) {
    return prefix + 'रस चूसक कीटों की निगरानी के लिए पीले और नीले चिपचिपे कार्ड लगाएं।';
  }
  if (lower.includes('palmate leaves') || lower.includes('flower squares') || lower.includes('clean bolls')) {
    return prefix + 'पत्तियां गहरे हरे रंग की, पूर्ण स्वस्थ एवं ओजस्वी हैं। कलियां और टिंडे सुरक्षित हैं, कोई रोग या टिंडा झड़ने के लक्षण नहीं हैं।';
  }
  if (lower.includes('seaweed') || lower.includes('bio-stimulant')) {
    return prefix + 'समुद्री शैवाल का अर्क (बायो-स्टिमुलेंट) @ 2 मिली/लीटर पानी में स्प्रे करें।';
  }
  if (lower.includes('vermicompost')) {
    return prefix + 'खेत की तैयारी के समय 2 टन प्रति एकड़ वर्मीकंपोस्ट (केंचुआ खाद) डालें।';
  }
  if (lower.includes('neem oil') || lower.includes('neem based')) {
    return prefix + 'नीम तेल (10,000 ppm) @ 3 मिली प्रति लीटर पानी में मिलाकर शाम के समय स्प्रे करें।';
  }
  if (lower.includes('trichoderma')) {
    return prefix + 'ट्राइकोडर्मा विरिडी से समृद्ध सड़ी गोबर की खाद मिट्टी में मिलाएं।';
  }
  if (lower.includes('mancozeb')) {
    return prefix + 'मैनकोज़ेब 75% WP @ 2.5 ग्राम प्रति लीटर पानी का छिड़काव करें।';
  }
  if (lower.includes('imidacloprid')) {
    return prefix + 'इमिडाक्लोप्रिड 17.8% SL @ 0.5 मिली प्रति लीटर पानी में मिलाकर स्प्रे करें।';
  }
  if (lower.includes('propiconazole')) {
    return prefix + 'प्रोपिकोनाज़ोल 25% EC @ 1 मिली प्रति लीटर पानी में मिलाकर छिड़कें।';
  }
  if (lower.includes('carbendazim')) {
    return prefix + 'कार्बेंडाजिम 50% WP @ 1 ग्राम प्रति लीटर पानी का घोल बनाकर छिड़काव करें।';
  }
  if (lower.includes('streptocycline') || lower.includes('copper oxychloride')) {
    return prefix + 'स्ट्रेप्टोसाइक्लिन @ 1 ग्राम + कॉपर ऑक्सीक्लोराइड @ 25 ग्राम प्रति 10 लीटर पानी में मिलाकर स्प्रे करें।';
  }
  if (lower.includes('malvaceous weed') || lower.includes('abutilon')) {
    return prefix + 'ड्रिप फर्टिगेशन जारी रखें; खेत को खरपतवार मुक्त रखें और सुबह ओस सूखने के बाद कपास की चुनाई करें।';
  }
  if (lower.includes('certified seed') || lower.includes('laser land')) {
    return prefix + 'प्रमाणित रोगमुक्त शुद्ध बीज का उपयोग करें और समय पर बुवाई संपन्न करें।';
  }

  return text;
}

/**
 * Translates an array of strings into Hindi if lang === 'hi'
 */
export function translateAgronomicList(list = [], lang = 'hi') {
  if (!Array.isArray(list)) return [];
  if (lang !== 'hi') return list;
  return list.map(item => translateAgronomicItem(item, lang));
}

