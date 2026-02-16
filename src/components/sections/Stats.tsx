import { useRef, useEffect, useCallback } from 'react';
import { useInView } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export const Stats = () => {
    const { t } = useLanguage();

    return (
        <section className="relative z-30 -mt-16 -mb-20 md:-mt-20 md:-mb-24 py-8 md:py-10 pointer-events-none">
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex items-start justify-center gap-12 sm:gap-24 md:gap-32 lg:gap-48">
                    <StatItem
                        target={7}
                        suffix="+"
                        label={t('stats.years.label')}
                    />

                    <StatItem
                        target={44}
                        suffix="+"
                        label={t('stats.clients.label')}
                    />

                    <StatItem
                        target={100}
                        suffix="%"
                        label={t('stats.guarantee.label')}
                    />
                </div>
            </div>
        </section>
    );
};

interface StatItemProps {
    target: number;
    suffix: string;
    label: string;
}

const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

const StatItem = ({ target, suffix, label }: StatItemProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const numberRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-20px" });
    const hasAnimated = useRef(false);

    const animateCount = useCallback(() => {
        if (!numberRef.current || hasAnimated.current) return;
        hasAnimated.current = true;

        // Smaller numbers get shorter duration so the jumps aren't noticeable
        const duration = Math.max(600, target * 20);
        const start = performance.now();

        const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutQuart(progress);
            const value = Math.round(eased * target);

            if (numberRef.current) {
                numberRef.current.textContent = String(value);
            }

            if (progress < 1) {
                requestAnimationFrame(tick);
            }
        };

        requestAnimationFrame(tick);
    }, [target]);

    useEffect(() => {
        if (isInView) animateCount();
    }, [isInView, animateCount]);

    return (
        <div ref={containerRef} className="flex flex-col items-center text-center w-28 sm:w-40 md:w-52">
            <div className="flex items-baseline">
                <span ref={numberRef} className="text-4xl sm:text-5xl md:text-6xl font-mono font-semibold tabular-nums text-neonBlue drop-shadow-[0_0_12px_rgba(79,138,255,0.25)]">
                    0
                </span>
                <span className="text-2xl sm:text-3xl md:text-4xl font-mono font-semibold text-neonBlue drop-shadow-[0_0_12px_rgba(79,138,255,0.25)]">
                    {suffix}
                </span>
            </div>

            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/50 mt-2 font-display font-medium">
                {label.split('\n').map((line, i) => (
                    <span key={i} className="block">
                        {line}
                    </span>
                ))}
            </span>
        </div>
    );
};
