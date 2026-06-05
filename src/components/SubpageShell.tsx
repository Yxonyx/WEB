import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { Container } from './Container';

interface SubpageShellProps {
    children: React.ReactNode;
    backHref?: string;
    backLabel?: string;
    className?: string;
    containerClassName?: string;
    maxWidth?: 'default' | 'wide' | 'narrow';
}

export const SubpageShell = ({
    children,
    backHref,
    backLabel,
    className,
    containerClassName,
    maxWidth = 'default',
}: SubpageShellProps) => {
    const maxW = {
        default: 'max-w-5xl',
        wide: 'max-w-6xl',
        narrow: 'max-w-4xl',
    }[maxWidth];

    return (
        <div className={twMerge('subpage-shell relative min-h-[60vh]', className)}>
            <div className="subpage-shell__bg pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
                <picture>
                    <source media="(max-width: 767px)" srcSet="/images/hero-between-alternating-mobile-soft.webp" />
                    <img
                        src="/images/hero-between-alternating-soft.webp"
                        alt=""
                        width={1774}
                        height={887}
                        loading="lazy"
                        decoding="async"
                        className="subpage-shell__bg-image"
                    />
                </picture>
                <div className="subpage-shell__bg-overlay" />
            </div>
            <main className="relative z-10 pt-24 pb-16 md:pt-28 md:pb-20">
                <Container className={twMerge(maxW, containerClassName)}>
                    {backHref && (
                        <Link
                            href={backHref}
                            className="group mb-8 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-white transition-colors hover:text-[#FFF2C6]"
                        >
                            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            {backLabel}
                        </Link>
                    )}
                    {children}
                </Container>
            </main>
        </div>
    );
};

interface SubpageHeaderProps {
    icon?: React.ReactNode;
    eyebrow?: string;
    title: string;
    subtitle?: string;
    badges?: string[];
}

export const SubpageHeader = ({ icon, eyebrow, title, subtitle, badges }: SubpageHeaderProps) => (
    <div className="mb-10 text-center">
        {icon && <div className="mb-4 flex justify-center">{icon}</div>}
        {eyebrow && (
            <p className="mb-3 font-mono text-sm font-bold uppercase tracking-[0.3em] text-[#FFF2C6]">
                {eyebrow}
            </p>
        )}
        <h1 className="mb-3 font-hero text-3xl font-black tracking-tight text-white drop-shadow-[0_4px_18px_rgba(0,82,166,0.36)] md:text-5xl">
            {title}
        </h1>
        {subtitle && (
            <p className="mx-auto mb-5 max-w-2xl text-lg font-bold leading-relaxed text-white md:text-xl">
                {subtitle}
            </p>
        )}
        {badges && badges.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-3">
                {badges.map((badge) => (
                    <span
                        key={badge}
                        className="sky-frost-chip inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white backdrop-blur-sm"
                    >
                        <svg className="h-3 w-3 text-[#FFF2C6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        {badge}
                    </span>
                ))}
            </div>
        )}
    </div>
);
