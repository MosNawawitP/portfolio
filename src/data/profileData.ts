// Mock data for portfolio

export const profileData = {
  firstName: 'Nawawit',
  lastName: 'Pilanthanayothin',
  name: 'Nawawit Pilanthanayothin',
  title: 'Full-Stack Developer',
  description: '6+ years of experience in PHP, JavaScript/TypeScript ecosystem. Building web applications for Goverments agencies and enterprises with a focus on scalability, security, and performance.',
  avatarUrl: '/images/profile.jpg',
  location: 'Bangkok, Thailand',
  email: 'nawawit.pilanthanayothin@gmail.com',
  github: 'https://github.com/MosNawawitP',
  linkedin: 'https://linkedin.com/in/nawawit',
};

export const personalInfo = {
  email: 'nawawit.pilanthanayothin@gmail.com',
  phone: '062-392-2598',
  location: 'Bangkok, Thailand',
  description: 'I\'m a Back-end Developer with over 6 years of experience in PHP, Javascript/Typescript ecosystem. My early career was built on developing APIs and real-time notification systems for state enterprises, handling massive traffic spikes during peak hours. As I moved into a Senior position, my focus shifted toward architecting scalable FinTech and Retail solutions, ensuring data integrity and security for sensitive financial transactions. Beyond just coding, I guide my team, conduct code reviews, and select tech stacks to build systems for high-performing and easy to maintain.',
};

export const education = [
  {
    id: 1,
    degree: 'Bachelor of Science in Information Technology',
    institution: 'Naresuan University',
    year: 'Graduated 2019',
    gpax: '3.44',
    relevantCoursework: 'Data Structures & Algorithms, Object-Oriented Programming, Database Design and Management, Web Development, Web Security, Business Intelligence.',
    seniorProject: {
      title: 'Hospital Ward Unit Web Application',
      description: 'Developed a system for managing patient data — from patient admission to the hospital, through various medical examinations, to ward admission at a designated hospital.',
    },
  }
];

