import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionHeaderProps {
    /** Two-digit section index, e.g. "03". Optional. */
    number?: string;
    /** Mono uppercase eyebrow tag above the title (e.g. "Hogyan segítünk?"). */
    eyebrow?: string;
    /** Main heading. Use {accent} to highlight a single word in blue. */
    title: React.ReactNode;
    /** Optional supporting paragraph below the title. */
    subtitle?: React.ReactNode;
    /** Alignment of the block. */
    align?: 'left' | 'center';
    className?: string;
}

/**
 * Unified section header — borrows the magazine-style number badge from the
 * Doritippek reference, but tinted to our blue palette. Replaces the dozen
 * slightly-different headers scattered across sections.
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
    number,
    eyebrow,
    title,
    subtitle,
    align = 'left',
    className,
}) => {
    const alignClasses = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';

    return (
        <div className={twMerge('flex flex-col gap-3 mb-8 sm:mb-10 max-w-2xl', alignClasses, className)}>
            {(number || eyebrow) && (
                <div className={twMerge('flex items-baseline gap-3', align === 'center' && 'justify-center')}>
                    {number && (
                        <span className="font-mono text-sm text-neonBlue tabular-nums tracking-wider">
                            {number}
                        </span>
                    )}
                    {eyebrow && (
                        <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.18em] text-white/50">
                            {eyebrow}
                        </span>
                    )}
                </div>
            )}

            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold font-display text-white leading-[1.15] tracking-tight">
                {title}
            </h2>

            {subtitle && (
                <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-xl font-medium">
                    {subtitle}
                </p>
            )}
        </div>
    );
};
