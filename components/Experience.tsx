import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { experiences } from "@/lib/site";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="工作经历"
      description="从 0-1 产品到大厂 SaaS，再到 AI 产品方向，持续在做有挑战的产品。"
    >
      <ol className="relative ml-2 border-l border-white/10 pl-6 sm:ml-3 sm:pl-8">
        {experiences.map((exp, idx) => (
          <Reveal
            as="li"
            key={`${exp.company}-${exp.period}`}
            delay={idx * 0.06}
            className="relative pb-12 last:pb-0"
          >
            <span
              aria-hidden
              className="absolute -left-[33px] top-1.5 flex h-3.5 w-3.5 items-center justify-center sm:-left-[41px]"
            >
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand-500/40 blur-[6px]" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-grad-brand ring-4 ring-bg" />
            </span>

            <div className="surface p-5 sm:p-6">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/40">
                  {exp.period}
                </span>
                <span className="text-white/30">·</span>
                <span className="text-sm text-white/70">{exp.company}</span>
              </div>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-white sm:text-xl">
                {exp.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/65 sm:text-[15px]">
                {exp.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5">
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-1 w-1 flex-none rounded-full bg-brand-400"
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
