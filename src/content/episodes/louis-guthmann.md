---
title: "GMX franchit les 100 milliards $ de volume : « La composabilité avant l'isolement »"
publishedDate: 2024-01-29
status: "published"
guest:
  name: "Louis Guthmann"
  company: "Starkware"
  role: "Developer Relations"
  linkedin: "https://www.linkedin.com/in/louisguthmann/"
  avatar: "https://media.licdn.com/dms/image/C4D03AQF8QZ8QZ8QZ8Q/profile-displayphoto-shrink_800_800/0/1516254000000?e=1756944000&v=beta&t=placeholder"
youtube: "https://www.youtube.com/watch?v=Yeq0Tma_ayQ"
thumbnail: "https://img.youtube.com/vi/Yeq0Tma_ayQ/maxresdefault.jpg"
duration: "38:45"
category: "Technology & Development"
tags: ["Starknet", "GMX", "L2", "ZK", "DeFi", "Scalabilité"]
metaDescription: "GMX atteint 100 milliards $ de volume en choisissant la composabilité plutôt que l'isolement. Découvrez pourquoi Arbitrum, Avalanche et bientôt Starknet, avec Louis Guthmann de Starkware."
summary: "De Arbitrum à Avalanche, et bientôt BNB Chain ou Polygon ? Rencontre avec l'équipe de GMX, le protocole d'échange perpétuel décentralisé qui choisit ses blockchains en fonction des utilisateurs, pas du marketing."
keyInsights:
  - "GMX franchit les 100 milliards $ de volume avec une approche composabilité-first"
  - "Arbitrum choisi dès le jour 1 pour son ouverture (pas de whitelist)"
  - "Starknet optimise pour la performance, puis apporte la compatibilité EVM avec Kakarot"
  - "GMX Synthetics v2 permettra un déploiement multi-chain beaucoup plus fluide"
limitations:
  - "Complexité technique de Cairo pour les développeurs EVM"
  - "GMX reste sur blockchains publiques : pas de subnet/rollup dédié pour l'instant"
  - "Délais de développement pour Starknet account abstraction natif"
learnings:
  - "Comment évaluer une blockchain pour déploiement (ouverture, composabilité, performance)"
  - "L'importance de l'écosystème autour d'un protocole DeFi"
  - "Les trade-offs entre performance et compatibilité EVM"
projectDetails:
  challenge: "GMX doit choisir les bonnes blockchains pour expansion tout en maintenant la composabilité et l'expérience utilisateur."
  solution: "Sélection rigoureuse basée sur ouverture, qualité technique, écosystème DeFi existant et alignement philosophique avec la décentralisation."
  results:
    - "100 milliards $ de volume cumulé"
    - "Écosystème de 20+ protocoles construits sur/autour de GMX"
    - "Expansion prévue sur BNB Chain et Polygon en 2024"
lang: "fr"
---

## De Arbitrum à Avalanche, et bientôt BNB Chain ou Polygon ? Rencontre avec l'équipe de GMX

---

## Le jour de l'all-time high

Il y a des coïncidences qui font sourire. Le jour où Coinflip, responsable de l'écosystème GMX, participe à un live organisé par The Arch aux côtés de Luis Guzman (Starkware) et It Burns (GMX Blueberry Club), le token GMX atteint son **all-time high**. 

Plus impressionnant encore : le protocole s'apprête à franchir la barre symbolique des **100 milliards de dollars** de volume tradé depuis son lancement fin 2021.

« That's crazy », lâche l'animateur. Et c'est vrai : pour un protocole qui a construit pendant le bear market, sans token hype, juste en se concentrant sur le produit et la communauté, c'est une performance remarquable.

---

## De BSC à Arbitrum : un pari risqué en 2021

L'histoire de GMX commence avec Gambit, déployé sur ce qui s'appelait alors la Binance Smart Chain. Mais rapidement, les limites se font sentir : RPC throttling, problèmes de settlement, qualité du réseau insuffisante.

« La décision de venir sur Arbitrum était vraiment un moment clé », explique Coinflip. « Nous avions une grande affinité avec Ethereum – cette idée de tirer notre sécurité d'Ethereum au fil du temps nous plaisait beaucoup. »

### Pourquoi Arbitrum, et pas Optimism ou Starknet ?

