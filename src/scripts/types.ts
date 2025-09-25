// Re-export types from main types file
export type {
  Language,
  LanguageConfig,
  TranslationFunction,
  TranslationKeys,
  BaseComponentProps,
  HeaderProps,
  ClientScriptsProps,
  NavigationConfig,
  AnimationConfig,
  AppConfig,
  NavLinkElement,
  LanguageButtonElement,
  LanguageChangeEvent,
  NavigationEvent,
  BaseManager,
  LanguageManager,
  NavigationManager,
  AnimationManager,
  CaseStudy,
  CaseStudyResult,
  ThreeSceneConfig,
  ThreeSceneManager,
  ModalConfig,
  ModalManager,
  ComponentState,
  AnimationState,
  ApiResponse,
  ContactFormData,
  ContactFormResponse,
  AppError,
  ValidationError,
  NetworkError,
  PerformanceMetrics,
  PerformanceObserver,
  AccessibilityConfig,
  FocusManager,
  DeepPartial,
  Optional,
  RequiredKeys,
} from '../types';

// Import types for global declarations
import type { 
  Language, 
  TranslationKeys, 
  LanguageManager, 
  NavigationManager, 
  AnimationManager, 
  ThreeSceneManager, 
  ModalManager, 
  CaseStudy 
} from '../types';

// Global window interface
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

export {};
