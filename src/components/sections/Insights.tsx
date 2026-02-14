import { Container } from '../Container';
import { Section } from '../Section';
import { ArrowUpRight, Calendar, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';

export const Insights = () => {
    const { t } = useLanguage();
    const { lang } = useParams();
    const navigate = useNavigate();
    const currentLang = lang || 'hu';

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
            // Use image from blogPosts (source of truth)
            image: post.image,
        };
    });

    return (
        <Section id="insights" className="py-20 lg:py-28 section-bg-mixed" withOrbs withMeshGradient>
            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
                >
                    <div className="flex-1">
                        <span className="text-sm font-mono text-neonBlue uppercase tracking-widest mb-3 block">
                            {t('insights.header.tag')}
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
                            {t('insights.header.title')}
                        </h2>
                    </div>
                    <Button
                        onClick={() => navigate(`/${currentLang}/blog/all`)}
                        variant="secondary"
                        size="sm"
                    >
                        {t('insights.header.cta')}
                        <ArrowUpRight className="w-4 h-4 ml-1" />
                    </Button>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activePosts.slice(0, 3).map((article) => {
                        const linkTo = `/${currentLang}/blog/${article.id}`;

                        return (
                            <Link
                                key={article.id}
                                to={linkTo}
                                className="group block relative z-20 cursor-pointer h-full"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                    className="h-full"
                                >
                                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-surface via-surface/80 to-surface2 border border-white/10 hover:border-neonBlue/30 transition-all duration-500 shadow-lg hover:shadow-neonBlue/10 h-full flex flex-col">
                                        {/* Card glow effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-neonBlue/5 via-transparent to-neonPurple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        {/* Image Header */}
                                        <div className="h-40 overflow-hidden">
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
                                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neonBlue transition-colors duration-300 line-clamp-2">
                                                {article.title}
                                            </h3>

                                            {/* Excerpt */}
                                            <p className="text-muted text-sm line-clamp-2">
                                                {article.excerpt}
                                            </p>

                                            {/* Read More */}
                                            <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-medium text-neonBlue opacity-60 group-hover:opacity-100 transition-opacity duration-300">
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
        </Section>
    );
};


