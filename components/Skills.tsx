import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { skills } from "@/lib/site";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="技能"
      description="围绕「AI 产品落地」沉淀的能力组合，覆盖从场景定义到上线迭代的全流程。"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <Reveal key={skill.title} delay={idx * 0.05}>
              <article className="surface group relative h-full overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-grad-brand opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
                />

                <div className="relative">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-brand-400">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-white">
                    {skill.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {skill.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {skill.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
