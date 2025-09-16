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
                console.error('Translation data not loaded after 10 retries');
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
                console.warn(`Element with key ${key} is empty, keeping original content`);
            }
        });
    }

    setLanguage(lang) {
        if (!this.translations[lang]) {
            console.warn(`Language ${lang} not found, falling back to French`);
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
                console.warn(`Translation not found or empty for key: ${key}`);
                // Don't overwrite existing content
            }
        });

        // Update language switch button
        const langSwitchBtn = document.getElementById('lang-switch');
        if (langSwitchBtn) {
            langSwitchBtn.textContent = lang === 'fr' ? 'EN' : 'FR';
        }

        // Dispatch custom event for other modules
        document.dispatchEvent(new CustomEvent('languageChanged', { 
            detail: { language: lang } 
        }));
    }

    bindEvents() {
        const langSwitchBtn = document.getElementById('lang-switch');
        if (langSwitchBtn) {
            langSwitchBtn.addEventListener('click', () => {
                const newLang = this.currentLang === 'fr' ? 'en' : 'fr';
                this.setLanguage(newLang);
            });
        }
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
        console.log('Translation Manager Debug:');
        console.log('- Current language:', this.currentLang);
        console.log('- Translations loaded:', !!this.translations);
        console.log('- Available languages:', this.translations ? Object.keys(this.translations) : 'None');
        console.log('- Elements with data-lang-key:', document.querySelectorAll('[data-lang-key]').length);
        
        // Check specific elements
        const heroTitle = document.querySelector('[data-lang-key="hero_title"]');
        if (heroTitle) {
            console.log('- Hero title content:', heroTitle.textContent);
            console.log('- Hero title translation:', this.translations?.[this.currentLang]?.hero_title);
        }
    }
}

// Initialize translation manager
window.translationManager = new TranslationManager();