Les raisons sont multiples, mais une se détache particulièrement : **l'ouverture**.

« Arbitrum a lancé sans whitelist. Il n'y avait aucune restriction sur les protocoles qui pouvaient venir. C'était aligné avec notre philosophie : pouvoir aller quelque part où nous savions que nous pouvions builder et amener notre communauté. »

À l'époque, Starknet n'était pas sur le radar. « Il y avait des barrières de langage de programmation », précise Coinflip, faisant référence à Cairo. « Même si beaucoup de choses ont évolué depuis, notamment avec Warp et maintenant Kakarot. »

### Un déploiement le jour J

Le détail qui tue : **GMX a déployé le jour du lancement public d'Arbitrum**. 

« Nous avons même utilisé la version testnet avant le lancement officiel comme mécanisme d'onboarding », révèle It Burns. « C'était un risque très élevé de migrer avant même qu'Arbitrum soit lancé. Mais on pensait que c'était le bon choix pour l'avenir. »

Ce pari s'est révélé gagnant. Arbitrum est devenu un hub DeFi de premier plan, et GMX y a trouvé un terreau fertile pour se développer.

---

## Avalanche : la deuxième expansion

Début 2022, GMX se déploie sur Avalanche. Encore une fois, le choix n'est pas anodin.

« L'équipe d'Ava Labs nous a montré beaucoup d'amour », sourit Coinflip. « Et je ne parle pas de promesses d'argent ou quoi que ce soit. Ils ont vraiment fait valoir leur cas : nous avons un environnement DeFi, d'autres protocoles avec qui travailler, notre blockchain est bien adaptée à ce que vous faites. »

### Les atouts techniques d'Avalanche

**Finalité quasi-instantanée** et **block times rapides** : deux arguments de poids pour un exchange qui cherche à offrir une expérience proche des CEX, mais on-chain.

« Le fait que nous puissions voir comment ils allaient amener de nouveaux utilisateurs dans la crypto, comment ces utilisateurs pourraient interagir avec nous, comment un écosystème pourrait se construire autour de nous... tout cela était très attrayant. »

### Pas de subnet (pour l'instant)

Question de l'animateur : pourquoi ne pas lancer votre propre subnet sur Avalanche ?

La réponse de Coinflip est claire : **« Composability. »**

« Nous avons l'intention de rester sur les blockchains publiques. Cela nous donne énormément d'avantages en termes de composabilité et de collaboration avec d'autres protocoles. GMX est vraiment devenu une **base layer** – nous avons des protocoles qui construisent en dessous pour nous amener de la liquidité, et d'autres qui construisent au-dessus pour créer des plateformes de trading. »

Un subnet ou une OP chain ? « Tout est possible à terme. Nous pensons juste qu'aujourd'hui, cela crée plus de friction, et les blockchains publiques ne sont pas encore assez congestionnées pour que nous ayons besoin de bouger. »

---

## 2024 : BNB Chain et Polygon frappent à la porte

Deux propositions formelles ont été soumises à la gouvernance GMX ces dernières semaines : une de **BNB Chain**, une autre de **Polygon**.

### Le cas BNB Chain

« BNB Chain a une base d'utilisateurs retail très large », analyse Coinflip. « Je pense que c'est différent d'Arbitrum ou Optimism, où les utilisateurs sont un peu plus avancés. BNB Chain a cette base retail plus large. »

**Trois arguments majeurs :**

1. **Intégration wallet massive** : TrustWallet (propriété de Binance), C98, et autres wallets populaires
2. **Liquidité profonde** : Tokens longue traîne (ADA, DOGE, etc.) via les Binance pegged tokens
3. **GMX Synthetics** : Parfait pour créer des marchés sur plus d'actifs

« Si vous voulez un marché liquide pour ADA ou DOGE, vous trouverez plus de liquidité via les tokens peggés de Binance sur BNB Chain que n'importe où ailleurs on-chain », argumente-t-il.

### Mais Gambit n'avait-il pas quitté BSC justement ?

