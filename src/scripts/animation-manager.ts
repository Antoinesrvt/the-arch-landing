import type { AnimationManager, AnimationConfig } from '../types';

export class AnimationManagerImpl implements AnimationManager {
  private config: AnimationConfig = {
    floatingCards: true,
    scrollAnimations: true,
    reducedMotion: false
  };

  init(): void {
    console.log('🎬 AnimationManager init() called');
    this.detectReducedMotion();
    
    // Wait for DOM to be ready and libraries to load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.initializeAnimations();
      });
    } else {
      this.initializeAnimations();
    }
  }

  destroy(): void {
    // Cleanup GSAP ScrollTrigger
    if (typeof (window as any).ScrollTrigger !== 'undefined') {
      (window as any).ScrollTrigger.kill();
    }
    
    // Remove all animation classes
    const animatedElements = document.querySelectorAll('.float-animation, .animate-card, .animate-title');
    animatedElements.forEach(element => {
      element.classList.remove('float-animation', 'animate-card', 'animate-title');
    });
  }

  refresh(): void {
    this.destroy();
    this.init();
  }

  setupFloatingAnimations(): void {
    if (!this.config.floatingCards || this.config.reducedMotion) return;

    const cards = document.querySelectorAll('.glass-card');
    cards.forEach((card, index) => {
      if (index < 3) { // Only apply to first 3 cards
        card.classList.add('float-animation');
      }
    });
  }

  setupScrollAnimations(): void {
    if (!this.config.scrollAnimations || this.config.reducedMotion) return;

    // Wait for GSAP to load
    this.waitForGSAP().then(() => {
      this.initializeGSAPAnimations();
    }).catch(() => {
      console.warn('GSAP failed to load, using fallback animations');
      this.setupFallbackScrollAnimations();
    });
  }

  private initializeAnimations(): void {
    // Setup animations with a delay to ensure everything is loaded
    setTimeout(() => {
      this.setupFloatingAnimations();
      this.setupScrollAnimations();
      this.setupCursorEffects();
    }, 500);
  }

  private waitForGSAP(): Promise<void> {
    return new Promise((resolve, reject) => {
      let attempts = 0;
      const maxAttempts = 50; // 5 seconds max wait
      
      const checkGSAP = () => {
        if (typeof (window as any).gsap !== 'undefined' && typeof (window as any).ScrollTrigger !== 'undefined') {
          console.log('✅ GSAP and ScrollTrigger loaded successfully!');
          resolve();
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(checkGSAP, 100);
        } else {
          console.error('❌ GSAP failed to load within timeout');
          reject(new Error('GSAP failed to load within timeout'));
        }
      };
      
      checkGSAP();
    });
  }

  private initializeGSAPAnimations(): void {
    console.log('🎬 Initializing GSAP animations...');
    
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis smooth scroll
    this.setupLenisSmoothScroll();

    // Hero section animation
    const heroElements = document.querySelectorAll('#hero-section .hero-content > *');
    if (heroElements.length > 0) {
      gsap.from(heroElements, {
        opacity: 0, 
        y: 50,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2,
        delay: 0.5
      });
    }

    // Section titles animation - animate the titles themselves
    document.querySelectorAll('.animate-title').forEach(title => {
      gsap.from(title, {
          opacity: 0, 
          y: 30,
          duration: 0.8,
        ease: 'power2.out',
          scrollTrigger: {
          trigger: title,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // Cards animation
    this.animateSectionCards('#services .animate-card', '#services');
    this.animateSectionCards('#approach .animate-card', '#approach');
    this.animateSectionCards('#founders .animate-card', '#founders');
    this.animateSectionCards('#network .animate-card', '#network');
    this.animateSectionCards('#media .animate-card', '#media');
    this.animateSectionCards('#case-studies .animate-card', '#case-studies');
    
    // Catch-all for any missing cards
    this.animateSectionCards('.glass-card.animate-card', 'main');

    // Fade in animations
    document.querySelectorAll('.animate-fade-in').forEach(el => {
      gsap.from(el, {
            opacity: 0, 
        duration: 1,
        ease: 'power1.inOut',
            scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    console.log('✅ GSAP animations initialized');
  }

  private animateSectionCards(selector: string, trigger: string): void {
    const cards = document.querySelectorAll(selector);
    if (cards.length > 0) {
      (window as any).gsap.from(cards, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.1,
      scrollTrigger: {
          trigger: trigger,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    }
  }

  setupFallbackScrollAnimations(): void {
    // Fallback to IntersectionObserver if GSAP is not available
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const animatedElements = document.querySelectorAll('.animate-title, .animate-card');
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  }

  respectReducedMotion(): void {
    this.config.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (this.config.reducedMotion) {
      // Disable all animations
      this.config.floatingCards = false;
      this.config.scrollAnimations = false;
      
      // Remove existing animation classes
      const animatedElements = document.querySelectorAll('.float-animation, .animate-card, .animate-title');
      animatedElements.forEach(element => {
        element.classList.remove('float-animation', 'animate-card', 'animate-title');
      });
    }
  }

  setupCursorEffects(): void {
    if (this.config.reducedMotion) return;

    const cards = document.querySelectorAll('.glass-card');
    console.log('🎯 Setting up cursor effects for', cards.length, 'cards');
    
    if (cards.length === 0) {
      console.warn('⚠️ No .glass-card elements found!');
      return;
    }
    
    cards.forEach((card, index) => {
      card.addEventListener('mousemove', (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const rect = card.getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left;
        const y = mouseEvent.clientY - rect.top;
        
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });

      card.addEventListener('mouseleave', () => {
        (card as HTMLElement).style.setProperty('--mouse-x', '50%');
        (card as HTMLElement).style.setProperty('--mouse-y', '50%');
      });
    });
  }

  private detectReducedMotion(): void {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.config.reducedMotion = mediaQuery.matches;

    // Listen for changes in preference
    mediaQuery.addEventListener('change', (e) => {
      this.config.reducedMotion = e.matches;
      this.refresh();
    });
  }

  private setupLenisSmoothScroll(): void {
    if (this.config.reducedMotion) return;

    // Wait for Lenis to be available
    const checkLenis = () => {
      if (typeof (window as any).lenis !== 'undefined' && (window as any).lenis) {
        console.log('🎬 Initializing Lenis smooth scroll...');
        
        const lenis = new (window as any).lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: 'vertical',
          gestureDirection: 'vertical',
          smooth: true,
          mouseMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
          infinite: false,
        });

        // Store reference globally
        (window as any).lenis = lenis;

        // Connect Lenis with GSAP ScrollTrigger
        lenis.on('scroll', (e: any) => {
          if ((window as any).ScrollTrigger) {
            (window as any).ScrollTrigger.update();
          }
        });

        // Start the animation loop
        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        console.log('✅ Lenis smooth scroll initialized');
      } else {
        // Retry after a short delay
        setTimeout(checkLenis, 100);
      }
    };

    checkLenis();
  }
}