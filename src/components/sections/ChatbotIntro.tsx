import { Container } from '../Container';
import { Section } from '../Section';
import { Bot, CheckCircle2 } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';
import { useLanguage } from '../../context/LanguageContext';

const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 1, x: 0 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export const ChatbotIntro = () => {
    const { t, language } = useLanguage();

    return (
        <Section id="chatbot-intro" className="relative overflow-hidden">
            <Container>
                <motion.div
                    className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <SectionHeader
                            number="05"
                            eyebrow="AI Chatbot"
                            title={t('chatbot_intro.content.title') as string}
                        />
                        <p
                            className="text-white/88 text-base lg:text-[17px] mb-7 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: t('chatbot_intro.content.desc') as string }}
                        />
                        <div className="mb-3 text-xs font-mono font-semibold text-white/78 uppercase tracking-[0.18em]">
                            {t('chatbot_intro.content.benefits_title')}
                        </div>
                        <ul className="space-y-2.5">
                            {(t('chatbot_intro.content.benefits') as unknown as string[]).map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white/80 text-[15px]">
                                    <CheckCircle2 className="w-4 h-4 text-[#FFF2C6] shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Card className="min-h-[380px] flex flex-col relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/12 rounded-full blur-3xl pointer-events-none" />

                            <div className="relative z-10 mb-5 pb-4 border-b border-white/[0.07] flex items-center gap-3">
                                <div className="w-10 h-10 rounded-2xl bg-white/[0.18] border border-white/35 flex items-center justify-center text-[#FFF2C6]">
                                    <Bot size={18} />
                                </div>
                                <div>
                                    <div className="text-white font-semibold text-[15px]">
                                        {t('chatbot_intro.visual.header_title')}
                                    </div>
                                    <div className="text-xs text-[#FFF2C6] font-mono">
                                        {t('chatbot_intro.visual.header_sub')}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3 flex-1 flex flex-col justify-end relative z-10">
                                <div className="flex items-start gap-2.5">
                                    <div className="w-7 h-7 rounded-full bg-white/[0.16] border border-white/25 flex items-center justify-center shrink-0">
                                        <span className="text-xs font-semibold text-white/80">U</span>
                                    </div>
                                    <div className="bg-white/[0.14] border border-white/25 rounded-2xl rounded-tl-md p-3 text-[14px] text-white/90 max-w-[80%]">
                                        {t('chatbot_intro.visual.user_msg')}
                                    </div>
                                </div>

                                <div className="flex items-start gap-2.5 flex-row-reverse">
                                    <div className="w-7 h-7 rounded-full bg-[#FFD66A]/25 border border-white/35 flex items-center justify-center shrink-0 text-[#06437D]">
                                        <Bot size={14} />
                                    </div>
                                    <div className="bg-[#FFD66A]/16 border border-white/30 rounded-2xl rounded-tr-md p-3.5 text-[14px] text-white max-w-[90%]">
                                        <p className="mb-1.5">{t('chatbot_intro.visual.bot_msg_1')}</p>
                                        <p>
                                            {t('chatbot_intro.visual.bot_msg_2')}{' '}
                                            <span className="text-[#FFF2C6] font-semibold">
                                                {t('chatbot_intro.visual.bot_msg_highlight')}
                                            </span>
                                        </p>

                                        <div className="mt-3 flex gap-2">
                                            <a
                                                href={`/${language}/#kapcsolat`}
                                                className="px-3 py-1.5 rounded-full bg-[#FFD66A] text-[#06437D] text-xs font-medium hover:bg-white transition-colors inline-block"
                                            >
                                                {t('chatbot_intro.visual.cta')}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </motion.div>
            </Container>
        </Section>
    );
};
