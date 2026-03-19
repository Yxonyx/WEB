'use client';

import { Container } from '../Container';
import { motion, type Variants } from 'framer-motion';
import { Section } from '../Section';
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

const platformIcons = [
    { name: 'Shopify', icon: '/icons/tech/shopify.svg' },
    { name: 'WordPress', icon: '/icons/tech/wordpress.svg' },
    { name: 'PHP', icon: '/icons/tech/php.svg' },
    { name: 'HTML5', icon: '/icons/tech/html5.svg' },
    { name: 'CSS3', icon: '/icons/tech/css.svg' },
    { name: 'JavaScript', icon: '/icons/tech/javascript.svg' },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.4, ease: 'easeOut' as const }
    }
};

export const TechStack = () => {
    const { t } = useLanguage();

    const customFeatures = t('techStack.custom.features') as unknown as string[];
    const platformFeatures = t('techStack.platform.features') as unknown as string[];

    return (
        <Section id="technologiak" className="section-bg-mixed bg-surface3/20 relative overflow-hidden" withOrbs>
            <div className="hidden lg:block absolute top-0 right-0 w-[500px] h-[500px] bg-neonBlue/5 rounded-full blur-[80px] pointer-events-none" />

            <Container>
                {/* Section Header */}
                <motion.div
                    className="text-center mb-14 lg:mb-20"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-neonBlue font-mono text-sm tracking-widest uppercase mb-4 block">
                        {'// ' + (t('techStack.tag') as string)}
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white mb-4">
                        {(t('techStack.title') as string).split(' ').slice(0, -1).join(' ')}{' '}
                        <span className="text-transparent bg-clip-text bg-accent-gradient">
                            {(t('techStack.title') as string).split(' ').slice(-1)}
                        </span>
                    </h2>
                    <p className="text-lg text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
                        {t('techStack.subtitle') as string}
                    </p>
                </motion.div>

                {/* Two cards side by side */}
                <motion.div
                    className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 px-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={containerVariants}
                >
                    {/* Card 1: Egyedi fejlesztés */}
                    <motion.div
                        variants={itemVariants}
                        className="relative bg-black/20 backdrop-blur-md border border-white/10 rounded-xl hover:border-neonBlue/30 transition-all duration-500 flex flex-col"
                    >
                        {/* Corner brackets */}
                        <div className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-neonBlue rounded-tl-lg" />
                        <div className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-neonBlue rounded-tr-lg" />
                        <div className="absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2 border-neonBlue rounded-bl-lg" />
                        <div className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-neonBlue rounded-br-lg" />

                        <div className="p-4 sm:p-6 lg:p-8 flex-1 flex flex-col">
                            <div className="w-10 h-10 rounded-lg bg-neonBlue/10 flex items-center justify-center mb-5 text-neonBlue">
                                <Code2 size={20} />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 font-display">
                                {t('techStack.custom.title') as string}
                            </h3>
                            <div className="text-neonBlue font-mono text-xs mb-4 tracking-wide">
                                {t('techStack.custom.tagline') as string}
                            </div>
                            <p className="text-white/70 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                                {t('techStack.custom.desc') as string}
                            </p>

                            <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                                {customFeatures.map((feat, i) => (
                                    <li key={i} className="flex items-start gap-2 md:gap-2.5 text-white/70 text-sm md:text-base">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-neonBlue shrink-0 mt-0.5" />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Tech icons grid */}
                            <div className="mt-auto pt-5 border-t border-white/5">
                                <div className="text-[10px] font-mono text-muted2 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                                    <span className="w-1 h-1 rounded-full bg-neonBlue" />
                                    {t('techStack.custom.sidebar') as string}
                                </div>
                                <div className="grid grid-cols-9 gap-2">
                                    {customIcons.map((tech, i) => (
                                        <motion.div
                                            key={tech.name}
                                            className="group"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.05 + i * 0.02, duration: 0.25 }}
                                            title={tech.name}
                                        >
                                            <div className="w-8 h-8 flex items-center justify-center rounded-md bg-white/[0.04] border border-white/[0.06] group-hover:border-neonBlue/30 group-hover:bg-white/[0.08] transition-all duration-300">
                                                <Image
                                                    src={tech.icon}
                                                    alt={tech.name}
                                                    width={20}
                                                    height={20}
                                                    className={`w-5 h-5 object-contain ${tech.invert ? 'brightness-0 invert' : ''}`}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: WordPress & Shopify */}
                    <motion.div
                        variants={itemVariants}
                        className="relative bg-black/20 backdrop-blur-md border border-white/10 rounded-xl hover:border-neonPurple/30 transition-all duration-500 flex flex-col"
                    >
                        {/* Corner brackets */}
                        <div className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-neonPurple rounded-tl-lg" />
                        <div className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-neonPurple rounded-tr-lg" />
                        <div className="absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2 border-neonPurple rounded-bl-lg" />
                        <div className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-neonPurple rounded-br-lg" />

                        <div className="p-4 sm:p-6 lg:p-8 flex-1 flex flex-col">
                            <div className="w-10 h-10 rounded-lg bg-neonPurple/10 flex items-center justify-center mb-5 text-neonPurple">
                                <ShoppingBag size={20} />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 font-display">
                                {t('techStack.platform.title') as string}
                            </h3>
                            <div className="text-neonPurple font-mono text-xs mb-4 tracking-wide">
                                {t('techStack.platform.tagline') as string}
                            </div>
                            <p className="text-white/70 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                                {t('techStack.platform.desc') as string}
                            </p>

                            <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                                {platformFeatures.map((feat, i) => (
                                    <li key={i} className="flex items-start gap-2 md:gap-2.5 text-white/70 text-sm md:text-base">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-neonPurple shrink-0 mt-0.5" />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Platform icons */}
                            <div className="mt-auto pt-5 border-t border-white/5">
                                <div className="text-[10px] font-mono text-muted2 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                                    <span className="w-1 h-1 rounded-full bg-neonPurple" />
                                    {t('techStack.platform.sidebar') as string}
                                </div>
                                <div className="grid grid-cols-6 gap-3">
                                    {platformIcons.map((tech, i) => (
                                        <motion.div
                                            key={tech.name}
                                            className="group flex flex-col items-center gap-1.5"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.15 + i * 0.1, duration: 0.3 }}
                                        >
                                            <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06] group-hover:border-neonPurple/30 group-hover:bg-white/[0.08] transition-all duration-300">
                                                <Image
                                                    src={tech.icon}
                                                    alt={tech.name}
                                                    width={28}
                                                    height={28}
                                                    className={`w-6 h-6 object-contain ${(tech as any).invert ? 'brightness-0 invert' : ''} transition-opacity duration-300`}
                                                />
                                            </div>
                                            <span className="text-[8px] text-muted2/60 group-hover:text-white/60 transition-colors text-center leading-tight">
                                                {tech.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </Container>
        </Section>
    );
};
