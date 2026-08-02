import { socials } from "../../_data/socials";
import { SocialLink } from "./SocialLink";

// 年は new Date() で取らない。静的生成時点で焼き付いた年とクライアントの年がずれる事故を避ける
const COPYRIGHT_YEAR = 2026;

export function Footer() {
    // URL未確定のアカウントは死んだリンクを晒すより出さない。URLを埋めれば自動で現れる
    const links = socials.filter((social) => social.href);

    return (
        <footer className="relative mt-auto px-6 py-12 sm:px-14 sm:py-16">
            <div className="mx-auto max-w-5xl">
                {/* セクション見出しと同じ罫線意匠で、紙面の終わりを示す */}
                <div className="flex items-center">
                    <span className="h-px w-10 bg-accent" />
                    <span className="h-px flex-1 bg-rule" />
                </div>

                {/* 横並びが折り返して縦積みになったら、items-center で左右中央に寄せる */}
                <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
                    {/* 横並び時のみ -ml-2 でアイコンの内側余白を打ち消し、左端を罫線に揃える */}
                    <ul className="flex flex-wrap items-center justify-center sm:-ml-2 sm:justify-start">
                        {links.map((social) => (
                            <li key={social.name}>
                                <SocialLink {...social} />
                            </li>
                        ))}
                    </ul>

                    <p className="text-center font-mono text-xs tracking-[0.05em] opacity-50">
                        © {COPYRIGHT_YEAR} よみ（伊藤汰海）
                    </p>
                </div>
            </div>
        </footer>
    );
}
