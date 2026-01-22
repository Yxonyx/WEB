import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SignaturePanelProps {
    children: React.ReactNode;
    className?: string;
    label?: string; // e.g. "Services" or "01"
    highlight?: boolean; // If true, maybe use the neon/lime accent
}

export const SignaturePanel: React.FC<SignaturePanelProps> = ({
    children,
    className,
    label,
    highlight
}) => {
    return (
        <div className={twMerge(
            "relative group overflow-hidden",
            "bg-surface/40 backdrop-blur-sm border border-white/5",
            highlight ? "ring-1 ring-highlight/20" : "",
            className
        )}>
            {/* Top Header Strip / Label - hidden on mobile */}
            {label && (
                <div className="hidden sm:block px-6 py-2 bg-white/5 border-b border-white/5 backdrop-blur-md">
                    <span className="font-mono text-xs tracking-widest text-muted2 uppercase">
                        {label}
                    </span>
                </div>
            )}

            {/* Side Rail (Left) */}
            <div className={twMerge(
                "absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-transparent via-white/10 to-transparent",
                highlight && "via-highlight/50"
            )} />

            {/* Content */}
            <div className="p-8 sm:p-10 lg:p-12 h-full z-0 relative">
                {children}
            </div>

            {/* Decorative Corner Glow */}
            <div className={twMerge(
                "absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[100px] pointer-events-none opacity-20",
                highlight ? "bg-highlight" : "bg-neonBlue"
            )} />

            {/* Bottom corner visual (angular bracket) */}
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/10" />
        </div>
    );
};

export const SignatureItem: React.FC<{
    index: string;
    title: string;
    children: React.ReactNode;
}> = ({ index, title, children }) => {
    return (
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 last:mb-0 group/item">
            <div className="shrink-0 w-12 pt-1">
                <span className="font-mono text-neonBlue/80 text-sm group-hover/item:text-neonBlue transition-colors duration-300">
                    &lt;{index}&gt;
                </span>
            </div>
            <div>
                <h3 className="text-xl font-medium text-white mb-2 group-hover/item:text-neonBlue transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-muted leading-relaxed text-sm sm:text-base">
                    {children}
                </p>
            </div>
        </div>
    );
};
