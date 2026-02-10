import { useRef, useEffect } from 'react';
import { Container } from '../Container';
import { useInView, useMotionValue, useSpring, useTransform, motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export const Stats = () => {
    const { t } = useLanguage();

    return (
        <section className="relative z-20 border-y border-white/5 bg-black">
            <Container>
                {/* Clean 3-column layout on all devices */}
                <div className="grid grid-cols-3 divide-x divide-white/5">
                    <StatItem
                        target={7}
                        suffix="+"
                        label={t('stats.years.label')}
                        sublabel={t('stats.years.sub')}
                        delay={0}
                    />
                    <StatItem
                        target={44}
                        suffix="+"
                        label={t('stats.clients.label')}
                        sublabel={t('stats.clients.sub')}
                        delay={0.1}
                    />
                    <StatItem
                        target={100}
                        suffix="%"
                        label={t('stats.guarantee.label')}
                        sublabel={t('stats.guarantee.sub')}
                        delay={0.2}
                    />
                </div>
            </Container>
        </section>
    );
};

interface StatItemProps {
    target: number;
    suffix: string;
    label: string;
    sublabel: string;
    delay: number;
}

const StatItem = ({ target, suffix, label, sublabel, delay }: StatItemProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-20px" });

    const count = useMotionValue(0);
    const rounded = useSpring(count, { damping: 20, stiffness: 60 });
    const display = useTransform(rounded, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            const timeout = setTimeout(() => {
                count.set(target);
            }, delay * 1000);
            return () => clearTimeout(timeout);
        }
    }, [isInView, count, target, delay]);

    return (
        <div ref={ref} className="group relative py-4 md:py-6 px-1 md:px-4 flex flex-col items-center justify-center text-center">
            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-neonBlue/0 to-neonBlue/0 group-hover:to-neonBlue/5 transition-colors duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center gap-1">
                {/* Number & Suffix */}
                <div className="flex items-baseline gap-0.5 text-white">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight tabular-nums">
                        <motion.span>{display}</motion.span>
                    </span>
                    <span className="text-lg sm:text-xl md:text-2xl text-neonBlue font-bold">
                        {suffix}
                    </span>
                </div>

                {/* Subtext */}
                <span className="text-[10px] sm:text-sm font-bold uppercase tracking-widest text-white/90 mt-1 md:mt-2 max-w-[100px] sm:max-w-none leading-tight">
                    {label}
                </span>

                {/* Hide detailed sublabel on mobile for a cleaner look */}
                <span className="hidden sm:block text-xs text-muted/70 font-medium mt-1">
                    {sublabel}
                </span>
            </div>
        </div>
    );
};
