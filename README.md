# Mohamed Junaid — Developer Portfolio

A premium, fully responsive portfolio website for a **Flutter Mobile Application Developer**. Built with an Apple-inspired, minimalistic aesthetic featuring glassmorphism, subtle animated gradients, dark/light mode, and smooth motion.

![Next.js](https://img.shields.io/badge/Next.js-15-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0080)

---

## ✨ Features

- **Modern stack** — Next.js 15 (App Router) · React 18 · TypeScript · Tailwind CSS
- **Animations** — Framer Motion (fade-in on scroll, hover cards, animated counters, page/loader transitions, floating shapes, button ripples)
- **Design** — Glassmorphism, subtle gradients, professional typography (Inter), fully responsive (mobile → tablet → desktop)
- **Dark / Light mode** — system-aware toggle via `next-themes`
- **SEO** — metadata, Open Graph & Twitter cards (auto-generated OG image), `robots.txt`, `sitemap.xml`, JSON-LD structured data, SVG favicon, web manifest
- **Performance** — `next/image` lazy loading, font optimization, minimal dependencies, optimized for high Lighthouse scores
- **Accessible** — semantic HTML, ARIA labels, keyboard focus states, `prefers-reduced-motion` support

## 🗂 Sections

Hero · About · Skills · Experience (timeline) · Featured Projects (with App Store / Google Play buttons) · Education · Certifications (animated logo cloud) · Contact (form) · Footer

---

## 🚀 Getting Started

### Prerequisites
- Node.js **18.18+** (Node 20+ recommended)
- npm (or pnpm / yarn / bun)

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
# → open http://localhost:3000

# 3. Create a production build
npm run build

# 4. Run the production server locally
npm start
```

### Lint

```bash
npm run lint
```

---

## ✏️ Customization

Almost everything is data-driven — no need to touch the components:

| What | Where |
| --- | --- |
| Name, role, email, phone, social links, resume URL | [`data/site.ts`](data/site.ts) |
| About, skills, experience, projects, education, certifications | [`data/content.ts`](data/content.ts) |
| SEO / metadata | [`app/layout.tsx`](app/layout.tsx) |
| Colors, animations, fonts | [`tailwind.config.ts`](tailwind.config.ts) & [`app/globals.css`](app/globals.css) |

**Resume:** replace `public/resume.pdf` with your own.

**Project store links:** add `playStoreUrl` / `appStoreUrl` to each project in `data/content.ts`. If a URL is empty, the store button is automatically disabled (greyed out) with a "Coming soon" tooltip.

**Project images:** swap the Unsplash placeholder URLs in `data/content.ts` with your real app screenshots (drop them in `public/` and reference e.g. `/projects/approach.png`).

---

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout, SEO metadata, fonts, theme provider
│   ├── page.tsx            # Home page (assembles all sections)
│   ├── globals.css         # Design tokens, glassmorphism, utilities
│   ├── opengraph-image.tsx # Auto-generated social share image
│   ├── robots.ts           # robots.txt
│   └── sitemap.ts          # sitemap.xml
├── components/
│   ├── background/         # AnimatedBackground
│   ├── layout/             # Navbar, Footer, Loader, BackToTop
│   ├── sections/           # Hero, About, Skills, Experience, Projects, ...
│   ├── theme/              # ThemeProvider
│   └── ui/                 # Button, Reveal, Counter, ThemeToggle, StoreButtons, ...
├── data/
│   ├── site.ts             # Personal info & links
│   └── content.ts          # Portfolio content
├── lib/
│   └── utils.ts            # cn() helper
└── public/                 # favicon, manifest, resume.pdf
```

---

## ☁️ Deploy to Vercel

### Option A — Vercel Dashboard (recommended)

1. Push this project to a GitHub / GitLab / Bitbucket repository.
2. Go to **[vercel.com/new](https://vercel.com/new)** and **Import** the repository.
3. Vercel auto-detects **Next.js** — no configuration needed. Framework Preset: `Next.js`, Build Command: `next build`, Output: `.next`.
4. Click **Deploy**. In ~1 minute you get a live URL like `your-portfolio.vercel.app`.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

### 🌐 Connect a Custom Domain

1. In your Vercel project → **Settings → Domains**.
2. Enter your domain (e.g. `mohamedjunaid.dev`) and click **Add**.
3. Point your domain at Vercel with your DNS provider:
   - **Apex/root domain** (`example.com`) → add an **A record** to `76.76.21.21`.
   - **Subdomain** (`www.example.com`) → add a **CNAME** record to `cname.vercel-dns.com`.
   - *(Or transfer your domain's nameservers to Vercel for automatic setup.)*
4. Vercel provisions a free **SSL certificate** automatically. Once DNS propagates (usually minutes), your site is live over HTTPS.
5. Update `siteConfig.url` in [`data/site.ts`](data/site.ts) to your final domain so SEO metadata, the sitemap, and OG tags use the correct URL.

---

## 📄 License

MIT — free to use and adapt.

Built with ❤️ using Next.js.
