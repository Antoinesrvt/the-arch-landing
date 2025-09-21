/* ==========================================================================
   The Arch Consulting - Translation Module
   ========================================================================== */

class TranslationManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'fr';
        this.translations = null;
        this.init();
    }

    init() {
        // Wait for translations data to be available
        if (window.TranslationsData) {
            this.translations = window.TranslationsData;
        // Add a small delay to ensure DOM is fully loaded
        setTimeout(() => {
            this.setLanguage(this.currentLang);
        }, 100);
        } else {
            // Retry after a short delay, but limit retries
            if (this.retryCount < 10) {
                this.retryCount = (this.retryCount || 0) + 1;
                setTimeout(() => this.init(), 100);
                return;
            } else {
                // Translation data not loaded after 10 retries
                // Fallback: show original content
                this.showFallbackContent();
            }
        }
        this.bindEvents();
    }

    showFallbackContent() {
        // Ensure all elements with data-lang-key show their original content
        const elements = document.querySelectorAll('[data-lang-key]');
        elements.forEach(el => {
            if (!el.textContent.trim()) {
                // If element is empty, try to get content from a fallback
                const key = el.getAttribute('data-lang-key');
                // Element with key is empty, keeping original content
            }
        });
    }

    setLanguage(lang) {
        if (!this.translations[lang]) {
            // Language not found, falling back to French
            lang = 'fr';
        }

        localStorage.setItem('language', lang);
        this.currentLang = lang;
        document.documentElement.lang = lang;

        // Update all elements with data-lang-key
        const elements = document.querySelectorAll('[data-lang-key]');
        
        elements.forEach(el => {
            const key = el.getAttribute('data-lang-key');
            const translation = this.translations[lang][key];
            
            if (translation && translation.trim() !== '') {
                // Only update if translation is different from current content
                if (el.innerHTML !== translation) {
                    el.innerHTML = translation;
                }
            } else {
                // Fallback: keep original content if translation not found
                // Translation not found or empty for key
                // Don't overwrite existing content
            }
        });

        // Update language switch button
        // Language switch button text is now handled by NavigationManager
    }

    bindEvents() {
        // Listen for language change events from navigation manager
        document.addEventListener('languageChanged', (e) => {
            this.setLanguage(e.detail.language);
        });
    }

    getCurrentLanguage() {
        return this.currentLang;
    }

    getTranslation(key, lang = null) {
        const targetLang = lang || this.currentLang;
        return this.translations[targetLang]?.[key] || key;
    }

    // Debug method to check translation status
    debug() {
        // Translation Manager Debug - removed console logs for production
        // Check specific elements
        const heroTitle = document.querySelector('[data-lang-key="hero_title"]');
        // Debug information available but not logged to console
    }
}

// Initialize translation manager
window.translationManager = new TranslationManager();
