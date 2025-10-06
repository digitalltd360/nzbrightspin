"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.platform": "منصة الألعاب الرقمية الرائدة في الخليج العربي",
    "nav.games": "الألعاب",
    "nav.services": "الخدمات",
    "nav.support": "الدعم التقني",
    "nav.login": "تسجيل الدخول",
    "nav.register": "التسجيل",
    "nav.contact": "اتصل بنا",
    "nav.about": "من نحن",
    "nav.news": "المدونة التقنية",
    "nav.history": "تاريخ الشركة",
    "nav.3d": "الحلول المتقدمة",
    "nav.browse": "استكشف الألعاب",

    // Common
    "common.play_now": "ابدأ الآن",
    "common.loading": "جاري التحميل...",
    "common.explore": "استكشف",
    "common.learn_more": "اعرف المزيد",
    "common.accept": "قبول",
    "common.decline": "رفض",
    "common.close": "إغلاق",

    // Tech Specific
    "tech.solutions": "الحلول التقنية",
    "tech.ai": "الذكاء الاصطناعي",
    "tech.blockchain": "البلوك تشين",
    "tech.cloud": "الحوسبة السحابية",
    "tech.iot": "إنترنت الأشياء",
    "tech.analytics": "التحليلات",
    "tech.performance": "الأداء",
    "tech.leaderboard": "لوحة الإنجازات",
    "tech.news": "الأخبار التقنية",
    "tech.history": "التاريخ",
    "tech.technology": "التكنولوجيا",
    "tech.security": "الأمان السيبراني",
    "tech.innovation": "الابتكار",
    "tech.speed": "السرعة",
    "tech.precision": "الدقة",
    "tech.excellence": "التميز",
    "tech.experience": "التجربة التقنية",

    // Homepage
    "home.title": "Bright Spin",
    "home.subtitle": "منصة الألعاب الرقمية الرائدة في الخليج العربي",
    "home.description":
      "انضم إلى ثورة الألعاب الرقمية في المنطقة. نحن نقدم مجموعة حصرية من الألعاب الحديثة مع تقنيات متطورة وخدمة عملاء متميزة. استمتع بتجربة لعب فريدة من نوعها مع ضمان الجودة والأمان.",
    "home.cta.start": "ابدأ المغامرة",
    "home.cta.explore": "استكشف المجموعة",
    "home.featured.title": "ألعابنا الحصرية",
    "home.featured.subtitle":
      "مجموعة مختارة بعناية من أفضل الألعاب مع تقنيات متطورة ورسوم مذهلة",
    "home.categories.all": "جميع الألعاب",
    "home.categories.modern": "ألعاب حديثة",
    "home.categories.premium": "ألعاب متميزة",
    "home.categories.classic": "ألعاب كلاسيكية",
    "home.stats.games": "2000+ ألعاب متاحة",
    "home.stats.players": "50K+ لاعبون نشطون",
    "home.stats.cities": "6 دول الخليج",
    "home.stats.experience": "10+ سنوات من التميز",
    "home.why.title": "ما الذي يميزنا؟",
    "home.why.subtitle":
      "نحن رواد في عالم الألعاب الرقمية، نقدم تجارب لعب مبتكرة مع أحدث التقنيات وضمان الجودة العالية لجميع عملائنا في المنطقة.",
    "home.why.tech.title": "تقنيات متطورة",
    "home.why.tech.desc":
      "نستخدم أحدث التقنيات في الألعاب مع رسوم مذهلة وأداء سلس. تجربة لعب لا تُنسى مع ضمان الجودة العالية.",
    "home.why.support.title": "دعم على مدار الساعة",
    "home.why.support.desc":
      "فريق دعم متخصص متاح 24/7 لمساعدتك في أي وقت. نحن هنا لضمان تجربة لعب مثالية ومشاكل سريعة الحل.",
    "home.why.security.title": "أمان وخصوصية",
    "home.why.security.desc":
      "نضمن أمان بياناتك وخصوصيتك مع تقنيات تشفير متقدمة. استمتع باللعب بثقة تامة مع حماية شاملة.",
    "home.cta.final.title": "انضم إلى مجتمعنا الآن",
    "home.cta.final.subtitle":
      "اكتشف عالماً جديداً من الألعاب المثيرة مع آلاف اللاعبين المتحمسين. ابدأ رحلتك نحو المتعة والإثارة اليوم",
    "home.cta.final.button": "ابدأ رحلتك الآن",

    // Platform
    "platform.title": "مركز الحلول التقنية",
    "platform.subtitle": "التقنيات المتقدمة والحلول الذكية في مكان واحد!",
    "platform.features.performance": "أداء فائق السرعة",
    "platform.features.performance.desc":
      "معالجة فائقة السرعة وخوارزميات محسنة مع محرك تقني متطور.",
    "platform.features.rewards": "حلول ذكية",
    "platform.features.rewards.desc":
      "استفد من التقنيات المتقدمة والابتكارات الجديدة في مكان واحد.",
    "platform.features.cross_platform": "متعدد المنصات",
    "platform.features.cross_platform.desc":
      "عمل سلس عبر جميع الأجهزة والمنصات المختلفة.",
    "platform.features.community": "مجتمع الإمارات التقني",
    "platform.features.community.desc":
      "انضم إلى آلاف العملاء الإماراتيين وشارك تجارب التقنية.",

    // Tech Categories (duplicates removed)

    // Tech Features
    "tech.featured": "الحلول المميزة",
    "tech.categories": "فئات التقنيات",
    "tech.start_now": "ابدأ الآن",
    "tech.rating": "التقييم",
    "tech.clients": "العملاء",
    "tech.category": "الفئة",

    // Services
    "services.title": "فئات الحلول التقنية",
    "services.subtitle":
      "استكشف مجموعتنا الواسعة من الحلول التقنية المتقدمة والذكية",
    "services.ai.title": "الذكاء الاصطناعي",
    "services.ai.subtitle": "حلول الذكاء الاصطناعي المتطورة",
    "services.ai.description":
      "استفد من تقنيات الذكاء الاصطناعي المتقدمة مثل التعلم الآلي ومعالجة اللغة الطبيعية. حلول ذكية لمشاكل معقدة.",
    "services.ai.features": [
      "التعلم الآلي",
      "معالجة اللغة الطبيعية",
      "الرؤية الحاسوبية",
      "الروبوتات الذكية",
    ],
    "services.blockchain.title": "البلوك تشين",
    "services.blockchain.subtitle": "تقنيات البلوك تشين الآمنة",
    "services.blockchain.description":
      "استفد من تقنيات البلوك تشين المتطورة. حلول آمنة وموثوقة للمعاملات الرقمية والعقود الذكية.",
    "services.blockchain.features": [
      "العقود الذكية",
      "العملات الرقمية",
      "NFT",
      "DeFi",
    ],
    "services.cloud.title": "الحوسبة السحابية",
    "services.cloud.subtitle": "حلول سحابية متطورة",
    "services.cloud.description":
      "استفد من قوة الحوسبة السحابية. حلول مرنة وقابلة للتوسع لجميع احتياجاتك التقنية.",
    "services.cloud.features": [
      "البنية التحتية السحابية",
      "التخزين السحابي",
      "الخدمات المدارة",
      "الأمان السحابي",
    ],

    // Featured Solutions
    "solutions.ai.title": "حلول الذكاء الاصطناعي المتقدمة",
    "solutions.ai.description":
      "حلول ذكية متطورة تستخدم أحدث تقنيات الذكاء الاصطناعي. استفد من التعلم الآلي لتحسين عملياتك.",
    "solutions.ai.tags": ["ذكاء اصطناعي", "تعلم آلي", "تحليلات"],
    "solutions.blockchain.title": "منصة البلوك تشين الآمنة",
    "solutions.blockchain.description":
      "منصة بلوك تشين متطورة وآمنة للمعاملات الرقمية. حلول موثوقة للعقود الذكية والعملات الرقمية.",
    "solutions.blockchain.tags": ["بلوك تشين", "أمان", "عقود ذكية"],
    "solutions.cloud.title": "الحوسبة السحابية المتقدمة",
    "solutions.cloud.description":
      "حلول سحابية متطورة ومرنة. بنية تحتية قابلة للتوسع لجميع احتياجاتك التقنية.",
    "solutions.cloud.tags": ["سحابي", "مرن", "قابل للتوسع"],
    "solutions.featured.label": "مميز",

    // News
    "news.title": "الأخبار التقنية",
    "news.subtitle": "ابق على اطلاع بأحدث التقنيات والابتكارات!",
    "news.featured": "الأخبار المميزة",
    "news.latest": "أحدث المقالات",
    "news.read_more": "اقرأ المزيد",
    "news.read_time": "دقيقة قراءة",
    "news.views": "مشاهدة",
    "news.likes": "إعجاب",

    // History
    "history.title": "تاريخ الشركة",
    "history.subtitle": "اكتشف رحلة Win Pokies في عالم التقنية!",
    "history.timeline": "الجدول الزمني",
    "history.milestones": "أهم المعالم",
    "history.genres": "مجالات الخبرة",
    "history.impact": "التأثير",

    // Common Actions
    "actions.explore": "استكشف",
    "actions.discover": "اكتشف",
    "actions.join": "انضم",
    "actions.start": "ابدأ",
    "actions.continue": "متابعة",
    "actions.finish": "إنهاء",

    // Footer
    "footer.about": "من نحن",
    "footer.quick_links": "روابط سريعة",
    "footer.legal": "قانوني",
    "footer.contact": "اتصل بنا",
    "footer.follow_us": "تابعنا",
    "footer.privacy_policy": "سياسة الخصوصية",
    "footer.terms": "شروط الخدمة",
    "footer.copyright": "© 2024 Win Pokies. جميع الحقوق محفوظة.",
    "footer.description":
      "Win Pokies هي منصة الحلول التقنية الرائدة في دولة الإمارات، تقدم مجموعة واسعة من التقنيات المتقدمة والحلول الذكية. انضم إلى آلاف العملاء الإماراتيين واستمتع بأفضل تجربة تقنية في دولة الإمارات.",
    "footer.copyright_text":
      "جميع الحقوق محفوظة • الحلول التقنية • الذكاء الاصطناعي • البلوك تشين",
    "footer.games": "الحلول",
    "footer.privacy_cookies": "الخصوصية والملفات",
    "footer.company": "الشركة",
    "footer.newsletter.title": "النشرة الإخبارية",
    "footer.newsletter.description":
      "ابق على اطلاع بأحدث الألعاب وأخبار الأركيد.",
    "footer.newsletter.placeholder": "أدخل عنوان بريدك الإلكتروني",
    "footer.newsletter.subscribe": "اشتراك",

    // Support
    "support.title": "الدعم",
    "support.contact_us": "اتصل بنا",
    "support.faq": "الأسئلة الشائعة",
    "support.help": "مساعدة",
    "support.email": "البريد الإلكتروني",
    "support.phone": "الهاتف",

    // Login/Register
    "auth.login": "تسجيل الدخول",
    "auth.register": "التسجيل",
    "auth.username": "اسم المستخدم",
    "auth.password": "كلمة المرور",
    "auth.email": "البريد الإلكتروني",
    "auth.confirm_password": "تأكيد كلمة المرور",
    "auth.remember_me": "تذكرني",
    "auth.forgot_password": "نسيت كلمة المرور؟",
    "auth.sign_in": "تسجيل الدخول",
    "auth.sign_up": "إنشاء حساب",
    "auth.already_have_account": "هل لديك حساب بالفعل؟",
    "auth.dont_have_account": "ليس لديك حساب؟",

    // Age Gate
    "age_gate.title": "Win Pokies & التحقق من العمر",
    "age_gate.subtitle": "Win Pokies - تقنية آمنة للجميع!",
    "age_gate.description":
      "Win Pokies هي منصة تقنية آمنة لجميع الأعمار. استفد من الحلول التقنية المتقدمة واستمتع بالتجربة التقنية في بيئة آمنة.",
    "age_gate.play_button": "🚀 ابدأ الآن 🚀",
    "age_gate.age_checkbox": "أوافق على شروط الاستخدام والحدود العمرية",
    "age_gate.cookies_checkbox":
      "أوافق على ملفات تعريف الارتباط وسياسة الخصوصية",
    "age_gate.responsibility_checkbox":
      "أفهم أن الحلول التقنية للاستخدام المهني فقط",

    // Cookies
    "cookies.title": "🍪 Win Pokies & ملفات تعريف الارتباط",
    "cookies.description":
      "نستخدم ملفات تعريف الارتباط الضرورية للحفاظ على Win Pokies يعمل بسلاسة. لا توجد أدوات تتبع من أطراف ثالثة. اقرأ المزيد عن سياسة الخصوصية الخاصة بنا.",
    "cookies.accept": "🍪 قبول",
    "cookies.decline": "🚫 رفض",

    // Hive: Altenum Wars
    "hive.title": "Hive: Altenum Wars",
    "hive.subtitle": "لعبة إطلاق نار بطولية متعددة اللاعبين مع حركة سريعة 2.5D",
    "hive.description":
      "حتى 10 لاعبين يمكنهم القتال في هذه اللعبة متعددة اللاعبين مع جماليات مستقبلية و قتال سريع. استعد للبقاء على قيد الحياة في الهيكساديوم، مراحل على شكل سداسي مقسمة إلى ست مناطق، كل منها له جاذبيته ومنصاته لتوفير تجربة محمومة.",
    "hive.play_now": "🎮 العب الآن",
    "hive.back_to_platform": "العودة إلى المنصة",
    "hive.stats.players": "لاعبين",
    "hive.stats.races": "أعراق",
    "hive.stats.modes": "أوضاع",
    "hive.stats.graphics": "رسوميات",
    "hive.features.title": "الميزات الرئيسية",
    "hive.features.gravity.title": "غزو الجاذبية",
    "hive.features.gravity.description":
      "Hive: Altenum Wars يوفر لمسة جميلة على ألعاب الرماية الأخرى. الهيكساديوم، المراحل حيث يحدث كل العمل 2.5D، مقسمة إلى ست مناطق. كل واحدة لها جاذبيتها ومنصاتها ومساحاتها المفتوحة. كن مستعداً للقتال حتى رأساً على عقب!",
    "hive.features.heroes.title": "اختر بطلك",
    "hive.features.heroes.description":
      "هناك أربعة أعراق في هذه الفوضى المستقبلية: الجيش البشري (UFG)، البشر المعدلون من Alteno (NHC)، الروبوتات (EVO)، والكائنات الفضائية المتطورة (YILL). كل واحد لديه مجموعة واسعة من المهارات والأسلحة مع مئات التركيبات الممكنة!",
    "hive.features.modes.title": "ثلاثة أوضاع لعب",
    "hive.features.modes.description":
      "في Team Deathmatch، سيتنافس فريقان للحصول على أكبر عدد من القتلى الأعداء. في King of the Hill، سيتعين على فريقك الدفاع عن النقاط الاستراتيجية عبر المرحلة. وضع البقاء يدور حول مواجهة موجات لا حصر لها من الأعداء بمفردك أو في وضع التعاون.",
    "hive.features.war.title": "هذه حرب",
    "hive.features.war.description":
      "تدور أحداث لعبتنا في مستقبل بعيد، خلال الحرب بين الأعراق الأربعة. نظراً لأن هذا الصراع قد يدمر الكون كله، يقترح Aeons إقامة بطولة لتقرير من يفوز. سيتم تقرير مستقبلنا في الهيكساديوم!",
    "hive.races.title": "الأعراق الأربعة",
    "hive.races.ufg": "الجيش البشري (UFG)",
    "hive.races.ufg_desc": "القوات العسكرية البشرية مع تقنيات متقدمة",
    "hive.races.nhc": "البشر المعدلون (NHC)",
    "hive.races.nhc_desc": "بشر معدلون من Alteno مع قدرات خارقة",
    "hive.races.evo": "الروبوتات (EVO)",
    "hive.races.evo_desc": "روبوتات ذكية مع أسلحة متطورة",
    "hive.races.yill": "الكائنات الفضائية (YILL)",
    "hive.races.yill_desc": "كائنات فضائية متطورة مع قوى خارقة",
    "hive.modes.title": "أوضاع اللعب",
    "hive.modes.deathmatch.title": "Team Deathmatch",
    "hive.modes.deathmatch.description":
      "فريقان يتنافسان للحصول على أكبر عدد من القتلى الأعداء",
    "hive.modes.king.title": "King of the Hill",
    "hive.modes.king.description": "ادافع عن النقاط الاستراتيجية عبر المرحلة",
    "hive.modes.survival.title": "وضع البقاء",
    "hive.modes.survival.description":
      "واجه موجات لا حصر لها من الأعداء بمفردك أو مع الأصدقاء",
    "hive.cta.title": "استعد للحرب!",
    "hive.cta.description":
      "انضم إلى المعركة النهائية في الهيكساديوم وقرر مصير الكون!",
    "hive.demo.title": "عرض اللعبة",
    "hive.demo.description": "جرب Hive: Altenum Wars الآن!",
    "hive.demo.play": "🎮 العب الآن",

    // The Savior's Gang
    "saviors.title": "The Savior's Gang",
    "saviors.subtitle": "سخرية دينية غريبة مع فكاهة صفعية",
    "saviors.description":
      "تعرف على المخلص، الذي يدعي أنه مسيح يجب أن ينقذ عابديه من نهاية العالم. لن يكون الأمر سهلاً. والده الشبيه بالحمامة غاضب بسبب صلب ابنه وملأ العالم بمصائد مميتة. لحسن الحظ، سيتلقى المخلص مساعدة من مجموعة غريبة ولكن مضحكة من الشخصيات مثل عمه ستان.",
    "saviors.play_now": "🎮 العب الآن",
    "saviors.back_to_platform": "العودة إلى المنصة",
    "saviors.stats.deaths": "طريقة موت",
    "saviors.stats.traps": "مصائد",
    "saviors.stats.graphics": "رسوميات",
    "saviors.stats.humor": "فكاهة",
    "saviors.features.title": "الميزات الرئيسية",
    "saviors.features.traps.title": "مصائد لا حصر لها",
    "saviors.features.traps.description":
      "حتى لو كان الهدف الرئيسي من اللعبة هو حماية عابديك من موت رهيب، لن تتمكن من إنقاذ الجميع. خاصة وأن كل مستوى يضيف أتباع جدد لتوجيههم بين الكهوف المتداعية والفؤوس الحادة وجذوع الأشجار المتساقطة، من بين العديد من المصائد الأخرى.",
    "saviors.features.phone.title": "تحقق من هاتفك",
    "saviors.features.phone.description":
      "خلال رحلتك، سيتلقى المخلص الكثير من الرسائل من شخصيات أخرى. هذه المحادثات مضحكة بشكل هستيري، ولكن يمكن أن تصبح إلهاء خطير من جميع المصائد حولك. الاختيار بين الميمات والبشرية صعب.",
    "saviors.features.physics.title": "فيزياء مضحكة",
    "saviors.features.physics.description":
      "The Savior's Gang يعتمد بشكل كبير على الفكاهة الصفعية. سمح لنا Unreal Engine بإنشاء فيزياء مضحكة وتضمين مجموعة واسعة من الوفيات. هناك أكثر من 20 طريقة للموت ويمكن تشويه الشخصيات أو سحقها أو حرقها أو غرقها... تفهم الأمر.",
    "saviors.features.satire.title": "سخرية مضحكة",
    "saviors.features.satire.description":
      "لا تجرؤ العديد من الألعاب على التحدث عن القضايا الدينية والأقل من ذلك تفعل ذلك مع نهج The Savior's Gang الساخر. في Catness Games نعتقد أن الابتكار يمكن السعي إليه بطرق مختلفة كثيرة والقصص واحدة منها. خذها بفكاهة!",
    "saviors.characters.title": "الشخصيات",
    "saviors.characters.savior": "المخلص",
    "saviors.characters.savior_desc": "المخلص المزعوم الذي يجب أن ينقذ عابديه",
    "saviors.characters.father": "الوالد",
    "saviors.characters.father_desc": "والد شبيه بالحمامة غاضب من صلب ابنه",
    "saviors.characters.stan": "العم ستان",
    "saviors.characters.stan_desc": "عم غريب ولكن مضحك يساعد المخلص",
    "saviors.characters.worshipers": "العابدون",
    "saviors.characters.worshipers_desc": "أتباع المخلص الذين يحتاجون للحماية",
    "saviors.gameplay.title": "طريقة اللعب",
    "saviors.gameplay.protection.title": "حماية العابدين",
    "saviors.gameplay.protection.description":
      "الهدف الرئيسي هو حماية عابديك من الموت الرهيب في عالم مليء بالمصائد",
    "saviors.gameplay.distraction.title": "إلهاء الهاتف",
    "saviors.gameplay.distraction.description":
      "تلقى رسائل مضحكة من شخصيات أخرى، ولكن كن حذراً من المصائد!",
    "saviors.gameplay.physics.title": "فيزياء مضحكة",
    "saviors.gameplay.physics.description":
      "استمتع بفيزياء مضحكة مع أكثر من 20 طريقة للموت",
    "saviors.cta.title": "انضم إلى العصابة!",
    "saviors.cta.description": "ساعد المخلص في إنقاذ عابديه من نهاية العالم!",
    "saviors.demo.title": "عرض اللعبة",
    "saviors.demo.description": "جرب The Savior's Gang الآن!",
    "saviors.demo.play": "🎮 العب الآن",

    // SEO Meta
    "seo.description":
      "الحلول التقنية الرائدة في دولة الإمارات! استفد من التقنيات المتقدمة وأفضل تجربة تقنية في دولة الإمارات.",
    "seo.keywords":
      "الحلول التقنية, الذكاء الاصطناعي, البلوك تشين, الحوسبة السحابية, التقنيات المتقدمة, الإمارات",
    "seo.title": "Win Pokies - الحلول التقنية المتقدمة",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.platform": "Leading Digital Gaming Platform in the Gulf",
    "nav.games": "Games",
    "nav.services": "Services",
    "nav.support": "Tech Support",
    "nav.login": "Login",
    "nav.register": "Register",
    "nav.contact": "Contact",
    "nav.about": "About Us",
    "nav.news": "Tech Blog",
    "nav.history": "Company History",
    "nav.browse": "Explore Games",

    // Common
    "common.play_now": "Get Started",
    "common.loading": "Loading...",
    "common.explore": "Discover",
    "common.learn_more": "Learn More",
    "common.accept": "Accept",
    "common.decline": "Decline",
    "common.close": "Close",

    // Tech Specific
    "tech.solutions": "Tech Solutions",
    "tech.ai": "Artificial Intelligence",
    "tech.blockchain": "Blockchain",
    "tech.cloud": "Cloud Computing",
    "tech.iot": "Internet of Things",
    "tech.analytics": "Analytics",
    "tech.performance": "Performance",
    "tech.leaderboard": "Achievements",
    "tech.news": "Tech News",
    "tech.history": "History",
    "tech.technology": "Technology",
    "tech.security": "Cybersecurity",
    "tech.innovation": "Innovation",
    "tech.speed": "Speed",
    "tech.precision": "Precision",
    "tech.excellence": "Excellence",
    "tech.experience": "Tech Experience",

    // Homepage
    "home.title": "Bright Spin",
    "home.subtitle": "Leading Digital Gaming Platform in the Gulf",
    "home.description":
      "Join the digital gaming revolution in the region. We offer an exclusive collection of modern games with advanced technologies and exceptional customer service. Enjoy a unique gaming experience with quality and security guarantees.",
    "home.cta.start": "Start Adventure",
    "home.cta.explore": "Explore Collection",
    "home.featured.title": "Our Exclusive Games",
    "home.featured.subtitle":
      "Carefully selected collection of the best games with advanced technologies and stunning graphics",
    "home.categories.all": "All Games",
    "home.categories.modern": "Modern Games",
    "home.categories.premium": "Premium Games",
    "home.categories.classic": "Classic Games",
    "home.stats.games": "2000+ Available Games",
    "home.stats.players": "50K+ Active Players",
    "home.stats.cities": "6 Gulf Countries",
    "home.stats.experience": "10+ Years of Excellence",
    "home.why.title": "What Makes Us Special?",
    "home.why.subtitle":
      "We are pioneers in the digital gaming world, offering innovative gaming experiences with the latest technologies and high-quality guarantees for all our customers in the region.",
    "home.why.tech.title": "Advanced Technologies",
    "home.why.tech.desc":
      "We use the latest gaming technologies with stunning graphics and smooth performance. An unforgettable gaming experience with high-quality guarantees.",
    "home.why.support.title": "24/7 Support",
    "home.why.support.desc":
      "Specialized support team available 24/7 to help you at any time. We are here to ensure a perfect gaming experience and quick problem resolution.",
    "home.why.security.title": "Security & Privacy",
    "home.why.security.desc":
      "We ensure the security of your data and privacy with advanced encryption technologies. Enjoy gaming with complete confidence and comprehensive protection.",
    "home.cta.final.title": "Join Our Community Now",
    "home.cta.final.subtitle":
      "Discover a new world of exciting games with thousands of enthusiastic players. Start your journey towards fun and excitement today",
    "home.cta.final.button": "Start Your Journey Now",

    // Platform
    "platform.title": "TECH SOLUTIONS CENTER",
    "platform.subtitle":
      "Advanced technologies and smart solutions in one place!",
    "platform.features.performance": "LIGHTNING PERFORMANCE",
    "platform.features.performance.desc":
      "Ultra-fast processing and optimized algorithms with our advanced tech engine.",
    "platform.features.rewards": "SMART SOLUTIONS",
    "platform.features.rewards.desc":
      "Experience cutting-edge technologies and innovative solutions in one place.",
    "platform.features.cross_platform": "CROSS-PLATFORM",
    "platform.features.cross_platform.desc":
      "Work seamlessly across all devices and platforms.",
    "platform.features.community": "UAE TECH COMMUNITY",
    "platform.features.community.desc":
      "Join thousands of UAE clients and share tech experiences.",

    // Tech Categories (duplicates removed)

    // Tech Features
    "tech.featured": "Featured Solutions",
    "tech.categories": "Tech Categories",
    "tech.start_now": "Get Started",
    "tech.rating": "Rating",
    "tech.clients": "Clients",
    "tech.category": "Category",

    // Services
    "services.title": "Tech Solution Categories",
    "services.subtitle":
      "Explore our wide selection of advanced and smart technologies",
    "services.ai.title": "Artificial Intelligence",
    "services.ai.subtitle": "Advanced AI Solutions",
    "services.ai.description":
      "Leverage cutting-edge AI technologies like machine learning and natural language processing. Smart solutions for complex problems.",
    "services.ai.features": [
      "Machine Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Intelligent Robotics",
    ],
    "services.blockchain.title": "Blockchain",
    "services.blockchain.subtitle": "Secure Blockchain Technologies",
    "services.blockchain.description":
      "Leverage advanced blockchain technologies. Secure and reliable solutions for digital transactions and smart contracts.",
    "services.blockchain.features": [
      "Smart Contracts",
      "Cryptocurrency",
      "NFT",
      "DeFi",
    ],
    "services.cloud.title": "Cloud Computing",
    "services.cloud.subtitle": "Advanced Cloud Solutions",
    "services.cloud.description":
      "Leverage the power of cloud computing. Flexible and scalable solutions for all your tech needs.",
    "services.cloud.features": [
      "Cloud Infrastructure",
      "Cloud Storage",
      "Managed Services",
      "Cloud Security",
    ],

    // Featured Solutions
    "solutions.ai.title": "Advanced AI Solutions",
    "solutions.ai.description":
      "Cutting-edge AI solutions using the latest artificial intelligence technologies. Leverage machine learning to optimize your operations.",
    "solutions.ai.tags": ["AI", "Machine Learning", "Analytics"],
    "solutions.blockchain.title": "Secure Blockchain Platform",
    "solutions.blockchain.description":
      "Advanced and secure blockchain platform for digital transactions. Reliable solutions for smart contracts and cryptocurrency.",
    "solutions.blockchain.tags": ["Blockchain", "Security", "Smart Contracts"],
    "solutions.cloud.title": "Advanced Cloud Computing",
    "solutions.cloud.description":
      "Advanced and flexible cloud solutions. Scalable infrastructure for all your tech needs.",
    "solutions.cloud.tags": ["Cloud", "Flexible", "Scalable"],
    "solutions.featured.label": "Featured",

    // News
    "news.title": "TECH NEWS",
    "news.subtitle":
      "Stay up to date with the latest technologies and innovations!",
    "news.featured": "Featured News",
    "news.latest": "Latest Articles",
    "news.read_more": "Read More",
    "news.read_time": "min read",
    "news.views": "views",
    "news.likes": "likes",

    // History
    "history.title": "COMPANY HISTORY",
    "history.subtitle": "Discover Win Pokies journey in the tech world!",
    "history.timeline": "Timeline",
    "history.milestones": "Major Milestones",
    "history.genres": "Expertise Areas",
    "history.impact": "Impact",

    // Common Actions
    "actions.explore": "Explore",
    "actions.discover": "Discover",
    "actions.join": "Join",
    "actions.start": "Start",
    "actions.continue": "Continue",
    "actions.finish": "Finish",

    // Footer
    "footer.about": "About Us",
    "footer.quick_links": "Quick Links",
    "footer.legal": "Legal",
    "footer.contact": "Contact",
    "footer.follow_us": "Follow Us",
    "footer.privacy_policy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.copyright": "© 2024 Win Pokies. All rights reserved.",
    "footer.description":
      "Win Pokies is the leading technology platform in UAE, offering a wide range of advanced technologies and smart solutions. Join thousands of UAE clients and enjoy the best tech experience in UAE.",
    "footer.copyright_text":
      "All rights reserved • Tech Solutions • AI • Blockchain",
    "footer.games": "Solutions",
    "footer.privacy_cookies": "Privacy & Cookies",
    "footer.company": "Company",
    "footer.newsletter.title": "Newsletter",
    "footer.newsletter.description":
      "Stay updated with the latest games and gaming news.",
    "footer.newsletter.placeholder": "Enter your email address",
    "footer.newsletter.subscribe": "Subscribe",

    // Support
    "support.title": "Support",
    "support.contact_us": "Contact Us",
    "support.faq": "Frequently Asked Questions",
    "support.help": "Help",
    "support.email": "Email",
    "support.phone": "Phone",

    // Login/Register
    "auth.login": "Sign In",
    "auth.register": "Sign Up",
    "auth.username": "Username",
    "auth.password": "Password",
    "auth.email": "Email",
    "auth.confirm_password": "Confirm Password",
    "auth.remember_me": "Remember Me",
    "auth.forgot_password": "Forgot Password?",
    "auth.sign_in": "Sign In",
    "auth.sign_up": "Sign Up",
    "auth.already_have_account": "Already have an account?",
    "auth.dont_have_account": "Don't have an account?",

    // Age Gate
    "age_gate.title": "Win Pokies & Age Verification",
    "age_gate.subtitle": "Win Pokies - Safe Technology for Everyone!",
    "age_gate.description":
      "Win Pokies is a safe technology platform for all ages. Experience advanced technologies and enjoy smart solutions in a secure environment.",
    "age_gate.play_button": "🚀 GET STARTED 🚀",
    "age_gate.age_checkbox": "I accept the terms of use and age restrictions",
    "age_gate.cookies_checkbox": "I accept cookies and privacy policy",
    "age_gate.responsibility_checkbox":
      "I understand that tech solutions are for professional use only",

    // Cookies
    "cookies.title": "🍪 Win Pokies & Cookies",
    "cookies.description":
      "We use essential cookies to keep Win Pokies running smoothly. No third-party trackers. Read more about our Privacy Policy.",
    "cookies.accept": "🍪 Accept",
    "cookies.decline": "🚫 Decline",

    // Hive: Altenum Wars
    "hive.title": "Hive: Altenum Wars",
    "hive.subtitle": "A MULTIPLAYER HERO SHOOTER WITH FRENETIC 2.5D ACTION",
    "hive.description":
      "Up to 10 players can fight in this multiplayer hero shooter with futuristic aesthetics and fast-paced combat. Prepare yourself to survive in the Hexadiums, hexagon-shaped stages divided into six zones, each with its own gravity and platforms to provide a frenetic experience.",
    "hive.play_now": "🎮 PLAY NOW",
    "hive.back_to_platform": "Back to Platform",
    "hive.stats.players": "Players",
    "hive.stats.races": "Races",
    "hive.stats.modes": "Modes",
    "hive.stats.graphics": "Graphics",
    "hive.features.title": "MAIN FEATURES",
    "hive.features.gravity.title": "CONQUER GRAVITY",
    "hive.features.gravity.description":
      "HIVE: Altenum Wars provides a nice twist over other shooters. The Hexadiums, the stages where all the 2.5D action takes place, are divided into six zones. Each one has its own gravity, platforms and open spaces. Be ready to even fight upside down!",
    "hive.features.heroes.title": "CHOOSE YOUR HERO",
    "hive.features.heroes.description":
      "There are four races in this futuristic mayhem: the human military (UFG), the Alteno's modified humans (NHC), the robots (EVO), and the evolved aliens (YILL). Each one has a wide range of skills and weapons with hundreds of possible combinations!",
    "hive.features.modes.title": "THREE GAME MODES",
    "hive.features.modes.description":
      "In Team Deathmatch, two teams will compete to obtain the most enemy kills. In King of the Hill, your side will have to defend strategic points across the stage. Survival mode is all about facing countless waves of enemies alone or in coop mode.",
    "hive.features.war.title": "THIS IS WAR",
    "hive.features.war.description":
      "Set in a distant future, our game happens during the war between the four races. As this conflict may destroy the whole universe, the Aeons propose to celebrate a tournament in order to decide who wins. Our future will be decided in the Hexadiums!",
    "hive.races.title": "THE FOUR RACES",
    "hive.races.ufg": "Human Military (UFG)",
    "hive.races.ufg_desc": "Human military forces with advanced technology",
    "hive.races.nhc": "Modified Humans (NHC)",
    "hive.races.nhc_desc": "Alteno's modified humans with superhuman abilities",
    "hive.races.evo": "Robots (EVO)",
    "hive.races.evo_desc": "Intelligent robots with advanced weaponry",
    "hive.races.yill": "Evolved Aliens (YILL)",
    "hive.races.yill_desc": "Evolved aliens with supernatural powers",
    "hive.modes.title": "GAME MODES",
    "hive.modes.deathmatch.title": "Team Deathmatch",
    "hive.modes.deathmatch.description":
      "Two teams compete to get the most enemy kills",
    "hive.modes.king.title": "King of the Hill",
    "hive.modes.king.description": "Defend strategic points across the stage",
    "hive.modes.survival.title": "Survival Mode",
    "hive.modes.survival.description":
      "Face countless waves of enemies alone or with friends",
    "hive.cta.title": "PREPARE FOR WAR!",
    "hive.cta.description":
      "Join the final battle in the Hexadiums and decide the fate of the universe!",
    "hive.demo.title": "Game Demo",
    "hive.demo.description": "Try Hive: Altenum Wars now!",
    "hive.demo.play": "🎮 PLAY NOW",

    // The Savior's Gang
    "saviors.title": "The Savior's Gang",
    "saviors.subtitle": "A BIZARRE RELIGIOUS SATIRE WITH SLAPSTICK HUMOR",
    "saviors.description":
      "Meet the Savior, a self-proclaimed messiah who must save his worshipers from the apocalypse. It will not be easy, though. His dove-like father is raging because of his son's crucifixion and has filled the world with deathly traps. Luckily, the Savior will receive help from a weird but hilarious cast of characters like his uncle Stan.",
    "saviors.play_now": "🎮 PLAY NOW",
    "saviors.back_to_platform": "Back to Platform",
    "saviors.stats.deaths": "Death Ways",
    "saviors.stats.traps": "Traps",
    "saviors.stats.graphics": "Graphics",
    "saviors.stats.humor": "Humor",
    "saviors.features.title": "MAIN FEATURES",
    "saviors.features.traps.title": "COUNTLESS TRAPS",
    "saviors.features.traps.description":
      "Even if the main goal of the game is to protect your worshipers from a horrible death, you will not be able to save everyone. Especially since each level adds new followers to guide among crumbling caves, sharp axes, and falling trunks, among many other traps.",
    "saviors.features.phone.title": "CHECK YOUR PHONE",
    "saviors.features.phone.description":
      "During your journey, the Savior will receive plenty of messages from other characters. These conversations are hysterically funny, but can become a dangerous distraction from all the traps around you. Choosing between memes and mankind is hard.",
    "saviors.features.physics.title": "FUNNY PHYSICS",
    "saviors.features.physics.description":
      "The Savior's Gang relies heavily on slapstick humor. Unreal Engine allowed us to create funny physics and include a wide range of deaths. There are more than 20 ways to die and characters can be dismembered, crushed, burned, drowned… You get it.",
    "saviors.features.satire.title": "HILARIOUS SATIRE",
    "saviors.features.satire.description":
      "Not many games dare to talk about religious issues and even less do it with The Savior's Gang satiric approach. In Catness Games we believe that innovation can be pursued in many different ways and stories are one of them. Take it with humor!",
    "saviors.characters.title": "CHARACTERS",
    "saviors.characters.savior": "The Savior",
    "saviors.characters.savior_desc":
      "Self-proclaimed messiah who must save his worshipers",
    "saviors.characters.father": "The Father",
    "saviors.characters.father_desc":
      "Dove-like father raging because of his son's crucifixion",
    "saviors.characters.stan": "Uncle Stan",
    "saviors.characters.stan_desc":
      "Weird but hilarious uncle who helps the Savior",
    "saviors.characters.worshipers": "Worshipers",
    "saviors.characters.worshipers_desc":
      "The Savior's followers who need protection",
    "saviors.gameplay.title": "GAMEPLAY",
    "saviors.gameplay.protection.title": "Protect Worshipers",
    "saviors.gameplay.protection.description":
      "Main goal is to protect your worshipers from horrible death in a world full of traps",
    "saviors.gameplay.distraction.title": "Phone Distraction",
    "saviors.gameplay.distraction.description":
      "Receive funny messages from other characters, but beware of traps!",
    "saviors.gameplay.physics.title": "Funny Physics",
    "saviors.gameplay.physics.description":
      "Enjoy funny physics with more than 20 ways to die",
    "saviors.cta.title": "JOIN THE GANG!",
    "saviors.cta.description":
      "Help the Savior save his worshipers from the apocalypse!",
    "saviors.demo.title": "Game Demo",
    "saviors.demo.description": "Try The Savior's Gang now!",
    "saviors.demo.play": "🎮 PLAY NOW",

    // SEO Meta
    "seo.description":
      "Leading technology solutions in UAE! Leverage advanced technologies and the best tech experience in UAE.",
    "seo.keywords":
      "tech solutions, artificial intelligence, blockchain, cloud computing, advanced technologies, uae",
    "seo.title": "Win Pokies - Advanced Technology Platform",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("ar");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "ar" || savedLanguage === "en")) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    const translation =
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ];
    return typeof translation === "string" ? translation : key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
