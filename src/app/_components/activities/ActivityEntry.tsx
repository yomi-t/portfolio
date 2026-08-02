"use client";

import { motion } from "framer-motion";
import { ImagePlate } from "../../../components/ImagePlate";

type ActivityEntryProps = {
    /** 1始まりの連番。透かしの数字に使う */
    index: number;
    title: string;
    /** 役割・立場など、タイトル直下の一行 */
    subtitle?: string;
    /** 画像を添える活動のみ指定する */
    image?: {
        src?: string;
        label: string;
        ratio?: string;
        rotate?: number;
        variant?: "plate" | "device";
    };
    /** 画像を本文のどちら側に置くか（デスクトップのみ有効） */
    align?: "left" | "right";
    children?: React.ReactNode;
};

const entryVariants = {
    hidden: { opacity: 0, y: 28 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
};

export function ActivityEntry({
    index,
    title,
    subtitle,
    image,
    align = "right",
    children,
}: ActivityEntryProps) {
    const number = String(index).padStart(2, "0");

    return (
        <motion.article
            variants={entryVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative border-t border-rule pt-10 first:border-t-0 first:pt-0"
        >
            <div
                className={`grid gap-8 sm:gap-10 ${
                    image
                        ? align === "left"
                            ? "md:grid-cols-[18rem_1fr]"
                            : "md:grid-cols-[1fr_18rem]"
                        : ""
                }`}
            >
                <div
                    className={
                        image && align === "left" ? "md:col-start-2 md:row-start-1" : undefined
                    }
                >
                    {/* 輪郭だけの連番。見出しが下端に重なるよう流し込みで置く */}
                    <span
                        aria-hidden="true"
                        className="block font-mono leading-[0.75] select-none"
                        style={{
                            fontSize: "clamp(3.25rem, 8vw, 5rem)",
                            color: "transparent",
                            WebkitTextStroke:
                                "1px color-mix(in srgb, var(--foreground) 18%, transparent)",
                        }}
                    >
                        {number}
                    </span>

                    <h3 className="-mt-4 font-mochiy text-xl leading-snug sm:-mt-5 sm:text-2xl">
                        {title}
                    </h3>
                    {subtitle ? (
                        <p className="mt-2 font-mono text-xs tracking-[0.12em] opacity-55 sm:text-sm">
                            {subtitle}
                        </p>
                    ) : null}
                    {children ? <div className="mt-6">{children}</div> : null}
                </div>

                {image ? (
                    <div
                        className={
                            align === "left" ? "md:col-start-1 md:row-start-1" : undefined
                        }
                    >
                        <ImagePlate
                            src={image.src}
                            label={image.label}
                            ratio={image.ratio}
                            rotate={image.rotate}
                            variant={image.variant}
                        />
                    </div>
                ) : null}
            </div>
        </motion.article>
    );
}
