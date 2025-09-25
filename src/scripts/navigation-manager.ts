import type { NavigationManager, NavLinkElement } from './types';

export class NavigationManagerImpl implements NavigationManager {
  private config = {
    smoothScroll: true,
    offset: -80, // Account for fixed header
    duration: 1.2
  };

  init(): void {
    this.setupDesktopNavigation();
    this.setupMobileNavigation();
    this.setupAccessibility();
    this.setupFloatingAnimations();
  }

  destroy(): void {
    // Clean up event listeners
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    navLinks.forEach(link => {
      link.replaceWith(link.cloneNode(true));
    });
  }

  refresh(): void {
    this.destroy();
    this.init();
  }

  scrollToSection(sectionId: string): void {
    const targetElement = document.querySelector(sectionId);
    if (!targetElement) return;

    if (this.config.smoothScroll) {
      this.smoothScrollTo(targetElement);
    } else {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  setupSmoothScrolling(): void {
    this.config.smoothScroll = true;
  }

  handleMobileMenu(): void {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');

    if (!mobileMenuToggle || !mobileMenu || !mobileMenuClose) return;

    mobileMenuToggle.addEventListener('click', () => {
      this.openMobileMenu(mobileMenu, mobileMenuToggle);
    });

    mobileMenuClose.addEventListener('click', () => {
      this.closeMobileMenu(mobileMenu, mobileMenuToggle);
    });

    // Close menu when clicking outside
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) {
        this.closeMobileMenu(mobileMenu, mobileMenuToggle);
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('show')) {
        this.closeMobileMenu(mobileMenu, mobileMenuToggle);
      }
    });
  }

  private setupDesktopNavigation(): void {
    const desktopNavLinks = document.querySelectorAll('.nav-link') as NodeListOf<NavLinkElement>;
    
    desktopNavLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        // Only handle internal navigation links (starting with #)
        if (href && href.startsWith('#') && !href.includes('/')) {
          e.preventDefault();
          this.scrollToSection(href);
        }
        // Let other links (like language switching) work normally
      });
    });
  }

  private setupMobileNavigation(): void {
    this.handleMobileMenu();
    
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link') as NodeListOf<NavLinkElement>;
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');

    if (!mobileMenu || !mobileMenuToggle) return;

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        // Only handle internal navigation links (starting with #)
        if (href && href.startsWith('#') && !href.includes('/')) {
          e.preventDefault();
          this.closeMobileMenu(mobileMenu, mobileMenuToggle);
          
          // Smooth scroll to target after menu closes
          setTimeout(() => {
            this.scrollToSection(href);
          }, 350);
        }
        // Let other links (like language switching) work normally
      });
    });
  }

  private setupAccessibility(): void {
    // Add skip links functionality
    const skipLink = document.querySelector('a[href="#main-content"]') as HTMLAnchorElement;
    if (skipLink) {
      skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById('main-content');
        if (target) {
          target.focus();
          this.scrollToSection('#main-content');
        }
      });
    }

    // Improve focus management
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab' && document.activeElement === document.body) {
        const firstFocusable = document.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])') as HTMLElement;
        if (firstFocusable) {
          firstFocusable.focus();
        }
      }
    });
  }

  private setupFloatingAnimations(): void {
    // Add floating animation to cards
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach((card, index) => {
      if (index < 3) { // Only apply to first 3 cards
        card.classList.add('float-animation');
      }
    });
  }

  private openMobileMenu(mobileMenu: HTMLElement, mobileMenuToggle: HTMLElement): void {
    mobileMenu.classList.add('show');
    mobileMenuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    
    requestAnimationFrame(() => {
      mobileMenu.style.transform = 'translateX(0)';
    });
  }

  private closeMobileMenu(mobileMenu: HTMLElement, mobileMenuToggle: HTMLElement): void {
    mobileMenu.style.transform = 'translateX(-100%)';
    setTimeout(() => {
      mobileMenu.classList.remove('show');
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }, 300);
  }

  private smoothScrollTo(element: Element): void {
    // Use Lenis for smooth scrolling if available, otherwise fallback to native
    if (window.lenis) {
      window.lenis.scrollTo(element, {
        offset: this.config.offset,
        duration: this.config.duration,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    } else {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
