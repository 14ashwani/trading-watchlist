# Trading Watchlist — PWA

A personal stock watchlist app you can host on any website and install on Android (or iOS/desktop) as a native-feeling app.

---

## Files

```
trading-watchlist/
├── index.html        ← Main app (entire UI + logic)
├── manifest.json     ← PWA metadata (name, icons, colours)
├── sw.js             ← Service worker (offline support)
├── icon-192.png      ← App icon for Android home screen
├── icon-512.png      ← App icon for splash screen
└── README.md         ← This file
```

---

## Deploying to Your Website

Upload all files to **any web server** that serves over **HTTPS** (required for PWA).

### Option A — GitHub Pages (Free, easiest)
1. Create a new GitHub repo (e.g. `trading-watchlist`)
2. Upload all files to the repo root
3. Go to **Settings → Pages → Source: main branch / root**
4. Your app will be live at `https://yourusername.github.io/trading-watchlist/`

### Option B — Netlify (Free, drag-and-drop)
1. Go to https://netlify.com and sign up
2. Drag the entire `trading-watchlist/` folder onto the Netlify dashboard
3. Done — Netlify gives you a free HTTPS URL instantly

### Option C — Your own hosting
Upload all files to your web server's public directory (e.g. `public_html/watchlist/`).
Make sure HTTPS is enabled (required for PWA install).

---

## Installing on Android

1. Open your hosted URL in **Chrome on Android**
2. Wait a few seconds — Chrome shows a **"Add to Home Screen"** banner
   - Or tap the **⬇ Install App** button in the top bar
   - Or tap Chrome menu (⋮) → "Add to Home screen"
3. Tap **Install** — the app appears on your home screen
4. Open it — it runs fullscreen like a native app, works offline too ✓

---

## Installing on Desktop (Chrome / Edge)

1. Open the URL in Chrome or Edge
2. Look for the install icon (⊕) in the address bar
3. Click it → Install

---

## Features

- **4 trading sections:** Long Term · Short Term · Swing · Intraday
- **Per-stock tracking:** Symbol, Company, Buy Price, Target, Stop Loss, Notes, Status
- **Auto-calculated metrics:** Return %, Risk %, Risk:Reward ratio
- **Status workflow:** Watching → Ready to Buy → Bought → Completed
- **Offline support:** Works without internet after first load
- **Data persistence:** All data saved in browser's localStorage (private, stays on your device)
- **Mobile-first design:** Touch-friendly, safe-area aware, smooth drawer UX

---

## Customising

All styles are CSS variables at the top of `index.html` — change colours, fonts, or add new sections by editing the `SECS` array in the `<script>` block.

---

## Notes

- Data is stored in **localStorage** — private to your browser/device
- To back up your stocks: open browser console → `localStorage.getItem('trading-wl-v1')`
- To transfer to another device: copy that JSON and `localStorage.setItem('trading-wl-v1', '<paste>')` on the new device
