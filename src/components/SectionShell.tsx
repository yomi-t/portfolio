"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type SectionShellProps = {
    /** 見出しの上に出る英字ラベル */
    label: string;
    /** Mochiyで組む日本語見出し */
    title: string;
    icon: LucideIcon;
    /** 版面の最大幅。情報密度の高いセクションでは広げる */
    width?: "narrow" | "wide";
    children: React.ReactNode;
};

const headerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.1 },
    },
};

const headerItemVariants = {
    hidden: { opacity: 0, y: 16 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
};

export function SectionShell({
    label,
    title,
    icon: Icon,
    width = "narrow",
    children,
}: SectionShellProps) {
    return (
        <section className="relative px-6 py-20 sm:px-14 sm:py-28">
            <div
                className={`mx-auto ${width === "wide" ? "max-w-5xl" : "max-w-2xl"}`}
            >
                <motion.div
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.6 }}
                >
                    <motion.div
                        variants={headerItemVariants}
                        className="flex items-center gap-1.5 text-sm opacity-60"
                    >
                        <Icon size={16} strokeWidth={1.5} />
                        {label}
                    </motion.div>

                    <motion.h2
                        variants={headerItemVariants}
                        className="mt-3 font-mochiy text-[clamp(2rem,7vw,3.25rem)] leading-tight"
                    >
                        {title}
                    </motion.h2>

                    {/* 見出し下の罫線。左端の短い朱がセクションの始まりを示す */}
                    <motion.div
                        variants={headerItemVariants}
                        className="mt-6 flex items-center"
                    >
                        <span className="h-px w-10 bg-accent" />
                        <span className="h-px flex-1 bg-rule" />
                    </motion.div>
                </motion.div>

                <div className="mt-12">{children}</div>
            </div>
        </section>
    );
}
