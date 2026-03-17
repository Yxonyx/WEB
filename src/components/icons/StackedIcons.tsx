import React from 'react';

export interface StackedIconProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
    primaryColor?: string;
    secondaryColor?: string;
}

const defaultProps = {
    size: 64, // Bigger default size suitable for features
    primaryColor: '#ffffff',
    secondaryColor: '#4f8aff', // neonBlue
};

// ---------------------------------------------------------
// Helper Component: The Base Stacked Cards Background
// ---------------------------------------------------------
const StackBackground = ({ primaryColor }: { primaryColor: string }) => (
    <>
        {/* Bottom card (tilted, purple accent style) */}
        <rect
            x="2" y="8" width="16" height="14" rx="2"
            stroke="rgba(168,85,247,0.5)" strokeWidth="1.5"
            fill="rgba(168,85,247,0.1)"
            transform="rotate(-15 10 15)"
        />
        {/* Top card */}
        <rect
            x="6" y="4" width="14" height="16" rx="2"
            stroke={primaryColor} strokeWidth="1.5"
            fill="#0a0a12"
        />
    </>
);

// Wrapper for all icons to ensure exact same viewBox and scaling
const StackedWrapper = ({ size, className, children, ...props }: any) => (
    <svg
        width={size} height={size}
        viewBox="0 0 24 24" fill="none"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        className={`overflow-visible ${className}`}
        {...props}
    >
        {children}
    </svg>
);


// ---------------------------------------------------------
// ICONS
// ---------------------------------------------------------

export const StackedFeature = ({ size = defaultProps.size, className = '', primaryColor = defaultProps.primaryColor, secondaryColor = defaultProps.secondaryColor, ...props }: StackedIconProps) => (
    <StackedWrapper size={size} className={className} {...props}>
        <StackBackground primaryColor={primaryColor} />
        <line x1="9" y1="8" x2="17" y2="8" stroke={secondaryColor} />
        <line x1="9" y1="12" x2="14" y2="12" stroke={secondaryColor} />
        <circle cx="17" cy="17" r="1.5" fill={secondaryColor} stroke="none" />
    </StackedWrapper>
);

export const StackedLaptop = ({ size = defaultProps.size, className = '', primaryColor = defaultProps.primaryColor, secondaryColor = defaultProps.secondaryColor, ...props }: StackedIconProps) => (
    <StackedWrapper size={size} className={className} {...props}>
        <StackBackground primaryColor={primaryColor} />
        <rect x="8" y="8" width="10" height="6" rx="0.5" stroke={secondaryColor} />
        <path d="M7 16 L19 16" stroke={primaryColor} />
        <circle cx="13" cy="11" r="1.5" fill={secondaryColor} stroke="none" />
    </StackedWrapper>
);

export const StackedChart = ({ size = defaultProps.size, className = '', primaryColor = defaultProps.primaryColor, secondaryColor = defaultProps.secondaryColor, ...props }: StackedIconProps) => (
    <StackedWrapper size={size} className={className} {...props}>
        <StackBackground primaryColor={primaryColor} />
        <rect x="9" y="14" width="2" height="3" rx="0.5" fill={primaryColor} stroke="none" />
        <rect x="12" y="11" width="2" height="6" rx="0.5" fill={secondaryColor} stroke="none" />
        <rect x="15" y="8" width="2" height="9" rx="0.5" fill={primaryColor} stroke="none" />
        <polyline points="8 12 12 8 14 10 18 6" stroke={secondaryColor} strokeWidth="1.2" fill="none" />
    </StackedWrapper>
);

export const StackedZap = ({ size = defaultProps.size, className = '', primaryColor = defaultProps.primaryColor, secondaryColor = defaultProps.secondaryColor, ...props }: StackedIconProps) => (
    <StackedWrapper size={size} className={className} {...props}>
        <StackBackground primaryColor={primaryColor} />
        <polygon points="12 6 9 12 13 12 12 18 17 10 13 10" fill="rgba(79,138,255,0.2)" stroke={secondaryColor} strokeWidth="1.2" />
    </StackedWrapper>
);

export const StackedSearch = ({ size = defaultProps.size, className = '', primaryColor = defaultProps.primaryColor, secondaryColor = defaultProps.secondaryColor, ...props }: StackedIconProps) => (
    <StackedWrapper size={size} className={className} {...props}>
        <StackBackground primaryColor={primaryColor} />
        <circle cx="12" cy="10" r="2.5" stroke={secondaryColor} />
        <line x1="14" y1="12" x2="16.5" y2="14.5" stroke={primaryColor} />
        <circle cx="12" cy="10" r="1.5" fill={secondaryColor} fillOpacity="0.4" stroke="none" />
    </StackedWrapper>
);

