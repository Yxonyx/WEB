import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../Container';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Bot, CheckCircle2, Globe, Cpu } from 'lucide-react';
import { ProIcon } from '../icons/ProIcon';
import { Helmet } from 'react-helmet-async';
import { sendGeoGuideEmail } from '../../utils/emailService';
import { Button } from '../ui/Button';

export const GeoLanding = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            await sendGeoGuideEmail(email);
            console.log('Form submitted:', email);
            setStatus('success');
            navigate('/geo-tudasanyag/koszonjuk');
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            // For testing: setStatus('success'); navigate('/geo-tudasanyag/koszonjuk');
        }
    };

    return (
        <div className="min-h-screen bg-bgDeep text-white flex flex-col relative overflow-hidden font-sans selection:bg-neonBlue/30">
            <Helmet>
                <title>GEO - Generative Engine Optimization Útmutató | CyberLabs</title>
                <meta name="description" content="Tudj meg mindent a GEO-ról! Töltsd le ingyenes útmutatónkat és kerülj az AI válaszok élére." />
            </Helmet>

            {/* Header / Nav */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-bgDeep/80 backdrop-blur-md border-b border-white/5">
                <Container className="h-16 md:h-20 flex items-center justify-between">
                    <a href="/" className="flex items-center gap-3 group">
                        <div className="relative w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-gradient-to-br from-white to-neonBlue text-black font-bold font-mono text-lg leading-none transition-transform group-hover:scale-105 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                            <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-black/20" />
                            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-black/20" />
                            CL
                        </div>
                        <div className="flex flex-col justify-between h-8 md:h-9">
                            <span className="text-lg md:text-xl font-bold tracking-tight group-hover:text-neonBlue transition-colors flex items-baseline leading-none">
                                <span className="text-white">Cyber</span><span className="text-neonBlue">labs</span><span className="text-sm text-white/40 ml-1 font-normal lowercase">web</span>
                            </span>
                            <span className="text-[10px] text-neonBlue font-mono uppercase tracking-widest opacity-80 leading-none">
                                GEO Tudásanyag
                            </span>
                        </div>
                    </a>

                    <Button href="/" variant="secondary" size="sm" className="hidden md:inline-flex text-xs uppercase tracking-wider font-bold">
                        Irány a Főoldal
                    </Button>
                </Container>
            </header>

            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Cyber Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
                {/* Glow orbs */}
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-neonBlue/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
            </div>

            <main className="flex-grow flex items-center justify-center relative z-10 pt-24 pb-12 px-4 md:pt-32">
                <Container className="max-w-6xl w-full">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                        {/* Left Content - 7 cols */}
                        <motion.div
                            className="lg:col-span-7 flex flex-col justify-center"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10 text-neonBlue text-xs font-mono mb-6 w-fit backdrop-blur-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neonBlue opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-neonBlue"></span>
                                </span>
                                <span>ÚJ STRATÉGIA</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-display tracking-tight">
                                Így kerülj be <br />
                                <span className="text-white relative inline-block">
                                    Az AI Válaszaiba <span className="text-neonBlue">.</span>
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-neonBlue opacity-60" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7501 2.99991 132.5 -4.5003 198 2.00008" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
                                </span>
                            </h1>

                            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
                                A <strong className="text-white">GEO (Generative Engine Optimization)</strong> az, ami leváltja a hagyományos SEO-t. Ne maradj le a váltásról: tudd meg, hogyan kerülhetsz be az AI válaszaiba.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                <div className="bg-surface/50 border border-white/5 p-4 rounded-xl flex items-start gap-3 hover:border-neonBlue/30 transition-colors group">
                                    <ProIcon icon={Bot} color="neonBlue" size={32} />
                                    <div>
                                        <h3 className="font-bold text-sm text-white mb-1">AI Kompatibilitás</h3>
                                        <p className="text-xs text-gray-500 leading-snug">Optimalizálás ChatGPT-re, Gemini-re és Perplexity-re.</p>
                                    </div>
                                </div>
                                <div className="bg-surface/50 border border-white/5 p-4 rounded-xl flex items-start gap-3 hover:border-purple-500/30 transition-colors group">
                                    <ProIcon icon={Cpu} color="neonPurple" size={32} />
                                    <div>
                                        <h3 className="font-bold text-sm text-white mb-1">Strukturált Adatok</h3>
                                        <p className="text-xs text-gray-500 leading-snug">Hogyan tedd az adataidat "gép által olvashatóvá".</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-500 uppercase tracking-widest">
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-neonBlue" /> PDF Útmutató</span>
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-neonBlue" /> Magyarázó Videó</span>
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-neonBlue" /> Ingyenes</span>
                            </div>
                        </motion.div>

                        {/* Right Form - 5 cols */}
                        <motion.div
                            className="lg:col-span-5"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="bg-surface/80 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.3)] relative overflow-hidden ring-1 ring-white/5">
                                {/* Top highlight */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neonBlue via-purple-500 to-neonBlue opacity-50" />

                                <div className="mb-6">
                                    <h2 className="text-2xl font-bold font-display mb-2">Kérem az anyagot</h2>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Küldjük emailben azonnal. Nincs spam, csak tömény tudás.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-1.5">
                                        <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email cím</label>
                                        <div className="relative group">
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                placeholder="nev@email.hu"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full pl-4 pr-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:border-neonBlue focus:ring-1 focus:ring-neonBlue/50 text-white placeholder-gray-600 transition-all font-mono text-sm"
                                            />
                                            {/* Glow effect on focus */}
                                            <div className="absolute inset-0 rounded-lg bg-neonBlue/20 opacity-0 group-focus-within:opacity-100 blur-md -z-10 transition-opacity duration-300" />
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        variant="primary"
                                        className="w-full justify-center text-sm py-3 font-bold tracking-wide"
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2" />
                                                Küldés...
                                            </>
                                        ) : (
                                            <>
                                                Letöltés Indítása <ArrowRight className="w-4 h-4 ml-2" />
                                            </>
                                        )}
                                    </Button>
                                </form>

                                <div className="mt-6 flex items-center justify-center gap-3 pt-4 border-t border-white/5 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                                    <Globe className="w-4 h-4" />
                                    <Sparkles className="w-4 h-4" />
                                    <span className="text-[10px] font-mono">POWERED BY CYBERLABS</span>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </Container>
            </main>
        </div>
    );
};
