import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  java,
  reactjs,
  ubuntu,
  tailwind,
  postgresql,
  otu,
  rhhs,
  wonderland,
  mackenziehealth,
  privcurity,
  staples,
  google,
  whmis,
  aws,
  python,
  cplusplus,
  typescript,
  powershell,
  cisco,
  connectwise,
  virtualbox,
  kalilinux,
  wireshark,
  nmap,
  johntheripper,
  photoshop,
  premiere,
  cinema4d,
  markone_ai,
  lablink,
  documentos,
  iot_home,
  portfolio_3d,
  github,
  mongodb,
  microsoft,
  ibm,
  allen_events,
  oracle,
  infosys,
  guvi,
  freecodecamp,
  hp,
  sebi,
  skillindia,
  udemy,
  scaler,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "extracurricular",
    title: "Certifications",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: fullstack,
  },
  {
    title: "Systems Infrastructure",
    icon: backend,
  },
  {
    title: "Cloud Automation",
    icon: mobile,
  },
  {
    title: "Workflows",
    icon: web,
  },
];

const education = [
  {
    title: "Diploma in Computer Science & Engineering (DCSE)",
    company_name: "Government Polytechnic College, Madurai, Tamil Nadu",
    icon: otu,
    iconBg: "#fff",
    date: "June 2024 - May 2026 (Pursuing)",
    points: [
      "CGPA: 9.75/10 (97.5%)",
      "Courses: Data Structures, OOP, Web Development, Cloud Computing, AI/ML",
    ],
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    company_name: "Setupati Higher Secondary School, Madurai, Tamil Nadu",
    icon: rhhs,
    iconBg: "#fff",
    date: "May 2021",
    points: [
      "Science Stream",
      "Percentage: 81.3%",
    ],
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const itTools = [
  {
    name: "Powershell",
    icon: powershell,
  },
  {
    name: "Ubuntu",
    icon: ubuntu,
  },
  {
    name: "VirtualBox",
    icon: virtualbox,
  },
];

const cybersecurityTools = [
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "Wireshark",
    icon: wireshark,
  },
  {
    name: "Nmap",
    icon: nmap,
  },
];

const designTools = [
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Premiere",
    icon: premiere,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Allen Events, Madurai, Tamil Nadu",
    icon: allen_events,
    iconBg: "#1e1e3f",
    date: "2025",
    points: [
      "Designed and developed a comprehensive event management platform to streamline client operations.",
      "Implemented secure user authentication, complex event scheduling, and registration handling systems.",
      "Delivered a complete solution with advanced data reporting and analytics features.",
    ],
  },
];


