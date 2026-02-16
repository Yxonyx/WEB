import { Container } from '../Container';
import { Section } from '../Section';
import { motion, type Variants } from 'framer-motion';
import { ParticleNetwork } from '../ui/ParticleNetwork';

import { useLanguage } from '../../context/LanguageContext';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 }
    }
};


interface TeamMember {
    id: string;
    name: string;
    role: string;
    qualification: string;
    image: string;
    phone?: string;
    skills: string[];
}

export const Team = () => {
    const { t } = useLanguage();

    const teamMembers: TeamMember[] = [
        {
            id: "SOMA",
            name: "Vlaszaty Soma",
            role: t('team.roles.STRATEGIST'),
            qualification: t('team.qualifications.SOMA'),
            image: "/images/vlaszaty soma.webp",
            phone: "+36 70 330 4445",
            skills: [t('team.skills.coord'), t('team.skills.client'), t('team.skills.deadline')]
        },
        {
            id: "BENI",
            name: "Szappanos Benedek",
            role: t('team.roles.FRONTEND_DEV'),
            qualification: t('team.qualifications.BENI'),
            image: "/images/beni.webp",
            skills: [t('team.skills.uiux'), t('team.skills.reacts'), t('team.skills.resp')]
        },
        {
            id: "JONI",
            name: "Kaiser Jonatán",
            role: t('team.roles.DEVELOPER'),
            qualification: t('team.qualifications.JONI'),
            image: "/images/kaiser-jonatan-v2.webp",
            skills: [t('team.skills.arch'), t('team.skills.frontend'), t('team.skills.backend')]
        }
    ];

    return (
        <Section
            id="csapat"
            className="bg-gradient-to-b from-surface2/60 via-surface/40 to-bg relative overflow-hidden"
        >
            <ParticleNetwork />
            <Container className="relative z-[2]">
                {/* Philosophy */}
                <motion.div
                    className="mb-14 text-center max-w-3xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                >
                    <motion.h3
                        variants={itemVariants}
                        className="text-lg font-mono text-neonPurple uppercase tracking-widest mb-6"
                    >
                        {t('team.philosophy.tag') || '// Filozófiánk'}
                    </motion.h3>

                    <motion.p
                        variants={itemVariants}
                        className="text-white/80 text-base sm:text-lg leading-relaxed sm:leading-loose"
                    >
                        {(t('team.philosophy.content') as unknown as any[]).map((item, i) => {
                            const colors = ["text-white", "text-neonBlue", "text-neonPurple", "text-white", "text-neonBlue"];
                            return (
                                <span key={i}>
                                    <span className={`${colors[i % colors.length]} font-semibold`}>{item.bold}</span>
                                    {item.text}
                                </span>
                            );
                        })}
                    </motion.p>
                </motion.div>

                {/* Team header */}
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <span className="text-sm font-mono text-neonBlue uppercase tracking-widest mb-3 block">
                        {t('team.tag') || '// Csapat'}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4">
                        {t('team.title') || 'Akik mögötted állnak'}
                    </h2>
                    <p className="text-white/80 text-lg font-medium max-w-2xl mx-auto">
                        {t('team.subtitle') || 'Fiatal, tapasztalt csapat — akik valóban törődnek a projekted sikerével.'}
                    </p>
                </motion.div>

                {/* Team cards */}
                <motion.div
                    className="grid md:grid-cols-3 gap-6 lg:gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                >
                    {teamMembers.map((member, i) => (
                        <motion.div
                            key={i}
                            className="relative group h-full"
                            variants={itemVariants}
                        >
                            {/* Terminal Card replaced with Glass Card */}
                            {/* Terminal Card - Tuned Up */}
                            <div
                                className="relative bg-black/20 backdrop-blur-md border border-white/10 rounded-xl h-full flex flex-col hover:border-neonBlue/40 transition-all duration-500 group-hover:shadow-[0_0_30px_-10px_rgba(79,138,255,0.15)] touch-pan-y"
                                itemScope
                                itemType="https://schema.org/Person"
                            >
                                {/* Corner Brackets - All 4 corners, Blue */}
                                <div className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-neonBlue rounded-tl-lg" />
                                <div className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-neonBlue rounded-tr-lg" />
                                <div className="absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2 border-neonBlue rounded-bl-lg" />
                                <div className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-neonBlue rounded-br-lg" />

                                {/* Scanline effect (subtle) */}
                                <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(79,138,255,0.03)_50%,transparent_100%)] bg-[length:100%_4px] pointer-events-none" />

                                {/* Header Bar */}
                                <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-black/20">
                                    <span className="font-mono text-xs text-muted2">ID: {member.id}</span>
                                    <div className="w-2 h-2 rounded-full bg-neonBlue animate-pulse" />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Profile Image */}
                                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden mb-4 border border-white/10">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            width="80"
                                            height="80"
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                            itemProp="image"
                                        />
                                    </div>

                                    {/* Name */}
                                    <h3
                                        className="text-xl lg:text-2xl font-bold text-neonBlue mb-2 font-mono"
                                        itemProp="name"
                                    >
                                        &gt; {member.name}
                                    </h3>

                                    {/* Role */}
                                    <p className="text-sm font-mono text-muted uppercase tracking-wider mb-1">
                                        ROLE: <span className="text-white" itemProp="jobTitle">{member.role}</span>
                                    </p>

                                    {/* Qualification */}
                                    <p className="text-xs font-mono text-muted2 italic mb-4" itemProp="knowsAbout">
                                        {member.qualification}
                                    </p>

                                    {/* Phone (if available) */}
                                    {member.phone && (
                                        <a
                                            href={`tel:${member.phone.replace(/\s/g, '')}`}
                                            className="inline-block mb-4 px-3 py-1.5 rounded border border-white/20 bg-black/40 text-white font-mono text-base hover:border-neonBlue/50 hover:text-neonBlue transition-colors"
                                            itemProp="telephone"
                                        >
                                            {member.phone}
                                        </a>
                                    )}

                                    {/* Skills as checkboxes */}
                                    <ul className="space-y-2 font-mono text-base">
                                        {member.skills.map((skill, j) => (
                                            <li key={j} className="flex items-center gap-2 text-muted">
                                                <span className="text-neonBlue">[x]</span>
                                                <span itemProp="hasCredential">{skill}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </Section>
    );
};


