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
            'bg-[linear-gradient(145deg,rgba(4,10,20,0.92)_0%,rgba(5,38,80,0.88)_48%,rgba(8,107,190,0.68)_100%)] ' +
            'border-white/[0.38] ' +
            'shadow-[0_24px_68px_-30px_rgba(0,24,64,0.74),inset_0_1px_0_rgba(255,255,255,0.36),inset_0_0_34px_rgba(83,189,255,0.08)] ' +
            'hover:border-white/70 hover:-translate-y-0.5 ' +
            'hover:shadow-[0_30px_82px_-32px_rgba(0,30,80,0.82),inset_0_1px_0_rgba(255,255,255,0.50),inset_0_0_44px_rgba(83,189,255,0.12)]',
        feature:
            'bg-[linear-gradient(145deg,rgba(5,12,24,0.94)_0%,rgba(6,54,108,0.90)_52%,rgba(255,214,106,0.28)_100%)] ' +
            'border-white/60 ' +
            'shadow-[0_26px_74px_-30px_rgba(0,28,70,0.76),inset_0_1px_0_rgba(255,255,255,0.48),inset_0_0_38px_rgba(255,214,106,0.10)] ' +
            'hover:border-white/75 hover:-translate-y-0.5 ' +
            'hover:shadow-[0_32px_86px_-32px_rgba(0,34,84,0.84),inset_0_1px_0_rgba(255,255,255,0.62),inset_0_0_48px_rgba(255,214,106,0.14)]',
    };

    return (
        <Tag className={twMerge(base, padding, styles[variant], className)} {...rest}>
            {/* Top hairline — fixed "lit from above" cue, no matter padding */}
            <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
            {children}
        </Tag>
    );
};
