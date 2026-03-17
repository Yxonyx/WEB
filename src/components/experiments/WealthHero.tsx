import { ChevronDown, ArrowRight, TrendingUp, Shield, Target, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

export const WealthHero = () => {
    return (
        <div className="relative min-h-screen bg-[#050505] overflow-hidden font-sans text-white selection:bg-emerald-500/30">

            {/* Premium Animated Background */}
            <div className="absolute inset-0 z-0">
                {/* Base Dark Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0f0d] to-[#050505]" />

                {/* Animated Orbs/Meshes */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-900/20 blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, -30, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-teal-900/20 blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vh] rounded-full bg-blue-900/10 blur-[120px]"
                />

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 z-10 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                />

                {/* Vignette */}
                <div className="absolute inset-0 z-20 bg-radial-gradient from-transparent to-black/80" />
            </div>

            {/* Navbar */}
            <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6 flex items-center justify-between max-w-7xl mx-auto w-full">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-3 group cursor-pointer"
                >
                    <div className="w-10 h-10 bg-gradient-to-tr from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-900/50 group-hover:shadow-emerald-500/30 transition-shadow duration-300">
                        <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">WealthOS</span>
                </motion.div>

                {/* Center Links */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden md:flex items-center gap-1 text-sm font-medium bg-white/5 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/5"
                >
                    {['Features', 'Company', 'Blogs'].map((item) => (
                        <button key={item} className="px-5 py-2 rounded-full hover:bg-white/10 transition-colors duration-300 text-white/80 hover:text-white flex items-center gap-1.5">
                            {item}
                            {item === 'Features' && <ChevronDown className="w-3.5 h-3.5 opacity-50" />}
                        </button>
                    ))}
                </motion.div>

                {/* Right Actions */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex items-center gap-6 text-sm font-medium"
                >
                    <button className="hidden sm:block text-white/70 hover:text-white transition-colors">Sign in</button>
                    <button className="relative bg-white text-black px-6 py-2.5 rounded-full hover:scale-105 transition-all duration-300 font-bold overflow-hidden group">
                        <span className="relative z-10">Get Started</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                </motion.div>
            </nav>

            {/* Hero Content */}
            <div className="relative z-30 flex flex-col items-center justify-center min-h-screen px-4 text-center mt-[-8vh]">

                {/* Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-8"
                >
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full opacity-30 group-hover:opacity-60 blur transition duration-500" />
                        <span className="relative px-6 py-2.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-xl text-sm font-medium tracking-wide flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Real-Time Wealth Tracking
                        </span>
                    </div>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-5xl md:text-7xl lg:text-[110px] font-bold leading-[0.95] tracking-tighter max-w-6xl mb-8"
                >
                    Build Wealth That <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 drop-shadow-2xl">
                        Lasts Generations
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-2xl text-white/60 max-w-3xl mb-12 leading-relaxed font-light"
                >
                    Transform today's earnings into tomorrow's family fortune with AI-driven insights and institutional-grade strategies.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <button className="group relative bg-[#ffffff] text-black text-lg font-bold px-10 py-5 rounded-full hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                        Start Building Wealth
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-10 py-5 rounded-full text-white/80 hover:text-white font-medium border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm">
                        View Demo
                    </button>
                </motion.div>

            </div>

            {/* Floating Features Grid */}
            <div className="absolute bottom-8 left-0 right-0 z-40 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.9, type: "spring", stiffness: 50 }}
                    className="max-w-7xl mx-auto bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-8 hover:border-white/20 transition-colors duration-500 shadow-2xl shadow-black/50"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:divide-x lg:divide-white/10">

                        {/* Feature 1 */}
                        <div className="group flex flex-col gap-3 px-4 transition-all duration-300 hover:translate-y-[-5px]">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-300 border border-emerald-500/20">
                                <Smartphone className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">Digital Onboarding</h3>
                            <p className="text-sm text-white/40 leading-relaxed font-medium">
                                Sign up in seconds. Zero paperwork, 100% secure digital identity verification.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="group flex flex-col gap-3 px-4 transition-all duration-300 hover:translate-y-[-5px]">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-300 border border-blue-500/20">
                                <Shield className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">Bank-Grade Security</h3>
                            <p className="text-sm text-white/40 leading-relaxed font-medium">
                                Connect accounts safely. We use AES-256 encryption and never store credentials.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="group flex flex-col gap-3 px-4 transition-all duration-300 hover:translate-y-[-5px]">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-300 border border-purple-500/20">
                                <Target className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">Smart Goals</h3>
                            <p className="text-sm text-white/40 leading-relaxed font-medium">
                                AI-powered goal setting that adapts to your spending and earning patterns.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="group flex flex-col gap-3 px-4 transition-all duration-300 hover:translate-y-[-5px]">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/10 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-300 border border-orange-500/20">
                                <TrendingUp className="w-6 h-6 text-orange-400" />
                            </div>
                            <h3 className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors">Growth Engine</h3>
                            <p className="text-sm text-white/40 leading-relaxed font-medium">
                                Real-time compound interest tracking and automated portfolio rebalancing.
                            </p>
                        </div>

                    </div>
                </motion.div>
            </div>

        </div>
    );
};
