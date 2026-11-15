"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { works } from "../../_data/works";
import { ActivityBrief } from "./ActivityBrief";
import { ActivityEntry } from "./ActivityEntry";
import { AppShowcase } from "./AppShowcase";
import { InternshipList } from "./InternshipList";
import { SectionShell } from "../../../components/SectionShell";
import { TagPills } from "./TagPills";

const mentorCourses = [
    "iPhoneアプリ",
    "DX",
]

const mikkiWorks = [
    "明大祭公式サイト",
    "明大祭参加団体ツール",
    "教科書作成",
    "Notion活用",
    "ラーメン日記カウンター",
    "会議リマインダー",
];

const briefGroupVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.12 },
    },
};

export function ActivitiesSection() {
    return (
        <SectionShell label="activities" title="活動内容" icon={Layers} width="wide">
            <div className="flex flex-col gap-14 sm:gap-20">
                <ActivityEntry
                    index={1}
                    title="Life is Tech!"
                    subtitle="メンター"
                    image={{ src: "/images/mentor.jpg", label: "メンター活動の様子", ratio: "4 / 3", rotate: -1.5 }}
                    align="right"
                >
                    <p className="text-sm opacity-60">コース</p>
                    <TagPills items={mentorCourses} className="mt-3" />
                </ActivityEntry>

                <ActivityEntry index={2} title="インターン" subtitle="エンジニア">
                    <InternshipList />
                </ActivityEntry>

                <ActivityEntry index={3} title="個人開発" subtitle="iOS ・ Web ・ Mac">
                    <div className="flex flex-col gap-10">
                        <div>
                            <p className="text-sm opacity-60">iOSアプリ</p>
                            <AppShowcase
                                apps={works.filter((work) => work.platform === "ios")}
                                className="mt-4"
                            />
                        </div>
                        <div>
                            <p className="text-sm opacity-60">Webアプリ</p>
                            <AppShowcase
                                apps={works.filter((work) => work.platform === "web")}
                                className="mt-4"
                            />
                        </div>
                        <div>
                            <p className="text-sm opacity-60">Macアプリ</p>
                            <AppShowcase
                                apps={works.filter((work) => work.platform === "mac")}
                                className="mt-4"
                            />
                        </div>
                    </div>
                </ActivityEntry>

                <ActivityEntry
                    index={4}
                    title="明大祭実行委員会"
                    subtitle="制作局 副局長（3年）"
                    image={{ src: "/images/meijitsu.png", label: "明大祭公式サイト", ratio: "16 / 10", rotate: 1.5 }}
                    align="left"
                >
                    <p className="text-sm opacity-60">担当したもの</p>
                    <TagPills items={mikkiWorks} className="mt-3" />
                </ActivityEntry>

                {/* 情報量の少ない3件は横並びの小さな面にまとめ、紙面のリズムを変える */}
                <motion.div
                    variants={briefGroupVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid gap-8 md:grid-cols-3 md:gap-10"
                >
                    <ActivityBrief
                        index={5}
                        title="CA Tech Lounge"
                        subtitle="iOSエンジニア"
                    />
                    <ActivityBrief
                        index={6}
                        title="大学"
                        subtitle="商学部"
                        items={["水野誠ゼミ：データ分析"]}
                    />
                    <ActivityBrief
                        index={7}
                        title="その他"
                        items={["カンファレンス参加", "ハッカソン参加"]}
                    />
                </motion.div>
            </div>
        </SectionShell>
    );
}
