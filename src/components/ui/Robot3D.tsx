import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface Robot3DProps {
    size?: number;
}

export const Robot3D = ({ size = 200 }: Robot3DProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const width = container.clientWidth || size;
        const height = container.clientHeight || size;

        const scene = new THREE.Scene();
        scene.background = null;

        const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
        camera.position.set(0, 1, 3);

        const isMobile = window.innerWidth < 1024;
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.05;
        container.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.autoRotate = false;
        controls.enableZoom = false;
        controls.enablePan = false;

        let robotModel: THREE.Object3D | null = null;
        let robotBaseY = 0;
        const oscillationRange = Math.PI / 4;
        const oscillationSpeed = 0.5;

        const hemiLight = new THREE.HemisphereLight(0xbcd4ff, 0x1a1030, 0.55);
        scene.add(hemiLight);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.35);
        scene.add(ambientLight);

        const keyLight = new THREE.DirectionalLight(0xffffff, 1.15);
        keyLight.position.set(4, 6, 5);
        scene.add(keyLight);

        const blueLight = new THREE.PointLight(0x4d94ff, 1.1, 12);
        blueLight.position.set(-2.5, 1.2, 2.5);
        scene.add(blueLight);

        const purpleRim = new THREE.PointLight(0x8f7dff, 0.9, 12);
        purpleRim.position.set(2.5, 0.5, -2.5);
        scene.add(purpleRim);

        const loader = new GLTFLoader();
        loader.load(
            '/robot.gltf',
            (gltf) => {
                const model = gltf.scene;

                const box = new THREE.Box3().setFromObject(model);
                const center = box.getCenter(new THREE.Vector3());
                const modelSize = box.getSize(new THREE.Vector3());

                const maxDim = Math.max(modelSize.x, modelSize.y, modelSize.z);
                const scale = 1.5 / maxDim;
                model.scale.setScalar(scale);

                model.position.sub(center.multiplyScalar(scale));
                model.position.y -= 0.3;

                scene.add(model);
                robotModel = model;
                robotBaseY = model.position.y;
            },
            undefined,
            (error) => {
                console.error('Error loading robot:', error);
            }
        );

        let animationId = 0;
        let isVisible = true;
        let isDocVisible = document.visibilityState === 'visible';
        let elapsed = 0;
        let lastFrame = performance.now();

        const shouldRender = () => isVisible && isDocVisible;

        const animate = (now: number) => {
            animationId = requestAnimationFrame(animate);

            if (!shouldRender()) {
                lastFrame = now;
                return;
            }

            const delta = (now - lastFrame) / 1000;
            lastFrame = now;
            elapsed += delta;

            if (robotModel) {
                robotModel.rotation.y = Math.sin(elapsed * oscillationSpeed) * oscillationRange;
                robotModel.position.y = robotBaseY + Math.sin(elapsed * 1.3) * 0.035;
            }

            controls.update();
            renderer.render(scene, camera);
        };

        animationId = requestAnimationFrame(animate);

        const visibilityObserver = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
            },
            { rootMargin: '120px', threshold: 0 }
        );
        visibilityObserver.observe(container);

        const handleDocVisibility = () => {
            isDocVisible = document.visibilityState === 'visible';
        };
        document.addEventListener('visibilitychange', handleDocVisibility);

        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const { width: nextWidth, height: nextHeight } = entry.contentRect;
                if (nextWidth > 0 && nextHeight > 0) {
                    camera.aspect = nextWidth / nextHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(nextWidth, nextHeight);
                }
            }
        });
        resizeObserver.observe(container);

        return () => {
            cancelAnimationFrame(animationId);
            visibilityObserver.disconnect();
            document.removeEventListener('visibilitychange', handleDocVisibility);
            resizeObserver.disconnect();
            renderer.dispose();
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
        };
    }, [size]);

    return (
        <div
            ref={containerRef}
            style={{ width: size, height: size }}
        />
    );
};
