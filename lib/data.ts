import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import Ecommerce from "@/public/Ecommerce.jpg";
import Opensoft from "@/public/Opensoft_2022.jpg";
import ProductDesign from "@/public/Product_Design_2023.jpg";
import QuizGame from "@/public/Quiz_Game.jpg";
import MarketSegmentation from "@/public/Market_Segmentation.jpg";

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
        projectUrl: "https://saransh-parikh-ecommerce.vercel.app/",
        imageUrl: Ecommerce
    },
    {
        title: "Quiz Game",
        description: "This is a complete Mobile responsive MERN stack based application using redux for state management and open trivia DB for fetching questions.",
        tags: ["Redux", "React", "Node", "Express", "MongoDB"],
        projectUrl: "https://frosty-tereshkova-506a62.netlify.app/",
        imageUrl: QuizGame
    },
    {
        title: "Electric Vehicle Market Segmentation",
        description: "Analysed geographic, demographic and psychographic factors of 100 automobile owners and data from 28 states and 8 UTs. Deployed K-Means Clustering model and tested out different values of K using Elbow-plot method to predict appropriately",
        tags: [],
        projectUrl: "https://github.com/saransh6772/Market-segmentation",
        imageUrl: MarketSegmentation
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
        description: "Design a hardware product to ensure that the rider wears the helmet all the time and does not ride under the influence of alcohol via restricting the use in these circumstances. Led the team to win the Gold Medal.",
        tags: [],
        projectUrl: "https://docs.google.com/document/d/1fNaDZOdzVQoS9Q68Q_Lxu21W2-upQPD9ZcLTdgg47xg/edit?usp=sharing",
        imageUrl: ProductDesign
    },
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