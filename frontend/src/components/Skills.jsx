import { Database, Cloud, Code2, LayoutGrid, Network } from "lucide-react";
import { skillGroups } from "../data/skills";
import Reveal from "./Reveal";

const icons = {
  database: Database,
  cloud: Cloud,
  code: Code2,
  layout: LayoutGrid,
  network: Network,
};

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <Reveal className="text-center mb-12">
        <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)]">
          Expertise
        </span>
        <h2 className="font-[var(--font-display)] font-bold text-3xl md:text-4xl mt-2">
          Technical Competencies
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.icon] || Code2;
          return (
            <Reveal key={group.category} delay={i * 80}>
              <div className="flex items-center gap-2 mb-3 text-sm font-semibold">
                <Icon size={16} className="text-[var(--color-accent)]" />
                {group.category}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs rounded-full border border-[var(--color-border)] bg-[var(--color-accent-soft)] px-3 py-1.5 text-[var(--color-text)] transition-transform hover:-translate-y-0.5 hover:border-[var(--color-accent)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
