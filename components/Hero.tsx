"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Mail } from "lucide-react";
import { site } from "@/lib/site";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-glow-radial"
      />

      <div className="container-page">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="max-w-4xl"
        >
          <motion.div
            variants={item}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70 backdrop-blur-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            正在寻找有挑战的 AI 产品机会
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            <span className="gradient-text">{site.name}</span>
            <span className="ml-3 text-white/40 sm:ml-4">/ {site.nameEn}</span>
          </motion.h1>

          <motion.h2
            variants={item}
            className="mt-5 text-2xl font-medium text-white/80 sm:text-3xl"
          >
            {site.role}{" "}
            <span className="gradient-brand-text">· {site.roleEn}</span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#contact" className="btn-primary">
              联系我
              <ArrowRight size={16} />
            </a>
            <a href="#experience" className="btn-ghost">
              查看经历
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/55"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} className="text-white/40" />
              {site.location}
            </span>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail size={14} className="text-white/40" />
              {site.email}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
