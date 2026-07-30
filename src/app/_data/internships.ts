export type Internship = {
    company: string;
    /** 参加期間 */
    period: string;
    role: string;
    stack: string[];
    /**
     * 個人年表に出す時期。
     * TODO: 現在は仮値。実際の年月が判明したらここだけ差し替える
     * （活動内容セクションと個人年表の両方がこの配列を参照している）
     */
    date: string;
};

export const internships: Internship[] = [
    {
        company: "株式会社アットマークソリューション",
        period: "4ヶ月",
        role: "iOSエンジニア",
        stack: ["Swift", "UIKit"],
        date: "2025.02~05",
    },
    {
        company: "クラシル株式会社",
        period: "3日間",
        role: "iOSアプリ開発ハッカソン",
        stack: ["Swift", "SwiftUI"],
        date: "2025.08",
    },
    {
        company: "株式会社リクルートホールディングス",
        period: "1ヶ月",
        role: "iOSエンジニア",
        stack: ["Swift", "UIKit", "VIPER"],
        date: "2025.08~09",
    },
    {
        company: "株式会社サイバーエージェント",
        period: "1ヶ月",
        role: "iOSエンジニア",
        stack: ["Swift", "SwiftUI", "UIKit", "Reduxライク"],
        date: "2026.03",
    },
];
