export const personalInfo = {
  name: "Abdulmumuni Ajoge Adavize",
  title: "Full Stack Developer & Instructor",
  email: "abdulmumuniajoge@gmail.com",
  phone: "+2348068365268",
  location: "Abuja, Nigeria",
  bio: "Full-Stack Developer with 4+ years of experience building scalable web and mobile applications using React, Next.js, Spring Boot, and Flutter. I’ve trained over 300 students and delivered solutions that improved productivity by 30% and reduced manual processes by 70%.",
  about: {
    intro:
      "I began my software development journey in 2020 and have been passionate about building innovative, user-focused applications ever since. My experience spans frontend, backend, and mobile development - creating seamless, scalable solutions that solve real-world problems.",
    passion:
      "When I'm not coding, I enjoy mentoring students, exploring new frameworks, and contributing to projects that promote digital innovation and learning.",
    education:
      "Bachelor of Science in Chemistry - University of Abuja, Nigeria (2015)",
    availability: "Open to full-time, contract, and remote opportunities",
  },
  social: {
    github: "https://github.com/ajogious",
    linkedin: "https://www.linkedin.com/in/aajoge",
    twitter: "",
    portfolio: "",
  },
};

export const projects = [
  {
    id: 1,
    title: "A3GTEX - Store",
    description:
      "A full-stack e-commerce platform focused on all kinds products with tracking and analytics packaging options.",
    image: "/images/project-1.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "PayPal",
      "Paystack",
      "Flutterwave",
      "PostgreSQL",
      "Tailwind CSS",
      "Prisma",
      "Chart.js",
      "ShadCN",
    ],
    githubUrl: "https://github.com/ajogious/a3gtex-store.git",
    liveUrl: "https://a3gtex-store.vercel.app/",
    featured: true,
    year: null,
  },
  {
    id: 2,
    title: "Task Management System",
    description:
      "A secure task scheduling and collaboration platform built with React and Spring Boot. Features include real-time updates, JWT authentication, and user-friendly task workflows.",
    technologies: [
      "React (Vite)",
      "Bootstrap",
      "Spring Boot",
      "Spring Security (JWT)",
      "MySQL",
      "REST API",
    ],
    githubUrl: "https://github.com/ajogious",
    liveUrl: "",
    featured: true,
    year: null,
  },
  {
    id: 3,
    title: "Student Quiz Management System",
    description:
      "Web-based quiz management platform with role-based access, automated grading, and real-time result processing for teachers and students.",
    technologies: [
      "React (Vite)",
      "Spring Boot",
      "MySQL",
      "Bootstrap",
      "JWT Authentication",
    ],
    githubUrl: "https://github.com/ajogious",
    liveUrl: "",
    featured: false,
    year: null,
  },
  {
    id: 4,
    title: "Secured Profile Card App",
    description:
      "Cross-platform mobile app for secure offline profile management. Includes encrypted local storage, authentication, and an intuitive Flutter UI.",
    technologies: ["Flutter", "SQLite", "Dart"],
    githubUrl: "https://github.com/ajogious",
    liveUrl: "",
    featured: false,
    year: null,
  },
  {
    id: 5,
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
    githubUrl: "https://github.com/ajogious/my-portfolio.git",
    liveUrl: "http://ajogious.netlify.app/",
    featured: true,
    year: null,
  },
];

export const experiences = [
  {
    id: 1,
    company: "Aptech Computer Education",
    position: "React / Java / Flutter Instructor",
    period: "August 2023 – Present",
    location: "Abuja, Nigeria",
    description:
      "Delivering full-stack development training covering React, Spring Boot, and Flutter. Designing practical, real-world projects and guiding students through the software development lifecycle.",
    technologies: [
      "React",
      "Spring Boot",
      "Flutter",
      "MySQL",
      "PostgreSQL",
      "JWT",
    ],
    achievements: [
      "Mentored over 300 students in web and mobile development",
      "Developed hands-on curriculum blending theory with practical application",
      "Collaborated with academic teams to improve course delivery and outcomes",
      "Enhanced student completion rates and technical confidence",
    ],
  },
  {
    id: 2,
    company: "Kaduna ICT Center",
    position: "HTML / CSS / JavaScript Instructor",
    period: "March 2021 – July 2023",
    location: "Kaduna, Nigeria",
    description:
      "Taught core frontend technologies including HTML5, CSS3, JavaScript, Bootstrap, and jQuery. Helped students develop responsive websites and modern design practices.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
    achievements: [
      "Created structured, beginner-friendly course materials and projects",
      "Guided students in building fully responsive websites",
      "Promoted strong fundamentals in modern web development",
    ],
  },
  {
    id: 3,
    company: "Kaduna SUBEB",
    position: "Head of School / Teacher",
    period: "February 2018 – July 2023",
    location: "Kaduna, Nigeria",
    description:
      "Oversaw academic and administrative operations of a primary school while teaching core subjects. Improved performance and staff coordination through structured planning.",
    technologies: ["Microsoft Office Suite", "Educational Management Tools"],
    achievements: [
      "Improved student performance and teacher accountability",
      "Introduced ICT literacy and basic computer skills to pupils",
      "Enhanced school-community engagement through outreach programs",
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
        "jQuery",
        "Tailwind CSS",
        "Framer Motion",
        "ShadCN",
      ],
    },
    {
      category: "Backend",
      items: [
        "Java",
        "Spring",
        "Spring Boot",
        "FastAPI",
        "REST APIs",
        "JSP / Servlet",
        "Microserives",
      ],
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "Firebase", "Prisma"],
    },
    {
      category: "DevOps & Tools",
      items: ["Docker", "Vercel", "Railway", "Git", "CI/CD", "Jest", "Webpack"],
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
