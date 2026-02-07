import { useEffect, useRef } from 'react';
import { Container } from '../Container';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
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

    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, end, {
                duration: 2,
                ease: "easeOut"
            });
            return controls.stop;
        }
    }, [isInView, end, count]);

    return (
        <div ref={ref} className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:justify-center gap-3 py-2 md:py-0">
            <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-black text-white tracking-tighter tabular-nums">
                    <motion.span>{rounded}</motion.span>
                </span>
                <span className="text-neonBlue text-xl sm:text-2xl font-black">
                    {suffix}
                </span>
            </div>
            <div>
                <p className="text-base font-bold text-white uppercase tracking-widest leading-tight mb-1">
                    {label}
                </p>
                <p className="text-sm text-muted/80 font-medium tracking-wide">
                    {sublabel}
                </p>
            </div>
        </div>
    );
};
