/* ==========================================================================
   The Arch Consulting - Three.js Scene Module
   ========================================================================== */

class ThreeSceneManager {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.archGroup = null;
        this.particlesMesh = null;
        this.clock = new THREE.Clock();
        this.mouseX = 0;
        this.mouseY = 0;
        this.animationId = null;
        this.init();
    }

    init() {
        if (typeof THREE === 'undefined') {
            console.warn('Three.js not loaded, skipping 3D scene initialization');
            return;
        }

        const heroContainer = document.getElementById('hero-canvas-container');
        if (!heroContainer) return;

        this.setupScene(heroContainer);
        this.setupCamera(heroContainer);
        this.setupRenderer(heroContainer);
        this.setupLights();
        this.createArchGroup();
        this.createParticles();
        this.setupEventListeners();
        this.animate();
    }

    setupScene(container) {
        this.scene = new THREE.Scene();
    }

    setupCamera(container) {
        this.camera = new THREE.PerspectiveCamera(
            75, 
            container.clientWidth / container.clientHeight, 
            0.1, 
            1000
        );
        this.camera.position.z = 80;
        this.camera.position.y = 10;
    }

    setupRenderer(container) {
        const canvas = document.getElementById('hero-canvas');
        this.renderer = new THREE.WebGLRenderer({ 
            canvas: canvas, 
            alpha: true, 
            antialias: true 
        });
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    setupLights() {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0x8A70D6, 1.5);
        directionalLight.position.set(-10, 20, 30);
        this.scene.add(directionalLight);

        const pointLight = new THREE.PointLight(0x34D399, 2.0, 200);
        pointLight.position.set(50, -10, 0);
        this.scene.add(pointLight);
    }

    createArchGroup() {
        this.archGroup = new THREE.Group();
        this.scene.add(this.archGroup);

        const material = new THREE.MeshPhysicalMaterial({
            color: 0x4c1d95,
            metalness: 0.3,
            roughness: 0.4,
            transmission: 0,
            ior: 1.5,
            emissive: 0x1e0a30,
            emissiveIntensity: 0.5,
        });

        // Create arches based on logo
        const archParams = [
            { radius: 30, tube: 1.5, z: 0 },
            { radius: 24, tube: 1.5, z: 4 },
            { radius: 18, tube: 1.5, z: 8 },
        ];

        archParams.forEach(params => {
            const geometry = new THREE.TorusGeometry(params.radius, params.tube, 32, 100, Math.PI);
            const arch = new THREE.Mesh(geometry, material);
            arch.position.z = params.z;
            this.archGroup.add(arch);
        });

        this.archGroup.position.set(30, 0, -20);
        this.archGroup.rotation.x = -Math.PI / 2;
        this.archGroup.rotation.z = Math.PI;
    }

    createParticles() {
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 5000;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i * 3 + 0] = (Math.random() - 0.5) * 200;
            posArray[i * 3 + 1] = (Math.random() - 0.5) * 200;
            posArray[i * 3 + 2] = (Math.random() - 0.5) * 200;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.1,
            color: 0x8A70D6,
            transparent: true,
            opacity: 0.5,
            blending: THREE.AdditiveBlending
        });

        this.particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        this.scene.add(this.particlesMesh);
    }

    setupEventListeners() {
        // Mouse movement
        document.addEventListener('mousemove', (event) => {
            this.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            this.mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        });

        // Window resize
        window.addEventListener('resize', () => {
            const heroContainer = document.getElementById('hero-canvas-container');
            if (!heroContainer) return;

            this.camera.aspect = heroContainer.clientWidth / heroContainer.clientHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(heroContainer.clientWidth, heroContainer.clientHeight);
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });
    }

    animate() {
        this.animationId = requestAnimationFrame(() => this.animate());
        
        const elapsedTime = this.clock.getElapsedTime();

        // Multi-axis rotation for the arch group
        if (this.archGroup) {
            this.archGroup.rotation.x = -Math.PI / 2 + Math.sin(elapsedTime * 0.2) * 0.25;
            this.archGroup.rotation.y = elapsedTime * 0.15;
            this.archGroup.rotation.z = Math.PI + Math.cos(elapsedTime * 0.2) * 0.25;
        }

        // Camera parallax effect
        if (this.camera) {
            this.camera.position.x += (this.mouseX * 5 - this.camera.position.x) * 0.05;
            this.camera.position.y += (-this.mouseY * 5 - this.camera.position.y) * 0.05;
            this.camera.lookAt(this.archGroup.position);
        }

        // Particles rotation
        if (this.particlesMesh) {
            this.particlesMesh.rotation.y = -elapsedTime * 0.03;
        }

        // Render
        if (this.renderer && this.scene && this.camera) {
            this.renderer.render(this.scene, this.camera);
        }
    }

    // Method to pause/resume animation
    setPaused(paused) {
        if (paused) {
            if (this.animationId) {
                cancelAnimationFrame(this.animationId);
                this.animationId = null;
            }
        } else {
            this.animate();
        }
    }

    // Method to destroy the scene
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        
        if (this.renderer) {
            this.renderer.dispose();
        }
        
        if (this.scene) {
            this.scene.clear();
        }
    }
}

// Initialize Three.js scene when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.threeSceneManager = new ThreeSceneManager();
});
