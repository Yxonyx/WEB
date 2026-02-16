import { Helmet } from 'react-helmet-async';
import { Download, Check, MessageSquare, Globe, Zap, ExternalLink, FileText } from 'lucide-react';
import { Button } from '../ui/Button';
import { Container } from '../Container';

export const GeoPDF = () => {
    return (
        <div className="min-h-screen bg-bgDeep text-white font-sans selection:bg-neonBlue/30">
            <Helmet>
                <title>GEO Tudásanyag - CyberLabsWeb</title>
                <meta name="robots" content="noindex" />
                <style type="text/css">{`
                    @media print {
                        @page { margin: 1cm; size: A4; }
                        body { -webkit-print-color-adjust: exact; background-color: white !important; color: black !important; }
                        .no-print { display: none !important; }
                        .print-black { color: black !important; }
                        .print-border { border: 1px solid #ccc !important; }
                    }
                `}</style>
            </Helmet>

            {/* Header / Nav */}
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

            <main className="pt-32 pb-20">
                <Container className="max-w-5xl">

                    {/* Hero / Welcome Section */}
                    <div className="text-center mb-16 md:mb-24">
                        <div className="inline-flex items-center justify-center p-4 mb-8 bg-neonBlue/10 rounded-full border border-neonBlue/20 shadow-[0_0_30px_rgba(0,240,255,0.1)]">
                            <Check className="w-8 h-8 text-neonBlue" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 font-display">
                            Szia! Köszönjük, hogy feliratkoztál.
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Örömmel látunk a jövő keresőoptimalizálásának világában. Itt találod az ígért edukációs anyagokat, amelyek segítenek az AI korszakban érvényesülni.
                        </p>
                    </div>

                    {/* Top CTA - "Pre-content" Offer */}
                    <div className="bg-surface border border-white/5 p-8 mb-16 md:mb-24 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
                        {/* Decorative borders - Tech feel */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/20" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20" />

                        <div className="absolute inset-0 bg-neonBlue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 flex items-center gap-6">
                            <div className="bg-white/5 p-4 hidden md:block border border-white/10 shadow-inner">
                                <MessageSquare className="w-8 h-8 text-neonBlue" />
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="font-bold text-xl text-white mb-2 font-mono">Kérdésed van?</h3>
                                <p className="text-gray-400">Technikai vagy marketing kérdésekben is szívesen segítünk.</p>
                            </div>
                        </div>
                        <Button href="mailto:contact@cyberlabsweb.com" variant="secondary" className="w-full md:w-auto">
                            Írj nekünk
                        </Button>
                    </div>

                    {/* Educational Content Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16 md:mb-24">
                        {/* Section 1: What is GEO? */}
                        <div className="bg-surface/30 border border-white/5 p-8 relative overflow-hidden group hover:border-neonBlue/30 transition-colors duration-500">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                <Globe className="w-40 h-40" />
                            </div>
                            <div className="relative z-10">
                                <span className="text-neonBlue font-mono font-bold mb-4 block text-sm tracking-wider">01 // DEFINÍCIÓ</span>
                                <h2 className="text-3xl font-bold mb-6 font-display">Mi az a GEO?</h2>
                                <p className="text-gray-300 leading-relaxed mb-8">
                                    A keresési szokások alapvetően megváltoztak. A felhasználók már nem linklistákat böngésznek, hanem konkrét válaszokat várnak az AI-tól.
                                </p>
                                <div className="bg-black/40 p-6 border-l-2 border-neonBlue">
                                    <p className="text-gray-300 italic font-medium">
                                        "A GEO célja, hogy a tartalmadat az AI modellek számára értelmezhetővé, hitelessé és idézhetővé tegye."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: SEO vs GEO */}
                        <div className="bg-surface/30 border border-white/5 p-8 relative overflow-hidden group hover:border-neonBlue/30 transition-colors duration-500">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                <Zap className="w-40 h-40" />
                            </div>
                            <div className="relative z-10">
                                <span className="text-neonBlue font-mono font-bold mb-4 block text-sm tracking-wider">02 // PARADIGMAVÁLTÁS</span>
                                <h2 className="text-3xl font-bold mb-6 font-display">SEO vs. GEO</h2>

                                <div className="space-y-8">
                                    <div>
                                        <h4 className="text-gray-500 font-mono font-bold text-xs uppercase tracking-wider mb-3">Hagyományos SEO</h4>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-3 text-gray-400">
                                                <div className="w-1.5 h-1.5 bg-neonPurple/50 rounded-full" />
                                                <span>Link rangsorolása (SERP)</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-gray-400">
                                                <div className="w-1.5 h-1.5 bg-neonPurple/50 rounded-full" />
                                                <span>Fókusz: Kulcsszavak & Backlinkek</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="h-px bg-white/5 w-full" />

                                    <div>
                                        <h4 className="text-neonBlue font-mono font-bold text-xs uppercase tracking-wider mb-3">Generatív GEO</h4>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-3 text-white">
                                                <div className="w-1.5 h-1.5 bg-neonBlue rounded-full shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
                                                <span>AI válaszba való bekerülés</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-white">
                                                <div className="w-1.5 h-1.5 bg-neonBlue rounded-full shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
                                                <span>Fókusz: Kontextus & Hitelesség</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Full PDF Strategy */}
                    <section className="mb-16 md:mb-24" id="pdf-container">
                        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6 text-center md:text-left">
                            <div>
                                <span className="text-neonBlue font-mono font-bold mb-2 block text-sm tracking-wider">03 // DOKUMENTÁCIÓ</span>
                                <h2 className="text-3xl font-bold font-display">A Teljes GEO Stratégia</h2>
                            </div>

                            <div className="flex flex-wrap justify-center gap-4">
                                <Button href="/documents/geo-guide.pdf" variant="secondary" className="group">
                                    <span className="flex items-center gap-2">
                                        <ExternalLink className="w-4 h-4" />
                                        <span className="md:hidden">Megnyitás</span>
                                        <span className="hidden md:inline">Megnyitás új lapon</span>
                                    </span>
                                </Button>
                                <Button href="/documents/geo-guide.pdf" variant="primary">
                                    <span className="flex items-center gap-2">
                                        <Download className="w-4 h-4" />
                                        Letöltés
                                    </span>
                                </Button>
                            </div>
                        </div>

                        {/* Desktop View: Iframe Embed */}
                        <div className="hidden md:block bg-surface rounded-none overflow-hidden shadow-2xl h-[1000px] border border-white/10 relative">
                            {/* Corner accents */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neonBlue z-20 pointer-events-none" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neonBlue z-20 pointer-events-none" />

                            <iframe
                                src="/documents/geo-guide.pdf"
                                className="w-full h-full relative z-10"
                                title="GEO Útmutató PDF"
                            />
                        </div>

                        {/* Mobile View: High-Quality Link Card */}
                        <div className="md:hidden block bg-surface border border-white/10 overflow-hidden shadow-2xl relative group">
                            <div className="h-64 bg-gray-900 relative flex items-center justify-center overflow-hidden">
                                <img
                                    src="/images/geo-infographic.png"
                                    alt="PDF Előnézet"
                                    className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm group-hover:blur-md transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-bgDeep to-transparent" />

                                <div className="relative z-10 flex flex-col items-center p-6 text-center">
                                    <div className="bg-neonBlue/10 p-4 mb-4 border border-neonBlue/20 shadow-[0_0_20px_rgba(0,240,255,0.15)]">
                                        <FileText className="w-8 h-8 text-neonBlue" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">PDF Dokumentum</h3>
                                    <p className="text-gray-400 text-sm mb-6 max-w-xs">
                                        Kattints a megtekintéshez teljes képernyőn.
                                    </p>
                                    <Button href="/documents/geo-guide.pdf" variant="primary" size="sm">
                                        PDF Olvasása
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Video Guide */}
                    <section className="mb-16 md:mb-24 relative">
                        <div className="absolute inset-0 bg-neonBlue/5 blur-3xl -z-10 rounded-full" />
                        <div className="text-center mb-10">
                            <span className="text-neonBlue font-mono font-bold mb-2 block text-sm tracking-wider">04 // VIDEÓ ELEMZÉS</span>
                            <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3 font-display">
                                NotebookLM Videó Elemzés
                            </h2>
                            <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
                                AI által generált videós elemzés a GEO stratégiáról.
                            </p>
                        </div>

                        <div className="relative border border-white/10 shadow-2xl bg-black group">
                            {/* Corner accents */}
                            <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-white/30 z-20" />
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-white/30 z-20" />

                            <video
                                controls
                                className="w-full aspect-video"
                                poster="/images/hero-bg-v5.webp"
                            >
                                <source src="/videos/geo-video.mp4" type="video/mp4" />
                                A böngésződ nem támogatja a videó lejátszást.
                            </video>
                        </div>
                    </section>

                    {/* Bottom CTA - Main Offer */}
                    <div className="bg-gradient-to-br from-surface to-bgDeep border border-white/5 p-10 md:p-16 text-center relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neonBlue to-transparent opacity-30 group-hover:opacity-50 transition-opacity" />

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-display">
                            Szeretnél <span className="text-neonBlue">AI-kompatibilis</span> weboldalt?
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                            Ne maradj le a technológiai váltásról. Mi segítünk a GEO optimalizálásban és egy modern, vevőszerző weboldal elkészítésében.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Button href="/" variant="primary" size="lg">
                                Ajánlatkérés
                            </Button>
                            <Button href="tel:+36703304445" variant="secondary" size="lg" className="px-4 py-3 md:px-10 md:py-4 text-sm md:text-base whitespace-nowrap">
                                +36 70 330 4445
                            </Button>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 text-sm text-gray-500 font-mono">
                            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-neonBlue" /> SEO Optimalizálás</span>
                            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-neonBlue" /> GEO Felkészítés</span>
                            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-neonBlue" /> Prémium Design</span>
                        </div>
                    </div>

                </Container>
            </main>

            {/* Footer */}
            <footer className="border-t border-white/5 bg-black py-8 text-center text-gray-600 text-sm font-mono">
                <p>&copy; 2026 CyberLabsWeb. Minden jog fenntartva.</p>
            </footer>
        </div>
    );
};
