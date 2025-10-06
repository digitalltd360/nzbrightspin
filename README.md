# Bright Spin

A cutting-edge gaming platform built with Next.js, TypeScript, MUI, and Redux Toolkit.

## Features

- 🎮 Premium digital gaming platform
- 📱 Responsive design with mobile-first approach
- 🍪 Cookie consent management
- 🔞 Age verification (18+)
- 📄 Comprehensive pages: About, Contact Us, Privacy, Terms
- 🗺️ SEO-optimized with sitemap.xml
- 🎨 Modern UI with Material-UI components

## Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS + Material-UI
- **State Management**: Redux Toolkit
- **Form Handling**: React Hook Form + Zod validation
- **SEO**: next-seo
- **Deployment**: Cloudflare Pages
- **Technologies**: Gaming, Digital Entertainment, Cloud Computing, IoT

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

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

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_BASE_URL=https://brightspin.com
```

## Deployment

The project is configured for static export and Cloudflare Pages deployment:

- Static export enabled in `next.config.ts`
- Wrangler configuration in `wrangler.toml`
- Build scripts for deployment

## Pages

- `/` - Home page with gaming platform preview
- `/games` - Games page with digital entertainment showcase
- `/services` - Services page with gaming solutions
- `/contact` - Contact Us form with validation
- `/privacy` - Privacy policy
- `/terms` - Terms and conditions
- `/sitemap.xml` - SEO sitemap

## License

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
