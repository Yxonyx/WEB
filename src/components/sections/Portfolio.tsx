import { useRef, useState, useEffect } from 'react';
import { Container } from '../Container';
import { Section } from '../Section';
import { BracketFrame } from '../ui/BracketFrame';
import { SectionHeader } from '../ui/SectionHeader';
import { motion, type Variants } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 1, y: 0, scale: 1 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }
    }
};

interface Project {
    id: number;
    name: string;
    image?: string;
    type?: 'image' | 'video';
    link?: string;
    isMobile?: boolean;
}

const projects: Project[] = [
    {
        id: 101,
        name: "Milo Drink Márkaoldal",
        image: "/images/ref-frabjous.png",
        type: "image",
        link: "https://frabjous-dodol-5e2640.netlify.app"
    },
    {
        id: 1031,
        name: "VízVillanyFűtés.hu (Mobile)",
        image: "/images/ref-vizvillany-mobile.webp",
        type: "image",
        link: "https://vizvillanyfutes.hu",
        isMobile: true
    },
    {
        id: 1032,
        name: "DemiGod Academy (Mobile)",
        image: "/images/ref-demigod-mobile.webp",
        type: "image",
        link: "https://becomedemigod.com",
        isMobile: true
    },
    {
        id: 1041,
        name: "Ingatlanos Személyes Márka",
        image: "/images/ref-mobile-1.webp",
        type: "image",
        link: "https://schwederbence.hu/",
        isMobile: true
    },
    {
        id: 1042,
        name: "Háziorvosi Mobil Webdesign",
        image: "/images/ref-mobile-2-v2.webp",
        type: "image",
        link: "https://drkaiserattila.hu",
        isMobile: true
    },
    {
        id: 1043,
        name: "Prémium Ingatlan Landing",
        image: "/images/ref-mobile-3.webp",
        type: "image",
        link: "/rottenbiller-static/index.html",
        isMobile: true
    },
    {
        id: 1021,
        name: "Urban Streetwear Shop (Mobile)",
        image: "/images/ref-dreamy-mobile.png",
        type: "image",
        link: "https://dreamy-bonbon-8071bb.netlify.app",
        isMobile: true
    },
    {
        id: 1011,
        name: "Milo Drink Márkaoldal (Mobile)",
        image: "/images/ref-frabjous-mobile.png",
        type: "image",
        link: "https://frabjous-dodol-5e2640.netlify.app",
        isMobile: true
    },
    {
        id: 102,
        name: "Urban Streetwear Shop",
        image: "/images/ref-dreamy.png",
        type: "image",
        link: "https://dreamy-bonbon-8071bb.netlify.app"
    },
    {
        id: 103,
        name: "DiagnoCare Egészségügy",
        image: "/images/ref-loquacious.png",
        type: "image",
        link: "https://loquacious-pika-7aea72.netlify.app"
    },
    { id: 1, name: "VízVillanyFűtés Szakember Kereső", image: "/images/ref-vizvillany-pc.webp", type: "image", link: "https://vizvillanyfutes.hu" },
    { id: 2, name: "Háziorvosi Praxis Weboldal", image: "/images/portfolio-2.webp", type: "image", link: "https://drkaiserattila.hu" },
    { id: 3, name: "DemiGod Academy", image: "/images/ref-demigod-pc.webp", type: "image", link: "https://becomedemigod.com" },
    { id: 4, name: "Karaván & Lakókocsi Értékesítés", image: "/images/portfolio-karavan.webp", type: "image" },
    { id: 5, name: "Prémium Ingatlan Landing", image: "/images/portfolio-ingatlan.webp", type: "image", link: "/rottenbiller-static/index.html" },
    { id: 6, name: "Ajándék Webshop", image: "/images/portfolio-projekt6.webp", type: "image" }
];