export const skills = [
  { name: 'JavaScript', icon: 'devicon-javascript-plain', color: '#F7DF1E' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain', color: '#3178C6' },
  { name: 'PHP', icon: 'devicon-php-plain', color: '#777BB4' },
  { name: 'Go', icon: 'devicon-go-original-wordmark', color: '#00ADD8' },
  { name: 'Laravel', icon: 'devicon-laravel-original', color: '#FF2D20' },
  { name: 'NestJS', icon: 'devicon-nestjs-original', color: '#E0234E' },
  { name: 'Vue.js', icon: 'devicon-vuejs-plain', color: '#4FC08D' },
  { name: 'Nuxt.js', icon: 'devicon-nuxtjs-plain', color: '#00DC82' },
  { name: 'React.js', icon: 'devicon-react-original', color: '#61DAFB' },
  { name: 'Next.js', icon: 'devicon-nextjs-plain', color: '#000000' },
  { name: 'Express.js', icon: 'devicon-express-original', color: '#000000' },
  { name: 'MySQL', icon: 'devicon-mysql-plain', color: '#4479A1' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', color: '#336791' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain', color: '#47A248' },
  { name: 'Redis', icon: 'devicon-redis-plain', color: '#DC382D' },
  { name: 'Docker', icon: 'devicon-docker-plain', color: '#2496ED' },
  { name: 'Kafka', icon: 'devicon-apachekafka-original', color: '#231F20' }
];

export const workExperiences = [
  {
    id: 1,
    title: 'Senior Back-end Developer',
    company: 'Clicknext, Inc',
    location: 'Bangkok, Thailand',
    period: '06/2025 - Present',
    description: '• Architected and oversaw system UX/UI designs, selecting the most appropriate tech stacks (e.g., NestJS, Go Fiber) to ensure long-term scalability and maintainability.\n• Served as a Technical Consultant and Mentor, conducting code reviews and establishing best practices to maintain high code quality and reduce technical debt.\n• Developed and optimized a high-volume loyalty point engine for a major supermarket chain, ensuring seamless reward processing and data consistency during peak shopping hours using NestJS and Nuxt.js.\n• Engineered secure cash withdrawal integrations for banking partner applications, focusing on strict transactional integrity and low-latency API performance using NestJS.\n• Developed FinTech solutions for stock market data access and loan management, with a heavy emphasis on PII data protection and compliance using NestJS.',
    technologies: ['Laravel', 'NestJS', 'Go Fiber', 'Nuxt.js', 'RESTful APIs', 'Microservices', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    id: 2,
    title: 'Back-end Developer',
    company: 'Clicknext, Inc.',
    location: 'Bangkok, Thailand',
    period: '06/2019 - 06/2025',
    description: '• Designed and Developed RESTful APIs with Microservice Architecture to serve content for point and promotion management website and mobile, ensuring 99.9% uptime.\n• Developed Back-office and CMS systems, implementing granular Role-Based Access Control (RBAC) to handle complex organizational workflows and permissions using Laravel and Nuxt.js.\n• Developed a high-concurrency lottery result system capable of handling massive traffic spikes (hundreds of requests per seconds) during result announcements and sent large notification to customer using Kafka and Laravel.\n• Developed multiple third-party logistics (3PL) APIs into a unified tracking gateway, providing users with real-time package status updates using Laravel Framework.\n• Developed meeting management website, with process handle agenda creating, propose agenda topic, take note during meeting and summary report generation using Laravel and Nuxt.js.',
    technologies: ['Laravel', 'ExpressJS', 'Nuxt.js', 'Kafka', 'Firebase', 'RESTful APIs', 'Microservices', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Government Lottery Office Website & Mobile Application',
    description: 'Website and Mobile Application for Government Lottery Office handling large scale traffic during lottery result announcement',
    technologies: ['Microservices', 'REST API', 'Laravel', 'Nuxt.js', 'Kafka', 'PostgreSQL', 'Redis'],
    image: '/project-images/government-lottery-office.png',
  },
  {
    id: 2,
    title: 'Government Lottery Office CMS',
    description: 'Content Management System and Mobile Application for Government Lottery Office handling large scale traffic during lottery result announcement',
    technologies: ['Microservices', 'REST API', 'Laravel', 'Nuxt.js', 'Kafka', 'PostgreSQL', 'Redis'],
    image: '/project-images/lottery-cms.svg',
  },
  {
    id: 3,
    title: 'Supermarket Content Management System',
    description: 'REST API for Supermarket Content Management System',
    technologies: ['REST API', 'Express.js', 'Vue.js', 'AWS S3', 'MySQL'],
    image: '/project-images/supermarket-cms.svg',
  },
  {
    id: 4,
    title: 'Logistic Tracking System',
    description: 'Logistic Tracking System For Marketplace',
    technologies: ['REST API', 'Laravel/Lumen', 'PostgreSQL'],
    image: '/project-images/logistic-tracking.svg',
  },
  {
    id: 5,
    title: 'Government Meeting Management System',
    description: 'System handling agenda creating, proposal topics, taking notes and summary report generation during meetings',
    technologies: ['REST API', 'Laravel', 'Nuxt.js', 'MySQL', 'SMTP'],
    image: '/project-images/meeting-management.svg',
  },
  {
    id: 6,
    title: 'Loan & Customer Trust Management',
    description: 'Loan and Customer\'s trust Management System utilizing microservice architecture',
    technologies: ['REST API', 'Microservices', 'Laravel', 'Nuxt.js', 'MySQL'],
    image: '/project-images/loan-management.svg',
  },
  {
    id: 7,
    title: 'Point of Sale Management System',
    description: 'Point of Sale Management System',
    technologies: ['REST API', 'NestJS', 'Nuxt.js', 'MySQL', 'Firebase'],
    image: '/project-images/pos-system.svg',
  },
  {
    id: 8,
    title: 'Smart Trading Information System',
    description: 'Smart Trading Information Management System for Financial transactions',
    technologies: ['REST API', 'NestJS', 'Next.js', 'PostgreSQL', 'MongoDB', 'Redis'],
    image: '/project-images/trading-system.svg',
  },
  {
    id: 9,
    title: 'Cash Deposit From Banking System',
    description: 'Cash Deposit From Banking System handling sensitive financial transactions',
    technologies: ['REST API', 'NestJS', 'Firebase'],
    image: '/project-images/cash-deposit.svg',
  },
];
