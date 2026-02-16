
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Tag, ArrowLeft } from 'lucide-react';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';
import { Container } from '../Container';
import { useLanguage } from '../../context/LanguageContext';
import { blogPosts } from '../../data/blogPosts';

export const AllArticles = () => {
    const { t } = useLanguage();
    const { lang } = useParams();
    const currentLang = lang || 'hu';

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const articlesData = t('insights.articles') as unknown as any[];

    // Map over blogPosts to ensure we use control logic from data (images, ids)
    // and fallback to translations for text if available
    const activePosts = blogPosts.map((post, i) => {
        const translated = articlesData?.[i];
        return {
            ...post,
            title: translated?.title || post.title,
            excerpt: translated?.excerpt || post.excerpt,
            read_more: translated?.read_more || 'Olvass tovább',
            image: post.image,
        };
    });

    return (
        <div className="min-h-screen bg-bgDeep text-white selection:bg-neonBlue/30 noise-overlay relative overflow-hidden">
            <Helmet>
                <title>{t('insights.header.title') || 'Blog'} | CyberLabs Web</title>
                <meta name="description" content="CyberLabs Web Blog - Minden cikk" />
            </Helmet>

            {/* Background Effects - Fixed position to stay while scrolling */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {/* Hero gradient base - Increased opacity */}
                <div className="absolute inset-0 bg-hero-gradient opacity-40" />

                {/* Animated Orbs - Increased opacity and size */}
                <div
                    className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vh] rounded-full opacity-50 blur-[100px] animate-pulse-slow"
                    style={{ background: 'radial-gradient(circle, rgba(79,138,255,0.5) 0%, transparent 70%)' }}
                />
                <div
                    className="absolute bottom-[-20%] left-[-10%] w-[80vw] h-[80vh] rounded-full opacity-50 blur-[100px] animate-pulse-slow delay-1000"
                    style={{ background: 'radial-gradient(circle, rgba(138,43,226,0.5) 0%, transparent 70%)' }}
                />

                {/* Grid Overlay - Increased opacity */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.15]" />
            </div>

            <Navbar />

            <main className="pt-32 pb-20">
                <Container>
                    {/* Header */}
                    <div className="mb-12">
                        <Link
                            to={`/${currentLang}/`}
                            className="inline-flex items-center gap-2 text-neonBlue hover:text-white transition-colors mb-8 font-medium group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            {t('common.back') || 'Vissza a főoldalra'}
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <span className="text-sm font-mono text-neonBlue uppercase tracking-widest mb-3 block">
                                {t('insights.header.tag')}
                            </span>
                            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                                {t('insights.header.title')}
                            </h1>
                            <p className="text-gray-400 max-w-2xl text-lg">
                                {t('insights.header.subtitle') || 'Fedezd fel legújabb cikkeinket technológia, design és üzletfejlesztés témában.'}
                            </p>
                        </motion.div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {activePosts.map((article, index) => {
                            const linkTo = `/${currentLang}/blog/${article.id}`;

                            return (
                                <Link
                                    key={article.id}
                                    to={linkTo}
                                    className="group block relative z-20 cursor-pointer h-full"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="h-full"
                                    >
                                        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-surface via-surface/80 to-surface2 border border-white/10 hover:border-neonBlue/30 transition-all duration-500 shadow-lg hover:shadow-neonBlue/10 h-full flex flex-col">
                                            {/* Card glow effect */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-neonBlue/5 via-transparent to-neonPurple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            {/* Image Header */}
                                            <div className="h-48 overflow-hidden">
                                                <img
                                                    src={article.image}
                                                    alt={article.title}
                                                    width="800"
                                                    height="600"
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    loading="lazy"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="p-6 flex flex-col flex-grow">
                                                {/* Meta */}
                                                <div className="flex items-center gap-4 text-sm text-muted mb-3">
                                                    <span className="flex items-center gap-1.5">
                                                        <Tag className="w-3.5 h-3.5" />
                                                        {article.category}
                                                    </span>
                                                    <span className="flex items-center gap-1.5">
                                                        <Calendar className="w-3.5 h-3.5" />
                                                        {article.date}
                                                    </span>
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neonBlue transition-colors duration-300 line-clamp-2">
                                                    {article.title}
                                                </h3>

                                                {/* Excerpt */}
                                                <p className="text-muted text-sm line-clamp-3 mb-4">
                                                    {article.excerpt}
                                                </p>

                                                {/* Read More */}
                                                <div className="mt-auto flex items-center gap-2 text-sm font-medium text-neonBlue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    {article.read_more}
                                                    <ArrowUpRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            );
                        })}
                    </div>
                </Container>
            </main>
            <Footer />
        </div>
    );
};
