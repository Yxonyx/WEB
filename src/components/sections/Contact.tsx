import { Container } from '../Container';
import { Section } from '../Section';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';
import { Mail, Phone } from 'lucide-react';
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
    'w-full bg-white/[0.03] border border-white/12 rounded-xl px-4 py-3 text-[15px] text-white placeholder:text-white/30 focus:outline-none focus:border-neonBlue/60 focus:bg-white/[0.05] focus:ring-2 focus:ring-neonBlue/15 transition-all';

const labelClass = 'text-xs font-mono uppercase tracking-[0.15em] text-white/55';

export const Contact = () => {
    const { t } = useLanguage();
    const services = t('contact.services') as unknown as string[];

    return (
        <Section id="kapcsolat" withOrbs>
            <Container>
                <div className="grid lg:grid-cols-2 gap-4 lg:gap-16">
                    {/* Left */}
                    <div>
                        <SectionHeader
                            number="10"
                            eyebrow={t('contact.tag') as string}
                            title={
                                <>
                                    {t('contact.title_line1')}{' '}
                                    <span className="text-neonBlue">{t('contact.title_gradient')}</span>
                                </>
                            }
                            subtitle={t('contact.description') as string}
                            className="mb-5 sm:mb-6"
                        />

                        <div className="flex flex-col gap-3">
                            <a
                                href="mailto:contact@cyberlabsweb.com"
                                className="inline-flex items-center gap-3 group w-fit"
                            >
                                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:bg-neonBlue/10 group-hover:border-neonBlue/30 transition-all">
                                    <Mail className="w-4 h-4 text-white/70 group-hover:text-neonBlue transition-colors" />
                                </div>
                                <span className="text-[15px] text-white/85 group-hover:text-neonBlue transition-colors">
                                    contact@cyberlabsweb.com
                                </span>
                            </a>
                            <a href="tel:+36703304445" className="inline-flex items-center gap-3 group w-fit">
                                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:bg-neonBlue/10 group-hover:border-neonBlue/30 transition-all">
                                    <Phone className="w-4 h-4 text-white/70 group-hover:text-neonBlue transition-colors" />
                                </div>
                                <span className="text-[15px] text-white/85 group-hover:text-neonBlue transition-colors">
                                    +36 70 330 4445
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <Card>
                        <motion.form
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            className="space-y-4"
                        >
                            <input type="hidden" name="form-name" value="contact" />

                            <motion.div variants={itemVariants} className="space-y-1.5">
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

                            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
                                <div className="space-y-1.5">
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
                                <div className="space-y-1.5">
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

                            <motion.div variants={itemVariants} className="space-y-1.5">
                                <label htmlFor="service" className={labelClass}>
                                    {t('contact.form.service')}
                                </label>
                                <div className="relative">
                                    <select id="service" name="service" className={`${inputClass} appearance-none pr-10 cursor-pointer`}>
                                        {services.map((service, i) => (
                                            <option key={i} className="bg-[#0B1024] text-white">
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

                            <motion.div variants={itemVariants} className="space-y-1.5">
                                <label htmlFor="message" className={labelClass}>
                                    {t('contact.form.message')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    placeholder={t('contact.form.message') as string}
                                    className={`${inputClass} resize-none rounded-2xl`}
                                />
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex items-start gap-2.5">
                                <input
                                    id="privacy"
                                    name="privacy"
                                    type="checkbox"
                                    required
                                    className="w-4 h-4 mt-0.5 rounded border border-white/20 bg-white/[0.04] text-neonBlue focus:ring-neonBlue/40 focus:ring-offset-0"
                                />
                                <label htmlFor="privacy" className="text-xs text-white/65 select-none leading-relaxed">
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
