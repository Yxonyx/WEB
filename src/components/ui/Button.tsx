import React from 'react';

import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
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
        primary: "bg-neonBlue text-black hover:bg-white hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]",
        secondary: "bg-surface/50 border border-white/10 text-white hover:bg-white/5 hover:border-white/20 hover:text-neonBlue",
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

    if (href) {
        return (
            <a href={href} className={combinedClassName}>
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
