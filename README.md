# Karoo Kombuis: Website Concept & Brand Strategy

A free **Insight Forge** website concept for **Karoo Kombuis**, a restaurant in Prince Albert, Western Cape.
It is not a live site and has no affiliation with the restaurant unless the owners choose to go ahead.

**Opportunity score: 85/100.** The restaurant has 241 TripAdvisor reviews averaging 4.5/5, and no owned website, domain or professional email.

## Structure

| File | Purpose |
|---|---|
| `brand-strategy.html` | Brand strategy: findings, positioning, personality, audience, tone of voice, visual direction, messaging pillars, differentiation, **sitemap**, SEO/schema, next steps. Set to `noindex`. |
| `index.html` | Homepage: hero + CTA, story, signature Karoo lamb, experience packages, reviews (4.5/241), gallery teaser, hours/location/map, reservation form, Insight Forge next steps, NAP footer. Includes `Restaurant` JSON-LD. |
| `menu.html` | Menu & Experiences: placeholder categories (Signature, Starters, Mains, Vegetarian, Desserts, Drinks) + packages + gift voucher prompt. |
| `contact.html` | Reserve & Contact: quick call/WhatsApp/directions, booking form, hours, map, FAQ. |
| `assets/site.css` | Shared design system (palette, type, components). No framework and no build step. |
| `assets/site.js` | Mobile nav, scroll reveal, click-to-load map, concept form handling, `?experience=` preselect. |
| `sitemap.xml`, `robots.txt` | SEO basics (domain is a placeholder). |
| `Karoo Kombuis Concept.html` | Earlier one-page teaser (kept for reference). |

### Sitemap

```
Home (/)
├── Menu & Experiences (/menu)
│   ├── Private Dining & Events (/private-dining)   phase 2
│   └── Gift Vouchers (/gift-vouchers)             phase 2
├── Our Story (/about)          phase 2 (homepage section for now)
├── Gallery (/gallery)          phase 2 (homepage teaser for now)
├── Guest Reviews (/reviews)    phase 2 (homepage band for now)
└── Reserve & Contact (/contact)
```

## Content rules

The pages use only confirmed public facts: 241 TripAdvisor reviews, a 4.5 average, guests describing the restaurant as "quirky" and "memorable", the Karoo lamb, and personal/theatrical hosting.
Anything else is marked **"Placeholder – confirm with owner"** or tagged `TBC`. That includes the street address, hours, menu, prices, WhatsApp number, packages and photos.
Review *themes* are summarised. No guest quotes were invented.

> **Verify before launch:** the restaurant phone number `+27 23 541 1110` comes from the earlier concept file in this repo, not from the brief. Confirm it with the owner.

## Deploy

**GitHub Pages:** Settings → Pages → Source: *Deploy from a branch* → choose the branch and `/ (root)`. The site goes live at `https://<user>.github.io/<repo>/`. `.nojekyll` is included.

**Vercel:** Import the repo → Framework preset *Other* → no build command, output directory `/`. Deploy.

Local preview: `python3 -m http.server` → http://localhost:8000

## Before go-live checklist

1. Replace `https://www.example.co.za` in canonical/OG tags, JSON-LD, `sitemap.xml` and `robots.txt`.
2. Fill in the address, hours, menu, prices and WhatsApp number. Add `openingHoursSpecification` and `sameAs` (Facebook, TripAdvisor URLs) to the JSON-LD.
3. Swap every `.ph` placeholder for real, compressed photos (WebP, ~1600px wide max, descriptive `alt`). Add a 1200×630 `assets/og-image.jpg`.
4. Connect the booking form (Formspree / Netlify Forms / Web3Forms) to the restaurant's inbox. Keep phone and WhatsApp as the primary CTAs.
5. Remove the concept banner, the "Next steps" sections and the concept footer column.

## Recommended next technical steps (priority order)

| # | Step | Why | Effort |
|---|---|---|---|
| 1 | **Claim/verify the Google Business Profile** (manual check needed) | Biggest lever for "restaurant Prince Albert" map-pack visibility. Hours, photos, booking link. | 1 hr + postcard/video verification |
| 2 | **Register a `.co.za` domain** + professional email (e.g. `hello@…`) via Google Workspace or Zoho | Owned identity; trust on bookings | ~R100–R200/yr domain (verify current pricing) |
| 3 | **Keep NAP identical** everywhere: site, GBP, Facebook, EatOut, TripAdvisor, Prince Albert Tourism, RestaurantGuru, Dining-Out | Local-SEO consistency signal | 2–3 hrs |
| 4 | **Point every directory's "website" field to the new domain** | Turns rented traffic into owned traffic; backlinks | 1 hr |
| 5 | **Analytics**: GA4 or Plausible, plus Google Search Console (submit `sitemap.xml`) | Measure calls, WhatsApp taps and form submits as conversions | 1 hr |
| 6 | **Structured data check** with Google's Rich Results Test | Make sure the `Restaurant` schema is valid | 15 min |

**Deliberate choice:** the schema does *not* include `aggregateRating`. Google ignores review stars that a business adds about itself on its own site, and the markup can be flagged. The 4.5/241 figure is shown visibly and links to TripAdvisor instead.

## Contact for next steps

Stiaan du Plessis, Insight Forge
- Email: iamstiaan@gmail.com
- Phone / WhatsApp: 071 770 0072 (https://wa.me/27717700072)
- Portfolio: https://911duplessis.github.io/Veyra/

*There is no cost and no obligation.*
