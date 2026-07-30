"use client";

import { motion } from "framer-motion";

type ActivityBriefProps = {
    index: number;
    title: string;
    subtitle?: string;
    /** 箇条書きにする細目 */
    items?: string[];
};

const briefVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
};

/** 情報量の少ない活動を、透かし数字なしの小さな面で並べるための器 */
export function ActivityBrief({
    index,
    title,
    subtitle,
    items,
}: ActivityBriefProps) {
    return (
        <motion.article
            variants={briefVariants}
            className="border-t border-rule pt-5"
        >
            <span className="font-mono text-[0.625rem] tracking-[0.2em] opacity-40">
                {String(index).padStart(2, "0")}
            </span>
            <h3 className="mt-2 font-mochiy text-base leading-snug">{title}</h3>
            {subtitle ? (
                <p className="mt-1.5 font-mono text-xs opacity-55">{subtitle}</p>
            ) : null}
            {items ? (
                <ul className="mt-3 space-y-1.5">
                    {items.map((item) => (
                        <li
                            key={item}
                            className="flex gap-2 text-sm leading-relaxed opacity-80"
                        >
                            <span aria-hidden="true" className="text-accent">
                                —
                            </span>
                            {item}
                        </li>
                    ))}
                </ul>
            ) : null}
        </motion.article>
    );
}
