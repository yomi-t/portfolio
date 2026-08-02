import type { ComponentType } from "react";
import { Mail, PenLine } from "lucide-react";
import { AppleIcon } from "../../components/icons/AppleIcon";
import { GitHubIcon } from "../../components/icons/GitHubIcon";
import { LinkedInIcon } from "../../components/icons/LinkedInIcon";
import { XIcon } from "../../components/icons/XIcon";

/** lucideアイコンと自作ブランドアイコンの両方を受けられる最小のprops */
export type SocialIcon = ComponentType<{
    size?: number;
    strokeWidth?: number;
    className?: string;
    "aria-hidden"?: boolean | "true" | "false";
}>;

export type Social = {
    /** アイコンのみの表示になるため、スクリーンリーダー用の名前として使う */
    name: string;
    /**
     * 空文字はURL未確定の意。Footer側で除外され、リンクとして描画されない。
     */
    href: string;
    icon: SocialIcon;
};

export const socials: Social[] = [
    { name: "X", href: "https://x.com/tiger10122", icon: XIcon },
    { name: "GitHub", href: "https://github.com/yomi-t", icon: GitHubIcon },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/yomi-tiger", icon: LinkedInIcon },
    { name: "Qiita", href: "https://qiita.com/yomi_tiger", icon: PenLine },
    { name: "App Store", href: "https://apps.apple.com/jp/developer/taiga-ito/id1707516450", icon: AppleIcon },
    { name: "お問い合わせ", href: "mailto:contact@yomi-t.com", icon: Mail },
];
