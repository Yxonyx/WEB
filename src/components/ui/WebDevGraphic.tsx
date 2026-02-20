export function WebDevGraphic() {
    return (
        <svg
            viewBox="0 0 800 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-2xl"
        >
            <defs>
                {/* Background Glow Filter */}
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="30" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="15" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Primary Gradients */}
                <linearGradient id="cyanPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f0ff" />
                    <stop offset="100%" stopColor="#b000ff" />
                </linearGradient>
                <linearGradient id="cyanDark" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0080ff" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.01)" />
                </linearGradient>
                <linearGradient id="hologramGrid" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#b000ff" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </linearGradient>

                {/* Data Stream Gradient */}
                <linearGradient id="dataStream" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00f0ff" stopOpacity="0" />
                    <stop offset="50%" stopColor="#00f0ff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#b000ff" stopOpacity="0" />
                </linearGradient>
            </defs>

            {/* Ambient Background Blur */}
            <circle cx="400" cy="300" r="250" fill="url(#cyanPurple)" opacity="0.08" filter="url(#glow)" />
            <circle cx="550" cy="200" r="150" fill="#00f0ff" opacity="0.05" filter="url(#glow)" />

            {/* Isometric Grid Floor */}
            <g transform="translate(400, 430) scale(1.1, 0.5) rotate(45)">
                {/* Backplate for depth */}
                <rect x="-220" y="-220" width="440" height="440" fill="url(#hologramGrid)" rx="20" />

                {/* Grid Lines */}
                {[...Array(9)].map((_, i) => (
                    <g key={i}>
                        <line x1={-220} y1={-220 + i * 55} x2={220} y2={-220 + i * 55} stroke="#00f0ff" strokeOpacity="0.1" strokeWidth="2" />
                        <line x1={-220 + i * 55} y1={-220} x2={-220 + i * 55} y2={220} stroke="#00f0ff" strokeOpacity="0.1" strokeWidth="2" />
                    </g>
                ))}
            </g>

            {/* Floating Isometric Platform Layer 1 (Drop Shadow) */}
            <g transform="translate(400, 350) scale(1.2, 0.6) rotate(-45)">
                <rect x="-160" y="-120" width="320" height="240" fill="#000" opacity="0.6" filter="url(#glow)" rx="16" />
            </g>

            {/* Main Floating Mockup Container */}
            <g transform="translate(400, 310) scale(1.2, 0.66) rotate(-45)">
                {/* Main Base Glass Panel */}
                <rect x="-180" y="-140" width="360" height="280" fill="url(#glassGradient)" stroke="url(#cyanDark)" strokeWidth="2" rx="16" />

                {/* Browser Header Bar */}
                <rect x="-180" y="-140" width="360" height="30" fill="rgba(0,240,255,0.05)" rx="16" stroke="rgba(255,255,255,0.05)" />

                {/* 3 Toolbar Dots */}
                <circle cx="-160" cy="-125" r="4" fill="#ff5f56" />
                <circle cx="-145" cy="-125" r="4" fill="#ffbd2e" />
                <circle cx="-130" cy="-125" r="4" fill="#27c93f" />

                {/* URL Bar */}
                <rect x="-110" y="-132" width="150" height="14" rx="7" fill="rgba(255,255,255,0.03)" />
                <line x1="-100" y1="-125" x2="-20" y2="-125" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />

                {/* Abstract Hero Image/Banner */}
                <rect x="-160" y="-95" width="200" height="100" fill="url(#cyanPurple)" opacity="0.2" rx="8" />
                <rect x="-160" y="-95" width="200" height="100" fill="none" stroke="url(#cyanPurple)" strokeWidth="1" rx="8" />

                {/* Floating Abstract UI Elements within the mockup */}
                <path d="M-140 -60 L-80 -60 M-140 -40 L-60 -40 M-140 -20 L-100 -20" stroke="#00f0ff" strokeWidth="4" strokeLinecap="round" opacity="0.6" filter="url(#softGlow)" />

                {/* Graph/Metric Box 1 */}
                <rect x="60" y="-95" width="100" height="60" fill="rgba(176,0,255,0.1)" stroke="rgba(176,0,255,0.4)" strokeWidth="1" rx="8" />
                <path d="M70 -50 Q 90 -80, 110 -60 T 150 -70" fill="none" stroke="#b000ff" strokeWidth="3" filter="url(#softGlow)" />
                <circle cx="150" cy="-70" r="4" fill="#b000ff" />

                {/* Graph/Metric Box 2 */}
                <rect x="60" y="-20" width="100" height="60" fill="rgba(0,240,255,0.1)" stroke="rgba(0,240,255,0.4)" strokeWidth="1" rx="8" />
                <rect x="75" y="0" width="15" height="25" fill="#00f0ff" opacity="0.4" rx="2" />
                <rect x="100" y="-10" width="15" height="35" fill="#00f0ff" opacity="0.6" rx="2" />
                <rect x="125" y="-15" width="15" height="40" fill="#00f0ff" opacity="0.8" rx="2" />

                {/* Bottom Wide Bar */}
                <rect x="-160" y="25" width="320" height="80" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" strokeWidth="1" rx="8" />

                {/* Glowing Data Lines connecting modules */}
                <path d="M40 -45 L 60 -45" stroke="url(#cyanPurple)" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M-60 5 L -60 25 M 60 40 L 60 25" stroke="#00f0ff" strokeWidth="2" opacity="0.3" strokeDasharray="2 4" />
            </g>

            {/* Overlapping Glass Panel 2 (Floating higher) */}
            <g transform="translate(436, 226) scale(1.2, 0.66) rotate(-45)">
                <rect x="-80" y="-80" width="160" height="120" fill="rgba(10,10,18,0.6)" stroke="#b000ff" strokeWidth="1.5" rx="12" filter="url(#glow)" style={{ backdropFilter: "blur(10px)" }} />
                <circle cx="0" cy="-20" r="20" fill="url(#cyanPurple)" opacity="0.8" />
                <circle cx="0" cy="-20" r="10" fill="#00f0ff" />
                <rect x="-40" y="10" width="80" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
                <rect x="-20" y="25" width="40" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
            </g>

            {/* High Tech Framing Accents (Camera brackets) */}
            <path d="M 50 110 L 50 10 L 150 10" fill="none" stroke="url(#cyanPurple)" strokeWidth="3" opacity="0.6" />
            <path d="M 750 110 L 750 10 L 650 10" fill="none" stroke="url(#cyanPurple)" strokeWidth="3" opacity="0.6" />
            <path d="M 50 490 L 50 590 L 150 590" fill="none" stroke="url(#cyanPurple)" strokeWidth="3" opacity="0.6" />
            <path d="M 750 490 L 750 590 L 650 590" fill="none" stroke="url(#cyanPurple)" strokeWidth="3" opacity="0.6" />

            {/* Floating Energy Particles */}
            <circle cx="600" cy="150" r="3" fill="#00f0ff" filter="url(#softGlow)" />
            <circle cx="200" cy="450" r="4" fill="#b000ff" filter="url(#softGlow)" />
            <circle cx="650" cy="400" r="2" fill="#ffffff" opacity="0.5" />
            <circle cx="250" cy="150" r="2" fill="#00f0ff" opacity="0.6" />
        </svg>
    );
}
