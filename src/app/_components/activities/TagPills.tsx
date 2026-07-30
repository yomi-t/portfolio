type TagPillsProps = {
    items: string[];
    className?: string;
};

export function TagPills({ items, className = "" }: TagPillsProps) {
    return (
        <ul className={`flex flex-wrap gap-2.5 ${className}`}>
            {items.map((item) => (
                <li
                    key={item}
                    className="rounded-full border border-[color-mix(in_srgb,var(--foreground)_15%,transparent)] px-4 py-2 text-sm"
                >
                    {item}
                </li>
            ))}
        </ul>
    );
}
