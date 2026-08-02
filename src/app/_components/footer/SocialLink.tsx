import Link from "next/link";
import type { Social } from "../../_data/socials";

export function SocialLink({ name, href, icon: Icon }: Social) {
    // mailto: は別タブではなくメーラーを開かせたいので target を付けない
    const isExternal = href.startsWith("http");
    const externalProps = isExternal
        ? { target: "_blank" as const, rel: "noopener noreferrer" }
        : {};

    return (
        <Link
            href={href}
            {...externalProps}
            // p-2 はタップ領域の確保。アイコン自体の見た目の間隔は gap ではなくこの余白で作る
            className="inline-flex items-center justify-center p-2 opacity-60 transition-colors duration-300 hover:text-accent hover:opacity-100"
        >
            <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
            <span className="sr-only">{name}</span>
        </Link>
    );
}
