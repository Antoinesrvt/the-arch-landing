// Main JavaScript functionality for The Arch website

document.addEventListener('DOMContentLoaded', () => {
    // TRANSLATION OBJECT
    const translations = {
        fr: {
            nav_services: "Services",
            nav_philosophy: "Philosophie",
            nav_expertises: "Expertises",
            nav_case_studies: "Études de Cas",
            nav_ecosystem: "Écosystème",
            hero_title: "L'architecture de votre succès en Web3",
            hero_subtitle: "Nous fusionnons les expertises Tech, Finance et Communautaire pour bâtir des écosystèmes Web3 robustes et pérennes.",
            hero_cta1: "Planifier un appel",
            hero_cta2: "Nous écrire",
            services_title: `<span class="font-playfair">Une offre</span> de services <i class="font-playfair">360°</i>`,
            services_subtitle: "Nous couvrons l'ensemble du cycle de vie de votre projet Web3.",
            service1_title: "Tech & Sécurité",
            service1_desc: "Architecture de solutions blockchain, développement et audit de smart contracts, optimisation des performances et des coûts (gas fees).",
            service2_title: "Finance & Tokenomics",
            service2_desc: "Conception de modèles économiques durables, stratégie de levée de fonds (IDO, private rounds), listing sur exchanges et conformité réglementaire.",
            service3_title: "Marketing & Croissance",
            service3_desc: "Stratégies de croissance et d'engagement, community building, marketing et PR, amplifiés par notre propre plateforme média.",
            philosophy_title: `<span class="font-playfair">Notre Philosophie :</span> Du Concept au <i class="font-playfair">Succès Commercial</i>`,
            philosophy_subtitle: "Notre mission : transformer la complexité du Web3 en opportunités commerciales. Nous vous donnons les clés pour innover, sécuriser votre projet et assurer sa croissance.",
            benefit1_title: "Transformer l'Idée en Projet Rentable",
            benefit1_desc: "Nous ne construisons pas seulement de la technologie. Nous créons des modèles économiques viables et des stratégies de monétisation qui assurent la pérennité de votre vision.",
            benefit2_title: "Sécuriser Vos Actifs Numériques",
            benefit2_desc: "Dans un monde décentralisé, la confiance est primordiale. Nos audits rigoureux et notre architecture sécurisée protègent votre projet, vos utilisateurs et votre réputation.",
            benefit3_title: "Créer une Communauté Engagée et Fidèle",
            benefit3_desc: "Un projet ne vit que par sa communauté. Nous déployons des stratégies authentiques pour attirer, engager et transformer vos utilisateurs en véritables ambassadeurs.",
            approach_title: `<span class="font-playfair">Dirigé par</span> des Fondateurs <i class="font-playfair">Experts</i>`,
            approach_subtitle: "Notre force réside dans la synergie. Stratégie technique, modèle financier et plan marketing sont unifiés dès le premier jour pour une cohérence absolue.",
            antoine_role: "Tech & Architecture",
            antoine_desc: "Architecte de solutions blockchain, expert en sécurité des smart contracts et en optimisation des performances. Antoine assure que votre projet est construit sur des bases techniques inébranlables.",
            aaron_role: "Finance & Tokenomics",
            aaron_desc: "Spécialiste de la finance décentralisée (DeFi), de la modélisation de tokenomics et de la stratégie de levée de fonds. Il conçoit l'épine dorsale économique de votre écosystème.",
            samir_role: "Marketing & Communauté",
            samir_desc: "Expert en stratégies de contenu et en gestion de communautés à grande échelle (+30 000 membres). Samir bâtit et engage l'audience qui portera votre projet vers le succès.",
            cta_mid_title: "Une question ? Un projet ?",
            cta_mid_subtitle: "Notre équipe est prête à échanger avec vous. Contactez-nous pour concrétiser votre vision.",
            expertises_title: `<span class="font-playfair">Nos</span> Expertises <i class="font-playfair">Détaillées</i>`,
            expertises_subtitle: "Une vision 360° portée par quatre pôles de compétences stratégiques.",
            realisations_title: `<span class="font-playfair">Nos Études</span> de <i class="font-playfair">Cas</i>`,
            realisations_subtitle: "Découvrez comment nous avons transformé les défis de nos clients en succès mesurables.",
            view_case_study_btn: "Voir l'étude de cas",
            realisation1_title: "The Architech",
            realisation1_desc: "Co-fondation d'une plateforme SaaS pour générer des fondations de projets logiciels de qualité professionnelle en quelques minutes.",
            realisation2_title: "Ago DeFi",
            realisation2_desc: "Gestion et animation d'une communauté de +30 000 membres pour une plateforme de finance décentralisée.",
            realisation4_title: "Hashguard",
            realisation4_desc: "Direction technique (CTO) et développement d'un POC pour un projet innovant, de la R&D à la mise en production.",
            tag_saas: "SaaS",
            tag_devtool: "Outil Développeur",
            tag_startup: "Startup",
            tag_defi: "DeFi",
            tag_community: "Communauté",
            tag_marketing: "Marketing",
            tag_cto: "CTO as a service",
            tag_poc: "POC",
            tag_fullstack: "Fullstack",
            ecosystem_title: `<span class="font-playfair">Un Écosystème</span> d'Experts à votre <i class="font-playfair">service</i>`,
            ecosystem_subtitle: "Nous avons pré-sélectionné et intégré un réseau de partenaires de premier plan pour couvrir tous les aspects de votre projet, de l'audit à la conformité.",
            partner1: "Fonds d'Investissement",
            partner2: "Experts en Audit de Sécurité",
            partner3: "Cabinets Juridiques",
            partner4: "Protocoles Blockchain & L2s",
            partner5: "Agences de Développement",
            partner6: "Spécialistes UX/UI",
            contact_title: `<span class="font-playfair">Prêt à construire</span> l'<i class="font-playfair">avenir</i> ?`,
            contact_subtitle: "Discutons de votre projet. Planifiez un appel exploratoire gratuit avec nos fondateurs pour voir comment nous pouvons vous aider à atteindre vos objectifs.",
            contact_cta1: "Planifier un appel",
            contact_cta2: "Nous envoyer un message",
            footer_rights: "© 2025 The Arch Consulting. Tous droits réservés.",
        },
        en: {
            nav_services: "Services",
            nav_philosophy: "Philosophy",
            nav_expertises: "Expertise",
            nav_case_studies: "Case Studies",
            nav_ecosystem: "Ecosystem",
            hero_title: "Architecting your success in Web3",
            hero_subtitle: "We merge Tech, Finance, and Community expertise to build robust and sustainable Web3 ecosystems.",
            hero_cta1: "Schedule a Call",
            hero_cta2: "Write to Us",
            services_title: `<span class="font-playfair">A 360°</span> Service <i class="font-playfair">Offering</i>`,
            services_subtitle: "We cover the entire lifecycle of your Web3 project.",
            service1_title: "Tech & Security",
            service1_desc: "Blockchain solution architecture, smart contract development and auditing, performance and cost optimization (gas fees).",
            service2_title: "Finance & Tokenomics",
            service2_desc: "Design of sustainable economic models, fundraising strategy (IDO, private rounds), exchange listings, and regulatory compliance.",
            service3_title: "Marketing & Growth",
            service3_desc: "Growth and engagement strategies, community building, marketing, and PR, amplified by our own media platform.",
            philosophy_title: `<span class="font-playfair">Our Philosophy:</span> From Concept to <i class="font-playfair">Commercial Success</i>`,
            philosophy_subtitle: "Our mission: to transform the complexity of Web3 into business opportunities. We give you the keys to innovate, secure your project, and ensure its growth.",
            benefit1_title: "Turn Ideas into Profitable Projects",
            benefit1_desc: "We don't just build technology. We create viable business models and monetization strategies that ensure the longevity of your vision.",
            benefit2_title: "Secure Your Digital Assets",
            benefit2_desc: "In a decentralized world, trust is paramount. Our rigorous audits and secure architecture protect your project, your users, and your reputation.",
            benefit3_title: "Create an Engaged and Loyal Community",
            benefit3_desc: "A project is only as strong as its community. We deploy authentic strategies to attract, engage, and turn your users into true ambassadors.",
            approach_title: `<span class="font-playfair">Led by</span> Expert <i class="font-playfair">Founders</i>`,
            approach_subtitle: "Our strength lies in synergy. Technical strategy, financial modeling, and marketing plans are unified from day one for absolute coherence.",
            antoine_role: "Tech & Architecture",
            antoine_desc: "Blockchain solutions architect, expert in smart contract security and performance optimization. Antoine ensures your project is built on an unshakeable technical foundation.",
            aaron_role: "Finance & Tokenomics",
            aaron_desc: "Specialist in decentralized finance (DeFi), tokenomics modeling, and fundraising strategy. He designs the economic backbone of your ecosystem.",
            samir_role: "Marketing & Community",
            samir_desc: "Expert in content strategies and large-scale community management (+30,000 members). Samir builds and engages the audience that will carry your project to success.",
            cta_mid_title: "A question? A project?",
            cta_mid_subtitle: "Our team is ready to talk with you. Contact us to bring your vision to life.",
            expertises_title: `<span class="font-playfair">Our</span> Detailed <i class="font-playfair">Expertise</i>`,
            expertises_subtitle: "A 360° vision supported by four strategic skill poles.",
            realisations_title: `<span class="font-playfair">Our Case</span> <i class="font-playfair">Studies</i>`,
            realisations_subtitle: "Discover how we have turned our clients' challenges into measurable successes.",
            view_case_study_btn: "View Case Study",
            realisation1_title: "The Architech",
            realisation1_desc: "Co-founding a SaaS platform to generate professional-quality software project foundations in minutes.",
            realisation2_title: "Ago DeFi",
            realisation2_desc: "Management and animation of a +30,000 member community for a decentralized finance platform.",
            realisation4_title: "Hashguard",
            realisation4_desc: "Technical direction (CTO) and development of a POC for an innovative project, from R&D to production.",
            tag_saas: "SaaS",
            tag_devtool: "Dev Tool",
            tag_startup: "Startup",
            tag_defi: "DeFi",
            tag_community: "Community",
            tag_marketing: "Marketing",
            tag_cto: "CTO as a service",
            tag_poc: "POC",
            tag_fullstack: "Fullstack",
            ecosystem_title: `<span class="font-playfair">An Ecosystem</span> of Experts at Your <i class="font-playfair">Service</i>`,
            ecosystem_subtitle: "We have pre-selected and integrated a network of leading partners to cover all aspects of your project, from audit to compliance.",
            partner1: "Investment Funds",
            partner2: "Security Audit Experts",
            partner3: "Law Firms",
            partner4: "Blockchain Protocols & L2s",
            partner5: "Development Agencies",
            partner6: "UX/UI Specialists",
            contact_title: `<span class="font-playfair">Ready to build</span> the <i class="font-playfair">future</i>?`,
            contact_subtitle: "Let's discuss your project. Schedule a free exploratory call with our founders to see how we can help you achieve your goals.",
            contact_cta1: "Schedule a Call",
            contact_cta2: "Send Us a Message",
            footer_rights: "© 2025 The Arch Consulting. All rights reserved.",
        }
    };

    const caseStudiesData = {
        fr: {
            architech: {
                title: "The Architech",
                challenge: "Les développeurs perdaient un temps précieux à configurer des fondations de projet répétitives, retardant l'innovation et augmentant les coûts. Il manquait un outil pour standardiser et accélérer ce processus crucial.",
                solution: "Nous avons co-fondé The Architech, une plateforme SaaS qui génère des bases de code complètes et professionnelles (backend, frontend, CI/CD) en quelques clics. En utilisant une architecture modulaire et des technologies de pointe, nous avons automatisé l'ensemble du processus de setup.",
                results: [
                    { value: "-95%", label: "Temps de développement initial" },
                    { value: "100%", label: "Standardisation des bonnes pratiques" },
                    { value: "+50%", label: "Productivité des développeurs" }
                ]
            },
            agodefi: {
                title: "Ago DeFi",
                challenge: "Une plateforme DeFi innovante avait du mal à construire et à engager une communauté solide, un élément essentiel pour la confiance et l'adoption dans l'écosystème décentralisé.",
                solution: "Nous avons pris en charge la stratégie de community management de A à Z. En créant du contenu éducatif, en organisant des événements interactifs (AMAs, concours) et en établissant un système de support réactif, nous avons transformé leur Discord et Twitter en hubs d'activité.",
                results: [
                    { value: "+30,000", label: "Membres de la communauté" },
                    { value: "x3", label: "Taux d'engagement sur les réseaux" },
                    { value: "-70%", label: "Temps de réponse du support" }
                ]
            },
            hashguard: {
                title: "Hashguard",
                challenge: "Un projet naissant avait besoin d'une direction technique forte pour passer de l'idée à un Proof-of-Concept (POC) fonctionnel, en validant la faisabilité technique et en définissant la roadmap de développement.",
                solution: "En tant que CTO, nous avons mené la veille technologique, défini l'architecture, et développé le POC. Cela a inclus la mise en place de l'environnement de développement, le codage des fonctionnalités clés et la planification des prochaines étapes du projet.",
                results: [
                    { value: "3 mois", label: "De l'idée au POC" },
                    { value: "1", label: "Roadmap technique claire définie" },
                    { value: "100%", label: "Validation de la faisabilité" }
                ]
            }
        },
        en: {
            architech: {
                title: "The Architech",
                challenge: "Developers were wasting valuable time setting up repetitive project foundations, delaying innovation and increasing costs. A tool to standardize and accelerate this crucial process was missing.",
                solution: "We co-founded The Architech, a SaaS platform that generates complete and professional codebases (backend, frontend, CI/CD) in just a few clicks. Using a modular architecture and cutting-edge technologies, we automated the entire setup process.",
                results: [
                    { value: "-95%", label: "Initial development time" },
                    { value: "100%", label: "Standardization of best practices" },
                    { value: "+50%", label: "Developer productivity" }
                ]
            },
            agodefi: {
                title: "Ago DeFi",
                challenge: "An innovative DeFi platform struggled to build and engage a strong community, a critical element for trust and adoption in the decentralized ecosystem.",
                solution: "We took charge of the community management strategy from A to Z. By creating educational content, organizing interactive events (AMAs, contests), and establishing a responsive support system, we turned their Discord and Twitter into hubs of activity.",
                results: [
                    { value: "+30,000", label: "Community members" },
                    { value: "x3", label: "Engagement rate on social media" },
                    { value: "-70%", label: "Support response time" }
                ]
            },
            hashguard: {
                title: "Hashguard",
                challenge: "A nascent project needed strong technical leadership to move from an idea to a functional Proof-of-Concept (POC), validating technical feasibility and defining the development roadmap.",
                solution: "As CTO, we led the technology watch, defined the architecture, and developed the POC. This included setting up the development environment, coding key features, and planning the project's next steps.",
                results: [
                    { value: "3 months", label: "From idea to POC" },
                    { value: "1", label: "Clear technical roadmap defined" },
                    { value: "100%", label: "Feasibility validation" }
                ]
            }
        }
    };

    const expertisesData = {
        strategy: [
            { category: 'Stratégie Go-to-Market', skills: ['Définition de la cible et des objectifs', 'Création de la roadmap projet', 'Développement de la vision long-terme', 'Atténuation des challenges & création de synergies'] },
            { category: 'Documentation Stratégique', skills: ['Revue & création de Pitch Deck', 'Rédaction & revue de Whitepaper', 'Création de Gitbook pour la communauté', 'Préparation de la documentation légale'] },
            { category: 'Conseil en Gouvernance (DAO)', skills: ['Amélioration de la gouvernance', 'Optimisation de l\'efficacité opérationnelle', 'Mise en place de mécanismes de vote', 'Conseil pour organisations décentralisées'] }
        ],
        finance: [
            { category: 'Conception de Tokenomics', skills: ['Développement de modèles économiques sur-mesure', 'Audit et optimisation de tokenomics existantes', 'Structures d\'émission et de vesting durables', 'Analyse détaillée pour les parties prenantes'] },
            { category: 'Stratégie Financière', skills: ['Optimisation de la trésorerie crypto (staking, rendements)', 'Stratégies financières long terme', 'Exploitation des données on-chain/off-chain', 'Identification et analyse des risques'] },
            { category: 'Analyse de Marché', skills: ['Surveillance des tendances crypto/DeFi', 'Analyse comparative de la concurrence', 'Études de marché pour opportunités', 'Veille sur les innovations Web3'] }
        ],
        tech: [
            { category: 'Architecture & Conception', skills: ['Architecture de solutions blockchain (L1, L2)', 'Conception de systèmes décentralisés', 'Modélisation de solutions Web3', 'Audit d\'architecture', 'Optimisation des performances'] },
            { category: 'Sécurité & Audit', skills: ['Analyse de vulnérabilités smart contracts', 'Revue de code et best practices', 'Recommandations de sécurité infrastructure', 'Évaluation des risques techniques', 'Protection des actifs numériques'] },
            { category: 'Stack Technique Web3', skills: ['Évaluation et sélection de blockchains', 'Choix d\'infrastructures décentralisées (IPFS, Arweave)', 'Sélection d\'outils de développement', 'Intégration de wallets et standards (ERC20, ERC721)'] },
            { category: 'Interopérabilité & Intégration', skills: ['Solutions de bridges et cross-chain', 'Intégration avec systèmes traditionnels', 'APIs et oracles (Chainlink)', 'Solutions de scaling (rollups)'] },
            { category: 'Performance & Optimisation', skills: ['Optimisation des coûts (gas fees)', 'Stratégies de scaling', 'Benchmarking de solutions techniques', 'Analyse de performance des réseaux'] },
            { category: 'Innovation & R&D', skills: ['Veille sur les technologies émergentes', 'Prototypage de solutions innovantes', 'Convergence IA-blockchain', 'Proof of concepts techniques'] }
        ],
        marketing: [
            { category: 'Stratégie de Croissance', skills: ['Définition de la stratégie Go-to-Market', 'Développement de partenariats stratégiques', 'Création de roadmap de croissance', 'Analyse de performances et optimisation'] },
            { category: 'Communication & Influence', skills: ['Planification de communication stratégique', 'Introduction aux KOLs (Key Opinion Leaders)', 'Relations avec Market Makers & Launchpads', 'Positionnement en tant que média référent'] },
            { category: 'Community Building', skills: ['Gestion de communautés à grande échelle (+30k)', 'Animation et modération multicanale', 'Stratégies d\'engagement et de rétention', 'Éducation Web3 et vulgarisation technique'] }
        ]
    };

    // --- SCRIPT RESTRUCTURED FOR BETTER SCOPE MANAGEMENT ---
    // 1. Get all elements
    const langSwitchBtn = document.getElementById('lang-switch');
    const mobileLangSwitchBtn = document.getElementById('mobile-lang-switch');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const modalOverlay = document.getElementById('case-study-modal-overlay');
    const modalContent = document.getElementById('modal-content');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const expertiseTabsContainer = document.querySelector('.expertise-tabs');

    // 2. State variables
    let currentLang = localStorage.getItem('language') || 'fr';

    // 3. Define all functions in a shared scope
    function setLanguage(lang) {
        if (!translations[lang]) return;
        localStorage.setItem('language', lang);
        currentLang = lang;
        document.documentElement.lang = lang;
        const elements = document.querySelectorAll('[data-lang-key]');
        elements.forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        if (langSwitchBtn) {
            langSwitchBtn.textContent = lang === 'fr' ? 'EN' : 'FR';
        }
    }

    function openCaseStudyModal(caseStudyId) {
        const studyData = caseStudiesData[currentLang] || caseStudiesData.fr;
        const study = studyData[caseStudyId];
        if (!study) return;
        const challengeTitle = currentLang === 'fr' ? 'Le Défi' : 'The Challenge';
        const solutionTitle = currentLang === 'fr' ? 'La Solution The Arch' : 'The Arch Solution';
        const resultsTitle = currentLang === 'fr' ? 'Les Résultats' : 'The Results';
        modalContent.innerHTML = `
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
        modalOverlay.classList.add('active');
        // if (window.lenis) lenis.stop();
    }

    function closeCaseStudyModal() {
        modalOverlay.classList.remove('active');
        // if (window.lenis) lenis.start();
    }

    function populateExpertises() {
        const icon = `<svg class="w-4 h-4 text-accent-purple" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>`;
        for (const tabName in expertisesData) {
            const container = document.getElementById(`tab-${tabName}`)?.querySelector('.grid');
            if (!container) continue;
            container.innerHTML = '';
            const data = expertisesData[tabName];
            data.forEach(cat => {
                const categoryDiv = document.createElement('div');
                let skillsHtml = cat.skills.map(skill => `<li class="expertise-list-item"><span class="text-accent-purple">${icon}</span><span>${skill}</span></li>`).join('');
                categoryDiv.innerHTML = `
                    <h4 class="text-xl font-bold text-white mb-4">${cat.category}</h4>
                    <ul class="space-y-3 text-secondary-text">${skillsHtml}</ul>
                `;
                container.appendChild(categoryDiv);
            });
        }
    }

    // 4. Initialization and Event Listeners
    if (window.gsap) {
        gsap.registerPlugin(ScrollTrigger);
    }
    
    // Lenis smooth scrolling disabled for debugging
    // if (window.Lenis) {
    //     window.lenis = new Lenis();
    //     lenis.on('scroll', ScrollTrigger.update);
    //     gsap.ticker.add((time) => {
    //         lenis.raf(time * 1000);
    //     });
    //     gsap.ticker.lagSmoothing(0);
    // }

    // GSAP Animations
    if (window.gsap) {
        gsap.from("#hero-section .hero-content > *", {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out",
            delay: 0.5
        });

        document.querySelectorAll('.animate-title').forEach(title => {
            gsap.from(title.children, {
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
        });

        function animateSectionCards(selector, trigger) {
            const cards = document.querySelectorAll(selector);
            if (cards.length > 0) {
                gsap.from(cards, {
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

        animateSectionCards('#services .animate-card', '#services .grid');
        animateSectionCards('#philosophie .animate-card', '#philosophie .grid');
        animateSectionCards('#founders .animate-card', '#founders .grid');
        animateSectionCards('#realisations .animate-card', '#realisations .grid');

        document.querySelectorAll('.animate-fade-in').forEach(el => {
            gsap.from(el, {
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

    // Navigation smooth scrolling
    document.querySelectorAll('header nav a, .nav-link-cta').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                // if (window.lenis) {
                //     lenis.scrollTo(targetSection);
                // } else {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                // }
            }
        });
    });

    // Language switching
    if (langSwitchBtn) {
        langSwitchBtn.addEventListener('click', () => {
            const newLang = currentLang === 'fr' ? 'en' : 'fr';
            setLanguage(newLang);
        });
    }

    if (mobileLangSwitchBtn) {
        mobileLangSwitchBtn.addEventListener('click', () => {
            const newLang = currentLang === 'fr' ? 'en' : 'fr';
            setLanguage(newLang);
        });
    }

    // Mobile menu functionality
    if (mobileMenuToggle && mobileMenu && mobileMenuClose) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('show');
            mobileMenuToggle.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
        });

        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('show');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });

        // Close mobile menu when clicking on links
        const mobileNavLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('show');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });

        // Close mobile menu when clicking outside
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                mobileMenu.classList.remove('show');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }

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

    // Case study modals
    document.querySelectorAll('.case-study-btn').forEach(button => {
        button.addEventListener('click', () => {
            const caseStudyId = button.dataset.caseStudy;
            openCaseStudyModal(caseStudyId);
        });
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeCaseStudyModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeCaseStudyModal();
            }
        });
    }

    // Expertise tabs
    if (expertiseTabsContainer) {
        expertiseTabsContainer.addEventListener('click', (e) => {
            if (e.target.matches('.expertise-tab')) {
                const tabId = e.target.dataset.tab;
                expertiseTabsContainer.querySelectorAll('.expertise-tab').forEach(tab => tab.classList.remove('active'));
                e.target.classList.add('active');
                document.querySelectorAll('.expertise-content').forEach(content => content.classList.remove('active'));
                const targetContent = document.getElementById(`tab-${tabId}`);
                if (targetContent) targetContent.classList.add('active');
            }
        });
    }

    // Touch device detection
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
        document.body.classList.add('is-touch-device');
    }

    // 3D Hero Animation
    const heroContainer = document.getElementById('hero-canvas-container');
    if (heroContainer && window.THREE) {
        const canvas = document.getElementById('hero-canvas');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, heroContainer.clientWidth / heroContainer.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
        renderer.setSize(heroContainer.clientWidth, heroContainer.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const archGroup = new THREE.Group();
        scene.add(archGroup);

        const material = new THREE.MeshPhysicalMaterial({
            color: 0x4c1d95, // Dark Purple
            metalness: 0.3,
            roughness: 0.4,
            transmission: 0,
            ior: 1.5,
            emissive: 0x1e0a30,
            emissiveIntensity: 0.5,
        });

        // Create and position arches based on logo
        const archParams = [
            { radius: 30, tube: 1.5, z: 0 },
            { radius: 24, tube: 1.5, z: 4 },
            { radius: 18, tube: 1.5, z: 8 },
        ];

        archParams.forEach(params => {
            const geometry = new THREE.TorusGeometry(params.radius, params.tube, 32, 100, Math.PI);
            const arch = new THREE.Mesh(geometry, material);
            arch.position.z = params.z;
            archGroup.add(arch);
        });

        archGroup.position.set(30, 0, -20);
        archGroup.rotation.x = -Math.PI / 2;
        archGroup.rotation.z = Math.PI;

        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 5000;
        const posArray = new Float32Array(particlesCount * 3);
        for(let i = 0; i < particlesCount * 3; i++) {
            posArray[i * 3 + 0] = (Math.random() - 0.5) * 200;
            posArray[i * 3 + 1] = (Math.random() - 0.5) * 200;
            posArray[i * 3 + 2] = (Math.random() - 0.5) * 200;
        }
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.1,
            color: 0x8A70D6,
            transparent: true,
            opacity: 0.5,
            blending: THREE.AdditiveBlending
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        camera.position.z = 80;
        camera.position.y = 10;

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0x8A70D6, 1.5);
        directionalLight.position.set(-10, 20, 30);
        scene.add(directionalLight);

        const pointLight2 = new THREE.PointLight(0x34D399, 2.0, 200);
        pointLight2.position.set(50, -10, 0);
        scene.add(pointLight2);

        let mouseX = 0;
        let mouseY = 0;
        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        });

        const clock = new THREE.Clock();
        const animate = function () {
            requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();

            // Multi-axis rotation for the arch group
            archGroup.rotation.x = -Math.PI / 2 + Math.sin(elapsedTime * 0.2) * 0.25;
            archGroup.rotation.y = elapsedTime * 0.15;
            archGroup.rotation.z = Math.PI + Math.cos(elapsedTime * 0.2) * 0.25;

            // Camera parallax effect
            camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
            camera.position.y += (-mouseY * 5 - camera.position.y) * 0.05;
            camera.lookAt(archGroup.position);

            particlesMesh.rotation.y = -elapsedTime * 0.03;
            renderer.render(scene, camera);
        };
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = heroContainer.clientWidth / heroContainer.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(heroContainer.clientWidth, heroContainer.clientHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });
    }

    // Initialize Lenis smooth scrolling (temporarily disabled for debugging)
    // if (typeof Lenis !== 'undefined') {
    //     const lenis = new Lenis({
    //         duration: 1.2,
    //         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    //         direction: 'vertical',
    //         gestureDirection: 'vertical',
    //         smooth: true,
    //         mouseMultiplier: 1,
    //         smoothTouch: false,
    //         touchMultiplier: 2,
    //         infinite: false,
    //     });

    //     function raf(time) {
    //         lenis.raf(time);
    //         requestAnimationFrame(raf);
    //     }
    //     requestAnimationFrame(raf);
    // }

    // Initialize GSAP ScrollTrigger
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        // Animate elements on scroll
        gsap.utils.toArray('.animate-title').forEach((element) => {
            gsap.fromTo(element, 
                { opacity: 0, y: 50 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 1,
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        gsap.utils.toArray('.animate-card').forEach((element) => {
            gsap.fromTo(element, 
                { opacity: 0, y: 30 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }

    // Initial call
    setLanguage(currentLang);
    populateExpertises();
    
    // Show hero content immediately
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('loaded');
    }
    
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Language switch functionality
    const langSwitch = document.getElementById('lang-switch');
    const mobileLangSwitch = document.getElementById('mobile-lang-switch');
    
    if (langSwitch) {
        langSwitch.addEventListener('click', () => {
            currentLang = currentLang === 'fr' ? 'en' : 'fr';
            setLanguage(currentLang);
            langSwitch.textContent = currentLang === 'fr' ? 'EN' : 'FR';
        });
    }
    
    if (mobileLangSwitch) {
        mobileLangSwitch.addEventListener('click', () => {
            currentLang = currentLang === 'fr' ? 'en' : 'fr';
            setLanguage(currentLang);
            mobileLangSwitch.textContent = currentLang === 'fr' ? 'EN' : 'FR';
        });
    }
});
