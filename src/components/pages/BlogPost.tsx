import Link from 'next/link';
import { useParams } from 'next/navigation';
import { blogPosts } from '../../data/blogPosts';
import { Card } from '../ui/Card';
import { SubpageShell } from '../SubpageShell';
import { motion } from 'framer-motion';
import { Calendar, Tag } from 'lucide-react';
import { useEffect } from 'react';

export const BlogPost = () => {
    const { id, lang } = useParams();

    const post = blogPosts.find(p => p.id === id);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return (
            <SubpageShell backHref={`/${lang || 'hu'}/`} backLabel="Vissza a főoldalra">
                <div className="py-20 text-center">
                    <h1 className="mb-4 font-hero text-4xl font-extrabold text-white">404</h1>
                    <p className="mb-8 text-white/80">A keresett cikk nem található.</p>
                    <Link href={`/${lang || 'hu'}/`} className="font-bold text-[#FFF2C6] hover:underline">
                        Vissza a főoldalra
                    </Link>
                </div>
            </SubpageShell>
        );
    }

    const canonicalUrl = `https://cyberlabsweb.com/${lang || 'hu'}/blog/${post.id}`;

    return (
        <SubpageShell
            backHref={`/${lang || 'hu'}/blog/all`}
            backLabel="Vissza a cikkekhez"
            maxWidth="wide"
        >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <Card className="!p-0 overflow-hidden">
                        <div className="relative z-10 px-6 py-10 md:px-14 md:py-16">
                            {/* Category & Date Row */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-wrap items-center gap-3 mb-6"
                            >
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/[0.16] px-3 py-1 text-xs font-mono uppercase tracking-wider text-[#FFF2C6]">
                                    <Tag className="w-3 h-3" />
                                    {post.category}
                                </span>
                                <time
                                    dateTime={post.dateISO}
                                    className="inline-flex items-center gap-1.5 text-xs font-mono text-white/75"
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
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-hero text-white leading-tight max-w-4xl mb-6"
                            >
                                {post.title}
                            </motion.h1>

                            {/* Lead / Meta Description */}
                            {post.metaDescription && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-base md:text-lg font-bold text-white leading-relaxed max-w-3xl"
                                >
                                    {post.metaDescription}
                                </motion.p>
                            )}

                            {/* Author mini-bar */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex items-center gap-3 mt-8 pt-6 border-t border-white/25"
                            >
                                <div className="w-8 h-8 rounded-full bg-white/[0.18] border border-white/40 flex items-center justify-center text-xs font-bold text-[#FFF2C6]">
                                    CL
                                </div>
                                <div>
                                    <span className="text-sm text-white font-semibold">{post.author}</span>
                                    <span className="text-xs text-white/60 ml-2 font-mono">{'//'} CyberLabs Web</span>
                                </div>
                            </motion.div>
                        </div>
                        </Card>
                    </motion.div>

                    {/* Content Area - Professional Article */}
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="prose prose-invert prose-base md:prose-lg max-w-4xl mx-auto
                            prose-headings:text-white prose-headings:font-extrabold prose-headings:mb-4 prose-headings:mt-10 md:prose-headings:mb-6 md:prose-headings:mt-14
                            prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:border-b prose-h2:border-white/25 prose-h2:pb-3
                            prose-h3:text-xl md:prose-h3:text-2xl prose-h3:text-[#FFF2C6] prose-h3:font-extrabold
                            prose-p:text-white prose-p:font-semibold prose-p:leading-[1.85] prose-p:mb-5 md:prose-p:mb-6 prose-p:text-base md:prose-p:text-[17px]
                            prose-a:text-[#FFF2C6] prose-a:no-underline hover:prose-a:underline prose-a:font-bold
                            prose-strong:text-white prose-strong:font-extrabold
                            prose-li:text-white prose-li:font-semibold prose-li:leading-[1.8]
                            prose-ul:my-5 md:prose-ul:my-6 prose-li:my-1.5 md:prose-li:my-2
                            prose-ol:my-5 md:prose-ol:my-6
                            prose-blockquote:border-l-4 prose-blockquote:border-[#FFD66A] prose-blockquote:bg-white/[0.10] prose-blockquote:p-5 md:prose-blockquote:p-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-white prose-blockquote:font-semibold prose-blockquote:shadow-lg
                            prose-code:text-[#FFF2C6] prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-bold
                            [&_.lead]:text-base [&_.lead]:md:text-lg [&_.lead]:text-white [&_.lead]:font-semibold [&_.lead]:leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Author / Trust Box (GEO/E-E-A-T Signal) */}
                    <div className="mt-16 mb-12 sky-frost-panel rounded-[1.75rem] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/[0.18] border-2 border-white/45 overflow-hidden flex-shrink-0">
                            <div className="w-full h-full flex items-center justify-center text-[#FFF2C6] font-bold text-xl">
                                CL
                            </div>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-white font-bold text-lg mb-1">
                                {post.author}
                            </h3>
                            <div className="text-sm text-[#FFF2C6] mb-3 font-mono">
                                {'//'} Digital Strategy Team
                            </div>
                            <p className="text-white/80 text-sm leading-relaxed mb-4">
                                A CyberLabs Web szakértői csapata. Prémium webfejlesztés, AI integráció és digitális stratégia kis- és középvállalkozásoknak. Cikkeinket a legfrissebb iparági trendek és valós tapasztalatok alapján írjuk.
                            </p>
                            <Link href={`/${lang || 'hu'}/#csapat`}
                                className="text-sm text-white hover:text-[#FFF2C6] transition-colors underline decoration-white/30 hover:decoration-[#FFF2C6] underline-offset-4"
                            >
                                Ismerd meg a csapatot &rarr;
                            </Link>
                        </div>
                    </div>

                    {/* Share Buttons */}
                    <div className="pt-8 border-t border-white/25">
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-bold text-white/75 uppercase tracking-wider">Megosztás:</span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalUrl)}`, '_blank')}
                                    className="p-2 rounded-full bg-white/10 hover:bg-[#1877F2] hover:text-white transition-all text-white/70 group"
                                    title="Megosztás Facebookon"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                </button>
                                <button
                                    onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonicalUrl)}`, '_blank')}
                                    className="p-2 rounded-full bg-white/10 hover:bg-[#0A66C2] hover:text-white transition-all text-white/70 group"
                                    title="Megosztás LinkedIn-en"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                </button>
                                <button
                                    onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(canonicalUrl)}&text=${encodeURIComponent(post.title)}`, '_blank')}
                                    className="p-2 rounded-full bg-white/10 hover:bg-black hover:text-white transition-all text-white/70 group"
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
                                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 hover:text-[#FFF2C6] transition-all text-white/70 group"
                                    title="Link másolása"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 012-2v-8a2 2 0 01-2-2h-8a2 2 0 01-2 2v8a2 2 0 012 2z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>


                    {/* Footer CTA */}
                    <div className="mt-20 pt-10 border-t border-white/25 text-center">
                        <h3 className="text-2xl font-bold font-hero text-white mb-4">Tetszett a cikk?</h3>
                        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                            Ha szeretnéd, hogy a te vállalkozásod is hasonló színvonalon jelenjen meg az online térben, vedd fel velünk a kapcsolatot.
                        </p>
                        <Link href={`/${lang || 'hu'}/#kapcsolat`}
                            className="inline-flex items-center justify-center rounded-full border border-white/70 bg-[#FFD66A] px-8 py-4 font-hero font-bold text-[#06437D] transition-all hover:-translate-y-0.5 hover:bg-[#FFE18A] shadow-[0_14px_30px_rgba(255,203,85,0.28)]"
                        >
                            Ajánlatot kérek
                        </Link>
                    </div>
        </SubpageShell>
    );
};
