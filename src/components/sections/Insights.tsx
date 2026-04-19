import { Container } from '../Container';
import { Section } from '../Section';
import { ArrowUpRight, Calendar, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { blogPosts } from '../../data/blogPosts';

export const Insights = () => {
    const { t } = useLanguage();
    const { lang } = useParams();
    const router = useRouter();
    const currentLang = lang || 'hu';

    const articlesData = t('insights.articles') as unknown as any[];

    // Map over blogPosts to ensure we use control logic from data (images, ids)
    // and fallback to translations for text if available
    // First map to preserve translation associations, then sort by date, then slice top 3
    const activePosts = blogPosts
        .map((post, i) => {
            const translated = articlesData?.find((item: any) => item.title === post.title) || articlesData?.[i];
            return {
                ...post,
                title: translated?.title || post.title,
                excerpt: translated?.excerpt || post.excerpt,
                read_more: translated?.read_more || 'Olvass tovább',
                image: post.image,
            };
        })
        .sort((a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime());

    return (
        <Section id="insights" className="section-bg-mixed" withOrbs withMeshGradient>
            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 1, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8 sm:mb-12"
                >
                    <div className="flex-1">
                        <span className="text-sm font-mono text-neonBlue uppercase tracking-widest mb-3 block">
                            {t('insights.header.tag')}
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold font-display text-white leading-tight">
                            {t('insights.header.title')}
                        </h2>
                    </div>
                    <Button
                        onClick={() => router.push(`/${currentLang}/blog/all`)}
                        variant="secondary"
                        size="sm"
                    >
                        {t('insights.header.cta')}
                        <ArrowUpRight className="w-4 h-4 ml-1" />
                    </Button>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {activePosts.slice(0, 3).map((article) => {
                        const linkTo = `/${currentLang}/blog/${article.id}`;

                        return (
                            <Link
                                key={article.id}
                                href={linkTo}
                                className="group block relative z-20 cursor-pointer h-full"
                            >
                                <motion.div
                                    initial={{ opacity: 1, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                    className="h-full"
                                >
                                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-surface via-surface/80 to-surface2 border border-white/10 hover:border-neonBlue/30 transition-all duration-500 shadow-lg group-hover:shadow-[0_16px_48px_-16px_rgba(77,148,255,0.35)] h-full flex flex-col will-change-transform group-hover:-translate-y-0.5">
                                        {/* Card glow effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-neonBlue/5 via-transparent to-neonPurple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        {/* Inner top hairline — matches BracketFrame premium "lit from above" cue */}
                                        <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent z-20" />
                                        {/* Image Header */}
                                        <div className="relative h-32 sm:h-36 lg:h-40 overflow-hidden">
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                width="800"
                                                height="600"
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                loading="lazy"
                                            />
                                            {/* Soft fade from image into card body — no harsh edge */}
                                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent" />
                                        </div>

                                        {/* Content */}
                                        <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
                                            {/* Meta */}
                                            <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs lg:text-sm text-muted mb-2 sm:mb-3">
                                                <span className="flex items-center gap-1.5">
                                                    <Tag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                                    {article.category}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                                    {article.date}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-[15px] sm:text-base lg:text-lg font-bold text-white mb-1.5 sm:mb-2 group-hover:text-neonBlue transition-colors duration-300 line-clamp-2 leading-snug">
                                                {article.title}
                                            </h3>

                                            {/* Excerpt */}
                                            <p className="text-muted text-xs sm:text-sm line-clamp-2 leading-relaxed">
                                                {article.excerpt}
                                            </p>

                                            {/* Read More */}
                                            <div className="mt-auto pt-3 sm:pt-4 flex items-center gap-2 text-xs sm:text-sm font-medium text-neonBlue opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                                {article.read_more}
                                                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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


