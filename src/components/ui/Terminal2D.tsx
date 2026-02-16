

export const Terminal2D = () => {
    return (
        <div className="w-full max-w-lg mx-auto transform hover:scale-[1.02] transition-transform duration-500">
            {/* Window Frame */}
            <div className="bg-gray-900/95 rounded-xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-md">
                {/* Header */}
                <div className="bg-white/5 px-4 py-3 flex items-center gap-2 border-b border-white/5">
                    <div className="w-3 h-3 rounded-full bg-neonBlue/30" />
                    <div className="w-3 h-3 rounded-full bg-neonPurple/50" />
                    <div className="w-3 h-3 rounded-full bg-neonBlue/70" />
                    <div className="ml-auto text-xs text-white/30 font-mono tracking-wider">cyber_engine — bash</div>
                </div>

                {/* Terminal Body */}
                <div className="p-6 font-mono text-sm space-y-4 min-h-[320px]">
                    {/* Command 1 */}
                    <div className="flex items-center gap-2 animate-[fadeIn_0.5s_ease-out_forwards]">
                        <span className="text-neonPurple font-bold">➜</span>
                        <span className="text-white">init_cyberlabs_web</span>
                    </div>

                    {/* Loading State */}
                    <div className="opacity-0 animate-[fadeIn_0.5s_ease-out_0.8s_forwards]">
                        <div className="text-blue-400 mb-1 text-xs">Optimizing assets...</div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-neonBlue to-neonPurple w-0 animate-[growWidth_1.5s_ease-in-out_1s_forwards]" />
                        </div>
                    </div>

                    {/* System Checks */}
                    <div className="space-y-2 pt-2">
                        <div className="flex items-center gap-2 opacity-0 animate-[slideInLeft_0.5s_ease-out_2.5s_forwards]">
                            <span className="text-green-400">[✓]</span>
                            <span className="text-gray-300">Performance Modules</span>
                            <span className="ml-auto text-green-400 text-xs">100%</span>
                        </div>
                        <div className="flex items-center gap-2 opacity-0 animate-[slideInLeft_0.5s_ease-out_2.7s_forwards]">
                            <span className="text-green-400">[✓]</span>
                            <span className="text-gray-300">SEO Metrics</span>
                            <span className="ml-auto text-green-400 text-xs">OPTIMIZED</span>
                        </div>
                        <div className="flex items-center gap-2 opacity-0 animate-[slideInLeft_0.5s_ease-out_2.9s_forwards]">
                            <span className="text-green-400">[✓]</span>
                            <span className="text-gray-300">Secure Connection</span>
                            <span className="ml-auto text-green-400 text-xs">ENCRYPTED</span>
                        </div>
                        <div className="flex items-center gap-2 opacity-0 animate-[slideInLeft_0.5s_ease-out_3.1s_forwards]">
                            <span className="text-green-400">[✓]</span>
                            <span className="text-gray-300">Global Delivery</span>
                            <span className="ml-auto text-green-400 text-xs">READY</span>
                        </div>
                    </div>

                    {/* Final Status */}
                    <div className="pt-4 opacity-0 animate-[fadeIn_0.5s_ease-out_3.5s_forwards]">
                        <div className="p-3 bg-neonBlue/10 border border-neonBlue/20 rounded text-neonBlue text-xs">
                            System initialized successfully. Welcome to CyberLabs.
                        </div>
                    </div>

                    {/* Blinking Cursor */}
                    <div className="opacity-0 animate-[fadeIn_0.1s_ease-out_4s_forwards] flex items-center gap-2 pt-2">
                        <span className="text-neonPurple font-bold">➜</span>
                        <span className="text-white animate-pulse">_</span>
                    </div>
                </div>

                {/* Decorative Bottom Line */}
                <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-neonPurple to-transparent opacity-50" />
            </div>

            {/* Background Glow Effect */}
            <div className="absolute -inset-4 bg-neonPurple/20 blur-3xl -z-10 rounded-full opacity-30 animate-pulse" />
        </div>
    );
};

const style = `
@keyframes growWidth {
  from { width: 0; }
  to { width: 100%; }
}
@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
`;

export const GlobalStyles = () => <style>{style}</style>;
