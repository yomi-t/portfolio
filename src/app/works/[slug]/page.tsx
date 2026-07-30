import { notFound } from "next/navigation";
import { WorkDetail } from "../../_components/work-detail/WorkDetail";
import { works } from "../../_data/works";

export function generateStaticParams() {
    return works.map((work) => ({ slug: work.slug }));
}

export default async function WorkPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const work = works.find((item) => item.slug === slug);

    if (!work) {
        notFound();
    }

    return <WorkDetail work={work} />;
}
