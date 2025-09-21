/* ==========================================================================
   The Arch Consulting - Expertise Manager Module
   ========================================================================== */

class ExpertiseManager {
    constructor() {
        this.currentLang = 'fr';
        this.expertisesData = window.ExpertisesData;
        this.init();
    }

    init() {
        this.setupExpertiseTabs();
        this.populateExpertises();
        this.setupLanguageListener();
    }

    setupExpertiseTabs() {
        const expertiseTabsContainer = document.querySelector('.expertise-tabs');
        if (!expertiseTabsContainer) return;

        expertiseTabsContainer.addEventListener('click', (e) => {
            if (e.target.matches('.expertise-tab')) {
                this.switchTab(e.target, expertiseTabsContainer);
            }
        });
    }

    switchTab(clickedTab, container) {
        const tabId = clickedTab.dataset.tab;
        
        // Update tab states
        container.querySelectorAll('.expertise-tab').forEach(tab => {
            tab.classList.remove('active');
            tab.setAttribute('aria-selected', 'false');
        });
        
        clickedTab.classList.add('active');
        clickedTab.setAttribute('aria-selected', 'true');

        // Update content panels
        document.querySelectorAll('.expertise-content').forEach(content => {
            content.classList.remove('active');
            content.setAttribute('aria-hidden', 'true');
        });
        
        const targetPanel = document.getElementById(`tab-${tabId}`);
        if (targetPanel) {
            targetPanel.classList.add('active');
            targetPanel.setAttribute('aria-hidden', 'false');
        }
    }

    populateExpertises() {
        const icon = `<svg class="w-4 h-4 text-accent-purple" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>`;

        for (const tabName in this.expertisesData) {
            const container = document.getElementById(`tab-${tabName}`)?.querySelector('.grid');
            if (!container) continue;

            container.innerHTML = '';
            const data = this.expertisesData[tabName];
            
            data.forEach(cat => {
                const categoryDiv = document.createElement('div');
                const skillsHtml = cat.skills.map(skill => 
                    `<li class="expertise-list-item">
                        <span class="text-accent-purple">${icon}</span>
                        <span>${skill}</span>
                    </li>`
                ).join('');

                categoryDiv.innerHTML = `
                    <h4 class="text-xl font-bold text-white mb-4">${cat.category}</h4>
                    <ul class="space-y-3 text-secondary-text">${skillsHtml}</ul>
                `;
                container.appendChild(categoryDiv);
            });
        }
    }

    setupLanguageListener() {
        document.addEventListener('languageChanged', (e) => {
            this.currentLang = e.detail.language;
            this.populateExpertises();
        });
    }

    // Public method to refresh expertises
    refresh() {
        this.populateExpertises();
    }
}

export default ExpertiseManager;
