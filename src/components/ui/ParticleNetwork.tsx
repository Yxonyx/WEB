import { useEffect, useRef, useState } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
}

export const ParticleNetwork = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobileDevice, setIsMobileDevice] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
    const [isVisible, setIsVisible] = useState(true);

    // Mobile check - just for state, not to disable anymore
    useEffect(() => {
        const checkMobile = () => {
            setIsMobileDevice(window.innerWidth < 768);
        };
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Intersection Observer to prevent resource usage when not visible
    useEffect(() => {
        const node = containerRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0, rootMargin: "200px" } // Load before it comes into view
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isMobileDevice) return;
        if (!isVisible) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;
        let canvasWidth = window.innerWidth;
        let canvasHeight = window.innerHeight;
        let isDocVisible = document.visibilityState === 'visible';

        // Optimized particle count: 50 for Desktop, 25 for Mobile (safer for battery/perf)
        const particleCount = isMobileDevice ? 25 : 50;
        const connectionDistance = isMobileDevice ? 100 : 150; // Shorter distance on mobile

        const updateCanvasSize = () => {
            if (containerRef.current) {
                canvas.width = containerRef.current.clientWidth;
                canvas.height = containerRef.current.clientHeight;
                canvasWidth = canvas.width;
                canvasHeight = canvas.height;
            } else {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                canvasWidth = canvas.width;
                canvasHeight = canvas.height;
            }
        };

        updateCanvasSize();

        const createParticle = (): Particle => ({
            x: Math.random() * canvasWidth,
            y: Math.random() * canvasHeight,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            size: Math.random() * 2 + 0.5,
            color: Math.random() > 0.5
                ? 'rgba(77, 148, 255'
                : 'rgba(143, 125, 255',
        });

        const updateParticle = (particle: Particle) => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < 0 || particle.x > canvasWidth) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvasHeight) particle.vy *= -1;
        };

        const drawParticle = (particle: Particle) => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `${particle.color}, 0.7)`;
            ctx.fill();
        };

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(createParticle());
            }
        };

        const drawConnections = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const opacity = 1 - (distance / connectionDistance);
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(77, 148, 255, ${opacity * 0.15})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            if (!isVisible || !isDocVisible) return;

            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            drawConnections();
            particles.forEach(particle => {
                updateParticle(particle);
                drawParticle(particle);
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        let resizeTimeout: ReturnType<typeof setTimeout>;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                updateCanvasSize();
                initParticles();
            }, 200);
        };

        const handleVisibility = () => {
            isDocVisible = document.visibilityState === 'visible';
            if (isDocVisible) {
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        window.addEventListener('resize', handleResize);
        document.addEventListener('visibilitychange', handleVisibility);

        initParticles();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('visibilitychange', handleVisibility);
            cancelAnimationFrame(animationFrameId);
            clearTimeout(resizeTimeout);
        };
    }, [isMobileDevice, isVisible]);

    return (
        <div ref={containerRef} className="absolute inset-0 z-[1] pointer-events-none overflow-hidden w-full h-full">
            <canvas
                ref={canvasRef}
                className="absolute inset-0"
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
};
