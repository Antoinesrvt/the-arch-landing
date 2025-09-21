/* ==========================================================================
   The Arch Consulting - Navigation Manager Module
   ========================================================================== */

class NavigationManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupTouchDetection();
        this.setupMobileNavigation();
        this.setupAccessibility();
    }

    setupTouchDetection() {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) {
            document.body.classList.add('is-touch-device');
        }
    }

    setupMobileNavigation() {
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuClose = document.getElementById('mobile-menu-close');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        const mobileLangSwitch = document.getElementById('mobile-lang-switch');
        const desktopLangSwitch = document.getElementById('lang-switch');
        const desktopNavLinks = document.querySelectorAll('.nav-link');

        if (!mobileMenuToggle || !mobileMenu) return;

        // Setup desktop navigation links
        this.setupDesktopNavigation(desktopNavLinks);
        
        // Setup language switching
        this.setupLanguageSwitching(desktopLangSwitch, mobileLangSwitch);

        // Toggle mobile menu
        mobileMenuToggle.addEventListener('click', () => {
            this.openMobileMenu(mobileMenu, mobileMenuToggle);
        });

        // Close mobile menu
        mobileMenuClose.addEventListener('click', () => {
            this.closeMobileMenu(mobileMenu, mobileMenuToggle);
        });

        // Close menu when clicking on nav links
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                this.closeMobileMenu(mobileMenu, mobileMenuToggle);
                
                // Smooth scroll to target after menu closes
                setTimeout(() => {
                    this.scrollToTarget(targetId);
                }, 350);
            });
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

        // Handle mobile language switch
        if (mobileLangSwitch) {
            mobileLangSwitch.addEventListener('click', () => {
                // Trigger the same language switch as desktop
                if (desktopLangSwitch) {
                    desktopLangSwitch.click();
                }
                this.closeMobileMenu(mobileMenu, mobileMenuToggle);
            });
        }

        // Handle swipe gestures for mobile menu
        this.setupSwipeGestures(mobileMenu, mobileMenuToggle);
    }

    openMobileMenu(mobileMenu, mobileMenuToggle) {
        mobileMenu.classList.add('show');
        mobileMenuToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        
        // Add smooth slide-in animation
        requestAnimationFrame(() => {
            mobileMenu.style.transform = 'translateX(0)';
        });
    }

    closeMobileMenu(mobileMenu, mobileMenuToggle) {
        mobileMenu.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            mobileMenu.classList.remove('show');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }, 300); // Match transition duration
    }

    setupDesktopNavigation(desktopNavLinks) {
        desktopNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                this.scrollToTarget(targetId);
            });
        });
    }

    setupLanguageSwitching(desktopLangSwitch, mobileLangSwitch) {
        const currentLang = localStorage.getItem('language') || 'fr';
        this.updateLanguageButtons(desktopLangSwitch, mobileLangSwitch, currentLang);

        // Desktop language switch
        if (desktopLangSwitch) {
            desktopLangSwitch.addEventListener('click', () => {
                this.toggleLanguage(desktopLangSwitch, mobileLangSwitch);
            });
        }

        // Mobile language switch
        if (mobileLangSwitch) {
            mobileLangSwitch.addEventListener('click', () => {
                this.toggleLanguage(desktopLangSwitch, mobileLangSwitch);
            });
        }
    }

    toggleLanguage(desktopLangSwitch, mobileLangSwitch) {
        const currentLang = localStorage.getItem('language') || 'fr';
        const newLang = currentLang === 'fr' ? 'en' : 'fr';
        
        // Update localStorage
        localStorage.setItem('language', newLang);
        
        // Update button text
        this.updateLanguageButtons(desktopLangSwitch, mobileLangSwitch, newLang);
        
        // Dispatch language change event
        document.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: newLang }
        }));
    }

    updateLanguageButtons(desktopLangSwitch, mobileLangSwitch, currentLang) {
        const buttonText = currentLang === 'fr' ? 'EN' : 'FR';
        
        if (desktopLangSwitch) {
            desktopLangSwitch.textContent = buttonText;
        }
        if (mobileLangSwitch) {
            mobileLangSwitch.textContent = buttonText;
        }
    }

    scrollToTarget(targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Use Lenis for smooth scrolling if available, otherwise fallback to native
            if (window.lenis) {
                window.lenis.scrollTo(targetElement, {
                    offset: -80, // Account for fixed header
                    duration: 1.2,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                });
            } else {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    }

    setupSwipeGestures(mobileMenu, mobileMenuToggle) {
        let startX = 0;
        let currentX = 0;
        let isDragging = false;

        mobileMenu.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        }, { passive: true });

        mobileMenu.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
            const diffX = startX - currentX;
            
            // Only allow swipe to close from the right edge
            if (diffX > 0) {
                const translateX = Math.max(-100, -diffX);
                mobileMenu.style.transform = `translateX(${translateX}%)`;
            }
        }, { passive: true });

        mobileMenu.addEventListener('touchend', () => {
            if (!isDragging) return;
            isDragging = false;
            
            const diffX = startX - currentX;
            const threshold = 100; // Minimum swipe distance to close
            
            if (diffX > threshold) {
                this.closeMobileMenu(mobileMenu, mobileMenuToggle);
            } else {
                // Snap back to open position
                mobileMenu.style.transform = 'translateX(0)';
            }
        }, { passive: true });
    }

    setupAccessibility() {
        // Add skip links functionality
        const skipLink = document.querySelector('a[href="#main-content"]');
        if (skipLink) {
            skipLink.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.getElementById('main-content');
                if (target) {
                    target.focus();
                    // Use Lenis for smooth scrolling if available, otherwise fallback to native
                    if (window.lenis) {
                        window.lenis.scrollTo(target, {
                            offset: -80,
                            duration: 1.2,
                            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                        });
                    } else {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        }

        // Improve focus management for modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab' && document.activeElement === document.body) {
                const firstFocusable = document.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                if (firstFocusable) {
                    firstFocusable.focus();
                }
            }
        });

        // Announce page changes to screen readers
        const announcer = document.createElement('div');
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        announcer.className = 'sr-only';
        document.body.appendChild(announcer);

        // Listen for language changes and announce them
        document.addEventListener('languageChanged', (e) => {
            const lang = e.detail.language;
            announcer.textContent = `Language changed to ${lang === 'fr' ? 'French' : 'English'}`;
        });
    }
}

export default NavigationManager;
