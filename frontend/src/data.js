// Fallback data so the site still renders even if the backend isn't running.
// The live version fetches this same shape from the Spring Boot API — see api.js.

export const fallbackProfile = {
  name: 'Satmanyu Kumar',
  title: 'Java Full Stack Developer',
  email: 'satmanyukumar123@gmail.com',
  phone: '960*******',
  location: 'Uttar Pradesh, India',
  github: 'https://github.com/',
  linkedin: 'https://linkedin.com/',
  skills: {
    Languages: ['Advance Java', 'Core Java', 'Python (Basic)', 'HTML, CSS, JavaScript', 'Data Structures & Algorithms (Java)', 'SQL'],
    Tools: ['Spring Tool Suite (STS)', 'IntelliJ IDEA', 'Eclipse', 'Visual Studio Code', 'Arduino IDE'],
    Database: ['MySQL', 'PostgreSQL'],
  },
  education: [
    { degree: 'B.Tech CSE (IoT)', school: 'Noida Institute of Engineering and Technology', period: 'Aug 2022 - Aug 2025', detail: 'CGPA: 7.24' },
    { degree: 'Diploma (Civil)', school: 'Government Polytechnic Raghopur, Supaul', period: '2022', detail: 'CGPA: 8' },
    { degree: 'Class 10', school: 'GOVT+2 High School Birpur, Supaul', period: '2019', detail: 'Percentage: 83%' },
  ],
  certifications: [
    'INCAPP Certification: Core Java',
    'INCAPP Certification: Data Structures and Algorithms (Java)',
    'INCAPP Certification: Advanced Java with Spring Boot',
  ],
};

export const fallbackProjects = [
  {
    title: 'Text-Based Neural Knowledge Management System',
    description: 'A document intelligence app that lets users upload PDFs and ask questions about their content, answered by an integrated AI model.',
    highlights: [
      'User registration, authentication & authorization with JWT and Spring Security',
      'PDF upload with text extraction via Apache Tika',
      'AI-powered Q&A over uploaded document content using Spring AI',
      'Document ownership validation and PDF preview',
      'Layered architecture: Controller, Service, Repository',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'Thymeleaf', 'MySQL', 'Apache Tika', 'Spring AI'],
    link: 'https://neuralknowledgeapp-production.up.railway.app/',
  },
  {
    title: 'Real-Time Chat Room Application',
    description: 'A real-time chat room enabling seamless, bi-directional communication between users.',
    highlights: [
      'Bi-directional messaging with WebSocket',
      'Built on Spring Boot for the messaging backend',
    ],
    tech: ['Java', 'Spring Boot', 'WebSocket'],
    link: '#',
  },
];
