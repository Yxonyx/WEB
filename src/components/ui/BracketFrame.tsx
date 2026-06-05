import React from 'react';
import { twMerge } from 'tailwind-merge';

interface BracketFrameProps {
    children: React.ReactNode;
    className?: string;
    idx?: number;
}

/**
 * Clean modern card wrapper — replaces the old 4-corner tech-bracket style.
 * Uses a subtle frosted surface, a hairline top highlight, and a soft blue
 * glow on hover, so sections can hold rich content without looking like an
 * AI-template cyberpunk dashboard.
 */
export const BracketFrame: React.FC<BracketFrameProps> = ({ children, className }) => {
    return (
        <div
            className={twMerge(
                "group relative p-6 sm:p-8 rounded-[1.5rem]",
                "bg-gradient-to-b from-white/[0.20] to-white/[0.08]",
                "border border-white/[0.34]",
                "backdrop-blur-sm",
                "transition-all duration-500 will-change-transform",
                "shadow-[0_16px_45px_-22px_rgba(0,74,153,0.42),inset_0_1px_0_rgba(255,255,255,0.38)]",
                "hover:border-white/60 hover:shadow-[0_22px_62px_-24px_rgba(0,95,180,0.48)] hover:-translate-y-0.5",
                className
            )}
        >
            {/* Inner top hairline — simulates light from above, premium feel */}
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />

            {children}
        </div>
    );
};
