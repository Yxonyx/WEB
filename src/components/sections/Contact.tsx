import { Container } from '../Container';
import { Section } from '../Section';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';
import { Mail, Phone, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

const inputClass =
    'w-full rounded-xl border border-white/30 bg-white/[0.16] px-3 py-2.5 text-[14px] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] placeholder:font-normal placeholder:text-white/60 focus:border-white/70 focus:bg-white/[0.22] focus:outline-none focus:ring-2 focus:ring-white/25 transition-all sm:px-4 sm:py-3 sm:text-[15px]';

const labelClass =
    'text-[10px] font-mono font-semibold uppercase tracking-[0.14em] text-white/88 sm:text-xs sm:tracking-[0.15em]';

export const Contact = () => {
    const { t } = useLanguage();
    const services = t('contact.services') as unknown as string[];

    return (
        <Section id="kapcsolat" withOrbs>
            <Container>
                <div className="-mx-4 grid items-stretch gap-4 px-4 sm:gap-6 lg:mx-0 lg:grid-cols-5 lg:gap-8 lg:px-0">
                    {/* Left: info card (2/5) */}
                    <div className="flex lg:col-span-2">
                        <Card className="flex w-full flex-col !p-4 sm:!p-7 lg:!p-8">
                            <SectionHeader
                                number="10"
                                eyebrow={t('contact.tag') as string}
                                title={
                                    <>
                                        {t('contact.title_line1')}{' '}
                                        <span className="text-[#FFF2C6]">{t('contact.title_gradient')}</span>
                                    </>
                                }
                                subtitle={t('contact.description') as string}
                                className="mb-4 sm:mb-6"
                            />

                            <div className="mb-4 flex flex-col gap-2.5 sm:mb-6 sm:gap-3">
                                <a
                                    href="mailto:contact@cyberlabsweb.com"
                                    className="group inline-flex w-fit items-center gap-2.5 sm:gap-3"
                                >
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/30 bg-white/[0.18] transition-all group-hover:border-white/60 group-hover:bg-white/25 sm:h-10 sm:w-10">
                                        <Mail className="h-4 w-4 text-white/85 transition-colors group-hover:text-white" />
                                    </div>
                                    <span className="text-[14px] font-medium text-white/92 transition-colors group-hover:text-white sm:text-[15px]">
                                        contact@cyberlabsweb.com
                                    </span>
                                </a>
                                <a href="tel:+36703304445" className="group inline-flex w-fit items-center gap-2.5 sm:gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/30 bg-white/[0.18] transition-all group-hover:border-white/60 group-hover:bg-white/25 sm:h-10 sm:w-10">
                                        <Phone className="h-4 w-4 text-white/85 transition-colors group-hover:text-white" />
                                    </div>
                                    <span className="text-[14px] font-medium text-white/92 transition-colors group-hover:text-white sm:text-[15px]">
                                        +36 70 330 4445
                                    </span>
                                </a>
                            </div>

                            <div className="mt-auto flex flex-col gap-2 border-t border-white/[0.08] pt-4 sm:gap-3 sm:pt-5">
                                <div className="flex items-center gap-2.5 sm:gap-3">
                                    <Clock className="h-4 w-4 shrink-0 text-[#FFF2C6]" />
                                    <span className="text-[13px] font-medium text-white/82 sm:text-sm sm:text-white/85">24 órán belül válaszolunk</span>
                                </div>
                                <div className="flex items-center gap-2.5 sm:gap-3">
                                    <ShieldCheck className="h-4 w-4 shrink-0 text-[#FFF2C6]" />
                                    <span className="text-[13px] font-medium text-white/82 sm:text-sm sm:text-white/85">Ingyenes konzultáció &amp; ajánlat</span>
                                </div>
                                <div className="flex items-center gap-2.5 sm:gap-3">
                                    <Sparkles className="h-4 w-4 shrink-0 text-[#FFF2C6]" />
                                    <span className="text-[13px] font-medium text-white/82 sm:text-sm sm:text-white/85">Személyre szabott tervezés</span>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Right: Form (3/5) */}
                    <Card className="!p-4 sm:!p-7 lg:col-span-3 lg:!p-8">
                        <motion.form
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            className="space-y-3 sm:space-y-4"
                        >
                            <input type="hidden" name="form-name" value="contact" />

                            <motion.div variants={itemVariants} className="space-y-1">
                                <label htmlFor="name" className={labelClass}>
                                    {t('contact.form.name')}
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    required
                                    placeholder={t('contact.form.name') as string}
                                    className={inputClass}
                                />
                            </motion.div>

                            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-2 sm:gap-3">
                                <div className="min-w-0 space-y-1">
                                    <label htmlFor="email" className={labelClass}>
                                        {t('contact.form.email')}
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        placeholder={t('contact.form.email') as string}
                                        className={inputClass}
                                    />
                                </div>
                                <div className="min-w-0 space-y-1">
                                    <label htmlFor="phone" className={labelClass}>
                                        {t('contact.form.phone')}
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        name="phone"
                                        placeholder={t('contact.form.phone') as string}
                                        className={inputClass}
                                    />
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="space-y-1">
                                <label htmlFor="service" className={labelClass}>
                                    {t('contact.form.service')}
                                </label>
                                <div className="relative">
                                    <select id="service" name="service" className={`${inputClass} appearance-none pr-10 cursor-pointer`}>
                                        {services.map((service, i) => (
                                            <option key={i} className="bg-[#1B7ED5] text-white">
                                                {service}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="space-y-1">
                                <label htmlFor="message" className={labelClass}>
                                    {t('contact.form.message')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={3}
                                    placeholder={t('contact.form.message') as string}
                                    className={`${inputClass} resize-none rounded-xl sm:rounded-2xl sm:min-h-[7.5rem]`}
                                />
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex items-start gap-2">
                                <input
                                    id="privacy"
                                    name="privacy"
                                    type="checkbox"
                                    required
                                    className="mt-0.5 h-4 w-4 rounded border border-white/40 bg-white/[0.20] text-[#06437D] focus:ring-white/40 focus:ring-offset-0"
                                />
                                <label htmlFor="privacy" className="select-none text-[11px] font-medium leading-snug text-white/75 sm:text-xs sm:leading-relaxed sm:text-white/80">
                                    {t('contact.form.privacy')}
                                </label>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <Button type="submit" variant="primary" className="w-full">
                                    {t('contact.form.submit')}
                                </Button>
                            </motion.div>
                        </motion.form>
                    </Card>
                </div>
            </Container>
        </Section>
    );
};
