import { WorkDetail } from "../_components/WorkDetail";

export default function Page() {
    return (
        <WorkDetail
            work={{
                slug: "scheduler",
                name: "Scheduler",
                description: "時間単位で日程調整が簡単にできるWebアプリ。",
                src: "/images/scheduler.png",
                platform: "web",
                url: "https://scheduler.yomi-t.com",
            }}
        />
    );
}
