import type { BaseManager } from './types';

export class ModalManagerImpl implements BaseManager {
  private modalOverlay: HTMLElement | null = null;
  private modalContent: HTMLElement | null = null;
  private closeModalBtn: HTMLElement | null = null;
  private caseStudiesData: any = null;
  private keyboardTrapHandler: ((e: KeyboardEvent) => void) | null = null;
  private focusableElements: NodeListOf<Element> | null = null;
  private firstElement: Element | null = null;
  private lastElement: Element | null = null;

  init(): void {
    this.modalOverlay = document.getElementById('case-study-modal-overlay');
    this.modalContent = document.getElementById('modal-content');
    this.closeModalBtn = document.getElementById('close-modal-btn');
    this.caseStudiesData = (window as any).CaseStudiesData;
    
    this.bindEvents();
    this.setupAccessibility();
  }

  destroy(): void {
    // Clean up event listeners
    if (this.closeModalBtn) {
      this.closeModalBtn.replaceWith(this.closeModalBtn.cloneNode(true));
    }
    
    if (this.modalOverlay) {
      this.modalOverlay.replaceWith(this.modalOverlay.cloneNode(true));
    }
    
    // Remove global event listeners
    document.removeEventListener('click', this.handleCaseStudyClick);
    document.removeEventListener('keydown', this.handleKeydown);
    
    if (this.keyboardTrapHandler) {
      document.removeEventListener('keydown', this.keyboardTrapHandler);
    }
  }

  refresh(): void {
    this.destroy();
    this.init();
  }

  private bindEvents(): void {
    // Close modal events
    if (this.closeModalBtn) {
      this.closeModalBtn.addEventListener('click', () => this.closeModal());
    }

    if (this.modalOverlay) {
      this.modalOverlay.addEventListener('click', (e) => {
        if (e.target === this.modalOverlay) {
          this.closeModal();
        }
      });
    }

    // Case study buttons
    document.addEventListener('click', this.handleCaseStudyClick);

    // Keyboard navigation
    document.addEventListener('keydown', this.handleKeydown);
  }

  private handleCaseStudyClick = (e: Event): void => {
    const target = e.target as HTMLElement;
    if (target.matches('.case-study-btn')) {
      const caseStudyId = target.dataset.caseStudy;
      if (caseStudyId) {
        this.openCaseStudyModal(caseStudyId);
      }
    }
  };

  private handleKeydown = (e: KeyboardEvent): void => {
    if (e.key === 'Escape' && this.isOpen()) {
      this.closeModal();
    }
  };

  private setupAccessibility(): void {
    if (this.modalOverlay) {
      this.modalOverlay.setAttribute('aria-hidden', 'true');
    }
  }

  openCaseStudyModal(caseStudyId: string): void {
    const currentLang = (window as any).theArchApp?.language?.getCurrentLanguage() || 'fr';
    const studyData = this.caseStudiesData?.[currentLang] || this.caseStudiesData?.fr;
    const study = studyData?.[caseStudyId];

    if (!study) {
      console.warn(`Case study not found: ${caseStudyId}`);
      return;
    }

    const challengeTitle = currentLang === 'fr' ? 'Le Défi' : 'The Challenge';
    const solutionTitle = currentLang === 'fr' ? 'La Solution The Arch' : 'The Arch Solution';
    const resultsTitle = currentLang === 'fr' ? 'Les Résultats' : 'The Results';

    if (this.modalContent) {
      this.modalContent.innerHTML = `
        <h2 class="text-3xl font-bold text-white font-playfair">${study.title}</h2>
        <div>
          <h3 class="text-xl font-bold text-accent-purple mb-2">${challengeTitle}</h3>
          <p class="text-secondary-text">${study.challenge}</p>
        </div>
        <div>
          <h3 class="text-xl font-bold text-accent-purple mb-2">${solutionTitle}</h3>
          <p class="text-secondary-text">${study.solution}</p>
        </div>
        <div>
          <h3 class="text-xl font-bold text-accent-purple mb-4">${resultsTitle}</h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            ${study.results.map((result: any) => `
              <div class="glass-card p-4 rounded-lg">
                <p class="text-3xl font-bold text-white">${result.value}</p>
                <p class="text-secondary-text text-sm">${result.label}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    this.showModal();
  }

  private showModal(): void {
    if (this.modalOverlay) {
      this.modalOverlay.classList.add('active');
      this.modalOverlay.setAttribute('aria-hidden', 'false');
      
      // Stop smooth scrolling
      if (window.lenis) {
        window.lenis.stop();
      }

      // Focus management
      this.trapFocus();
    }
  }

  private closeModal(): void {
    if (this.modalOverlay) {
      this.modalOverlay.classList.remove('active');
      this.modalOverlay.setAttribute('aria-hidden', 'true');
      
      // Resume smooth scrolling
      if (window.lenis) {
        window.lenis.start();
      }

      // Return focus to trigger element
      this.returnFocus();
    }
  }

  private isOpen(): boolean {
    return this.modalOverlay?.classList.contains('active') || false;
  }

  private trapFocus(): void {
    if (!this.modalOverlay) return;

    const focusableElements = this.modalOverlay.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (firstElement) {
      (firstElement as HTMLElement).focus();
    }

    // Store for cleanup
    this.focusableElements = focusableElements;
    this.firstElement = firstElement;
    this.lastElement = lastElement;

    // Add keyboard trap
    this.keyboardTrapHandler = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === this.firstElement) {
            (this.lastElement as HTMLElement).focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === this.lastElement) {
            (this.firstElement as HTMLElement).focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', this.keyboardTrapHandler);
  }

  private returnFocus(): void {
    // Remove keyboard trap
    if (this.keyboardTrapHandler) {
      document.removeEventListener('keydown', this.keyboardTrapHandler);
    }

    // Return focus to the element that opened the modal
    const activeElement = document.querySelector('.case-study-btn:focus') as HTMLElement;
    if (activeElement) {
      activeElement.focus();
    }
  }
}
