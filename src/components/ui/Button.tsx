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
    const baseStyles = "relative inline-flex items-center justify-center font-medium tracking-wide rounded-full transition-all duration-300 group whitespace-nowrap";

    const variants = {
        primary: "bg-neonBlue text-white hover:bg-white hover:text-black hover:shadow-[0_8px_28px_-8px_rgba(77,148,255,0.55)]",
        secondary: "bg-white/[0.04] border border-white/15 text-white hover:bg-white/[0.08] hover:border-white/30 backdrop-blur-sm",
        harvest: "bg-neonHarvest text-white hover:bg-white hover:text-black hover:shadow-[0_8px_28px_-8px_rgba(143,125,255,0.45)]",
    };

    const sizes = {
        sm: "px-5 py-2 text-sm",
        md: "px-7 py-3 text-[15px]",
        lg: "px-9 py-3.5 text-base",
    };

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
                <span className="relative z-10 flex items-center gap-1.5">
                    {children}
                </span>
            </a>
        );
    }

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={combinedClassName}
            {...(props as React.ComponentProps<typeof motion.button>)}
        >
            <span className="relative z-10 flex items-center gap-1.5">
                {children}
            </span>
        </motion.button>
    );
};
