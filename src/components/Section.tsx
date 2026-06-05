import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionProps {
    children: React.ReactNode;
    background?: React.ReactNode;
    className?: string;
    id?: string;
    fullHeight?: boolean;
    withMeshGradient?: boolean;
    withOrbs?: boolean;
    disableOrbAnimation?: boolean;
}

export const Section: React.FC<SectionProps> = ({
    children,
    background,
    className,
    id,
    fullHeight = false,
    withMeshGradient = false,
    withOrbs = false,
    disableOrbAnimation = false
}) => {
    return (
        <section
            id={id}
            className={twMerge(
                "py-10 sm:py-14 lg:py-24 relative overflow-hidden w-full bg-transparent",
                fullHeight && "min-h-screen flex items-center",
                withMeshGradient && "mesh-gradient",
                className
            )}
        >
            {background}
            {!background && (
                <>
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_0%,rgba(255,246,219,0.14),transparent_26%),radial-gradient(circle_at_92%_12%,rgba(255,255,255,0.16),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(42,154,232,0.04)_55%,rgba(80,185,235,0.06)_100%)]" />
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                </>
            )}
            {/* Animated gradient orbs - optimized for mobile */}
            {withOrbs && (
                <>
                    <div
                        className={twMerge(
                            "absolute -top-[28%] -right-[18%] h-[360px] w-[360px] rounded-full bg-white/14 blur-3xl sm:h-[680px] sm:w-[680px] lg:opacity-70 will-change-transform",
                            !disableOrbAnimation && "lg:animate-float-zigzag"
                        )}
                        style={{ contain: 'layout paint style' }}
                    />
                    <div
                        className={twMerge(
                            "absolute -bottom-[25%] -left-[18%] h-[320px] w-[320px] rounded-full bg-[#FFD66A]/12 blur-3xl sm:h-[620px] sm:w-[620px] lg:opacity-70 will-change-transform",
                            !disableOrbAnimation && "lg:animate-float-zigzag"
                        )}
                        style={{
                            animationDelay: '-7s',
                            contain: 'layout paint style'
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
