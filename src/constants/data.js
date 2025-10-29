export const personalInfo = {
  name: "Alex Johnson",
  title: "Full Stack Developer & UI/UX Enthusiast",
  email: "alex.johnson@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  bio: "Passionate full-stack developer with 4+ years of experience creating digital solutions that make a difference. Specialized in React, Next.js, and modern web technologies.",
  about: {
    intro:
      "I started my programming journey in 2019 and have been passionate about creating amazing web experiences ever since. I love turning complex problems into simple, beautiful designs that users love.",
    passion:
      "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or hiking in the beautiful California mountains.",
    education: "Bachelor of Science in Computer Science - Stanford University",
    availability: "Open to new opportunities and freelance projects",
  },
  social: {
    github: "https://github.com/alexjohnson",
    linkedin: "https://linkedin.com/in/alexjohnson",
    twitter: "https://twitter.com/alexjohnson",
    portfolio: "https://alexjohnson.dev",
  },
};

export const projects = [
  {
    id: 1,
    title: "EcoCart - Sustainable E-Commerce",
    description:
      "A full-stack e-commerce platform focused on sustainable products with carbon footprint tracking and eco-friendly packaging options.",
    image: "/images/project-1.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "MongoDB",
      "Tailwind CSS",
      "Node.js",
    ],
    githubUrl: "https://github.com/alexjohnson/ecocart",
    liveUrl: "https://ecocart.example.com",
    featured: true,
    year: 2024,
  },
  {
    id: 2,
    title: "TaskFlow - Team Collaboration",
    description:
      "Real-time task management application with team collaboration features, file sharing, and progress tracking.",
    technologies: [
      "React",
      "Socket.io",
      "PostgreSQL",
      "Express",
      "Redis",
      "Docker",
    ],
    githubUrl: "https://github.com/alexjohnson/taskflow",
    liveUrl: "https://taskflow.example.com",
    featured: true,
    year: 2023,
  },
  {
    id: 3,
    title: "WeatherSense AI",
    description:
      "AI-powered weather prediction app with machine learning models for accurate forecasting and severe weather alerts.",
    technologies: [
      "Python",
      "TensorFlow",
      "FastAPI",
      "React",
      "Chart.js",
      "AWS",
    ],
    githubUrl: "https://github.com/alexjohnson/weathersense",
    liveUrl: "https://weathersense.example.com",
    featured: false,
    year: 2023,
  },
  {
    id: 4,
    title: "SocialPulse Analytics",
    description:
      "Comprehensive social media analytics dashboard with sentiment analysis and engagement tracking across multiple platforms.",
    technologies: ["Vue.js", "D3.js", "Node.js", "MySQL", "REST API", "OAuth"],
    githubUrl: "https://github.com/alexjohnson/socialpulse",
    liveUrl: "https://socialpulse.example.com",
    featured: true,
    year: 2022,
  },
  {
    id: 5,
    title: "FitTrack Mobile",
    description:
      "Cross-platform fitness tracking app with personalized workout plans, nutrition tracking, and social challenges.",
    technologies: [
      "React Native",
      "Firebase",
      "Redux",
      "Expo",
      "Google Fit API",
    ],
    githubUrl: "https://github.com/alexjohnson/fittrack",
    liveUrl: "https://fittrack.example.com",
    featured: false,
    year: 2022,
  },
  {
    id: 6,
    title: "Portfolio v3",
    description:
      "Current portfolio website built with modern technologies focusing on performance, accessibility, and smooth animations.",
    technologies: [
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
      "ShadCN UI",
      "Vercel",
    ],
    githubUrl: "https://github.com/alexjohnson/portfolio-v3",
    liveUrl: "https://alexjohnson.dev",
    featured: true,
    year: 2024,
  },
];

export const experiences = [
  {
    id: 1,
    company: "TechInnovate Inc.",
    position: "Senior Full Stack Developer",
    period: "2022 - Present",
    location: "San Francisco, CA (Remote)",
    description:
      "Lead development of multiple client projects using modern web technologies. Mentored junior developers and implemented best practices for code quality and performance.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "AWS",
      "MongoDB",
      "Docker",
    ],
    achievements: [
      "Led team of 6 developers on enterprise e-commerce platform",
      "Improved application performance by 45% through code optimization",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored 3 junior developers to senior level within 18 months",
    ],
  },
  {
    id: 2,
    company: "StartupGrid",
    position: "Full Stack Developer",
    period: "2020 - 2022",
    location: "Austin, TX",
    description:
      "Developed and maintained multiple SaaS products from concept to deployment. Worked closely with product team to deliver features that increased user engagement.",
    technologies: [
      "Vue.js",
      "Python",
      "PostgreSQL",
      "Docker",
      "Redis",
      "REST APIs",
    ],
    achievements: [
      "Built 3 successful SaaS products from ground up",
      "Increased user retention by 35% through feature improvements",
      "Reduced server costs by 40% through infrastructure optimization",
      "Implemented real-time features serving 10,000+ concurrent users",
    ],
  },
  {
    id: 3,
    company: "DigitalCraft Agency",
    position: "Frontend Developer",
    period: "2019 - 2020",
    location: "New York, NY",
    description:
      "Created responsive websites and web applications for various clients across different industries. Focused on delivering excellent user experiences and pixel-perfect designs.",
    technologies: [
      "React",
      "JavaScript",
      "CSS3",
      "WordPress",
      "jQuery",
      "GSAP",
    ],
    achievements: [
      "Delivered 15+ client projects on time and within budget",
      "Improved website performance scores by 30+ points on average",
      "Developed reusable component library used across 20+ projects",
      "Received 100% client satisfaction rating for all delivered work",
    ],
  },
];

export const skills = {
  technical: [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML/CSS",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Python",
        "Express",
        "FastAPI",
        "REST APIs",
        "GraphQL",
        "WebSockets",
      ],
    },
    {
      category: "Database",
      items: [
        "MongoDB",
        "PostgreSQL",
        "Redis",
        "Firebase",
        "Prisma",
        "Mongoose",
      ],
    },
    {
      category: "DevOps & Tools",
      items: ["Docker", "AWS", "Vercel", "Git", "CI/CD", "Jest", "Webpack"],
    },
  ],
  soft: [
    "Problem Solving",
    "Team Leadership",
    "Agile Methodology",
    "Project Management",
    "Client Communication",
    "Mentoring",
    "Technical Writing",
  ],
};
