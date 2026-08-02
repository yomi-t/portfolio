import { ArrowRight, Globe } from "lucide-react";
import type { Work } from "../../_data/works";
import { LinkButton } from "../../../components/LinkButton";
import { ImagePlate } from "../../../components/ImagePlate";

type AppShowcaseProps = {
    apps: Work[];
    className?: string;
};

/** 端末モックを軽く互い違いに傾けて、並べた紙のような表情にする */
const ROTATIONS = [-1.5, 1.5];

export function AppShowcase({ apps, className = "" }: AppShowcaseProps) {
    return (
        <ul className={`flex max-w-lg flex-col gap-8 sm:gap-10 ${className}`}>
            {apps.map(({ slug, name, description, src, platform, url }, index) => {
                const isWeb = platform === "web";

                return (
                    <li key={slug} className="flex gap-5 sm:gap-6">
                        <div
                            className={
                                isWeb
                                    ? "w-36 flex-shrink-0 sm:w-44"
                                    : "w-24 flex-shrink-0 sm:w-28"
                            }
                        >
                            <ImagePlate
                                src={src}
                                alt={src ? `${name}のスクリーンショット` : undefined}
                                label={name}
                                ratio={isWeb ? "16 / 10" : "9 / 19.5"}
                                rotate={ROTATIONS[index % ROTATIONS.length]}
                                variant={isWeb ? "plate" : "device"}
                            />
                        </div>
                        <div className="flex-1 pt-1">
                            <p className="font-mochiy text-base leading-snug sm:text-lg">
                                {name}
                            </p>
                            {description ? (
                                <p className="mt-2 text-sm leading-relaxed opacity-70">
                                    {description}
                                </p>
                            ) : null}
                            <div className="mt-4 flex flex-wrap gap-2.5">
                                <LinkButton href={`/works/${slug}`} icon={ArrowRight}>
                                    詳細を見る
                                </LinkButton>
                                <LinkButton
                                    href={url}
                                    external
                                    icon={isWeb ? Globe : "/images/apple-black-line.svg"}
                                >
                                    {isWeb ? "サイトを見る" : "App Storeで見る"}
                                </LinkButton>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}
