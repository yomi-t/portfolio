import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type LinkButtonProps = {
    href: string;
    /** true なら新規タブで開く外部リンクとして扱う */
    external?: boolean;
    /** Lucide アイコン、または画像アイコンの src */
    icon: LucideIcon | string;
    children: React.ReactNode;
};

export function LinkButton({
    href,
    external = false,
    icon: Icon,
    children,
}: LinkButtonProps) {
    const className =
        "group inline-flex items-center gap-1.5 rounded-full border border-rule px-4 py-1.5 font-mono text-xs tracking-[0.05em] transition-colors duration-300 hover:border-accent hover:text-accent";

    const iconClassName =
        "transition-transform duration-300 group-hover:translate-x-0.5";

    const content = (
        <>
            {children}
            {typeof Icon === "string" ? (
                <Image
                    src={Icon}
                    alt=""
                    aria-hidden="true"
                    width={14}
                    height={14}
                    className={iconClassName}
                />
            ) : (
                <Icon
                    aria-hidden="true"
                    size={14}
                    strokeWidth={1.5}
                    className={iconClassName}
                />
            )}
        </>
    );

    if (external) {
        return (
            <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
            >
                {content}
            </Link>
        );
    }

    return (
        <Link href={href} className={className}>
            {content}
        </Link>
    );
}
