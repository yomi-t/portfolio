"use client";

import { motion } from "framer-motion";

type SkillPlateProps = {
    index: number;
    name: string;
    /** Adobe のようにツールが分かれるものだけ渡す */
    tools?: string[];
};

const plateVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
};

export function SkillPlate({ index, name, tools }: SkillPlateProps) {
    return (
        <motion.li
            variants={plateVariants}
            className="group border-t border-rule py-6 sm:py-8"
        >
            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-3 sm:flex-nowrap sm:justify-between">
                <div className="flex items-baseline gap-4 sm:gap-8">
                    <span className="font-mono text-[0.625rem] tracking-[0.2em] opacity-40">
                        {String(index).padStart(2, "0")}
                    </span>
                    {/* ホバーで朱の下線が左から伸びる */}
                    <h3 className="relative font-mochiy text-[clamp(1.75rem,6vw,2.75rem)] leading-none after:absolute after:inset-x-0 after:-bottom-2 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-500 after:ease-out group-hover:after:scale-x-100">
                        {name}
                    </h3>
                </div>

                {tools ? (
                    <p className="font-mono text-xs leading-relaxed opacity-65 max-sm:pl-10 sm:text-right">
                        {tools.join(" / ")}
                    </p>
                ) : null}
            </div>
        </motion.li>
    );
}
