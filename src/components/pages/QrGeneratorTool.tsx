import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { QRCodeSVG } from 'qrcode.react';
import { Download, QrCode as QrIcon } from 'lucide-react';
import { SubpageHeader, SubpageShell } from '../SubpageShell';

const SkyToolIcon = ({ children }: { children: React.ReactNode }) => (
    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-white/60 bg-white/[0.18] shadow-[0_18px_42px_-24px_rgba(0,70,140,0.58),inset_0_1px_0_rgba(255,255,255,0.54)]">
        {children}
    </div>
);

export const QrGeneratorTool = () => {
    const { t, language } = useLanguage();
    const currentLang = language || 'hu';
    const [inputValue, setInputValue] = useState('');

    const qrData = (t('tools.qr') as unknown as {
        title?: string;
        subtitle?: string;
        placeholder?: string;
        download?: string;
        empty?: string;
        features?: string[];
    }) || {
        title: 'QR Kód Generáló',
        subtitle: 'Írd be a hivatkozást vagy szöveget, és azonnal legeneráljuk neked a QR kódot.',
        placeholder: 'https://cyberlabsweb.com',
        download: 'Letöltés',
        empty: 'A kód itt fog megjelenni...',
        features: ['100% Ingyenes', 'Vízjel Nélkül', 'Korlátlan Használat'],
    };

    const handleDownload = () => {
        const svg = document.getElementById('generated-qr-svg');
        if (!svg) return;

        const clonedSvg = svg.cloneNode(true) as SVGSVGElement;
        const targetSize = 1024;
        clonedSvg.setAttribute('width', targetSize.toString());
        clonedSvg.setAttribute('height', targetSize.toString());

        const svgData = new XMLSerializer().serializeToString(clonedSvg);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();

        img.onload = () => {
            canvas.width = targetSize;
            canvas.height = targetSize;

            if (ctx) {
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, targetSize, targetSize);
            }

            const pngFile = canvas.toDataURL('image/png');
            const downloadLink = document.createElement('a');
            downloadLink.download = `cyberlabs-qr-${Date.now()}.png`;
            downloadLink.href = `${pngFile}`;
            downloadLink.click();
        };

        img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
    };

    return (
        <SubpageShell
            backHref={`/${currentLang}/`}
            backLabel={t('common.back') || 'Vissza a főoldalra'}
        >
            <SubpageHeader
                icon={<SkyToolIcon><QrIcon className="h-7 w-7 text-[#FFF2C6]" /></SkyToolIcon>}
                title={qrData.title || 'QR Kód Generáló'}
                subtitle={qrData.subtitle}
                badges={qrData.features}
            />

            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
                <div className="sky-frost-panel space-y-5 rounded-[1.75rem] p-6 sm:p-8 lg:col-span-7">
                    <label className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-widest text-white">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-[#FFD66A]" />
                        URL / Szöveg
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder={qrData.placeholder}
                            className="w-full rounded-2xl border-2 border-white/50 bg-white/[0.16] px-5 py-4 text-lg font-semibold text-white placeholder:text-white/50 transition-all duration-300 focus:border-white/80 focus:bg-white/[0.22] focus:outline-none"
                        />
                        {inputValue && (
                            <button
                                onClick={() => setInputValue('')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 transition-colors hover:text-white"
                                aria-label="Törlés"
                            >
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>

                <div className="flex flex-col items-center lg:col-span-5">
                    <div className="sky-frost-panel-strong flex aspect-square w-full items-center justify-center rounded-[1.75rem] p-8">
                        {inputValue ? (
                            <QRCodeSVG
                                id="generated-qr-svg"
                                value={inputValue}
                                size={256}
                                level="H"
                                includeMargin={false}
                                fgColor="#06437D"
                                bgColor="#ffffff"
                                style={{ width: '100%', height: '100%', maxWidth: '256px', maxHeight: '256px' }}
                            />
                        ) : (
                            <div className="flex flex-col items-center justify-center text-center">
                                <QrIcon className="mb-4 h-12 w-12 text-white/30" />
                                <p className="text-xs font-extrabold uppercase tracking-widest text-white">{qrData.empty}</p>
                            </div>
                        )}
                    </div>

                    <button
                        onClick={handleDownload}
                        disabled={!inputValue}
                        className={`mt-6 flex w-full items-center justify-center gap-3 rounded-full px-8 py-4 font-hero text-base font-bold transition-all duration-300 ${
                            inputValue
                                ? 'border border-white/70 bg-[#FFD66A] text-[#06437D] shadow-[0_14px_30px_rgba(255,203,85,0.28),inset_0_1px_0_rgba(255,255,255,0.75)] hover:-translate-y-0.5 hover:bg-[#FFE18A]'
                                : 'cursor-not-allowed border-2 border-white/20 bg-white/10 text-white/40'
                        }`}
                    >
                        <Download className="h-5 w-5" />
                        {qrData.download}
                    </button>
                </div>
            </div>
        </SubpageShell>
    );
};
