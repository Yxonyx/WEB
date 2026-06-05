import { Container } from '../Container';
import { Section } from '../Section';
import { motion, type Variants } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { Phone, Check, Mail, Code2 } from 'lucide-react';

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
    firstName: string;
    lastName: string;
    role: string;
    qualification: string;
    image: string;
    skills: string[];
    action: {
        type: 'phone' | 'email' | 'code';
        href?: string;
        label: string;
    };
}

const TechFrameShell = ({
    children,
    size = 'sm',
    className = '',
    innerClassName = '',
}: {
    children: React.ReactNode;
    size?: 'sm' | 'lg';
    className?: string;
    innerClassName?: string;
}) => {
    const isLg = size === 'lg';

    return (
        <div className={`relative p-[2px] ${isLg ? 'rounded-2xl' : 'rounded-xl'} ${className}`}>
            <span
                className={`pointer-events-none absolute inset-0 border border-[#7EC8FF]/75 shadow-[0_0_12px_rgba(126,200,255,0.35)] ${isLg ? 'rounded-2xl shadow-[0_0_18px_rgba(126,200,255,0.38)]' : 'rounded-xl'}`}
            />
            <span
                className={`pointer-events-none absolute border border-[#FFE08A]/65 ${isLg ? 'inset-[5px] rounded-[14px]' : 'inset-[4px] rounded-[8px]'}`}
            />
            <span
                className={`pointer-events-none absolute left-0 top-0 border-l-2 border-t-2 border-[#FFE08A]/80 ${isLg ? 'h-4 w-4' : 'h-3 w-3'}`}
            />
            <span
                className={`pointer-events-none absolute bottom-0 right-0 border-b-2 border-r-2 border-[#7EC8FF]/80 ${isLg ? 'h-4 w-4' : 'h-3 w-3'}`}
            />
            <div className={`relative m-1.5 ${isLg ? 'rounded-[14px]' : 'rounded-[8px]'} ${innerClassName}`}>{children}</div>
        </div>
    );
};

const TeamPhotoFrame = ({ src, alt }: { src: string; alt: string }) => (
    <div className="relative shrink-0">
        <TechFrameShell size="sm" innerClassName="h-[80px] w-[80px] overflow-hidden bg-white/10 sm:h-[84px] sm:w-[84px]">
            <img
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                width={84}
                height={84}
                className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
            />
        </TechFrameShell>
    </div>
);

const actionButtonClass =
    'flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#FFE08A]/80 bg-white/[0.10] text-[#FFE08A] shadow-[0_0_14px_rgba(255,224,139,0.18)] transition-all duration-300 hover:border-[#FFE08A] hover:bg-white/[0.18] hover:text-white sm:h-10 sm:w-10';

const ActionButton = ({ type, href, label }: TeamMember['action']) => {
    const Icon = type === 'phone' ? Phone : type === 'email' ? Mail : Code2;

    if (!href) {
        return (
            <span
                aria-label={label}
                aria-disabled="true"
                title={label}
                className={`${actionButtonClass} cursor-default opacity-40 hover:border-[#FFE08A]/80 hover:bg-white/[0.10] hover:text-[#FFE08A]`}
            >
                <Icon className="h-[17px] w-[17px]" strokeWidth={2.25} />
            </span>
        );
    }

    return (
        <a href={href} aria-label={label} className={actionButtonClass}>
            <Icon className="h-[17px] w-[17px]" strokeWidth={2.25} />
        </a>
    );
};

