export type Lang = 'fr' | 'en'

export type StatItem = { value: number; suffix: string; label: string }
export type ProjectItem = { id: number; number: string; type: string; title: string; description: string; tech: string[]; link: string | null; year: string; status: string }
export type ExperienceItem = { period: string; title: string; company: string; location: string; achievements: string[] }
export type SkillCategory = { category: string; items: string[] }

export type Translation = {
  nav: { projets: string; experience: string; competences: string; contact: string }
  hero: { available: string; role: string; quote: string; cta: string; download: string }
  projects: { title: string; visit: string; private: string }
  experience: { title: string; period: string; role: string; achievements: string }
  skills: { title: string }
  contact: {
    title: string
    description: string
    emailButton: string
    form: { name: string; namePlaceholder: string; email: string; emailPlaceholder: string; message: string; messagePlaceholder: string; send: string }
    labels: { email: string; phone: string }
  }
  data: { stats: StatItem[]; projects: ProjectItem[]; experiences: ExperienceItem[]; skills: SkillCategory[] }
}

export const translations: Record<Lang, Translation> = {
  fr: {
    nav: {
      projets: 'Projets',
      experience: 'Expérience',
      competences: 'Compétences',
      contact: 'Contact',
    },
    hero: {
      available: 'Disponible',
      role: 'Ingénieur Logiciel',
      quote: '"Développeur le jour, cofondateur la nuit"',
      cta: 'Voir mes projets →',
      download: 'Télécharger CV ↓',
    },
    projects: {
      title: 'Projets',
      visit: 'Visiter ↗',
      private: 'Privé',
    },
    experience: {
      title: 'Expérience',
      period: 'Période',
      role: 'Poste',
      achievements: 'Réalisations',
    },
    skills: {
      title: 'Compétences',
    },
    contact: {
      title: 'Contact',
      description:
        'Ouvert à de nouvelles opportunités — CDI, missions freelance, ou collaborations sur des projets à fort impact.',
      emailButton: 'Écrire un email →',
      form: {
        name: 'Nom',
        namePlaceholder: 'Votre nom',
        email: 'Email',
        emailPlaceholder: 'votre@email.com',
        message: 'Message',
        messagePlaceholder: 'Votre message...',
        send: 'Envoyer →',
      },
      labels: {
        email: 'Email',
        phone: 'Téléphone',
      },
    },
    data: {
      stats: [
        { value: 3, suffix: ' ans', label: "d'expérience" },
        { value: 10, suffix: '+', label: 'projets livrés' },
        { value: 20, suffix: '+', label: 'technologies' },
      ],
      projects: [
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
            "The Amazing MarketPlace — marketplace pair-à-pair pour l'achat, la vente et l'échange de cartes TCG (Pokémon, MTG, One Piece…). Système de trading avec contre-offres, messagerie intégrée, suivi de collection avec P&L, analytics de prix (Cardmarket / TCGPlayer) et gestion de réputation vendeur.",
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
      ],
      experiences: [
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
      ],
      skills: [
        { category: 'Front-end', items: ['Angular', 'React', 'React Native', 'TypeScript', 'CSS · Tailwind'] },
        { category: 'Back-end', items: ['Java · Spring Boot', 'Node.js', 'Python', 'API REST'] },
        { category: 'DevOps & Cloud', items: ['Docker', 'Kubernetes', 'Jenkins · GitLab CI', 'Azure', 'ArgoCD'] },
        { category: 'Bases de données', items: ['PostgreSQL', 'MySQL', 'SQL'] },
      ],
    },
  },

  en: {
    nav: {
      projets: 'Projects',
      experience: 'Experience',
      competences: 'Skills',
      contact: 'Contact',
    },
    hero: {
      available: 'Available',
      role: 'Software Engineer',
      quote: '"Developer by day, co-founder by night"',
      cta: 'See my projects →',
      download: 'Download CV ↓',
    },
    projects: {
      title: 'Projects',
      visit: 'Visit ↗',
      private: 'Private',
    },
    experience: {
      title: 'Experience',
      period: 'Period',
      role: 'Position',
      achievements: 'Achievements',
    },
    skills: {
      title: 'Skills',
    },
    contact: {
      title: 'Contact',
      description:
        'Open to new opportunities — permanent positions, freelance missions, or collaborations on high-impact projects.',
      emailButton: 'Send an email →',
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        message: 'Message',
        messagePlaceholder: 'Your message...',
        send: 'Send →',
      },
      labels: {
        email: 'Email',
        phone: 'Phone',
      },
    },
    data: {
      stats: [
        { value: 3, suffix: ' yrs', label: 'experience' },
        { value: 10, suffix: '+', label: 'projects delivered' },
        { value: 20, suffix: '+', label: 'technologies' },
      ],
      projects: [
        {
          id: 1,
          number: 'N°01',
          type: 'E-Commerce',
          title: 'Boulevard TCG',
          description:
            'Complete e-commerce platform for trading card games. TCGdex API integration, catalog management, secure payments and SEO strategy.',
          tech: ['React', 'Node.js', 'PostgreSQL', 'API TCGdex', 'SEO'],
          link: 'https://boulevardtcg.com',
          year: '2024',
          status: 'Online',
        },
        {
          id: 3,
          number: 'N°02',
          type: 'C2C Marketplace',
          title: 'TAMP',
          description:
            'The Amazing MarketPlace — peer-to-peer marketplace for buying, selling and trading TCG cards (Pokémon, MTG, One Piece…). Trading system with counter-offers, integrated messaging, collection tracking with P&L, price analytics (Cardmarket / TCGPlayer) and seller reputation management.',
          tech: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'AWS S3', 'Docker', 'GitHub Actions'],
          link: null,
          year: '2025',
          status: 'In development',
        },
        {
          id: 2,
          number: 'N°03',
          type: 'Mobile App',
          title: 'MyCloseShop',
          description:
            'Mobile booking app with complete cloud architecture. Co-founder and lead developer, project in pilot phase with first real users.',
          tech: ['React Native', 'Spring Boot', 'MySQL', 'Azure', 'Kubernetes', 'GitLab CI/CD'],
          link: null,
          year: '2023',
          status: 'Pilot phase',
        },
      ],
      experiences: [
        {
          period: '2022 – 2025',
          title: 'Full Stack Developer',
          company: 'Crédit Agricole',
          location: 'Guyancourt',
          achievements: [
            'Critical tools for 39 regional banks and +75,000 employees',
            'Angular (BOA) — reusable components, Karma/Jasmine tests, WCAG compliance',
            'React + AI (Mesari) — interface connected to a Python AI, +50 users',
            'CI/CD Jenkins, Docker / Kubernetes / ArgoCD',
          ],
        },
        {
          period: '2021 – 2022',
          title: 'Front-end Web Developer',
          company: 'Ma compétence en plus',
          location: 'Maisons-Alfort',
          achievements: [
            '+200 monthly visitors from launch',
            'Figma UI/UX design and client support',
          ],
        },
        {
          period: '2020 – 2021',
          title: 'IT Support Technician',
          company: 'Mairie de Paris',
          location: 'Paris',
          achievements: [
            'Deployment and maintenance of IT infrastructure',
            'Data migration and technical support',
          ],
        },
      ],
      skills: [
        { category: 'Front-end', items: ['Angular', 'React', 'React Native', 'TypeScript', 'CSS · Tailwind'] },
        { category: 'Back-end', items: ['Java · Spring Boot', 'Node.js', 'Python', 'REST API'] },
        { category: 'DevOps & Cloud', items: ['Docker', 'Kubernetes', 'Jenkins · GitLab CI', 'Azure', 'ArgoCD'] },
        { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQL'] },
      ],
    },
  },
}
