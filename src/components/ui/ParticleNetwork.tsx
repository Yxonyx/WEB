import { useEffect, useRef, useState } from 'react';

export const ParticleNetwork = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [isMobileDevice, setIsMobileDevice] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobileDevice(window.innerWidth < 768);
        };
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobileDevice) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;
        let canvasWidth = window.innerWidth;
        let canvasHeight = window.innerHeight;

        const particleCount = 60;

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;
            opacity: number;

            constructor() {
                this.x = Math.random() * canvasWidth;
                this.y = Math.random() * canvasHeight;
                this.vx = (Math.random() - 0.5) * 0.5; // Slightly faster
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                this.opacity = Math.random() * 0.5 + 0.1;
                this.color = Math.random() > 0.5
                    ? `rgba(0, 240, 255, ${this.opacity})` // Cyan
                    : `rgba(189, 0, 255, ${this.opacity})`; // Purple
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > canvasWidth) this.vx *= -1;
                if (this.y < 0 || this.y > canvasHeight) this.vy *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (isMobileDevice) return; // Stop animation loop on mobile

            ctx.clearRect(0, 0, canvasWidth, canvasHeight);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        let resizeTimeout: ReturnType<typeof setTimeout>;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                canvasWidth = window.innerWidth;
                canvasHeight = window.innerHeight;
                canvas.width = canvasWidth;
                canvas.height = canvasHeight;
                initParticles();
            }, 200);
        };

        window.addEventListener('resize', handleResize);

        initParticles();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            clearTimeout(resizeTimeout);
        };
    }, [isMobileDevice]);

    if (isMobileDevice) return null;

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden h-screen w-full">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 opacity-40 mix-blend-screen"
                style={{
                    width: '100%',
                    height: '100%'
                }}
            />
        </div>
    );
};

