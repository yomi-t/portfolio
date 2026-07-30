import { internships } from "../../_data/internships";

export function InternshipList() {
    return (
        <ol className="border-t border-rule">
            {internships.map(({ company, period, role, stack }, index) => (
                <li
                    key={company}
                    className="group grid gap-2 border-b border-rule py-5 transition-colors duration-300 hover:bg-[color-mix(in_srgb,var(--foreground)_3%,transparent)] sm:grid-cols-[1fr_auto] sm:items-end sm:gap-6"
                >
                    <div>
                        <span className="font-mono text-[0.625rem] tracking-[0.2em] opacity-40 transition-colors duration-300 group-hover:text-accent group-hover:opacity-100">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="mt-1.5 text-[0.9375rem] leading-snug sm:text-base">
                            {company}
                        </p>
                        <p className="mt-1 font-mono text-xs opacity-55">
                            {period} ・ {role}
                        </p>
                    </div>
                    <p className="font-mono text-xs leading-relaxed opacity-70 sm:text-right">
                        {stack.join(" / ")}
                    </p>
                </li>
            ))}
        </ol>
    );
}
