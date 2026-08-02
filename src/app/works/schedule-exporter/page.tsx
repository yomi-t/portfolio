import { FileText } from "lucide-react";
import { LinkButton } from "../../../components/LinkButton";
import { WorkDetail } from "../_components/WorkDetail";

export default function Page() {
    return (
        <>
            <WorkDetail
                work={{
                    slug: "schedule-exporter",
                    name: "Schedule Exporter",
                    description:
                        "予定をワンタップで別形式に書き出せる連携用ユーティリティアプリ。",
                    src: "/images/schedule-exporter.png",
                    platform: "ios",
                    url: "https://apps.apple.com/jp/app/schedule-exporter/id6781228884",
                }}
            />
            <div className="mx-auto max-w-2xl px-6 pb-20 sm:px-14 sm:pb-28">
                <LinkButton
                    href="/works/schedule-exporter/privacy-policy"
                    icon={FileText}
                >
                    プライバシーポリシー
                </LinkButton>
            </div>
        </>
    );
}
