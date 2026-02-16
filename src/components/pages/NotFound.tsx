
import { Container } from '../Container';
import { Section } from '../Section';
import { Button } from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

export const NotFound = () => {
    const { t } = useLanguage();

    return (
        <Section id="not-found" className="min-h-screen flex items-center justify-center relative overflow-hidden" fullHeight withOrbs>
            <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />

            {/* Background decoration similar to Hero */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] pointer-events-none opacity-20"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(155,114,255,0.2) 0%, transparent 60%)',
                    filter: 'blur(80px)'
                }}
            />

            <Container className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-8xl md:text-9xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple mb-6">
                        404
                    </h1>

                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
                        {t('notFound.title') || "404 - Az oldal nem található"}
                    </h2>

                    <p className="text-lg text-muted max-w-lg mx-auto mb-10">
                        {t('notFound.desc') || "Sajnáljuk, de a keresett oldal nem létezik vagy el lett távolítva."}
                    </p>

                    <Button href="/" variant="primary">
                        {t('notFound.back') || "Vissza a főoldalra"}
                    </Button>
                </motion.div>
            </Container>
        </Section>
    );
};
