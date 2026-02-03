# CyberLabsWeb - Modern Weboldal

Modern, reszponzív weboldal React + TypeScript + Tailwind CSS technológiákkal.

## 🚀 Tech Stack

- **React 18** + TypeScript
- **Vite** - Gyors build eszköz
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animációk
- **Three.js** - 3D elemek

## 📦 Telepítés

```bash
npm install
npm run dev
```

## 🔧 Build

```bash
npm run build
npm run preview
```

---

# 🎯 SEO Optimalizálások

## Meta Tagek (index.html)

```html
<!-- Alapvető SEO -->
<title>Céges Weboldal Készítés Garanciával | Szerezz Több Vevőt | CyberLabsWeb</title>
<meta name="description" content="Nem jön elég ajánlatkérés? Olyan weboldalt építünk, ami elad helyetted. Villámgyors, modern és AI-optimalizált weboldal készítés garanciával.">
<meta name="keywords" content="céges weboldal készítés, vevőszerző weboldal, gyors weboldal készítés, weboldal készítés garanciával, webfejlesztés, weblap készítés, egyedi weblap, seo optimalizálás, kkv weboldal, cyberlabs, cyberlabsweb">

<!-- Open Graph (Facebook, LinkedIn) -->
<meta property="og:title" content="Céges Weboldal Készítés Garanciával | Szerezz Több Vevőt | CyberLabsWeb">
<meta property="og:description" content="Nem jön elég ajánlatkérés? Olyan weboldalt építünk, ami elad helyetted. Garanciával.">
<meta property="og:type" content="website">
<meta property="og:image" content="URL_TO_IMAGE">
<meta property="og:site_name" content="CyberlabsWeb">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Céges Weboldal Készítés Garanciával | CyberLabs">
```

## Strukturált Adat (JSON-LD)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CyberLabsWeb",
  "url": "https://cyberlabs.hu",
  "logo": "https://cyberlabs.hu/logo.png"
}
</script>
```

---

# ⚡ Performance Optimalizálások

## 1. Mobil-first Blur Csökkentés (index.css)

A nagy blur() effektek nagyon CPU-igényesek mobilon.

```css
/* Mobilon kisebb blur */
.gradient-orb {
  filter: blur(30px);
  will-change: transform;
  transform: translateZ(0); /* GPU gyorsítás */
}

/* Desktop-on nagyobb blur */
@screen lg {
  .gradient-orb {
    filter: blur(60px);
  }
}
```

## 2. Háttér Dekoráció Mobil Kikapcsolása

```tsx
{/* Desktop-only blur background */}
<div className="hidden lg:block absolute top-0 right-0 w-[500px] h-[500px] bg-neonBlue/5 rounded-full blur-[120px] pointer-events-none" />
```

## 3. Backdrop-blur Mobil Kikapcsolása

```tsx
{/* Mobilon nincs backdrop-blur, helyette sötétebb háttér */}
<div className="p-6 rounded-2xl bg-surface/60 lg:bg-surface/40 border border-white/5 lg:backdrop-blur-md shadow-2xl">
```

## 4. Shadow Effektek Csak Desktop-on

```tsx
<div className="h-full bg-neonBlue lg:shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
```

## 5. GPU-gyorsított CSS Animációk

```css
/* Érdemes transform-ot használni width/height helyett */
@keyframes progress-grow {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

.animate-progress {
  transform-origin: left;
  animation: progress-grow 0.8s ease-out forwards;
}
```

## 6. Framer Motion Optimalizálás

```tsx
// Rövidebb animációk, kevesebb delay
<motion.div
  initial={{ width: 0 }}
  whileInView={{ width: "30%" }}
  viewport={{ once: true }} // Csak egyszer animál
  transition={{ duration: 0.5, ease: "easeOut" }} // Gyors
/>
```

## 7. Lazy Loading 3D Komponensek

```tsx
const RetroTerminal3D = lazy(() => import('./ui/RetroTerminal3D'));

// Csak desktop-on renderel
{!isMobile && (
  <Suspense fallback={null}>
    <RetroTerminal3D />
  </Suspense>
)}
```

---

# 🎨 Kontraszt & Olvashatóság

## Szöveg Kontraszt Javítás

```tsx
// ROSSZ - túl halványan
<p className="text-muted">Szöveg</p>

// JÓ - fehérebb, vastagabb
<p className="text-white/80 font-medium">Szöveg</p>

// LEGJOBB - teljesen fehér, félkövér
<p className="text-white font-semibold">Szöveg</p>
```

## Kártya Háttér Kontraszt

```tsx
// Sötétebb háttér + világos szegély
<div className="bg-black/60 border border-neonBlue/20">
  <p className="text-white">Szöveg jól olvasható</p>
</div>
```

## Szekció Háttér Váltás

```tsx
// Használj különböző surface színeket
<Section className="bg-surface2">   {/* #0F1220 */}
<Section className="bg-surface3">   {/* #141825 - világosabb */}
```

---

# 📱 Reszponzív Design Tippek

## Tailwind Breakpointok

```
sm: 640px
md: 768px
lg: 1024px  // Desktop határvonal
xl: 1280px
```

## Mobile-first Megközelítés

```tsx
// Mobilon kisebb, desktop-on nagyobb
<h1 className="text-3xl sm:text-4xl lg:text-5xl">Címsor</h1>

// Mobilon stack, desktop-on row
<div className="flex flex-col lg:flex-row gap-4">
```

---

# 🔗 Hasznos Linkek

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite](https://vitejs.dev/)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)

---

## 📄 Licenc

MIT License
