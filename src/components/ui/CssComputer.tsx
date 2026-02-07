

export const CssComputer = () => {
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
                            <div className="relative z-20 p-5 font-mono text-xs sm:text-sm space-y-1.5 text-gray-300 leading-relaxed">
                                {/* Window Header */}
                                <div className="flex items-center gap-1.5 mb-3 opacity-80">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                                </div>

                                {/* Code Lines */}
                                <div className="opacity-90">
                                    <span className="text-neonPurple">admin@cyberlabs</span><span className="text-gray-500">:</span><span className="text-neonBlue">~</span>$ <span className="text-white">./system_boot.sh</span>
                                </div>
                                <div className="text-gray-500 text-[10px] sm:text-xs pt-1">[10:42:01] Establishing secure connection...</div>
                                <div className="flex items-center gap-2">
                                    <span className="text-green-500">[OK]</span>
                                    <span>Neural Interface Active</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-green-500">[OK]</span>
                                    <span>Protocol v4.2 Loaded</span>
                                </div>
                                <div className="pt-2 flex items-center gap-2">
                                    <span className="text-neonBlue">Loading:</span>
                                    <div className="h-1.5 w-24 bg-gray-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-neonBlue w-full animate-[shimmer_2s_infinite]" />
                                    </div>
                                </div>
                                <div className="animate-pulse text-neonPurple pt-2">_awaiting_command</div>
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
