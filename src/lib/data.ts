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
    demo: "https://your-portfolio.vercel.app"
  },
  {
    title: "Task Manager App",
    image: "/images/project-task-manager.svg",
    description:
      "A practical CRUD app for creating, editing, completing, and filtering tasks with a simple responsive interface.",
    stack: ["JavaScript", "Node.js", "Express"],
    github: "https://github.com/yourusername/task-manager",
    demo: "https://task-manager-demo.vercel.app"
  },
  {
    title: "Simple E-commerce UI",
    image: "/images/project-ecommerce.svg",
    description:
      "A front-end shopping layout with product cards, category filters, a cart summary, and mobile-friendly spacing.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/ecommerce-ui",
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
