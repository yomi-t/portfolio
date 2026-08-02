"use client";

import { motion } from "framer-motion";
import { PenLine } from "lucide-react";
import { ArticleRow } from "./ArticleRow";
import { SectionShell } from "../../../components/SectionShell";

const articles = [
    {
        outlet: "Qiita",
        kind: "記事一覧",
        href: "https://qiita.com/yomi_tiger",
        display: "qiita.com/yomi_tiger",
    },
    {
        outlet: "リクルート",
        kind: "recruit tech blog",
        href: "https://techblog.recruit.co.jp/article-6740/",
        display: "techblog.recruit.co.jp/article-6740",
    },
    {
        outlet: "サイバーエージェント",
        kind: "cyberagent developers blog",
        href: "https://developers.cyberagent.co.jp/blog/archives/63600/",
        display: "developers.cyberagent.co.jp/blog/archives/63600",
    },
];

const listVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.12 },
    },
};

export function ArticlesSection() {
    return (
        <SectionShell label="articles" title="記事" icon={PenLine}>
            <motion.ul
                variants={listVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="border-t border-rule"
            >
                {articles.map((article) => (
                    <ArticleRow key={article.href} {...article} />
                ))}
            </motion.ul>
        </SectionShell>
    );
}
