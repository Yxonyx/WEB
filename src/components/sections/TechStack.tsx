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
                    className="-mx-4 grid grid-cols-1 gap-4 px-4 md:mx-0 md:grid-cols-2 md:gap-6 md:px-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={containerVariants}
                >
                    {/* Card 1: Custom dev */}
                    <motion.div variants={itemVariants} className="h-full">
                        <Card className="flex h-full flex-col !p-4 sm:!p-7 lg:!p-8">
                            <div className="mb-3 flex items-start gap-3 sm:mb-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/35 bg-white/[0.18] text-[#FFF2C6] sm:h-11 sm:w-11 sm:rounded-2xl">
                                    <Code2 size={18} className="sm:hidden" />
                                    <Code2 size={20} className="hidden sm:block" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h3 className="font-hero bg-none text-lg font-bold leading-tight sm:text-2xl">
                                        {t('techStack.custom.title') as string}
                                    </h3>
                                    <div className="mt-1 font-mono text-[10px] uppercase leading-snug tracking-wide text-[#FFF2C6] sm:text-xs">
                                        {t('techStack.custom.tagline') as string}
                                    </div>
                                </div>
                            </div>
                            <p
                                className="mb-3 text-[14px] leading-snug text-white/86 sm:mb-5 sm:text-[15px] sm:leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: t('techStack.custom.desc') as string }}
                            />

                            <ul className="mb-4 space-y-1.5 sm:mb-6 sm:space-y-2">
                                {customFeatures.map((feat, i) => (
                                    <li key={i} className="flex items-start gap-2 text-[13px] text-white/75 sm:gap-2.5 sm:text-[15px]">
                                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#FFF2C6] sm:mt-1" />
                                        <span dangerouslySetInnerHTML={{ __html: feat }} />
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto border-t border-white/[0.07] pt-4 sm:pt-5">
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
                        <Card className="flex h-full flex-col !p-4 sm:!p-7 lg:!p-8">
                            <div className="mb-3 flex items-start gap-3 sm:mb-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/35 bg-white/[0.18] text-[#FFF2C6] sm:h-11 sm:w-11 sm:rounded-2xl">
                                    <ShoppingBag size={18} className="sm:hidden" />
                                    <ShoppingBag size={20} className="hidden sm:block" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h3 className="font-hero bg-none text-lg font-bold leading-tight sm:text-2xl">
                                        {t('techStack.platform.title') as string}
                                    </h3>
                                    <div className="mt-1 font-mono text-[10px] uppercase leading-snug tracking-wide text-[#FFF2C6] sm:text-xs">
                                        {t('techStack.platform.tagline') as string}
                                    </div>
                                </div>
                            </div>
                            <p
                                className="mb-3 text-[14px] leading-snug text-white/86 sm:mb-5 sm:text-[15px] sm:leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: t('techStack.platform.desc') as string }}
                            />

                            <ul className="mb-4 space-y-1.5 sm:mb-6 sm:space-y-2">
                                {platformFeatures.map((feat, i) => (
                                    <li key={i} className="flex items-start gap-2 text-[13px] text-white/75 sm:gap-2.5 sm:text-[15px]">
                                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#FFF2C6] sm:mt-1" />
                                        <span dangerouslySetInnerHTML={{ __html: feat }} />
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto border-t border-white/[0.07] pt-4 sm:pt-5">
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
