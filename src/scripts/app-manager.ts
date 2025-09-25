import type { AppConfig, LanguageManager, NavigationManager, AnimationManager, ThreeSceneManager, ModalManager } from '../types';
import { LanguageManagerImpl } from './language-manager';
import { NavigationManagerImpl } from './navigation-manager';
import { AnimationManagerImpl } from './animation-manager';
import { ThreeSceneManagerImpl } from './three-scene-manager';
import { ModalManagerImpl } from './modal-manager';

export class AppManager {
  public language: LanguageManager;
  public navigation: NavigationManager;
  public animation: AnimationManager;
  public threeScene: ThreeSceneManager;
  public modal: ModalManager;
  
  private config: AppConfig;

  constructor(config: AppConfig) {
    this.config = config;
    this.language = new LanguageManagerImpl(config.language);
    this.navigation = new NavigationManagerImpl();
    this.animation = new AnimationManagerImpl();
    this.threeScene = new ThreeSceneManagerImpl();
    this.modal = new ModalManagerImpl();
  }

  init(): void {
    // Initialize all managers
    this.language.init();
    this.navigation.init();
    this.animation.init();
    this.threeScene.init();
    this.modal.init();

    // Setup global event listeners
    this.setupGlobalListeners();

    // Make app available globally for debugging
    window.theArchApp = {
      language: this.language,
      navigation: this.navigation,
      animation: this.animation,
      threeScene: this.threeScene,
      modal: this.modal
    };
  }

  destroy(): void {
    // Clean up all managers
    this.language.destroy();
    this.navigation.destroy();
    this.animation.destroy();
    this.threeScene.destroy();
    this.modal.destroy();

    // Remove global reference
    delete window.theArchApp;
  }

  refresh(): void {
    // Refresh all managers
    this.language.refresh();
    this.navigation.refresh();
    this.animation.refresh();
    this.threeScene.refresh();
    this.modal.refresh();
  }

  private setupGlobalListeners(): void {
    // Handle page visibility changes
    document.addEventListener('visibilitychange', () => {
      this.handleVisibilityChange();
    });

    // Handle window resize
    let resizeTimeout: number;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        this.handleResize();
      }, 250);
    });

    // Handle page unload
    window.addEventListener('beforeunload', () => {
      this.destroy();
    });
  }

  private handleVisibilityChange(): void {
    if (document.hidden) {
      // Pause animations when page is not visible
      if (window.threeSceneManager) {
        window.threeSceneManager.setPaused(true);
      }
      if (this.threeScene && 'setPaused' in this.threeScene) {
        (this.threeScene as any).setPaused(true);
      }
    } else {
      // Resume animations when page becomes visible
      if (window.threeSceneManager) {
        window.threeSceneManager.setPaused(false);
      }
      if (this.threeScene && 'setPaused' in this.threeScene) {
        (this.threeScene as any).setPaused(false);
      }
    }
  }

  private handleResize(): void {
    // Refresh animations on resize
    this.animation.refresh();
    
    if (window.animationManager) {
      window.animationManager.refresh();
    }
  }
}
