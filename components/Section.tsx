import { type ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            {eyebrow ? (
              <div className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-white/40">
                {eyebrow}
              </div>
            ) : null}
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
            {description ? (
              <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
