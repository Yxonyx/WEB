import { useRef, useState, useEffect } from 'react';
import { Container } from '../Container';
import { Section } from '../Section';
import { BracketFrame } from '../ui/BracketFrame';
import { motion, type Variants } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 0, scale: 1 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }
    }
};

const projects = [
    {
        id: 101,
        name: "Milo Drink Márkaoldal",
        image: "/images/ref-frabjous.png",
        type: "image",
        link: "https://frabjous-dodol-5e2640.netlify.app"
    },
    {
        id: 1031,
        name: "DiagnoCare Egészségügy (Mobile)",
        image: "/images/ref-loquacious-mobile.png",
        type: "image",
        link: "https://loquacious-pika-7aea72.netlify.app",
        isMobile: true
    },
    {
        id: 1041,
        name: "Ingatlanos Személyes Márka",
        image: "/images/ref-mobile-1.webp",
        type: "image",
        link: "#",
        isMobile: true
    },
    {
        id: 1042,
        name: "Háziorvosi Mobil Webdesign",
        image: "/images/ref-mobile-2.webp",
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
    { id: 1, name: "Sportfogadási Portál & Tippadó", image: "/images/projekt1.webp", type: "image" },
    { id: 2, name: "Háziorvosi Praxis Weboldal", image: "/images/portfolio-2.webp", type: "image", link: "https://drkaiserattila.hu" },
    { id: 3, name: "Orvosi Tetoválás & Esztétika", image: "/images/portfolio3.webp", type: "image" },
    { id: 4, name: "Karaván & Lakókocsi Értékesítés", image: "/images/portfolio-karavan.webp", type: "image" },
    { id: 5, name: "Prémium Ingatlan Landing", image: "/images/portfolio-ingatlan.webp", type: "image", link: "/rottenbiller-static/index.html" },
    { id: 6, name: "Ajándék Webshop", image: "/images/portfolio-projekt6.webp", type: "image" }
];

const ProjectCard = ({ project }: { project: any }) => {
    if (project.isMobile) {
        return (
            <div className="group cursor-pointer h-full flex flex-col items-center">
                <div className="relative w-full max-w-[240px] aspect-[9/19] rounded-[2rem] overflow-hidden shadow-2xl border-[4px] border-[#1a1a1a] bg-black transition-transform duration-500 group-hover:scale-105 group-hover:shadow-neonBlue/20 mb-4">
                    <img
                        src={project.image}
                        alt={`${project.name} Mobile`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                    {/* Phone Shine */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                </div>

                <div className="flex flex-col items-center w-full max-w-[240px] text-center">
                    <h3 className="text-lg font-bold text-white group-hover:text-neonBlue transition-colors">{project.name.replace(' (Mobile)', '')}</h3>
                    <span className="text-[10px] font-mono font-bold text-neonBlue border border-neonBlue/30 px-2 py-0.5 rounded mt-1 bg-neonBlue/5 tracking-wider uppercase">Referencia</span>
                </div>
            </div>
        );
    }

    return (
        <BracketFrame className="group cursor-pointer hover:border-neonBlue/30 transition-colors h-full flex flex-col !p-3 sm:!p-4">
            <div className="aspect-video bg-black/40 rounded-lg mb-4 relative overflow-hidden group-hover:shadow-lg group-hover:shadow-neonBlue/20 transition-all flex items-center justify-center">
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
                <h3 className="text-lg font-bold text-white group-hover:text-neonBlue transition-colors">{project.name}</h3>
                <span className="text-[10px] font-mono font-bold text-neonBlue border border-neonBlue/30 px-2 py-0.5 rounded bg-neonBlue/5 tracking-wider uppercase">Referencia</span>
            </div>
            <div className="h-1 w-12 bg-white/10 group-hover:w-full group-hover:bg-neonBlue/50 transition-all duration-500" />
        </BracketFrame>
    );
};

export const Portfolio = () => {
    const { t } = useLanguage();
    const mobileTrackRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    const mobileProjectsRaw = projects.filter(p => p.isMobile);
    // Duplicate items for infinite scroll effect (3 items * 4 = 12 items)
    const mobileProjects = Array(4).fill(mobileProjectsRaw).flat();

    const desktopProjects = projects.filter(p => !p.isMobile);

    const scrollMobile = (direction: 'left' | 'right') => {
        if (!mobileTrackRef.current) return;
        const container = mobileTrackRef.current;
        const cardWidth = 272; // 240px card + 32px gap
        const scrollAmount = cardWidth;

        const currentIndex = Math.round(container.scrollLeft / scrollAmount);
        let targetIndex = direction === 'right' ? currentIndex + 1 : currentIndex - 1;
        const maxIndex = mobileProjects.length - 1;

        if (targetIndex > maxIndex) {
            targetIndex = 0;
            container.scrollTo({ left: 0, behavior: 'smooth' });
            return;
        }
        if (targetIndex < 0) {
            targetIndex = maxIndex;
            container.scrollTo({ left: maxIndex * scrollAmount, behavior: 'smooth' });
            return;
        }

        container.scrollTo({ left: targetIndex * scrollAmount, behavior: 'smooth' });
    };

    // Initialize scroll position to the start of the second loop for infinite scroll illusion
    useEffect(() => {
        if (mobileTrackRef.current) {
            const cardWidth = 272;
            const initialScroll = mobileProjectsRaw.length * cardWidth;
            mobileTrackRef.current.scrollLeft = initialScroll;
        }
    }, [mobileProjectsRaw.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovering) {
                // Mobile Projects Auto-Scroll
                if (mobileTrackRef.current && mobileTrackRef.current.offsetParent !== null) {
                    const container = mobileTrackRef.current;
                    const maxScroll = container.scrollWidth - container.clientWidth;
                    if (Math.abs(container.scrollLeft - maxScroll) < 5) {
                        container.scrollTo({ left: 0, behavior: "smooth" });
                    } else {
                        scrollMobile('right');
                    }
                }
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [isHovering]);

    return (
        <Section id="referenciak" className="overflow-visible section-bg-mixed" withOrbs withMeshGradient>
            <Container>
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4">{t('portfolio.title')}</h2>
                    <p className="text-white/80 text-lg font-medium max-w-2xl mx-auto">{t('portfolio.subtitle')}</p>
                </motion.div>

                {/* Mobile Projects Section */}
                {mobileProjectsRaw.length > 0 && (
                    <>
                        {/* Desktop View: Static Centered Row (LG and up) */}
                        <motion.div
                            className="hidden lg:flex justify-center gap-8 mb-16"
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
                            className="relative w-full mb-16 lg:hidden"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                            onTouchStart={() => setIsHovering(true)}
                            onTouchEnd={() => setIsHovering(false)}
                        >
                            {/* Navigation Arrows */}
                            <button
                                onClick={() => scrollMobile('left')}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/50 border border-white/20 text-white backdrop-blur-sm hover:bg-white/10 transition-colors"
                                aria-label="Previous project"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={() => scrollMobile('right')}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/50 border border-white/20 text-white backdrop-blur-sm hover:bg-white/10 transition-colors"
                                aria-label="Next project"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            <div
                                ref={mobileTrackRef}
                                className="flex gap-8 py-4 px-4 w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                            >
                                {mobileProjects.map((project, index) => (
                                    <motion.div
                                        key={`${project.id}-mob-${index}`}
                                        variants={itemVariants}
                                        className="shrink-0 snap-center"
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
