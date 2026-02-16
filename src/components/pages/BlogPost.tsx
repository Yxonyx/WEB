import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../../data/blogPosts';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';

import { Container } from '../Container';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { useEffect } from 'react';

export const BlogPost = () => {
    const { id, lang } = useParams();

    const post = blogPosts.find(p => p.id === id);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);



    // Generate JSON-LD structured data for the article
    const generateArticleSchema = () => {
        if (!post) return null;
        return {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.metaDescription,
            "image": `https://cyberlabsweb.hu${post.image}`,
            "datePublished": post.dateISO,
            "dateModified": post.dateISO,
            "author": {
                "@type": "Organization",
                "name": post.author,
                "url": "https://cyberlabsweb.hu/"
            },
            "publisher": {
                "@type": "Organization",
                "name": "CyberLabs Web",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://cyberlabsweb.hu/og/cyberlabs-og.png"
                }
            },
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://cyberlabsweb.hu/${lang || 'hu'}/blog/${post.id}`
            },
            "articleSection": post.category,
            "inLanguage": "hu-HU"
        };
    };

    if (!post) {
        return (
            <div className="min-h-screen bg-bgDeep text-white flex items-center justify-center">
                <Helmet>
                    <title>404 - Cikk nem található | CyberLabs Web</title>
                    <meta name="robots" content="noindex, nofollow" />
                </Helmet>
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">404</h1>
                    <p className="mb-8 text-muted">A keresett cikk nem található.</p>
                    <Link
                        to={`/${lang || 'hu'}/`}
                        className="text-neonBlue hover:underline"
                    >
                        Vissza a főoldalra
                    </Link>
                </div>
            </div>
        );
    }

    const canonicalUrl = `https://cyberlabsweb.hu/${lang || 'hu'}/blog/${post.id}`;
    const ogImage = `https://cyberlabsweb.hu${post.image}`;

    return (
        <div className="min-h-screen bg-bgDeep text-gray-200 font-sans selection:bg-neonBlue/30 noise-overlay relative overflow-hidden">
            {/* SEO Meta Tags */}
            <Helmet>
                <title>{post.title} | CyberLabs Web Blog</title>
                <meta name="description" content={post.metaDescription} />
                <link rel="canonical" href={canonicalUrl} />

                {/* Open Graph */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.metaDescription} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content={ogImage} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:site_name" content="CyberLabs Web" />
                <meta property="og:locale" content="hu_HU" />
                <meta property="article:published_time" content={post.dateISO} />
                <meta property="article:author" content={post.author} />
                <meta property="article:section" content={post.category} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={post.title} />
                <meta name="twitter:description" content={post.metaDescription} />
                <meta name="twitter:image" content={ogImage} />

                {/* JSON-LD Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(generateArticleSchema())}
                </script>
            </Helmet>
            {/* Background decorative elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/blog-detail-bg.avif"
                        alt=""
                        className="w-full h-full object-cover opacity-30 scale-105"
                    />
                    <div className="absolute inset-0 bg-[#050B14]/75 backdrop-blur-[1px]" />
                </div>

                {/* Mesh gradient background */}
                <div className="absolute inset-0 mesh-gradient opacity-60 z-10" />

                {/* Gradient orbs */}
                <div
                    className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] gradient-orb gradient-orb-blue opacity-30 animate-float-zigzag z-10"
                />
                <div
                    className="absolute bottom-[20%] left-[-15%] w-[500px] h-[500px] gradient-orb gradient-orb-purple opacity-25 animate-float-zigzag z-10"
                    style={{ animationDelay: '-7s' }}
                />
                <div
                    className="absolute top-[50%] right-[10%] w-[400px] h-[400px] gradient-orb gradient-orb-blue opacity-20 z-10"
                />

                {/* Accent glow near content */}
                <div className="absolute top-[30%] left-[20%] w-96 h-96 bg-neonBlue/5 rounded-full blur-[100px] z-10" />
                <div className="absolute bottom-[40%] right-[15%] w-80 h-80 bg-neonPurple/5 rounded-full blur-[80px] z-10" />
            </div>

            <Navbar />

            <main className="pt-28 pb-20 relative z-10">
                <Container className="max-w-6xl">
                    {/* Back Link */}
                    <Link
                        to={`/${lang || 'hu'}/#insights`}
                        className="inline-flex items-center gap-2 text-neonBlue hover:text-white transition-colors mb-8 font-medium group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Vissza a cikkekhez
                    </Link>

                    {/* Professional Article Header - No Image, CSS Background */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-2xl overflow-hidden mb-12 border border-white/10"
                    >
                        {/* CSS Generated Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a0f1a]" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(79,138,255,0.08),transparent_50%)]" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(155,114,255,0.06),transparent_50%)]" />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(79,138,255,0.03)_50%,transparent_100%)] bg-[length:100%_4px]" />

                        {/* Decorative Grid Lines */}
                        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                        {/* Corner Accents */}
                        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-neonBlue/40" />
                        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-neonBlue/40" />
                        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-neonPurple/40" />
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-neonPurple/40" />

                        {/* Header Content */}
                        <div className="relative z-10 px-6 py-12 md:px-16 md:py-20">
                            {/* Category & Date Row */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-wrap items-center gap-3 mb-6"
                            >
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neonBlue/10 border border-neonBlue/30 text-neonBlue text-xs font-mono uppercase tracking-wider">
                                    <Tag className="w-3 h-3" />
                                    {post.category}
                                </span>
                                <time
                                    dateTime={post.dateISO}
                                    className="inline-flex items-center gap-1.5 text-gray-400 text-xs font-mono"
                                >
                                    <Calendar className="w-3 h-3" />
                                    {post.date}
                                </time>
                            </motion.div>

                            {/* Title */}
                            <motion.h1
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl mb-6"
                            >
                                {post.title}
                            </motion.h1>

                            {/* Lead / Meta Description */}
                            {post.metaDescription && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-base md:text-lg text-gray-300/80 leading-relaxed max-w-3xl"
                                >
                                    {post.metaDescription}
                                </motion.p>
                            )}

                            {/* Author mini-bar */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex items-center gap-3 mt-8 pt-6 border-t border-white/10"
                            >
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neonBlue/30 to-neonPurple/30 border border-white/10 flex items-center justify-center text-xs font-bold text-neonBlue">
                                    CL
                                </div>
                                <div>
                                    <span className="text-sm text-white font-medium">{post.author}</span>
                                    <span className="text-xs text-gray-500 ml-2 font-mono">// CyberLabs Web</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content Area - Professional Article */}
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="prose prose-invert prose-base md:prose-lg max-w-4xl mx-auto
                            prose-headings:text-white prose-headings:font-bold prose-headings:mb-4 prose-headings:mt-10 md:prose-headings:mb-6 md:prose-headings:mt-14
                            prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-3
                            prose-h3:text-xl md:prose-h3:text-2xl prose-h3:text-neonBlue/90
                            prose-p:text-gray-200 prose-p:leading-[1.85] prose-p:mb-5 md:prose-p:mb-6 prose-p:text-base md:prose-p:text-[17px]
                            prose-a:text-neonBlue prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                            prose-strong:text-white prose-strong:font-semibold
                            prose-li:text-gray-200 prose-li:leading-[1.8]
                            prose-ul:my-5 md:prose-ul:my-6 prose-li:my-1.5 md:prose-li:my-2
                            prose-ol:my-5 md:prose-ol:my-6
                            prose-blockquote:border-l-4 prose-blockquote:border-neonBlue prose-blockquote:bg-[#0d1f3c]/50 prose-blockquote:p-5 md:prose-blockquote:p-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-gray-200 prose-blockquote:shadow-lg
                            prose-code:text-neonBlue prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                            [&_.lead]:text-base [&_.lead]:md:text-lg [&_.lead]:text-gray-200 [&_.lead]:leading-relaxed [&_.lead]:font-normal"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Author / Trust Box (GEO/E-E-A-T Signal) */}
                    <div className="mt-16 mb-12 p-6 md:p-8 rounded-2xl bg-surface/30 border border-white/10 backdrop-blur-sm flex flex-col md:flex-row gap-6 items-center md:items-start">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-surface2 border-2 border-neonBlue/30 overflow-hidden flex-shrink-0">
                            {/* Placeholder for Author Image - could be properly mapped from authors list later */}
                            <div className="w-full h-full bg-gradient-to-br from-neonBlue/20 to-neonPurple/20 flex items-center justify-center text-neonBlue font-bold text-xl">
                                CL
                            </div>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-white font-bold text-lg mb-1">
                                {post.author}
                            </h3>
                            <div className="text-sm text-neonBlue mb-3 font-mono">
                                // Digital Strategy Team
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                A CyberLabs Web szakértői csapata. Prémium webfejlesztés, AI integráció és digitális stratégia kis- és középvállalkozásoknak. Cikkeinket a legfrissebb iparági trendek és valós tapasztalatok alapján írjuk.
                            </p>
                            <Link
                                to={`/${lang || 'hu'}/#csapat`}
                                className="text-sm text-white hover:text-neonBlue transition-colors underline decoration-white/20 hover:decoration-neonBlue underline-offset-4"
                            >
                                Ismerd meg a csapatot &rarr;
                            </Link>
                        </div>
                    </div>

                    {/* Share Buttons */}
                    <div className="pt-8 border-t border-white/10">
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-bold text-muted uppercase tracking-wider">Megosztás:</span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalUrl)}`, '_blank')}
                                    className="p-2 rounded-full bg-white/5 hover:bg-[#1877F2] hover:text-white transition-all text-gray-400 group"
                                    title="Megosztás Facebookon"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                </button>
                                <button
                                    onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonicalUrl)}`, '_blank')}
                                    className="p-2 rounded-full bg-white/5 hover:bg-[#0A66C2] hover:text-white transition-all text-gray-400 group"
                                    title="Megosztás LinkedIn-en"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                </button>
                                <button
                                    onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(canonicalUrl)}&text=${encodeURIComponent(post.title)}`, '_blank')}
                                    className="p-2 rounded-full bg-white/5 hover:bg-black hover:text-white transition-all text-gray-400 group"
                                    title="Megosztás X-en"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                </button>
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(canonicalUrl);
                                        const btn = document.getElementById('copy-btn');
                                        if (btn) {
                                            const original = btn.innerHTML;
                                            btn.innerHTML = '<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
                                            setTimeout(() => btn.innerHTML = original, 2000);
                                        }
                                    }}
                                    id="copy-btn"
                                    className="p-2 rounded-full bg-white/5 hover:bg-neonBlue/20 hover:text-neonBlue transition-all text-gray-400 group"
                                    title="Link másolása"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 012-2v-8a2 2 0 01-2-2h-8a2 2 0 01-2 2v8a2 2 0 012 2z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>


                    {/* Footer CTA */}
                    <div className="mt-20 pt-10 border-t border-white/10 text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Tetszett a cikk?</h3>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            Ha szeretnéd, hogy a te vállalkozásod is hasonló színvonalon jelenjen meg az online térben, vedd fel velünk a kapcsolatot.
                        </p>
                        <Link
                            to={`/${lang || 'hu'}/#kapcsolat`}
                            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-neonBlue text-[#050B14] font-bold hover:bg-neonBlue/90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,255,255,0.3)]"
                        >
                            Ajánlatot kérek
                        </Link>
                    </div>
                </Container>
            </main>
            <Footer />
        </div>
    );
};
