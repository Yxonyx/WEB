import { useState, useEffect, useRef } from 'react';

const Typewriter = ({ text, delay = 0, onComplete, className = "" }: { text: string; delay?: number; onComplete?: () => void; className?: string }) => {
    const [displayText, setDisplayText] = useState('');
    const [started, setStarted] = useState(false);
    const completedRef = useRef(false);

    useEffect(() => {
        let interval: any;
        const startTimeout = setTimeout(() => {
            setStarted(true);

            interval = setInterval(() => {
                setDisplayText((prev) => {
                    const currentLength = prev.length;
                    if (currentLength < text.length) {
                        return prev + text.charAt(currentLength);
                    } else {
                        clearInterval(interval);
                        return prev;
                    }
                });
            }, 30);
        }, delay);

        return () => {
            clearTimeout(startTimeout);
            if (interval) clearInterval(interval);
        };
    }, [text, delay]);

    useEffect(() => {
        if (displayText.length === text.length && text.length > 0 && !completedRef.current) {
            completedRef.current = true;
            if (onComplete) onComplete();
        }
    }, [displayText, text, onComplete]);

    return <span className={className}>{displayText}{started && displayText.length < text.length && <span className="animate-pulse">_</span>}</span>;
};

export const CssComputer = () => {
    const [showLine1, setShowLine1] = useState(false);
    const [showLine2, setShowLine2] = useState(false);
    const [showLine3, setShowLine3] = useState(false);
    const [showLine4, setShowLine4] = useState(false);
    const [showPhone, setShowPhone] = useState(false);

    return (
        <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Monitor Container */}
            <div className="relative flex flex-col items-center">

                {/* --- MONITOR HEAD --- */}
                <div className="relative w-[340px] sm:w-[480px] h-[220px] sm:h-[300px] bg-gradient-to-b from-gray-200 to-gray-300 rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] border border-white/40 ring-1 ring-black/5 z-20">

                    {/* Screen Bezel (Inner Black Frame) */}
                    <div className="absolute inset-[2px] bg-black rounded-xl border border-gray-800/50 flex items-center justify-center overflow-hidden">

                        {/* --- SCREEN CONTENT --- */}
                        <div className="w-full h-full bg-[#0a0a0a] relative overflow-hidden">
                            {/* Reflective Glare */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none z-10 opacity-40" />

                            {/* Scanlines */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none z-0 opacity-20" />

                            {/* TERMINAL UI */}
                            <div className="relative z-20 p-5 font-mono text-xs sm:text-sm space-y-1.5 text-gray-300 leading-relaxed font-medium">
                                {/* Window Header */}
                                <div className="flex items-center gap-1.5 mb-3 opacity-80">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                                </div>

                                {/* Code Lines */}
                                <div className="opacity-90 mb-2">
                                    <span className="text-neonPurple">guest@cyberlabs</span><span className="text-gray-500">:</span><span className="text-neonBlue">~</span>$ <span className="text-white">./welcome_msg.sh</span>
                                </div>
                                <div className="space-y-1 text-gray-300">
                                    <div>
                                        <span className="text-green-500/80 mr-2">[SYSTEM]</span>
                                        <Typewriter text="Initializing secure message protocol..." delay={500} onComplete={() => setShowLine1(true)} />
                                    </div>

                                    {showLine1 && (
                                        <div>
                                            <span className="text-neonBlue/80 mr-2">[MSG]</span>
                                            <Typewriter text="Szia," delay={200} onComplete={() => setShowLine2(true)} />
                                        </div>
                                    )}

                                    {showLine2 && (
                                        <div>
                                            <span className="text-neonBlue/80 mr-2">[MSG]</span>
                                            <Typewriter text="Ha bármilyen weboldalra van szükséged," delay={200} onComplete={() => setShowLine3(true)} />
                                        </div>
                                    )}

                                    {showLine3 && (
                                        <div>
                                            <span className="text-neonBlue/80 mr-2">[MSG]</span>
                                            <Typewriter text="töltsd ki a lenti űrlapot," delay={200} onComplete={() => setShowLine4(true)} />
                                        </div>
                                    )}

                                    {showLine4 && (
                                        <div>
                                            <span className="text-neonBlue/80 mr-2">[MSG]</span>
                                            <span>vagy hívd a </span>
                                            <Typewriter
                                                text="+36 70 330 4445"
                                                delay={200}
                                                className="text-neonBlue font-bold"
                                                onComplete={() => setShowPhone(true)}
                                            />
                                            {showPhone && <span> számot.</span>}
                                        </div>
                                    )}
                                </div>
                                <div className="animate-pulse text-neonPurple pt-2">_</div>
                            </div>
                        </div>

                        {/* Brand Logo (Bottom Bezel) */}
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[9px] font-bold tracking-[0.2em] text-gray-600/80 select-none z-30">
                            CYBERLABS
                        </div>
                    </div>
                </div>

                {/* --- MONITOR STAND --- */}
                {/* Neck */}
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-b from-gray-300 to-gray-400 -mt-2 z-10 shadow-inner border-x border-gray-400/30" />

                {/* Base */}
                <div className="w-32 sm:w-40 h-1.5 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full shadow-lg border-t border-white/50" />

                {/* Ambient Shadow under Base */}
                <div className="absolute bottom-0 w-48 h-4 bg-black/40 blur-xl rounded-[100%] -z-10" />

            </div>
        </div>
    );
};
