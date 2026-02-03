import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    fullHeight?: boolean;
    withMeshGradient?: boolean;
    withOrbs?: boolean;
}

export const Section: React.FC<SectionProps> = ({
    children,
    className,
    id,
    fullHeight = false,
    withMeshGradient = false,
    withOrbs = false
}) => {
    return (
        <section
            id={id}
            className={twMerge(
                "py-20 lg:py-32 relative overflow-hidden w-full",
                fullHeight && "min-h-screen flex items-center",
                withMeshGradient && "mesh-gradient",
                className
            )}
        >
            {/* Animated gradient orbs - optimized for mobile */}
            {withOrbs && (
                <>
                    <div
                        className="absolute top-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] gradient-orb gradient-orb-blue lg:animate-float-slow opacity-30 lg:opacity-40"
                        style={{
                            transform: 'translate(20%, -20%)',
                            filter: 'blur(30px)' // Lower blur for mobile
                        }}
                    />
                    <div
                        className="absolute bottom-0 left-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] gradient-orb gradient-orb-purple lg:animate-float-slow opacity-30 lg:opacity-40"
                        style={{
                            transform: 'translate(-20%, 20%)',
                            animationDelay: '-7s',
                            filter: 'blur(30px)' // Lower blur for mobile
                        }}
                    />
                </>
            )}

            {/* Content */}
            <div className="relative z-10 w-full">
                {children}
            </div>
        </section>
    );
};
