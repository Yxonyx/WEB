import { Section } from '../Section';
import { Container } from '../Container';
import { Star, Quote } from 'lucide-react';
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

    return (
        <Section id="velemenyek" className="section-bg-mixed relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-neonBlue/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neonPurple/10 rounded-full blur-[80px] pointer-events-none" />

            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
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
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {currentTestimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Gradient border effect */}
                            <div className="absolute -inset-[1px] bg-gradient-to-r from-neonBlue/50 via-neonPurple/50 to-neonBlue/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                            <div className="relative bg-[#0a0a18]/90 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full group-hover:border-transparent transition-all duration-500">
                                {/* Quote icon */}
                                <div className="absolute -top-4 -left-2 w-12 h-12 bg-gradient-to-br from-neonBlue to-neonPurple rounded-xl flex items-center justify-center shadow-lg shadow-neonPurple/20">
                                    <Quote size={20} className="text-white" />
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1 mb-6 ml-8">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-white/90 text-lg leading-relaxed mb-8">
                                    "{testimonial.quote}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neonBlue to-neonPurple p-[2px]">
                                        <div className="w-full h-full rounded-full bg-[#0a0a18] flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">
                                                {testimonial.name.charAt(0)}
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold text-lg">{testimonial.name}</div>
                                        <div className="text-neonBlue/80 text-sm font-mono">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};
