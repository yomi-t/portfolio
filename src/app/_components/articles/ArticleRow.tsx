"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const rowVariants = {
    hidden: { opacity: 0, y: 18 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
};

type ArticleRowProps = {
    /** 媒体名 */
    outlet: string;
    /** 媒体の種別など、媒体名の上に出す小さなラベル */
    kind: string;
    href: string;
    /** 表示用のURL（プロトコルを省いたもの） */
    display: string;
};

export function ArticleRow({ outlet, kind, href, display }: ArticleRowProps) {
    return (
        <motion.li variants={rowVariants} className="group border-b border-rule">
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-between gap-5 overflow-hidden py-6"
            >
                {/* ホバーで朱の薄い面が左から流れ込む */}
                <span
                    aria-hidden="true"
                    className="absolute inset-0 origin-left scale-x-0 bg-[color-mix(in_srgb,var(--accent)_7%,transparent)] transition-transform duration-500 ease-out group-hover:scale-x-100"
                />

                <div className="relative min-w-0">
                    <p className="font-mono text-[0.625rem] tracking-[0.2em] uppercase opacity-40">
                        {kind}
                    </p>
                    <p className="mt-1.5 font-mochiy text-lg leading-snug sm:text-xl">
                        {outlet}
                    </p>
                    <p className="mt-1 truncate font-mono text-xs opacity-55">
                        {display}
                    </p>
                </div>

                <ArrowUpRight
                    aria-hidden="true"
                    size={22}
                    strokeWidth={1.5}
                    className="relative shrink-0 opacity-40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent group-hover:opacity-100"
                />
            </a>
        </motion.li>
    );
}
