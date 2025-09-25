import type { LanguageManager, LanguageSwitcherConfig } from './types';

export class LanguageManagerImpl implements LanguageManager {
  private config: LanguageSwitcherConfig;
  private currentLang: 'fr' | 'en';

  constructor(config: LanguageSwitcherConfig) {
    this.config = config;
    this.currentLang = config.currentLang;
  }

  init(): void {
    this.setupLanguageSwitcher();
    this.setupMobileLanguageSwitcher();
    this.updateUI();
  }

  destroy(): void {
    // Clean up event listeners
    const desktopSwitch = document.getElementById('lang-switch');
    const mobileSwitch = document.getElementById('mobile-lang-switch');
    
    if (desktopSwitch) {
      desktopSwitch.replaceWith(desktopSwitch.cloneNode(true));
    }
    if (mobileSwitch) {
      mobileSwitch.replaceWith(mobileSwitch.cloneNode(true));
    }
  }

  refresh(): void {
    this.destroy();
    this.init();
  }

  getCurrentLanguage(): 'fr' | 'en' {
    return this.currentLang;
  }

  switchLanguage(targetLang: 'fr' | 'en'): void {
    if (targetLang === this.currentLang) return;
    
    // Navigate to the new language URL
    window.location.href = `/${targetLang}`;
  }

  updateUI(): void {
    this.updateDesktopSwitcher();
    this.updateMobileSwitcher();
  }

  private setupLanguageSwitcher(): void {
    const langSwitch = document.getElementById('lang-switch');
    const langDropdown = document.getElementById('lang-dropdown');
    
    if (!langSwitch || !langDropdown) return;

    // Toggle dropdown
    langSwitch.addEventListener('click', (e) => {
      e.preventDefault();
      langDropdown.classList.toggle('hidden');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!langSwitch.contains(e.target as Node) && !langDropdown.contains(e.target as Node)) {
        langDropdown.classList.add('hidden');
      }
    });

    // Handle language selection from dropdown
    const langLinks = langDropdown.querySelectorAll('a[href^="/"]');
    langLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href) {
          const targetLang = href.replace('/', '') as 'fr' | 'en';
          this.switchLanguage(targetLang);
        }
      });
    });
  }

  private setupMobileLanguageSwitcher(): void {
    const mobileLangSwitch = document.getElementById('mobile-lang-switch');
    if (!mobileLangSwitch) return;

    mobileLangSwitch.addEventListener('click', () => {
      const targetLang = this.currentLang === 'fr' ? 'en' : 'fr';
      this.switchLanguage(targetLang);
    });
  }

  private updateDesktopSwitcher(): void {
    const langSwitch = document.getElementById('lang-switch');
    if (!langSwitch) return;

    const buttonText = this.currentLang === 'fr' ? 'EN' : 'FR';
    const textElement = langSwitch.querySelector('.current-lang-code');
    if (textElement) {
      textElement.textContent = buttonText;
    }
  }

  private updateMobileSwitcher(): void {
    const mobileLangSwitch = document.getElementById('mobile-lang-switch');
    if (!mobileLangSwitch) return;

    const buttonText = this.currentLang === 'fr' ? 'EN' : 'FR';
    mobileLangSwitch.textContent = buttonText;
  }
}