export const StackedBot = ({ size = defaultProps.size, className = '', primaryColor = defaultProps.primaryColor, secondaryColor = defaultProps.secondaryColor, ...props }: StackedIconProps) => (
    <StackedWrapper size={size} className={className} {...props}>
        <StackBackground primaryColor={primaryColor} />
        <rect x="9" y="10" width="8" height="6" rx="1" stroke={secondaryColor} />
        <path d="M13 10 V7 M11 13 H11.5 M15 13 H14.5" stroke={primaryColor} strokeLinecap="square" />
        <circle cx="13" cy="7" r="1" fill={secondaryColor} stroke="none" />
        <line x1="8" y1="13" x2="9" y2="13" stroke={primaryColor} />
        <line x1="17" y1="13" x2="18" y2="13" stroke={primaryColor} />
    </StackedWrapper>
);

export const StackedDatabase = ({ size = defaultProps.size, className = '', primaryColor = defaultProps.primaryColor, secondaryColor = defaultProps.secondaryColor, ...props }: StackedIconProps) => (
    <StackedWrapper size={size} className={className} {...props}>
        <StackBackground primaryColor={primaryColor} />
        <ellipse cx="13" cy="8" rx="3.5" ry="1.5" stroke={secondaryColor} />
        <path d="M9.5 8 V12 A3.5 1.5 0 0 0 16.5 12 V8" stroke={secondaryColor} fill="none" />
        <path d="M9.5 12 V16 A3.5 1.5 0 0 0 16.5 16 V12" stroke={primaryColor} fill="none" />
        <circle cx="14" cy="16.5" r="0.5" fill={primaryColor} stroke="none" />
    </StackedWrapper>
);

export const StackedShield = ({ size = defaultProps.size, className = '', primaryColor = defaultProps.primaryColor, secondaryColor = defaultProps.secondaryColor, ...props }: StackedIconProps) => (
    <StackedWrapper size={size} className={className} {...props}>
        <StackBackground primaryColor={primaryColor} />
        <path d="M13 7 L9 8.5 V12 C9 14.5 11.5 16 13 17 C14.5 16 17 14.5 17 12 V8.5 L13 7 Z" stroke={secondaryColor} fill="rgba(79,138,255,0.1)" />
        <line x1="13" y1="7" x2="13" y2="17" stroke={primaryColor} strokeWidth="1" strokeDasharray="2 2" />
    </StackedWrapper>
);

export const StackedShieldCheck = ({ size = defaultProps.size, className = '', primaryColor = defaultProps.primaryColor, secondaryColor = defaultProps.secondaryColor, ...props }: StackedIconProps) => (
    <StackedWrapper size={size} className={className} {...props}>
        <StackBackground primaryColor={primaryColor} />
        <path d="M13 7 L9 8.5 V12 C9 14.5 11.5 16 13 17 C14.5 16 17 14.5 17 12 V8.5 L13 7 Z" stroke={primaryColor} fill="none" />
        <polyline points="11 12.5 12.5 14 15 10.5" stroke={secondaryColor} strokeWidth="1.5" />
    </StackedWrapper>
);

export const StackedNetwork = ({ size = defaultProps.size, className = '', primaryColor = defaultProps.primaryColor, secondaryColor = defaultProps.secondaryColor, ...props }: StackedIconProps) => (
    <StackedWrapper size={size} className={className} {...props}>
        <StackBackground primaryColor={primaryColor} />
        <circle cx="13" cy="9" r="1.5" stroke={secondaryColor} />
        <circle cx="10" cy="15" r="1.5" stroke={primaryColor} />
        <circle cx="16" cy="15" r="1.5" stroke={primaryColor} />
        <line x1="12" y1="10.5" x2="11" y2="13.5" stroke={secondaryColor} />
        <line x1="14" y1="10.5" x2="15" y2="13.5" stroke={secondaryColor} />
        <line x1="11.5" y1="15" x2="14.5" y2="15" stroke={primaryColor} strokeWidth="1" strokeDasharray="2 2" />
    </StackedWrapper>
);

export const StackedLayers = ({ size = defaultProps.size, className = '', primaryColor = defaultProps.primaryColor, secondaryColor = defaultProps.secondaryColor, ...props }: StackedIconProps) => (
    <StackedWrapper size={size} className={className} {...props}>
        <StackBackground primaryColor={primaryColor} />
        <polygon points="13 7 16 9 13 11 10 9" stroke={secondaryColor} fill="rgba(79,138,255,0.2)" />
        <polyline points="10 12 13 14 16 12" stroke={primaryColor} />
        <polyline points="10 15 13 17 16 15" stroke={primaryColor} />
    </StackedWrapper>
);

export const StackedSparkles = ({ size = defaultProps.size, className = '', primaryColor = defaultProps.primaryColor, secondaryColor = defaultProps.secondaryColor, ...props }: StackedIconProps) => (
    <StackedWrapper size={size} className={className} {...props}>
        <StackBackground primaryColor={primaryColor} />
        <path d="M11 8 L12 10.5 L14.5 11.5 L12 12.5 L11 15 L10 12.5 L7.5 11.5 L10 10.5 Z" fill="rgba(79,138,255,0.2)" stroke={secondaryColor} />
        <path d="M15 7 L15.5 8.5 L17 9 L15.5 9.5 L15 11 L14.5 9.5 L13 9 L14.5 8.5 Z" fill={primaryColor} stroke="none" />
    </StackedWrapper>
);
