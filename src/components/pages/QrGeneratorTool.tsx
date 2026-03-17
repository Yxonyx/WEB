import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Container } from '../Container';
import { QRCodeSVG } from 'qrcode.react';
import { Download, QrCode as QrIcon, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';

const AnimatedQRLogo = () => {
    return (
        <div className="relative w-12 h-12 mx-auto mb-2 group flex items-center justify-center">
            {/* Tech frame */}
            <div className="absolute inset-0 rounded-xl bg-neonBlue/5 border border-neonBlue/20 rotate-3 transition-transform duration-500 group-hover:rotate-6 shadow-[0_0_15px_rgba(37,99,235,0.1)]" />
            <div className="absolute inset-0 rounded-xl bg-bgDeep border border-neonBlue/40 shadow-[0_0_20px_rgba(37,99,235,0.2)]" />

            {/* Standard reliable icon */}
            <QrIcon className="w-6 h-6 text-neonBlue z-10 animate-pulse drop-shadow-[0_0_10px_rgba(37,99,235,0.8)]" />

            {/* Corner Markers */}
            <div className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t-2 border-l-2 border-neonBlue shadow-[0_0_5px_rgba(37,99,235,0.5)] transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
            <div className="absolute -top-1 -right-1 w-1.5 h-1.5 border-t-2 border-r-2 border-neonBlue shadow-[0_0_5px_rgba(37,99,235,0.5)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 border-b-2 border-l-2 border-neonBlue shadow-[0_0_5px_rgba(37,99,235,0.5)] transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1" />
            <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b-2 border-r-2 border-neonBlue shadow-[0_0_5px_rgba(37,99,235,0.5)] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
        </div>
    );
};

export const QrGeneratorTool = () => {
    const { t, language } = useLanguage();
    const currentLang = language || 'hu';
    const [inputValue, setInputValue] = useState('');

    // @ts-ignore
    const qrData: any = t('tools.qr') || {
        title: "QR Kód Generáló",
        subtitle: "Írd be a hivatkozást vagy szöveget, és azonnal legeneráljuk neked a QR kódot.",
        placeholder: "https://cyberlabsweb.com",
        download: "Letöltés",
        empty: "A kód itt fog megjelenni...",
        features: ["100% Ingyenes", "Vízjel Nélkül", "Korlátlan Használat"]
    };

    const siteUrl = "https://cyberlabsweb.com";
    const canonicalUrl = `${siteUrl}/${currentLang}/tools/qr`;

    const handleDownload = () => {
        const svg = document.getElementById('generated-qr-svg');
        if (!svg) return;

        // Clone the SVG so we don't modify the visible one in the DOM
        const clonedSvg = svg.cloneNode(true) as SVGSVGElement;

        // Set high resolution for the download output
        const targetSize = 1024;
        clonedSvg.setAttribute('width', targetSize.toString());
        clonedSvg.setAttribute('height', targetSize.toString());

        const svgData = new XMLSerializer().serializeToString(clonedSvg);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();

        img.onload = () => {
            canvas.width = targetSize;
            canvas.height = targetSize;

            if (ctx) {
                // Solid white background for max contrast on any device
                ctx.fillStyle = "#ffffff";
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // Draw the perfectly scaled vector graphic
                ctx.drawImage(img, 0, 0, targetSize, targetSize);
            }

            const pngFile = canvas.toDataURL("image/png");
            const downloadLink = document.createElement("a");
            downloadLink.download = `cyberlabs-qr-${Date.now()}.png`;
            downloadLink.href = `${pngFile}`;
            downloadLink.click();
        };

        img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)));
    };

    return (
        <div className="min-h-screen bg-bgDeep text-white selection:bg-neonBlue/30 noise-overlay flex flex-col relative overflow-hidden font-sans">
<Navbar />

            {/* STUNNING ANIMATED MESH BACKGROUND */}

            {/* Animated Color Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/30 blur-[120px] mix-blend-screen animate-blob opacity-70"></div>
                <div className="absolute top-[20%] right-[-10%] w-[45%] h-[45%] rounded-full bg-cyan-500/25 blur-[120px] mix-blend-screen animate-blob animation-delay-2000 opacity-60"></div>
                <div className="absolute bottom-[-15%] left-[10%] w-[60%] h-[60%] rounded-full bg-indigo-600/30 blur-[130px] mix-blend-screen animate-blob animation-delay-4000 opacity-50"></div>
            </div>

            {/* Subtle Grid and Scanlines */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] opacity-40 mix-blend-overlay"></div>
            </div>

            <main className="flex-grow z-10 relative pt-20 md:pt-24 pb-12">
                <Container className="max-w-5xl">
                    <Link href={`/${currentLang}/`} className="inline-flex items-center text-muted hover:text-neonBlue transition-colors mb-6 text-sm uppercase tracking-widest font-bold">
                        <ArrowLeft className="w-4 h-4 mr-2" /> {/* @ts-ignore */}{t('common.back') || 'Vissza a főoldalra'}
                    </Link>

                    <div className="text-center mb-6">
                        <AnimatedQRLogo />
                        <h1 className="text-3xl md:text-5xl font-black mb-1 tracking-tight font-display">
                            {qrData.title}
                        </h1>
                        <p className="text-lg text-muted max-w-2xl mx-auto mb-4">
                            {qrData.subtitle}
                        </p>

                        {/* Feature Badges */}
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {qrData.features?.map((feature: string, idx: number) => (
                                <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded bg-neonBlue/10 border border-neonBlue/20 text-neonBlue text-xs font-bold uppercase tracking-wider">
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* URL Input Form */}
                        <div className="lg:col-span-7 space-y-8 p-8 rounded-xl rounded-tr-[40px] rounded-bl-[40px] bg-surface/40 border-l-4 border-l-neonBlue border-t border-t-white/10 border-b border-b-white/5 border-r border-r-white/5 transition-all duration-300 hover:border-l-blue-400 backdrop-blur-md relative overflow-hidden">
                            {/* Inner tech decorations */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-neonBlue/10 to-transparent pointer-events-none rounded-tr-[40px]"></div>

                            <div className="space-y-4 relative z-10">
                                <div className="flex items-center justify-between">
                                    <label className="block text-sm font-bold text-white/70 uppercase tracking-widest flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-neonBlue animate-pulse"></span>
                                        URL / Szöveg
                                    </label>
                                    <span className="text-[10px] text-neonBlue/50 font-mono tracking-widest">INPUT_DATA_STREAM</span>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        placeholder={qrData.placeholder}
                                        className="w-full bg-bgDeep/50 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-neonBlue focus:ring-0 transition-all duration-300 font-sans text-lg focus:shadow-[0_0_20px_rgba(37,99,235,0.2)] placeholder:text-white/20"
                                    />
                                    {inputValue && (
                                        <button
                                            onClick={() => setInputValue('')}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                                        >
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    )}
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-[10px] text-white/20 font-mono">STATUS: {inputValue ? 'READY' : 'AWAITING'}</p>
                                    <p className="text-[10px] text-white/30 font-mono bg-white/5 px-2 py-1 rounded-md">{inputValue.length} CHARS</p>
                                </div>
                            </div>

                            {/* Technical decorative lines */}
                            <div className="absolute bottom-4 left-4 flex gap-1">
                                <div className="w-1 h-1 bg-white/20"></div>
                                <div className="w-1 h-1 bg-white/20"></div>
                                <div className="w-4 h-1 bg-neonBlue/60"></div>
                            </div>
                        </div>

                        {/* Generated QR View */}
                        <div className="lg:col-span-5 flex flex-col items-center">
                            <div className="p-8 rounded-xl rounded-br-[40px] rounded-tl-[40px] bg-white border-8 border-bgDeep shadow-[0_0_50px_rgba(37,99,235,0.15)] relative w-full aspect-square flex items-center justify-center transition-all">
                                {/* Corner Accents on the QR Code container */}
                                <div className="absolute top-[-8px] left-[-8px] w-8 h-8 border-t-4 border-l-4 border-neonBlue rounded-tl-[40px] pointer-events-none"></div>
                                <div className="absolute bottom-[-8px] right-[-8px] w-8 h-8 border-b-4 border-r-4 border-neonBlue rounded-br-[40px] pointer-events-none"></div>

                                {inputValue ? (
                                    <div className="w-full h-full flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500">
                                        <QRCodeSVG
                                            id="generated-qr-svg"
                                            value={inputValue}
                                            size={256}
                                            level={"H"}
                                            includeMargin={false}
                                            fgColor="#000000"
                                            bgColor="#ffffff"
                                            style={{ width: '100%', height: '100%', maxWidth: '256px', maxHeight: '256px' }}
                                        />
                                    </div>
                                ) : (
                                    <div className="text-center flex flex-col items-center justify-center h-full w-full bg-bgDeep/5 rounded-2xl border border-dashed border-black/10">
                                        <div className="relative">
                                            {/* Focusing recticle effect */}
                                            <div className="absolute -inset-4 border border-neonBlue/20 rounded-xl animate-[spin_10s_linear_infinite]"></div>
                                            <div className="absolute -inset-2 border border-black/5 rounded-lg animate-[spin_5s_linear_infinite_reverse]"></div>
                                            <QrIcon className="w-12 h-12 mb-4 opacity-10 text-black mx-auto relative z-10" />
                                        </div>
                                        <p className="font-bold text-xs tracking-widest uppercase text-black/30 mt-4">{qrData.empty}</p>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={handleDownload}
                                disabled={!inputValue}
                                className={`mt-8 w-full py-4 rounded-lg flex items-center justify-center gap-3 font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden group ${inputValue
                                    ? 'bg-transparent text-neonBlue border-2 border-neonBlue hover:bg-neonBlue hover:text-white shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]'
                                    : 'bg-white/5 text-white/30 cursor-not-allowed border-2 border-white/5'
                                    }`}
                            >
                                {/* Button scan effect */}
                                {inputValue && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] animate-[shimmer_2s_infinite] pointer-events-none skew-x-12"></div>}
                                <Download className="w-5 h-5 relative z-10" />
                                <span className="relative z-10">{qrData.download}</span>
                            </button>
                        </div>
                    </div>
                </Container>
            </main>

            <Footer />
        </div >
    );
};
