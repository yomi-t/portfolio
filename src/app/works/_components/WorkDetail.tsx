import { ArrowLeft, Globe } from "lucide-react";
import type { Work } from "../../_data/works";
import { ImagePlate } from "../../../components/ImagePlate";
import { LinkButton } from "../../../components/LinkButton";

type WorkDetailProps = {
    work: Work;
};

export function WorkDetail({ work }: WorkDetailProps) {
    const { name, description, src, platform, url } = work;
    const isWeb = platform === "web";

    return (
        <section className="px-6 py-20 sm:px-14 sm:py-28">
            <div className="mx-auto max-w-2xl">
                <LinkButton href="/" icon={ArrowLeft}>
                    トップに戻る
                </LinkButton>

                <div className="mt-10 flex flex-col gap-10 sm:flex-row sm:gap-14">
                    <div
                        className={
                            isWeb ? "w-56 flex-shrink-0 sm:w-64" : "w-40 flex-shrink-0 sm:w-48"
                        }
                    >
                        <ImagePlate
                            src={src}
                            alt={src ? `${name}のスクリーンショット` : undefined}
                            label={name}
                            ratio={isWeb ? "16 / 10" : "9 / 19.5"}
                            variant={isWeb ? "plate" : "device"}
                        />
                    </div>

                    <div>
                        <h1 className="font-mochiy text-2xl leading-snug sm:text-3xl">
                            {name}
                        </h1>
                        <p className="mt-4 text-sm leading-relaxed opacity-70 sm:text-base">
                            {description}
                        </p>
                        <div className="mt-6">
                            <LinkButton
                                href={url}
                                external
                                icon={isWeb ? Globe : "/images/apple-black.svg"}
                            >
                                {isWeb ? "サイトを見る" : "App Storeで見る"}
                            </LinkButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
