import { Container } from '../Container';
import { Section } from '../Section';
import { motion, type Variants } from 'framer-motion';
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
    const panelFrame =
        'relative overflow-hidden rounded-[1.65rem] border border-white/40 bg-[linear-gradient(145deg,rgba(4,10,20,0.92)_0%,rgba(5,42,86,0.88)_58%,rgba(7,90,168,0.68)_100%)] text-white shadow-[0_26px_74px_-30px_rgba(0,20,58,0.82),inset_0_1px_0_rgba(255,255,255,0.36),inset_0_0_38px_rgba(83,189,255,0.10)]';
    const cornerFrame =
        'pointer-events-none absolute h-7 w-7 border-white/55';

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
        <Section
            id="csapat"
            className="relative overflow-hidden bg-transparent"
            background={
                <>
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,42,86,0.24)_0%,rgba(3,20,48,0.18)_100%)]" />
                    <div className="pointer-events-none absolute inset-0 opacity-[0.13] bg-[linear-gradient(90deg,rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.22)_1px,transparent_1px)] bg-[size:84px_84px]" />
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                </>
            }
        >
            <Container className="relative z-[2]">
                <motion.div
                    className={`${panelFrame} mb-14 max-w-3xl mx-auto px-6 py-8 text-center sm:px-10 sm:py-10`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={containerVariants}
                >
                    <span className={`${cornerFrame} left-5 top-5 border-l border-t`} />
                    <span className={`${cornerFrame} right-5 top-5 border-r border-t`} />
                    <span className={`${cornerFrame} bottom-5 left-5 border-b border-l`} />
                    <span className={`${cornerFrame} bottom-5 right-5 border-b border-r`} />
                    <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/75 to-transparent" />

                    <motion.span
                        variants={itemVariants}
                        className="relative z-[1] inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#FFE08A] mb-4"
                    >
                        <span className="w-6 h-px bg-white/55" />
                        {t('team.philosophy.tag') || 'Filozófiánk'}
                        <span className="w-6 h-px bg-white/55" />
                    </motion.span>

                    <motion.p
                        variants={itemVariants}
                        className="relative z-[1] text-white/95 text-[15px] sm:text-lg leading-relaxed"
                    >
                        {(t('team.philosophy.content') as unknown as Array<{ bold: string; text: string }>).map((item, i) => (
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
                    className="mb-10 max-w-3xl [&_p]:text-white/95"
                />

                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={containerVariants}
                >
                    {teamMembers.map((member, i) => (
                        <motion.div key={i} variants={itemVariants}>
                            <Card
                                as="article"
                                className="h-full !p-5 sm:!p-6 bg-[linear-gradient(145deg,rgba(4,10,20,0.92)_0%,rgba(5,42,86,0.88)_58%,rgba(7,90,168,0.68)_100%)] !border-white/[0.42] text-white shadow-[0_24px_68px_-30px_rgba(0,20,58,0.82),inset_0_1px_0_rgba(255,255,255,0.34),inset_0_0_34px_rgba(83,189,255,0.08)] hover:!border-white/70 hover:shadow-[0_30px_82px_-32px_rgba(0,30,80,0.84),inset_0_1px_0_rgba(255,255,255,0.50),inset_0_0_44px_rgba(83,189,255,0.12)]"
                                itemScope
                                itemType="https://schema.org/Person"
                            >
                                <span className="pointer-events-none absolute right-5 top-5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
                                    {member.id}
                                </span>
                                <span className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 border-b border-r border-white/35" />

                                <div className="relative z-[1] flex items-center gap-3 mb-4 pr-12">
                                    <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/45 bg-[#031326] shrink-0 shadow-[0_10px_28px_-14px_rgba(0,12,36,0.70)]">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            loading="lazy"
                                            width="56"
                                            height="56"
                                            className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-500"
                                            itemProp="image"
                                        />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-[15px] sm:text-base font-semibold leading-tight text-white truncate" itemProp="name">
                                            {member.name}
                                        </h3>
                                        <div className="text-[#FFE08A] font-mono text-[10px] uppercase tracking-[0.14em] mt-0.5">
                                            <span itemProp="jobTitle">{member.role}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="relative z-[1] text-[12px] text-white/85 italic mb-4 line-clamp-2" itemProp="knowsAbout">
                                    {member.qualification}
                                </p>

                                <ul className="relative z-[1] flex flex-wrap gap-1.5 mb-4">
                                    {member.skills.map((skill, j) => (
                                        <li
                                            key={j}
                                            className="inline-flex items-center gap-1.5 text-[11px] text-white/95 px-2.5 py-1 rounded-full bg-[#063F84]/[0.72] border border-white/[0.28] shadow-[inset_0_1px_0_rgba(255,255,255,0.24)]"
                                        >
                                            <Check className="w-2.5 h-2.5 text-[#FFF2C6] shrink-0" />
                                            <span itemProp="hasCredential">{skill}</span>
                                        </li>
                                    ))}
                                </ul>

                                {member.phone && (
                                    <a
                                        href={`tel:${member.phone.replace(/\s/g, '')}`}
                                        className="relative z-[1] inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/[0.12] px-3 py-1.5 text-[12px] text-white/95 hover:bg-white/[0.18] hover:text-white transition-colors font-mono"
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
