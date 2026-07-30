"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { CalendarRange } from "lucide-react";
import { useRef } from "react";
import { internships } from "../../_data/internships";
import { SectionShell } from "../shared/SectionShell";
import { TimelineEntry } from "./TimelineEntry";

const entries = [
    { date: "2021.04", title: "明治大学付属中野高等学校 入学" },
    { date: "2022.04", title: "プログラミングを始める"},
    { date: "2023.10", title: "アプリ甲子園2023 準優勝"},
    { date: "2024.04", title: "明治大学 商学部 入学" },
    { date: "2024.04", title: "明大祭実行委員会 入会" },
    { date: "2024.07", title: "Life is Tech! メンターになる", detail: "iPhoneアプリコース ・ DXコース" },
    { date: "2024.07", title: "CA Tech Lounge 入会" },
    { date: "2025.02~05", title: "株式会社アットマークソリューション", detail: "4ヶ月 ・ iOSエンジニア", stack: ["Swift", "UIKit"] },
    { date: "2025.08", title: "クラシル株式会社", detail: "3日間 ・ iOSアプリ開発ハッカソン", stack: ["Swift", "SwiftUI"] },
    { date: "2025.08~09", title: "株式会社リクルートホールディングス", detail: "1ヶ月 ・ iOSエンジニア", stack: ["Swift", "UIKit", "VIPER"] },
    { date: "2026.03", title: "株式会社サイバーエージェント", detail: "1ヶ月 ・ iOSエンジニア", stack: ["Swift", "SwiftUI", "UIKit", "Reduxライク"] },
];

const listVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.14 },
    },
};

export function TimelineSection() {
    const listRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: listRef,
        offset: ["start 85%", "end 65%"],
    });
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <SectionShell label="timeline" title="個人年表" icon={CalendarRange}>
            <div ref={listRef} className="relative">
                <motion.span
                    aria-hidden="true"
                    style={{ scaleY }}
                    className="absolute top-0 bottom-0 left-19 w-px origin-top bg-accent sm:left-28"
                />

                <motion.ol
                    variants={listVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {entries.map((entry, index) => (
                        <TimelineEntry
                            key={`${entry.date}-${entry.title}`}
                            {...entry}
                            isLast={index === entries.length - 1}
                        />
                    ))}
                </motion.ol>
            </div>
        </SectionShell>
    );
}
