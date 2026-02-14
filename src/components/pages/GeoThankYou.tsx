import { Container } from '../Container';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../ui/Button';

export const GeoThankYou = () => {
    return (
        <div className="min-h-screen bg-bgDeep text-white flex flex-col font-sans selection:bg-neonBlue/30">
            <Helmet>
                <title>Köszönjük! | CyberLabs GEO</title>
                <meta name="robots" content="noindex" />
            </Helmet>

            {/* Header / Nav - Consistent with other GEO pages */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-bgDeep/80 backdrop-blur-md border-b border-white/5">
                <Container className="h-20 flex items-center justify-between">
                    <a href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-white to-neonBlue text-black font-bold font-mono text-lg leading-none transition-transform group-hover:scale-105 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                            <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-black/20" />
                            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-black/20" />
                            CL
                        </div>
                        <div className="flex flex-col justify-between h-9">
                            <span className="text-xl font-bold tracking-tight group-hover:text-neonBlue transition-colors flex items-baseline leading-none">
                                <span className="text-white">Cyber</span><span className="text-neonBlue">labs</span><span className="text-sm text-white/40 ml-1 font-normal lowercase">web</span>
                            </span>
                            <span className="text-[10px] text-neonBlue font-mono uppercase tracking-widest opacity-80 leading-none">
                                GEO Tudásanyag
                            </span>
                        </div>
                    </a>

                    <Button href="/" variant="secondary" size="sm" className="hidden md:inline-flex">
                        Irány a Főoldal
                    </Button>
                </Container>
            </header>

            <main className="flex-grow flex items-center justify-center py-32 px-4 relative z-10">
                <Container className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-surface/30 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden"
                    >
                        {/* Background glow */}
                        <div className="absolute inset-0 bg-neonBlue/5 pointer-events-none" />

                        <div className="relative z-10">
                            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-500/10 text-green-400 mb-8 border border-green-500/20 shadow-[0_0_30px_rgba(74,222,128,0.2)]">
                                <CheckCircle2 className="w-12 h-12" />
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">Sikeres jelentkezés!</h1>

                            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto">
                                Az ingyenes GEO útmutatót és a magyarázó videót sikeresen elküldtük az email címedre.
                            </p>

                            <div className="bg-black/40 border border-white/10 p-8 rounded-2xl mb-10 max-w-lg mx-auto text-left">
                                <p className="text-neonBlue text-sm font-bold uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Mi történik most?</p>
                                <ul className="space-y-3 text-gray-300 text-sm">
                                    <li className="flex gap-3">
                                        <div className="bg-white/10 w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono">1</div>
                                        <span>Ellenőrizd a beérkező leveleidet (és a promóciók mappát).</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="bg-white/10 w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono">2</div>
                                        <span>Nyisd meg a <strong>"CyberLabs GEO Útmutató"</strong> tárgyú levelet.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="bg-white/10 w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono">3</div>
                                        <span>Töltsd le a csatolt anyagokat.</span>
                                    </li>
                                </ul>
                            </div>

                            <Button href="/" variant="primary">
                                Vissza a főoldalra
                            </Button>
                        </div>
                    </motion.div>
                </Container>
            </main>
        </div>
    );
};
