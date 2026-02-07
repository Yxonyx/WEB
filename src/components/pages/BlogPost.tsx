import { useParams, useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();
    const post = blogPosts.find(p => p.id === id);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Handle back to articles - navigate and scroll to insights section
    const handleBackToArticles = () => {
        navigate(`/${lang || 'hu'}/`);
        // Use longer delay and retry to ensure lazy-loaded content is ready
        const scrollToInsights = (attempts = 0) => {
            const insightsSection = document.getElementById('insights');
            if (insightsSection) {
                insightsSection.scrollIntoView({ behavior: 'smooth' });
            } else if (attempts < 10) {
                // Retry up to 10 times with 200ms intervals
                setTimeout(() => scrollToInsights(attempts + 1), 200);
            }
        };
        setTimeout(scrollToInsights, 300);
    };

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
                    <button
                        onClick={() => navigate(`/${lang || 'hu'}/`)}
                        className="text-neonBlue hover:underline"
                    >
                        Vissza a főoldalra
                    </button>
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
                {/* Mesh gradient background */}
                <div className="absolute inset-0 mesh-gradient opacity-60" />

                {/* Gradient orbs */}
                <div
                    className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] gradient-orb gradient-orb-blue opacity-30 animate-float-zigzag"
                />
                <div
                    className="absolute bottom-[20%] left-[-15%] w-[500px] h-[500px] gradient-orb gradient-orb-purple opacity-25 animate-float-zigzag"
                    style={{ animationDelay: '-7s' }}
                />
                <div
                    className="absolute top-[50%] right-[10%] w-[400px] h-[400px] gradient-orb gradient-orb-blue opacity-20"
                />

                {/* Accent glow near content */}
                <div className="absolute top-[30%] left-[20%] w-96 h-96 bg-neonBlue/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[40%] right-[15%] w-80 h-80 bg-neonPurple/5 rounded-full blur-[80px]" />
            </div>

            <Navbar />

            <main className="pt-28 pb-20 relative z-10">
                <Container className="max-w-6xl">
                    {/* Back Link */}
                    <button
                        onClick={handleBackToArticles}
                        className="inline-flex items-center gap-2 text-neonBlue hover:text-white transition-colors mb-8 font-medium group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Vissza a cikkekhez
                    </button>

                    {/* Hero Card with Overlay */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl relative h-[400px] md:h-[500px] group"
                    >
                        {/* Background Image */}
                        <img
                            src={post.image}
                            alt={post.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Gradients for Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/40 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#050B14]/60 via-transparent to-transparent" />

                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="flex items-center gap-4 text-sm text-neonBlue font-mono mb-4">
                                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-neonBlue/20 backdrop-blur-md">
                                        <Tag className="w-3.5 h-3.5" />
                                        {post.category}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-gray-200 bg-black/40 px-3 py-1 rounded-full backdrop-blur-md whitespace-nowrap text-xs sm:text-sm">
                                        <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                                        {post.date}
                                    </span>
                                </div>
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug max-w-4xl drop-shadow-lg">
                                    {post.title}
                                </h1>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content Area */}
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="prose prose-invert prose-base md:prose-lg max-w-none
                            prose-headings:text-white prose-headings:font-bold prose-headings:mb-4 prose-headings:mt-8 md:prose-headings:mb-6 md:prose-headings:mt-12
                            prose-p:text-gray-300 prose-p:leading-[1.75] prose-p:mb-4 md:prose-p:mb-6
                            prose-a:text-neonBlue prose-a:no-underline hover:prose-a:underline
                            prose-strong:text-white prose-li:text-gray-300
                            prose-ul:my-4 md:prose-ul:my-6 prose-li:my-1.5 md:prose-li:my-2
                            prose-blockquote:border-l-4 prose-blockquote:border-neonBlue prose-blockquote:bg-surface/30 prose-blockquote:p-4 md:prose-blockquote:p-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-gray-200
                            [&_.lead]:text-base [&_.lead]:md:text-lg [&_.lead]:text-gray-200 [&_.lead]:leading-relaxed [&_.lead]:font-normal"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Footer CTA */}
                    <div className="mt-20 pt-10 border-t border-white/10 text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Tetszett a cikk?</h3>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            Ha szeretnéd, hogy a te vállalkozásod is hasonló színvonalon jelenjen meg az online térben, vedd fel velünk a kapcsolatot.
                        </p>
                        <button
                            onClick={() => {
                                navigate(`/${lang || 'hu'}/`);
                                const scrollToContact = (attempts = 0) => {
                                    const contactSection = document.getElementById('kapcsolat');
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: 'smooth' });
                                    } else if (attempts < 10) {
                                        setTimeout(() => scrollToContact(attempts + 1), 200);
                                    }
                                };
                                setTimeout(scrollToContact, 300);
                            }}
                            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-neonBlue text-[#050B14] font-bold hover:bg-neonBlue/90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,255,255,0.3)]"
                        >
                            Ajánlatot kérek
                        </button>
                    </div>
                </Container>
            </main>
            <Footer />
        </div>
    );
};
