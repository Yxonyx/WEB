import React from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    as?: 'div' | 'article' | 'section';
    /** Visual emphasis: 'default' = subtle island, 'feature' = stronger glow & border */
    variant?: 'default' | 'feature';
    /** Disable padding when child controls it (e.g. a card that includes an image flush to the edge). */
    flush?: boolean;
}

/**
 * Glass-island card — the core building block of the redesign.
 *
 * Replaces the old `BracketFrame`. Every content section sits in one of
 * these floating rounded-3xl islands so the page reads like a stack of
 * polished panels instead of one long basic-AI scroll.
 */
export const Card: React.FC<CardProps> = ({
    children,
    className,
    as: Tag = 'div',
    variant = 'default',
    flush = false,
    ...rest
}) => {
    const base = 'group/card relative rounded-3xl border transition-all duration-500 will-change-transform';
    const padding = flush ? '' : 'p-5 sm:p-7 lg:p-8';

    const styles = {
        default:
            'bg-gradient-to-br from-white/[0.07] via-white/[0.04] to-white/[0.025] ' +
            'border-white/[0.10] lg:backdrop-blur-md ' +
            'shadow-[0_8px_30px_-12px_rgba(8,12,30,0.6)] ' +
            'hover:border-neonBlue/30 hover:from-white/[0.09] hover:-translate-y-0.5 ' +
            'hover:shadow-[0_18px_50px_-18px_rgba(77,148,255,0.45)]',
        feature:
            'bg-gradient-to-br from-neonBlue/[0.10] via-white/[0.05] to-neonPurple/[0.06] ' +
            'border-neonBlue/30 ' +
            'shadow-[0_22px_60px_-22px_rgba(77,148,255,0.55)] ' +
            'hover:border-neonBlue/50 hover:-translate-y-0.5 ' +
            'hover:shadow-[0_26px_72px_-18px_rgba(77,148,255,0.65)]',
    };

    return (
        <Tag className={twMerge(base, padding, styles[variant], className)} {...rest}>
            {/* Top hairline — fixed "lit from above" cue, no matter padding */}
            <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            {children}
        </Tag>
    );
};
