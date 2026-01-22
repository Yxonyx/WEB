
import { Container } from '../Container';

export const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 bg-black">
            <Container className="text-center">
                <div className="flex items-center justify-center gap-2 mb-6 opacity-80">
                    <div className="font-mono font-bold text-white text-xl">CyberLabs</div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-muted mb-8 text-sm">
                    <span>Inkább hívnál?</span>
                    <a href="tel:+36703304445" className="text-white hover:text-neonBlue transition-colors font-mono">
                        +36 70 330 4445
                    </a>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-muted2 mb-6">
                    <a href="/aszf.html" className="hover:text-neonBlue transition-colors">ÁSZF</a>
                    <span className="opacity-30">|</span>
                    <a href="/adatvedelem.html" className="hover:text-neonBlue transition-colors">Adatvédelem</a>
                </div>

                <div className="text-xs text-muted2">
                    &copy; {new Date().getFullYear()} CyberLabs Studio. Minden jog fenntartva.
                </div>
            </Container>
        </footer>
    );
};
