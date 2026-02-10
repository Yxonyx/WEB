
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogPosts = [
    { id: 'egyedi-weboldal-vs-sablon', date: '2026-01-28' },
    { id: 'keresooptimalizalas-2026', date: '2026-01-15' },
    { id: 'ai-korszak-geo-optimalizalas', date: '2026-01-05' },
    { id: 'weboldal-keszites-arak-2026', date: '2026-02-12' },
    { id: 'weboldal-keszites-kockazat-nelkul', date: '2026-02-15' },
    { id: 'ai-chatbot-asszisztensek', date: '2026-02-20' },
    { id: 'weboldal-2026-ban-csak-jelen-lenni', date: '2026-02-25' },
    { id: 'ai-chatbot-latogatobol-erdeklodo', date: '2026-03-02' },
    { id: 'weboldalt-keresel-2026-ban-kerdesek', date: '2026-03-10' },
    { id: 'egyedi-webdizajn-2026-ban', date: '2026-03-18' },
    { id: 'fogyasztoi-ut-a-weboldalon', date: '2026-03-25' }
];

const baseUrl = 'https://cyberlabsweb.hu';
const staticPages = [
    { url: '/', priority: '1.0', freq: 'daily' },
    { url: '/hu/', priority: '1.0', freq: 'daily' },
    { url: '/en/', priority: '1.0', freq: 'daily' },
    { url: '/aszf.html', priority: '0.3', freq: 'yearly' },
    { url: '/adatvedelem.html', priority: '0.3', freq: 'yearly' },
];

const generateSitemap = () => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Static pages
    staticPages.forEach(page => {
        xml += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.freq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    });

    // Blog posts
    blogPosts.forEach(post => {
        // HU
        xml += `
  <url>
    <loc>${baseUrl}/hu/blog/${post.id}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
        // EN
        xml += `
  <url>
    <loc>${baseUrl}/en/blog/${post.id}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
    });

    xml += `
</urlset>`;

    const publicPath = path.join(__dirname, 'public', 'sitemap.xml');
    fs.writeFileSync(publicPath, xml);
    console.log(`✅ Sitemap generated at: ${publicPath}`);
};

generateSitemap();
