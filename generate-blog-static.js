
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Use this to resolve paths in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Minimal duplication of the blog data to avoid TS compilation issues in this script
const blogPosts = [
    {
        id: 'egyedi-weboldal-vs-sablon',
        title: 'Mikor éri meg egyedi weboldalt készíttetni? A végső útmutató döntéshozóknak.',
        image: '/images/blog-webdev.webp',
        metaDescription: 'Egyedi weboldal vs. sablon. Melyik a jobb döntés a te vállalkozásodnak? Részletes útmutató Wordpress és egyedi fejlesztés között.',
        category: 'Webfejlesztés',
        dateISO: '2026-01-28',
    },
    {
        id: 'keresooptimalizalas-2026',
        title: 'Keresőoptimalizálás 2026-ban: Hogyan éld túl az AI forradalmat?',
        image: '/images/blog-seo.webp',
        metaDescription: 'SEO 2026: E-E-A-T, Core Web Vitals és AI keresők. Hogyan maradj látható a Google-ben és az AI-ban? Részletes útmutató a modern keresőoptimalizáláshoz.',
        category: 'SEO',
        dateISO: '2026-01-15',
    },
    {
        id: 'ai-korszak-geo-optimalizalas',
        title: 'Felkészültél az AI-korszakra? A GEO (Generative Engine Optimization) felemelkedése.',
        image: '/images/blog-ai.webp',
        metaDescription: 'GEO (Generative Engine Optimization) – Az AI keresők korszaka. Hogyan kerülj be a ChatGPT, Gemini és Perplexity válaszaiba? Útmutató 2026-ra.',
        category: 'AI & GEO',
        dateISO: '2026-01-05',
    },
    {
        id: 'weboldal-keszites-arak-2026',
        title: 'Weboldal készítés árak 2026-ban – Miért az egyedi fejlesztés a legjobb döntés vállalkozásodnak?',
        image: '/images/blog-pricing-2026.webp',
        metaDescription: 'Weboldal készítés árak 2026-ban: Sablon vs. Egyedi fejlesztés. Mennyibe kerül egy profi céges weboldal? Részletes piaci körkép és árak.',
        category: 'Webfejlesztés',
        dateISO: '2026-02-12',
    },
    {
        id: 'weboldal-keszites-kockazat-nelkul',
        title: 'Weboldal készítés kockázat nélkül – Árgaranciával, demo verzióval, egyedi fejlesztéssel',
        image: '/images/blog-risk-free.webp',
        metaDescription: 'Weboldal készítés kockázat nélkül: 1 hetes demo verzió, árgarancia és egyedi fejlesztés. Csak akkor fizetsz, ha elégedett vagy az eredménnyel.',
        category: 'Webfejlesztés',
        dateISO: '2026-02-15',
    },
    {
        id: 'ai-chatbot-asszisztensek',
        title: 'AI chatbot asszisztensek a weboldalon – Miért váltak elengedhetetlenné?',
        image: '/images/blog-chatbot-intro.webp',
        metaDescription: 'AI chatbot asszisztensek weboldalakra: 0-24 órás ügyfélszolgálat, lead generálás és automata értékesítés. Miért elengedhetetlen 2026-ban?',
        category: 'Mesterséges Intelligencia',
        dateISO: '2026-02-20',
    },
    {
        id: 'weboldal-2026-ban-csak-jelen-lenni',
        title: 'Weboldal 2026-ban: miért nem elég már „csak jelen lenni” az online térben?',
        image: '/images/blog-web-2026.webp',
        metaDescription: 'Weboldal készítés 2026-ban: miért kevés a puszta online jelenlét? GEO, AI-válaszok és modern fogyasztói elvárások. Ne maradj le!',
        category: 'Webfejlesztés',
        dateISO: '2026-02-25',
    },
    {
        id: 'ai-chatbot-latogatobol-erdeklodo',
        title: 'AI chatbot a weboldalon: hogyan lesz a látogatóból érdeklődő?',
        image: '/images/blog-chatbot-conversion.webp',
        metaDescription: 'AI chatbot értékesítéshez: így konvertáld a weboldalad látogatóit fizető ügyfelekké automatizált kommunikációval 2026-ban.',
        category: 'Mesterséges Intelligencia',
        dateISO: '2026-03-02',
    },
    {
        id: 'weboldalt-keresel-2026-ban-kerdesek',
        title: 'Weboldalt keresel 2026-ban? Ezeket a kérdéseket tedd fel, mielőtt döntesz',
        image: '/images/blog-checklist-2026.webp',
        metaDescription: 'Weboldal készítés 2026: milyen kérdéseket tegyél fel a fejlesztőnek? Útmutató a megalapozott döntéshez, hogy elkerüld a csalódást.',
        category: 'Webfejlesztés',
        dateISO: '2026-03-10',
    },
    {
        id: 'egyedi-webdizajn-2026-ban',
        title: 'Egyedi webdizájn 2026-ban: miért nem működik már az „elég jó” megoldás?',
        image: '/images/blog-design-2026.webp',
        metaDescription: 'Egyedi webdizájn trendek 2026: miért fontos az üzleti célokra szabott megjelenés? Hogyan segíti a dizájn a konverziót és az AI-találhatóságot?',
        category: 'Webdesign',
        dateISO: '2026-03-18',
    },
    {
        id: 'fogyasztoi-ut-a-weboldalon',
        title: 'A látogatóból ügyfél: hogyan halad végig a fogyasztói út a weboldaladon?',
        image: '/images/blog-customer-journey.webp',
        metaDescription: 'Customer Journey (Fogyasztói Út) tervezés a weboldalon: hogyan vezesd a látogatót az érdeklődéstől a vásárlásig? UX tippek 2026-ra.',
        category: 'Webfejlesztés',
        dateISO: '2026-03-25',
    }
];

