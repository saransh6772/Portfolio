import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import DarthVader from "@/public/Darth_Vader.jpg";

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
        description: "My Ecommerce project has features like filtering, sorting, pagination, authentication and payment. Please have a look.",
        tags: ["React", "Node", "MongoDB", "Express", "Redux", "TypeScript"],
        projectUrl: "https://ecommerce-frontend-r19h6i23s-saranshs-projects.vercel.app/",
        imageUrl: DarthVader
    },
] as const;

export const experiencesData = [
    {
        title: "Web Development Intern",
        location: "Remote",
        description: "Worked as a web development intern for 2 months at Bridge Healthcare Pvt. Ltd.",
        icon: React.createElement(LuGraduationCap),
        date: "June 2022 - July 2022",
    },
    {
        title: "Software Development Intern",
        location: "Remote",
        description: "Worked as a software development intern for 2 months at CloudOptix Pvt. Ltd.",
        icon: React.createElement(CgWorkAlt),
        date: "May 2023 - July 2023",
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