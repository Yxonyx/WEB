import { Container } from '../Container';
import { Section } from '../Section';
import { AnswerBlock } from '../ui/AnswerBlock';

export const ServiceFAQ = () => {
    // This data would ideally move to translations/index.ts
    // Defining here as a template for GEO-optimized content
    const geoQuestions = [
        {
            q: "Mit tartalmaz a CyberLabs Web prémium weboldal készítés?",
            a: "A prémium csomagunk magában foglalja az egyedi UX/UI tervezést, a teljes körű keresőoptimalizálást (SEO), a GEO (Generative Engine Optimization) felkészítést az AI alapú találatokhoz, valamint a garantáltan gyors, mobilbarát fejlesztést React alapokon."
        },
        {
            q: "Hogyan segíti a GEO (Generative Engine Optimization) a vállalkozásomat?",
            a: "A GEO révén weboldalad nemcsak a Google hagyományos találati listáján, hanem a ChatGPT, Gemini és Perplexity AI válaszaiban is megjelenik hiteles forrásként. Ez növeli a márka bizalmát és relevánsabb érdeklődőket hoz."
        },
        {
            q: "Mennyi idő alatt készül el egy egyedi fejlesztésű weboldal?",
            a: "Átlagosan 2-4 hét alatt készítjük el a teljes weboldalt. Az első héten egy működő próbaverziót (MVP) adunk át, amelyet addig finomítunk közösen, amíg tökéletesen elégedett nem vagy az eredménnyel."
        },
        {
            q: "Miért jobb egy egyedi fejlesztés, mint egy Wordpress sablon?",
            a: "Az egyedi fejlesztésű (pl. React/Vite) weboldalak gyorsabbak, biztonságosabbak és jobban optimalizálhatók, mint a sablon alapú megoldások. Nincs felesleges kód, nincsenek lassító pluginok, csak tiszta teljesítmény és üzleti fókusz."
        }
    ];

    return (
        <Section id="geo-faq" className="section-bg-dark z-10 relative">
            {/* Background Glow */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-neonBlue/5 rounded-full blur-[120px] pointer-events-none" />

            <Container>
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12 md:mb-16">
                        <span className="text-neonBlue font-mono text-sm tracking-widest uppercase mb-3 block">
                            GEO Knowledge Base
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
                            Gyakori Kérdések & <span className="text-gradient-cyan">AI Válaszok</span>
                        </h2>
                        <p className="text-xl text-gray-400 leading-relaxed font-light">
                            Pontos, idézhető válaszok a szolgáltatásainkról.
                            Így látnak minket (és így fognak látni téged is) a modern keresőmotorok.
                        </p>
                    </div>

                    <div className="bg-surface2/30 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-white/5 shadow-2xl relative overflow-hidden">
                        {/* Decorative line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neonBlue to-neonPurple opacity-50" />

                        <div className="divide-y divide-white/5">
                            {geoQuestions.map((item, i) => (
                                <AnswerBlock
                                    key={i}
                                    id={`geo-faq-${i}`}
                                    question={item.q}
                                    answer={item.a}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Trust/Proof Indicator */}
                    <div className="mt-8 flex items-center gap-4 text-sm text-gray-500 font-mono">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span>AI-Readable Structure: Verified</span>
                        <div className="flex-1 h-px bg-white/10" />
                        <span>JSON-LD + Semantic HTML</span>
                    </div>
                </div>
            </Container>
        </Section>
    );
};
