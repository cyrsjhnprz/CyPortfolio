import {
  Code2,
  Database,
  FileCode2,
  Github,
  Instagram,
  Layers,
  Server,
  Terminal,
  Wrench
} from "lucide-react";

export const developer = {
  name: "Cy",
  name2: "Cy Perez",
  role: "Aspiring Full-Stack Developer",
  email: "cyrsjhnprz04@gmail.com",
  github: "https://github.com/cyrsjhnprz",
  instagram: "https://instagram.com/cwhycwy"
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" }
];

export const skills = [
  { name: "HTML", icon: FileCode2, description: "Semantic page structure" },
  { name: "CSS", icon: Layers, description: "Responsive layouts and styling" },
  { name: "JavaScript", icon: Code2, description: "Interactive web features" },
  { name: "TypeScript", icon: Code2, description: "Typed JavaScript basics" },
  { name: "Node.js", icon: Server, description: "Server-side JavaScript" },
  { name: "Express", icon: Terminal, description: "Simple API routes" },
  { name: "React", icon: Code2, description: "Component-based interfaces" },
  { name: "MySQL", icon: Database, description: "Relational databases" },
  { name: "Git", icon: Wrench, description: "Version control workflow" },
  { name: "GitHub", icon: Github, description: "Code hosting and projects" }
];

export const projects = [
  {
    title: "Employee Management System",
    image: "/images/Project1SS.jpg",
    description:
      "A full-stack web application for managing employee records, roles, and workplace data through a modern and responsive interface.",
    stack: ["React", "Express", "Tailwind CSS", "MySQL"],
    github: "https://github.com/cyrsjhnprz/Employee-Management-System",
    demo: "https://employee-management-system-ten-self.vercel.app"
  },
  {
    title: "Authentication System",
    image: "/images/project-authentication.svg",
    description:
      "A secure user authentication system with login, registration, and password reset functionality.",
    stack: ["React", "Node.js", "Express", "MySQL"],
    github: "https://github.com/yourusername/authentication-system",
    demo: "https://authentication-system-demo.vercel.app"
  },
  {
    title: "FU BEAR Quiz App",
    image: "/images/project-ecommerce.svg",
    description:
      "A front-end quiz application with multiple-choice questions, score tracking, and a clean user interface.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/CjaySilvano/TE-quiz-app.git",
    demo: "https://ecommerce-ui-demo.vercel.app"
  }
];

export const timeline = [
  {
    title: "Started Learning Programming",
    date: "2024",
    text: "Began with basic logic, problem solving, HTML, and CSS while learning how websites are structured."
  },
  {
    title: "Learned JavaScript",
    date: "2025",
    text: "Practiced DOM manipulation, events, arrays, functions, and small browser projects."
  },
  {
    title: "Built First Full-Stack App",
    date: "2025",
    text: "Connected a front end to a simple backend API and learned how data moves through an application."
  },
  {
    title: "Learning Backend Development",
    date: "Now",
    text: "Improving with Node.js, Express, MySQL, authentication basics, and cleaner project structure."
  }
];

export const socials = [
  { label: "GitHub", href: developer.github, icon: Github },
  { label: "Instagram", href: developer.instagram, icon: Instagram }
];
