// Configuration i18n pour Astro
export const languages = {
  fr: 'Français',
  en: 'English',
} as const;

export const defaultLang = 'fr' as const;

export const ui = {
  fr: {
    // Navigation
    'nav.services': 'Services',
    'nav.philosophy': 'Philosophie',
    'nav.expertises': 'Expertises',
    'nav.case-studies': 'Études de Cas',
    'nav.ecosystem': 'Écosystème',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': "L'architecture de votre succès en Web3",
    'hero.subtitle': "Nous fusionnons les expertises Tech, Finance et Communautaire pour bâtir des écosystèmes Web3 robustes et pérennes.",
    'hero.cta1': 'Planifier un appel',
    'hero.cta2': 'Nous écrire',
    
    // Services
    'services.title': '<span class="font-playfair">Une offre</span> de services <i class="font-playfair">360°</i>',
    'services.subtitle': "Nous couvrons l'ensemble du cycle de vie de votre projet Web3.",
    'service1.title': 'Tech & Sécurité',
    'service1.desc': 'Architecture de solutions blockchain, développement et audit de smart contracts, optimisation des performances et des coûts (gas fees).',
    'service2.title': 'Finance & Tokenomics',
    'service2.desc': 'Conception de modèles économiques durables, stratégie de levée de fonds (IDO, private rounds), listing sur exchanges et conformité réglementaire.',
    'service3.title': 'Marketing & Croissance',
    'service3.desc': 'Stratégies de croissance et d\'engagement, community building, marketing et PR, amplifiés par notre propre plateforme média.',
    
    // Philosophy
    'philosophy.title': '<span class="font-playfair">Notre Philosophie :</span> Du Concept au <i class="font-playfair">Succès Commercial</i>',
    'philosophy.subtitle': 'Notre mission : transformer la complexité du Web3 en opportunités commerciales. Nous vous donnons les clés pour innover, sécuriser votre projet et assurer sa croissance.',
    'benefit1.title': 'Transformer l\'Idée en Projet Rentable',
    'benefit1.desc': 'Nous ne construisons pas seulement de la technologie. Nous créons des modèles économiques viables et des stratégies de monétisation qui assurent la pérennité de votre vision.',
    'benefit2.title': 'Sécuriser Vos Actifs Numériques',
    'benefit2.desc': 'Dans un monde décentralisé, la confiance est primordiale. Nos audits rigoureux et notre architecture sécurisée protègent votre projet, vos utilisateurs et votre réputation.',
    'benefit3.title': 'Créer une Communauté Engagée et Fidèle',
    'benefit3.desc': 'Un projet ne vit que par sa communauté. Nous déployons des stratégies authentiques pour attirer, engager et transformer vos utilisateurs en véritables ambassadeurs.',
    
    // Founders
    'founders.title': '<span class="font-playfair">Dirigé par</span> des Fondateurs <i class="font-playfair">Experts</i>',
    'founders.subtitle': 'Notre force réside dans la synergie. Stratégie technique, modèle financier et plan marketing sont unifiés dès le premier jour pour une cohérence absolue.',
    'antoine.role': 'Tech & Architecture',
    'antoine.desc': 'Architecte de solutions blockchain, expert en sécurité des smart contracts et en optimisation des performances. Antoine assure que votre projet est construit sur des bases techniques inébranlables.',
    'aaron.role': 'Finance & Tokenomics',
    'aaron.desc': 'Spécialiste de la finance décentralisée (DeFi), de la modélisation de tokenomics et de la stratégie de levée de fonds. Il conçoit l\'épine dorsale économique de votre écosystème.',
    'samir.role': 'Marketing & Communauté',
    'samir.desc': 'Expert en stratégies de contenu et en gestion de communautés à grande échelle (+30 000 membres). Samir bâtit et engage l\'audience qui portera votre projet vers le succès.',
    
    // Mid CTA
    'cta.mid.title': 'Une question ? Un projet ?',
    'cta.mid.subtitle': 'Notre équipe est prête à échanger avec vous. Contactez-nous pour concrétiser votre vision.',
    
    // Expertises
    'expertises.title': '<span class="font-playfair">Nos</span> Expertises <i class="font-playfair">Détaillées</i>',
    'expertises.subtitle': 'Une vision 360° portée par quatre pôles de compétences stratégiques.',
    
    // Case Studies
    'case-studies.title': '<span class="font-playfair">Nos Études</span> de <i class="font-playfair">Cas</i>',
    'case-studies.subtitle': 'Découvrez comment nous avons transformé les défis de nos clients en succès mesurables.',
    'case-study.btn': 'Voir l\'étude de cas',
    'case-study1.title': 'The Architech',
    'case-study1.desc': 'Co-fondation d\'une plateforme SaaS pour générer des fondations de projets logiciels de qualité professionnelle en quelques minutes.',
    'case-study2.title': 'Ago DeFi',
    'case-study2.desc': 'Gestion et animation d\'une communauté de +30 000 membres pour une plateforme de finance décentralisée.',
    'case-study3.title': 'Hashguard',
    'case-study3.desc': 'Direction technique (CTO) et développement d\'un POC pour un projet innovant, de la R&D à la mise en production.',
    
    // Ecosystem
    'ecosystem.title': '<span class="font-playfair">Un Écosystème</span> d\'Experts à votre <i class="font-playfair">service</i>',
    'ecosystem.subtitle': 'Nous avons pré-sélectionné et intégré un réseau de partenaires de premier plan pour couvrir tous les aspects de votre projet, de l\'audit à la conformité.',
    'partner1': 'Fonds d\'Investissement',
    'partner2': 'Experts en Audit de Sécurité',
    'partner3': 'Cabinets Juridiques',
    'partner4': 'Protocoles Blockchain & L2s',
    'partner5': 'Agences de Développement',
    'partner6': 'Spécialistes UX/UI',
    
    // Contact
    'contact.title': 'Prêt à construire l\'avenir ?',
    'contact.subtitle': 'Discutons de votre projet. Planifiez un appel exploratoire gratuit avec nos fondateurs pour voir comment nous pouvons vous aider à atteindre vos objectifs.',
    'contact.cta1': 'Planifier un appel',
    'contact.cta2': 'Nous envoyer un message',
    
    // Footer
    'footer.rights': '© 2025 The Arch Consulting. Tous droits réservés.',
  },
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.philosophy': 'Philosophy',
    'nav.expertises': 'Expertise',
    'nav.case-studies': 'Case Studies',
    'nav.ecosystem': 'Ecosystem',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Architecting your success in Web3',
    'hero.subtitle': 'We merge Tech, Finance, and Community expertise to build robust and sustainable Web3 ecosystems.',
    'hero.cta1': 'Schedule a Call',
    'hero.cta2': 'Write to Us',
    
    // Services
    'services.title': '<span class="font-playfair">A</span> 360° service <i class="font-playfair">offering</i>',
    'services.subtitle': 'We cover the entire lifecycle of your Web3 project.',
    'service1.title': 'Tech & Security',
    'service1.desc': 'Blockchain solution architecture, smart contract development and auditing, performance and cost optimization (gas fees).',
    'service2.title': 'Finance & Tokenomics',
    'service2.desc': 'Design of sustainable economic models, fundraising strategy (IDO, private rounds), exchange listings and regulatory compliance.',
    'service3.title': 'Marketing & Growth',
    'service3.desc': 'Growth and engagement strategies, community building, marketing and PR, amplified by our own media platform.',
    
    // Philosophy
    'philosophy.title': '<span class="font-playfair">Our Philosophy:</span> From Concept to <i class="font-playfair">Commercial Success</i>',
    'philosophy.subtitle': 'Our mission: transform Web3 complexity into commercial opportunities. We give you the keys to innovate, secure your project and ensure its growth.',
    'benefit1.title': 'Transform Ideas into Profitable Projects',
    'benefit1.desc': 'We don\'t just build technology. We create viable economic models and monetization strategies that ensure the sustainability of your vision.',
    'benefit2.title': 'Secure Your Digital Assets',
    'benefit2.desc': 'In a decentralized world, trust is paramount. Our rigorous audits and secure architecture protect your project, your users and your reputation.',
    'benefit3.title': 'Create an Engaged and Loyal Community',
    'benefit3.desc': 'A project only lives through its community. We deploy authentic strategies to attract, engage and transform your users into true ambassadors.',
    
    // Founders
    'founders.title': '<span class="font-playfair">Led by</span> Expert <i class="font-playfair">Founders</i>',
    'founders.subtitle': 'Our strength lies in synergy. Technical strategy, financial model and marketing plan are unified from day one for absolute consistency.',
    'antoine.role': 'Tech & Architecture',
    'antoine.desc': 'Blockchain solution architect, smart contract security and performance optimization expert. Antoine ensures your project is built on unshakeable technical foundations.',
    'aaron.role': 'Finance & Tokenomics',
    'aaron.desc': 'Decentralized finance (DeFi) specialist, tokenomics modeling and fundraising strategy. He designs the economic backbone of your ecosystem.',
    'samir.role': 'Marketing & Community',
    'samir.desc': 'Content strategy and large-scale community management expert (+30,000 members). Samir builds and engages the audience that will carry your project to success.',
    
    // Mid CTA
    'cta.mid.title': 'A question? A project?',
    'cta.mid.subtitle': 'Our team is ready to discuss with you. Contact us to bring your vision to life.',
    
    // Expertises
    'expertises.title': '<span class="font-playfair">Our</span> Detailed <i class="font-playfair">Expertise</i>',
    'expertises.subtitle': 'A 360° vision driven by four strategic areas of expertise.',
    
    // Case Studies
    'case-studies.title': '<span class="font-playfair">Our Case</span> <i class="font-playfair">Studies</i>',
    'case-studies.subtitle': 'Discover how we transformed our clients\' challenges into measurable success.',
    'case-study.btn': 'View case study',
    'case-study1.title': 'The Architech',
    'case-study1.desc': 'Co-founding a SaaS platform to generate professional-quality software project foundations in minutes.',
    'case-study2.title': 'Ago DeFi',
    'case-study2.desc': 'Management and animation of a +30,000 member community for a decentralized finance platform.',
    'case-study3.title': 'Hashguard',
    'case-study3.desc': 'Technical direction (CTO) and development of a POC for an innovative project, from R&D to production.',
    
    // Ecosystem
    'ecosystem.title': '<span class="font-playfair">An Ecosystem</span> of Experts at your <i class="font-playfair">service</i>',
    'ecosystem.subtitle': 'We have pre-selected and integrated a network of leading partners to cover all aspects of your project, from audit to compliance.',
    'partner1': 'Investment Funds',
    'partner2': 'Security Audit Experts',
    'partner3': 'Legal Firms',
    'partner4': 'Blockchain Protocols & L2s',
    'partner5': 'Development Agencies',
    'partner6': 'UX/UI Specialists',
    
    // Contact
    'contact.title': 'Ready to build the future?',
    'contact.subtitle': 'Let\'s discuss your project. Schedule a free exploratory call with our founders to see how we can help you achieve your goals.',
    'contact.cta1': 'Schedule a Call',
    'contact.cta2': 'Send us a message',
    
    // Footer
    'footer.rights': '© 2025 The Arch Consulting. All rights reserved.',
  },
} as const;

export type Lang = keyof typeof languages;
export type UI = typeof ui[Lang];
