/* ==========================================================================
   The Arch Consulting - Main Application Entry Point
   ========================================================================== */

import AppManager from './modules/app-manager.js';

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the main app manager
    window.theArchApp = new AppManager();
});

// Service Worker registration (for future PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker can be added here in the future
        // Service Worker support detected
    });
}