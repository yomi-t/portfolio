import { Award } from "lucide-react";

type AwardNoteProps = {
    /** 受賞・表彰の内容 */
    children: React.ReactNode;
};

export function AwardNote({ children }: AwardNoteProps) {
    return (
        <div className="relative overflow-hidden rounded-lg border border-[color-mix(in_srgb,var(--accent)_28%,transparent)] bg-[color-mix(in_srgb,var(--accent)_5%,transparent)] py-4 pr-5 pl-6">
            {/* 左端の朱の帯。紙面で唯一この強度を使う */}
            <span
                aria-hidden="true"
                className="absolute top-0 bottom-0 left-0 w-[3px] bg-accent"
            />
            <p className="flex items-center gap-1.5 font-mono text-[0.625rem] tracking-[0.2em] uppercase text-accent">
                <Award size={13} strokeWidth={1.75} />
                award
            </p>
            <p className="mt-2 text-sm leading-relaxed sm:text-base">{children}</p>
        </div>
    );
}