const ProjectCard = ({ project }: { project: Project }) => {
    if (project.isMobile) {
        return (
            <div className="group cursor-pointer h-full flex flex-col items-center">
                <div className="relative w-full max-w-[200px] lg:max-w-[220px] aspect-[9/18] rounded-[1.75rem] overflow-hidden shadow-2xl border-[3px] border-white/60 bg-white/15 transition-transform duration-500 group-hover:scale-105 mb-3">
                    <img
                        src={project.image}
                        alt={`${project.name} Mobile`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                    {/* Phone Shine */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                </div>

                <div className="flex flex-col items-center w-full max-w-[220px] text-center">
                    <h3 className="text-[15px] lg:text-base font-bold text-white group-hover:text-[#FFF2C6] transition-colors leading-tight">{project.name.replace(' (Mobile)', '')}</h3>
                    <span className="text-[10px] font-mono font-bold text-[#FFF2C6] border border-white/35 px-2 py-0.5 rounded mt-1.5 bg-white/10 tracking-wider uppercase">Referencia</span>
                </div>
            </div>
        );
    }

    return (
        <BracketFrame className="group cursor-pointer hover:border-white/60 transition-colors h-full flex flex-col !p-3 sm:!p-4">
            <div className="aspect-video bg-white/12 rounded-lg mb-4 relative overflow-hidden group-hover:shadow-lg transition-all flex items-center justify-center border border-white/20">
                {project.image ? (
                    <>
                        {project.type === 'video' ? (
                            <video
                                src={project.image}
                                width={800}
                                height={600}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        ) : (
                            <img
                                src={project.image}
                                alt={project.name}
                                width={800}
                                height={600}
                                loading="lazy"
                                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </>
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-muted2 font-mono text-base group-hover:bg-black/50 transition-colors">
                        project_thumbnail_{project.id}.jpg
                    </div>
                )}
            </div>

            <div className="flex justify-between items-center mb-2 mt-auto">
                <h3 className="text-lg font-bold text-white group-hover:text-[#FFF2C6] transition-colors">{project.name}</h3>
                <span className="text-[10px] font-mono font-bold text-[#FFF2C6] border border-white/35 px-2 py-0.5 rounded bg-white/10 tracking-wider uppercase">Referencia</span>
            </div>
            <div className="h-1 w-12 bg-white/18 group-hover:w-full group-hover:bg-[#FFD66A]/70 transition-all duration-500" />
        </BracketFrame>
    );
};

export const Portfolio = () => {
    const { t } = useLanguage();
    const mobileTrackRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isCarouselInView, setIsCarouselInView] = useState(false);

    const mobileProjectsRaw = projects.filter(p => p.isMobile);
    // Duplicate items for infinite scroll effect (3 items * 4 = 12 items)
    const mobileProjects = Array(4).fill(mobileProjectsRaw).flat();

    const desktopProjects = projects.filter(p => !p.isMobile);

    const centerCard = (
        container: HTMLElement,
        card: HTMLElement,
        behavior: ScrollBehavior = 'smooth',
    ) => {
        const targetLeft = card.offsetLeft - (container.clientWidth - card.offsetWidth) / 2;
        container.scrollTo({ left: Math.max(0, targetLeft), behavior });
    };

    const scrollMobile = (direction: 'left' | 'right') => {
        const container = mobileTrackRef.current;
        if (!container) return;

        const cards = Array.from(container.children) as HTMLElement[];
        if (cards.length === 0) return;

        const center = container.scrollLeft + container.clientWidth / 2;
        let activeIndex = 0;
        let bestDistance = Infinity;

        cards.forEach((card, index) => {
            const cardCenter = card.offsetLeft + card.offsetWidth / 2;
            const distance = Math.abs(center - cardCenter);
            if (distance < bestDistance) {
                bestDistance = distance;
                activeIndex = index;
            }
        });

        let targetIndex = direction === 'right' ? activeIndex + 1 : activeIndex - 1;
        if (targetIndex >= cards.length) targetIndex = 0;
        if (targetIndex < 0) targetIndex = cards.length - 1;

        centerCard(container, cards[targetIndex]);
    };

    useEffect(() => {
        const node = carouselRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsCarouselInView(entry.isIntersecting),
            { threshold: 0.15 },
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    // Initialize scroll position to the start of the second loop for infinite scroll illusion
    useEffect(() => {
        const container = mobileTrackRef.current;
        if (!container) return;

        const cards = Array.from(container.children) as HTMLElement[];
        const startIndex = mobileProjectsRaw.length;
        if (cards[startIndex]) {
            centerCard(container, cards[startIndex], 'auto');
        }
    }, [mobileProjectsRaw.length]);

    useEffect(() => {
        if (!isCarouselInView) return;

        const interval = setInterval(() => {
            if (!isHovering && mobileTrackRef.current) {
                const container = mobileTrackRef.current;
                const maxScroll = container.scrollWidth - container.clientWidth;
                if (Math.abs(container.scrollLeft - maxScroll) < 5) {
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scrollMobile('right');
                }
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [isCarouselInView, isHovering]);

    return (
        <Section id="referenciak" className="overflow-hidden !pb-4 sm:!pb-6 lg:!pb-24" withOrbs withMeshGradient>
            <Container>
                <SectionHeader
                    number="06"
                    eyebrow="Munkáink"
                    title={t('portfolio.title') as string}
                    subtitle={t('portfolio.subtitle') as string}
                    align="center"
                    className="mb-10"
                />

                {/* Mobile Projects Section */}
                {mobileProjectsRaw.length > 0 && (
                    <>
                        {/* Desktop View: Static Centered Row (LG and up) */}
                        <motion.div
                            className="hidden lg:flex justify-center gap-10 mb-20"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={containerVariants}
                        >
                            {mobileProjectsRaw.map((project) => (
                                <motion.div key={project.id} variants={itemVariants} className="h-full">
                                    {project.link ? (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                                            <ProjectCard project={project} />
                                        </a>
                                    ) : (
                                        <div className="h-full">
                                            <ProjectCard project={project} />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Mobile/Tablet View: Carousel (Below LG) */}
                        <div
                            ref={carouselRef}
                            className="relative isolate -mx-4 mb-8 w-[calc(100%+2rem)] sm:-mx-6 sm:w-[calc(100%+3rem)] lg:hidden"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                            onTouchStart={() => setIsHovering(true)}
                            onTouchEnd={() => setIsHovering(false)}
                        >
                            <button
                                type="button"
                                onClick={() => scrollMobile('left')}
                                className="pointer-events-auto absolute left-1 top-1/2 z-50 -translate-y-1/2 rounded-full border border-white/45 bg-[#0E7CDC]/75 p-2.5 text-white shadow-[0_8px_24px_rgba(0,70,140,0.4)] backdrop-blur-sm transition-colors hover:bg-[#0E7CDC]/90"
                                aria-label="Previous project"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </button>
                            <button
                                type="button"
                                onClick={() => scrollMobile('right')}
                                className="pointer-events-auto absolute right-1 top-1/2 z-50 -translate-y-1/2 rounded-full border border-white/45 bg-[#0E7CDC]/75 p-2.5 text-white shadow-[0_8px_24px_rgba(0,70,140,0.4)] backdrop-blur-sm transition-colors hover:bg-[#0E7CDC]/90"
                                aria-label="Next project"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </button>

                            <div
                                ref={mobileTrackRef}
                                className="flex gap-6 py-6 w-full overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                                style={{ paddingLeft: 'calc(50vw - 100px)', paddingRight: 'calc(50vw - 100px)' }}
                            >
                                {mobileProjects.map((project, index) => (
                                    <motion.div
                                        key={`${project.id}-mob-${index}`}
                                        variants={itemVariants}
                                        className="shrink-0 w-[200px] snap-center flex justify-center"
                                    >
                                        {project.link ? (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                                                <ProjectCard project={project} />
                                            </a>
                                        ) : (
                                            <div className="h-full">
                                                <ProjectCard project={project} />
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </>
                )}

                {/* Standard Desktop/Grid Projects (Hidden on Mobile) */}
                <motion.div
                    className="hidden lg:grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                >
                    {desktopProjects.map((project) => (
                        <motion.div key={project.id} variants={itemVariants} className="h-full">
                            {project.link ? (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                                    <ProjectCard project={project} />
                                </a>
                            ) : (
                                <div className="h-full">
                                    <ProjectCard project={project} />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </Section>
    );
};
