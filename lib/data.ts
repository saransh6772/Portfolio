import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import Ecommerce from "@/public/Ecommerce.jpg";
import Opensoft from "@/public/Opensoft_2022.jpg";
import ProductDesign from "@/public/Product_Design_2023.jpg";

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
        description: "My Ecommerce project has features like filtering, sorting, pagination, authentication and payment. It has an admin dashboard for analytics and management.",
        tags: ["React", "Node", "MongoDB", "Express", "Redux", "TypeScript"],
        projectUrl: "https://ecommerce-frontend-r19h6i23s-saranshs-projects.vercel.app/",
        imageUrl: Ecommerce
    },
    {
        title: "Opensoft GC 2022, IIT Kharagpur",
        description: "Create a food delivery application to ensure the availability of essential services during the downtime of data centre. Top 5",
        tags: ["Django", "React", "Grafana", "Kubernetes", "Docker"],
        projectUrl: "https://github.com/rkhall-iitkgp/restaurant-app-frontend",
        imageUrl: Opensoft
    },
    {
        title: "Product Design GC 2023, IIT Kharagpur",
        description: "Design a hardware product to ensure that the rider wears the helmet all the time and does not ride under the influence of alcohol via restricting the use in these circumstances. Gold",
        tags: [],
        projectUrl: "https://drive.google.com/file/d/1nr8PAh3EPaDKv98-92FEQfS-VxSuWMMx/view?usp=sharing",
        imageUrl: ProductDesign
    }
] as const;

export const experiencesData = [
    {
        title: "Web Development Intern",
        location: "Remote",
        description: "Worked as a web development intern for 2 months at Bridge Healthcare Pvt. Ltd.",
        icon: React.createElement(CgWorkAlt),
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