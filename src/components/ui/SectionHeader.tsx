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
                <div className={twMerge('flex items-center gap-3', align === 'center' && 'justify-center')}>
                    {number && (
                        <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-xl border border-white/70 bg-[#FFD66A] px-2 font-mono text-xs font-extrabold tabular-nums tracking-wider text-[#06437D] shadow-[0_10px_24px_-12px_rgba(255,203,85,0.70),inset_0_1px_0_rgba(255,255,255,0.72)]">
                            {number}
                        </span>
                    )}
                    {eyebrow && (
                        <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white drop-shadow-[0_2px_8px_rgba(0,82,166,0.22)] sm:text-sm">
                            {eyebrow}
                        </span>
                    )}
                </div>
            )}

            <h2 className="bg-none font-hero text-2xl font-extrabold leading-[1.1] text-white drop-shadow-[0_6px_18px_rgba(0,93,180,0.25)] sm:text-3xl lg:text-[2.45rem]">
                {title}
            </h2>

            {subtitle && (
                <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl font-medium drop-shadow-[0_2px_10px_rgba(0,70,150,0.18)]">
                    {subtitle}
                </p>
            )}
        </div>
    );
};
