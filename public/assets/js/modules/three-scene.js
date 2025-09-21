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
        // Wait for Three.js to be available
        if (typeof THREE === 'undefined') {
            setTimeout(() => this.init(), 100);
            return;
        }

        // Check for desktop or mobile canvas container
        const isMobile = window.innerWidth < 1024; // lg breakpoint
        const heroContainer = isMobile 
            ? document.getElementById('hero-canvas-mobile') 
            : document.getElementById('hero-canvas-container');
            
        if (!heroContainer) {
            setTimeout(() => this.init(), 100);
            return;
        }

        // Check browser compatibility
        const browserInfo = this.detectBrowser();
        const webglSupport = this.checkWebGLSupport();
        
        // Check if device is mobile or has limited capabilities (keep original mobile detection)
        const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 2;
        const isOldBrowser = !window.requestAnimationFrame || !window.IntersectionObserver;
        const hasWebGLIssues = !webglSupport.supported || webglSupport.hasIssues;
        const isSlowConnection = navigator.connection && (navigator.connection.effectiveType === 'slow-2g' || navigator.connection.effectiveType === '2g');
        
        if (isMobileDevice || isLowEndDevice || isOldBrowser || hasWebGLIssues || isSlowConnection) {
            this.setupSimplifiedScene();
            return;
        }

        try {
            this.setupScene(heroContainer);
            this.setupCamera(heroContainer);
            this.setupRenderer(heroContainer);
            this.setupLights();
            this.createArchGroup();
            this.createParticles();
            this.setupEventListeners();
            this.animate();
        } catch (error) {
            // Fallback to simplified scene on error
            this.setupSimplifiedScene();
        }
    }

    detectBrowser() {
        const ua = navigator.userAgent;
        let browser = 'Unknown';
        let version = 'Unknown';
        
        if (ua.includes('Chrome') && !ua.includes('Edg')) {
            browser = 'Chrome';
            version = ua.match(/Chrome\/(\d+)/)?.[1] || 'Unknown';
        } else if (ua.includes('Firefox')) {
            browser = 'Firefox';
            version = ua.match(/Firefox\/(\d+)/)?.[1] || 'Unknown';
        } else if (ua.includes('Safari') && !ua.includes('Chrome')) {
            browser = 'Safari';
            version = ua.match(/Version\/(\d+)/)?.[1] || 'Unknown';
        } else if (ua.includes('Edg')) {
            browser = 'Edge';
            version = ua.match(/Edg\/(\d+)/)?.[1] || 'Unknown';
        } else if (ua.includes('Brave')) {
            browser = 'Brave';
            version = 'Chromium-based';
        }
        
        return { browser, version, userAgent: ua };
    }

    checkWebGLSupport() {
        try {
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            
            if (!gl) {
                return {
                    supported: false,
                    hasIssues: true,
                    error: 'WebGL not supported'
                };
            }
            
            // Check for common WebGL issues
            const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
            const maxVertexAttribs = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
            const maxVaryingVectors = gl.getParameter(gl.MAX_VARYING_VECTORS);
            
            // Check for browser-specific issues
            const browserInfo = this.detectBrowser();
            let hasIssues = false;
            let issues = [];
            
            if (browserInfo.browser === 'Firefox' && maxTextureSize < 4096) {
                hasIssues = true;
                issues.push('Limited texture size in Firefox');
            }
            
            if (browserInfo.browser === 'Safari' && maxVaryingVectors < 8) {
                hasIssues = true;
                issues.push('Limited varying vectors in Safari');
            }
            
            return {
                supported: true,
                hasIssues: hasIssues,
                issues: issues,
                maxTextureSize: maxTextureSize,
                maxVertexAttribs: maxVertexAttribs,
                maxVaryingVectors: maxVaryingVectors,
                version: gl.getParameter(gl.VERSION),
                vendor: gl.getParameter(gl.VENDOR),
                renderer: gl.getParameter(gl.RENDERER)
            };
        } catch (error) {
            return {
                supported: false,
                hasIssues: true,
                error: error.message
            };
        }
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
        // Create canvas if it doesn't exist - use appropriate canvas based on container
        const isMobile = window.innerWidth < 1024;
        const canvasId = isMobile ? 'hero-canvas-mobile-canvas' : 'hero-canvas';
        let canvas = document.getElementById(canvasId);
        if (!canvas) {
            canvas = document.createElement('canvas');
            canvas.id = canvasId;
            container.appendChild(canvas);
        }

        // Browser-specific WebGL context attributes
        const browserInfo = this.detectBrowser();
        const webglSupport = this.checkWebGLSupport();
        
        let contextAttributes = {
            alpha: true,
            antialias: true,
            depth: true,
            stencil: false,
            preserveDrawingBuffer: false,
            powerPreference: "high-performance",
            failIfMajorPerformanceCaveat: false
        };
        
        // Browser-specific optimizations
        if (browserInfo.browser === 'Firefox') {
            // Firefox-specific settings
            contextAttributes.antialias = false; // Disable antialiasing for better performance
            contextAttributes.powerPreference = "default";
        } else if (browserInfo.browser === 'Safari') {
            // Safari-specific settings
            contextAttributes.antialias = true;
            contextAttributes.powerPreference = "default";
        } else if (browserInfo.browser === 'Edge') {
            // Edge-specific settings
            contextAttributes.powerPreference = "high-performance";
        }
        
        // Adjust based on WebGL capabilities
        if (webglSupport.hasIssues) {
            contextAttributes.antialias = false;
            contextAttributes.powerPreference = "default";
        }

        try {
            this.renderer = new THREE.WebGLRenderer({ 
                canvas: canvas, 
                ...contextAttributes
            });
            
            this.renderer.setSize(container.clientWidth, container.clientHeight);
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            this.renderer.setClearColor(0x000000, 0); // Transparent background
            
            // Browser-specific renderer settings
            if (browserInfo.browser === 'Firefox') {
                this.renderer.shadowMap.enabled = false; // Disable shadows for better performance
            }
            
            // Renderer setup complete
            
        } catch (error) {
            // Failed to create WebGL renderer, using fallback
            
            // Fallback to basic renderer
            try {
                this.renderer = new THREE.WebGLRenderer({ 
                    canvas: canvas, 
                    alpha: true,
                    antialias: false,
                    powerPreference: "default"
                });
                this.renderer.setSize(container.clientWidth, container.clientHeight);
                this.renderer.setPixelRatio(1);
                this.renderer.setClearColor(0x000000, 0);
                // Fallback renderer created
            } catch (fallbackError) {
                // Fallback renderer also failed
                throw fallbackError;
            }
        }
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
        
        // Reduce particle count for mobile devices
        const isMobile = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const particlesCount = isMobile ? 2000 : 5000;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i * 3 + 0] = (Math.random() - 0.5) * 200;
            posArray[i * 3 + 1] = (Math.random() - 0.5) * 200;
            posArray[i * 3 + 2] = (Math.random() - 0.5) * 200;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: isMobile ? 0.2 : 0.1, // Larger particles on mobile for better visibility
            color: 0x8A70D6,
            transparent: true,
            opacity: isMobile ? 0.3 : 0.5, // Reduced opacity on mobile
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

        // Window resize - handle canvas switching
        window.addEventListener('resize', () => {
            const isMobile = window.innerWidth < 1024;
            const heroContainer = isMobile 
                ? document.getElementById('hero-canvas-mobile') 
                : document.getElementById('hero-canvas-container');
                
            if (!heroContainer) return;

            this.camera.aspect = heroContainer.clientWidth / heroContainer.clientHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(heroContainer.clientWidth, heroContainer.clientHeight);
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });
    }

    animate() {
        if (!this.renderer || !this.scene || !this.camera) {
            // 3D scene components not ready, skipping animation
            return;
        }

        this.animationId = requestAnimationFrame(() => this.animate());
        
        try {
            const elapsedTime = this.clock.getElapsedTime();
            const isMobile = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

            // Multi-axis rotation for the arch group
            if (this.archGroup) {
                // Slower rotation on mobile for better performance
                const rotationSpeed = isMobile ? 0.1 : 0.2;
                const rotationAmplitude = isMobile ? 0.15 : 0.25;
                
                this.archGroup.rotation.x = -Math.PI / 2 + Math.sin(elapsedTime * rotationSpeed) * rotationAmplitude;
                this.archGroup.rotation.y = elapsedTime * (isMobile ? 0.1 : 0.15);
                this.archGroup.rotation.z = Math.PI + Math.cos(elapsedTime * rotationSpeed) * rotationAmplitude;
            }

            // Camera parallax effect (reduced on mobile)
            if (this.camera) {
                const parallaxStrength = isMobile ? 2 : 5;
                const parallaxSmoothing = isMobile ? 0.03 : 0.05;
                
                this.camera.position.x += (this.mouseX * parallaxStrength - this.camera.position.x) * parallaxSmoothing;
                this.camera.position.y += (-this.mouseY * parallaxStrength - this.camera.position.y) * parallaxSmoothing;
                this.camera.lookAt(this.archGroup.position);
            }

            // Particles rotation (slower on mobile)
            if (this.particlesMesh) {
                const particleRotationSpeed = isMobile ? 0.015 : 0.03;
                this.particlesMesh.rotation.y = -elapsedTime * particleRotationSpeed;
            }

            // Render
            this.renderer.render(this.scene, this.camera);
        } catch (error) {
            // Animation error, falling back to simplified scene
            this.setupSimplifiedScene();
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

    setupSimplifiedScene() {
        const heroContainer = document.getElementById('hero-canvas-container');
        if (!heroContainer) return;

        // Setting up simplified scene

        // Create a simple static background instead of 3D scene
        heroContainer.innerHTML = `
            <div style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #0A0F19 0%, #111827 50%, #1E293B 100%);
                opacity: 0.8;
            "></div>
            <div style="
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 200px;
                height: 200px;
                background: radial-gradient(circle, rgba(138, 112, 214, 0.3) 0%, transparent 70%);
                border-radius: 50%;
                animation: pulse 4s ease-in-out infinite;
            "></div>
            <div style="
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 100px;
                height: 100px;
                background: radial-gradient(circle, rgba(52, 211, 153, 0.2) 0%, transparent 70%);
                border-radius: 50%;
                animation: pulse 3s ease-in-out infinite reverse;
            "></div>
            <style>
                @keyframes pulse {
                    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
                    50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.6; }
                }
            </style>
        `;
    }
}

// Initialize Three.js scene when DOM is loaded and Three.js is available
function initializeThreeScene() {
        if (typeof THREE === 'undefined') {
            // Three.js not available, retrying in 100ms...
            setTimeout(initializeThreeScene, 100);
            return;
        }
    
    // Initializing Three.js scene...
    window.threeSceneManager = new ThreeSceneManager();
}

// Wait for DOM and Three.js to be ready
document.addEventListener('DOMContentLoaded', () => {
    // Check if Three.js is already loaded
    if (typeof THREE !== 'undefined') {
        initializeThreeScene();
    } else {
        // Wait for Three.js to load
        const checkThreeJS = setInterval(() => {
            if (typeof THREE !== 'undefined') {
                clearInterval(checkThreeJS);
                initializeThreeScene();
            }
        }, 100);
        
        // Timeout after 10 seconds
        setTimeout(() => {
            clearInterval(checkThreeJS);
            if (typeof THREE === 'undefined') {
                // Three.js failed to load after 10 seconds
                // Initialize with simplified scene
                window.threeSceneManager = new ThreeSceneManager();
            }
        }, 10000);
    }
});
