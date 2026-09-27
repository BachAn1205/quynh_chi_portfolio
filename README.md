# Phan Hoàng Quỳnh Chi — Portfolio Website

> **Curious by nature. Strategic by thought. Driven to create.**  
> Bridging the cultural heartbeat of Vietnam's Central Highlands with predictive analytics, economic systems, and circular innovation.

---

## 🌟 Tech Stack
- **Framework:** Next.js 16 (App Router, Turbopack, React 19)
- **Styling:** Tailwind CSS v4, OKLCH / Coffee & Forest Green Palette, Blueprint Grid Patterns
- **Icons:** Lucide React
- **Typography:** Anton (Headings), Fragment Mono (Data & Technical Badges), Inter (Body)
- **Deployment Target:** Vercel

---

## 📂 Project Structure
```
src/
├── app/                  # Next.js App Router Pages
│   ├── about/            # About Quỳnh Chi narrative & background
│   ├── case-study/       # Research & enterprise deep dives
│   │   └── [slug]/
│   ├── contact/          # Interactive contact & dialogue
│   ├── journal/          # Academic essays & research papers
│   │   └── [slug]/
│   ├── legal/            # Privacy Policy & Terms of Service
│   ├── globals.css       # Tailwind v4 theme & color tokens
│   ├── layout.tsx        # Root layout, metadata & SEO
│   └── page.tsx          # 6 Core Portfolio Sections
├── components/
│   ├── layout/           # Navbar & Footer
│   ├── sections/         # Hero, About, The Mind, The Heart, The Competitor
│   └── ui/               # Interactive Resume Dossier Modal
└── data/                 # Case studies & journal post entries
public/
└── images/quynhchi/      # Curated high-res imagery & avatars
```

---

## 🚀 Getting Started Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run TypeScript checks
npm run typecheck

# Run ESLint
npm run lint

# Production build
npm run build
```

---

## 🌐 Deploy to Vercel

1. Push this repository to GitHub: `https://github.com/BachAn1205/quynh_chi_portfolio`
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import the `quynh_chi_portfolio` repository.
4. Framework Preset: **Next.js** (Automatically detected).
5. Click **Deploy**. No special environment variables required.
