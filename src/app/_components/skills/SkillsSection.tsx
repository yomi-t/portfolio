"use client";

import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
import { MarqueeBand } from "./MarqueeBand";
import { SectionShell } from "../../../components/SectionShell";
import { SkillPlate } from "./SkillPlate";

const skills = [
    { name: "Swift", tools: ["SwiftUI", "UIKit"] },
    { name: "Next.js" },
    { name: "Adobe", tools: ["Illustrator", "Premiere Pro", "After Effects"] },
];

const keywords = [
    "Swift",
    "SwiftUI",
    "UIKit",
    "VIPER",
    "Redux",
    "Next.js",
    "Illustrator",
    "Premiere Pro",
    "After Effects",
];

const listVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.14 },
    },
};

export function SkillsSection() {
    return (
        <SectionShell label="skills" title="スキル" icon={Wrench}>
            <motion.ul
                variants={listVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="border-b border-rule"
            >
                {skills.map(({ name, tools }, index) => (
                    <SkillPlate
                        key={name}
                        index={index + 1}
                        name={name}
                        tools={tools}
                    />
                ))}
            </motion.ul>

            <div className="mt-16">
                <MarqueeBand items={keywords} />
            </div>
        </SectionShell>
    );
}
