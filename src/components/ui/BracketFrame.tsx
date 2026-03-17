import React from 'react';
import { twMerge } from 'tailwind-merge';

interface BracketFrameProps {
    children: React.ReactNode;
    className?: string;
    idx?: number;
}

export const BracketFrame: React.FC<BracketFrameProps> = ({ children, className }) => {
    return (
        <div className={twMerge(
            "relative p-6 sm:p-8 bg-surface2/30 backdrop-blur-sm",
            className
        )}>
            {/* Top Left Bracket */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-neonBlue" />
            {/* Top Right Bracket */}
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-neonPurple" />
            {/* Bottom Left Bracket */}
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-neonBlue" />
            {/* Bottom Right Bracket */}
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-neonPurple" />

            {/* Interaction overlay */}
            <div className="absolute inset-0 bg-white/0 hover:bg-white/[0.02] transition-colors duration-500 pointer-events-none" />

            {children}
        </div>
    );
};