const distDir = path.join(__dirname, 'dist');
const templatePath = path.join(distDir, 'index.html');

console.log('🚀 Starting static blog post generation...');

if (!fs.existsSync(templatePath)) {
    console.error('❌ Error: dist/index.html not found. Run "npm run build" first.');
    process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf-8');

blogPosts.forEach(post => {
    // Generate for /hu/blog/:id
    const relativePath = `hu/blog/${post.id}`;
    const targetDir = path.join(distDir, relativePath);
    const targetFile = path.join(targetDir, 'index.html');

    // Create directory
    fs.mkdirSync(targetDir, { recursive: true });

    // Replace meta tags in the template
    // Note: We are replacing the default OG tags from index.html with specific ones
    let html = template;

    // 1. Title
    const newTitle = `${post.title} | CyberLabs Web Blog`;
    html = html.replace(/<title>.*?<\/title>/, `<title>${newTitle}</title>`);
    html = html.replace(/<meta property="og:title" content=".*?"/, `<meta property="og:title" content="${post.title}"`);
    html = html.replace(/<meta name="twitter:title" content=".*?"/, `<meta name="twitter:title" content="${post.title}"`);

    // 2. Description
    html = html.replace(/<meta name="description"\s+content=".*?"/, `<meta name="description" content="${post.metaDescription}"`);
    html = html.replace(/<meta property="og:description"\s+content=".*?"/, `<meta property="og:description" content="${post.metaDescription}"`);
    html = html.replace(/<meta name="twitter:description"\s+content=".*?"/, `<meta name="twitter:description" content="${post.metaDescription}"`);

    // 3. Image
    const fullImage = `https://cyberlabsweb.com${post.image}`;
    html = html.replace(/<meta property="og:image"\s+content=".*?"/, `<meta property="og:image" content="${fullImage}"`);
    html = html.replace(/<meta property="og:image:secure_url"\s+content=".*?"/, `<meta property="og:image:secure_url" content="${fullImage}"`);
    html = html.replace(/<meta name="twitter:image"\s+content=".*?"/, `<meta name="twitter:image" content="${fullImage}"`);

    // Remove default dimensions from template as they might not match the specific blog image
    html = html.replace(/<meta property="og:image:width"\s+content=".*?"\s*\/?>/, '');
    html = html.replace(/<meta property="og:image:height"\s+content=".*?"\s*\/?>/, '');

    // Add explicit type for WebP
    html = html.replace(/<meta property="og:image"\s+content="(.*?)"/, '<meta property="og:image" content="$1">\n  <meta property="og:image:type" content="image/webp">');

    // 4. URL (Canonical & OG)
    const fullUrl = `https://cyberlabsweb.com/${relativePath}`;
    html = html.replace(/<link rel="canonical" href=".*?"/, `<link rel="canonical" href="${fullUrl}"`);
    html = html.replace(/<meta property="og:url" content=".*?"/, `<meta property="og:url" content="${fullUrl}"`);

    // 5. Type
    html = html.replace(/<meta property="og:type" content="website"/, `<meta property="og:type" content="article"`);

    // Write the specific file
    fs.writeFileSync(targetFile, html);
    console.log(`✅ Generated: ${relativePath}/index.html`);
});

console.log('🎉 Static generation complete!');

// --- NEW: Generate Main Language Pages (/hu/, /en/) ---
const mainPages = [
    {
        lang: 'hu',
        path: 'hu',
        title: 'Céges Weboldal Készítés Garanciával | CyberLabs Web',
        description: 'Nem jön elég ajánlatkérés? Olyan weboldalt építünk, ami elad helyetted. Villámgyors, modern és AI-optimalizált weboldal készítés garanciával.',
        canonical: 'https://cyberlabsweb.com/hu/'
    },
    {
        lang: 'en',
        path: 'en',
        title: 'Custom Web Development with Guarantee | CyberLabs Web',
        description: 'Need more leads? We build websites that sell for you. Blazing fast, modern, and AI-optimized web development with a guarantee.',
        canonical: 'https://cyberlabsweb.com/en/'
    }
];

console.log('🚀 Starting main page generation...');

mainPages.forEach(page => {
    const targetDir = path.join(distDir, page.path);
    const targetFile = path.join(targetDir, 'index.html');

    // Create directory
    fs.mkdirSync(targetDir, { recursive: true });

    let html = template;

    // 1. Title
    html = html.replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`);
    html = html.replace(/<meta property="og:title" content=".*?"/, `<meta property="og:title" content="${page.title}"`);
    html = html.replace(/<meta name="twitter:title" content=".*?"/, `<meta name="twitter:title" content="${page.title}"`);

    // 2. Description
    html = html.replace(/<meta name="description"\s+content=".*?"/, `<meta name="description" content="${page.description}"`);
    html = html.replace(/<meta property="og:description"\s+content=".*?"/, `<meta property="og:description" content="${page.description}"`);
    html = html.replace(/<meta name="twitter:description"\s+content=".*?"/, `<meta name="twitter:description" content="${page.description}"`);

    // 3. Language
    html = html.replace(/<html lang="hu">/, `<html lang="${page.lang}">`);
    html = html.replace(/<meta http-equiv="content-language" content="hu">/, `<meta http-equiv="content-language" content="${page.lang}">`);

    // 4. Canonical & URL
    html = html.replace(/<link rel="canonical" href=".*?"/, `<link rel="canonical" href="${page.canonical}"`);
    html = html.replace(/<meta property="og:url" content=".*?"/, `<meta property="og:url" content="${page.canonical}"`);

    // Write file
    fs.writeFileSync(targetFile, html);
    console.log(`✅ Generated: ${page.path}/index.html`);
});

console.log('🎉 Main page generation complete!');

// --- Niche Landing Pages ---
console.log('🏢 Generating niche landing pages...');

const nichePages = [
    { slug: 'ugyvedeknek', title: 'Weboldal Készítés Ügyvédeknek | Ügyvédi Weboldal | CyberLabs Web', metaDescription: 'Professzionális ügyvédi weboldal készítés, ami bizalmat épít és ügyfeleket hoz. Modern, gyors és GDPR-kompatibilis megoldás ügyvédi irodáknak.' },
    { slug: 'fodraszoknak', title: 'Weboldal Készítés Fodrászoknak | Fodrász Weboldal | CyberLabs Web', metaDescription: 'Modern fodrász weboldal készítés online időpontfoglalóval. Mutasd meg munkáidat, szerezz új vendégeket és automatizáld a foglalásokat.' },
    { slug: 'kivitelezoknek', title: 'Weboldal Készítés Kivitelezőknek | Építőipari Weboldal | CyberLabs Web', metaDescription: 'Építőipari weboldal készítés kivitelezőknek. Referenciák bemutatása, ajánlatkérő form és SEO, hogy a megrendelők megtaláljanak.' },
    { slug: 'orvosoknak', title: 'Weboldal Készítés Orvosoknak | Orvosi Weboldal | CyberLabs Web', metaDescription: 'Professzionális orvosi weboldal készítés. Online időpontfoglalás, beteg-tájékoztató és GDPR-kompatibilis megoldás orvosoknak és rendelőknek.' },
    { slug: 'ettermeknek', title: 'Weboldal Készítés Éttermeknek | Éttermi Weboldal | CyberLabs Web', metaDescription: 'Modern éttermi weboldal készítés online étlappal, asztalfoglalással és Google Térkép integrációval.' },
    { slug: 'autoszereloknek', title: 'Weboldal Készítés Autószerelőknek | Autószerviz Weboldal | CyberLabs Web', metaDescription: 'Autószerviz weboldal készítés online időpontfoglalóval. Szolgáltatások bemutatása, árlista és Google megjelenés autószerelőknek.' },
    { slug: 'ingatlanosoknak', title: 'Weboldal Készítés Ingatlanosoknak | Ingatlanos Weboldal | CyberLabs Web', metaDescription: 'Ingatlanközvetítő weboldal készítés ingatlan listázással, szűrőkkel és kapcsolatfelvételi lehetőséggel.' },
    { slug: 'kozmetikusoknak', title: 'Weboldal Készítés Kozmetikusoknak | Kozmetikai Weboldal | CyberLabs Web', metaDescription: 'Kozmetikus weboldal készítés online időpontfoglalóval és szolgáltatás bemutatóval.' },
    { slug: 'villanyszereloknek', title: 'Weboldal Készítés Villanyszerelőknek | Villanyszerelő Weboldal | CyberLabs Web', metaDescription: 'Villanyszerelő weboldal készítés ajánlatkérő formmal és helyi SEO-val.' },
    { slug: 'szallodaknak', title: 'Weboldal Készítés Szállodáknak | Szálloda Weboldal | CyberLabs Web', metaDescription: 'Szálloda weboldal készítés közvetlen foglalási rendszerrel. Csökkentsd a közvetítői jutalékot!' },
    { slug: 'gyogyszereszeknek', title: 'Weboldal Készítés Gyógyszerészeknek | Gyógyszertár Weboldal | CyberLabs Web', metaDescription: 'Gyógyszertár weboldal készítés nyitvatartással, ügyeleti renddel és termék információkkal.' },
    { slug: 'epiteszeknek', title: 'Weboldal Készítés Építészeknek | Építész Portfólió Weboldal | CyberLabs Web', metaDescription: 'Építész portfólió weboldal készítés lenyűgöző projekt galériával.' },
    { slug: 'konyvveloknek', title: 'Weboldal Készítés Könyvelőknek | Könyvelői Weboldal | CyberLabs Web', metaDescription: 'Könyvelő weboldal készítés, ami bizalmat épít és ügyfeleket hoz.' },
    { slug: 'pszichologusoknak', title: 'Weboldal Készítés Pszichológusoknak | Pszichológus Weboldal | CyberLabs Web', metaDescription: 'Pszichológus weboldal készítés, ami bizalmat és nyugalmat sugároz.' },
    { slug: 'marketing-ugynoksegeknek', title: 'Weboldal Készítés Marketing Ügynökségeknek | Ügynökségi Weboldal | CyberLabs Web', metaDescription: 'Marketing ügynökség weboldal készítés, ami a szakértelmedet tükrözi.' },
    { slug: 'edzo-es-fitness', title: 'Weboldal Készítés Edzőknek | Fitness Weboldal | CyberLabs Web', metaDescription: 'Személyi edző és fitness weboldal készítés. Órarend, online foglalás, transzformációs galéria.' },
    { slug: 'fotografusoknak', title: 'Weboldal Készítés Fotográfusoknak | Fotós Portfólió Weboldal | CyberLabs Web', metaDescription: 'Fotós portfólió weboldal készítés lenyűgöző galéria rendszerrel.' },
    { slug: 'allatorvosoknak', title: 'Weboldal Készítés Állatorvosoknak | Állatorvosi Weboldal | CyberLabs Web', metaDescription: 'Állatorvosi weboldal készítés online időpontfoglalóval, ügyeleti információkkal.' },
    { slug: 'webshopoknak', title: 'Webshop Készítés | E-commerce Weboldal | CyberLabs Web', metaDescription: 'Egyedi webshop készítés, ami elad. Modern design, gyors betöltés, mobilbarát.' },
    { slug: 'peksegeknek', title: 'Weboldal Készítés Pékségeknek | Pékség Weboldal | CyberLabs Web', metaDescription: 'Pékség weboldal készítés online rendeléssel, termékkatalógussal és nyitvatartással.' },
];

nichePages.forEach(niche => {
    const relativePath = `hu/weboldal-keszites/${niche.slug}`;
    const targetDir = path.join(distDir, relativePath);
    const targetFile = path.join(targetDir, 'index.html');

    fs.mkdirSync(targetDir, { recursive: true });

    let html = template;

    // 1. Title
    html = html.replace(/<title>.*?<\/title>/, `<title>${niche.title}</title>`);

    // 2. Meta description
    html = html.replace(/<meta name="description"\s+content=".*?"/, `<meta name="description" content="${niche.metaDescription}"`);

    // 3. Open Graph
    html = html.replace(/<meta property="og:title"\s+content=".*?"/, `<meta property="og:title" content="${niche.title}"`);
    html = html.replace(/<meta property="og:description"\s+content=".*?"/, `<meta property="og:description" content="${niche.metaDescription}"`);

    // 4. Canonical & URL
    const canonical = `https://cyberlabsweb.com/${relativePath}`;
    html = html.replace(/<link rel="canonical" href=".*?"/, `<link rel="canonical" href="${canonical}"`);
    html = html.replace(/<meta property="og:url" content=".*?"/, `<meta property="og:url" content="${canonical}"`);

    // 5. Twitter
    html = html.replace(/<meta name="twitter:title"\s+content=".*?"/, `<meta name="twitter:title" content="${niche.title}"`);
    html = html.replace(/<meta name="twitter:description"\s+content=".*?"/, `<meta name="twitter:description" content="${niche.metaDescription}"`);

    fs.writeFileSync(targetFile, html);
    console.log(`✅ Generated: ${relativePath}/index.html`);
});

console.log('🎉 Niche page generation complete!');

// --- NEW: Generate Sitemap.xml ---
console.log('🗺️ Generating sitemap.xml...');

const baseUrl = 'https://cyberlabsweb.com';
const today = new Date().toISOString().split('T')[0];

let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// 1. Main Pages
const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/hu/', priority: '1.0', changefreq: 'daily' },
    { url: '/en/', priority: '1.0', changefreq: 'daily' },
    { url: '/aszf.html', priority: '0.3', changefreq: 'yearly' },
    { url: '/adatvedelem.html', priority: '0.3', changefreq: 'yearly' }
];

staticPages.forEach(page => {
    sitemapContent += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
});

// 2. Blog Posts (HU & EN)
blogPosts.forEach(post => {
    // HU
    sitemapContent += `  <url>
    <loc>${baseUrl}/hu/blog/${post.id}</loc>
    <lastmod>${post.dateISO}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
    // EN
    sitemapContent += `  <url>
    <loc>${baseUrl}/en/blog/${post.id}</loc>
    <lastmod>${post.dateISO}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
});

// 3. Niche Landing Pages
nichePages.forEach(niche => {
    sitemapContent += `  <url>
    <loc>${baseUrl}/hu/weboldal-keszites/${niche.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
});

sitemapContent += `</urlset>`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapContent);
console.log('✅ Generated: sitemap.xml');

