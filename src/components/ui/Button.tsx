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
    const baseStyles = "relative inline-flex items-center justify-center font-semibold tracking-wide rounded-full transition-all duration-300 group whitespace-nowrap";

    const variants = {
        primary: "border border-white/65 bg-[#FFD66A] text-[#06437D] shadow-[0_12px_28px_rgba(255,203,85,0.25),inset_0_1px_0_rgba(255,255,255,0.72)] hover:-translate-y-0.5 hover:bg-[#FFE18A] hover:text-[#06437D] hover:shadow-[0_18px_38px_rgba(255,203,85,0.34)]",
        secondary: "border-2 border-white/80 bg-white/10 text-white shadow-[0_12px_28px_rgba(0,91,174,0.16),inset_0_1px_0_rgba(255,255,255,0.30)] backdrop-blur-sm hover:-translate-y-0.5 hover:bg-white/20 hover:border-white hover:text-white",
        harvest: "border border-white/65 bg-[#FFD66A] text-[#06437D] shadow-[0_12px_28px_rgba(255,203,85,0.25)] hover:bg-[#FFE18A] hover:text-[#06437D]",
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
