import { Container } from '../Container';
import { Section } from '../Section';
import { Check, ShieldCheck, Clock, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const QuoteSection = () => {
    return (
        <Section className="py-24 bg-[#050510]/20 backdrop-blur-sm border-t border-white/5 relative overflow-hidden">
            <Container>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Badges */}
                        <div className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start">
                            <div className="inline-flex items-center gap-2 text-[#00F0FF] font-mono text-base font-semibold tracking-wider">
                                <span>&lt;</span>
                                <Clock size={16} />
                                <span>1 héten belül próbaverzió</span>
                                <span>&gt;</span>
                            </div>
                            <div className="inline-flex items-center gap-2 text-[#BD00FF] font-mono text-base font-semibold tracking-wider">
                                <span>&lt;</span>
                                <ShieldCheck size={16} />
                                <span>Csak akkor fizetsz, ha tetszik</span>
                                <span>&gt;</span>
                            </div>
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight font-display font-light">
                            "1 héten belül kapsz egy <span className="text-neonBlue">működő próbaverziót</span>."
                        </h2>

                        <p className="text-lg text-muted mb-6 leading-relaxed">
                            Addig finomítjuk, amíg tényleg olyan nem lesz, amilyet szeretnél.
                            És <span className="text-white font-medium">csak akkor fizetsz, ha tetszik az alapváz.</span>
                        </p>

                        {/* Benefits List */}
                        <div className="bg-surface2/30 rounded-xl p-6 border border-white/5 mb-8">
                            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                                <Layers size={18} className="text-neonPurple" />
                                Miért jó ez neked?
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Nem ígéretek alapján döntesz, hanem kézzelfogható tesztoldal alapján.",
                                    "Kockázat nélkül vágsz bele: ha nem tetszik, nem fizetsz.",
                                    "A végeredmény nem „valahogy elkészül”, hanem addig csiszoljuk, amíg késznek nem érzed."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-base text-muted/90">
                                        <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-neonBlue/10 flex items-center justify-center">
                                            <Check size={12} className="text-neonBlue" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <Button href="#kapcsolat" variant="primary">
                                Kérem a próbaverziót
                            </Button>
                            <Button href="#arazas" variant="secondary">
                                Árak & csomagok
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Column: Visuals */}
                    <div className="relative h-[500px] hidden lg:block">
                        {/* Abstract animated cards representing the process */}

                        {/* Card 1: Requirement - Enhanced */}
                        <motion.div
                            initial={{ opacity: 0, y: 40, rotate: -6 }}
                            whileInView={{ opacity: 1, y: 0, rotate: -6 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="absolute top-10 left-10 w-72 bg-[#0A0A15] border border-white/10 rounded-xl shadow-2xl z-10 overflow-hidden"
                        >
                            {/* Header */}
                            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
                                <div className="w-8 h-8 rounded-full bg-neonPurple/20 flex items-center justify-center">
                                    <span className="text-neonPurple font-bold text-sm">01</span>
                                </div>
                                <span className="text-sm text-white/60 font-medium">Igényfelmérés</span>
                            </div>

                            {/* Content - Form-like */}
                            <div className="p-4 space-y-3">
                                {/* Input fields */}
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-neonPurple/40" />
                                        <div className="h-2 flex-1 bg-white/10 rounded" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-neonBlue/40" />
                                        <div className="h-2 w-3/4 bg-white/10 rounded" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500/40" />
                                        <div className="h-2 w-1/2 bg-white/10 rounded" />
                                    </div>
                                </div>

                                {/* Textarea mock */}
                                <div className="h-10 w-full bg-white/5 rounded-lg border border-white/5 p-2">
                                    <div className="h-1.5 w-full bg-white/10 rounded mb-1" />
                                    <div className="h-1.5 w-2/3 bg-white/10 rounded" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: Demo Build (Central) - Enhanced Web Page Mock */}
                        <motion.div
                            initial={{ opacity: 0, y: 40, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 bg-[#0E0E1A] border border-neonBlue/30 rounded-2xl shadow-neonBlue/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] z-20 overflow-hidden"
                        >
                            {/* Title Bar */}
                            <div className="flex justify-between items-center px-4 py-3 border-b border-white/10 bg-[#0A0A15]">
                                <div className="text-base font-mono text-neonBlue">demo_v1.build</div>
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                                </div>
                            </div>

                            {/* Browser Content - Mini Website */}
                            <div className="p-4 space-y-3">
                                {/* Mini Navbar */}
                                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                                    <div className="w-16 h-2 bg-gradient-to-r from-neonBlue to-neonPurple rounded" />
                                    <div className="flex gap-2">
                                        <div className="w-8 h-1.5 bg-white/20 rounded" />
                                        <div className="w-8 h-1.5 bg-white/10 rounded" />
                                        <div className="w-8 h-1.5 bg-white/10 rounded" />
                                    </div>
                                </div>

                                {/* Mini Hero Section */}
                                <div className="py-2">
                                    <div className="h-2.5 w-3/4 bg-white/20 rounded mb-1" />
                                    <div className="h-2 w-1/2 bg-gradient-to-r from-neonBlue/40 to-neonPurple/40 rounded mb-2" />
                                    <div className="h-1.5 w-full bg-white/5 rounded mb-1" />
                                    <div className="h-1.5 w-2/3 bg-white/5 rounded" />
                                </div>

                                {/* Mini CTA Button */}
                                <div className="flex gap-2">
                                    <div className="h-5 w-16 bg-gradient-to-r from-neonBlue to-neonPurple rounded-md" />
                                    <div className="h-5 w-14 bg-white/10 rounded-md border border-white/10" />
                                </div>

                                {/* Mini Cards Section */}
                                <div className="flex gap-2 pt-2">
                                    <div className="flex-1 p-2 bg-white/5 rounded-lg border border-white/5">
                                        <div className="w-4 h-4 bg-neonBlue/20 rounded mb-1" />
                                        <div className="h-1.5 w-full bg-white/10 rounded" />
                                    </div>
                                    <div className="flex-1 p-2 bg-white/5 rounded-lg border border-white/5">
                                        <div className="w-4 h-4 bg-neonPurple/20 rounded mb-1" />
                                        <div className="h-1.5 w-full bg-white/10 rounded" />
                                    </div>
                                    <div className="flex-1 p-2 bg-white/5 rounded-lg border border-white/5">
                                        <div className="w-4 h-4 bg-green-500/20 rounded mb-1" />
                                        <div className="h-1.5 w-full bg-white/10 rounded" />
                                    </div>
                                </div>

                                {/* Mini Image Placeholder */}
                                <div className="h-16 w-full bg-gradient-to-br from-neonBlue/10 via-transparent to-neonPurple/10 rounded-lg border border-white/5 flex items-center justify-center">
                                    <div className="w-8 h-8 rounded-full border-2 border-dashed border-white/20" />
                                </div>
                            </div>

                            {/* Status Bar */}
                            <div className="flex items-center justify-between px-4 py-3 border-t border-white/10 bg-[#0A0A15]">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-sm text-muted">Status: Ready</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-green-400 font-mono font-bold">98%</span>
                                    <span className="text-sm text-muted">Match</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 3: Feedback (Bottom) */}
                        <motion.div
                            initial={{ opacity: 0, y: 40, rotate: 6 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 6 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="absolute bottom-10 right-10 w-64 p-5 bg-[#0A0A15] border border-white/10 rounded-xl shadow-2xl z-10"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <Check size={14} className="text-green-500" />
                                </div>
                                <div className="h-2 w-24 bg-white/10 rounded-full" />
                            </div>
                            <div className="flex gap-2">
                                <div className="px-2 py-1 rounded bg-white/5 text-[10px] text-muted">Approved</div>
                                <div className="px-2 py-1 rounded bg-neonBlue/10 text-[10px] text-neonBlue">Launch</div>
                            </div>
                        </motion.div>

                        {/* Connecting Lines (SVG) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: 0 }}>
                            <motion.path
                                d="M100,100 Q200,250 350,250 T600,400"
                                fill="none"
                                stroke="#00f0ff"
                                strokeWidth="2"
                                strokeDasharray="5,5"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                            />
                        </svg>
                    </div>
                </div>
            </Container>

            {/* Ambient background glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-neonBlue/5 rounded-full blur-[120px] pointer-events-none" />
        </Section>
    );
};
