export const projects = [
  {
    id: 1,
    number: 'N°01',
    type: 'E-Commerce',
    title: 'Boulevard TCG',
    description:
      'Plateforme e-commerce complète pour les jeux de cartes à collectionner. Intégration API TCGdex, gestion de catalogue, paiements sécurisés et stratégie SEO.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'API TCGdex', 'SEO'],
    link: 'https://boulevardtcg.com',
    year: '2024',
    status: 'En ligne',
  },
  {
    id: 3,
    number: 'N°02',
    type: 'Marketplace C2C',
    title: 'TAMP',
    description:
      'The Amazing MarketPlace — marketplace pair-à-pair pour l\'achat, la vente et l\'échange de cartes TCG (Pokémon, MTG, One Piece…). Système de trading avec contre-offres, messagerie intégrée, suivi de collection avec P&L, analytics de prix (Cardmarket / TCGPlayer) et gestion de réputation vendeur.',
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'AWS S3', 'Docker', 'GitHub Actions'],
    link: null,
    year: '2025',
    status: 'En développement',
  },
  {
    id: 2,
    number: 'N°03',
    type: 'Application Mobile',
    title: 'MyCloseShop',
    description:
      'Application mobile de réservation avec architecture cloud complète. Cofondateur et lead developer, projet en phase pilote avec les premiers utilisateurs réels.',
    tech: ['React Native', 'Spring Boot', 'MySQL', 'Azure', 'Kubernetes', 'GitLab CI/CD'],
    link: null,
    year: '2023',
    status: 'Phase pilote',
  },
]

export const experiences = [
  {
    period: '2022 – 2025',
    title: 'Développeur Full Stack',
    company: 'Crédit Agricole',
    location: 'Guyancourt',
    achievements: [
      'Outils critiques pour 39 caisses régionales et +75 000 collaborateurs',
      'Angular (BOA) — composants réutilisables, tests Karma/Jasmine, conformité RGAA',
      'React + IA (Mesari) — interface connectée à une IA Python, +50 utilisateurs',
      'CI/CD Jenkins, Docker / Kubernetes / ArgoCD',
    ],
  },
  {
    period: '2021 – 2022',
    title: 'Développeur Web Front-end',
    company: 'Ma compétence en plus',
    location: 'Maisons-Alfort',
    achievements: [
      '+200 visiteurs mensuels dès le lancement',
      'Conception UI/UX Figma et accompagnement client',
    ],
  },
  {
    period: '2020 – 2021',
    title: 'Technicien Support Informatique',
    company: 'Mairie de Paris',
    location: 'Paris',
    achievements: [
      'Déploiement et maintenance du parc informatique',
      'Migration de données et assistance technique',
    ],
  },
]

export const skills = [
  {
    category: 'Front-end',
    items: ['Angular', 'React', 'React Native', 'TypeScript', 'CSS · Tailwind'],
  },
  {
    category: 'Back-end',
    items: ['Java · Spring Boot', 'Node.js', 'Python', 'API REST'],
  },
  {
    category: 'DevOps & Cloud',
    items: ['Docker', 'Kubernetes', 'Jenkins · GitLab CI', 'Azure', 'ArgoCD'],
  },
  {
    category: 'Bases de données',
    items: ['PostgreSQL', 'MySQL', 'SQL'],
  },
]

export const stats = [
  { value: 3, suffix: ' ans', label: "d'expérience" },
  { value: 10, suffix: '+', label: 'projets livrés' },
  { value: 20, suffix: '+', label: 'technologies' },
]
