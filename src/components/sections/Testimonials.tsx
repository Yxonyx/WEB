import { useRef, useState, useEffect } from 'react';
import { Section } from '../Section';
import { Container } from '../Container';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

interface Testimonial {
    quote: string;
    name: string;
    role: string;
    rating: number;
}

export const Testimonials = () => {
    const { language } = useLanguage();
    const trackRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    const testimonials: Record<string, Testimonial[]> = {
        hu: [
            {
                quote: "Sokkal gyorsabban készültek el, mint amire számítottam. Könnyű elérni őket, ha bármilyen kérdésem van. Többször kellett módosítanom, mindig gyorsan segítettek. Nagyon elégedett vagyok!",
                name: "Bodnár Tímea",
                role: "Fogorvos",
                rating: 5
            },
            {
                quote: "Átlátható, szép weboldalt kaptam, pont amit elképzeltem. A kommunikáció végig profi volt, és tényleg figyeltek a részletekre. Köszönöm a munkát!",
                name: "Varga Botond",
                role: "Fodrászat tulajdonos",
                rating: 5
            },
            {
                quote: "Végre egy weboldal, ami tényleg működik! A Google első oldalán vagyunk, és folyamatosan jönnek az új ügyfelek.",
                name: "Szilágyi Réka",
                role: "Kozmetikus",
                rating: 5
            },
            {
                quote: "A webshopunk teljesen átalakult, modern lett és gyors. A rendelések száma megháromszorozódott az új oldal óta. Már egész Magyarországról jönnek a vásárlók!",
                name: "Horváth Bence",
                role: "Motor alkatrész webáruház tulajdonos",
                rating: 5
            }
        ],
        en: [
            {
                quote: "They finished much faster than I expected. Easy to reach if I have any questions. I had to make changes several times, they always helped quickly. Very satisfied!",
                name: "Tímea Bodnár",
                role: "Dentist",
                rating: 5
            },
            {
                quote: "I got a clear, beautiful website, exactly what I imagined. Communication was professional throughout, and they really paid attention to details. Thank you!",
                name: "Botond Varga",
                role: "Hair salon owner",
                rating: 5
            },
            {
                quote: "Finally a website that actually works! We're on the first page of Google, and new clients keep coming.",
                name: "Réka Szilágyi",
                role: "Beautician",
                rating: 5
            },
            {
                quote: "Our webshop was completely transformed, modern and fast. Orders tripled since the new site. Customers now come from all over Hungary!",
                name: "Bence Horváth",
                role: "Motor parts webshop owner",
                rating: 5
            }
        ]
    };

    const currentTestimonials = testimonials[language] || testimonials.hu;

    // Use a long list to simulate plenty of content (6x duplication)
    const items = Array(6).fill(currentTestimonials).flat();

    const scroll = (direction: 'left' | 'right') => {
        if (!trackRef.current) return;
        const container = trackRef.current;

        const isMobile = window.innerWidth < 768;
        const cardWidth = isMobile ? 300 : 400;
        const gap = 12; // gap-3 is 0.75rem = 12px
        const scrollAmount = cardWidth + gap;

        // Calculate current index based on scroll position to align perfectly
        const currentIndex = Math.round(container.scrollLeft / scrollAmount);

        let targetIndex;
        if (direction === 'right') {
            targetIndex = currentIndex + 1;
        } else {
            targetIndex = currentIndex - 1;
        }

        // Loop logic for manual scrolling
        const maxIndex = items.length - 1;

        if (targetIndex > maxIndex) {
            // Loop back to start smoothly
            targetIndex = 0;
            container.scrollTo({ left: 0, behavior: 'smooth' });
            return;
        }

        if (targetIndex < 0) {
            // Loop to end smoothly
            targetIndex = maxIndex;
            container.scrollTo({ left: maxIndex * scrollAmount, behavior: 'smooth' });
            return;
        }

        const targetScroll = targetIndex * scrollAmount;

        container.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });
    };

    // Auto-scroll functionality
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovering && trackRef.current) {
                const container = trackRef.current;
                const maxScroll = container.scrollWidth - container.clientWidth;

                // If we are at the very end, jump to start
                if (Math.abs(container.scrollLeft - maxScroll) < 5) {
                    container.scrollTo({ left: 0, behavior: "smooth" }); // Rewind to start
                } else {
                    scroll('right');
                }
            }
        }, 4000); // 4 seconds interval

        return () => clearInterval(interval);
    }, [isHovering]);

    return (
        <Section id="velemenyek" className="section-bg-mixed relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-neonBlue/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neonPurple/10 rounded-full blur-[80px] pointer-events-none" />

            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 md:mb-16"
                >
                    <div className="inline-flex items-center gap-2 text-neonBlue font-mono text-sm mb-4 tracking-wider">
                        <span>&lt;</span>
                        <span>REVIEWS</span>
                        <span>/&gt;</span>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-bold text-white font-display">
                        {language === 'hu' ? 'Mit mondanak rólunk' : 'What our clients'}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">
                            {language === 'hu' ? ' az ügyfeleink?' : ' say about us?'}
                        </span>
                    </h2>

                    {/* Navigation Arrows - Desktop (Centered below title) */}
                    <div className="hidden md:flex justify-center gap-4 mt-6">
                        <button
                            onClick={() => scroll('left')}
                            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group z-20"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group z-20"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
                        </button>
                    </div>
                </motion.div>

            </Container>

            {/* Scrolling Carousel Container */}
            <div
                className="relative w-full mt-4"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onTouchStart={() => setIsHovering(true)}
                onTouchEnd={() => setIsHovering(false)}
            >
                {/* Gradient Masks for fade effect at edges */}
                <div className="absolute left-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-r from-[#050510] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-l from-[#050510] to-transparent z-10 pointer-events-none" />

                {/* Mobile Navigation Arrows - Overlay on edges */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/50 border border-white/20 text-white backdrop-blur-sm md:hidden"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/50 border border-white/20 text-white backdrop-blur-sm md:hidden"
                    aria-label="Next testimonial"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>

                {/* Scrollable Track - Replaces CSS animation with native scroll */}
                <div
                    ref={trackRef}
                    className="flex gap-3 py-4 md:py-8 w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                    {items.map((testimonial, index) => (
                        <div
                            key={index}
                            className="w-[300px] md:w-[400px] shrink-0 group relative cursor-pointer snap-center select-none"
                        >
                            {/* Gradient border effect */}
                            <div className="absolute -inset-[1px] bg-gradient-to-r from-neonBlue/50 via-neonPurple/50 to-neonBlue/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                            <div className="relative bg-[#0a0a18] border border-white/10 rounded-2xl p-8 h-full flex flex-col justify-between group-hover:border-transparent transition-all duration-500">
                                {/* Quote icon */}
                                <div className="absolute -top-4 -left-2 w-10 h-10 bg-gradient-to-br from-neonBlue to-neonPurple rounded-xl flex items-center justify-center shadow-lg shadow-neonPurple/20">
                                    <Quote size={18} className="text-white" />
                                </div>

                                <div>
                                    {/* Stars */}
                                    <div className="flex gap-1 mb-4 ml-8">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <p className="text-white/90 text-base leading-relaxed mb-6 italic">
                                        "{testimonial.quote}"
                                    </p>
                                </div>

                                {/* Author */}
                                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neonBlue to-neonPurple p-[2px] shrink-0">
                                        <div className="w-full h-full rounded-full bg-[#0a0a18] flex items-center justify-center">
                                            <span className="text-white font-bold text-sm">
                                                {testimonial.name.charAt(0)}
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold text-base">{testimonial.name}</div>
                                        <div className="text-neonBlue/80 text-xs font-mono">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </Section>
    );
};
