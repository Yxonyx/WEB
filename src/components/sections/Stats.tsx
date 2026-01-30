import { useState, useEffect, useRef } from 'react';
import { Container } from '../Container';
import { motion, useInView } from 'framer-motion';

// Counter hook for counting animation
const useCountUp = (end: number, duration: number = 2000, startOnView: boolean = true) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(!startOnView);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (startOnView && isInView && !hasStarted) {
            setHasStarted(true);
        }
    }, [isInView, startOnView, hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Easing function (ease-out cubic)
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, hasStarted]);

    return { count, ref };
};

export const Stats = () => {
    return (
        <motion.div
            className="border-y border-white/5 bg-[#020205]/80 backdrop-blur-sm relative z-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <Container>
                <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {/* Stat 1 */}
                    <StatItem
                        end={7}
                        suffix="+"
                        label="Év tapasztalat"
                        sublabel="Full-stack fejlesztésben"
                        duration={1000}
                    />

                    {/* Stat 2 */}
                    <StatItem
                        end={44}
                        suffix="+"
                        label="Elégedett ügyfél"
                        sublabel="Magyarországon és külföldön"
                    />

                    {/* Stat 3 */}
                    <StatItem
                        end={100}
                        suffix="%"
                        label="Garancia"
                        sublabel="Pénzvisszafizetési opcióval"
                    />
                </div>
            </Container>
        </motion.div>
    );
};

const StatItem = ({ end, suffix, label, sublabel, duration = 2000 }: { end: number, suffix: string, label: string, sublabel: string, duration?: number }) => {
    const { count, ref } = useCountUp(end, duration);

    return (
        <div ref={ref} className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:justify-center gap-3 py-2 md:py-0">
            <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-black text-white tracking-tighter tabular-nums">
                    {count}
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
