// Type definitions for The Arch Consulting client-side scripts

export interface LanguageSwitcherConfig {
  currentLang: 'fr' | 'en';
  availableLanguages: Array<{
    code: 'fr' | 'en';
    name: string;
    flag: string;
  }>;
}

export interface NavigationConfig {
  smoothScroll: boolean;
  offset: number;
  duration: number;
}

export interface AnimationConfig {
  floatingCards: boolean;
  scrollAnimations: boolean;
  reducedMotion: boolean;
}

export interface AppConfig {
  language: LanguageSwitcherConfig;
  navigation: NavigationConfig;
  animations: AnimationConfig;
}

// DOM Element types
export type NavLinkElement = HTMLAnchorElement & {
  href: string;
  dataset: {
    section?: string;
  };
};

export type LanguageButtonElement = HTMLButtonElement & {
  dataset: {
    lang?: string;
  };
};

// Event types
export interface LanguageChangeEvent extends CustomEvent {
  detail: {
    language: 'fr' | 'en';
    previousLanguage: 'fr' | 'en';
  };
}

export interface NavigationEvent extends CustomEvent {
  detail: {
    section: string;
    element: HTMLElement;
  };
}

// Manager interfaces
export interface BaseManager {
  init(): void;
  destroy(): void;
  refresh(): void;
}

export interface LanguageManager extends BaseManager {
  getCurrentLanguage(): 'fr' | 'en';
  switchLanguage(targetLang: 'fr' | 'en'): void;
  updateUI(): void;
}

export interface NavigationManager extends BaseManager {
  scrollToSection(sectionId: string): void;
  setupSmoothScrolling(): void;
  handleMobileMenu(): void;
}

export interface AnimationManager extends BaseManager {
  setupFloatingAnimations(): void;
  setupScrollAnimations(): void;
  respectReducedMotion(): void;
}

// Global window interface
declare global {
  interface Window {
    theArchApp?: {
      language: LanguageManager;
      navigation: NavigationManager;
      animation: AnimationManager;
      threeScene: BaseManager;
      modal: BaseManager;
    };
    threeSceneManager?: {
      setPaused: (paused: boolean) => void;
      refresh: () => void;
    };
    animationManager?: {
      refresh: () => void;
    };
    lenis?: {
      scrollTo: (target: Element, options?: {
        offset?: number;
        duration?: number;
        easing?: (t: number) => number;
      }) => void;
      stop: () => void;
      start: () => void;
    };
    CaseStudiesData?: any;
    TranslationsData?: any;
  }
}

export {};
