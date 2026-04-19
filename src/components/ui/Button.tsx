import React, { useCallback } from 'react';

import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'harvest';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    href?: string;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    children,
    href,
    className,
    ...props
}) => {
    const baseStyles = "relative inline-flex items-center justify-center font-mono font-bold tracking-wider transition-all duration-300 group";

    const variants = {
        primary: "bg-neonBlue text-white hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(77,148,255,0.45)]", // Super Lighter Electric Blue shadow
        secondary: "bg-surface/50 border border-white/10 text-white hover:bg-white/5 hover:border-white/20 hover:text-neonBlue",
        harvest: "bg-neonHarvest text-white hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(143,125,255,0.38)]",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-8 py-3 text-sm",
        lg: "px-10 py-4 text-base",
    };

    const Brackets = () => (
        <>
            <span className="mr-2 text-black/60 group-hover:text-black/80 transition-colors">&lt;</span>
        </>
    );

    const CloseBracket = () => (
        <span className="ml-2 text-black/60 group-hover:text-black/80 transition-colors">&gt;</span>
    );

    const combinedClassName = twMerge(baseStyles, variants[variant], sizes[size], className);

    const handleHashClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!href || !href.startsWith('#')) return;
        e.preventDefault();
        const targetId = href.slice(1);

        // Try to find element immediately
        let target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
        }

        // Element not in DOM yet (lazy loaded) — force all lazy sections to render
        window.dispatchEvent(new CustomEvent('force-lazy-load'));

        // Wait for lazy sections to render, then scroll
        const maxAttempts = 20;
        let attempt = 0;
        const interval = setInterval(() => {
            target = document.getElementById(targetId);
            attempt++;
            if (target) {
                clearInterval(interval);
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else if (attempt >= maxAttempts) {
                clearInterval(interval);
            }
        }, 100);
    }, [href]);

    if (href) {
        return (
            <a href={href} onClick={href.startsWith('#') ? handleHashClick : undefined} className={combinedClassName}>
                <Brackets />
                <span className="relative z-10 flex items-center">
                    {children}
                </span>
                <CloseBracket />
            </a>
        );
    }

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={combinedClassName}
            {...(props as any)}
        >
            <Brackets />
            <span className="relative z-10 flex items-center">
                {children}
            </span>
            <CloseBracket />
        </motion.button>
    );
};
