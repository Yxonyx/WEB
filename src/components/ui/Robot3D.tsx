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

        // Scene
        const scene = new THREE.Scene();
        scene.background = null;

        // Camera
        const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
        camera.position.set(0, 1, 3);

        // Renderer - optimized for performance
        const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        container.appendChild(renderer.domElement);

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.autoRotate = false; // Disable full 360 rotation
        controls.enableZoom = false;
        controls.enablePan = false;

        // Robot model reference for oscillation
        let robotModel: THREE.Object3D | null = null;
        const oscillationRange = Math.PI / 4; // 45 degrees each way
        const oscillationSpeed = 0.5;

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        const blueLight = new THREE.PointLight(0x00f0ff, 0.5, 10);
        blueLight.position.set(-2, 1, 2);
        scene.add(blueLight);

        // Load Robot
        const loader = new GLTFLoader();
        loader.load(
            '/robot.gltf',
            (gltf) => {
                const model = gltf.scene;

                // Center and scale
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
            },
            undefined,
            (error) => {
                console.error('Error loading robot:', error);
            }
        );

        // Animation
        let animationId: number;
        const startTime = Date.now();
        function animate() {
            animationId = requestAnimationFrame(animate);

            // Oscillate robot back and forth instead of full 360
            if (robotModel) {
                const elapsed = (Date.now() - startTime) / 1000;
                robotModel.rotation.y = Math.sin(elapsed * oscillationSpeed) * oscillationRange;
            }

            controls.update();
            renderer.render(scene, camera);
        }
        animate();

        // Resize
        const handleResize = () => {
            const w = container.clientWidth || size;
            const h = container.clientHeight || size;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
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
