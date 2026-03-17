import { useState, useRef, useCallback } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Container } from '../Container';
import { Download, ArrowLeft, Image as ImageIcon, Trash2, DownloadCloud, Settings2, ShieldCheck, Play, Maximize } from 'lucide-react';
import Link from 'next/link';
import { Navbar } from '../sections/Navbar';
import { Footer } from '../sections/Footer';

// ─── Types ───────────────────────────────────────────────────
interface ImageItem {
    id: string;
    file: File;
    originalSize: number;
    originalUrl: string;
    width: number;
    height: number;
    compressedBlob: Blob | null;
    compressedSize: number;
    compressedUrl: string;
    compressedWidth: number;
    compressedHeight: number;
    status: 'uploaded' | 'processing' | 'done' | 'error';
    error?: string;
}

type OutputFormat = 'image/jpeg' | 'image/png' | 'image/webp';
type MaxSize = 0 | 3840 | 2560 | 1920 | 1280 | 800;

// ─── Animated Logo ───────────────────────────────────────────
const AnimatedCompressLogo = () => (
    <div className="relative w-12 h-12 mx-auto mb-2 group flex items-center justify-center">
        <div className="absolute inset-0 rounded-xl bg-neonBlue/5 border border-neonBlue/20 rotate-3 transition-transform duration-500 group-hover:rotate-6 shadow-[0_0_15px_rgba(37,99,235,0.1)]" />
        <div className="absolute inset-0 rounded-xl bg-bgDeep border border-neonBlue/40 shadow-[0_0_20px_rgba(37,99,235,0.2)]" />
        <ImageIcon className="w-6 h-6 text-neonBlue z-10 animate-pulse drop-shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
        <div className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t-2 border-l-2 border-neonBlue shadow-[0_0_5px_rgba(37,99,235,0.5)] transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
        <div className="absolute -top-1 -right-1 w-1.5 h-1.5 border-t-2 border-r-2 border-neonBlue shadow-[0_0_5px_rgba(37,99,235,0.5)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 border-b-2 border-l-2 border-neonBlue shadow-[0_0_5px_rgba(37,99,235,0.5)] transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1" />
        <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b-2 border-r-2 border-neonBlue shadow-[0_0_5px_rgba(37,99,235,0.5)] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
    </div>
);

// ─── Helpers ─────────────────────────────────────────────────
const formatBytes = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
};

const getExtension = (format: OutputFormat): string => {
    const map: Record<OutputFormat, string> = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp' };
    return map[format];
};

const loadImageDimensions = (file: File): Promise<{ w: number; h: number; url: string }> => {
    return new Promise((resolve) => {
        const url = URL.createObjectURL(file);
        const img = new Image();
        img.onload = () => resolve({ w: img.width, h: img.height, url });
        img.onerror = () => resolve({ w: 0, h: 0, url });
        img.src = url;
    });
};

const MAX_SIZE_OPTIONS: { value: MaxSize; label: string }[] = [
    { value: 0, label: 'Eredeti' },
    { value: 3840, label: '4K (3840px)' },
    { value: 2560, label: 'QHD (2560px)' },
    { value: 1920, label: 'Full HD (1920px)' },
    { value: 1280, label: 'HD (1280px)' },
    { value: 800, label: 'Web (800px)' },
];

