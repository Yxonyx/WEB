import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className, id }) => {
    return (
        <section id={id} className={twMerge("py-24 sm:py-32 lg:py-40 relative overflow-hidden", className)}>
            {children}
        </section>
    );
};
