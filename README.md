<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f1530,50:4f46e5,100:9333ea&height=120&section=header" alt="" width="100%"/>

# Portfolio

A fast, modern personal portfolio for **Stephen Kisangi**, built with Next.js 15, React 19 and Tailwind CSS v4. It presents my story, skills, live products, case studies, certifications and research, with a working contact form and a light/dark theme.

[![Live site](https://img.shields.io/badge/Live%20site-stephenkisangi.vercel.app-4f46e5?style=for-the-badge&logo=vercel&logoColor=white)](https://stephenkisangi.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Stephen%20Kisangi-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/stephen-kisangi-ba3b12231)

![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on_Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

---

## Overview

The site is a single-page portfolio with a dedicated case-study page for each featured product. All of its content lives in two typed data files, so updating the portfolio never means touching a component.

| Section | What it shows |
| :-- | :-- |
| **Hero** | Name, rotating roles, short pitch, and links to CV, GitHub and LinkedIn |
| **Metrics** | Animated counters for key impact numbers |
| **My story** | Background, education and the work behind the products |
| **What I can do** | Skills and experience timeline |
| **What I've built** | Live products and projects, each linking to a case study |
| **Proof** | Certifications and awards as a gallery |
| **Deep dive** | Undergraduate research summary |
| **Say hi** | Contact form and direct contact links |

## Features

- **Case-study pages** at `/projects/[slug]`, each covering the problem, approach, stack, system flow and impact
- **Light and dark themes**, remembered between visits and applied before first paint to avoid a flash
- **Smooth motion** with Framer Motion: preloader, scroll progress bar, animated counters and a skills marquee
- **Accessible motion**: animations switch off for visitors who prefer reduced motion
- **Working contact form** backed by a validated API route that sends mail through [Resend](https://resend.com)
- **Protected image route**: personal photos and certificates are served from a private folder through `/api/img`, which only answers same-site image requests
- **SEO ready**: generated Open Graph image, sitemap, robots file and per-page metadata
- **Analytics and performance** tracking with Vercel Analytics and Speed Insights

## Tech Stack

| Layer | Tools |
| :-- | :-- |
| Framework | Next.js 15 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS v4, CSS variables for theming |
| Motion and icons | Framer Motion, Lucide, React Icons |
| Email | Resend API |
| Hosting | Vercel |

## Getting Started

**Prerequisites:** Node.js 18.18 or newer and npm.

```bash
# 1. Clone the repository
git clone https://github.com/Crowndus/Portfolio.git
cd Portfolio

# 2. Install dependencies
npm install

# 3. (Optional) enable the contact form locally
cp .env.example .env.local
# then add your RESEND_API_KEY to .env.local

# 4. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

| Script | Purpose |
| :-- | :-- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm start` | Serve the production build |

## Environment Variables

| Variable | Required | Description |
| :-- | :-: | :-- |
| `RESEND_API_KEY` | For the contact form | API key from Resend. Without it the form returns a "not configured" response and the rest of the site works normally. |

On Vercel, add it under **Project, Settings, Environment Variables**.

## Customizing the Content

| To change | Edit |
| :-- | :-- |
| Name, roles, contact links, metrics, about text, experience, projects, certificates, research | `lib/data.ts` |
| Case-study pages | `lib/cases.ts` |
| Theme colors and animations | `app/globals.css` |
| Page metadata and fonts | `app/layout.tsx` |
| CV download | Add `public/Stephen_Kisangi_CV.pdf` |

**Adding an image:** place the file in `private-assets/`, add its path to the `FILES` allowlist in `app/api/img/route.ts`, then reference it as `/api/img?f=your/file.jpg`.

## Project Structure

```text
.
├── app/
│   ├── api/
│   │   ├── contact/route.ts        # Contact form endpoint (Resend)
│   │   └── img/route.ts            # Protected image route
│   ├── projects/[slug]/page.tsx    # Case-study pages
│   ├── layout.tsx                  # Fonts, metadata, theme bootstrap
│   ├── page.tsx                    # Home page composition
│   ├── globals.css                 # Theme tokens and animations
│   ├── opengraph-image.tsx         # Generated social preview
│   ├── sitemap.ts
│   └── robots.ts
├── components/                     # Hero, Sections, Nav, Motion, Preloader, ...
├── lib/
│   ├── data.ts                     # Site content
│   └── cases.ts                    # Case-study content
├── private-assets/                 # Photos, certificates, project covers
├── public/                         # Static files (logo, CV)
└── .env.example
```

## Deployment

The project deploys to Vercel with no extra configuration.

1. Push this repository to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new). The framework is detected as Next.js automatically.
3. Add `RESEND_API_KEY` in the project's environment variables.
4. Deploy. Every push to `main` redeploys automatically.

`next.config.mjs` already includes `private-assets/` in the serverless bundle for the image route.

## A Note on the Images

The `/api/img` route keeps casual visitors from hotlinking or right-click saving personal photos and certificates, and an allowlist stops it serving any other file. It is a deterrent, not a vault: anything a browser can display can still be copied. Because `private-assets/` is part of this repository, keep the repository **private** if those files should not be publicly downloadable.

## Author

**Stephen Kisangi**, AI engineer and founder of Edurown.

[![GitHub](https://img.shields.io/badge/GitHub-Crowndus-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Crowndus)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/stephen-kisangi-ba3b12231)
[![Email](https://img.shields.io/badge/Email-Say%20hello-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:stephen.crowndus1@gmail.com)

## License

All rights reserved. The code structure may be used for learning, but please do not reuse the personal content, photos or certificates.

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:9333ea,50:4f46e5,100:0f1530&height=80&section=footer" alt="" width="100%"/>
