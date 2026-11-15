"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Check, Download } from "lucide-react";

type DownloadButtonProps = {
    href: string;
    children: React.ReactNode;
};

/** ダウンロード中の演出を見せる時間（ms）。実際の完了はブラウザ側で管理されるため固定値 */
const DOWNLOADING_MS = 1800;
const DONE_MS = 1500;

type Phase = "idle" | "downloading" | "done";

/**
 * zip などのファイルを直接ダウンロードさせるボタン。
 * クリックするとアイコンが落ちるアニメーションとプログレスバーを表示する。
 */
export function DownloadButton({ href, children }: DownloadButtonProps) {
    const [phase, setPhase] = useState<Phase>("idle");
    const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

    useEffect(() => {
        const current = timers.current;
        return () => current.forEach(clearTimeout);
    }, []);

    const handleClick = () => {
        if (phase !== "idle") return;
        setPhase("downloading");
        timers.current.push(
            setTimeout(() => setPhase("done"), DOWNLOADING_MS),
            setTimeout(() => setPhase("idle"), DOWNLOADING_MS + DONE_MS),
        );
    };

    const isActive = phase !== "idle";

    return (
        // download 属性があると Next.js はクライアント遷移せず通常のリンクとして扱う。
        // prefetch={false} で zip を「ページ」として先読みする無駄な通信も止める
        <Link
            href={href}
            download
            prefetch={false}
            onClick={handleClick}
            className={`group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border px-4 py-1.5 font-mono text-xs tracking-[0.05em] transition-colors duration-300 hover:border-accent hover:text-accent ${
                isActive ? "border-accent text-accent" : "border-rule"
            }`}
        >
            <span aria-live="polite">
                {phase === "idle" && children}
                {phase === "downloading" && "ダウンロード中…"}
                {phase === "done" && "ダウンロードしました"}
            </span>

            {phase === "done" ? (
                <Check aria-hidden="true" size={14} strokeWidth={1.5} />
            ) : (
                <Download
                    aria-hidden="true"
                    size={14}
                    strokeWidth={1.5}
                    className={
                        phase === "downloading"
                            ? "animate-[download-drop_0.9s_ease-in-out_infinite]"
                            : "transition-transform duration-300 group-hover:translate-y-0.5"
                    }
                />
            )}

            {phase === "downloading" && (
                <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-accent animate-[download-progress_1.8s_ease-out_forwards]"
                />
            )}
        </Link>
    );
}
