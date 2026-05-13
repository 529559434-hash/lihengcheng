import { Github, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

const channels = [
  {
    label: "邮箱",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  {
    label: "电话",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s|-/g, "")}`,
    icon: Phone,
  },
  {
    label: "所在地",
    value: site.location,
    href: undefined,
    icon: MapPin,
  },
];

const socials = [
  { label: "GitHub", href: site.socials.github, icon: Github },
  { label: "LinkedIn", href: site.socials.linkedin, icon: Linkedin },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="联系我"
      description="如果有合适的 AI 产品机会，或者只是想交流大模型应用落地，欢迎随时找我聊聊。"
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <div className="surface relative overflow-hidden p-8 sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-grad-brand opacity-25 blur-3xl"
            />
            <div className="relative">
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                让我们聊聊 AI 产品的下一步。
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
                无论是合作、咨询，还是单纯交流想法，都欢迎通过邮件或电话联系我，
                我会尽快回复。
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={`mailto:${site.email}`} className="btn-primary">
                  发送邮件
                  <ArrowRight size={16} />
                </a>
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ghost"
                    >
                      <Icon size={16} />
                      {s.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-1">
            {channels.map((c) => {
              const Icon = c.icon;
              const inner = (
                <div className="surface flex items-center gap-4 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-brand-400">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs uppercase tracking-[0.16em] text-white/40">
                      {c.label}
                    </div>
                    <div className="mt-0.5 truncate text-[15px] text-white/90">
                      {c.value}
                    </div>
                  </div>
                  {c.href ? (
                    <ArrowRight
                      size={16}
                      className="text-white/30 transition-colors group-hover:text-white"
                    />
                  ) : null}
                </div>
              );

              return (
                <li key={c.label}>
                  {c.href ? (
                    <a href={c.href} className="group block">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
