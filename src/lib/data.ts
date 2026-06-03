import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiGit,
  SiGithub,
  SiC,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live?: string;
  category: "frontend" | "fullstack";
}

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
  category: "frontend" | "backend" | "tools" | "language";
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  icon: string;
  keySubjects: string[];
  highlights: string[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  type: "Internship" | "Extracurricular";
  duration: string;
  responsibilities: string[];
}

export const personalInfo = {
  name: "S. Mohammed Aakif",
  role: "Full Stack Developer",
  subtitle: "BCA Student | Problem Solver",
  description:
    "BCA student specializing in Full Stack Development with expertise in Java, SQL, and modern web technologies. I build scalable applications with clean architecture and exceptional user experiences.",
  email: "syedmdaakif007@gmail.com",
  location: "India",
  resumeUrl: "/Mohammed_Aakif_Resume (3).pdf",
  profileImage: "/profile.jpeg",
  social: {
    github: "https://github.com/Aakif009-new",
    linkedin: "https://www.linkedin.com/in/syed-mohammed-aakif",
    email: "mailto:syedmdaakif007@gmail.com",
  },
};

export const skills: Skill[] = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26", category: "frontend" },
  { name: "CSS", icon: SiCss, color: "#1572B6", category: "frontend" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "language" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "language" },
  { name: "React", icon: SiReact, color: "#61DAFB", category: "frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#6366f1", category: "frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "frontend" },
  { name: "Java", icon: FaJava, color: "#ED8B00", category: "language" },
  { name: "C", icon: SiC, color: "#A8B9CC", category: "language" },
  { name: "SQL", icon: SiMysql, color: "#4479A1", category: "backend" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "backend" },
  { name: "Git", icon: SiGit, color: "#F05032", category: "tools" },
  { name: "GitHub", icon: SiGithub, color: "#181717", category: "tools" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Pill Reminder",
    description:
      "A smart medication reminder application that helps users track and manage their medication schedules with timely notifications and dosage tracking.",
    image: "/projects/pill-remainder.png",
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Aakif009-new/pill-Reminder",
    live: "https://github.com/Aakif009-new/pill-Reminder",
    category: "fullstack",
  },
  {
    id: 2,
    title: "Habit Tracker",
    description:
      "A comprehensive habit tracking application that helps users build and maintain positive habits with visual progress tracking and streak management.",
    image: "/projects/habit-tracker.png",
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Aakif009-new/habit-tracker",
    live: "https://github.com/Aakif009-new/habit-tracker",
    category: "fullstack",
  },
  {
    id: 3,
    title: "Grocery Store Website",
    description:
      "A full-featured grocery store e-commerce website with product catalog, cart management, and a seamless shopping experience.",
    image: "/projects/grocery-store.png",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Aakif009-new/grocery-store",
    category: "frontend",
  },
];

export const educationList: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Vellore Institute of Technology (VIT), Vellore",
    period: "2024 – 2027",
    icon: "🎓",
    keySubjects: [
      "Data Structures & Algorithms",
      "DBMS",
      "Object-Oriented Programming",
      "Operating Systems",
      "Web Development",
      "SQL & Database Management",
      "Software Engineering",
    ],
    highlights: [
      "**Currently pursuing BCA at VIT**",
      "**Focused on Full Stack Development and Software Engineering**",
      "**Building real-world web applications and projects**",
      "**Actively learning modern development technologies**",
    ],
  },
  {
    id: 2,
    degree: "Higher Secondary Education (12th Grade)",
    institution: "Islamiah Boys Higher Secondary School (IBHSS), Vaniyambadi",
    period: "2023 – 2024",
    icon: "📖",
    keySubjects: [],
    highlights: [
      "**Developed strong logical and analytical thinking**",
      "**Built interest in programming and technology**",
      "**Participated in academic and extracurricular activities**",
    ],
  },
  {
    id: 3,
    degree: "Secondary School (10th Grade)",
    institution: "Islamiah Boys Higher Secondary School (IBHSS), Vaniyambadi",
    period: "2021 – 2022",
    icon: "📚",
    keySubjects: [],
    highlights: [
      "**Built a strong academic foundation**",
      "**Developed problem-solving skills**",
      "**Strengthened mathematics and computer fundamentals**",
    ],
  },
];

export const experienceList: Experience[] = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "SuperCX",
    type: "Internship",
    duration: "May 2026 – Present",
    responsibilities: [
      "**Developing modern web applications**",
      "**Working on frontend and backend features**",
      "**Collaborating on real-world business solutions**",
      "**Improving application performance and user experience**",
    ],
  },
  {
    id: 2,
    role: "Volunteer Member",
    company: "Red Cross Club",
    type: "Extracurricular",
    duration: "May 2025 – Present",
    responsibilities: [
      "**Participating in community service activities**",
      "**Supporting awareness and social impact initiatives**",
      "**Working in teams during events and campaigns**",
      "**Developing leadership and communication skills**",
    ],
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const stats = [
  { label: "Projects Built", value: "3+" },
  { label: "Technologies", value: "13+" },
  { label: "GitHub Repos", value: "10+" },
  { label: "Problem Solving", value: "Active" },
];
