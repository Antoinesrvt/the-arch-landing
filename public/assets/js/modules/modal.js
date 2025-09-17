/* ==========================================================================
   The Arch Consulting - Modal Module
   ========================================================================== */

class ModalManager {
    constructor() {
        this.modalOverlay = document.getElementById('case-study-modal-overlay');
        this.modalContent = document.getElementById('modal-content');
        this.closeModalBtn = document.getElementById('close-modal-btn');
        this.caseStudiesData = window.CaseStudiesData;
        this.init();
    }

    init() {
        this.bindEvents();
        this.setupAccessibility();
    }

    bindEvents() {
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
        document.addEventListener('click', (e) => {
            if (e.target.matches('.case-study-btn')) {
                const caseStudyId = e.target.dataset.caseStudy;
                this.openCaseStudyModal(caseStudyId);
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen()) {
                this.closeModal();
            }
        });
    }

    setupAccessibility() {
        if (this.modalOverlay) {
            this.modalOverlay.setAttribute('aria-hidden', 'true');
        }
    }

    openCaseStudyModal(caseStudyId) {
        const currentLang = window.translationManager?.getCurrentLanguage() || 'fr';
        const studyData = this.caseStudiesData[currentLang] || this.caseStudiesData.fr;
        const study = studyData[caseStudyId];

        if (!study) {
            // Case study not found
            return;
        }

        const challengeTitle = currentLang === 'fr' ? 'Le Défi' : 'The Challenge';
        const solutionTitle = currentLang === 'fr' ? 'La Solution The Arch' : 'The Arch Solution';
        const resultsTitle = currentLang === 'fr' ? 'Les Résultats' : 'The Results';

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
                    ${study.results.map(result => `
                        <div class="glass-card p-4 rounded-lg">
                            <p class="text-3xl font-bold text-white">${result.value}</p>
                            <p class="text-secondary-text text-sm">${result.label}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        this.showModal();
    }

    showModal() {
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

    closeModal() {
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

    isOpen() {
        return this.modalOverlay?.classList.contains('active') || false;
    }

    trapFocus() {
        const focusableElements = this.modalOverlay.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (firstElement) {
            firstElement.focus();
        }

        // Store for cleanup
        this.focusableElements = focusableElements;
        this.firstElement = firstElement;
        this.lastElement = lastElement;

        // Add keyboard trap
        this.keyboardTrapHandler = (e) => {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === this.firstElement) {
                        this.lastElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === this.lastElement) {
                        this.firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
        };

        document.addEventListener('keydown', this.keyboardTrapHandler);
    }

    returnFocus() {
        // Remove keyboard trap
        if (this.keyboardTrapHandler) {
            document.removeEventListener('keydown', this.keyboardTrapHandler);
        }

        // Return focus to the element that opened the modal
        const activeElement = document.querySelector('.case-study-btn:focus');
        if (activeElement) {
            activeElement.focus();
        }
    }
}

// Initialize modal manager
window.modalManager = new ModalManager();
