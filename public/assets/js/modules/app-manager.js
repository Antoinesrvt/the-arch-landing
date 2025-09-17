/* ==========================================================================
   The Arch Consulting - Main Application Manager
   ========================================================================== */

import ExpertiseManager from './expertise-manager.js';
import NavigationManager from './navigation-manager.js';

class AppManager {
    constructor() {
        this.expertiseManager = null;
        this.navigationManager = null;
        this.init();
    }

    init() {
        // Initialize core modules
        this.expertiseManager = new ExpertiseManager();
        this.navigationManager = new NavigationManager();
        
        // Setup global event listeners
        this.setupGlobalListeners();
        
        // Ensure titles are visible as fallback
        this.ensureTitlesVisible();
    }

    ensureTitlesVisible() {
        // Fallback: ensure all titles have content
        const titleElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        titleElements.forEach(title => {
            if (!title.textContent.trim() && title.hasAttribute('data-lang-key')) {
                // Keep original content as fallback
                // Note: Empty titles will be handled by translation system
            }
        });
    }

    setupGlobalListeners() {
        // Handle page visibility changes
        document.addEventListener('visibilitychange', () => {
            this.handleVisibilityChange();
        });

        // Handle window resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.handleResize();
            }, 250);
        });

        // Handle page unload
        window.addEventListener('beforeunload', () => {
            this.cleanup();
        });
    }

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

    handleResize() {
        if (window.animationManager) {
            window.animationManager.refresh();
        }
    }

    cleanup() {
        if (window.threeSceneManager) {
            window.threeSceneManager.destroy();
        }
        if (window.animationManager) {
            window.animationManager.kill();
        }
    }

    // Public method to refresh animations when content changes
    refreshAnimations() {
        if (window.animationManager) {
            window.animationManager.refresh();
        }
    }

    // Public method to refresh expertises
    refreshExpertises() {
        if (this.expertiseManager) {
            this.expertiseManager.refresh();
        }
    }
}

export default AppManager;
