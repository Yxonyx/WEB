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
                "group relative p-6 sm:p-8 rounded-2xl",
                "bg-gradient-to-b from-white/[0.04] to-white/[0.015]",
                "border border-white/[0.07]",
                "backdrop-blur-sm",
                "transition-all duration-500 will-change-transform",
                "hover:border-neonBlue/30 hover:shadow-[0_16px_48px_-16px_rgba(77,148,255,0.35)] hover:-translate-y-0.5",
                className
            )}
        >
            {/* Inner top hairline — simulates light from above, premium feel */}
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            {children}
        </div>
    );
};
