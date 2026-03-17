import { Container } from '../Container';
import { Section } from '../Section';
import { Bot, CheckCircle2 } from 'lucide-react';
import { ProIcon } from '../icons/ProIcon';
import { motion, type Variants } from 'framer-motion';
import { BracketFrame } from '../ui/BracketFrame';
import { useLanguage } from '../../context/LanguageContext';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: 0 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

export const ChatbotIntro = () => {
    const { t, language } = useLanguage();

    return (
        <Section id="chatbot-intro" className="section-bg-cyan relative overflow-hidden">
            <Container>
                <motion.div
                    className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {/* Content - Left Side */}
                    <motion.div variants={itemVariants}>
                        <ProIcon icon={Bot} color="neonBlue" size={32} containerClassName="mb-6" />
                        <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">{t('chatbot_intro.content.title')}</h2>
                        <p className="text-white/90 text-lg mb-8 leading-relaxed font-medium">
                            {t('chatbot_intro.content.desc')}
                        </p>

                        <div className="mb-4 text-sm font-bold text-white uppercase tracking-wider">{t('chatbot_intro.content.benefits_title')}</div>
                        <ul className="space-y-3">
                            {(t('chatbot_intro.content.benefits') as unknown as string[]).map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-muted">
                                    <CheckCircle2 className="w-4 h-4 text-neonBlue shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Visual - Right Side */}
                    <motion.div variants={itemVariants} className="relative">
                        <BracketFrame className="bg-surface/30 p-8 h-full min-h-[400px] flex flex-col">
                            {/* Chatbot Header */}
                            <div className="mb-6 pb-4 border-b border-white/10">
                                <div className="flex items-center gap-3">
                                    <ProIcon icon={Bot} color="neonPurple" size={24} />
                                    <div>
                                        <div className="text-white font-bold">{t('chatbot_intro.visual.header_title')}</div>
                                        <div className="text-sm text-neonBlue">{t('chatbot_intro.visual.header_sub')}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Chat Interface Mockup */}
                            <div className="space-y-4 flex-1 flex flex-col justify-end">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <span className="text-sm font-bold text-white">U</span>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-3 text-sm text-white max-w-[80%]">
                                        {t('chatbot_intro.visual.user_msg')}
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 flex-row-reverse">
                                    <ProIcon icon={Bot} color="neonBlue" size={24} />
                                    <div className="bg-surface2 border border-neonBlue/20 rounded-2xl rounded-tr-none p-4 text-sm text-white max-w-[90%] shadow-lg">
                                        <p className="mb-2">{t('chatbot_intro.visual.bot_msg_1')}</p>
                                        <p>{t('chatbot_intro.visual.bot_msg_2')} <span className="text-neonBlue font-bold">{t('chatbot_intro.visual.bot_msg_highlight')}</span></p>

                                        <div className="mt-3 flex gap-2">
                                            <a href={`/${language}/#kapcsolat`} className="px-3 py-1.5 rounded-lg bg-neonBlue/10 text-neonBlue text-sm font-bold hover:bg-neonBlue/20 transition-colors inline-block">{t('chatbot_intro.visual.cta')}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute top-0 right-0 p-32 bg-neonBlue/5 rounded-full blur-3xl pointer-events-none" />
                        </BracketFrame>
                    </motion.div>
                </motion.div>
            </Container>
        </Section>
    );
};


