// ==========================================================================
// The Arch Consulting - Type Definitions
// ==========================================================================

// Language Types
export type Language = 'fr' | 'en';

export interface LanguageConfig {
  currentLang: Language;
  availableLanguages: Array<{
    code: Language;
    name: string;
    flag: string;
  }>;
}

// Translation Types
export interface TranslationFunction {
  (key: string): string;
}

export interface TranslationKeys {
  // Navigation
  'nav.approach': string;
  'nav.services': string;
  'nav.founders': string;
  'nav.network': string;
  'nav.media': string;
  'nav.case-studies': string;
  'nav.contact': string;

  // Hero Section
  'hero.title': string;
  'hero.subtitle': string;
  'hero.cta1': string;
  'hero.cta2': string;

  // Hybrid Approach
  'approach.title': string;
  'approach.subtitle': string;
  'approach1.title': string;
  'approach1.desc': string;
  'approach2.title': string;
  'approach2.desc': string;
  'approach3.title': string;
  'approach3.desc': string;

  // Services
  'services.title': string;
  'services.subtitle': string;
  'service1.title': string;
  'service1.desc': string;
  'service2.title': string;
  'service2.desc': string;
  'service3.title': string;
  'service3.desc': string;
  'service4.title': string;
  'service4.desc': string;

  // Founders
  'founders.title': string;
  'founders.subtitle': string;
  'antoine.role': string;
  'antoine.desc': string;
  'aaron.role': string;
  'aaron.desc': string;
  'samir.role': string;
  'samir.desc': string;

  // Network
  'network.title': string;
  'network.subtitle': string;
  'network.dev': string;
  'network.finance': string;
  'network.legal': string;
  'network.marketing': string;
  'network.business': string;
  'network.design': string;
  'network.grants': string;

  // Media & Community
  'media.title': string;
  'media.subtitle': string;
  'media.discord': string;
  'media.twitter': string;
  'media.youtube': string;
  'media.twitch': string;
  'media.blog': string;
  'media.events': string;
  'media.members': string;
  'media.discord.desc': string;
  'media.twitter.desc': string;
  'media.youtube.desc': string;
  'media.twitch.desc': string;
  'media.blog.desc': string;
  'media.events.desc': string;
  'media.join': string;
  'media.follow': string;
  'media.watch': string;
  'media.read': string;
  'media.discover': string;
  'media.total.community': string;
  'media.active.content': string;

  // Case Studies
  'case-studies.title': string;
  'case-studies.subtitle': string;
  'case-study.btn': string;
  'case-study1.title': string;
  'case-study1.desc': string;
  'case-study2.title': string;
  'case-study2.desc': string;
  'case-study3.title': string;
  'case-study3.desc': string;

  // Contact
  'contact.title': string;
  'contact.subtitle': string;
  'contact.cta1': string;
  'contact.cta2': string;

  // Footer
  'footer.rights': string;
}

// Component Props Types
export interface BaseComponentProps {
  lang: Language;
}

export interface HeaderProps {
  currentLang: Language;
}

export interface ClientScriptsProps {
  currentLang: Language;
}

// App Configuration Types
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
  language: LanguageConfig;
  navigation: NavigationConfig;
  animations: AnimationConfig;
}

// DOM Element Types
export type NavLinkElement = HTMLAnchorElement & {
  href: string;
  dataset: {
    section?: string;
  };
};

export type LanguageButtonElement = HTMLButtonElement & {
  dataset: {
    lang?: Language;
  };
};

// Event Types
export interface LanguageChangeEvent extends CustomEvent {
  detail: {
    language: Language;
    previousLanguage: Language;
  };
}

export interface NavigationEvent extends CustomEvent {
  detail: {
    section: string;
    element: HTMLElement;
  };
}

// Manager Interfaces
export interface BaseManager {
  init(): void;
  destroy(): void;
  refresh(): void;
}

export interface LanguageManager extends BaseManager {
  getCurrentLanguage(): Language;
  switchLanguage(targetLang: Language): void;
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

// Case Study Types
export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  tags: string[];
  results: CaseStudyResult[];
  technologies: string[];
  duration: string;
  client: string;
  image?: string;
  link?: string;
}

export interface CaseStudyResult {
  metric: string;
  value: string;
  description: string;
}

// Three.js Scene Types
export interface ThreeSceneConfig {
  container: string;
  mobileContainer: string;
  enableControls: boolean;
  enableOrbitControls: boolean;
  enableAutoRotate: boolean;
  autoRotateSpeed: number;
  enableLights: boolean;
  enableShadows: boolean;
  backgroundColor: string;
  fogColor: string;
  fogNear: number;
  fogFar: number;
}

export interface ThreeSceneManager extends BaseManager {
  setPaused(paused: boolean): void;
  setAutoRotate(enabled: boolean): void;
  setControls(enabled: boolean): void;
  resize(): void;
  dispose(): void;
}

// Modal Types
export interface ModalConfig {
  overlayClass: string;
  contentClass: string;
  closeButtonClass: string;
  animationDuration: number;
  closeOnOverlayClick: boolean;
  closeOnEscape: boolean;
}

export interface ModalManager extends BaseManager {
  open(modalId: string): void;
  close(modalId: string): void;
  closeAll(): void;
  isModalOpen(modalId: string): boolean;
}

// Global Window Interface
declare global {
  interface Window {
    theArchApp?: {
      language: LanguageManager;
      navigation: NavigationManager;
      animation: AnimationManager;
      threeScene: ThreeSceneManager;
      modal: ModalManager;
    };
    threeSceneManager?: ThreeSceneManager;
    animationManager?: AnimationManager;
    lenis?: {
      scrollTo: (target: Element, options?: {
        offset?: number;
        duration?: number;
        easing?: (t: number) => number;
      }) => void;
      stop: () => void;
      start: () => void;
    };
    CaseStudiesData?: CaseStudy[];
    TranslationsData?: Record<Language, TranslationKeys>;
  }
}

// Utility Types
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type RequiredKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Component State Types
export interface ComponentState {
  isLoaded: boolean;
  isVisible: boolean;
  isAnimating: boolean;
  error?: string;
}

export interface AnimationState {
  isPlaying: boolean;
  isPaused: boolean;
  currentFrame: number;
  totalFrames: number;
}

// API Response Types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  language: Language;
  source: string;
}

export interface ContactFormResponse extends ApiResponse {
  data?: {
    id: string;
    status: 'pending' | 'processing' | 'completed';
    estimatedResponseTime: string;
  };
}

// Error Types
export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public context?: Record<string, unknown>
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export class ValidationError extends AppError {
  constructor(message: string, public field: string) {
    super(message, 'VALIDATION_ERROR', { field });
    this.name = 'ValidationError';
  }
}

export class NetworkError extends AppError {
  constructor(message: string, public statusCode?: number) {
    super(message, 'NETWORK_ERROR', { statusCode });
    this.name = 'NetworkError';
  }
}

// Performance Types
export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

export interface PerformanceObserver {
  observe(): void;
  disconnect(): void;
  takeRecords(): PerformanceEntry[];
}

// Accessibility Types
export interface AccessibilityConfig {
  enableHighContrast: boolean;
  enableReducedMotion: boolean;
  enableScreenReader: boolean;
  fontSize: 'small' | 'medium' | 'large';
  colorScheme: 'light' | 'dark' | 'auto';
}

export interface FocusManager {
  trapFocus(element: HTMLElement): void;
  releaseFocus(): void;
  focusNext(): void;
  focusPrevious(): void;
  focusFirst(): void;
  focusLast(): void;
}

