'use client';

import { Container } from '../Container';
import { motion, type Variants } from 'framer-motion';
import { Section } from '../Section';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';
import { Code2, ShoppingBag, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const customIcons = [
    { name: 'React', icon: '/icons/tech/react.svg' },
    { name: 'Next.js', icon: '/icons/tech/nextjs.svg' },
    { name: 'TypeScript', icon: '/icons/tech/typescript.svg' },
    { name: 'JavaScript', icon: '/icons/tech/javascript.svg' },
    { name: 'Tailwind CSS', icon: '/icons/tech/tailwindcss.svg' },
    { name: 'Node.js', icon: '/icons/tech/nodejs.svg' },
    { name: 'Python', icon: '/icons/tech/python.svg' },
    { name: 'Supabase', icon: '/icons/tech/supabase.svg' },
    { name: 'PostgreSQL', icon: '/icons/tech/postgresql.svg' },
    { name: 'Stripe', icon: '/icons/tech/stripe.svg' },
    { name: 'Netlify', icon: '/icons/tech/netlify.svg' },
    { name: 'Git', icon: '/icons/tech/git.svg' },
    { name: 'Framer Motion', icon: '/icons/tech/framer.svg', invert: true },
    { name: 'Three.js', icon: '/icons/tech/threejs.svg', invert: true },
    { name: 'Resend', icon: '/icons/tech/resend.svg', invert: true },
    { name: 'HTML5', icon: '/icons/tech/html5.svg' },
    { name: 'CSS3', icon: '/icons/tech/css.svg' },
    { name: 'Vercel', icon: '/icons/tech/vercel.svg', invert: true },
];

const platformIcons: { name: string; icon: string; invert?: boolean }[] = [
    { name: 'Shopify', icon: '/icons/tech/shopify.svg' },
    { name: 'WordPress', icon: '/icons/tech/wordpress.svg' },
    { name: 'PHP', icon: '/icons/tech/php.svg' },
    { name: 'HTML5', icon: '/icons/tech/html5.svg' },
    { name: 'CSS3', icon: '/icons/tech/css.svg' },
    { name: 'JavaScript', icon: '/icons/tech/javascript.svg' },
];

const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 1, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

export const TechStack = () => {
    const { t } = useLanguage();

    const customFeatures = t('techStack.custom.features') as unknown as string[];
    const platformFeatures = t('techStack.platform.features') as unknown as string[];

    return (
        <Section id="technologiak" className="relative overflow-hidden" withOrbs>
            <Container>
                <SectionHeader
                    number="06"
                    eyebrow={t('techStack.tag') as string}
                    title={t('techStack.title') as string}
                    subtitle={t('techStack.subtitle') as string}
                    align="center"
                    className="mb-10 sm:mb-14"
                />

                <motion.div
                    className="grid md:grid-cols-2 gap-5 md:gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={containerVariants}
                >
                    {/* Card 1: Custom dev */}
                    <motion.div variants={itemVariants} className="h-full">
                        <Card className="h-full flex flex-col">
                            <div className="w-11 h-11 rounded-2xl bg-white/[0.18] border border-white/35 flex items-center justify-center mb-5 text-[#FFF2C6]">
                                <Code2 size={20} />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-1 font-hero bg-none">
                                {t('techStack.custom.title') as string}
                            </h3>
                            <div className="text-[#FFF2C6] font-mono text-xs mb-4 tracking-wide uppercase">
                                {t('techStack.custom.tagline') as string}
                            </div>
                            <p
                                className="text-white/86 text-[15px] mb-5 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: t('techStack.custom.desc') as string }}
                            />

                            <ul className="space-y-2 mb-6">
                                {customFeatures.map((feat, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-white/75 text-[15px]">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFF2C6] shrink-0 mt-1" />
                                        <span dangerouslySetInnerHTML={{ __html: feat }} />
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto pt-5 border-t border-white/[0.07]">
                                <div className="text-[11px] font-mono text-white/50 uppercase tracking-[0.18em] mb-3 flex items-center gap-1.5">
                                    <span className="w-1 h-1 rounded-full bg-[#FFD66A]" />
                                    {t('techStack.custom.sidebar') as string}
                                </div>
                                <div className="grid grid-cols-9 gap-2">
                                    {customIcons.map((tech, i) => (
                                        <motion.div
                                            key={tech.name}
                                            initial={{ opacity: 1, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.05 + i * 0.02, duration: 0.25 }}
                                            title={tech.name}
                                            className="group"
                                        >
                                            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.14] border border-white/[0.22] group-hover:border-white/50 group-hover:bg-white/[0.20] transition-all">
                                                <Image
                                                    src={tech.icon}
                                                    alt={tech.name}
                                                    width={20}
                                                    height={20}
                                                    className={`w-4.5 h-4.5 object-contain ${
                                                        tech.invert ? 'brightness-0 invert' : ''
                                                    }`}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Card 2: Platform */}
                    <motion.div variants={itemVariants} className="h-full">
                        <Card className="h-full flex flex-col">
                            <div className="w-11 h-11 rounded-2xl bg-white/[0.18] border border-white/35 flex items-center justify-center mb-5 text-[#FFF2C6]">
                                <ShoppingBag size={20} />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-1 font-hero bg-none">
                                {t('techStack.platform.title') as string}
                            </h3>
                            <div className="text-[#FFF2C6] font-mono text-xs mb-4 tracking-wide uppercase">
                                {t('techStack.platform.tagline') as string}
                            </div>
                            <p
                                className="text-white/86 text-[15px] mb-5 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: t('techStack.platform.desc') as string }}
                            />

                            <ul className="space-y-2 mb-6">
                                {platformFeatures.map((feat, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-white/75 text-[15px]">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFF2C6] shrink-0 mt-1" />
                                        <span dangerouslySetInnerHTML={{ __html: feat }} />
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto pt-5 border-t border-white/[0.07]">
                                <div className="text-[11px] font-mono text-white/50 uppercase tracking-[0.18em] mb-3 flex items-center gap-1.5">
                                    <span className="w-1 h-1 rounded-full bg-[#FFD66A]" />
                                    {t('techStack.platform.sidebar') as string}
                                </div>
                                <div className="grid grid-cols-6 gap-2.5">
                                    {platformIcons.map((tech, i) => (
                                        <motion.div
                                            key={tech.name}
                                            className="group flex flex-col items-center gap-1.5"
                                            initial={{ opacity: 1, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.15 + i * 0.1, duration: 0.3 }}
                                        >
                                            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/[0.14] border border-white/[0.22] group-hover:border-white/50 group-hover:bg-white/[0.20] transition-all">
                                                <Image
                                                    src={tech.icon}
                                                    alt={tech.name}
                                                    width={24}
                                                    height={24}
                                                    className={`w-5 h-5 object-contain ${
                                                        tech.invert ? 'brightness-0 invert' : ''
                                                    }`}
                                                />
                                            </div>
                                            <span className="text-[10px] text-white/45 group-hover:text-white/70 transition-colors text-center leading-tight">
                                                {tech.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </motion.div>
            </Container>
        </Section>
    );
};
