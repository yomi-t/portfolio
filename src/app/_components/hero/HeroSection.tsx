"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { HeroBackground } from "./HeroBackground";
import { FrameCorners } from "./FrameCorners";

const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
};

export function HeroSection() {
    return (
        <section className="relative h-screen w-screen overflow-hidden">
            <HeroBackground />
            <FrameCorners />

            <motion.div
                className="relative z-10 h-full w-full"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >

                <div className="absolute bottom-16 left-6 sm:bottom-20 sm:left-14 font-mochiy">
                    <motion.h1
                        variants={itemVariants}
                        className="leading-none text-[clamp(4rem,20vw,9rem)]"
                    >
                        よみ
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="mt-2 sm:mt-4 text-right text-sm sm:text-base tracking-[0.4em] uppercase opacity-70"
                    >
                        yomi
                    </motion.p>
                </div>

                <motion.div
                    variants={itemVariants}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-10"
                >
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown
                            className="opacity-40"
                            size={28}
                            color="var(--foreground)"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
