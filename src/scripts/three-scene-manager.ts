import type { BaseManager } from './types';

export class ThreeSceneManagerImpl implements BaseManager {
  private scene: THREE.Scene | null = null;
  private camera: THREE.PerspectiveCamera | null = null;
  private renderer: THREE.WebGLRenderer | null = null;
  private archGroup: THREE.Group | null = null;
  private particlesMesh: THREE.Points | null = null;
  private clock = new THREE.Clock();
  private mouseX = 0;
  private mouseY = 0;
  private animationId: number | null = null;

  init(): void {
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

    // Check browser compatibility and device capabilities
    const shouldUseSimplified = this.shouldUseSimplifiedScene();
    
    if (shouldUseSimplified) {
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
      console.warn('Three.js setup failed, using simplified scene:', error);
      this.setupSimplifiedScene();
    }
  }

  destroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    
    if (this.renderer) {
      this.renderer.dispose();
    }
    
    if (this.scene) {
      this.scene.clear();
    }
  }

  refresh(): void {
    this.destroy();
    this.init();
  }

  setPaused(paused: boolean): void {
    if (paused) {
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
        this.animationId = null;
      }
    } else {
      this.animate();
    }
  }

  private shouldUseSimplifiedScene(): boolean {
    // Check if device is mobile or has limited capabilities
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 2;
    const isOldBrowser = !window.requestAnimationFrame || !window.IntersectionObserver;
    const hasWebGLIssues = !this.checkWebGLSupport().supported;
    const isSlowConnection = navigator.connection && 
      (navigator.connection.effectiveType === 'slow-2g' || navigator.connection.effectiveType === '2g');
    
    return isMobileDevice || isLowEndDevice || isOldBrowser || hasWebGLIssues || isSlowConnection;
  }

  private checkWebGLSupport(): { supported: boolean; hasIssues: boolean } {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      
      if (!gl) {
        return { supported: false, hasIssues: true };
      }
      
      return { supported: true, hasIssues: false };
    } catch (error) {
      return { supported: false, hasIssues: true };
    }
  }

  private setupScene(container: HTMLElement): void {
    this.scene = new THREE.Scene();
  }

  private setupCamera(container: HTMLElement): void {
    this.camera = new THREE.PerspectiveCamera(
      75, 
      container.clientWidth / container.clientHeight, 
      0.1, 
      1000
    );
    this.camera.position.z = 80;
    this.camera.position.y = 10;
  }

  private setupRenderer(container: HTMLElement): void {
    const isMobile = window.innerWidth < 1024;
    const canvasId = isMobile ? 'hero-canvas-mobile-canvas' : 'hero-canvas';
    let canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = canvasId;
      container.appendChild(canvas);
    }

    const contextAttributes: WebGLContextAttributes = {
      alpha: true,
      antialias: true,
      depth: true,
      stencil: false,
      preserveDrawingBuffer: false,
      powerPreference: "high-performance",
      failIfMajorPerformanceCaveat: false
    };

    try {
      this.renderer = new THREE.WebGLRenderer({ 
        canvas: canvas, 
        ...contextAttributes
      });
      
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.setClearColor(0x000000, 0); // Transparent background
    } catch (error) {
      // Fallback to basic renderer
      this.renderer = new THREE.WebGLRenderer({ 
        canvas: canvas, 
        alpha: true,
        antialias: false,
        powerPreference: "default"
      });
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      this.renderer.setPixelRatio(1);
      this.renderer.setClearColor(0x000000, 0);
    }
  }

  private setupLights(): void {
    if (!this.scene) return;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x8A70D6, 1.5);
    directionalLight.position.set(-10, 20, 30);
    this.scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x34D399, 2.0, 200);
    pointLight.position.set(50, -10, 0);
    this.scene.add(pointLight);
  }

  private createArchGroup(): void {
    if (!this.scene) return;

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
      this.archGroup!.add(arch);
    });

    this.archGroup.position.set(30, 0, -20);
    this.archGroup.rotation.x = -Math.PI / 2;
    this.archGroup.rotation.z = Math.PI;
  }

  private createParticles(): void {
    if (!this.scene) return;

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
      size: isMobile ? 0.2 : 0.1,
      color: 0x8A70D6,
      transparent: true,
      opacity: isMobile ? 0.3 : 0.5,
      blending: THREE.AdditiveBlending
    });

    this.particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    this.scene.add(this.particlesMesh);
  }

  private setupEventListeners(): void {
    // Mouse movement
    document.addEventListener('mousemove', (event) => {
      this.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    // Window resize
    window.addEventListener('resize', () => {
      const isMobile = window.innerWidth < 1024;
      const heroContainer = isMobile 
        ? document.getElementById('hero-canvas-mobile') 
        : document.getElementById('hero-canvas-container');
        
      if (!heroContainer || !this.camera || !this.renderer) return;

      this.camera.aspect = heroContainer.clientWidth / heroContainer.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(heroContainer.clientWidth, heroContainer.clientHeight);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
  }

  private animate(): void {
    if (!this.renderer || !this.scene || !this.camera) {
      return;
    }

    this.animationId = requestAnimationFrame(() => this.animate());
    
    try {
      const elapsedTime = this.clock.getElapsedTime();
      const isMobile = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      // Multi-axis rotation for the arch group
      if (this.archGroup) {
        const rotationSpeed = isMobile ? 0.1 : 0.2;
        const rotationAmplitude = isMobile ? 0.15 : 0.25;
        
        this.archGroup.rotation.x = -Math.PI / 2 + Math.sin(elapsedTime * rotationSpeed) * rotationAmplitude;
        this.archGroup.rotation.y = elapsedTime * (isMobile ? 0.1 : 0.15);
        this.archGroup.rotation.z = Math.PI + Math.cos(elapsedTime * rotationSpeed) * rotationAmplitude;
      }

      // Camera parallax effect
      if (this.camera && this.archGroup) {
        const parallaxStrength = isMobile ? 2 : 5;
        const parallaxSmoothing = isMobile ? 0.03 : 0.05;
        
        this.camera.position.x += (this.mouseX * parallaxStrength - this.camera.position.x) * parallaxSmoothing;
        this.camera.position.y += (-this.mouseY * parallaxStrength - this.camera.position.y) * parallaxSmoothing;
        this.camera.lookAt(this.archGroup.position);
      }

      // Particles rotation
      if (this.particlesMesh) {
        const particleRotationSpeed = isMobile ? 0.015 : 0.03;
        this.particlesMesh.rotation.y = -elapsedTime * particleRotationSpeed;
      }

      // Render
      this.renderer.render(this.scene, this.camera);
    } catch (error) {
      console.warn('Animation error, falling back to simplified scene:', error);
      this.setupSimplifiedScene();
    }
  }

  private setupSimplifiedScene(): void {
    const heroContainer = document.getElementById('hero-canvas-container');
    if (!heroContainer) return;

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
