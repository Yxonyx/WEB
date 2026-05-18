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

    const articlesData = t('insights.articles') as unknown as any[];

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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {activePosts.slice(0, 3).map((article) => {
                        const linkTo = `/${currentLang}/blog/${article.id}`;

                        return (
                            <Link
                                key={article.id}
                                href={linkTo}
                                className="group block relative z-20 cursor-pointer h-full"
                            >
                                <Card
                                    flush
                                    className="h-full flex flex-col overflow-hidden"
                                >
                                    <div className="relative h-36 sm:h-40 overflow-hidden rounded-t-3xl">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            width="800"
                                            height="600"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            loading="lazy"
                                        />
                                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0B1024]/95 to-transparent" />
                                    </div>

                                    <div className="p-5 sm:p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-3 text-[11px] sm:text-xs text-white/50 mb-2.5 font-mono uppercase tracking-wider">
                                            <span className="flex items-center gap-1.5">
                                                <Tag className="w-3 h-3" />
                                                {article.category}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Calendar className="w-3 h-3" />
                                                {article.date}
                                            </span>
                                        </div>

                                        <h3 className="text-[15px] sm:text-base lg:text-lg font-bold text-white mb-2 group-hover:text-neonBlue transition-colors duration-300 line-clamp-2 leading-snug">
                                            {article.title}
                                        </h3>

                                        <p className="text-white/60 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                                            {article.excerpt}
                                        </p>

                                        <div className="mt-auto pt-4 flex items-center gap-1.5 text-sm font-medium text-neonBlue/80 group-hover:text-neonBlue group-hover:gap-2.5 transition-all duration-300">
                                            {article.read_more}
                                            <ArrowUpRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
};
