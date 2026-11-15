"use client";

import { useEffect } from "react";
import { sendGTMEvent } from "@next/third-parties/google";

const DOWNLOAD_EXTENSIONS = /\.(zip|pdf|dmg|pkg|exe)$/i;

/**
 * ページ内のリンククリックをGTMのdataLayerへ送る。
 * 各リンクに個別のハンドラを付けず、documentで委譲して拾うため、
 * リンクを追加・変更してもここを触る必要はない。
 *
 * 送るイベント:
 *  - file_download : ダウンロードリンク（zipなど）
 *  - outbound_click: 別ドメインへのリンク
 *  - mailto_click  : メールリンク
 */
export function ClickTracker() {
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            const anchor = (e.target as Element | null)?.closest("a");
            if (!anchor) return;

            const rawHref = anchor.getAttribute("href");
            if (!rawHref) return;

            const linkText = (anchor.textContent ?? "").trim().slice(0, 100);

            if (rawHref.startsWith("mailto:")) {
                sendGTMEvent({ event: "mailto_click", link_text: linkText });
                return;
            }

            let url: URL;
            try {
                url = new URL(anchor.href, window.location.href);
            } catch {
                return;
            }
            if (url.protocol !== "http:" && url.protocol !== "https:") return;

            const isInternal = url.origin === window.location.origin;

            if (DOWNLOAD_EXTENSIONS.test(url.pathname)) {
                sendGTMEvent({
                    event: "file_download",
                    file_name: url.pathname.split("/").pop(),
                    link_url: url.href,
                    link_text: linkText,
                });
            } else if (!isInternal) {
                sendGTMEvent({
                    event: "outbound_click",
                    link_url: url.href,
                    link_domain: url.hostname,
                    link_text: linkText,
                });
            }
        };

        document.addEventListener("click", onClick);
        return () => document.removeEventListener("click", onClick);
    }, []);

    return null;
}
