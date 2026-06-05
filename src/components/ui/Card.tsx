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
            'bg-[linear-gradient(145deg,rgba(88,184,239,0.70)_0%,rgba(28,137,220,0.66)_54%,rgba(7,94,182,0.58)_100%)] ' +
            'border-white/[0.82] text-white backdrop-blur-md ' +
            'shadow-[0_28px_78px_-30px_rgba(0,70,140,0.56),inset_0_1px_0_rgba(255,255,255,0.72),inset_0_0_38px_rgba(255,255,255,0.16)] ' +
            'hover:border-white/75 hover:-translate-y-0.5 ' +
            'hover:shadow-[0_32px_86px_-32px_rgba(0,70,140,0.64),inset_0_1px_0_rgba(255,255,255,0.84),inset_0_0_46px_rgba(255,255,255,0.20)]',
        feature:
            'bg-[linear-gradient(145deg,rgba(118,202,245,0.74)_0%,rgba(34,146,226,0.70)_46%,rgba(255,214,106,0.34)_100%)] ' +
            'border-white/90 text-white backdrop-blur-md ' +
            'shadow-[0_30px_84px_-32px_rgba(0,70,140,0.60),inset_0_1px_0_rgba(255,255,255,0.76),inset_0_0_42px_rgba(255,214,106,0.16)] ' +
            'hover:border-white/80 hover:-translate-y-0.5 ' +
            'hover:shadow-[0_34px_92px_-34px_rgba(0,70,140,0.68),inset_0_1px_0_rgba(255,255,255,0.88),inset_0_0_50px_rgba(255,214,106,0.22)]',
    };

    return (
        <Tag className={twMerge(base, padding, styles[variant], className)} {...rest}>
            {/* Top hairline — fixed "lit from above" cue, no matter padding */}
            <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
            {children}
        </Tag>
    );
};
