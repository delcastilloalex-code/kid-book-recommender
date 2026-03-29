# Story Scout: Kid Book Recommender

Story Scout is a bilingual (English/German) book recommendation web app for young readers, currently tuned for ages 5-16.

It helps parents and kids:
- Pick story themes, reading mood, and avoids
- Get personalized recommendations with reasoning
- Explore "stretch" picks outside the usual comfort zone
- Generate a simple 7-day reading plan
- Open parent-facing Amazon purchase links (affiliate-ready tag support)

## What Is Built

- Responsive single-page UI (`index.html`, `styles.css`, `script.js`)
- English/German language toggle (US and German flag switch)
- Curated mixed catalog:
  - English middle-grade and YA titles
  - German titles for similar age bands
- Local persistence via `localStorage` for profile and preferences
- Parent disclosure area for affiliate links

## Run Locally

This is a static site. Start the included local server:

```powershell
node .\local-server.js
```

Then open:

`http://localhost:8080`

## Project Structure

- `index.html` - UI structure and content sections
- `styles.css` - visual design, layout, responsive behavior
- `script.js` - recommendation logic, i18n, catalog, interactions
- `local-server.js` - lightweight local static server

## Affiliate Notes

- Affiliate links are generated with an Amazon Associates tag in `script.js`.
- Replace:

```js
const AMAZON_ASSOCIATE_TAG = "yourtag-20";
```

with your real tag before production use.

- Keep disclosure visible and parent-facing.

## Future Improvements

- Exact product page links by ISBN/ASIN (instead of search links)
- Optional admin data source (`books.json` or backend CMS)
- Stronger age-band tuning (9-12 vs 13-16 profiles)
- Optional analytics for recommendation and click-through insights

