import Image from "next/image";

export function HeroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
                className="absolute -inset-1/4 animate-[hero-drift-a_24s_ease-in-out_infinite]"
                style={{
                    background:
                        "radial-gradient(45% 45% at 28% 32%, color-mix(in srgb, white 55%, transparent) 0%, transparent 100%)",
                }}
            />
            <div
                className="absolute -inset-1/4 animate-[hero-drift-b_28s_ease-in-out_infinite]"
                style={{
                    background:
                        "radial-gradient(50% 50% at 78% 52%, color-mix(in srgb, var(--foreground) 14%, transparent) 0%, transparent 100%)",
                }}
            />
            <div
                aria-hidden="true"
                className="absolute top-1/2 -right-3/5 sm:-right-1/8 w-[150vw] sm:w-[65vw] max-w-4xl -translate-y-1/2 rotate-[8deg] opacity-[0.2]"
            >
                <Image
                    src="/images/icon.svg"
                    alt=""
                    width={884}
                    height={435}
                    className="h-auto w-full"
                />
            </div>
            {/* 完全な縦方向のグラデーションで下端をページ背景色へ溶け込ませ、次セクションとの境目をなくす */}
            <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(to bottom, transparent 0%, transparent 58%, var(--background) 100%)",
                }}
            />
        </div>
    );
}