const extracurricular = [
  {
    title: "OCI AI Foundations Associate",
    type: "Professional Certification",
    issuer: "Oracle",
    icon: oracle,
    iconBg: "#C74634",
    date: "Aug 2025",
    points: [
      "Oracle Cloud Infrastructure, AI/ML Fundamentals, Cloud Services, AI Models",
    ],
    credential: "/certificates/Oracle/Oracel AI foundation.pdf",
  },
  {
    title: "Front End Web Developer",
    type: "Professional Certification",
    issuer: "Infosys",
    icon: infosys,
    iconBg: "#007CC3",
    date: "Nov 2025",
    points: [
      "HTML5, CSS3, JavaScript, React, Responsive Design, Web Development",
    ],
    credential: "/certificates/Infosys/infosys frontend developer.pdf",
  },
  {
    title: "JavaScript Fundamentals",
    type: "Course Certification",
    issuer: "Infosys",
    icon: infosys,
    iconBg: "#F7DF1E",
    date: "Nov 2025",
    points: [
      "JavaScript Fundamentals, ES6+, DOM Manipulation, Async Programming",
    ],
    credential: "/certificates/Infosys/infosys javascript.pdf",
  },
  {
    title: "HTML5 - The Language",
    type: "Course Certification",
    issuer: "Infosys",
    icon: infosys,
    iconBg: "#E34F26",
    date: "Nov 2025",
    points: [
      "HTML5 Semantic Elements, Forms, APIs, Accessibility",
    ],
    credential: "/certificates/Infosys/infosys html.pdf",
  },
  {
    title: "Google Analytics Certification",
    type: "Professional Certification",
    issuer: "Google",
    icon: google,
    iconBg: "#4285F4",
    date: "Nov 2024",
    points: [
      "Google Analytics 4, Data Analysis, Reporting, Digital Marketing Analytics",
    ],
    credential: "/certificates/Google/Google Analytics Certification.pdf",
  },
  {
    title: "SAWIT.AI Learnathon Program",
    type: "Achievement Certificate",
    issuer: "GUVI",
    icon: guvi,
    iconBg: "#4285F4",
    date: "Oct 2024",
    points: [
      "Generative AI Fundamentals, AI Applications, GUVI Geek Networks, IITM Research Park",
    ],
    credential: "/certificates/GUVI/GuviCertification - vzH73554x8913R0ir2.png",
  },
  {
    title: "Python Programming",
    type: "Course Certification",
    issuer: "GUVI",
    icon: guvi,
    iconBg: "#3776AB",
    date: "Oct 2024",
    points: [
      "Python Basics, Data Structures, File Handling, OOP Concepts",
    ],
    credential: "/certificates/GUVI/python.png",
  },
  {
    title: "Scientific Computing with Python",
    type: "Professional Certification",
    issuer: "freeCodeCamp",
    icon: freecodecamp,
    iconBg: "#0A0A23",
    date: "June 2025",
    points: [
      "Python Programming, Data Structures, Algorithms, Scientific Computing",
    ],
    credential: "https://freecodecamp.org/certification/santhakumar/scientific-computing-with-python-v7",
  },
  {
    title: "Cloud Technology Foundations",
    type: "Professional Certification",
    issuer: "Infosys",
    icon: infosys,
    iconBg: "#00A4E4",
    date: "Oct 2024",
    points: [
      "Cloud Computing Basics, Service Models, Deployment Models, Infosys Springboard",
    ],
    credential: "/certificates/Infosys/infosys cloud technology.pdf",
  },
  {
    title: "Google Web Designer Certificate",
    type: "Course Certification",
    issuer: "Google",
    icon: google,
    iconBg: "#34A853",
    date: "2024",
    points: ["Web design concepts, UI tools, and visual layout skills"],
    credential: "/certificates/Google/Google Web Designe.pdf",
  },
  {
    title: "GenAI Completion Certificate",
    type: "Completion Certificate",
    issuer: "Google",
    icon: google,
    iconBg: "#EA4335",
    date: "2024",
    points: ["Generative AI basics and practical prompt workflows"],
    credential: "/certificates/Google/genai-completion2.png",
  },
  {
    title: "Google Program Completion",
    type: "Participation Certificate",
    issuer: "Google",
    icon: google,
    iconBg: "#4285F4",
    date: "2024",
    points: ["Program completion milestone and learning progress"],
    credential: "/certificates/Google/3c7402b5-ce04-488b-9b7d-e7a2de417e16.png",
  },
  {
    title: "GUVI AI Program Certificate",
    type: "Course Certification",
    issuer: "GUVI",
    icon: guvi,
    iconBg: "#00A67E",
    date: "2024",
    points: ["AI concepts, fundamentals, and practical learning"],
    credential: "/certificates/GUVI/GuviCertification -  ai.pdf",
  },
  {
    title: "Data Science & Analytics",
    type: "Professional Certification",
    issuer: "HP",
    icon: hp,
    iconBg: "#0096D6",
    date: "2024",
    points: ["Data analytics foundations, insights, and business reporting"],
    credential: "/certificates/HP/hp Data Science & Analytics.pdf",
  },
  {
    title: "Employability Skills - Polytechnics",
    type: "Professional Certification",
    issuer: "IBM",
    icon: ibm,
    iconBg: "#0F62FE",
    date: "2024",
    points: ["Communication, workplace readiness, and career skills"],
    credential: "/certificates/IBM/Employability Skills-Polytechnics-July 2024 IBM.pdf",
  },
  {
    title: "Job Application Essentials",
    type: "Career Certification",
    issuer: "IBM",
    icon: ibm,
    iconBg: "#0F62FE",
    date: "2024",
    points: ["Resume building, interview readiness, and job application strategy"],
    credential: "/certificates/IBM/Job_Application_Essentials.png",
  },
  {
    title: "Working in a Digital World",
    type: "Professional Skills Certificate",
    issuer: "IBM",
    icon: ibm,
    iconBg: "#0F62FE",
    date: "2024",
    points: ["Digital workplace practices and productivity skills"],
    credential: "/certificates/IBM/working-in-a-digital-world-professional-skills.png",
  },
  {
    title: "SEBI Investor Awareness",
    type: "Awareness Certification",
    issuer: "SEBI",
    icon: sebi,
    iconBg: "#2C5282",
    date: "2024",
    points: ["Financial literacy and investor awareness fundamentals"],
    credential: "/certificates/SEBI/sebi investor.pdf",
  },
  {
    title: "Skill India Participation",
    type: "Participation Certificate",
    issuer: "Skill India",
    icon: skillindia,
    iconBg: "#FF9933",
    date: "2024",
    points: ["National skill development program participation"],
    credential: "/certificates/Skill_India/skill india participate.pdf",
  },
  {
    title: "Udemy CSS Course",
    type: "Course Certification",
    issuer: "Udemy",
    icon: udemy,
    iconBg: "#A435F0",
    date: "2024",
    points: ["CSS styling, layout systems, and responsive design"],
    credential: "/certificates/Udemy/udemy css.pdf",
  },
  {
    title: "Udemy Completion Certificate",
    type: "Course Certification",
    issuer: "Udemy",
    icon: udemy,
    iconBg: "#A435F0",
    date: "2024",
    points: ["Course completion and continued self-learning"],
    credential: "/certificates/Udemy/133694859.jpg",
  },
  {
    title: "Shorthand Tamil",
    type: "Language Skill Certificate",
    issuer: "Others",
    icon: microsoft,
    iconBg: "#6B7280",
    date: "2024",
    points: ["Language skill development and shorthand proficiency"],
    credential: "/certificates/Others/shorthand tamil.pdf",
  },
  {
    title: "Scaler Program Certificate",
    type: "Program Certificate",
    issuer: "Scaler",
    icon: scaler,
    iconBg: "#5B6EF5",
    date: "2024",
    points: ["Technical upskilling through structured learning modules"],
    credential: "/certificates/Scaler/IMG_1730810747060.jpg",
  },
];
;

