import type { AnimationManager, AnimationConfig } from './types';

export class AnimationManagerImpl implements AnimationManager {
  private config: AnimationConfig = {
    floatingCards: true,
    scrollAnimations: true,
    reducedMotion: false
  };

  init(): void {
    this.detectReducedMotion();
    this.setupFloatingAnimations();
    this.setupScrollAnimations();
  }

  destroy(): void {
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

    // Setup intersection observer for scroll animations
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

    // Observe elements that should animate on scroll
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
}
