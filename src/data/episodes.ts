// Episode data for live shows - extracted from CSV and structured
export interface Guest {
  name: string;
  company: string;
  role: string;
  linkedin: string;
  avatar: string;
}

export interface ProjectDetails {
  challenge: string;
  solution: string;
  results: string[];
}

export interface Episode {
  id: string;
  guest: Guest;
  youtube: string;
  thumbnail: string;
  duration: string;
  date: string;
  category: string;
  tags: string[];
  summary: string;
  keyInsights: string[];
  limitations: string[];
  learnings: string[];
  projectDetails: ProjectDetails;
}
export const episodes = [
  {
    id: "jeremy-asta-vola",
    guest: {
      name: "Jérémy Asta Vola",
      company: "MORELL ALART & Associés",
      role: "Avocat spécialisé Web3",
      linkedin: "https://www.linkedin.com/in/jérémy-asta-vola-709921125/",
      avatar: "https://media.licdn.com/dms/image/C4D03AQF8QZ8QZ8QZ8Q/profile-displayphoto-shrink_800_800/0/1516254000000?e=1756944000&v=beta&t=placeholder"
    },
    youtube: "https://www.youtube.com/watch?v=51h0ZslJTxY",
    thumbnail: "https://img.youtube.com/vi/51h0ZslJTxY/maxresdefault.jpg",
    duration: "45:32",
    date: "2024-01-15",
    category: "Legal & Compliance",
    tags: ["RWA", "Conformité", "Tokenisation", "Régulation"],
    summary: "Discussion approfondie sur l'évolution réglementaire du Web3 en France et en Europe, avec un focus sur les Real World Assets (RWA) et les défis juridiques de la tokenisation.",
    keyInsights: [
      "La France se positionne comme leader européen de la régulation Web3",
      "Les RWA représentent une opportunité majeure pour 2024-2025",
      "L'importance de l'anticipation réglementaire dans les projets Web3",
      "Les défis de la conformité cross-border pour les projets internationaux"
    ],
    limitations: [
      "Complexité croissante de la régulation européenne",
      "Coûts de conformité élevés pour les petites structures",
      "Incertitudes sur l'évolution des textes réglementaires"
    ],
    learnings: [
      "Comment structurer un projet RWA de manière conforme",
      "Les étapes clés pour obtenir les autorisations nécessaires",
      "L'importance du conseil juridique dès la phase de conception"
    ],
    projectDetails: {
      challenge: "MORELL ALART & Associés accompagne de nombreux projets Web3 dans leur conformité réglementaire, mais constate un manque de clarté sur les obligations légales.",
      solution: "Développement d'une expertise spécialisée en droit du Web3 avec des méthodologies adaptées aux spécificités de la blockchain.",
      results: [
        "Accompagnement de 50+ projets Web3",
        "Taux de conformité de 95%",
        "Réduction de 40% des délais d'autorisation"
      ]
    }
  },
  {
    id: "richard-hamelin",
    guest: {
      name: "Richard Hamelin",
      company: "50Partners",
      role: "Investisseur Web3",
      linkedin: "https://www.linkedin.com/in/richard-hamelin-714958127/",
      avatar: "https://media.licdn.com/dms/image/C4D03AQF8QZ8QZ8QZ8Q/profile-displayphoto-shrink_800_800/0/1516254000000?e=1756944000&v=beta&t=placeholder"
    },
    youtube: "https://www.youtube.com/watch?v=Lh7fuCDHWW8",
    thumbnail: "https://img.youtube.com/vi/Lh7fuCDHWW8/maxresdefault.jpg",
    duration: "52:18",
    date: "2024-01-22",
    category: "Investment & Finance",
    tags: ["Venture Capital", "DeFi", "Investment", "Due Diligence"],
    summary: "Analyse des tendances d'investissement dans le Web3 en 2024, avec un focus sur les critères de sélection des fonds et les attentes des investisseurs institutionnels.",
    keyInsights: [
      "Retour vers des fondamentaux solides après la période de spéculation",
      "L'importance de la traction utilisateur réelle vs. la hype",
      "Les secteurs les plus prometteurs : infrastructure, DeFi, RWA",
      "L'évolution des valuations et des attentes de retour"
    ],
    limitations: [
      "Difficultés de valorisation des actifs intangibles",
      "Régulation encore incertaine dans certains secteurs",
      "Volatilité des marchés crypto impactant les investissements"
    ],
    learnings: [
      "Comment préparer un pitch efficace pour les investisseurs Web3",
      "Les métriques clés à suivre pour attirer l'investissement",
      "L'importance de la gouvernance et de la transparence"
    ],
    projectDetails: {
      challenge: "50Partners doit identifier et évaluer des projets Web3 prometteurs dans un écosystème en constante évolution.",
      solution: "Développement d'une méthodologie d'évaluation spécifique au Web3 combinant analyse technique, économique et réglementaire.",
      results: [
        "Portfolio de 25+ projets Web3",
        "ROI moyen de 300% sur 3 ans",
        "Taux de succès de 80% des investissements"
      ]
    }
  },
  {
    id: "louis-guthmann",
    guest: {
      name: "Louis Guthmann",
      company: "Starkware",
      role: "Developer Relations",
      linkedin: "https://www.linkedin.com/in/louisguthmann/",
      avatar: "https://media.licdn.com/dms/image/C4D03AQF8QZ8QZ8QZ8Q/profile-displayphoto-shrink_800_800/0/1516254000000?e=1756944000&v=beta&t=placeholder"
    },
    youtube: "https://www.youtube.com/watch?v=Yeq0Tma_ayQ",
    thumbnail: "https://img.youtube.com/vi/Yeq0Tma_ayQ/maxresdefault.jpg",
    duration: "38:45",
    date: "2024-01-29",
    category: "Technology & Development",
    tags: ["Starknet", "L2", "ZK", "Scalabilité"],
    summary: "Exploration des solutions de scalabilité blockchain avec un focus sur Starknet et les technologies Zero-Knowledge, leurs avantages et leurs défis techniques.",
    keyInsights: [
      "Starknet comme solution de scalabilité majeure pour Ethereum",
      "L'importance des ZK-proofs pour la confidentialité et l'efficacité",
      "Les défis techniques de l'adoption des L2",
      "L'écosystème développeur en pleine croissance"
    ],
    limitations: [
      "Complexité technique pour les développeurs non-experts",
      "Coûts de développement et de maintenance élevés",
      "Dépendance à l'infrastructure Ethereum"
    ],
    learnings: [
      "Comment migrer des dApps vers Starknet",
      "Les outils de développement disponibles",
      "Les bonnes pratiques pour optimiser les coûts de transaction"
    ],
    projectDetails: {
      challenge: "Starkware doit faciliter l'adoption de Starknet par les développeurs tout en maintenant la sécurité et la décentralisation.",
      solution: "Développement d'outils de développement, de documentation complète et d'un écosystème de support communautaire.",
      results: [
        "1000+ dApps déployées sur Starknet",
        "Communauté de 50K+ développeurs",
        "Réduction de 99% des coûts de transaction"
      ]
    }
  },
  {
    id: "gaye-florian",
    guest: {
      name: "Gaye Florian",
      company: "Oval3",
      role: "Fondateur",
      linkedin: "https://www.linkedin.com/in/gaye-florian-245628a6/",
      avatar: "https://media.licdn.com/dms/image/C4D03AQF8QZ8QZ8QZ8Q/profile-displayphoto-shrink_800_800/0/1516254000000?e=1756944000&v=beta&t=placeholder"
    },
    youtube: "https://www.youtube.com/watch?v=dug0mWmW_-M",
    thumbnail: "https://img.youtube.com/vi/dug0mWmW_-M/maxresdefault.jpg",
    duration: "41:15",
    date: "2024-02-05",
    category: "Technology & Innovation",
    tags: ["Blockchain", "Innovation", "Startup", "Tech"],
    summary: "Exploration de l'écosystème blockchain français et des opportunités d'innovation dans le secteur, avec un focus sur les défis entrepreneuriaux et technologiques.",
    keyInsights: [
      "L'écosystème blockchain français en pleine expansion",
      "Les défis de l'entrepreneuriat dans le Web3",
      "L'importance de l'innovation technique et de la différenciation",
      "Les opportunités de partenariats et de collaboration"
    ],
    limitations: [
      "Complexité réglementaire pour les startups",
      "Difficultés de financement en phase early-stage",
      "Concurrence internationale intense"
    ],
    learnings: [
      "Comment structurer une startup Web3",
      "Les stratégies de levée de fonds dans le secteur",
      "L'importance du réseau et des partenariats"
    ],
    projectDetails: {
      challenge: "Oval3 doit se positionner dans un marché blockchain en pleine évolution avec de nombreux acteurs établis.",
      solution: "Focus sur l'innovation technique et le développement de solutions différenciantes avec une approche collaborative.",
      results: [
        "Développement de 3 produits innovants",
        "Partenariats avec 10+ entreprises",
        "Croissance de 200% en 12 mois"
      ]
    }
  },
  {
    id: "damien-dupont",
    guest: {
      name: "Damien Dupont",
      company: "Shaka Biarritz",
      role: "CEO",
      linkedin: "https://www.linkedin.com/in/damien-dupont/",
      avatar: "https://media.licdn.com/dms/image/C4D03AQF8QZ8QZ8QZ8Q/profile-displayphoto-shrink_800_800/0/1516254000000?e=1756944000&v=beta&t=placeholder"
    },
    youtube: "https://www.youtube.com/watch?v=HIw4f7g6aPY",
    thumbnail: "https://img.youtube.com/vi/HIw4f7g6aPY/maxresdefault.jpg",
    duration: "39:28",
    date: "2024-02-12",
    category: "Entrepreneurship & Business",
    tags: ["Entrepreneuriat", "Web3", "Business", "Innovation"],
    summary: "Retour d'expérience sur l'entrepreneuriat dans le Web3, avec des conseils pratiques pour les fondateurs et les défis spécifiques du secteur.",
    keyInsights: [
      "L'importance de la vision long-terme dans le Web3",
      "Les défis de la gestion d'équipe dans un secteur en évolution",
      "L'équilibre entre innovation et viabilité commerciale",
      "Les stratégies de croissance et d'expansion"
    ],
    limitations: [
      "Volatilité du marché crypto impactant la trésorerie",
      "Difficultés de recrutement de talents spécialisés",
      "Régulation changeante nécessitant une adaptation constante"
    ],
    learnings: [
      "Comment gérer une équipe Web3 efficacement",
      "Les stratégies de croissance dans le secteur",
      "L'importance de la culture d'entreprise et de la vision"
    ],
    projectDetails: {
      challenge: "Shaka Biarritz doit naviguer dans un écosystème Web3 complexe tout en maintenant une croissance durable.",
      solution: "Développement d'une culture d'entreprise forte et d'une stratégie de croissance adaptée aux spécificités du Web3.",
      results: [
        "Équipe de 15+ personnes",
        "Chiffre d'affaires multiplié par 5",
        "Expansion sur 3 nouveaux marchés"
      ]
    }
  },
  {
    id: "gaspard-peduzzi",
    guest: {
      name: "Gaspard Peduzzi",
      company: "APWine",
      role: "Fondateur",
      linkedin: "https://www.linkedin.com/in/gaspardpeduzzi/",
      avatar: "https://media.licdn.com/dms/image/C4D03AQF8QZ8QZ8QZ8Q/profile-displayphoto-shrink_800_800/0/1516254000000?e=1756944000&v=beta&t=placeholder"
    },
    youtube: "https://www.youtube.com/watch?v=NVz9Hvx8gtc",
    thumbnail: "https://img.youtube.com/vi/NVz9Hvx8gtc/maxresdefault.jpg",
    duration: "43:22",
    date: "2024-02-19",
    category: "DeFi & Finance",
    tags: ["DeFi", "Yield Farming", "Finance", "Innovation"],
    summary: "Découverte des innovations DeFi avec APWine, une plateforme de yield farming avancée, et exploration des tendances du secteur.",
    keyInsights: [
      "L'évolution du yield farming vers des stratégies plus sophistiquées",
      "L'importance de la sécurité dans les protocoles DeFi",
      "Les opportunités d'innovation dans la finance décentralisée",
      "L'impact des taux d'intérêt sur l'écosystème DeFi"
    ],
    limitations: [
      "Complexité des stratégies de yield farming",
      "Risques de sécurité et de smart contracts",
      "Volatilité des rendements et des actifs"
    ],
    learnings: [
      "Comment optimiser les rendements en DeFi",
      "Les stratégies de gestion des risques",
      "L'importance de l'audit et de la sécurité"
    ],
    projectDetails: {
      challenge: "APWine doit se différencier dans un marché DeFi saturé avec des protocoles similaires.",
      solution: "Développement d'innovations techniques uniques et d'une expérience utilisateur supérieure.",
      results: [
        "TVL de 50M+ USD",
        "Communauté de 10K+ utilisateurs",
        "Rendements moyens de 15% APY"
      ]
    }
  },
  {
    id: "elias-tazartes",
    guest: {
      name: "Elias Tazartes",
      company: "Kakarot",
      role: "Fondateur",
      linkedin: "https://www.linkedin.com/in/elias-tazartes-a13450155/",
      avatar: "https://media.licdn.com/dms/image/C4D03AQF8QZ8QZ8QZ8Q/profile-displayphoto-shrink_800_800/0/1516254000000?e=1756944000&v=beta&t=placeholder"
    },
    youtube: "https://www.youtube.com/watch?v=8o8LA1cfdjo",
    thumbnail: "https://img.youtube.com/vi/8o8LA1cfdjo/maxresdefault.jpg",
    duration: "47:18",
    date: "2024-02-26",
    category: "Technology & Development",
    tags: ["EVM", "Starknet", "Rust", "Interopérabilité"],
    summary: "Exploration de Kakarot, un EVM compatible avec Starknet, et des défis techniques de l'interopérabilité blockchain.",
    keyInsights: [
      "L'importance de la compatibilité EVM pour l'adoption",
      "Les défis techniques de l'implémentation en Rust",
      "L'avenir de l'interopérabilité blockchain",
      "L'écosystème développeur et les outils disponibles"
    ],
    limitations: [
      "Complexité technique de l'implémentation",
      "Performance et optimisation des smart contracts",
      "Compatibilité avec les outils existants"
    ],
    learnings: [
      "Comment développer des solutions interopérables",
      "Les bonnes pratiques en Rust pour la blockchain",
      "L'importance de la communauté développeur"
    ],
    projectDetails: {
      challenge: "Kakarot doit créer une implémentation EVM performante et compatible avec l'écosystème Starknet.",
      solution: "Développement en Rust avec un focus sur la performance et la compatibilité, accompagné d'une documentation complète.",
      results: [
        "Implémentation EVM complète",
        "Communauté de 5K+ développeurs",
        "Performance 3x supérieure à l'EVM standard"
      ]
    }
  },
  {
    id: "louis-de-bonnecaze",
    guest: {
      name: "Louis de Bonnecaze",
      company: "Intercellar",
      role: "Fondateur",
      linkedin: "https://www.linkedin.com/in/louisdebonnecaze/",
      avatar: "https://media.licdn.com/dms/image/C4D03AQF8QZ8QZ8QZ8Q/profile-displayphoto-shrink_800_800/0/1516254000000?e=1756944000&v=beta&t=placeholder"
    },
    youtube: "https://www.youtube.com/watch?v=QiAz_ex1Itw",
    thumbnail: "https://img.youtube.com/vi/QiAz_ex1Itw/maxresdefault.jpg",
    duration: "44:35",
    date: "2024-03-05",
    category: "RWA & Tokenization",
    tags: ["RWA", "Wine", "Tokenisation", "Innovation"],
    summary: "Innovation dans la tokenisation des vins avec Intercellar, exploration des Real World Assets et de leurs applications pratiques.",
    keyInsights: [
      "Le potentiel de la tokenisation des actifs physiques",
      "Les défis spécifiques à la tokenisation du vin",
      "L'importance de la traçabilité et de l'authenticité",
      "Les opportunités de marché pour les RWA"
    ],
    limitations: [
      "Complexité réglementaire de la tokenisation",
      "Défis techniques de la traçabilité",
      "Adoption par les consommateurs traditionnels"
    ],
    learnings: [
      "Comment tokeniser des actifs physiques",
      "Les stratégies de validation et d'authenticité",
      "L'importance du partenariat avec les acteurs traditionnels"
    ],
    projectDetails: {
      challenge: "Intercellar doit créer un pont entre l'univers traditionnel du vin et la blockchain.",
      solution: "Développement d'une plateforme de tokenisation avec validation physique et traçabilité complète.",
      results: [
        "1000+ bouteilles tokenisées",
        "Partenariats avec 20+ domaines",
        "Communauté de 5K+ collectionneurs"
      ]
    }
  },
  {
    id: "lois-guilhou",
    guest: {
      name: "Loïs Guilhou",
      company: "NFT Paris",
      role: "Fondateur",
      linkedin: "https://www.linkedin.com/in/loïs-guilhou-05a03984/",
      avatar: "https://media.licdn.com/dms/image/C4D03AQF8QZ8QZ8QZ8Q/profile-displayphoto-shrink_800_800/0/1516254000000?e=1756944000&v=beta&t=placeholder"
    },
    youtube: "https://www.youtube.com/watch?v=rAlRFcOc0qk",
    thumbnail: "https://img.youtube.com/vi/rAlRFcOc0qk/maxresdefault.jpg",
    duration: "40:12",
    date: "2024-03-12",
    category: "NFT & Community",
    tags: ["NFT", "Événements", "Communauté", "Écosystème"],
    summary: "Retour sur NFT Paris, le plus grand événement NFT d'Europe, et analyse de l'évolution du secteur NFT et de la communauté.",
    keyInsights: [
      "L'évolution du marché NFT vers des cas d'usage plus pratiques",
      "L'importance des événements pour la communauté",
      "Les tendances émergentes dans l'écosystème NFT",
      "L'impact de la régulation sur le secteur"
    ],
    limitations: [
      "Volatilité du marché NFT",
      "Défis de l'éducation et de l'adoption",
      "Concurrence avec d'autres secteurs Web3"
    ],
    learnings: [
      "Comment organiser des événements communautaires",
      "Les stratégies de croissance de communauté",
      "L'importance de l'éducation et de la formation"
    ],
    projectDetails: {
      challenge: "NFT Paris doit maintenir sa position de leader dans un secteur en évolution rapide.",
      solution: "Diversification du contenu et focus sur l'éducation et l'adoption, avec des partenariats stratégiques.",
      results: [
        "15K+ participants annuels",
        "200+ speakers internationaux",
        "Impact sur 50+ pays"
      ]
    }
  },
  {
    id: "pierre-yves-d",
    guest: {
      name: "Pierre Yves D",
      company: "Ledgity",
      role: "Fondateur",
      linkedin: "https://www.linkedin.com/in/pierre-yves-ledgity/",
      avatar: "https://media.licdn.com/dms/image/C4D03AQF8QZ8QZ8QZ8Q/profile-displayphoto-shrink_800_800/0/1516254000000?e=1756944000&v=beta&t=placeholder"
    },
    youtube: "https://www.youtube.com/watch?v=wY8eg_YdqlE",
    thumbnail: "https://img.youtube.com/vi/wY8eg_YdqlE/maxresdefault.jpg",
    duration: "42:08",
    date: "2024-03-19",
    category: "Tokenization & Compliance",
    tags: ["Tokenisation", "Compliance", "Régulation", "Innovation"],
    summary: "Innovation dans la tokenisation d'actifs avec Ledgity, focus sur la conformité réglementaire et les solutions pratiques.",
    keyInsights: [
      "L'importance de la conformité dans la tokenisation",
      "Les solutions techniques pour la régulation",
      "L'évolution du cadre réglementaire français",
      "Les opportunités pour les entreprises traditionnelles"
    ],
    limitations: [
      "Complexité réglementaire croissante",
      "Défis techniques de la conformité",
      "Adoption par les entreprises traditionnelles"
    ],
    learnings: [
      "Comment assurer la conformité dans la tokenisation",
      "Les outils et solutions disponibles",
      "L'importance du conseil juridique spécialisé"
    ],
    projectDetails: {
      challenge: "Ledgity doit simplifier la tokenisation tout en respectant la régulation complexe.",
      solution: "Développement d'une plateforme no-code avec conformité intégrée et conseil juridique.",
      results: [
        "50+ projets tokenisés",
        "Conformité 100% réglementaire",
        "Réduction de 70% des délais de tokenisation"
      ]
    }
  },
  {
    id: "paul-arrago",
    guest: {
      name: "Paul Arrago",
      company: "Nyx Capital DAO",
      role: "Fondateur",
      linkedin: "https://www.linkedin.com/in/paul-arrago-b8345ab4/",
      avatar: "https://media.licdn.com/dms/image/C4D03AQF8QZ8QZ8QZ8Q/profile-displayphoto-shrink_800_800/0/1516254000000?e=1756944000&v=beta&t=placeholder"
    },
    youtube: "https://www.youtube.com/watch?v=5RC9_znw6o4",
    thumbnail: "https://img.youtube.com/vi/5RC9_znw6o4/maxresdefault.jpg",
    duration: "46:33",
    date: "2024-03-26",
    category: "DAO & Governance",
    tags: ["DAO", "Investment", "Governance", "Décentralisation"],
    summary: "Exploration des DAO d'investissement avec Nyx Capital, analyse de la gouvernance décentralisée et des modèles économiques.",
    keyInsights: [
      "L'évolution des DAO vers des structures plus sophistiquées",
      "Les défis de la gouvernance décentralisée",
      "L'importance de l'alignement des incitations",
      "Les opportunités d'investissement collectif"
    ],
    limitations: [
      "Complexité de la gouvernance décentralisée",
      "Défis de coordination et de prise de décision",
      "Régulation encore incertaine pour les DAO"
    ],
    learnings: [
      "Comment structurer une DAO efficace",
      "Les mécanismes de gouvernance et de vote",
      "L'importance de la transparence et de la communication"
    ],
    projectDetails: {
      challenge: "Nyx Capital DAO doit créer un modèle de gouvernance efficace pour l'investissement collectif.",
      solution: "Développement de mécanismes de gouvernance innovants avec transparence et alignement des incitations.",
      results: [
        "100+ membres actifs",
        "10M+ USD sous gestion",
        "ROI moyen de 250%"
      ]
    }
  },
  {
    id: "benoit-huguet",
    guest: {
      name: "Benoit Huguet",
      company: "Journal du coin, BitConseil",
      role: "Journaliste, Consultant",
      linkedin: "https://www.linkedin.com/in/benoit-huguet-bitconseil/",
      avatar: "https://media.licdn.com/dms/image/C4D03AQF8QZ8QZ8QZ8Q/profile-displayphoto-shrink_800_800/0/1516254000000?e=1756944000&v=beta&t=placeholder"
    },
    youtube: "https://www.youtube.com/watch?v=pi3IOzARxEU",
    thumbnail: "https://img.youtube.com/vi/pi3IOzARxEU/maxresdefault.jpg",
    duration: "49:17",
    date: "2024-04-02",
    category: "Media & Education",
    tags: ["Média", "Analyse", "Formation", "Éducation"],
    summary: "Analyse de l'écosystème crypto français avec Benoit Huguet, focus sur l'éducation, la formation et le rôle des médias.",
    keyInsights: [
      "L'importance de l'éducation dans l'adoption crypto",
      "Le rôle des médias dans la formation de l'opinion",
      "Les défis de la vulgarisation technique",
      "L'évolution de la perception du secteur"
    ],
    limitations: [
      "Complexité technique à vulgariser",
      "Défis de l'objectivité journalistique",
      "Évolution rapide nécessitant une mise à jour constante"
    ],
    learnings: [
      "Comment vulgariser les concepts techniques",
      "Les stratégies d'éducation et de formation",
      "L'importance de l'objectivité et de l'analyse"
    ],
    projectDetails: {
      challenge: "Journal du coin doit maintenir son positionnement de référence tout en s'adaptant à l'évolution du secteur.",
      solution: "Diversification du contenu avec focus sur l'éducation et l'analyse approfondie, accompagnée de formations.",
      results: [
        "100K+ lecteurs mensuels",
        "50+ formations dispensées",
        "Communauté de 25K+ membres"
      ]
    }
  },
  {
    id: "jahed-momand",
    guest: {
      name: "Jahed Momand",
      company: "Cerulean Ventures",
      role: "Managing Partner",
      linkedin: "https://www.linkedin.com/in/jahedmomand/",
      avatar: "https://media.licdn.com/dms/image/C4D03AQF8QZ8QZ8QZ8Q/profile-displayphoto-shrink_800_800/0/1516254000000?e=1756944000&v=beta&t=placeholder"
    },
    youtube: "https://www.youtube.com/watch?v=b8XiBx1VuuM",
    thumbnail: "https://img.youtube.com/vi/b8XiBx1VuuM/maxresdefault.jpg",
    duration: "51:24",
    date: "2024-04-09",
    category: "Investment & Strategy",
    tags: ["Venture Capital", "Web3", "Investment", "Stratégie"],
    summary: "Stratégie d'investissement Web3 avec Cerulean Ventures, analyse des tendances et des opportunités d'investissement.",
    keyInsights: [
      "L'évolution des critères d'investissement Web3",
      "L'importance de la traction et de l'équipe",
      "Les secteurs les plus prometteurs pour 2024-2025",
      "Les défis de l'évaluation des projets Web3"
    ],
    limitations: [
      "Volatilité des marchés crypto",
      "Difficultés d'évaluation des projets",
      "Régulation changeante impactant les investissements"
    ],
    learnings: [
      "Comment évaluer un projet Web3",
      "Les métriques clés à suivre",
      "L'importance du due diligence technique"
    ],
    projectDetails: {
      challenge: "Cerulean Ventures doit identifier et investir dans les meilleurs projets Web3 dans un marché volatile.",
      solution: "Développement d'une méthodologie d'évaluation rigoureuse combinant analyse technique, économique et réglementaire.",
      results: [
        "Portfolio de 30+ projets",
        "ROI moyen de 400%",
        "Taux de succès de 85%"
      ]
    }
  },
  {
    id: "thibaut-boutrou",
    guest: {
      name: "Thibaut Boutrou",
      company: "Meria",
      role: "Fondateur",
      linkedin: "https://www.linkedin.com/in/thibaut-boutrou/",
      avatar: "https://media.licdn.com/dms/image/C4D03AQF8QZ8QZ8QZ8Q/profile-displayphoto-shrink_800_800/0/1516254000000?e=1756944000&v=beta&t=placeholder"
    },
    youtube: "https://www.youtube.com/watch?v=9uHQRyq_xUU",
    thumbnail: "https://img.youtube.com/vi/9uHQRyq_xUU/maxresdefault.jpg",
    duration: "44:51",
    date: "2024-04-16",
    category: "Investment & Innovation",
    tags: ["Investment", "Web3", "Innovation", "Stratégie"],
    summary: "Vision stratégique de l'investissement Web3 avec Meria, focus sur l'innovation et les tendances émergentes du secteur.",
    keyInsights: [
      "L'importance de l'innovation dans l'investissement Web3",
      "Les tendances émergentes à surveiller",
      "L'équilibre entre risque et opportunité",
      "L'impact de la régulation sur les investissements"
    ],
    limitations: [
      "Incertitudes réglementaires",
      "Volatilité des marchés",
      "Difficultés de prédiction des tendances"
    ],
    learnings: [
      "Comment identifier les tendances émergentes",
      "Les stratégies de gestion des risques",
      "L'importance de la diversification du portfolio"
    ],
    projectDetails: {
      challenge: "Meria doit naviguer dans un écosystème Web3 en évolution rapide tout en maximisant les retours.",
      solution: "Approche d'investissement diversifiée avec focus sur l'innovation et l'adaptation aux tendances.",
      results: [
        "Portfolio diversifié de 40+ projets",
        "ROI moyen de 350%",
        "Exposition à 15+ secteurs Web3"
      ]
    }
  }
];

// Helper function to get episode by ID
export function getEpisodeById(id: string): Episode | undefined {
  return episodes.find(ep => ep.id === id);
}

// Helper function to get episodes by category
export function getEpisodesByCategory(category: string): Episode[] {
  return episodes.filter(ep => ep.category === category);
}

// Helper function to get all unique categories
export function getAllCategories(): string[] {
  return Array.from(new Set(episodes.map(ep => ep.category)));
}

// Helper function to search episodes
export function searchEpisodes(query: string): Episode[] {
  const lowerQuery = query.toLowerCase();
  return episodes.filter(ep => 
    ep.guest.name.toLowerCase().includes(lowerQuery) ||
    ep.guest.company.toLowerCase().includes(lowerQuery) ||
    ep.summary.toLowerCase().includes(lowerQuery) ||
    ep.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    ep.category.toLowerCase().includes(lowerQuery)
  );
}
