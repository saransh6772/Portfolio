import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
        name: "Education",
        hash: "#education",
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

export const educationData = [
    {
        title: "Indian Institute of Technology, Kharagpur",
        location: "Kharagpur, India",
        description:
            "I am a final year undergraduate student at IIT Kharagpur. I am pursuing a B.Tech + M.Tech (Dual Degree) in Biotechnology and Biochemical Engineering. I have a CGPA of 8.16/10.",
        icon: React.createElement(LuGraduationCap),
        date: "2019-2024",
    },
] as const;

export const projectsData = [
    {
        title: "Ecommerce",
        description:
            "This is my Ecommerce project. It has features like filtering, sorting, pagination, authentication and payment. Please have a look. Stripe requires additional configuration and since it is just a project, I didn't configure it.",
        tags: ["React", "Node", "MongoDB", "Express", "Redux"],
        imageUrl: corpcommentImg,
    },
    {
        title: "Portfolio",
        description:
            "This is my portfolio project. It has features like smooth scrolling, responsive design, animations and dark mode. I used Framer Motion for animations and Tailwind for styling.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: rmtdevImg,
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