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
  description: 'I\'m a Full-Stack Developer with 6+ years of experience in the PHP and JavaScript/TypeScript ecosystems. I have extensive experience developing robust APIs and real-time systems that handle massive traffic spikes for large-scale projects. In my senior role, I specialize in designing secure FinTech and Retail solutions. I am passionate about guiding my team, ensuring code quality through reviews, and building systems that are both high-performing and easy to maintain.',
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
  { name: 'JavaScript', icon: 'devicon-javascript-plain', color: '#F7DF1E', expert: true },
  { name: 'TypeScript', icon: 'devicon-typescript-plain', color: '#3178C6', expert: true },
  { name: 'PHP', icon: 'devicon-php-plain', color: '#777BB4', expert: true },
  { name: 'Go', icon: 'devicon-go-original-wordmark', color: '#00ADD8' },
  { name: 'Laravel', icon: 'devicon-laravel-original', color: '#FF2D20', expert: true },
  { name: 'NestJS', icon: 'devicon-nestjs-original', color: '#E0234E', expert: true },
  { name: 'Vue.js', icon: 'devicon-vuejs-plain', color: '#4FC08D' },
  { name: 'Nuxt.js', icon: 'devicon-nuxtjs-plain', color: '#00DC82' },
  { name: 'React.js', icon: 'devicon-react-original', color: '#61DAFB' },
  { name: 'Next.js', icon: 'devicon-nextjs-plain', color: '#000000' },
  { name: 'Express.js', icon: 'devicon-express-original', color: '#000000', expert: true },
  { name: 'MySQL', icon: 'devicon-mysql-plain', color: '#4479A1', expert: true },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', color: '#336791', expert: true },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain', color: '#47A248' },
  { name: 'Redis', icon: 'devicon-redis-plain', color: '#DC382D' },
  { name: 'Docker', icon: 'devicon-docker-plain', color: '#2496ED' },
  { name: 'Kafka', icon: 'devicon-apachekafka-original', color: '#231F20' },
  { name: 'Jenkins', icon: '/images/skills/jenkins.svg', color: '' },
  { name: 'GitHub', icon: 'devicon-github-original', color: '#181717' },
  { name: 'GitLab', icon: 'devicon-gitlab-plain', color: '#FC6D26', expert: true },
];

export const workExperiences = [
  {
    id: 1,
    title: 'Senior Full-Stack Developer',
    company: 'Clicknext, Inc',
    location: 'Bangkok, Thailand',
    period: '06/2025 - Present',
    description: '• System Architecture & Design: Collaborated with BA/SA to design UX/UI and selected the technology stack (NestJS/Nuxt.js) focused on scalability and long-term maintainability.\n• Technical Guidance: Guided the team on code structure, established coding standards, and performed code reviews to ensure system stability and ease of future updates.\n• Database Design & Optimization: Designed database schemas for multiple projects and performed query optimization to improve data retrieval speed and system performance reducing latency by 30%.\n• Loyalty & CMS Platform: Developed a NestJS-based backend and Nuxt.js frontend for point accumulation and content management, handling high-traffic peaks of 1,000+ requests per second.\n• Financial Transaction System: Built the backend API for a mobile gold trading application, managing bank account linking and secure fund withdrawal processes.\n• Data Migration & Auth Integration: Managed data migration for stock with over 10+ million rows of data and 10+ thousands user profiles, implemented Role-Based Access Control (RBAC), and integrated OAuth 2.0 for seamless app transitions.',
    technologies: ['Laravel', 'NestJS', 'Go Fiber', 'Nuxt.js', 'RESTful APIs', 'Microservices', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    id: 2,
    title: 'Back-end Developer',
    company: 'Clicknext, Inc.',
    location: 'Bangkok, Thailand',
    period: '06/2019 - 06/2025',
    description: '• Government Lottery Microservices: Developed RESTful APIs using Laravel/Lumen and Nuxt.js for a lottery management system, supporting over 1,000 requests per second during draw results.\n• Real-time Notifications: Built a high-volume notification system using Firebase Cloud Messaging (FCM) and Apache Kafka, successfully delivering over 100,000 alerts simultaneously.\n• Automation & Task Scheduling: Implemented Cron jobs to automate background tasks, including employee data synchronization and scheduled system notifications.\n• Logistics Tracking Integration: Developed real-time tracking APIs (Laravel/Lumen) integrated with various third-party logistics providers.\n• Regional Retail Promotion System: Developed a full-stack promotion and coupon management system (ExpressJS/Vue.js) for a supermarket chain operating across two countries.\n• Government Meeting Management: Built a digital meeting management system for government agencies to handle agendas, minutes, and automated summary reports.',
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
