import { useEffect, useState } from "react";
import { Mail, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { site } from "../data/site";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % site.roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="max-w-6xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div className="order-2 md:order-1">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-wide uppercase text-[var(--color-accent)] bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/30 rounded-full px-3 py-1 mb-6">
            Available for new opportunities
          </span>

          <h1 className="font-[var(--font-display)] font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-4">
            I'm a
            <br />
            <span className="text-[var(--color-accent)] inline-block min-h-[1.1em]">
              {site.roles[roleIndex]}
            </span>
          </h1>

          <p className="text-[var(--color-text-muted)] text-base sm:text-lg max-w-xl mb-8">
            {site.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] text-white font-medium px-5 py-3 hover:bg-[var(--color-accent-hover)] active:scale-95 transition-all"
            >
              Get in Touch
            </a>
            <a
              href={site.resumeUrl}
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] font-medium px-5 py-3 hover:border-[var(--color-accent)] transition-colors"
            >
              <FileDown size={16} /> Download Resume
            </a>
          </div>

          <div className="flex items-center gap-4 text-[var(--color-text-muted)]">
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex flex-col items-center md:items-end gap-6">
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)]">
            <img
              src={site.photoUrl}
              alt={site.photoAlt}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          <TerminalCard />
        </div>
      </div>
    </section>
  );
}

function TerminalCard() {
  const [visibleCount, setVisibleCount] = useState(0);
  const lines = site.terminalLines;

  useEffect(() => {
    if (visibleCount >= lines.length) return;
    const id = setTimeout(() => setVisibleCount((c) => c + 1), 700);
    return () => clearTimeout(id);
  }, [visibleCount, lines.length]);

  const levelColor = {
    INFO: "text-blue-400",
    OK: "text-emerald-400",
    DEBUG: "text-[var(--color-accent)]",
  };

  return (
    <div
      className="w-full max-w-sm rounded-xl border border-[var(--color-border)] bg-[#0d0d16] text-[13px] font-[var(--font-mono)] overflow-hidden shadow-lg"
      role="img"
      aria-label="Terminal showing a data pipeline job starting up"
    >
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <span className="ml-2 text-gray-500 text-xs">data-pipeline-monitor --verbose</span>
      </div>
      <div className="p-4 space-y-1.5 min-h-[110px] text-gray-300">
        {lines.slice(0, visibleCount).map((line, i) => (
          <div key={i} className="whitespace-pre-wrap leading-relaxed">
            <span className="text-gray-600">[{line.time}]</span>{" "}
            <span className={levelColor[line.level] || "text-gray-400"}>{line.level}</span>{" "}
            {line.text}
          </div>
        ))}
        <span className="inline-block w-2 h-3.5 bg-[var(--color-accent)] cursor-blink align-middle" />
      </div>
    </div>
  );
}