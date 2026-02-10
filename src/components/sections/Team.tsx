import { Container } from '../Container';
import { Section } from '../Section';
import { motion, type Variants } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
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
            image: "/images/vlaszaty soma.webp",
            phone: "+36 70 330 4445",
            skills: [t('team.skills.coord'), t('team.skills.client'), t('team.skills.deadline')]
        },
        {
            id: "BENI",
            name: "Szappanos Benedek",
            role: t('team.roles.FRONTEND_DEV'),
            image: "/images/beni.webp",
            skills: [t('team.skills.uiux'), t('team.skills.reacts'), t('team.skills.resp')]
        },
        {
            id: "JONI",
            name: "Kaiser Jonatán",
            role: t('team.roles.DEVELOPER'),
            image: "/images/kaiser-jonatan.webp",
            skills: [t('team.skills.arch'), t('team.skills.frontend'), t('team.skills.backend')]
        }
    ];

    return (
        <Section id="csapat" className="bg-gradient-to-b from-surface/30 to-bg">
            <Container>
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
                            {/* Terminal Card */}
                            <div className="relative bg-surface2/60 backdrop-blur-sm border border-white/10 rounded-lg h-full flex flex-col">
                                {/* Corner Brackets - Top Right */}
                                <div className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2 border-neonPurple" />
                                {/* Corner Brackets - Bottom Left */}
                                <div className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2 border-neonPurple" />
                                {/* Header Bar */}
                                <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-black/30">
                                    <span className="font-mono text-sm text-muted2">ID: {member.id}</span>
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
                                        />
                                    </div>

                                    {/* Name */}
                                    <h3 className="text-xl lg:text-2xl font-bold text-neonBlue mb-2 font-mono">
                                        &gt; {member.name}
                                    </h3>

                                    {/* Role */}
                                    <p className="text-sm font-mono text-muted uppercase tracking-wider mb-4">
                                        ROLE: <span className="text-white">{member.role}</span>
                                    </p>

                                    {/* Phone (if available) */}
                                    {member.phone && (
                                        <a
                                            href={`tel:${member.phone.replace(/\s/g, '')}`}
                                            className="inline-block mb-4 px-3 py-1.5 rounded border border-white/20 bg-black/40 text-white font-mono text-base hover:border-neonBlue/50 hover:text-neonBlue transition-colors"
                                        >
                                            {member.phone}
                                        </a>
                                    )}

                                    {/* Skills as checkboxes */}
                                    <ul className="space-y-2 font-mono text-base">
                                        {member.skills.map((skill, j) => (
                                            <li key={j} className="flex items-center gap-2 text-muted">
                                                <span className="text-neonBlue">[x]</span>
                                                <span>{skill}</span>
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


