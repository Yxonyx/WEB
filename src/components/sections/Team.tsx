import { Container } from '../Container';
import { Section } from '../Section';
import { motion, type Variants } from 'framer-motion';
import { ParticleNetwork } from '../ui/ParticleNetwork';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';
import { Phone, Check } from 'lucide-react';

import { useLanguage } from '../../context/LanguageContext';

const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
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
            id: 'SOMA',
            name: 'Vlaszaty Soma',
            role: t('team.roles.STRATEGIST'),
            qualification: t('team.qualifications.SOMA'),
            image: '/images/vlaszaty soma.webp',
            phone: '+36 70 330 4445',
            skills: [t('team.skills.coord'), t('team.skills.client'), t('team.skills.deadline')],
        },
        {
            id: 'BENI',
            name: 'Szappanos Benedek',
            role: t('team.roles.FRONTEND_DEV'),
            qualification: t('team.qualifications.BENI'),
            image: '/images/beni.webp',
            skills: [t('team.skills.uiux'), t('team.skills.reacts'), t('team.skills.resp')],
        },
        {
            id: 'JONI',
            name: 'Kaiser Jonatán',
            role: t('team.roles.DEVELOPER'),
            qualification: t('team.qualifications.JONI'),
            image: '/images/kaiser-jonatan-v2.webp',
            skills: [t('team.skills.arch'), t('team.skills.frontend'), t('team.skills.backend')],
        },
    ];

    return (
        <Section id="csapat" className="relative overflow-hidden">
            {/* Ambient warm glow behind team — keeps the section from reading as pure black */}
            <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[120%] h-[420px] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(99,168,255,0.18),transparent_60%)] blur-2xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_bottom_right,rgba(143,125,255,0.14),transparent_55%)]" />
            <ParticleNetwork />
            <Container className="relative z-[2]">
                <motion.div
                    className="mb-14 text-center max-w-3xl mx-auto rounded-3xl border border-white/[0.08] bg-white/[0.025] px-6 py-8 sm:px-10 sm:py-10 lg:backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(8,12,30,0.6)]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={containerVariants}
                >
                    <motion.span
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] text-neonBlue/85 mb-4"
                    >
                        <span className="w-6 h-px bg-neonBlue/50" />
                        {t('team.philosophy.tag') || 'Filozófiánk'}
                        <span className="w-6 h-px bg-neonBlue/50" />
                    </motion.span>

                    <motion.p
                        variants={itemVariants}
                        className="text-white/80 text-[15px] sm:text-lg leading-relaxed"
                    >
                        {(t('team.philosophy.content') as unknown as any[]).map((item, i) => (
                            <span key={i}>
                                <span className="text-white font-semibold">{item.bold}</span>
                                {item.text}
                            </span>
                        ))}
                    </motion.p>
                </motion.div>

                <SectionHeader
                    number="11"
                    eyebrow={t('team.tag') || 'Csapat'}
                    title={t('team.title') || 'Akik mögötted állnak'}
                    subtitle={
                        (t('team.subtitle') || 'Fiatal, tapasztalt csapat — akik valóban törődnek a projekted sikerével.') as string
                    }
                    align="center"
                    className="mb-10"
                />

                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={containerVariants}
                >
                    {teamMembers.map((member, i) => (
                        <motion.div key={i} variants={itemVariants}>
                            <Card
                                as="article"
                                className="h-full !p-4 sm:!p-5"
                                {...({ itemScope: true, itemType: 'https://schema.org/Person' } as any)}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 shrink-0">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            loading="lazy"
                                            width="48"
                                            height="48"
                                            className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-500"
                                            itemProp="image"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-[15px] font-semibold leading-tight truncate" itemProp="name">
                                            {member.name}
                                        </h3>
                                        <div className="text-neonBlue/85 font-mono text-[10px] uppercase tracking-[0.14em] mt-0.5">
                                            <span itemProp="jobTitle">{member.role}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-[11px] text-white/50 italic mb-3 line-clamp-2" itemProp="knowsAbout">
                                    {member.qualification}
                                </p>

                                <ul className="flex flex-wrap gap-1.5 mb-3">
                                    {member.skills.map((skill, j) => (
                                        <li
                                            key={j}
                                            className="inline-flex items-center gap-1 text-[11px] text-white/75 px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08]"
                                        >
                                            <Check className="w-2.5 h-2.5 text-neonBlue shrink-0" />
                                            <span itemProp="hasCredential">{skill}</span>
                                        </li>
                                    ))}
                                </ul>

                                {member.phone && (
                                    <a
                                        href={`tel:${member.phone.replace(/\s/g, '')}`}
                                        className="inline-flex items-center gap-1.5 text-[12px] text-white/80 hover:text-neonBlue transition-colors font-mono"
                                        itemProp="telephone"
                                    >
                                        <Phone className="w-3 h-3" />
                                        {member.phone}
                                    </a>
                                )}
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </Section>
    );
};
