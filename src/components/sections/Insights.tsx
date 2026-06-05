import { Container } from '../Container';
import { Section } from '../Section';
import { ArrowUpRight, Calendar, Tag } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { blogPosts } from '../../data/blogPosts';

export const Insights = () => {
    const { t } = useLanguage();
    const { lang } = useParams();
    const router = useRouter();
    const currentLang = lang || 'hu';

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
        <Section id="insights" className="section-bg-mixed" withOrbs withMeshGradient>
            <Container>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
                    <SectionHeader
                        number="07"
                        eyebrow={t('insights.header.tag') as string}
                        title={t('insights.header.title') as string}
                        className="mb-0"
                    />
                    <Button
                        onClick={() => router.push(`/${currentLang}/blog/all`)}
                        variant="secondary"
                        size="sm"
                    >
                        {t('insights.header.cta')}
                        <ArrowUpRight className="w-4 h-4" />
                    </Button>
                </div>

                {/* Mobile: horizontal snap-scroll; Desktop: 3-col grid */}
                <div className="-mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto sm:overflow-visible no-scrollbar">
                    <div className="flex sm:grid sm:grid-cols-3 gap-4 sm:gap-5 snap-x snap-mandatory">
                        {activePosts.slice(0, 3).map((article) => {
                            const linkTo = `/${currentLang}/blog/${article.id}`;

                            return (
                                <Link
                                    key={article.id}
                                    href={linkTo}
                                    className="group block relative z-20 cursor-pointer h-full shrink-0 w-[78%] sm:w-auto snap-start"
                                >
                                    <Card
                                        flush
                                        className="h-full flex flex-col overflow-hidden"
                                    >
                                        <div className="relative h-28 sm:h-36 lg:h-40 overflow-hidden rounded-t-3xl">
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                width="800"
                                                height="600"
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#1B7ED5]/70 to-transparent" />
                                        </div>

                                        <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
                                            <div className="flex items-center gap-2.5 text-[10px] sm:text-xs text-white/50 mb-2 font-mono uppercase tracking-wider">
                                                <span className="flex items-center gap-1">
                                                    <Tag className="w-3 h-3" />
                                                    {article.category}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    {article.date}
                                                </span>
                                            </div>

                                            <h3 className="text-[14px] sm:text-base lg:text-lg font-bold text-white mb-1.5 group-hover:text-[#FFF2C6] transition-colors duration-300 line-clamp-2 leading-snug">
                                                {article.title}
                                            </h3>

                                            <p className="text-white/78 text-[12px] sm:text-sm line-clamp-2 leading-relaxed">
                                                {article.excerpt}
                                            </p>

                                            <div className="mt-auto pt-3 sm:pt-4 flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#FFF2C6] group-hover:text-white group-hover:gap-2.5 transition-all duration-300">
                                                {article.read_more}
                                                <ArrowUpRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <p className="sm:hidden mt-3 text-center text-[11px] font-mono uppercase tracking-[0.18em] text-white/40">
                    ← lapozz →
                </p>
            </Container>
        </Section>
    );
};
