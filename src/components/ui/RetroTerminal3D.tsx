import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

export const RetroTerminal3D = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const width = container.clientWidth || 400;
        const height = container.clientHeight || 300;

        // Scene
        const scene = new THREE.Scene();
        scene.background = null;

        // Camera - centered view
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.set(0, 3, 7);
        camera.lookAt(0, 1, 0);

        // Renderer - optimized for performance
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Re-enabled antialiasing for smooth edges
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Lower pixel ratio
        renderer.shadowMap.enabled = false; // Disabled shadows for performance
        container.appendChild(renderer.domElement);

        // Lighting
        scene.add(new THREE.AmbientLight(0xffffff, 0.3));

        const keyLight = new THREE.DirectionalLight(0xffffff, 0.8);
        keyLight.position.set(5, 8, 5);
        keyLight.castShadow = true;
        scene.add(keyLight);

        const fillLight = new THREE.DirectionalLight(0x88ccff, 0.4);
        fillLight.position.set(-5, 2, -5);
        scene.add(fillLight);

        const screenGlow = new THREE.PointLight(0x00ff88, 0.8);
        screenGlow.position.set(0, 2, 2);
        scene.add(screenGlow);

        // Materials
        const beigePlastic = new THREE.MeshStandardMaterial({
            color: 0xe8e0d0,
            roughness: 0.6,
            metalness: 0.1
        });

        const darkPlastic = new THREE.MeshStandardMaterial({
            color: 0x222222,
            roughness: 0.5,
            metalness: 0.2
        });

        const redKey = new THREE.MeshStandardMaterial({
            color: 0xcc3333,
            roughness: 0.4,
            metalness: 0.2
        });

        // Screen texture
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 400;
        const ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.fillStyle = '#0a0a0a';
            ctx.fillRect(0, 0, 512, 400);

            // CRT vignette
            const gradient = ctx.createRadialGradient(256, 200, 50, 256, 200, 300);
            gradient.addColorStop(0, 'rgba(0,0,0,0)');
            gradient.addColorStop(1, 'rgba(0,0,0,0.4)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 512, 400);

            // Green terminal text
            ctx.fillStyle = '#00ff88';
            ctx.font = '14px Courier New';
            ctx.textAlign = 'left';

            const lines = [
                '> Modernweblap Terminal v2.1',
                '> Initializing system...',
                '',
                '╔════════════════════════════════════╗',
                '║     MODERNWEBLAP DIGITAL STUDIO    ║',
                '╚════════════════════════════════════╝',
                '',
                '> services.load()',
                '  [✓] Weboldal fejlesztés',
                '  [✓] SEO optimalizáció',
                '  [✓] GEO pozicionálás',
                '  [✓] Karbantartás',
                '',
                '> status: ONLINE',
                '> clients.active: 127',
                '> projects.completed: 842',
                '',
                '> Egyedi weboldal fejlesztés',
                '> & karbantartás_'
            ];

            lines.forEach((line, i) => {
                ctx.fillText(line, 30, 30 + i * 20);
            });

            // Scanlines
            ctx.fillStyle = 'rgba(0,0,0,0.1)';
            for (let y = 0; y < 400; y += 3) {
                ctx.fillRect(0, y, 512, 1);
            }
        }
        const screenTexture = new THREE.CanvasTexture(canvas);

        // Build computer
        const computerGroup = new THREE.Group();
        scene.add(computerGroup);

        // Keyboard base
        const baseGeo = new RoundedBoxGeometry(4.5, 0.7, 2.2, 4, 0.15);
        const base = new THREE.Mesh(baseGeo, beigePlastic);
        base.position.set(0, 0.35, 0);
        base.castShadow = true;
        computerGroup.add(base);

        // Keyboard recess
        const recessGeo = new THREE.BoxGeometry(4, 0.05, 1.4);
        const recess = new THREE.Mesh(recessGeo, darkPlastic);
        recess.position.set(0, 0.71, 0.2);
        computerGroup.add(recess);

        // Keys
        const keyGeo = new RoundedBoxGeometry(0.22, 0.12, 0.22, 2, 0.03);
        for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 14; col++) {
                const isSpecial = (row === 0 && col >= 12);
                const key = new THREE.Mesh(keyGeo, isSpecial ? redKey : darkPlastic);
                key.position.set(-1.6 + col * 0.25 + row * 0.08, 0.76, -0.3 + row * 0.32);
                key.castShadow = true;
                computerGroup.add(key);
            }
        }

        // Monitor group
        const monitorGroup = new THREE.Group();
        monitorGroup.position.set(0, 0.7, -1.2);
        computerGroup.add(monitorGroup);

        // Monitor case
        const monitorCaseGeo = new RoundedBoxGeometry(3.2, 2.6, 2.2, 6, 0.2);
        const monitorCase = new THREE.Mesh(monitorCaseGeo, beigePlastic);
        monitorCase.position.y = 1.3;
        monitorCase.castShadow = true;
        monitorGroup.add(monitorCase);

        // Screen bezel
        const bezelGeo = new THREE.BoxGeometry(2.6, 2.0, 0.1);
        const bezel = new THREE.Mesh(bezelGeo, darkPlastic);
        bezel.position.set(0, 1.35, 1.06);
        monitorGroup.add(bezel);

        // Screen
        const screenGeo = new THREE.PlaneGeometry(2.4, 1.8);
        const screenMat = new THREE.MeshBasicMaterial({ map: screenTexture });
        const screen = new THREE.Mesh(screenGeo, screenMat);
        screen.position.set(0, 1.35, 1.12);
        monitorGroup.add(screen);

        // Grid floor
        const grid = new THREE.GridHelper(20, 20, 0x00ff88, 0x222222);
        grid.position.y = 0.01;
        (grid.material as THREE.Material).opacity = 0.3;
        (grid.material as THREE.Material).transparent = true;
        scene.add(grid);

        // Position - centered
        computerGroup.position.set(0, 0, 0);

        // Animation
        let animationId: number;
        let time = 0;

        const animate = () => {
            animationId = requestAnimationFrame(animate);
            time += 0.01;

            computerGroup.rotation.y = Math.sin(time * 0.3) * 0.3; // Increased rotation amplitude
            screenGlow.intensity = 0.8 + Math.sin(time * 2) * 0.2;

            renderer.render(scene, camera);
        };
        animate();

        // Resize
        const handleResize = () => {
            const w = container.clientWidth || 400;
            const h = container.clientHeight || 300;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
            renderer.dispose();
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full h-full"
            style={{ minHeight: '300px' }}
        />
    );
};
