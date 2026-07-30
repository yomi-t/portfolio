"use client";

import { motion } from "framer-motion";

type TimelineEntryProps = {
    date: string;
    title: string;
    detail?: string;
    stack?: string[];
    isLast?: boolean;
};

const entryVariants = {
    hidden: { opacity: 0, x: -12 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
};

export function TimelineEntry({
    date,
    title,
    detail,
    stack,
    isLast = false,
}: TimelineEntryProps) {
    return (
        <motion.li
            variants={entryVariants}
            className="grid grid-cols-[4.75rem_1fr] sm:grid-cols-[7rem_1fr]"
        >
            <p className="pr-3 font-mono text-xs leading-6 tracking-[0.08em] whitespace-nowrap opacity-55 sm:pr-6 sm:text-sm">
                {date}
            </p>

            <div
                className={`relative border-l border-rule pl-6 sm:pl-8 ${
                    isLast ? "pb-0" : "pb-10 sm:pb-12"
                }`}
            >
                <span
                    aria-hidden="true"
                    className="absolute top-1.5 left-[-4.5px] size-2 rounded-full border border-[color-mix(in_srgb,var(--foreground)_35%,transparent)] bg-background"
                />
                <h3 className="text-[0.9375rem] leading-6 sm:text-base">{title}</h3>
                {detail ? (
                    <p className="mt-1.5 font-mono text-xs opacity-55">{detail}</p>
                ) : null}
                {stack ? (
                    <p className="mt-1 font-mono text-xs opacity-45">
                        {stack.join(" / ")}
                    </p>
                ) : null}
            </div>
        </motion.li>
    );
}
