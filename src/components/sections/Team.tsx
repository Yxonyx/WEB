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
        <Section id="csapat" className="bg-black relative overflow-hidden">
            <ParticleNetwork />
            <Container className="relative z-[2]">
                <motion.div
                    className="mb-12 text-center max-w-3xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={containerVariants}
                >
                    <motion.span
                        variants={itemVariants}
                        className="font-mono text-xs sm:text-sm uppercase tracking-[0.18em] text-white/50 mb-4 block"
                    >
                        {t('team.philosophy.tag') || 'Filozófiánk'}
                    </motion.span>

                    <motion.p
                        variants={itemVariants}
                        className="text-white/75 text-base sm:text-lg leading-relaxed"
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
                    className="grid md:grid-cols-3 gap-5 lg:gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={containerVariants}
                >
                    {teamMembers.map((member, i) => (
                        <motion.div key={i} variants={itemVariants}>
                            <Card
                                as="article"
                                className="h-full flex flex-col"
                                {...({ itemScope: true, itemType: 'https://schema.org/Person' } as any)}
                            >
                                <div className="flex items-start justify-between mb-5">
                                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl overflow-hidden border border-white/10">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            loading="lazy"
                                            width="80"
                                            height="80"
                                            className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-500"
                                            itemProp="image"
                                        />
                                    </div>
                                    <span className="font-mono text-[10px] text-white/40 tracking-widest">{member.id}</span>
                                </div>

                                <h3 className="text-lg lg:text-xl font-semibold mb-1" itemProp="name">
                                    {member.name}
                                </h3>

                                <div className="text-neonBlue/85 font-mono text-[11px] uppercase tracking-[0.15em] mb-1.5">
                                    <span itemProp="jobTitle">{member.role}</span>
                                </div>

                                <p className="text-xs text-white/50 italic mb-5" itemProp="knowsAbout">
                                    {member.qualification}
                                </p>

                                {member.phone && (
                                    <a
                                        href={`tel:${member.phone.replace(/\s/g, '')}`}
                                        className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/12 text-white/85 text-[13px] hover:bg-neonBlue/10 hover:border-neonBlue/30 hover:text-neonBlue transition-colors w-fit"
                                        itemProp="telephone"
                                    >
                                        <Phone className="w-3 h-3" />
                                        {member.phone}
                                    </a>
                                )}

                                <ul className="space-y-2 mt-auto">
                                    {member.skills.map((skill, j) => (
                                        <li
                                            key={j}
                                            className="flex items-center gap-2.5 text-[14px] text-white/75"
                                        >
                                            <Check className="w-3.5 h-3.5 text-neonBlue shrink-0" />
                                            <span itemProp="hasCredential">{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </Section>
    );
};
