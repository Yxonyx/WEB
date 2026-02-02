import { Container } from '../Container';
import { Section } from '../Section';
import { ArrowUpRight, Calendar, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

const articles = [
    {
        category: 'Webfejlesztés',
        date: 'Jan 28',
        title: 'Mikor éri meg egyedi weboldalt készíttetni?',
        excerpt: 'A sablonok olcsók, de hosszú távon drágábbak lehetnek...',
        image: '/images/blog-webdev.png',
    },
    {
        category: 'SEO',
        date: 'Jan 22',
        title: 'Keresőoptimalizálás 2025-ben',
        excerpt: 'A Google algoritmus változásai és mire kell figyelni.',
        image: '/images/blog-seo.png',
    },
    {
        category: 'AI & GEO',
        date: 'Jan 15',
        title: 'Felkészültél az AI-korszakra?',
        excerpt: 'A ChatGPT és Gemini már válaszokat ad – te benne vagy?',
        image: '/images/blog-ai.png',
    },
];

export const Insights = () => {
    return (
        <Section id="insights" className="py-20 lg:py-28">
            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
                >
                    <div>
                        <span className="text-sm font-mono text-neonBlue uppercase tracking-widest mb-3 block">
                            Blog & Tippek
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white">
                            Legfrissebb cikkeink
                        </h2>
                    </div>
                    <Button href="#" variant="secondary" size="sm">
                        Összes cikk
                        <ArrowUpRight className="w-4 h-4 ml-1" />
                    </Button>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article, index) => (
                        <motion.a
                            key={index}
                            href="#"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="group block"
                        >
                            <div className="relative rounded-2xl overflow-hidden bg-surface/60 border border-white/5 hover:border-white/20 transition-all duration-500">
                                {/* Image Header */}
                                <div className="h-40 overflow-hidden">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
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
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neonBlue transition-colors duration-300">
                                        {article.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-muted text-sm line-clamp-2">
                                        {article.excerpt}
                                    </p>

                                    {/* Read More */}
                                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-neonBlue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Olvasd el
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </Container>
        </Section>
    );
};


