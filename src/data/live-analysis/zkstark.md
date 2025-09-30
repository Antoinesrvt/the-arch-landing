Analyse du Live - GMX x Starkware x The Arch
Parfait ! Voici l'analyse structurée de ce live en anglais :
📌 LE SUJET
GMX Multi-Chain Strategy & ZK Rollups : Discussion sur la stratégie d'expansion de GMX (exchange perpétuel/spot décentralisé), les choix d'infrastructure blockchain, et l'écosystème qui se construit autour du protocole.
👥 LES PERSONNES
Animateur
	•	Clément - The Arch
	▪	Association de builders Web3 entraide sur toutes verticales
Invités
Coinflip - GMX (Ecosystem & Partnerships)
	•	Rôle : Ecosystem building, partnerships, community	•	Parcours : Découverte crypto 2017 (ICOs), vraiment actif depuis 2020 avec la DeFi	•	"Regrettably saw articles more than a decade ago but didn't buy"
It Burns - GMX Blueberry Club
	•	Background : Développeur corporate → Investisseur → Blockchain	•	Créateur de GMX Blueberry Club (NFT collection avec revenue mechanism)	•	Build des produits qui génèrent des revenus via GMX leverage trading	•	Créateur de GMX.house (leaderboard/explorer)	•	Développe Puppet Finance (copy trading platform)
Luis Guzman - Starkware (Ecosystem Lead)
	•	Parcours : Entendu parler de crypto 2012-2013, buy Bitcoin 2016	•	A acheté The DAO tokens juste avant le hack (!)	•	2018 : full-time crypto, travaille sur cryptographie avancée	•	2019 : Rejoint Starkware	•	Responsable de l'écosystème Starknet
🔑 KEY INSIGHTS
1. GMX - Le Protocole
Qu'est-ce que GMX ?
	•	Exchange perpétuel et spot décentralisé	•	Déployé sur Arbitrum L2 et Avalanche C-Chain	•	Lancé fin 2021 (Arbitrum) et début 2022 (Avalanche)	•	Près de 100 milliards $ de volume tradé 🚀	•	All-time high du token le jour du live
Modèle technique
	•	Pools de liquidité + Oracle pricing	•	Réplication de l'exécution CEX on-chain	•	GLP = token de liquidité provider (très profitable selon Coinflip)
