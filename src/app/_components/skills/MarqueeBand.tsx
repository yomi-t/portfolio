type MarqueeBandProps = {
    items: string[];
};

/**
 * 技術名の横スクロール帯。装飾なので aria-hidden。
 * 同じ列を2つ並べて -50% まで動かすことで継ぎ目なくループする
 */
export function MarqueeBand({ items }: MarqueeBandProps) {
    return (
        <div
            aria-hidden="true"
            className="relative overflow-hidden border-y border-rule py-3.5 select-none"
            style={{
                maskImage:
                    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
        >
            <div className="flex w-max animate-[marquee_38s_linear_infinite]">
                {[0, 1].map((copy) => (
                    <ul key={copy} className="flex shrink-0">
                        {items.map((item) => (
                            <li
                                key={item}
                                className="flex items-center font-mono text-xs tracking-[0.14em] uppercase opacity-45"
                            >
                                {item}
                                <span className="mx-5 text-accent opacity-70">◆</span>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    );
}
