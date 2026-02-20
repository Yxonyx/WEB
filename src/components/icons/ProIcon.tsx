import React from 'react';

interface ProIconProps {
    /** The Lucide component or custom SVG to render */
    icon: React.ElementType;
    /** The accent color theme */
    color?: 'neonBlue' | 'neonPurple' | 'green' | 'yellow' | 'white';
    /** Outer container size */
    size?: 24 | 32 | 48 | 64;
    /** Extra classes for the Icon specifically */
    className?: string;
    /** Extra classes for the wrapper container (e.g., margins) */
    containerClassName?: string;
    /** Whether to enable glowing drop shadow */
    glow?: boolean;
}

export function ProIcon({
    icon: Icon,
    color = 'neonBlue',
    size = 48,
    className = '',
    containerClassName = '',
    glow = true,
}: ProIconProps) {
    const config = {
        neonBlue: {
            bg: 'bg-neonBlue',
            text: 'text-neonBlue',
            border: 'border-neonBlue/30',
            hoverBorder: 'group-hover:border-neonBlue',
            glow: 'shadow-neonBlue/20',
        },
        neonPurple: {
            bg: 'bg-neonPurple',
            text: 'text-neonPurple',
            border: 'border-neonPurple/30',
            hoverBorder: 'group-hover:border-neonPurple',
            glow: 'shadow-neonPurple/20',
        },
        green: {
            bg: 'bg-green-500',
            text: 'text-green-500',
            border: 'border-green-500/30',
            hoverBorder: 'group-hover:border-green-500',
            glow: 'shadow-green-500/20',
        },
        yellow: {
            bg: 'bg-yellow-500',
            text: 'text-yellow-500',
            border: 'border-yellow-500/30',
            hoverBorder: 'group-hover:border-yellow-500',
            glow: 'shadow-yellow-500/20',
        },
        white: {
            bg: 'bg-white',
            text: 'text-white',
            border: 'border-white/30',
            hoverBorder: 'group-hover:border-white',
            glow: 'shadow-white/20',
        },
    };

    const c = config[color];
    const containerClasses = size === 24 ? 'w-8 h-8' : size === 32 ? 'w-12 h-12' : size === 48 ? 'w-16 h-16' : 'w-24 h-24';
    const iconBaseSize = size === 24 ? 16 : size === 32 ? 20 : size === 48 ? 28 : 40;

    return (
        <div className={`relative group ${containerClasses} shrink-0 ${containerClassName}`}>
            {/* Base Option 15 Tilted Layer (Cyber/Glassmorphic) */}
            <div className={`absolute inset-0 rounded-xl ${c.bg} opacity-[0.10] transform rotate-[-8deg] translate-x-1 translate-y-1 transition-all duration-500 group-hover:rotate-[-12deg] group-hover:translate-x-2 group-hover:translate-y-2`} />

            {/* The Main Container */}
            <div className={`relative w-full h-full rounded-xl bg-surface2/30 border ${c.border} flex items-center justify-center overflow-visible transition-colors duration-500 group-hover:bg-surface2/50 group-hover:border-white/20 ${glow ? 'shadow-lg ' + c.glow : ''}`}>
                {/* Subtle internal gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-white to-transparent`} />

                <Icon size={iconBaseSize} className={`relative z-10 ${c.text} drop-shadow-md transition-transform duration-500 group-hover:scale-110 ${className}`} strokeWidth={1.5} />
            </div>

            {/* Premium Corner Accents */}
            <div className={`absolute top-0 left-0 w-3 h-3 border-t-[1.5px] border-l-[1.5px] border-transparent rounded-tl-xl z-20 ${c.hoverBorder} transition-colors duration-700`} />
            <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-[1.5px] border-r-[1.5px] border-transparent rounded-br-xl z-20 ${c.hoverBorder} transition-colors duration-700`} />
        </div>
    );
}
