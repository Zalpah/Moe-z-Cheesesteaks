# Moe'z Famous Cheesesteaks — Website

An independently hosted marketing and ordering website for Moe'z Famous Cheesesteaks
(Ann Arbor, MI), built with Next.js (App Router), TypeScript, and Tailwind CSS. This
project does not depend on Wix at runtime — all branding, copy, menu data, and photos
are stored locally in this repo.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- No CMS, no database — content lives in `lib/business.ts`, `lib/menu.ts`, and `lib/reviews.ts`
- Deployable to Vercel, Netlify, or any Node-compatible host

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

Everything a restaurant owner would need to update lives in a few files:

| What                                   | File                |
| --------------------------------------- | -------------------- |
| Business name, address, phone, email, hours, social/order/catering links | `lib/business.ts` |
| Full menu (categories, items, prices, descriptions) | `lib/menu.ts` |
| Google review highlights + rating       | `lib/reviews.ts`     |
| Homepage sections                       | `components/home/*` |
| Menu page images (the 3 original menu photos) | `public/images/menu/` |
| Food photography                        | `public/images/food/` |

### Keeping hours accurate

`business.hours` and `business.hoursSummary` in `lib/business.ts` are the single
source of truth used across the header/footer, the homepage, the Contact page, and
the `FoodEstablishment` JSON-LD structured data. Edit them there — nowhere else.

### Keeping reviews up to date

`lib/reviews.ts` holds a static snapshot of the business's Google rating and a
handful of real, hand-picked reviews (pulled from the Google Business Profile). It is
**not** live-updating — refresh it manually every so often by copying new reviews
from Google Maps. Auto-updating requires the paid Google Places API (an API key and
billing account), which was intentionally left out to avoid extra cost and a required
external dependency. If you want to wire that up later, `GoogleReviews` and
`googleReviewSummary` in `lib/reviews.ts` are the only places that would need to
change to consume live API data instead of the static array.

## Contact form

The contact form (`/contact`) posts to `app/api/contact/route.ts`, which never
pretends a message was sent if nothing is configured. Configure **one** delivery
method via environment variables (see `.env.example`):

- **Formspree** (currently configured): `CONTACT_FORM_ENDPOINT=https://formspree.io/f/your-form-id`
- **Resend**: `RESEND_API_KEY` + `CONTACT_TO_EMAIL` (+ optional `CONTACT_FROM_EMAIL`)

If neither is set, the form shows a clear "not connected yet, please call/email us
directly" message instead of a fake success state.

### Spam protection

- A hidden honeypot field blocks most bots without any user-facing friction.
- Optional Google reCAPTCHA v2 (checkbox): set `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` and
  `RECAPTCHA_SECRET_KEY` (see `.env.example`). Get keys at
  [google.com/recaptcha/admin](https://www.google.com/recaptcha/admin) — **you must
  add every domain the form will run on** (e.g. `localhost` for local dev, plus your
  production domain and any Vercel preview domain) under that reCAPTCHA site's
  settings, or the widget will show an "invalid domain" error. When no site key is
  set, the widget doesn't render and the form works without it.

## Deployment

### Vercel (recommended)

1. Push this repo to GitHub (see below).
2. In Vercel, "Add New Project" → import the repo.
3. Framework preset: Next.js (auto-detected). No build command changes needed.
4. Add environment variables (Project Settings → Environment Variables):
   - `NEXT_PUBLIC_SITE_URL` — your production URL, e.g. `https://eatmoez.com`
   - `CONTACT_FORM_ENDPOINT` — your Formspree endpoint
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` / `RECAPTCHA_SECRET_KEY` — if using reCAPTCHA
5. Deploy. Add your production domain to the reCAPTCHA admin console's allowed
   domains list (see above) once you know it.
6. Point your domain's DNS at Vercel per their custom domain instructions.

### Netlify / other Node hosts

`npm run build` followed by `npm run start` works on any standard Node 18+ host.
Set the same environment variables listed above.

## Project structure

```
app/                 Routes (App Router): /, /menu, /catering, /about, /contact, 404
components/
  layout/             Header, Footer
  home/                Homepage sections
  menu/                Menu browser, category nav, image gallery, sticky CTA
  contact/             Contact form + reCAPTCHA widget
  ui/                  Shared primitives (Button, Container, FoodCard)
lib/                  Central data: business.ts, menu.ts, reviews.ts, cn.ts
public/images/        Local, optimized brand + food photography + menu images
```

## Scripts

```bash
npm run dev      # start dev server
npm run build    # production build (must pass before deploying)
npm run start    # run the production build locally
npm run lint     # ESLint
```

## Things to confirm before launch

- **Menu prices/descriptions** were transcribed directly from the official menu
  photos in `public/images/menu/` — double-check against the current printed menu
  before publishing, since prices change.
- **Hours** in `lib/business.ts` (Mon–Sat 11 AM–9 PM, Sunday closed) should be
  reconfirmed as the current, correct schedule.
- **reCAPTCHA domains** need to be added in the Google reCAPTCHA admin console
  before the contact form's spam protection will work outside of `localhost`.
