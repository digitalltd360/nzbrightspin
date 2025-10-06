# Bright Spin

منصة ألعاب رقمية متطورة مبنية بـ Next.js و TypeScript و MUI و Redux Toolkit.

## المميزات

- 🎮 منصة ألعاب رقمية متميزة
- 📱 تصميم متجاوب مع نهج الهاتف المحمول أولاً
- 🍪 إدارة موافقة ملفات تعريف الارتباط
- 🔞 التحقق من العمر (18+)
- 📄 صفحات شاملة: من نحن، اتصل بنا، الخصوصية، الشروط
- 🗺️ محسن لمحركات البحث مع خريطة الموقع
- 🎨 واجهة مستخدم حديثة مع مكونات Material-UI

## التقنيات المستخدمة

- **الإطار**: Next.js 15 مع TypeScript
- **التصميم**: Tailwind CSS + Material-UI
- **إدارة الحالة**: Redux Toolkit
- **معالجة النماذج**: React Hook Form + Zod validation
- **تحسين محركات البحث**: next-seo
- **النشر**: Cloudflare Pages
- **التقنيات**: الألعاب، الترفيه الرقمي، الحوسبة السحابية، إنترنت الأشياء

## البدء

### التطوير

```bash
npm install
npm run dev
```

افتح [http://localhost:3000](http://localhost:3000) في متصفحك.

### بناء للإنتاج

```bash
npm run build
```

### Deploy to Cloudflare Pages

```bash
# Auth to Cloudflare
npx wrangler Auth

# Deploy
npm run deploy
```

## Project Structure

```
src/
├── app/                    # App configuration
│   ├── providers/         # Theme & Store providers
│   └── store/            # Redux store
├── entities/             # Business entities
│   ├── ageGate/         # Age verification
│   ├── contact/         # Contact Us form
│   └── cookieConsent/   # Cookie management
├── pages/               # Next.js pages
├── shared/              # Shared components
│   └── ui/layout/       # Layout components
└── widgets/             # Feature widgets
    └── game/            # Game iframe component
```

## متغيرات البيئة

إنشاء ملف `.env.local`:

```env
NEXT_PUBLIC_BASE_URL=https://brightspin.ae
```

## النشر

المشروع مُكوَّن للتصدير الثابت ونشر Cloudflare Pages:

- التصدير الثابت مفعل في `next.config.ts`
- تكوين Wrangler في `wrangler.toml`
- سكريبتات البناء للنشر

## الصفحات

- `/` - الصفحة الرئيسية مع معاينة منصة الألعاب
- `/games` - صفحة الألعاب مع عرض الترفيه الرقمي
- `/services` - صفحة الخدمات مع حلول الألعاب
- `/contact` - نموذج اتصل بنا مع التحقق
- `/privacy` - سياسة الخصوصية
- `/terms` - الشروط والأحكام
- `/sitemap.xml` - خريطة الموقع لمحركات البحث

## الترخيص

# Wrum Spinplayground

# Wrum Spinplayground

# Wrum Spinplayground

# wrumspin

# wrumspin

# realgamingdeals

# realgamingdeals

# subtropiceveningspin

# SubTropicEveningSpin

# nzbrightspin
