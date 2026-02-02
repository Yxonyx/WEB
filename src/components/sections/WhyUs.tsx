import { Zap, Search, Bot, Database, Shield } from 'lucide-react';
import { BracketFrame } from '../ui/BracketFrame';

const features = [
    {
        icon: Zap,
        title: "Reszponzív webdizájn",
        desc: "Mobilbarát és gyors megoldások – mert a lassú oldalról elmennek."
    },
    {
        icon: Search,
        title: "Keresőbarát felépítés",
        desc: "Mert hiába szép, ha nem találnak rá."
    },
    {
        icon: Bot,
        title: "AI-találhatóság",
        desc: "Mert egyre többen nem csak keresnek, hanem kérdeznek."
    },
    {
        icon: Database,
        title: "Admin felület",
        desc: "Hogy később te is tudd frissíteni a tartalmat.",
        sub: "(ha kéred)"
    },
    {
        icon: Shield,
        title: "Karbantartás és biztonság",
        desc: "Hogy hosszú távon is stabil maradjon."
    }
];

export function WhyUs() {
    return (
        <section id="miert-minket" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Miért <span className="text-neonBlue">minket</span> válassz?
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto font-display font-light">
                        A weboldal nem dísz. A weboldal a <span className="text-white font-bold decoration-neonBlue underline underline-offset-4">döntés helye</span>.
                        Mi úgy építjük meg, hogy megtalálják, megértsék, és válasszanak.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="h-full">
                            <BracketFrame className="h-full p-8 hover:bg-neonBlue/5 transition-colors group">
                                <div className="w-12 h-12 rounded-lg bg-neonBlue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="w-6 h-6 text-neonBlue" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">
                                    {feature.title}
                                    {feature.sub && <span className="text-sm font-normal text-gray-400 ml-2">{feature.sub}</span>}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </BracketFrame>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


