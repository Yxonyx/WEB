import { motion } from 'framer-motion';

export function WebDevGraphic() {
    return (
        <svg
            viewBox="0 0 800 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[680px]"
            role="img"
            aria-label="Egyedi weboldal és üzleti rendszer dashboard grafika"
        >
            <defs>
                <linearGradient id="wdgShell" x1="96" y1="88" x2="698" y2="512" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0B79D7" />
                    <stop offset="0.54" stopColor="#0A5FB8" />
                    <stop offset="1" stopColor="#084B9E" />
                </linearGradient>
                <linearGradient id="wdgPanel" x1="150" y1="150" x2="624" y2="452" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#138FE1" />
                    <stop offset="1" stopColor="#0760B9" />
                </linearGradient>
                <linearGradient id="wdgCard" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#20A9EA" />
                    <stop offset="1" stopColor="#0871C9" />
                </linearGradient>
                <linearGradient id="wdgGold" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#FFE28B" />
                    <stop offset="1" stopColor="#FFC84E" />
                </linearGradient>
                <filter id="wdgShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="26" stdDeviation="18" floodColor="#004C95" floodOpacity="0.28" />
                </filter>
            </defs>

            <motion.g
                initial={false}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                filter="url(#wdgShadow)"
            >
                <rect x="86" y="86" width="628" height="428" rx="34" fill="url(#wdgShell)" stroke="rgba(255,255,255,0.58)" strokeWidth="2" />
                <rect x="112" y="112" width="576" height="376" rx="24" fill="url(#wdgPanel)" stroke="rgba(255,255,255,0.24)" />

                <path d="M142 176H656" stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
                <circle cx="156" cy="144" r="7" fill="#FFE28B" />
                <circle cx="181" cy="144" r="7" fill="#66D6FF" />
                <circle cx="206" cy="144" r="7" fill="#FFFFFF" opacity="0.88" />
                <rect x="246" y="132" width="252" height="24" rx="12" fill="#0758AA" stroke="rgba(255,255,255,0.22)" />
                <path d="M274 144H416" stroke="rgba(255,255,255,0.58)" strokeWidth="4" strokeLinecap="round" />

                <rect x="142" y="206" width="158" height="242" rx="20" fill="#0758AA" stroke="rgba(255,255,255,0.26)" />
                <rect x="166" y="232" width="88" height="12" rx="6" fill="#FFE28B" />
                <rect x="166" y="264" width="96" height="10" rx="5" fill="white" opacity="0.82" />
                <rect x="166" y="292" width="70" height="10" rx="5" fill="white" opacity="0.58" />
                <rect x="166" y="344" width="106" height="46" rx="14" fill="url(#wdgCard)" stroke="rgba(255,255,255,0.20)" />
                <path d="M188 368H250" stroke="#BEEFFF" strokeWidth="5" strokeLinecap="round" />
                <rect x="166" y="406" width="106" height="16" rx="8" fill="#0A70C9" stroke="rgba(255,255,255,0.18)" />

                <rect x="326" y="206" width="330" height="116" rx="22" fill="#0A66BE" stroke="rgba(255,255,255,0.30)" />
                <path d="M356 250H508" stroke="white" strokeWidth="11" strokeLinecap="round" />
                <path d="M356 284H462" stroke="rgba(255,255,255,0.70)" strokeWidth="8" strokeLinecap="round" />
                <rect x="534" y="240" width="86" height="38" rx="19" fill="url(#wdgGold)" />
                <path d="M558 259H597" stroke="#075197" strokeWidth="6" strokeLinecap="round" />

                <rect x="326" y="346" width="138" height="102" rx="20" fill="#0A70C9" stroke="rgba(255,255,255,0.26)" />
                <path d="M354 412C370 382 388 396 404 370C418 348 434 360 442 356" stroke="#FFE28B" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="442" cy="356" r="8" fill="#FFE28B" />
                <rect x="354" y="372" width="54" height="8" rx="4" fill="white" opacity="0.72" />

                <rect x="492" y="346" width="164" height="102" rx="20" fill="#0758AA" stroke="rgba(255,255,255,0.26)" />
                {[0, 1, 2].map((bar) => (
                    <g key={bar}>
                        <rect x={520 + bar * 38} y={404 - bar * 18} width="22" height={28 + bar * 18} rx="7" fill={bar === 2 ? '#FFE28B' : '#59D8FF'} />
                    </g>
                ))}
                <path d="M520 374H610" stroke="white" strokeWidth="8" strokeLinecap="round" opacity="0.78" />
            </motion.g>

            <motion.g
                initial={false}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.35 }}
            >
                <rect x="558" y="112" width="116" height="202" rx="25" fill="#064D99" stroke="rgba(255,255,255,0.62)" strokeWidth="2" />
                <rect x="574" y="142" width="84" height="136" rx="16" fill="#1290DE" />
                <rect x="590" y="162" width="52" height="9" rx="4.5" fill="#FFE28B" />
                <rect x="590" y="190" width="42" height="8" rx="4" fill="white" opacity="0.76" />
                <rect x="590" y="212" width="52" height="38" rx="12" fill="#0760B9" stroke="rgba(255,255,255,0.2)" />
                <circle cx="616" cy="292" r="6" fill="white" opacity="0.86" />
            </motion.g>

            <g opacity="0.95">
                <path d="M112 112H148V96" stroke="white" strokeOpacity="0.62" strokeWidth="2" />
                <path d="M688 112H652V96" stroke="white" strokeOpacity="0.62" strokeWidth="2" />
                <path d="M112 488H148V504" stroke="white" strokeOpacity="0.48" strokeWidth="2" />
                <path d="M688 488H652V504" stroke="white" strokeOpacity="0.48" strokeWidth="2" />
            </g>
        </svg>
    );
}
