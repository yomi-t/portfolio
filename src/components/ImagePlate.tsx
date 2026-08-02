import Image from "next/image";

type ImagePlateProps = {
    /**
     * 実画像のパス。未指定のあいだはダミー枠を描く。
     * 画像が用意できたら src を渡すだけで差し替わる
     */
    src?: string;
    /** src を渡すときは必須。ダミーのあいだは装飾扱いなので不要 */
    alt?: string;
    /** ダミー枠に出す「何の画像が入る予定か」のラベル */
    label: string;
    /** CSS の aspect-ratio。例 "4 / 3" */
    ratio?: string;
    /** 紙を軽く貼ったような傾き（度） */
    rotate?: number;
    /** device はスマホのモックとして角丸を強くする */
    variant?: "plate" | "device";
    className?: string;
};

export function ImagePlate({
    src,
    alt,
    label,
    ratio = "4 / 3",
    rotate = 0,
    variant = "plate",
    className = "",
}: ImagePlateProps) {
    const radius = variant === "device" ? "rounded-[1.75rem]" : "rounded-xl";

    return (
        <div
            className={`relative overflow-hidden border border-rule bg-[color-mix(in_srgb,var(--foreground)_4%,transparent)] shadow-[0_10px_30px_-22px_color-mix(in_srgb,var(--foreground)_60%,transparent)] ${radius} ${className}`}
            style={{ aspectRatio: ratio, rotate: `${rotate}deg` }}
        >
            {src ? (
                <Image
                    src={src}
                    alt={alt ?? ""}
                    fill
                    sizes="(max-width: 640px) 100vw, 480px"
                    className="object-cover"
                />
            ) : (
                <>
                    {/* 空枠であることを示す対角線。濃度は罫線に揃える */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-70"
                        style={{
                            background:
                                "linear-gradient(to top right, transparent calc(50% - 0.5px), var(--rule) 50%, transparent calc(50% + 0.5px)), linear-gradient(to bottom right, transparent calc(50% - 0.5px), var(--rule) 50%, transparent calc(50% + 0.5px))",
                        }}
                    />
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <Image
                            src="/images/icon.svg"
                            alt=""
                            width={884}
                            height={435}
                            className="h-auto w-2/3 opacity-[0.07]"
                        />
                    </div>
                    {/* 端末モックは幅が狭いので接頭辞を省いてラベルだけ出す */}
                    <span className="absolute bottom-3 left-3 right-3 font-mono text-[0.625rem] leading-relaxed tracking-[0.18em] uppercase opacity-40">
                        {variant === "device" ? label : `image / ${label}`}
                    </span>
                </>
            )}
        </div>
    );
}
