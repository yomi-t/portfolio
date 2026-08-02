export type Platform = "ios" | "web";

export type Work = {
    /** 詳細ページのURLに使う識別子 */
    slug: string;
    name: string;
    /** 軽い一言紹介 */
    description: string;
    /** スクリーンショットが用意できたら渡す */
    src?: string;
    platform: Platform;
    /**
     * iOSはストア配布URL、Webは公開URL。
     * TODO: 公開後に実際のURLへ差し替える
     */
    url: string;
};

export const works: Work[] = [
    {
        slug: "tsukiichi-kakeibo",
        name: "ツキイチ家計簿",
        description: "月ごとの支出をシンプルに記録・可視化できる家計簿アプリ。",
        src: "/images/budget-book.png",
        platform: "ios",
        url: "https://apps.apple.com/jp/app/%E3%83%84%E3%82%AD%E3%82%A4%E3%83%81%E5%AE%B6%E8%A8%88%E7%B0%BF/id6761823543",
    },
    {
        slug: "schedule-exporter",
        name: "Schedule Exporter",
        description: "空き時間をワンタップでテキストに書き出せる連携用ユーティリティアプリ。",
        src: "/images/schedule-exporter.png",
        platform: "ios",
        url: "https://apps.apple.com/jp/app/schedule-exporter/id6781228884",
    },
    {
        slug: "scheduler",
        name: "Scheduler",
        description: "時間単位で日程調整が簡単にできるWebアプリ。",
        src: "/images/scheduler.png",
        platform: "web",
        url: "https://scheduler.yomi-t.com",
    },
];