export const Team = () => {
    const { t } = useLanguage();

    const teamMembers: TeamMember[] = [
        {
            id: 'SOMA',
            firstName: 'Soma',
            lastName: 'Vlaszaty',
            role: t('team.roles.STRATEGIST'),
            qualification: t('team.qualifications.SOMA'),
            image: '/images/vlaszaty soma.webp',
            skills: [t('team.skills.coord'), t('team.skills.client'), t('team.skills.deadline')],
            action: { type: 'phone', href: 'tel:+36703304445', label: 'Telefon' },
        },
        {
            id: 'BENI',
            firstName: 'Benedek',
            lastName: 'Szappanos',
            role: t('team.roles.FRONTEND_DEV'),
            qualification: t('team.qualifications.BENI'),
            image: '/images/beni.webp',
            skills: [t('team.skills.uiux'), t('team.skills.reacts'), t('team.skills.resp')],
            action: { type: 'email', label: 'E-mail' },
        },
        {
            id: 'JONI',
            firstName: 'Jonatán',
            lastName: 'Kaiser',
            role: t('team.roles.DEVELOPER'),
            qualification: t('team.qualifications.JONI'),
            image: '/images/kaiser-jonatan-v2.webp',
            skills: [t('team.skills.arch'), t('team.skills.frontend'), t('team.skills.backend')],
            action: { type: 'email', href: 'mailto:kaiserjonatan911@gmail.com', label: 'E-mail' },
        },
    ];

    return (
        <Section
            id="csapat"
            className="relative overflow-hidden bg-transparent !py-8 sm:!py-10 lg:!py-12 !pb-8 sm:!pb-10"
            background={
                <>
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(14,124,220,0.08)_100%)]" />
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/[0.12] via-white/[0.04] to-transparent" />
                </>
            }
        >
            <Container className="relative z-[2] !max-w-[1520px]">
                <div className="mb-5 grid gap-4 lg:mb-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        variants={containerVariants}
                    >
                        <TechFrameShell
                            size="lg"
                            innerClassName="relative overflow-hidden bg-[linear-gradient(145deg,rgba(6,67,125,0.78)_0%,rgba(8,102,190,0.72)_52%,rgba(14,124,220,0.66)_100%)] px-4 py-4 text-center shadow-[0_18px_48px_-26px_rgba(0,70,140,0.55),inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-md sm:px-6 sm:py-5 lg:text-left"
                        >
                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent_70%)]" />
                            <motion.span
                                variants={itemVariants}
                                className="relative z-[1] mb-2 inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#FFE08A] sm:text-[11px]"
                            >
                                <span className="h-px w-6 bg-white/70" />
                                {t('team.philosophy.tag') || 'Filozófiánk'}
                            </motion.span>

                            <motion.p
                                variants={itemVariants}
                                className="relative z-[1] text-[14px] font-medium leading-[1.65] text-white/95 sm:text-[15px]"
                            >
                                {(t('team.philosophy.content') as unknown as Array<{ bold: string; text: string }>).map((item, i) => (
                                    <span key={i}>
                                        <span className="font-semibold text-white">{item.bold}</span>
                                        <span className="text-white/92">{item.text}</span>
                                    </span>
                                ))}
                            </motion.p>
                        </TechFrameShell>
                    </motion.div>

                    <div>
                        <SectionHeader
                            number="11"
                            eyebrow={t('team.tag') || 'Csapat'}
                            title={t('team.title') || 'Akik mögötted állnak'}
                            subtitle={
                                (t('team.subtitle') || 'Fiatal, tapasztalt csapat, akik valóban törődnek a projekted sikerével.') as string
                            }
                            align="left"
                            className="mb-2 max-w-none [&_h2]:text-left [&_p]:text-white/90 [&_p]:max-w-none"
                        />
                        <div className="h-0.5 w-14 bg-[#FFD66A] shadow-[0_0_10px_rgba(255,214,106,0.40)]" />
                    </div>
                </div>

                <motion.div
                    className="-mx-4 grid grid-cols-1 gap-3 px-4 sm:mx-0 sm:grid-cols-1 sm:px-0 lg:grid-cols-3 lg:gap-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={containerVariants}
                >
                    {teamMembers.map((member, i) => (
                        <motion.article
                            key={i}
                            variants={itemVariants}
                            className="relative grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-x-3 gap-y-1.5 rounded-xl border border-white/30 bg-white/[0.08] px-3 py-3 shadow-[0_14px_36px_-24px_rgba(0,70,140,0.35),inset_0_1px_0_rgba(255,255,255,0.32)] backdrop-blur-sm sm:gap-x-4 sm:px-4 sm:py-3.5"
                            itemScope
                            itemType="https://schema.org/Person"
                        >
                            <span className="pointer-events-none absolute right-3 top-2 font-mono text-[8px] uppercase tracking-[0.22em] text-white/35">
                                {member.id}
                            </span>

                            <h3
                                className="col-start-1 flex max-w-[104px] flex-wrap items-baseline justify-center gap-x-1 gap-y-0 text-center font-hero text-[13px] font-extrabold leading-tight text-white sm:max-w-[112px] sm:text-sm"
                                itemProp="name"
                            >
                                <span itemProp="givenName">{member.firstName}</span>
                                <span itemProp="familyName" className="text-white/85">
                                    {member.lastName}
                                </span>
                            </h3>

                            <div className="col-start-1 row-start-2 self-start">
                                <TeamPhotoFrame
                                    src={member.image}
                                    alt={`${member.firstName} ${member.lastName}`}
                                />
                            </div>

                            <div className="col-start-2 row-start-1 row-span-2 min-w-0 self-start pt-3 sm:pt-0.5">
                                <p className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#FFE08A] sm:text-[10px]">
                                    <span itemProp="jobTitle">{member.role}</span>
                                </p>
                                <p
                                    className="mt-0.5 text-[11px] italic leading-snug text-white/75 sm:text-[12px]"
                                    itemProp="knowsAbout"
                                >
                                    {member.qualification}
                                </p>

                                <ul className="mt-1.5 flex flex-wrap gap-1 sm:mt-2">
                                    {member.skills.map((skill, j) => (
                                        <li
                                            key={j}
                                            className="inline-flex max-w-full items-center gap-0.5 rounded border border-[#7EC8FF]/45 bg-white/[0.08] px-1.5 py-0.5 font-mono text-[9px] text-white/90 sm:text-[10px]"
                                        >
                                            <Check className="h-2 w-2 shrink-0 text-[#FFE08A]" strokeWidth={3} />
                                            <span className="truncate" itemProp="hasCredential">
                                                {skill}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="col-start-3 row-start-1 row-span-2 self-center">
                                <ActionButton {...member.action} />
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </Container>
        </Section>
    );
};
