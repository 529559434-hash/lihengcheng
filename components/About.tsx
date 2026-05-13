import { MapPin } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="关于我">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[260px_1fr] md:gap-14">
        <Reveal className="order-1 md:order-none">
          <div className="surface relative mx-auto flex aspect-square w-full max-w-[260px] items-center justify-center overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 bg-grad-brand opacity-25"
            />
            <div className="relative flex h-full w-full items-center justify-center text-7xl font-semibold tracking-tight text-white/90">
              {site.name.slice(-1)}
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_60%_at_50%_0%,rgba(255,255,255,0.18),transparent_60%)]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-base leading-relaxed text-white/75 sm:text-lg">
            {site.bio}
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
            <li className="surface flex items-center gap-3 px-4 py-3">
              <MapPin size={16} className="text-brand-400" />
              <span className="text-white/70">所在地</span>
              <span className="ml-auto text-white/90">{site.location}</span>
            </li>
            <li className="surface flex items-center gap-3 px-4 py-3">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-white/70">当前状态</span>
              <span className="ml-auto text-white/90">开放新机会</span>
            </li>
            <li className="surface flex items-center gap-3 px-4 py-3">
              <span className="text-white/70">职业</span>
              <span className="ml-auto text-white/90">{site.role}</span>
            </li>
            <li className="surface flex items-center gap-3 px-4 py-3">
              <span className="text-white/70">擅长</span>
              <span className="ml-auto text-white/90">
                AI 产品 0→1 / Agent / RAG
              </span>
            </li>
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
