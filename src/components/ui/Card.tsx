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
    const base = 'group/card relative rounded-[1.75rem] border transition-all duration-500 will-change-transform overflow-hidden';
    const padding = flush ? '' : 'p-5 sm:p-7 lg:p-8';

    const styles = {
        default:
            'bg-[linear-gradient(145deg,rgba(255,255,255,0.44)_0%,rgba(142,205,245,0.34)_52%,rgba(72,172,232,0.28)_100%)] ' +
            'border-white/[0.52] backdrop-blur-md ' +
            'shadow-[0_20px_52px_-26px_rgba(0,91,174,0.22),inset_0_1px_0_rgba(255,255,255,0.58),inset_0_0_28px_rgba(255,255,255,0.1)] ' +
            'hover:border-white/75 hover:-translate-y-0.5 ' +
            'hover:shadow-[0_26px_64px_-28px_rgba(0,86,168,0.26),inset_0_1px_0_rgba(255,255,255,0.65),inset_0_0_36px_rgba(255,255,255,0.14)]',
        feature:
            'bg-[linear-gradient(145deg,rgba(255,255,255,0.38)_0%,rgba(118,192,238,0.38)_48%,rgba(255,214,106,0.32)_100%)] ' +
            'border-white/65 backdrop-blur-md ' +
            'shadow-[0_22px_58px_-28px_rgba(0,86,168,0.24),inset_0_1px_0_rgba(255,255,255,0.55),inset_0_0_32px_rgba(255,246,219,0.12)] ' +
            'hover:border-white/80 hover:-translate-y-0.5 ' +
            'hover:shadow-[0_28px_72px_-30px_rgba(0,82,160,0.28),inset_0_1px_0_rgba(255,255,255,0.68),inset_0_0_40px_rgba(255,214,106,0.16)]',
    };

    return (
        <Tag className={twMerge(base, padding, styles[variant], className)} {...rest}>
            {/* Top hairline — fixed "lit from above" cue, no matter padding */}
            <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
            {children}
        </Tag>
    );
};
