import React from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps {
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
}) => {
    const base = 'group/card relative rounded-3xl border transition-all duration-500 will-change-transform';
    const padding = flush ? '' : 'p-5 sm:p-7 lg:p-8';

    const styles = {
        default:
            'bg-white/[0.03] border-white/[0.07] backdrop-blur-md ' +
            'hover:border-neonBlue/25 hover:bg-white/[0.045] hover:-translate-y-0.5 ' +
            'hover:shadow-[0_16px_48px_-20px_rgba(77,148,255,0.35)]',
        feature:
            'bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-white/[0.015] ' +
            'border-neonBlue/25 ' +
            'shadow-[0_20px_60px_-24px_rgba(77,148,255,0.45)] ' +
            'hover:border-neonBlue/45 hover:-translate-y-0.5 ' +
            'hover:shadow-[0_24px_70px_-20px_rgba(77,148,255,0.55)]',
    };

    return (
        <Tag className={twMerge(base, padding, styles[variant], className)}>
            {/* Top hairline — fixed "lit from above" cue, no matter padding */}
            <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            {children}
        </Tag>
    );
};
