import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

export const Css3DCard = () => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    // Rotate based on mouse position
    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div className="w-full h-full flex items-center justify-center [perspective:1200px]">
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-[340px] sm:w-[480px] h-[300px] bg-gray-900/40 border border-white/10 rounded-xl backdrop-blur-xl shadow-2xl shadow-neonBlue/5 cursor-pointer group hover:shadow-neonPurple/20 transition-shadow duration-500"
            >
                {/* 3D Depth Layer - Terminal */}
                <div
                    style={{ transform: "translateZ(50px)" }}
                    className="absolute inset-4 sm:inset-8 bg-black/80 rounded-lg border border-white/10 p-6 flex flex-col shadow-2xl pointer-events-none"
                >
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        <span className="ml-auto text-xs text-muted font-mono opacity-50">cyber_engine.tsx</span>
                    </div>

                    {/* Content */}
                    <div className="font-mono text-sm space-y-2 relative overflow-hidden">
                        <div className="flex gap-2">
                            <span className="text-neonPurple font-bold">➜</span>
                            <span className="text-white">init_system()</span>
                        </div>
                        <div className="text-green-400 pl-4 text-xs">[SUCCESS] Interactive 3D Layer</div>
                        <div className="text-green-400 pl-4 text-xs">[SUCCESS] Mouse Tracking Events</div>
                        <div className="text-green-400 pl-4 text-xs font-bold text-shadow-neon">[SUCCESS] GPU Accelerated</div>
                        <div className="pl-4 pt-2 text-xs text-muted animate-pulse">Running diagnostics...</div>
                    </div>
                </div>

                {/* Floating Elements (Parallax) */}
                <motion.div
                    style={{ transform: "translateZ(80px)" }}
                    className="absolute -right-4 -top-8 bg-neonBlue/10 backdrop-blur-md border border-neonBlue/40 py-2 px-4 rounded-lg text-neonBlue text-xs font-mono font-bold shadow-lg pointer-events-none"
                >
                    GPU: 0%
                </motion.div>

                <motion.div
                    style={{ transform: "translateZ(60px)" }}
                    className="absolute -left-6 bottom-10 bg-neonPurple/10 backdrop-blur-md border border-neonPurple/40 py-2 px-4 rounded-lg text-neonPurple text-xs font-mono font-bold shadow-lg pointer-events-none"
                >
                    60 FPS
                </motion.div>

                {/* Reflection/Shear Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />

            </motion.div>
        </div>
    );
};
