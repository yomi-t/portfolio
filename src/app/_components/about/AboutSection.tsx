"use client";

import { motion } from "framer-motion";
import { BookOpen, Cake, GraduationCap, Mountain, Music2 } from "lucide-react";
import { ImagePlate } from "../../../components/ImagePlate";

const info = [
    { icon: GraduationCap, label: "明治大学 商学部 商学科 3年" },
    { icon: Cake, label: "2005年10月12日生まれ" },
];

const hobbies = [
    { icon: Music2, label: "Mr.Children" },
    { icon: Mountain, label: "スキー・スノボ" },
    { icon: BookOpen, label: "アニメ・漫画" },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.96 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring" as const, stiffness: 260, damping: 20 },
    },
};

export function AboutSection() {
    return (
        <section className="relative px-6 py-24 sm:px-14 sm:py-32">
            <motion.div
                className="mx-auto grid max-w-3xl grid-cols-[1fr_11rem] items-start gap-x-5 gap-y-6 [grid-template-areas:'name_photo'_'info_info'_'hobbies_hobbies'] sm:grid-cols-[1fr_10rem] sm:gap-x-10 sm:gap-y-0 sm:[grid-template-areas:'name_photo'_'info_photo'_'hobbies_photo'] lg:grid-cols-[1fr_12rem] lg:gap-x-14"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
            >
                <motion.h2
                    variants={itemVariants}
                    className="flex flex-wrap items-end self-center font-mochiy text-[clamp(2.5rem,8vw,4rem)] leading-tight sm:self-auto sm:mt-3"
                >
                    <span>
                        よみ
                    </span>
                    <span className="ml-2 text-base font-sans opacity-50 sm:text-lg">
                        （伊藤汰海）
                    </span>
                </motion.h2>

                <motion.div
                    variants={itemVariants}
                    className="w-full self-start [grid-area:photo] sm:mt-1"
                >
                    <ImagePlate src="/images/yomi.jpg" label="yomi" ratio="3 / 4" rotate={-3} />
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col gap-3 [grid-area:info] sm:mt-8 lg:flex-row"
                >
                    {info.map(({ icon: Icon, label }) => (
                        <div
                            key={label}
                            className="flex items-center gap-2.5 rounded-2xl border border-[color-mix(in_srgb,var(--foreground)_15%,transparent)] px-5 py-3 text-sm sm:text-base"
                        >
                            <Icon size={18} strokeWidth={1.5} className="shrink-0 opacity-60" />
                            {label}
                        </div>
                    ))}
                </motion.div>

                <motion.div variants={itemVariants} className="[grid-area:hobbies] sm:mt-12">
                    <p className="text-sm opacity-60">好きなもの</p>
                    <ul className="mt-4 flex flex-wrap gap-3">
                        {hobbies.map(({ icon: Icon, label }) => (
                            <li
                                key={label}
                                className="flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--foreground)_15%,transparent)] px-5 py-2.5 text-sm"
                            >
                                <Icon size={16} strokeWidth={1.5} className="opacity-70" />
                                {label}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </motion.div>
        </section>
    );
}