// ─── Main Component ──────────────────────────────────────────
export const ImageCompressorTool = () => {
    const { t, language } = useLanguage();
    const currentLang = language || 'hu';
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [images, setImages] = useState<ImageItem[]>([]);
    const [quality, setQuality] = useState(85);
    const [outputFormat, setOutputFormat] = useState<OutputFormat>('image/webp');
    const [maxSize, setMaxSize] = useState<MaxSize>(1920);
    const [isDragging, setIsDragging] = useState(false);
    const [isCompressing, setIsCompressing] = useState(false);

    // @ts-ignore
    const data: any = t('tools.imageCompressor') || {};
    const txt = {
        title: data.title || "Képtömörítő",
        subtitle: data.subtitle || "Optimalizáld a képeidet webre — átméretezés, formátum konverzió, intelligens tömörítés",
        features: data.features || ["100% Ingyenes", "Adatbiztonság", "Korlátlan Használat"],
        upload: data.upload || "Húzd ide a képeket vagy kattints a feltöltéshez",
        uploadSub: data.uploadSub || "JPEG, PNG, WebP • Max 50MB / kép",
        quality: data.quality || "Minőség",
        format: data.format || "Formátum",
        compress: data.compress || "Tömörítés indítása",
        download: data.download || "Letöltés",
        downloadAll: data.downloadAll || "Összes letöltése (ZIP)",
        original: data.original || "Eredeti",
        compressed: data.compressed || "Tömörített",
        saved: data.saved || "Megtakarítás",
        dimensions: data.dimensions || "Méret",
        clear: data.clear || "Törlés",
        privacy: data.privacy || "A képeid nem hagyják el a böngésződet",
        processing: data.processing || "Feldolgozás...",
        noImages: data.noImages || "Még nincs feltöltött kép",
        ready: data.ready || "Kész a tömörítésre",
        recompress: data.recompress || "Újra tömörítés",
        maxWidth: currentLang === 'hu' ? "Képméret (Felbontás)" : "Image Size (Resolution)",
        originalSize: currentLang === 'hu' ? "Eredeti méret" : "Original size",
    };

    const siteUrl = "https://cyberlabsweb.com";
    const canonicalUrl = `${siteUrl}/${currentLang}/tools/image-compressor`;

    // ─── Compress via Canvas with resize ─────────────────────
    const compressOneImage = useCallback((file: File, q: number, fmt: OutputFormat, maxW: MaxSize): Promise<{ blob: Blob; w: number; h: number }> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    let targetW = img.width;
                    let targetH = img.height;

                    // Resize if maxW is set and image is wider
                    if (maxW > 0 && img.width > maxW) {
                        const ratio = maxW / img.width;
                        targetW = maxW;
                        targetH = Math.round(img.height * ratio);
                    }

                    const canvas = document.createElement('canvas');
                    canvas.width = targetW;
                    canvas.height = targetH;
                    const ctx = canvas.getContext('2d');
                    if (!ctx) { reject(new Error('Canvas error')); return; }

                    // High quality downscale
                    ctx.imageSmoothingEnabled = true;
                    ctx.imageSmoothingQuality = 'high';
                    ctx.drawImage(img, 0, 0, targetW, targetH);

                    canvas.toBlob(
                        (blob) => {
                            if (!blob) { reject(new Error('Blob error')); return; }
                            resolve({ blob, w: targetW, h: targetH });
                        },
                        fmt,
                        fmt === 'image/png' ? undefined : q / 100
                    );
                };
                img.onerror = () => reject(new Error('Image load error'));
                img.src = e.target?.result as string;
            };
            reader.onerror = () => reject(new Error('File read error'));
            reader.readAsDataURL(file);
        });
    }, []);

    // ─── Add files (preview only) ────────────────────────────
    const addFiles = useCallback(async (files: File[]) => {
        const validFiles = files.filter(f => f.type.startsWith('image/') && f.size <= 50 * 1024 * 1024);
        if (!validFiles.length) return;
        const newItems: ImageItem[] = [];
        for (const file of validFiles) {
            const { w, h, url } = await loadImageDimensions(file);
            newItems.push({
                id: crypto.randomUUID(), file, originalSize: file.size,
                originalUrl: url, width: w, height: h,
                compressedBlob: null, compressedSize: 0, compressedUrl: '',
                compressedWidth: 0, compressedHeight: 0, status: 'uploaded',
            });
        }
        setImages(prev => [...prev, ...newItems]);
    }, []);

    // ─── Compress all ────────────────────────────────────────
    const compressAll = useCallback(async () => {
        const toCompress = images.filter(i => i.status === 'uploaded' || i.status === 'done');
        if (!toCompress.length) return;
        setIsCompressing(true);

        // Reset statuses
        setImages(prev => prev.map(i => {
            if (i.status === 'uploaded' || i.status === 'done') {
                if (i.compressedUrl) URL.revokeObjectURL(i.compressedUrl);
                return { ...i, status: 'processing' as const, compressedBlob: null, compressedSize: 0, compressedUrl: '', compressedWidth: 0, compressedHeight: 0 };
            }
            return i;
        }));

        for (const item of toCompress) {
            try {
                const { blob, w, h } = await compressOneImage(item.file, quality, outputFormat, maxSize);
                const compUrl = URL.createObjectURL(blob);
                setImages(prev => prev.map(i => i.id === item.id ? {
                    ...i, status: 'done' as const, compressedBlob: blob,
                    compressedSize: blob.size, compressedUrl: compUrl,
                    compressedWidth: w, compressedHeight: h,
                } : i));
            } catch {
                setImages(prev => prev.map(i => i.id === item.id ? {
                    ...i, status: 'error' as const, error: 'Hiba a tömörítés során'
                } : i));
            }
        }
        setIsCompressing(false);
    }, [images, quality, outputFormat, maxSize, compressOneImage]);

    // ─── Handlers ────────────────────────────────────────────
    const handleDragOver = useCallback((e: React.DragEvent) => { e.preventDefault(); setIsDragging(true); }, []);
    const handleDragLeave = useCallback((e: React.DragEvent) => { e.preventDefault(); setIsDragging(false); }, []);
    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault(); setIsDragging(false);
        addFiles(Array.from(e.dataTransfer.files));
    }, [addFiles]);
    const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) { addFiles(Array.from(e.target.files)); e.target.value = ''; }
    }, [addFiles]);

    const removeImage = (id: string) => {
        setImages(prev => {
            const item = prev.find(i => i.id === id);
            if (item) { URL.revokeObjectURL(item.originalUrl); if (item.compressedUrl) URL.revokeObjectURL(item.compressedUrl); }
            return prev.filter(i => i.id !== id);
        });
    };

    const downloadSingle = (img: ImageItem) => {
        if (!img.compressedUrl) return;
        const a = document.createElement('a');
        a.download = `${img.file.name.replace(/\.[^.]+$/, '')}-optimized.${getExtension(outputFormat)}`;
        a.href = img.compressedUrl; a.click();
    };

    const downloadAllZip = async () => {
        const doneImages = images.filter(i => i.status === 'done' && i.compressedBlob);
        if (!doneImages.length) return;
        // @ts-ignore
        if (typeof window.JSZip === 'undefined') {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
            document.head.appendChild(script);
            await new Promise(r => { script.onload = r; });
        }
        // @ts-ignore
        const zip = new window.JSZip();
        doneImages.forEach(img => {
            zip.file(`${img.file.name.replace(/\.[^.]+$/, '')}-optimized.${getExtension(outputFormat)}`, img.compressedBlob!);
        });
        const content = await zip.generateAsync({ type: 'blob' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(content); a.download = 'cyberlabs-optimized-images.zip';
        a.click(); URL.revokeObjectURL(a.href);
    };

    const clearAll = () => {
        images.forEach(img => { URL.revokeObjectURL(img.originalUrl); if (img.compressedUrl) URL.revokeObjectURL(img.compressedUrl); });
        setImages([]);
    };

    const uploadedCount = images.filter(i => i.status === 'uploaded').length;
    const doneCount = images.filter(i => i.status === 'done').length;
    const totalOriginal = images.filter(i => i.status === 'done').reduce((acc, i) => acc + i.originalSize, 0);
    const totalCompressed = images.filter(i => i.status === 'done').reduce((acc, i) => acc + i.compressedSize, 0);
    const totalSaved = totalOriginal - totalCompressed;
    const hasAnyImages = images.length > 0;
    const canCompress = images.some(i => i.status === 'uploaded' || i.status === 'done');
    const allDone = images.length > 0 && images.every(i => i.status === 'done');

    // Detect if settings changed since last compress (for re-compress hint)
    const settingsInfo = `${outputFormat} | ${quality}% | max ${maxSize || 'Eredeti'}px`;

    return (
        <div className="min-h-screen bg-bgDeep text-white selection:bg-neonBlue/30 noise-overlay flex flex-col relative overflow-hidden font-sans">
<Navbar />

            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/30 blur-[120px] mix-blend-screen animate-blob opacity-70" />
                <div className="absolute top-[20%] right-[-10%] w-[45%] h-[45%] rounded-full bg-cyan-500/25 blur-[120px] mix-blend-screen animate-blob animation-delay-2000 opacity-60" />
                <div className="absolute bottom-[-15%] left-[10%] w-[60%] h-[60%] rounded-full bg-indigo-600/30 blur-[130px] mix-blend-screen animate-blob animation-delay-4000 opacity-50" />
            </div>
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
            </div>

            <main className="flex-grow z-10 relative pt-20 md:pt-24 pb-12">
                <Container className="max-w-5xl">
                    <Link href={`/${currentLang}/`} className="inline-flex items-center text-muted hover:text-neonBlue transition-colors mb-6 text-sm uppercase tracking-widest font-bold">
                        {/* @ts-ignore */}
                        <ArrowLeft className="w-4 h-4 mr-2" /> {t('common.back') || 'Vissza a főoldalra'}
                    </Link>

                    {/* Header */}
                    <div className="text-center mb-6">
                        <AnimatedCompressLogo />
                        <h1 className="text-3xl md:text-5xl font-black mb-1 tracking-tight font-display">{txt.title}</h1>
                        <p className="text-lg text-muted max-w-2xl mx-auto mb-4">{txt.subtitle}</p>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {txt.features?.map((feature: string, idx: number) => (
                                <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded bg-neonBlue/10 border border-neonBlue/20 text-neonBlue text-xs font-bold uppercase tracking-wider">
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Upload Zone */}
                    <div
                        onClick={() => fileInputRef.current?.click()}
                        onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}
                        className={`relative cursor-pointer rounded-xl rounded-tr-[40px] rounded-bl-[40px] p-12 mb-8 text-center transition-all duration-300 border-2 border-dashed backdrop-blur-md
                            ${isDragging ? 'border-neonBlue bg-neonBlue/10 shadow-[0_0_40px_rgba(77,148,255,0.2)]' : 'border-white/10 bg-surface/40 hover:border-neonBlue/40 hover:bg-surface/60'}`}
                    >
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-neonBlue/10 to-transparent pointer-events-none rounded-tr-[40px]" />
                        <ImageIcon className={`w-12 h-12 mx-auto mb-4 transition-colors ${isDragging ? 'text-neonBlue' : 'text-white/30'}`} />
                        <p className="text-lg font-bold mb-1">{txt.upload}</p>
                        <p className="text-sm text-muted">{txt.uploadSub}</p>
                        <input ref={fileInputRef} type="file" accept="image/jpeg,image/png,image/webp" multiple className="hidden" onChange={handleFileSelect} />
                        <div className="absolute bottom-4 left-4 flex gap-1">
                            <div className="w-1 h-1 bg-white/20" /><div className="w-1 h-1 bg-white/20" /><div className="w-4 h-1 bg-neonBlue/60" />
                        </div>
                    </div>

                    {/* ═══ Controls Grid ═══ */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Max Width */}
                        <div className="p-6 rounded-xl bg-surface/40 border border-white/10 backdrop-blur-md">
                            <div className="flex items-center gap-2 mb-4">
                                <Maximize className="w-4 h-4 text-neonBlue" />
                                <span className="text-sm font-bold text-white/70 uppercase tracking-widest">{txt.maxWidth}</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                {MAX_SIZE_OPTIONS.map(opt => (
                                    <button key={opt.value} onClick={() => setMaxSize(opt.value)}
                                        className={`py-2 px-2 rounded-lg font-bold text-xs transition-all duration-300 ${maxSize === opt.value
                                            ? 'bg-neonBlue text-white shadow-[0_0_15px_rgba(77,148,255,0.3)]'
                                            : 'bg-surface3 text-white/50 hover:text-white hover:bg-surface3/80'}`}>
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                            <p className="text-[10px] text-white/30 font-mono mt-2">
                                {currentLang === 'hu'
                                    ? 'A kiválasztott értéknél nagyobb képek automatikusan átméreteződnek (az arányok megtartásával)'
                                    : 'Images larger than the selected value will be automatically resized (keeping aspect ratio)'}
                            </p>
                        </div>

                        {/* Format selector */}
                        <div className="p-6 rounded-xl bg-surface/40 border border-white/10 backdrop-blur-md">
                            <div className="flex items-center gap-2 mb-4">
                                <ImageIcon className="w-4 h-4 text-neonBlue" />
                                <span className="text-sm font-bold text-white/70 uppercase tracking-widest">{txt.format}</span>
                            </div>
                            <div className="flex gap-3 mb-3">
                                {(['image/webp', 'image/jpeg', 'image/png'] as OutputFormat[]).map(fmt => (
                                    <button key={fmt} onClick={() => setOutputFormat(fmt)}
                                        className={`flex-1 py-3 rounded-lg font-bold uppercase tracking-wider text-sm transition-all duration-300 ${outputFormat === fmt
                                            ? 'bg-neonBlue text-white shadow-[0_0_20px_rgba(77,148,255,0.3)]'
                                            : 'bg-surface3 text-white/50 hover:text-white hover:bg-surface3/80'}`}>
                                        {fmt.split('/')[1].toUpperCase()}
                                    </button>
                                ))}
                            </div>
                            <p className="text-[10px] text-white/30 font-mono">
                                {outputFormat === 'image/webp' && (currentLang === 'hu' ? '⚡ WebP: legjobb méret/minőség arány, modern böngészők' : '⚡ WebP: best size/quality ratio, modern browsers')}
                                {outputFormat === 'image/jpeg' && (currentLang === 'hu' ? '📷 JPEG: univerzális kompatibilitás, fotókhoz ideális' : '📷 JPEG: universal compatibility, ideal for photos')}
                                {outputFormat === 'image/png' && (currentLang === 'hu' ? '🎨 PNG: veszteségmentes, átlátszóságot támogat' : '🎨 PNG: lossless, supports transparency')}
                            </p>
                        </div>
                    </div>

                    {/* Quality + Compress Button Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {/* Quality slider */}
                        <div className="md:col-span-2 p-6 rounded-xl bg-surface/40 border border-white/10 backdrop-blur-md">
                            <div className="flex items-center gap-2 mb-4">
                                <Settings2 className="w-4 h-4 text-neonBlue" />
                                <span className="text-sm font-bold text-white/70 uppercase tracking-widest">{txt.quality}</span>
                                <span className="ml-auto text-neonBlue font-mono font-bold text-lg">{quality}%</span>
                            </div>
                            <input
                                type="range" min="1" max="100" value={quality}
                                onChange={e => setQuality(Number(e.target.value))}
                                className="w-full h-2 bg-surface3 rounded-lg appearance-none cursor-pointer accent-neonBlue [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-neonBlue [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(77,148,255,0.5)]"
                            />
                            <div className="flex justify-between text-[10px] text-white/30 font-mono mt-1">
                                <span>{currentLang === 'hu' ? 'Agresszív tömörítés' : 'Aggressive compression'}</span>
                                <span>{currentLang === 'hu' ? 'Veszteségmentes közeli' : 'Near lossless'}</span>
                            </div>
                            <p className="text-[10px] text-white/40 font-mono mt-3 leading-relaxed">
                                {currentLang === 'hu'
                                    ? 'A kiválasztott felbontáson lévő képadatok optimalizálása. A kisebb érték tovább csökkenti a fájlméretet a szemmel alig látható részletek elhagyásával.'
                                    : 'Optimizes the image data at the chosen resolution. Lower values reduce file size further by dropping visually imperceptible details.'}
                            </p>
                            {outputFormat === 'image/png' && (
                                <p className="text-[10px] text-yellow-400/60 font-mono mt-2">
                                    {currentLang === 'hu' ? 'ℹ️ PNG veszteségmentes — a minőség csúszka nincs hatással. Az átméretezés csökkenti a fájlméretet.' : 'ℹ️ PNG is lossless — quality slider has no effect. Resize to reduce file size.'}
                                </p>
                            )}
                        </div>

                        {/* Compress button */}
                        <div className="p-6 rounded-xl bg-surface/40 border border-white/10 backdrop-blur-md flex flex-col justify-center">
                            <button
                                onClick={compressAll}
                                disabled={!canCompress || isCompressing}
                                className={`w-full py-4 rounded-lg flex items-center justify-center gap-3 font-bold uppercase tracking-wider text-sm transition-all duration-300 relative overflow-hidden group ${canCompress && !isCompressing
                                    ? 'bg-neonBlue text-white shadow-[0_0_20px_rgba(77,148,255,0.3)] hover:shadow-[0_0_40px_rgba(77,148,255,0.6)]'
                                    : 'bg-white/5 text-white/30 cursor-not-allowed border border-white/5'
                                    }`}
                            >
                                {canCompress && !isCompressing && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] animate-[shimmer_2s_infinite] pointer-events-none skew-x-12" />}
                                {isCompressing ? (
                                    <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /><span className="relative z-10">{txt.processing}</span></>
                                ) : (
                                    <><Play className="w-5 h-5 relative z-10" /><span className="relative z-10">{allDone ? txt.recompress : txt.compress}</span></>
                                )}
                            </button>
                            {hasAnyImages && (
                                <p className="text-[10px] text-white/30 font-mono text-center mt-2">{settingsInfo}</p>
                            )}
                        </div>
                    </div>

                    {/* Privacy */}
                    <div className="flex items-center justify-center gap-2 mb-8 text-sm text-white/40">
                        <ShieldCheck className="w-4 h-4 text-green-500/60" />
                        <span>{txt.privacy}</span>
                    </div>

                    {/* ═══ Results ═══ */}
                    {hasAnyImages && (
                        <div className="space-y-4">
                            {/* Batch bar */}
                            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-surface/40 border border-white/10 backdrop-blur-md">
                                <div className="flex flex-wrap items-center gap-4 text-sm">
                                    {uploadedCount > 0 && (
                                        <span className="text-yellow-400/80 font-mono">{uploadedCount} {currentLang === 'hu' ? 'feltöltve — tömörítésre vár' : 'uploaded — waiting'}</span>
                                    )}
                                    {doneCount > 0 && (
                                        <span className="text-green-400 font-mono font-bold">
                                            {doneCount} {currentLang === 'hu' ? 'optimalizálva' : 'optimized'}
                                            {totalSaved > 0 && ` • −${formatBytes(totalSaved)} (${Math.round((totalSaved / totalOriginal) * 100)}%)`}
                                        </span>
                                    )}
                                </div>
                                <div className="flex gap-3">
                                    {doneCount > 1 && (
                                        <button onClick={downloadAllZip}
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neonBlue/10 border border-neonBlue/30 text-neonBlue hover:bg-neonBlue hover:text-white transition-all duration-300 text-sm font-bold uppercase tracking-wider">
                                            <DownloadCloud className="w-4 h-4" /> {txt.downloadAll}
                                        </button>
                                    )}
                                    <button onClick={clearAll}
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-all duration-300 text-sm font-bold uppercase tracking-wider">
                                        <Trash2 className="w-4 h-4" /> {txt.clear}
                                    </button>
                                </div>
                            </div>

                            {/* Image cards */}
                            {images.map(img => {
                                const pctSaved = img.status === 'done' ? Math.round((1 - img.compressedSize / img.originalSize) * 100) : 0;
                                const wasResized = img.status === 'done' && (img.compressedWidth !== img.width || img.compressedHeight !== img.height);

                                return (
                                    <div key={img.id} className="p-4 md:p-6 rounded-xl rounded-tr-[24px] rounded-bl-[24px] bg-surface/40 border-l-4 border-l-neonBlue border-t border-t-white/10 border-b border-b-white/5 border-r border-r-white/5 backdrop-blur-md transition-all duration-300 hover:border-l-blue-400">
                                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                                            {/* Thumbnails */}
                                            <div className="flex gap-3 flex-shrink-0">
                                                <div className="relative">
                                                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden bg-bgDeep border border-white/10">
                                                        <img src={img.originalUrl} alt="Original" className="w-full h-full object-cover" />
                                                    </div>
                                                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-bgDeep/90 text-[9px] text-white/50 font-mono px-1.5 py-0.5 rounded border border-white/10">{txt.original}</span>
                                                </div>
                                                {img.status === 'done' && img.compressedUrl && (
                                                    <div className="relative">
                                                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden bg-bgDeep border border-neonBlue/30">
                                                            <img src={img.compressedUrl} alt="Compressed" className="w-full h-full object-cover" />
                                                        </div>
                                                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-neonBlue/90 text-[9px] text-white font-mono px-1.5 py-0.5 rounded">{txt.compressed}</span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Info */}
                                            <div className="flex-grow min-w-0">
                                                <p className="font-bold text-sm truncate mb-2">{img.file.name}</p>

                                                {img.status === 'uploaded' && (
                                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                                                        <div><span className="text-white/40 block uppercase tracking-wider">{txt.originalSize}</span><span className="font-mono font-bold text-white/80">{formatBytes(img.originalSize)}</span></div>
                                                        <div><span className="text-white/40 block uppercase tracking-wider">{txt.dimensions}</span><span className="font-mono font-bold text-white/80">{img.width}×{img.height}</span></div>
                                                        <div><span className="text-white/40 block uppercase tracking-wider">Status</span><span className="font-mono font-bold text-yellow-400/80">{txt.ready}</span></div>
                                                    </div>
                                                )}

                                                {img.status === 'processing' && (
                                                    <div className="flex items-center gap-2 text-neonBlue text-sm">
                                                        <div className="w-4 h-4 border-2 border-neonBlue border-t-transparent rounded-full animate-spin" />{txt.processing}
                                                    </div>
                                                )}

                                                {img.status === 'done' && (
                                                    <div className="space-y-2">
                                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                                                            <div><span className="text-white/40 block uppercase tracking-wider">{txt.original}</span><span className="font-mono font-bold text-white/80">{formatBytes(img.originalSize)}</span></div>
                                                            <div><span className="text-white/40 block uppercase tracking-wider">{txt.compressed}</span><span className="font-mono font-bold text-neonBlue">{formatBytes(img.compressedSize)}</span></div>
                                                            <div>
                                                                <span className="text-white/40 block uppercase tracking-wider">{txt.saved}</span>
                                                                <span className={`font-mono font-bold ${pctSaved > 0 ? 'text-green-400' : 'text-red-400'}`}>
                                                                    {pctSaved > 0 ? '−' : '+'}{Math.abs(pctSaved)}%
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span className="text-white/40 block uppercase tracking-wider">{txt.dimensions}</span>
                                                                <span className="font-mono font-bold text-white/80">
                                                                    {wasResized ? `${img.width}×${img.height} → ${img.compressedWidth}×${img.compressedHeight}` : `${img.compressedWidth}×${img.compressedHeight}`}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* Visual size bar */}
                                                        {pctSaved > 0 && (
                                                            <div className="flex items-center gap-2">
                                                                <div className="flex-grow h-1.5 bg-surface3 rounded-full overflow-hidden">
                                                                    <div className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full transition-all duration-500"
                                                                        style={{ width: `${100 - pctSaved}%` }} />
                                                                </div>
                                                                <span className="text-[10px] text-green-400 font-mono font-bold whitespace-nowrap">−{pctSaved}%</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}

                                                {img.status === 'error' && <p className="text-red-400 text-sm">{img.error}</p>}
                                            </div>

                                            {/* Actions */}
                                            <div className="flex gap-2 flex-shrink-0">
                                                {img.status === 'done' && (
                                                    <button onClick={() => downloadSingle(img)}
                                                        className="flex items-center gap-2 px-4 py-3 rounded-lg bg-transparent text-neonBlue border-2 border-neonBlue hover:bg-neonBlue hover:text-white transition-all duration-300 font-bold uppercase tracking-wider text-sm relative overflow-hidden group shadow-[0_0_15px_rgba(77,148,255,0.15)] hover:shadow-[0_0_25px_rgba(77,148,255,0.4)]">
                                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] animate-[shimmer_2s_infinite] pointer-events-none skew-x-12" />
                                                        <Download className="w-4 h-4 relative z-10" /><span className="relative z-10">{txt.download}</span>
                                                    </button>
                                                )}
                                                <button onClick={() => removeImage(img.id)}
                                                    className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-all duration-300"
                                                    title={currentLang === 'hu' ? 'Eltávolítás' : 'Remove'}>
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {/* Empty state */}
                    {!hasAnyImages && (
                        <div className="text-center py-16 text-white/20">
                            <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-20" />
                            <p className="font-bold text-sm uppercase tracking-widest">{txt.noImages}</p>
                        </div>
                    )}

                    {/* CTA */}
                    <div className="mt-16 text-center p-8 rounded-xl bg-surface/30 border border-white/5 backdrop-blur-sm">
                        <h2 className="text-xl font-bold mb-2">
                            {currentLang === 'hu' ? 'Weboldal lassú a nagy képek miatt?' : 'Website slow because of large images?'}
                        </h2>
                        <p className="text-muted mb-6 max-w-lg mx-auto">
                            {currentLang === 'hu'
                                ? 'Professzionális weboldal optimalizálás gyorsítjuk a betöltést, javítjuk a felhasználói élményt és a SEO rangsorolást.'
                                : 'Professional website optimization — faster load times, better UX and SEO ranking.'}
                        </p>
                        <a href={`/${currentLang}/#contact`}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-neonBlue text-white font-bold uppercase tracking-wider text-sm hover:shadow-[0_0_30px_rgba(77,148,255,0.5)] transition-all duration-300">
                            {currentLang === 'hu' ? 'Kérj ajánlatot' : 'Get a quote'}
                        </a>
                    </div>
                </Container>
            </main>
            <Footer />
        </div>
    );
};
