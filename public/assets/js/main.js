/* ==========================================================================
   The Arch Consulting - Main Application
   ========================================================================== */

class TheArchApp {
    constructor() {
        this.currentLang = 'fr';
        this.expertisesData = window.ExpertisesData;
        this.init();
    }

    init() {
        this.setupExpertiseTabs();
        this.setupTouchDetection();
        this.setupAccessibility();
        this.setupMobileNavigation();
        this.populateExpertises();

        // Ensure titles are visible as fallback
        this.ensureTitlesVisible();

        // Listen for language changes
        document.addEventListener('languageChanged', (e) => {
            this.currentLang = e.detail.language;
            this.populateExpertises();
        });
    }

    ensureTitlesVisible() {
        // Fallback: ensure all titles have content
        const titleElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        titleElements.forEach(title => {
            if (!title.textContent.trim() && title.hasAttribute('data-lang-key')) {
                console.warn(`Title element is empty:`, title);
                // Keep original content as fallback
            }
        });
    }

    setupExpertiseTabs() {
        const expertiseTabsContainer = document.querySelector('.expertise-tabs');
        if (!expertiseTabsContainer) return;

        expertiseTabsContainer.addEventListener('click', (e) => {
            if (e.target.matches('.expertise-tab')) {
                const tabId = e.target.dataset.tab;
                
                // Update tab states
                expertiseTabsContainer.querySelectorAll('.expertise-tab').forEach(tab => {
                    tab.classList.remove('active');
                    tab.setAttribute('aria-selected', 'false');
                });
                
                e.target.classList.add('active');
                e.target.setAttribute('aria-selected', 'true');

                // Update content panels
                document.querySelectorAll('.expertise-content').forEach(content => {
                    content.classList.remove('active');
                    content.setAttribute('aria-hidden', 'true');
                });
                
                const targetPanel = document.getElementById(`tab-${tabId}`);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                    targetPanel.setAttribute('aria-hidden', 'false');
                }
            }
        });
    }

    populateExpertises() {
        const icon = `<svg class="w-4 h-4 text-accent-purple" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>`;

        for (const tabName in this.expertisesData) {
            const container = document.getElementById(`tab-${tabName}`)?.querySelector('.grid');
            if (!container) continue;

            container.innerHTML = '';
            const data = this.expertisesData[tabName];
            
            data.forEach(cat => {
                const categoryDiv = document.createElement('div');
                const skillsHtml = cat.skills.map(skill => 
                    `<li class="expertise-list-item">
                        <span class="text-accent-purple">${icon}</span>
                        <span>${skill}</span>
                    </li>`
                ).join('');

                categoryDiv.innerHTML = `
                    <h4 class="text-xl font-bold text-white mb-4">${cat.category}</h4>
                    <ul class="space-y-3 text-secondary-text">${skillsHtml}</ul>
                `;
                container.appendChild(categoryDiv);
            });
        }
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

        if (!mobileMenuToggle || !mobileMenu) return;

        // Toggle mobile menu
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('show');
            mobileMenuToggle.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });

        // Close mobile menu
        const closeMobileMenu = () => {
            mobileMenu.classList.remove('show');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        };

        mobileMenuClose.addEventListener('click', closeMobileMenu);

        // Close menu when clicking on nav links
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Close menu when clicking outside
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                closeMobileMenu();
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('show')) {
                closeMobileMenu();
            }
        });
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
                    target.scrollIntoView({ behavior: 'smooth' });
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

    // Utility method to refresh animations when content changes
    refreshAnimations() {
        if (window.animationManager) {
            window.animationManager.refresh();
        }
    }

    // Method to handle page visibility changes
    handleVisibilityChange() {
        if (document.hidden) {
            // Pause animations when page is not visible
            if (window.threeSceneManager) {
                window.threeSceneManager.setPaused(true);
            }
        } else {
            // Resume animations when page becomes visible
            if (window.threeSceneManager) {
                window.threeSceneManager.setPaused(false);
            }
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the main app
    window.theArchApp = new TheArchApp();

    // Handle page visibility changes
    document.addEventListener('visibilitychange', () => {
        window.theArchApp.handleVisibilityChange();
    });

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (window.animationManager) {
                window.animationManager.refresh();
            }
        }, 250);
    });

    // Handle page unload
    window.addEventListener('beforeunload', () => {
        if (window.threeSceneManager) {
            window.threeSceneManager.destroy();
        }
        if (window.animationManager) {
            window.animationManager.kill();
        }
    });
});

// Service Worker registration (for future PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker can be added here in the future
        console.log('Service Worker support detected');
    });
}
