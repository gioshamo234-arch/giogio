# Nouvelle Vie / Nuvelve — Georgian construction website demo

A responsive, lightweight **static website prototype**. No installation or API keys required: open `index.html` in a browser, or upload all files to a standard static hosting provider. Language: Georgian. Works without a backend, except external Google Maps / Google Fonts / decorative Unsplash image will require internet.

## Included

- Responsive landing page, services, house-design examples, real publicly mentioned projects, FAQ, location, and contact.
- Phone, email, Facebook page, Google Maps links.
- Interactive **illustrative price estimator** with historical Facebook advertised rates of **$250/m² black frame** and **$400/m² white frame**. Not a legally binding quote or a claim that those are current rates.
- Enquiry form that opens a prefilled email in the visitor's email app; **does not send email itself** and **does not persist data**. Before real commercial launch, connect a backend/form service if you want in-website submissions.
- SEO metadata, JSON-LD business data, accessible navigation, reduced-motion handling.
- Illustrative architecture hero photo from Unsplash; this is **not a photograph of Nouvelle Vie's own work**, and is marked accordingly. All drawn house visual diagrams are intentionally illustrative.

## Important business checks BEFORE publishing

1. Confirm the company authorizes the brand name, phone **+995 511 74 98 74**, office **16 Vazha-Pshavela Avenue, Tbilisi**, and email **nuvelve0101@gmail.com**.
2. Confirm which of the apparently related Facebook pages is the primary account: `facebook.com/61592627484544` (Nuvelve მშენებლობა) and `facebook.com/61592339913511` (Nouvelle Vie Nouvelle Vie). The phone/address match across posts but page ownership is not independently audited.
3. Confirm current pricing, what is included in black/white frame, materials, timelines, permits, guarantee, and regions served. The website clearly labels posted prices as past examples.
4. Obtain permission and original photographs for real completed works. Add them to the portfolio; do not present stock/illustrations as company-built houses.
5. Confirm project #24/#35 details if keeping them. The 54m² example was indexed as a Facebook page post, but an exact single-post link was not verified; link points to the page instead.
6. Confirm privacy policy / data protection / cookie rules once a real submission backend and analytics are added.
7. If deploying, optionally add real domain, favicon, analytics, and proper email form integration.

## Customization

- Edit content in `index.html`.
- Colors and responsive layout in `styles.css`.
- Edit indicative calculator rates at the top of `script.js` (`INDICATIVE_RATES_USD`).
- External decorative photo can be replaced with an original licensed photo by changing `.hero-photo` background in `styles.css`.

## Research sources (public, not a legal or ownership verification)

- Google Maps place supplied by user, publicly indexed at 16 Vazha Pshavela Ave and +995 511 74 98 74.
- Facebook page: https://www.facebook.com/61592627484544/
- Facebook project posts:
  - Black frame rate ~$250/m²: https://www.facebook.com/61592627484544/posts/122111640861420916/
  - Project 24 / 70m²: https://www.facebook.com/61592627484544/posts/122115427539420916/
  - Project 35 / 100m²: https://www.facebook.com/61592627484544/posts/122114019609420916/
  - Dusheti house: https://www.facebook.com/61592339913511/posts/122125975665411330/
  - Khashuri house: https://www.facebook.com/61592339913511/posts/122111767737411330/

## Local quick preview

Double-click `index.html`, or for a local HTTP server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/` from within the website folder.