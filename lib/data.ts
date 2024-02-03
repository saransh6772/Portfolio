import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const projectsData = [
    {
        title: "Ecommerce",
        description:
            "This is my Ecommerce project. It has features like filtering, sorting, pagination, authentication and payment. Please have a look. Stripe requires additional configuration and since it is just a project, I didn't configure it.",
        tags: ["React", "Node", "MongoDB", "Express", "Redux"],
        
    },
    {
        title: "Portfolio",
        description:
            "This is my portfolio project. It has features like smooth scrolling, responsive design, animations and dark mode. I used Framer Motion for animations and Tailwind for styling.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        
    },
] as const;

export const skillsData = [
    "C++",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "Express",
    "Python",
    "Django",
    "Framer Motion",
    "InfluxDB",
    "Docker",
    "Telegraf",
] as const;