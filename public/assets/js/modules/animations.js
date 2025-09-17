/* ==========================================================================
   The Arch Consulting - Animation Module
   ========================================================================== */

class AnimationManager {
    constructor() {
        this.gsap = window.gsap;
        this.ScrollTrigger = window.ScrollTrigger;
        this.lenis = null;
        this.init();
    }

    init() {
        if (this.gsap && this.ScrollTrigger) {
            this.gsap.registerPlugin(this.ScrollTrigger);
            this.setupSmoothScrolling();
            this.setupScrollAnimations();
            this.setupHoverEffects();
        }
    }

    setupSmoothScrolling() {
        // Wait for Lenis to be available
        const initLenis = () => {
            if (window.Lenis) {
                try {
                    this.lenis = new window.Lenis({
                        duration: 1.2,
                        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                        direction: 'vertical',
                        gestureDirection: 'vertical',
                        smooth: true,
                        mouseMultiplier: 1,
                        smoothTouch: false,
                        touchMultiplier: 2,
                        infinite: false,
                        normalizeWheel: true,
                        wheelMultiplier: 1,
                        lerp: 0.1
                    });
                    
                    this.lenis.on('scroll', this.ScrollTrigger.update);
                    
                    this.gsap.ticker.add((time) => {
                        this.lenis.raf(time * 1000);
                    });
                    
                    this.gsap.ticker.lagSmoothing(0);
                    window.lenis = this.lenis;
                } catch (error) {
                    console.warn('Lenis initialization failed, using native scrolling:', error);
                }
            } else {
                // Retry after a short delay if Lenis isn't loaded yet
                setTimeout(initLenis, 100);
            }
        };
        
        initLenis();
    }

    setupScrollAnimations() {
        // Hero section animations - be more specific about elements
        const heroTitle = document.querySelector("#hero-section h1");
        const heroSubtitle = document.querySelector("#hero-section p");
        const heroButtons = document.querySelector("#hero-section .flex");
        
        // Hero elements found
        
        // Only animate specific hero elements, not all children
        const heroElementsToAnimate = [heroTitle, heroSubtitle, heroButtons].filter(Boolean);
        
        if (heroElementsToAnimate.length > 0) {
            // Set initial state explicitly
            this.gsap.set(heroElementsToAnimate, {
                opacity: 1,
                y: 0
            });
            
            // Then animate from hidden state
            this.gsap.from(heroElementsToAnimate, {
                opacity: 0,
                y: 50,
                duration: 1,
                stagger: 0.2,
                ease: "power4.out",
                delay: 0.5,
                onComplete: () => {
                    // Ensure content is visible after animation
                    this.gsap.set(heroElementsToAnimate, { opacity: 1, y: 0 });
                }
            });
            
            // Fallback: ensure hero content is visible after a delay
            setTimeout(() => {
                this.gsap.set(heroElementsToAnimate, { opacity: 1, y: 0 });
            }, 2000);
        }

        // Title animations - be more careful not to break other content
        document.querySelectorAll('.animate-title').forEach(title => {
            // Only animate if the title has children and they're not already visible
            const children = title.children;
            if (children.length > 0) {
                // Check if children are already visible
                const firstChild = children[0];
                const computedStyle = window.getComputedStyle(firstChild);
                const isAlreadyVisible = computedStyle.opacity !== '0' && computedStyle.visibility !== 'hidden';
                
                if (!isAlreadyVisible) {
                    this.gsap.from(children, {
                        opacity: 0,
                        y: 30,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: title,
                            start: "top 85%",
                            toggleActions: "play none none none"
                        }
                    });
                }
            }
        });

        // Card animations
        this.animateSectionCards('#services .animate-card', '#services .grid');
        this.animateSectionCards('#philosophie .animate-card', '#philosophie .grid');
        this.animateSectionCards('#founders .animate-card', '#founders .grid');
        this.animateSectionCards('#realisations .animate-card', '#realisations .grid');
        
        // Ensure philosophy section cards are visible
        const philosophyCards = document.querySelectorAll('#philosophie .animate-card');
        if (philosophyCards.length > 0) {
            // Philosophy cards found
            this.gsap.set(philosophyCards, { opacity: 1, y: 0 });
        }
        
        // Global fallback: ensure all titles and important content are visible
        setTimeout(() => {
            this.ensureAllContentVisible();
        }, 1000);

        // Fade in animations
        document.querySelectorAll('.animate-fade-in').forEach(el => {
            this.gsap.from(el, {
                opacity: 0,
                duration: 1,
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            });
        });
    }

    animateSectionCards(selector, trigger) {
        const cards = document.querySelectorAll(selector);
        if (cards.length > 0) {
            this.gsap.from(cards, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: trigger,
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            });
        }
    }

    setupHoverEffects() {
        // Glass card hover effects
        document.querySelectorAll('.glass-card').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('header nav a, .nav-link-cta').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection && this.lenis) {
                    this.lenis.scrollTo(targetSection);
                }
            }.bind(this));
        });
    }

    // Method to refresh animations (useful for dynamic content)
    refresh() {
        if (this.ScrollTrigger) {
            this.ScrollTrigger.refresh();
        }
    }

    // Method to kill animations (useful for cleanup)
    kill() {
        if (this.ScrollTrigger) {
            this.ScrollTrigger.killAll();
        }
        if (this.lenis) {
            this.lenis.destroy();
        }
    }

    ensureAllContentVisible() {
        // Ensure all titles are visible
        const allTitles = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        allTitles.forEach(title => {
            const computedStyle = window.getComputedStyle(title);
            if (computedStyle.opacity === '0' || computedStyle.visibility === 'hidden') {
                // Making title visible
                this.gsap.set(title, { opacity: 1, visibility: 'visible', y: 0 });
            }
        });

        // Ensure all paragraphs are visible
        const allParagraphs = document.querySelectorAll('p');
        allParagraphs.forEach(p => {
            const computedStyle = window.getComputedStyle(p);
            if (computedStyle.opacity === '0' || computedStyle.visibility === 'hidden') {
                // Making paragraph visible
                this.gsap.set(p, { opacity: 1, visibility: 'visible', y: 0 });
            }
        });

        // Ensure all cards are visible
        const allCards = document.querySelectorAll('.animate-card, .glass-card');
        allCards.forEach(card => {
            const computedStyle = window.getComputedStyle(card);
            if (computedStyle.opacity === '0' || computedStyle.visibility === 'hidden') {
                // Making card visible
                this.gsap.set(card, { opacity: 1, visibility: 'visible', y: 0 });
            }
        });
    }
}

// Initialize animation manager
window.animationManager = new AnimationManager();
