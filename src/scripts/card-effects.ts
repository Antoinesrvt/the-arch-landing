/**
 * Card Effects Manager
 * Handles cursor tracking, magnetic effects, and advanced card interactions
 */

export class CardEffectsManager {
  private cards: NodeListOf<HTMLElement> | null = null;
  private isInitialized = false;

  init(): void {
    if (this.isInitialized) return;
    
    this.cards = document.querySelectorAll('.glass-card');
    
    if (this.cards.length === 0) {
      console.warn('No glass cards found');
      return;
    }

    this.setupCursorTracking();
    this.setupMagneticButtons();
    this.isInitialized = true;
    
    console.log(`✨ Card effects initialized for ${this.cards.length} cards`);
  }

  /**
   * Cursor tracking for glass cards
   * Updates CSS custom properties for the glow effect
   */
  private setupCursorTracking(): void {
    this.cards?.forEach((card) => {
      card.addEventListener('mousemove', (e: Event) => {
        const event = e as MouseEvent;
        const rect = card.getBoundingClientRect();
        
        // Calculate mouse position relative to card
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        // Convert to percentage
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;
        
        // Update CSS custom properties
        card.style.setProperty('--mouse-x', `${xPercent}%`);
        card.style.setProperty('--mouse-y', `${yPercent}%`);
      });

      // Reset on mouse leave
      card.addEventListener('mouseleave', () => {
        card.style.setProperty('--mouse-x', '50%');
        card.style.setProperty('--mouse-y', '50%');
      });
    });
  }

  /**
   * Magnetic effect for buttons
   * Buttons follow cursor slightly when hovered
   */
  private setupMagneticButtons(): void {
    const buttons = document.querySelectorAll('.magnetic-button');
    
    buttons.forEach((button) => {
      const btn = button as HTMLElement;
      
      btn.addEventListener('mousemove', (e: Event) => {
        const event = e as MouseEvent;
        const rect = btn.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        
        // Apply subtle magnetic pull (max 10px in any direction)
        const pullX = x * 0.15;
        const pullY = y * 0.15;
        
        btn.style.transform = `translate(${pullX}px, ${pullY}px) translateY(-2px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  /**
   * Refresh effect (useful after dynamic content load)
   */
  refresh(): void {
    this.isInitialized = false;
    this.init();
  }

  /**
   * Cleanup
   */
  destroy(): void {
    this.cards = null;
    this.isInitialized = false;
  }
}

// Auto-initialize when DOM is ready
if (typeof window !== 'undefined') {
  const cardEffects = new CardEffectsManager();
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => cardEffects.init());
  } else {
    cardEffects.init();
  }
  
  // Make available globally for debugging
  (window as any).cardEffects = cardEffects;
}
