
import { useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Tag } from 'lucide-react';
import { Card } from '../ui/Card';
import { SubpageHeader, SubpageShell } from '../SubpageShell';
import { useLanguage } from '../../context/LanguageContext';
import { blogPosts } from '../../data/blogPosts';

export const AllArticles = () => {
    const { t } = useLanguage();
    const { lang } = useParams();
    const currentLang = lang || 'hu';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const articlesData = t('insights.articles') as unknown as Array<{ title: string; excerpt: string; read_more: string }>;

    const activePosts = blogPosts
        .map((post, i) => {
            const translated = articlesData?.find((item) => item.title === post.title) || articlesData?.[i];
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
        <SubpageShell
            backHref={`/${currentLang}/`}
            backLabel={t('common.back') || 'Vissza a főoldalra'}
            maxWidth="wide"
        >
            <SubpageHeader
                eyebrow={t('insights.header.tag') as string}
                title={t('insights.header.title') as string}
                subtitle={(t('insights.header.subtitle') as string) || 'Fedezd fel legújabb cikkeinket technológia, design és üzletfejlesztés témában.'}
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {activePosts.map((article, index) => {
                    const linkTo = `/${currentLang}/blog/${article.id}`;

                    return (
                        <Link
                            key={article.id}
                            href={linkTo}
                            className="group block h-full cursor-pointer"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                className="h-full"
                            >
                                <Card flush className="flex h-full flex-col overflow-hidden">
                                    <div className="relative h-44 overflow-hidden rounded-t-3xl sm:h-48">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            width="800"
                                            height="600"
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#0E7CDC]/80 to-transparent" />
                                    </div>

                                    <div className="flex flex-grow flex-col p-5 sm:p-6">
                                        <div className="mb-3 flex items-center gap-4 text-sm font-bold text-white">
                                            <span className="flex items-center gap-1.5">
                                                <Tag className="h-3.5 w-3.5 text-[#FFF2C6]" />
                                                {article.category}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Calendar className="h-3.5 w-3.5 text-[#FFF2C6]" />
                                                {article.date}
                                            </span>
                                        </div>

                                        <h3 className="mb-3 line-clamp-2 text-xl font-extrabold text-white transition-colors duration-300 group-hover:text-[#FFF2C6]">
                                            {article.title}
                                        </h3>

                                        <p className="mb-4 line-clamp-3 text-sm font-semibold text-white">
                                            {article.excerpt}
                                        </p>

                                        <div className="mt-auto flex items-center gap-2 text-sm font-extrabold text-[#FFF2C6] transition-opacity duration-300 group-hover:opacity-100">
                                            {article.read_more}
                                            <ArrowUpRight className="h-4 w-4" />
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        </Link>
                    );
                })}
            </div>
        </SubpageShell>
    );
};
