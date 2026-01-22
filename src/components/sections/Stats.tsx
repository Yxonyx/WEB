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
    const { count, ref } = useCountUp(44, 2000);

    return (
        <motion.div
            ref={ref}
            className="border-y border-white/5 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <Container>
                <div className="py-8 flex flex-col sm:flex-row items-center justify-center gap-8 text-center sm:text-left">
                    <motion.div
                        className="flex items-baseline gap-2"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <span className="text-4xl sm:text-5xl font-bold text-white tracking-tighter tabular-nums">
                            {count}
                        </span>
                        <motion.span
                            className="text-neonBlue text-xl sm:text-2xl font-bold"
                            initial={{ rotate: -180, opacity: 0 }}
                            whileInView={{ rotate: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            +
                        </motion.span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <p className="text-base sm:text-lg font-medium text-white">
                            elégedett ügyfél
                        </p>
                        <p className="text-sm text-muted">
                            Magyarországon és külföldön
                        </p>
                    </motion.div>
                </div>
            </Container>
        </motion.div>
    );
};