Objection pertinente. Gambit (l'ancêtre de GMX) avait effectivement migré de BSC vers Arbitrum pour des raisons de qualité et de décentralisation.

« Il y avait des problèmes avec la qualité de la chaîne à l'époque », concède Coinflip. « Mais je pense qu'il faut reconnaître que BNB Chain et même Polygon montrent comment ils continuent de se décentraliser. Leur histoire est différente de celle d'Ethereum, certes, mais **jugez-nous sur nos actions et notre direction** – c'est ce que nous disons aussi pour GMX. »

### La décision finale ?

« Ce sera à la communauté de décider. Pensent-ils que c'est plus intéressant ? Ou pensons-nous que Polygon avec sa base d'utilisateurs additionnelle est préférable ? Ou rien du tout et rester où nous sommes, ce qui est aussi une option viable. »

**La gouvernance GMX en action** : décisions bottom-up, discussions saines, communauté pragmatique.

---

## GMX Synthetics : la v2 qui change tout

Prévu pour **fin février / début mars 2024** sur testnet, puis déploiement progressif sur mainnet, **GMX Synthetics** représente l'évolution majeure du protocole.

### L'innovation clé : simplicité de déploiement

« Le design est très similaire à Uniswap », explique It Burns. « Très peu d'opérations sont nécessaires pour maintenir le protocole. Il sera très facile de le déployer sur plusieurs chaînes tant qu'elles ont une compatibilité EVM. »

Contrairement à GMX v1, où chaque déploiement nécessitait énormément de bande passante et de focus, Synthetics permet une **expansion multi-chain beaucoup plus fluide**.

### Isolated markets : au-delà de BTC et ETH

« Nous pensons que ce modèle fonctionne très bien pour les marchés les plus liquides – appelons-les BTC et ETH », précise Coinflip. « Mais pour d'autres marchés, les marchés isolés fonctionneront mieux. Ils pourront cibler des liquidity providers spécifiques, des market makers, et vraiment aider à faire croître ces marchés. »

**L'objectif ?** Avoir des marchés on-chain liquides pour une gamme beaucoup plus large de tokens, avec de la liquidité communautaire et du trading communautaire, le tout supporté par des marchés perpétuels aux côtés des marchés spot déjà très présents dans la crypto.

---

## L'écosystème GMX : quand la composabilité devient réalité

Si GMX peut se permettre de rester sur des blockchains publiques plutôt que de lancer son propre rollup, c'est parce qu'un **écosystème entier** s'est construit autour du protocole.

### Au-dessus : les plateformes de trading

**Puppet Finance** – Le projet phare d'It Burns et du GMX Blueberry Club.

Le problème avec le copy trading actuel ? « Des protocoles comme sdfx utilisent un modèle de vault-controlled trade. Le trader a le contrôle total, il y a beaucoup d'asymétrie où l'investisseur transfère le risque au trader, des problèmes de liquidité, de flexibilité... »

**La solution Puppet** : Un moteur de matchmaking.

« Vous déposez vos fonds dans un seul vault, puis vous copiez autant de traders que vous voulez. À chaque trade, seulement une petite portion de votre capital est risquée. Au fil du temps, vous voyez votre portfolio de trading comme votre portfolio de tokens : certains over-performent, d'autres sous-performent. Votre job est simplement de retirer ceux qui sous-performent. »

**GBC Trading** – Une interface de trading alternative développée par le Blueberry Club, lancée la veille du live.

**GMX.house** – Un explorer/leaderboard créé par It Burns pour voir qui trade quoi, les performances, l'activité en temps réel.

### En-dessous : les fournisseurs de liquidité

De multiples protocoles construisent des solutions pour amener de la liquidité à GMX, créant ainsi un écosystème en couches où chacun joue son rôle.

### Le modèle de revenus : transparent et on-chain

« GMX a un système de referral qui compense tout l'écosystème qui fait croître la plateforme, de manière très propre et transparente », souligne Coinflip. « Contrairement à l'opacité des CEX. »

**Exemple concret** : Le wallet Changelly a intégré un onglet natif pour trader sur GMX. Ils gagnent des revenus durables via le système de referral, ce qui supporte le développement de leur wallet.

« GMX ne peut faire que ce qu'il peut faire. Nous préférons voir que lorsqu'il y a du volume, de l'activité, des revenus dans l'écosystème, tout le monde y participe. »

---

## Starknet : la voie de la performance

Luis Guzman, responsable de l'écosystème Starkware, apporte un éclairage fascinant sur le positionnement de Starknet face aux autres ZK rollups.

### Performance first, compatibility later

« Starkware a fait un pari très différent du reste de l'écosystème dès le départ : optimiser pour la performance », explique Luis.

**Polygon zkEVM**, en comparaison, a choisi **la backward compatibility** en priorité. Ils visent une « type-3 equivalence » – pouvoir faire tourner directement le bytecode EVM.

« Pour faire ça, il faut comprendre que la façon dont l'EVM fonctionne et la façon dont votre ordinateur fonctionne sont **fondamentalement différentes**. En faisant ce choix, vous faites un compromis : vous essayez de retrofitter quelque chose qui n'était pas fait pour ce modèle de computation. »

### Le pari Starknet

« Nous avons pris le chemin de la performance en disant : on va aller chercher la performance, et une fois qu'on l'aura, on apportera la compatibilité. »

**Et ça fonctionne.** Starknet est probablement le ZK rollup le plus performant actuellement, et cette performance va exploser dans les trois prochains mois grâce au passage au Rust.

### Account abstraction : le futur, maintenant

« L'existence des private keys est de loin la plus grosse erreur jamais faite dans la crypto », cite Luis en référence à Vitalik. « Ce n'est pas moi qui le dis, c'est toute la communauté Ethereum qui le pense. C'est pourquoi l'EIP-4337 est si important. »

**La différence ?** Sur Starknet, les smart wallets sont **natifs**. Pas besoin d'attendre une implémentation progressive comme sur Ethereum.

**Exemple concret** : Cartridge, sur Starknet, a fait un NFT drop où vous n'avez besoin d'installer aucun wallet. Tout se fait dans le browser, vous signez avec votre Face ID sur votre téléphone.

« Ce sont ces innovations qu'on ne peut faire nulle part ailleurs. »

### Cairo 1.0 et la migration Rust : 30x performance

« Nous sommes en train de faire ce qu'on appelle une Regenesis », annonce Luis. « Remplacement de la version actuelle de Cairo par Cairo 1.0, plus l'implémentation en Rust au lieu de Python. »

**Résultat attendu** : Passage de **2 TPS à 50+ TPS**, soit une amélioration de **30x**.

« Et ce n'est que le début. On sait comment aller beaucoup plus haut, ça prendra juste un peu plus de temps. »

### Kakarot : la revanche française

Impossible de ne pas mentionner **Kakarot**, le projet d'EVM in Cairo qui fait sensation.

« Histoire amusante », sourit Luis. « Elias [ndlr : Adel] a été tellement triggé par un tweet de Max Zeller à Devcon disant "écrire en Cairo sur Starknet nécessite un doctorat, il faut être capable d'écrire des spaceships, alors que sur Polygon c'est du copy-paste"... qu'il a décidé de prouver le contraire. »

**Résultat ?** En trois mois, Kakarot a atteint la **parité type-3** avec probablement toutes les EVM chains.

« Je ne serais pas surpris qu'ils soient le premier zkEVM en production. »

---

## Polygon : l'approche tous azimuts

Polygon mérite qu'on s'y attarde, car leur stratégie est radicalement différente.

**Trois acquisitions ZK** en 2022 : Hermez, Mir Protocol (devenu Polygon Zero), et une troisième équipe. Une approche « tous azimuts » qui vise à couvrir tous les angles du ZK.

« C'est intéressant », commente Luis. « Ils ciblent la backward compatibility en premier, puis essayent d'améliorer la performance par en dessous. Nous, c'est l'inverse : performance d'abord, puis compatibilité par-dessus. »

**Qui a raison ?** Les deux approches sont valides. Le temps dira laquelle s'impose.

---

## Gouvernance GMX : une DAO qui fonctionne vraiment

Dans un écosystème où beaucoup de DAOs sont dysfonctionnelles, GMX fait figure d'exception.

### La structure

**gov.gmx.io** – Forum de discussions et propositions
**Snapshot** – Voting on-chain pour les décisions majeures

« L'un de nos focus dans les prochains mois est de mettre encore plus de structure », annonce Coinflip. « On veut avoir des discussions plus robustes sur les paramètres de risque, l'expansion multi-chain, comment continuer à décentraliser le protocole. »

### Une communauté pragmatique

« L'une des grandes forces de notre communauté, c'est qu'elle a été très **pratique** », souligne Coinflip. « Pas absolutiste, pas maximaliste. Les discussions portent vraiment sur ce qui est le mieux pour le protocole. »

**Pourquoi cette qualité ?**

« Nos tokenomics favorisent les contributeurs long-terme, les détenteurs long-terme du token. Cela crée une perspective à long terme dans la gouvernance. »

### Treasury swaps : aligner les incitations

Une des pratiques récentes les plus actives : les **treasury swaps** avec des protocoles buildant sur ou avec GMX.

« Nous donnons au protocole une exposition à ceux qui construisent dans et autour de GMX, et eux reçoivent des tokens GMX lockés pour fournir des incitations long-terme. C'est un alignement puissant. »

**Exemple** : Gamma Swap (swap en cours), dans lequel Coinflip a investi personnellement. « C'est toujours bien de voir des gens qui expérimentent en DeFi. »

---

## Cross-chain : l'abstraction arrive

Si GMX se déploie sur plusieurs chaînes, comment gérer l'expérience utilisateur fragmentée ?

### DappOS : le pilote programme

« Nous allons annoncer un programme pilote avec un protocole appelé DappOS dans les prochains jours », révèle Coinflip.

**Le concept ?** Depuis presque n'importe quelle chaîne EVM – Polygon, Arbitrum, peut-être même Starknet – ils abstraient le bridging et vous permettent de trader sur les chaînes publiques où GMX est présent.

« Il y a des lags, des délais, ce n'est pas une solution parfaite, mais nous préférons trouver des solutions dans le domaine public si nous le pouvons. »

### Les solutions bridges qui comptent

**Socket** – Le coup de cœur d'It Burns.

« Créé par DC, l'un des premiers ingénieurs de Polygon. Ils font du bridge aggregation et maintenant du cross-chain execution. »

Ce qui rend Socket spécial ? « Leur approche event-based des blockchains. C'est comment la blockchain aurait dû être construite dès le départ. »

**Everstory** – La solution ZK de Luis.

« Ils utilisent des storage proofs pour fournir des informations d'une chaîne à l'autre de manière trustless via ZK. »

**Utilisateurs** : sdfx, Root, Snapshot – tous utilisent ou prévoient d'utiliser Everstory pour des preuves d'état cross-chain.

**Axelar, Stargate, Wormhole** – Tous dans le radar, évalués avec prudence.

« Bridges, c'est souvent le truc le plus excitant mais aussi parfois le plus risqué aux débuts. Nous sommes juste prudents tout en essayant d'être aussi innovants que possible. »

---

## Conclusion : L'ère de la composabilité

Si ce live nous apprend quelque chose, c'est que **l'avenir du Web3 n'est pas dans l'isolement, mais dans la composabilité**.

GMX refuse de lancer son propre rollup ou subnet pour l'instant, préférant rester sur les blockchains publiques où l'écosystème peut se construire naturellement. Puppet Finance, GBC Trading, les intégrations wallet, les treasury swaps... tout cela n'existerait pas dans un environnement isolé.

Starknet, de son côté, choisit la performance d'abord et rattrape la compatibilité EVM avec des solutions comme Kakarot – prouvant qu'il n'y a pas qu'un seul chemin vers l'adoption.

**GMX Synthetics** arrive dans quelques semaines. Le déploiement multi-chain sera plus simple. L'écosystème va s'accélérer.

Et pendant ce temps, la gouvernance GMX continue de prendre des décisions pragmatiques, bottom-up, avec une communauté qui pense long-terme.

**100 milliards de dollars de volume**, ce n'est que le début.

---

## 📍 Pour aller plus loin

**GMX**
- app.gmx.io
- gov.gmx.io (governance forum)
- Twitter : @GMX_IO

**Écosystème GMX**
- GMX.house (leaderboard/explorer)
- Puppet Finance (copy trading, coming soon)
- GBC Trading (interface alternative)

**Starknet**
- starkvision.com (StarkCon Tel Aviv, 5-6 février)
- Kakarot (EVM in Cairo)
- Cartridge (wallet abstraction)

**The Arch**
- Association de builders Web3
- Lives réguliers avec les acteurs de l'écosystème

---

*Article rédigé suite au live The Arch. Merci à Coinflip (GMX), It Burns (GMX Blueberry Club), et Luis Guzman (Starkware) pour leur temps et leur transparence.*
