import { FileText, BookOpen } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { projects } from "../data/projects";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <Reveal className="flex items-end justify-between mb-10">
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)]">
            Work Archive
          </span>
          <h2 className="font-[var(--font-display)] font-bold text-3xl md:text-4xl mt-2">
            Selected Engineering Projects
          </h2>
          <p className="text-[var(--color-text-muted)] mt-3 max-w-xl">
            Data pipelines, ETL systems, and a full-stack application — built and shipped,
            not just described.
          </p>
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 100}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden flex flex-col h-full transition-all duration-300 hover:border-[var(--color-accent)]/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--color-accent)]/5">
      <div className="h-16 border-b border-[var(--color-border)] bg-[var(--color-bg-soft)]">
        {project.thumbnailType === "schematic" ? (
          <MedallionSchematic />
        ) : (
          <ChatSchematic />
        )}
      </div>

      <div className="p-3.5 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1.5 mb-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] rounded-full border border-[var(--color-border)] px-1.5 py-0.5 text-[var(--color-text-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-[var(--font-display)] font-semibold text-sm mb-1.5">
          {project.title}
        </h3>

        {project.publication && (
          <div className="flex items-start gap-1.5 mb-2 text-[10px] text-[var(--color-accent)]">
            <BookOpen size={11} className="mt-0.5 shrink-0" />
            <span>
              Published research — {project.publication.venue}
              {project.publication.url && (
                <>
                  {" · "}
                  <a
                    href={project.publication.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-[var(--color-accent-hover)]"
                  >
                    Read paper
                  </a>
                </>
              )}
            </span>
          </div>
        )}

        <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-2.5 flex-1 line-clamp-2">
          {project.summary}
        </p>

        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {project.metrics.slice(0, 2).map((metric) => (
              <span
                key={metric}
                className="text-[10px] font-medium rounded-md bg-[var(--color-accent-soft)] text-[var(--color-accent)] px-1.5 py-0.5"
              >
                {metric}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-2">
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-medium rounded-lg border border-[var(--color-border)] px-2.5 py-1 hover:border-[var(--color-accent)] transition-colors"
            >
              <GithubIcon size={12} /> Code
            </a>
          )}
          {!project.codeUrl && (
            <span className="text-[10px] text-[var(--color-text-muted)] italic self-center">
              Code link coming soon
            </span>
          )}
          {project.caseStudyUrl && (
            <a
              href={project.caseStudyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-medium rounded-lg bg-[var(--color-accent)] text-white px-2.5 py-1 hover:bg-[var(--color-accent-hover)] transition-colors"
            >
              <FileText size={12} /> Case Study
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

// Simple SVG schematic: Bronze -> Silver -> Gold medallion flow.
// Used instead of a stock photo since these projects have no UI to screenshot.
function MedallionSchematic() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-full" role="img" aria-label="Bronze, Silver, Gold medallion pipeline diagram">
      <rect width="400" height="160" fill="var(--color-bg-soft)" />
      {[
        { x: 40, label: "Bronze", color: "#b45309" },
        { x: 185, label: "Silver", color: "#94a3b8" },
        { x: 330, label: "Gold", color: "var(--color-accent)" },
      ].map((stage, i) => (
        <g key={stage.label}>
          <circle cx={stage.x} cy="70" r="26" fill="none" stroke={stage.color} strokeWidth="2.5" />
          <circle cx={stage.x} cy="70" r="4" fill={stage.color} />
          <text x={stage.x} y="120" textAnchor="middle" fontSize="11" fill="var(--color-text-muted)" fontFamily="monospace">
            {stage.label}
          </text>
          {i < 2 && (
            <line
              x1={stage.x + 30}
              y1="70"
              x2={stage.x + 115}
              y2="70"
              stroke="var(--color-border)"
              strokeWidth="2"
              markerEnd="url(#arrow)"
            />
          )}
        </g>
      ))}
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="var(--color-border)" />
        </marker>
      </defs>
    </svg>
  );
}

function ChatSchematic() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-full" role="img" aria-label="Chat bubbles diagram">
      <rect width="400" height="160" fill="var(--color-bg-soft)" />
      <rect x="60" y="45" width="140" height="40" rx="12" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" />
      <rect x="220" y="80" width="120" height="36" rx="12" fill="none" stroke="var(--color-border)" strokeWidth="2.5" />
      <circle cx="90" cy="65" r="4" fill="var(--color-accent)" />
      <circle cx="250" cy="98" r="4" fill="var(--color-text-muted)" />
    </svg>
  );
}
