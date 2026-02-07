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
                        className="absolute top-0 right-0 -top-[20%] -right-[20%] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] gradient-orb gradient-orb-blue lg:animate-float-zigzag opacity-30 lg:opacity-40"
                        style={{
                            filter: 'blur(30px)' // Lower blur for mobile
                        }}
                    />
                    <div
                        className="absolute bottom-0 left-0 -bottom-[20%] -left-[20%] w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] gradient-orb gradient-orb-purple lg:animate-float-zigzag opacity-30 lg:opacity-40"
                        style={{
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
