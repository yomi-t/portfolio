import { WorkDetail } from "../_components/WorkDetail";

export default function Page() {
    return (
        <WorkDetail
            work={{
                slug: "tsukiichi-kakeibo",
                name: "ツキイチ家計簿",
                description:
                    "月ごとの支出をシンプルに記録・可視化できる家計簿アプリ。",
                src: "/images/budget-book.png",
                platform: "ios",
                url: "https://apps.apple.com/jp/app/%E3%83%84%E3%82%AD%E3%82%A4%E3%83%81%E5%AE%B6%E8%A8%88%E7%B0%BF/id6761823543",
            }}
        />
    );
}