2. Pourquoi Arbitrum au départ ?
Les raisons du choix
✅ Affinité Ethereum : Sécurité héritée d'Ethereum
✅ Pas de whitelist : Lancement ouvert à tous les protocoles (vs optimism à l'époque)
✅ Confort technique : EVM compatible, équipe Offchain Labs solide
✅ Launch day : GMX a pu déployer le jour du lancement public d'Arbitrum
✅ Philosophie aligned : Pas de barrières, juste builder
Ce qui n'était pas sur le radar
	•	❌ Starknet : Coding language barrier à l'époque (Cairo)	•	❌ Optimism : Moins de confort avec l'approche
Migration depuis BSC
	•	Gambit (ancêtre de GMX) était sur BSC	•	Migration vers Arbitrum pour : décentralisation, scalabilité, orientation développeurs	•	"Very high risk move" : migration avant même le launch officiel d'Arbitrum
3. Pourquoi Avalanche ensuite ?
Les facteurs de décision
✅ Love from Ava Labs : Équipe très accueillante
✅ Instant finality : Confirmations quasi-instantanées
✅ Quick block times : Performance technique
✅ New users : Stratégie d'onboarding retail d'Avalanche
✅ Ecosystem : Protocoles avec qui collaborer
Pas de subnet (pour l'instant)
	•	Choix de rester sur blockchains publiques	•	Raison : Composability > Isolation	•	GMX = "base layer" pour d'autres protocoles qui buildent au-dessus et en-dessous
4. Expansion Multi-Chain : BNB vs Polygon
Propositions reçues
	•	📋 BNB Chain proposal	•	📋 Polygon proposal
Arguments pour BNB Chain
✅ Large retail base : Utilisateurs moins "crypto-natives" qu'Arbitrum/Optimism
✅ Wallet integration : TrustWallet, C98, connexions faciles
✅ Deep liquidity : Tokens longue traîne (ADA, DOGE) via Binance pegged tokens
✅ GMX Synthetics : Parfait pour créer des marchés sur plus de tokens
Préoccupations adressées
	•	⚠️ Gambit avait quitté BSC pour des raisons de qualité (RPC throttling, settlement issues)	•	✅ Mais BNB Chain a évolué : décentralisation progressive	•	💡 "Judge us by our actions and direction" : même approche que GMX sur décentralisation
Décision finale
	•	🗳️ La communauté décide via governance	•	Pas de décision top-down	•	Même processus que pour Arbitrum et Avalanche
5. Starkware : Performance vs Backward Compatibility
Positionnement Starknet
🎯 Performance first, compatibility later
Avantages techniques
	1.	Cheap on-chain data : Oracle price injection on-the-fly dans transactions	2.	Cheap computation : Compression une fois, pas de re-paiement	3.	Account abstraction native : Pas de private keys, smart wallets par défaut	4.	Innovation freedom : Pas de backward compatibility constraints
"The biggest mistake ever made in crypto"
"The existence of private keys is by far the biggest mistake ever made in crypto" - Luis quoting Vitalik
	•	Starknet = Smart wallets par défaut	•	EIP-4337 sur Ethereum = Rattrapage de ce que Starknet fait nativement
Comparaison avec Polygon zkEVM
	•	Polygon : Achat de 3 équipes ZK (Hermez, Mir, Polygon Zero)	•	Approche : Type 3 equivalence = Backward compatibility first	•	Polygon zkEVM = Run EVM bytecode directement	•	Compromis : Retrofit d'un modèle de computation qui n'était pas fait pour ZK
Roadmap Starknet
	•	✅ Performance déjà là	•	🔄 Backward compatibility en cours : Warp (transpiler) + Kakarot (EVM in Cairo)	•	📈 Kakarot = Community-driven, parité type-3 en 3 mois (!), leadership français (Elias)	•	🚀 Cairo 1.0 + Rust migration = 30x performance boost (2 TPS → 50+ TPS)
6. GMX Synthetics (v2) - Game Changer
Lancement prévu
	•	📅 Fin février / début mars : Testnet	•	📅 Ensuite : Limited mainnet → Full deployment
Innovation clé
	•	🔧 Uniswap-like deployment : Très peu d'opérations pour maintenir	•	🔧 Easy multi-chain : Déploiement simplifié vs GMX v1	•	🔧 Isolated markets : Marchés séparés pour tokens longue traîne	•	🔧 Plus de tokens : Au-delà de BTC/ETH
Impact sur l'écosystème
	•	Puppet Finance et autres protocoles pourront migrer rapidement	•	Moins de overhead pour expansion multi-chain	•	Scalabilité augmentée
7. L'Écosystème GMX - Composability
Au-dessus de GMX (Trading platforms)
	•	🎯 Puppet Finance (It Burns) : Copy trading via matchmaking engine	•	🎯 GBC Trading : Interface de trading alternative	•	🎯 GMX.house : Leaderboard & explorer	•	🎯 Integrations wallets : Changelly (native tab dans le wallet)
En-dessous de GMX (Liquidity)
	•	Multiples protocoles qui construisent de la liquidité	•	Treasury swaps avec des protocoles (alignement long-terme)
Modèle de revenus
	•	📊 Referral system : Transparent, on-chain	•	📊 Frontends gagnent des revenus durables	•	📊 Vs CEX : Opacité et commissions cachées
Gamma Swap
	•	Treasury swap en cours	•	Coinflip a investi personnellement	•	"Nice to see people experimenting in DeFi"
8. Puppet Finance - Deep Dive
Problème avec les copy trading actuels (ex: sdfx)
❌ Vault-controlled trade : Trader contrôle tout
❌ Asymmetry : Risque transféré à l'investisseur
❌ Idle capital : Fonds qui ne font rien
❌ Liquidity issues : Flexibilité limitée
Solution Puppet
✅ Matchmaking engine : Pas de contrôle total du trader
✅ Single vault : Un dépôt, copy multiple traders
✅ Small position sizing : Chaque trade = petite portion du capital
✅ Portfolio approach : Comme un portfolio de tokens, remove underperformers
Modèle économique
	•	Utilise GMX referral system	•	Revenus pour Blueberry Club	•	Build sur GMX Synthetics (quand disponible)
9. Governance GMX
Structure actuelle
	•	📋 gov.gmx.io : Forum de discussions	•	🗳️ Snapshot : Voting on-chain
Qualité exceptionnelle
"Very knowledgeable and practical community. Not very absolutist, not very maximalist." - Coinflip
Décisions récentes
	•	Treasury swaps multiples	•	Seeding de protocoles buildant sur GMX	•	Lockup long-terme pour alignement
Évolution prévue
	•	Plus de structure dans les prochains mois	•	Focus : Risk parameters, chain expansion, decentralization
Tokenomics effect
	•	Setup favorise les holders long-terme	•	Perspective long-terme dans les discussions	•	Pas de short-term thinking
10. Bridges & Cross-Chain
Solutions mentionnées
Solution
Type
Commentaire
Socket
Aggregator
Framework bridge + cross-chain execution
Axelar
Messaging
Asset movement + messaging
Stargate
Liquidity
Layerzero-based
Wormhole
Messaging
Guardian network
Everstory
ZK-based
Storage proofs, trustless
Socket - Highlight
	•	Créé par DC (early Polygon engineer)	•	Event-based blockchain approach	•	"How blockchain should have been built" - It Burns	•	Asynchronous tooling
Everstory - ZK Approach
	•	Provide information trustlessly via ZK	•	Used by : sdfx, Root, Snapshot	•	Cross-chain state proofs
DappOS
	•	Pilot program avec GMX annoncé	•	Abstraction du bridging	•	Trade depuis n'importe quelle EVM chain vers GMX	•	Lags & delays existent, mais solution publique
11. Mobile & UX
GMX Mobile-Optimized
	•	app.gmx.io fonctionne très bien sur Web3 browsers	•	Native integrations dans wallets mobiles
Changelly Integration
	•	Native tab dans leur wallet	•	Trade directement sans friction	•	Potentiel de revenus via referral system
Objectif
	•	Abstraire la complexité blockchain	•	Onboarding via mobile wallets (premier point de contact)	•	Plus d'integrations après GMX Synthetics launch
🌍 COMPARAISON ÉCOSYSTÈMES
Cosmos (Question posée)
	•	❌ Pas souvent discuté dans la communauté GMX	•	🤔 Possible dans le futur avec interconnectivity croissante	•	🤔 dYdX a fait ce move, mais GMX préfère solutions publiques	•	🤔 App-specific chains possibles sur : Starknet, Avalanche (subnet), Arbitrum (Nova)
GNS (Gains Network) sur Arbitrum
	•	Félicitations pour le déploiement	•	"Perpetual exchange a week" sur Arbitrum récemment	•	Pas de décision basée sur la concurrence	•	Focus sur users mal desservis
Competition Philosophy
"The more exchanges on-chain, the more people will come natively on-chain. We'd be happier seeing the market grow as a whole." - Coinflip
	•	Plus d'acteurs = Marché plus dynamique	•	GMX ne cherche pas à "own" 100% du marché	•	Comparaison CEX : Plus de CEX = Plus d'onboarding crypto global
💼 STRATÉGIE BUSINESS
Token Supply Multi-Chain
	•	Pas de nouveau minting systématique	•	Liquidity incentives potentielles pour bootstrap	•	Protocol-owned liquidity peut être déplacée	•	GMX Synthetics = Moins besoin d'incentives (profitabilité prouvée des LPs)
Critères d'expansion
	1.	User base : Utilisateurs non/mal desservis actuellement	2.	Ecosystem : Protocoles avec qui collaborer	3.	Technical fit : Performance, finality, block times	4.	Community decision : Vote final de la DAO
Pas de Token Starknet/Arbitrum (encore)
"Benefit of no token during bear market: Focus on building and product vs token price." - Coinflip
	•	Avalanche token price down = Negativity malgré produit qui s'améliore	•	Pas de token = Focus sur fundamentals
🎯 ALPHAS & PROJETS MENTIONNÉS
Dice (It Burns' pick)
	•	Next-gen casino on Arbitrum	•	Gamble Dice tokens, coin flip to win	•	"Don't buy it!" (not financial advice 😄)
Gamma Swap (Coinflip's pick)
	•	Treasury swap en cours avec GMX	•	Coinflip a investi personnellement	•	Innovation en DeFi, worth watching
Kakarot (Luis' highlight)
	•	EVM in Cairo	•	Community-driven (leadership français)	•	Type-3 EVM equivalence en 3 mois	•	Potentiellement premier zkEVM en production
Cartridge (Starknet)
	•	NFT drop sans wallet installation	•	Sign avec Face ID	•	Browser-based
📅 ÉVÉNEMENTS À VENIR
StarkCon Tel Aviv
	•	📅 5-6 février (semaine prochaine au moment du live)	•	Geordie (Arbitrum), Bobby (Mir), tous les ZK leaders	•	starkvision.com
GMX Synthetics Testnet
	•	📅 Fin février / début mars 2023
Starknet Regenesis + Cairo 1.0
	•	🚀 30x performance improvement	•	🚀 2 TPS → 50+ TPS	•	🚀 Rust implementation	•	🚀 Préparation décentralisation
💡 QUOTES MARQUANTES
Sur les private keys
"The existence of private keys is by far the biggest mistake ever made in crypto." - Vitalik (cité par Luis)
Sur l'investissement
"I don't trade because I used to be a bottom. I made peace with the fact that I lose a lot of money." - Luis (😂)
"I have a pocket with infinite depth for losing money." - Luis
Sur le bear market
"Fact that there hasn't been a token meant focus on building and product as opposed to token price." - Coinflip
Sur la communauté GMX
"Very knowledgeable and practical community. Not very absolutist, not very maximalist." - Coinflip
Sur Kakarot
"Adel got triggered by a tweet by Max Zeller saying you need a PhD to write Cairo. So he built Kakarot to prove him wrong." - Luis
🎯 ANGLE POUR LE BLOG
Titre suggéré
"GMX : 100 milliards $ de volume et une stratégie multi-chain ambitieuse"
Sous-titres possibles
	•	"De Arbitrum à BNB Chain : Comment GMX choisit ses blockchains"	•	"GMX Synthetics : La v2 qui va changer la donne"	•	"Starknet vs Polygon zkEVM : Performance ou Compatibilité ?"
Structure proposée
	1.	Intro : GMX atteint 100B$ de volume, all-time high	2.	Le parcours : De BSC à Arbitrum, puis Avalanche	3.	Stratégie multi-chain : BNB et Polygon dans le radar	4.	L'écosystème : Puppet Finance, Blueberry Club, composability	5.	GMX Synthetics : La révolution v2	6.	Starknet deep-dive : Pourquoi performance > compatibility	7.	Governance : Une DAO qui fonctionne	8.	Vision : Cross-chain future & abstraction	9.	Conclusion : Building in the bear
Ton du blog
	•	Technique mais accessible	•	Focus sur stratégie et vision long-terme	•	Mettre en avant la qualité de la governance	•	Comparaisons écosystèmes (ZK rollups)	•	Optimiste sur l'avenir multi-chain