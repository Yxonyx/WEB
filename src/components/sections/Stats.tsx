import { useEffect, useRef } from 'react';
import { Container } from '../Container';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export const Stats = () => {
    const { t } = useLanguage();

    return (
        <motion.div
            className="border-y border-white/5 bg-[#020205]/80 relative z-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
        >
            <Container>
                <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    <StatItem end={7} suffix="+" label={t('stats.years.label')} sublabel={t('stats.years.sub')} />
                    <StatItem end={44} suffix="+" label={t('stats.clients.label')} sublabel={t('stats.clients.sub')} />
                    <StatItem end={100} suffix="%" label={t('stats.guarantee.label')} sublabel={t('stats.guarantee.sub')} />
                </div>
            </Container>
        </motion.div>
    );
};

const StatItem = ({ end, suffix, label, sublabel }: { end: number, suffix: string, label: string, sublabel: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    // Physics-based spring animation for smoother counting
    const springValue = useSpring(0, {
        stiffness: 40,
        damping: 15,
        mass: 1,
        restDelta: 0.001
    });

    const displayValue = useTransform(springValue, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            springValue.set(end);
        }
    }, [isInView, end, springValue]);

    return (
        <div ref={ref} className="flex flex-col items-center justify-center text-center gap-2 py-6 first:pt-0 last:pb-0 md:py-0">
            <div className="flex items-baseline justify-center gap-0.5">
                <span className="text-4xl sm:text-5xl font-black text-white tracking-tighter tabular-nums">
                    <motion.span>{displayValue}</motion.span>
                </span>
                <span className="text-neonBlue text-2xl sm:text-3xl font-black">
                    {suffix}
                </span>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-[0.2em] leading-tight">
                    {label}
                </p>
                <p className="text-xs sm:text-sm text-muted/70 font-medium mt-1">
                    {sublabel}
                </p>
            </div>
        </div>
    );
};