const projects = [
  {
    name: "MarkOne AI 🤖",
    description:
      "An advanced generative AI chatbot with multi-language support and enterprise-grade features. Integrated WhatsApp, Email, Telegram, and Google Drive automation for seamless workflow management. Built with Python, Generative AI APIs, NLP, and Document Processing Libraries.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Generative AI",
        color: "green-text-gradient",
      },
      {
        name: "NLP",
        color: "pink-text-gradient",
      },
      {
        name: "WhatsApp API",
        color: "blue-text-gradient",
      },
    ],
    image: markone_ai,
    source_code_link: "https://github.com/SanthaKumar-K-2004",
    live_project_link: "https://github.com/SanthaKumar-K-2004",
  },
  {
    name: "LabLink 🔬",
    description:
      "A comprehensive digital laboratory inventory system featuring real-time tracking and analytics. Deployed on Vercel with role-based access control (RBAC) and production-grade scalability. Built with React, Node.js, MongoDB, RESTful APIs, and Cloud Deployment.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Vercel",
        color: "blue-text-gradient",
      },
    ],
    image: lablink,
    source_code_link: "https://github.com/SanthaKumar-K-2004",
    live_project_link: "https://github.com/SanthaKumar-K-2004",
  },
  {
    name: "DocumentOS 📄",
    description:
      "A robust document processing platform replicating MS Office functionality with AI capabilities. Implemented universal file conversion for all major formats (PDF, DOCX, XLSX, PPT, images). Built with React, Python, Cloud APIs, Document Processing, and Image Processing.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Cloud APIs",
        color: "pink-text-gradient",
      },
      {
        name: "Document AI",
        color: "blue-text-gradient",
      },
    ],
    image: documentos,
    source_code_link: "https://github.com/SanthaKumar-K-2004",
    live_project_link: "https://github.com/SanthaKumar-K-2004",
  },
  {
    name: "IoT Smart Home 🏠",
    description:
      "An IoT-based smart home automation system using ESP32 and MQTT protocol. Features real-time sensor monitoring, automated device control, and mobile app integration for remote access.",
    tags: [
      {
        name: "ESP32",
        color: "blue-text-gradient",
      },
      {
        name: "MQTT",
        color: "green-text-gradient",
      },
      {
        name: "IoT",
        color: "pink-text-gradient",
      },
      {
        name: "Embedded C",
        color: "blue-text-gradient",
      },
    ],
    image: iot_home,
    source_code_link: "https://github.com/SanthaKumar-K-2004",
    live_project_link: "https://github.com/SanthaKumar-K-2004",
  },
  {
    name: "Portfolio Website 🌐",
    description:
      "A modern 3D portfolio website built with React, Three.js, and Tailwind CSS. Features interactive 3D elements, smooth animations with Framer Motion, and responsive design.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio_3d,
    source_code_link: "https://github.com/SanthaKumar-K-2004",
    live_project_link: "https://github.com/SanthaKumar-K-2004",
  },
];

const testimonials = [
  {
    testimonial:
      "Santhakumar is an exceptional student with a strong grasp of programming concepts and practical implementation. His dedication to learning new technologies like AI and IoT is commendable. He consistently demonstrates excellent problem-solving skills and the ability to apply theoretical knowledge to real-world projects. His projects showcase creativity and technical proficiency beyond his academic level.",
    name: "Dr. R. Kumar",
    designation: "Head of Department - Computer Science",
    company: "Government Polytechnic College, Madurai",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "Working with Santhakumar on our event management platform was a great experience. His technical skills in full-stack development, combined with his ability to understand client requirements, resulted in a robust and user-friendly solution. He delivered the project on time with all the requested features including secure authentication and analytics dashboard.",
    name: "Allen Events Team",
    designation: "Project Manager",
    company: "Allen Events, Madurai",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    testimonial:
      "Santhakumar's passion for technology and continuous learning is truly inspiring. His ability to quickly grasp complex concepts in AI, cloud computing, and IoT, and then implement them in practical projects shows his commitment to excellence. He is always eager to take on new challenges and delivers quality work consistently.",
    name: "Prof. S. Venkatesh",
    designation: "Mentor",
    company: "GUVI Geek Networks",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

export {
  services,
  technologies,
  itTools,
  cybersecurityTools,
  designTools,
  experiences,
  extracurricular,
  projects,
  education,
  testimonials
};
