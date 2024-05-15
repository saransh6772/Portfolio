"use client";

import React from "react";
import SectionHeading from "./sectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");
    return (
        <motion.section ref={ref} className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.175 }} id="about">
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                I am a final year undergraduate student at the <span className="font-medium">Indian Institute of Technology, Kharagpur</span>, majoring in <span className="font-medium">Biotechnology and Biochemical Engineering</span>.
                <br />With a strong passion for problem-solving and technology, I aspire to apply my detail-oriented mindset and technical skills throughout my career.
                <br />I love programming, and am keenly interest in <span className="font-medium">Data Structures and Algorithms</span>.
                <br />My core stack is <span className="font-medium">React, Next.js, Node.js, and MongoDB</span> and familiar with TypeScript & Prisma.
                <br />I am currently looking for a <span className="font-medium">full-time position</span> as a software developer.
            </p>
            <p>
                <span className="italic">When I'm not coding</span>, I enjoy watching <span className="font-medium">Anime, Movies and Series</span>.
                <br />I also love to watch sports like <span className="font-medium">Football and Cricket</span> and sometimes Tennis.
                <br />I am a huge fan of <span className="font-medium">Marvel & Star Wars</span> and my favourite sportsperson is <span className="font-medium">Lionel Messi</span>.
            </p>
        </motion.section>
    );
}