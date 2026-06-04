# CyberLabs Web — munkamenet státusz

> Utolsó frissítés: 2026-05-31  
> **Commit:** `aa954de` (lokálisan) — GitHub push még függőben (11 commit előtt `origin/main`-nél).

---

## Röviden hol tartunk

A projekt **fordul és buildel** (`tsc` ✅, `npm run build` ✅ az utolsó ellenőrzéskor).  
A munka két szálra ment:

1. **Szükséges kódminőség / bugfix** — nagyrészt kész, nem commitolva.
2. **Design szépítés** — elkezdve, **félúton vagyunk** (robot tuning + layout/radius még hátra).

---

## Mit csináltunk eddig

### 1. Mobil szél / levágott referencia probléma ✅

**Probléma:** A referenciák szekciónál mobilon a jobb szélen sötét sáv / vízszintes túlcsordulás — mintha nem lenne hely.

**Ok:** A `Portfolio` szekció `overflow-visible`-re volt állítva, így a háttér orb-ok (`-right-[20%]`) kilógtak a viewporton túl.

**Javítás:**
- `src/app/globals.css` — globális `overflow-x: clip` + `max-width: 100%` (`html`, `body`)
- `src/components/sections/Portfolio.tsx` — `overflow-visible` → `overflow-hidden`

### 2. Kódminőség / típusok (részben) ✅

**LanguageContext / i18n**
- `any` helyett `unknown` + típusos navigáció a fordításokban
- A generikus `t<T>()` megközelítés **visszavonva** (Team `motion.span` TS hibát okozott)
- Helyette: `(t('key') as unknown as KonkrétTípus[])` a szekciókban

**Card komponens**
- `CardProps` kiterjesztve `React.HTMLAttributes<HTMLElement>`-re
- Extra prop-ok (pl. `itemScope`, `itemType`) most ténylegesen továbbítódnak
- Team szekció microdata attribútumai működnek `as any` nélkül

**Egyéb `any` / típus javítások** (23 fájl érintett):
- `Maintenance.tsx` — `LucideIcon` típus
- `TechStack.tsx` — `invert?: boolean` a platform ikonoknál
- `Portfolio.tsx` — `Project` interface
- `StackedIcons.tsx`, `Button.tsx`, `blog/[id]/page.tsx`
- Tool oldalak: `ImageCompressorTool`, `QrGeneratorTool` — `@ts-ignore` eltávolítva, típusos adatstruktúra
- `GeoLanding.tsx` — `<a href="/">` → `Link`, idézőjel escape

### 3. GEO Robot3D finomhangolás (részben) ✅

**Fájl:** `src/components/ui/Robot3D.tsx`

- Antialias be desktopon (mobilon továbbra is lean)
- Jobb világítás: hemisphere + key + kék rim + lila hátsó fény
- Finom lebegés animáció (`robotBaseY` + sin float)
- Forgás megmaradt (±45°)

**Nincs kivéve** — csak tuning.

---

## Mi NINCS még kész

### Design szépítés (következő fókusz)

Felhasználói irány:
> Széleket, átmérőket, kerekítéseket logikusabbá; elrendezések finomítása; 3D robotok **maradjanak**, csak legyenek szebbek.

| Feladat | Státusz | Fájl(ok) |
|---------|---------|----------|
| Hero Spline robot prezentáció (pedestal glow, tisztább portál szélek) | ⏳ hátra | `Hero.tsx`, `splite.tsx` |
| Egységes kerekítések / radius rendszer | ⏳ hátra | `Card`, `Button`, inputok, badge-ek, GEO kártya |
| Elrendezések logikusabbá tétele | ⏳ hátra | Portfolio carousel padding, szekció spacing |
| „Kevésbé AI-generált” hatás (finom tompítás) | ⏳ megbeszélendő | glow, orb, grid, animációk — irány egyeztetés kell |

### Lint (nem blokkoló, nem prioritás)

~89 lint probléma volt eredetileg; sok `any` javítva, de maradt:
- További `<a>` → `Link` cserék (GeoPDF, GeoThankYou, NicheLanding stb.)
- `react/no-unescaped-entities` idézőjelek
- `jsx-no-comment-textnodes`
- `ParticleNetwork.tsx` inline class
- `splite.tsx` setState-in-effect
- `tailwind.config.js` require import

Ezek **nem törik a buildet** — később is megcsinálhatók.

---

## Módosított fájlok (git diff)

```
src/app/[lang]/blog/[id]/page.tsx
src/app/[lang]/layout.tsx
src/app/globals.css
src/components/icons/StackedIcons.tsx
src/components/pages/AllArticles.tsx
src/components/pages/GeoLanding.tsx
src/components/pages/ImageCompressorTool.tsx
src/components/pages/QrGeneratorTool.tsx
src/components/sections/FAQ.tsx
src/components/sections/Insights.tsx
src/components/sections/Maintenance.tsx
src/components/sections/Portfolio.tsx
src/components/sections/Pricing.tsx
src/components/sections/Process.tsx
src/components/sections/Services.tsx
src/components/sections/Team.tsx
src/components/sections/TechStack.tsx
src/components/sections/WhyUs.tsx
src/components/ui/Button.tsx
src/components/ui/Card.tsx
src/components/ui/Robot3D.tsx
src/context/LanguageContext.tsx
src/lib/i18n.ts
```

---

## Következő lépések (folytatáskor)

1. **Hero robot** — Spline körül tisztább portál, talaj/pedestal glow, kevésbé „izzó” hatás
2. **Radius/spacing audit** — `rounded-3xl` kártyák vs `rounded-xl` belső elemek egységesítése
3. **Portfolio mobil carousel** — padding/centering finomhangolás (a szél fix után vizuális polish)
4. **GEO szekció layout** — robot + kártya arány, spacing mobilon
5. *(Opcionális)* maradék lint takarítás
6. **Commit** — amikor kész a design kör, egyben commitolni

---

## Ellenőrzés parancsok

```bash
cd /home/kj/WEB
npx tsc --noEmit          # típusellenőrzés
npm run build             # production build
npm run lint              # eslint (még hibákat dobhat)
npm run dev               # lokális preview
```

---

## Megjegyzések

- Az `out/` mappa untracked build output — ne commitoljuk.
- A generikus `t()` megoldás szándékosan visszavonva; ha később újra kell, a Team motion komponenseknél figyelni kell a JSX inferencia problémára.
- Commit **még nem készült** — szándékosan, folytatás után.
