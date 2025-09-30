// Configuration i18n pour Astro
export const languages = {
  fr: 'Français',
  en: 'English',
} as const;

export const defaultLang = 'fr' as const;

export const ui = {
  fr: {
    // Navigation
    "nav.approach": "Approche",
    "nav.services": "Services",
    "nav.founders": "Fondateurs",
    "nav.network": "Réseau",
    "nav.guests": "Invités",
    "nav.media": "Média",
    "nav.case-studies": "Études de Cas",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "Votre Partenaire Web3 Complet",
    "hero.subtitle":
      "3 experts fondateurs pour la stratégie + un réseau de spécialistes pour l'exécution. De la vision à la réalisation, nous orchestrons votre succès Web3.",
    "hero.cta1": "Découvrir notre approche",
    "hero.cta2": "Voir notre média",

    // Hybrid Approach
    "approach.title":
      '<span class="font-playfair">Notre Approche</span> <i class="font-playfair">Hybride</i>',
    "approach.subtitle":
      "Une combinaison unique de consulting stratégique et d'exécution spécialisée pour maximiser votre succès Web3.",
    "approach1.title": "Stratégie & Vision",
    "approach1.desc":
      "3 experts fondateurs coordonnent votre vision technique, financière et communautaire avec une expertise de haut niveau.",
    "approach2.title": "Exécution Spécialisée",
    "approach2.desc":
      "Notre réseau de spécialistes vérifiés implémente chaque aspect technique : dev, design, légal, grants, business dev.",
    "approach3.title": "Média & Communauté",
    "approach3.desc":
      "Notre plateforme média amplifie votre projet avec du contenu éducatif, une communauté active et des insights Web3.",

    // Services
    "services.title":
      '<span class="font-playfair">Une offre</span> de services <i class="font-playfair">360°</i>',
    "services.subtitle":
      "Nous couvrons l'ensemble du cycle de vie de votre projet Web3.",
    "service1.title": "Tech & Sécurité",
    "service1.desc":
      "Architecture de solutions blockchain, développement et audit de smart contracts, optimisation des performances et des coûts (gas fees).",
    "service2.title": "Finance & Tokenomics",
    "service2.desc":
      "Conception de modèles économiques durables, stratégie de levée de fonds (IDO, private rounds), listing sur exchanges et conformité réglementaire.",
    "service3.title": "Marketing & Croissance",
    "service3.desc":
      "Stratégies de croissance et d'engagement, community building, marketing et PR, amplifiés par notre propre plateforme média.",
    "service4.title": "Stratégie & Coordination",
    "service4.desc":
      "Vision globale, coordination des experts, gestion de projet et suivi des objectifs pour assurer la cohérence de votre écosystème.",

    // Philosophy
    "philosophy.title":
      '<span class="font-playfair">Notre Philosophie :</span> Du Concept au <i class="font-playfair">Succès Commercial</i>',
    "philosophy.subtitle":
      "Notre mission : transformer la complexité du Web3 en opportunités commerciales. Nous vous donnons les clés pour innover, sécuriser votre projet et assurer sa croissance.",
    "benefit1.title": "Transformer l'Idée en Projet Rentable",
    "benefit1.desc":
      "Nous ne construisons pas seulement de la technologie. Nous créons des modèles économiques viables et des stratégies de monétisation qui assurent la pérennité de votre vision.",
    "benefit2.title": "Sécuriser Vos Actifs Numériques",
    "benefit2.desc":
      "Dans un monde décentralisé, la confiance est primordiale. Nos audits rigoureux et notre architecture sécurisée protègent votre projet, vos utilisateurs et votre réputation.",
    "benefit3.title": "Créer une Communauté Engagée et Fidèle",
    "benefit3.desc":
      "Un projet ne vit que par sa communauté. Nous déployons des stratégies authentiques pour attirer, engager et transformer vos utilisateurs en véritables ambassadeurs.",

    // Founders
    "founders.title":
      '<span class="font-playfair">3 Coordinateurs</span> <i class="font-playfair">Experts</i>',
    "founders.subtitle":
      "Nos fondateurs coordonnent votre vision stratégique tout en orchestrant notre réseau de spécialistes pour une exécution parfaite.",
    "antoine.role": "Tech & Architecture",
    "antoine.desc":
      "CTO de 3 entreprises blockchain, expert en sécurité et optimisation. Antoine coordonne l'aspect technique de votre projet et supervise notre réseau de développeurs.",
    "aaron.role": "Finance & Tokenomics",
    "aaron.desc":
      "Expert DeFi et participant actif dans TokenomicsDAO. Aaron conçoit votre modèle économique et coordonne nos spécialistes financiers pour maximiser votre succès.",
    "samir.role": "Marketing & Communauté",
    "samir.desc":
      "Bâtisseur de communautés (+30 000 membres), expert en contenu et stratégie média. Samir coordonne notre réseau marketing et amplifie votre projet via notre plateforme.",

    // Network
    "network.title":
      '<span class="font-playfair">Notre Réseau</span> de <i class="font-playfair">Spécialistes</i>',
    "network.subtitle":
      "Un écosystème de partenaires de premier plan pour couvrir tous les aspects de votre projet.",
    "network.dev": "Développement & Sécurité",
    "network.finance": "Finance & Tokenomics",
    "network.legal": "Légal & Conformité",
    "network.marketing": "Marketing & Communauté",
    "network.business": "Business Development",
    "network.design": "Design & UX/UI",
    "network.grants": "Grants & Fundraising",

    // Network Partners
    "network.partners.title": "Nos Partenaires Stratégiques",
    "network.partners.subtitle":
      "Un écosystème de partenaires de premier plan pour couvrir tous les aspects de votre projet.",

    // Media & Community
    "media.title":
      '<span class="font-playfair">Média &</span> <i class="font-playfair">Communauté</i>',
    "media.subtitle":
      "Notre plateforme média amplifie votre projet avec du contenu éducatif, une communauté active et des insights Web3.",
    "media.discord": "Discord Communauté",
    "media.twitter": "Twitter Insights",
    "media.youtube": "YouTube Éducatif",
    "media.twitch": "Twitch Live",
    "media.blog": "Blog & Analyses",
    "media.events": "Événements & Networking",
    "media.members": "membres",
    "media.discord.desc": "Communauté active pour échanger, apprendre et réseauter",
    "media.twitter.desc": "Insights quotidiens sur l'écosystème Web3",
    "media.youtube.desc": "Tutoriels, analyses et lives éducatifs",
    "media.twitch.desc": "Lives interactifs et discussions Web3",
    "media.blog.desc": "Analyses approfondies et guides pratiques",
    "media.events.desc": "Conférences, meetups et événements communautaires",
    "media.join": "Rejoindre",
    "media.follow": "Suivre",
    "media.watch": "Regarder",
    "media.read": "Lire",
    "media.discover": "Découvrir",
    "media.total.community": "Communauté totale",
    "media.active.content": "Contenu actif",

    // Mid CTA
    "cta.mid.title": "Une question ? Un projet ?",
    "cta.mid.subtitle":
      "Notre équipe est prête à échanger avec vous. Contactez-nous pour concrétiser votre vision.",

    // Expertises
    "expertises.title":
      '<span class="font-playfair">Nos</span> Expertises <i class="font-playfair">Détaillées</i>',
    "expertises.subtitle":
      "Une vision 360° portée par quatre pôles de compétences stratégiques.",
    "expertises.tab.finance": "Finance & Tokenomics",
    "expertises.tab.tech": "Tech & Développement",
    "expertises.tab.marketing": "Marketing & Communauté",
    "expertises.tab.strategy": "Stratégie & Opérations",

    // Case Studies
    "case-studies.title":
      '<span class="font-playfair">Nos Études</span> de <i class="font-playfair">Cas</i>',
    "case-studies.subtitle":
      "Découvrez comment nous avons transformé les défis de nos clients en succès mesurables.",
    "case-study.btn": "Voir l'étude de cas",
    "case-study1.title": "The Architech",
    "case-study1.desc":
      "Co-fondation d'une plateforme SaaS pour générer des fondations de projets logiciels de qualité professionnelle en quelques minutes.",
    "case-study2.title": "Ago DeFi",
    "case-study2.desc":
      "Gestion et animation d'une communauté de +30 000 membres pour une plateforme de finance décentralisée.",
    "case-study3.title": "Hashguard",
    "case-study3.desc":
      "Direction technique (CTO) et développement d'un POC pour un projet innovant, de la R&D à la mise en production.",

    // Ecosystem
    "ecosystem.title":
      '<span class="font-playfair">Un Écosystème</span> d\'Experts à votre <i class="font-playfair">service</i>',
    "ecosystem.subtitle":
      "Nous avons pré-sélectionné et intégré un réseau de partenaires de premier plan pour couvrir tous les aspects de votre projet, de l'audit à la conformité.",
    partner1: "Fonds d'Investissement",
    "partner1.desc": "Accès privilégié aux investisseurs Web3",
    partner2: "Experts en Audit de Sécurité",
    "partner2.desc": "Auditeurs de sécurité certifiés",
    partner3: "Cabinets Juridiques",
    "partner3.desc": "Expertise légale Web3 et RWA",
    partner4: "Protocoles Blockchain & L2s",
    "partner4.desc": "Intégrations blockchain natives",
    partner5: "Agences de Développement",
    "partner5.desc": "Développement et intégration",
    partner6: "Spécialistes UX/UI",
    "partner6.desc": "Design et expérience utilisateur",

    // Contact
    "contact.title": "Prêt à construire l'avenir ?",
    "contact.subtitle":
      "Discutons de votre projet. Planifiez un appel exploratoire gratuit avec nos fondateurs pour voir comment nous pouvons vous aider à atteindre vos objectifs.",
    "contact.cta1": "Planifier un appel",
    "contact.cta2": "Nous envoyer un message",

    // Footer
    "footer.rights": "© 2025 The Arch Consulting. Tous droits réservés.",

    // Guests Section
    "guests.title": '<span class="font-playfair">Ils sont passés</span> <i class="font-playfair">chez nous</i>',
    "guests.subtitle": "Découvrez les experts Web3 qui ont partagé leur vision et leur expertise dans nos émissions live.",
    "guests.experts": "Experts",
    "guests.episodes": "Épisodes",
    "guests.views": "Vues",
    "guests.french": "Français",
    "guests.seeAll": "Voir tous les épisodes",

    // Live Page
    "live.title": "Nos Émissions Live",
    "live.description": "Découvrez nos conversations avec les leaders du Web3 français. Insights, analyses et retours d'expérience exclusifs.",
    "live.heroTitle": "Conversations avec les Leaders du Web3",
    "live.heroSubtitle": "Plongez dans l'univers du Web3 français à travers nos émissions exclusives avec les acteurs clés de l'écosystème.",
    "live.ctaTitle": "Prêt à découvrir l'écosystème Web3 ?",
    "live.ctaSubtitle": "Rejoignez notre communauté et accédez à du contenu exclusif avec les experts du secteur.",
    "live.cta1": "Réserver un appel",
    "live.cta2": "S'abonner à YouTube",
  },
  en: {
    // Navigation
    "nav.approach": "Approach",
    "nav.services": "Services",
    "nav.founders": "Founders",
    "nav.network": "Network",
    "nav.guests": "Guests",
    "nav.media": "Media",
    "nav.case-studies": "Case Studies",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "Your Complete Web3 Partner",
    "hero.subtitle":
      "3 founding experts for strategy + a network of specialists for execution. From vision to realization, we orchestrate your Web3 success.",
    "hero.cta1": "Discover our approach",
    "hero.cta2": "See our media",

    // Hybrid Approach
    "approach.title":
      '<span class="font-playfair">Our Hybrid</span> <i class="font-playfair">Approach</i>',
    "approach.subtitle":
      "A unique combination of strategic consulting and specialized execution to maximize your Web3 success.",
    "approach1.title": "Strategy & Vision",
    "approach1.desc":
      "3 founding experts coordinate your technical, financial and community vision with high-level expertise.",
    "approach2.title": "Specialized Execution",
    "approach2.desc":
      "Our network of verified specialists implements every technical aspect: dev, design, legal, grants, business dev.",
    "approach3.title": "Media & Community",
    "approach3.desc":
      "Our media platform amplifies your project with educational content, active community and Web3 insights.",

    // Services
    "services.title":
      '<span class="font-playfair">A</span> 360° service <i class="font-playfair">offering</i>',
    "services.subtitle": "We cover the entire lifecycle of your Web3 project.",
    "service1.title": "Tech & Security",
    "service1.desc":
      "Blockchain solution architecture, smart contract development and auditing, performance and cost optimization (gas fees).",
    "service2.title": "Finance & Tokenomics",
    "service2.desc":
      "Design of sustainable economic models, fundraising strategy (IDO, private rounds), exchange listings and regulatory compliance.",
    "service3.title": "Marketing & Growth",
    "service3.desc":
      "Growth and engagement strategies, community building, marketing and PR, amplified by our own media platform.",
    "service4.title": "Strategy & Coordination",
    "service4.desc":
      "Global vision, expert coordination, project management and goal tracking to ensure your ecosystem coherence.",

    // Philosophy
    "philosophy.title":
      '<span class="font-playfair">Our Philosophy:</span> From Concept to <i class="font-playfair">Commercial Success</i>',
    "philosophy.subtitle":
      "Our mission: transform Web3 complexity into commercial opportunities. We give you the keys to innovate, secure your project and ensure its growth.",
    "benefit1.title": "Transform Ideas into Profitable Projects",
    "benefit1.desc":
      "We don't just build technology. We create viable economic models and monetization strategies that ensure the sustainability of your vision.",
    "benefit2.title": "Secure Your Digital Assets",
    "benefit2.desc":
      "In a decentralized world, trust is paramount. Our rigorous audits and secure architecture protect your project, your users and your reputation.",
    "benefit3.title": "Create an Engaged and Loyal Community",
    "benefit3.desc":
      "A project only lives through its community. We deploy authentic strategies to attract, engage and transform your users into true ambassadors.",

    // Founders
    "founders.title":
      '<span class="font-playfair">3 Expert</span> <i class="font-playfair">Coordinators</i>',
    "founders.subtitle":
      "Our founders coordinate your strategic vision while orchestrating our network of specialists for perfect execution.",
    "antoine.role": "Tech & Architecture",
    "antoine.desc":
      "CTO of 3 blockchain companies, security and optimization expert. Antoine coordinates the technical aspect of your project and supervises our developer network.",
    "aaron.role": "Finance & Tokenomics",
    "aaron.desc":
      "DeFi expert and active participant in TokenomicsDAO. Aaron designs your economic model and coordinates our financial specialists to maximize your success.",
    "samir.role": "Marketing & Community",
    "samir.desc":
      "Community builder (+30,000 members), content and media strategy expert. Samir coordinates our marketing network and amplifies your project through our platform.",

    // Network
    "network.title":
      '<span class="font-playfair">Our Network</span> of <i class="font-playfair">Specialists</i>',
    "network.subtitle":
      "An ecosystem of leading partners to cover all aspects of your project.",
    "network.dev": "Development & Security",
    "network.finance": "Finance & Tokenomics",
    "network.legal": "Legal & Compliance",
    "network.marketing": "Marketing & Community",
    "network.business": "Business Development",
    "network.design": "Design & UX/UI",
    "network.grants": "Grants & Fundraising",

    // Network Partners
    "network.partners.title": "Our Strategic Partners",
    "network.partners.subtitle": "",

    // Media & Community
    "media.title":
      '<span class="font-playfair">Media &</span> <i class="font-playfair">Community</i>',
    "media.subtitle":
      "Our media platform amplifies your project with educational content, active community and Web3 insights.",
    "media.discord": "Discord Community",
    "media.twitter": "Twitter Insights",
    "media.youtube": "Educational YouTube",
    "media.twitch": "Twitch Live",
    "media.blog": "Blog & Analysis",
    "media.events": "Events & Networking",
    "media.members": "members",
    "media.discord.desc": "Active community to exchange, learn and network",
    "media.twitter.desc": "Daily insights on the Web3 ecosystem",
    "media.youtube.desc": "Tutorials, analysis and educational live streams",
    "media.twitch.desc": "Interactive live streams and Web3 discussions",
    "media.blog.desc": "In-depth analysis and practical guides",
    "media.events.desc": "Conferences, meetups and community events",
    "media.join": "Join",
    "media.follow": "Follow",
    "media.watch": "Watch",
    "media.read": "Read",
    "media.discover": "Discover",
    "media.total.community": "Total community",
    "media.active.content": "Active content",

    // Mid CTA
    "cta.mid.title": "A question? A project?",
    "cta.mid.subtitle":
      "Our team is ready to discuss with you. Contact us to bring your vision to life.",

    // Expertises
    "expertises.title":
      '<span class="font-playfair">Our</span> Detailed <i class="font-playfair">Expertise</i>',
    "expertises.subtitle":
      "A 360° vision driven by four strategic areas of expertise.",
    "expertises.tab.finance": "Finance & Tokenomics",
    "expertises.tab.tech": "Tech & Development",
    "expertises.tab.marketing": "Marketing & Community",
    "expertises.tab.strategy": "Strategy & Operations",

    // Case Studies
    "case-studies.title":
      '<span class="font-playfair">Our Case</span> <i class="font-playfair">Studies</i>',
    "case-studies.subtitle":
      "Discover how we transformed our clients' challenges into measurable success.",
    "case-study.btn": "View case study",
    "case-study1.title": "The Architech",
    "case-study1.desc":
      "Co-founding a SaaS platform to generate professional-quality software project foundations in minutes.",
    "case-study2.title": "Ago DeFi",
    "case-study2.desc":
      "Management and animation of a +30,000 member community for a decentralized finance platform.",
    "case-study3.title": "Hashguard",
    "case-study3.desc":
      "Technical direction (CTO) and development of a POC for an innovative project, from R&D to production.",

    // Ecosystem
    "ecosystem.title":
      '<span class="font-playfair">An Ecosystem</span> of Experts at your <i class="font-playfair">service</i>',
    "ecosystem.subtitle":
      "We have pre-selected and integrated a network of leading partners to cover all aspects of your project, from audit to compliance.",
    partner1: "Investment Funds",
    "partner1.desc": "Privileged access to Web3 investors",
    partner2: "Security Audit Experts",
    "partner2.desc": "Certified security auditors",
    partner3: "Legal Firms",
    "partner3.desc": "Web3 and RWA legal expertise",
    partner4: "Blockchain Protocols & L2s",
    "partner4.desc": "Native blockchain integrations",
    partner5: "Development Agencies",
    "partner5.desc": "Development and integration",
    partner6: "UX/UI Specialists",
    "partner6.desc": "Design and user experience",

    // Contact
    "contact.title": "Ready to build the future?",
    "contact.subtitle":
      "Let's discuss your project. Schedule a free exploratory call with our founders to see how we can help you achieve your goals.",
    "contact.cta1": "Schedule a Call",
    "contact.cta2": "Send us a message",

    // Footer
    "footer.rights": "© 2025 The Arch Consulting. All rights reserved.",

    // Guests Section
    "guests.title": '<span class="font-playfair">They\'ve been</span> <i class="font-playfair">on our show</i>',
    "guests.subtitle": "Discover the Web3 experts who have shared their vision and expertise in our live shows.",
    "guests.experts": "Experts",
    "guests.episodes": "Episodes",
    "guests.views": "Views",
    "guests.french": "French",
    "guests.seeAll": "See all episodes",

    // Live Page
    "live.title": "Our Live Shows",
    "live.description": "Discover our conversations with French Web3 leaders. Exclusive insights, analyses and feedback.",
    "live.heroTitle": "Conversations with Web3 Leaders",
    "live.heroSubtitle": "Dive into the French Web3 universe through our exclusive shows with key ecosystem players.",
    "live.ctaTitle": "Ready to discover the Web3 ecosystem?",
    "live.ctaSubtitle": "Join our community and access exclusive content with industry experts.",
    "live.cta1": "Schedule a call",
    "live.cta2": "Subscribe to YouTube",
  },
} as const;

export type Lang = keyof typeof languages;
export type UI = typeof ui[Lang];
