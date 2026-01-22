import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className, id }) => {
    return (
        <div id={id} className={twMerge("w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12", className)}>
            {children}
        </div>
    );
};
