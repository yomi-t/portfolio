import type { Metadata } from "next";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { ImagePlate } from "../../../components/ImagePlate";
import { LinkButton } from "../../../components/LinkButton";

export const metadata: Metadata = {
    title: "FrameBezelApp | スクショにApple公式ベゼルを合成するmacOSアプリ",
    description:
        "スクリーンショットにApple公式のデバイスベゼルを合成して書き出すmacOSアプリ。",
};

const APPLE_DESIGN_RESOURCES_URL = "https://developer.apple.com/design/resources/";
const DOWNLOAD_URL = "/downloads/FrameBezelApp.zip";

const steps = [
    {
        title: "アプリをダウンロードする",
        body: "下のボタンから zip を保存して展開し、FrameBezelApp.app を「アプリケーション」フォルダへ移動します。",
    },
    {
        title: "Appleのベゼル素材を入手する",
        body: "Apple Design Resources の「Product Bezels」から、使いたい機種の dmg をダウンロードします。ベゼル素材はAppleの配布物のため、このサイトでは同梱していません。",
    },
    {
        title: "ベゼルをアプリに追加する",
        body: "dmg をマウントし、中の PNG フォルダごとアプリへドラッグ＆ドロップ。画面領域は自動で検出され、確認シートで微調整できます。",
    },
    {
        title: "スクショを合成して書き出す",
        body: "スクリーンショットをドロップ（またはペースト）して機種と色を選び、PNG として書き出します。",
    },
];

export default function Page() {
    return (
        <section className="px-6 py-20 sm:px-14 sm:py-28">
            <div className="mx-auto max-w-2xl">
                <LinkButton href="/" icon={ArrowLeft}>
                    トップに戻る
                </LinkButton>

                <div className="mt-10">
                    <ImagePlate
                        src="/images/frame-bezel-app.png"
                        alt="FrameBezelAppの画面"
                        label="FrameBezelApp"
                        ratio="16 / 10"
                    />
                </div>

                <h1 className="mt-10 font-mochiy text-2xl leading-snug sm:text-3xl">
                    FrameBezelApp
                </h1>
                <p className="mt-4 text-sm leading-relaxed opacity-70 sm:text-base">
                    スクリーンショットに Apple 公式のデバイスベゼルを合成して書き出す、macOS
                    用のアプリ。App Store の掲載画像づくりなどに使えます。
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                    <LinkButton href={DOWNLOAD_URL} icon={Download}>
                        アプリをダウンロード
                    </LinkButton>
                    <LinkButton
                        href={APPLE_DESIGN_RESOURCES_URL}
                        external
                        icon={ExternalLink}
                    >
                        Apple Design Resources
                    </LinkButton>
                </div>
                <p className="mt-3 font-mono text-xs opacity-60">
                    macOS 14 以降 / 無料 / Apple の公証済み
                </p>

                <div className="mt-14">
                    <h2 className="font-mochiy text-xl leading-snug sm:text-2xl">
                        特徴
                    </h2>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed opacity-70 sm:text-base">
                        <li>ドラッグ＆ドロップ・ファイル選択・ペーストで入力</li>
                        <li>iPhone / iPad / Mac / Apple Watch などのベゼルに対応</li>
                        <li>背景は単色・グラデーション・透明から選択</li>
                        <li>書き出しはベゼルと同じフル解像度の PNG</li>
                        <li>横向きのベゼルが無くても、縦向きを回転して利用</li>
                    </ul>
                </div>

                <div className="mt-14">
                    <h2 className="font-mochiy text-xl leading-snug sm:text-2xl">
                        使いかた
                    </h2>
                    <ol className="mt-6 flex flex-col gap-8">
                        {steps.map(({ title, body }, index) => (
                            <li key={title}>
                                <h3 className="font-mochiy text-base sm:text-lg">
                                    {index + 1}. {title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed opacity-70 sm:text-base">
                                    {body}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="mt-14">
                    <h2 className="font-mochiy text-xl leading-snug sm:text-2xl">
                        注意事項
                    </h2>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed opacity-70 sm:text-base">
                        <li>
                            ベゼル画像の著作権は Apple に帰属します。利用は Apple Design
                            Resources の利用許諾に従ってください。
                        </li>
                        <li>
                            追加したベゼルや設定は ~/Library/Application Support/FrameApp/
                            に保存されます。外部へ送信されることはありません。
                        </li>
                        <li>個人開発のため、動作の保証やサポートは行っていません。</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
