import { Award, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";

const certifications = [
  {
    title: "Research Paper Publication — ICRACE 2026",
    issuer: "1st International Conference on Recent Advances in Computer Engineering, Wadia College of Engineering, Pune",
    date: "April 2026",
    url: "/certificates/smartconnect-icrace-2026.pdf",
  },
  {
    title: "Python 3.4.3",
    issuer: "Spoken Tutorial Project, IIT Bombay",
    date: null,
    url: null, // TODO: add certificate file to /public/certificates/ once available for a linked "View Certificate"
  },
];

export default function Certifications() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <Reveal>
        <div className="text-center mb-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)]">
            Verified
          </span>
          <h2 className="font-[var(--font-display)] font-bold text-3xl md:text-4xl mt-2">
            Certifications
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
            >
              <div className="flex items-start gap-3">
                <span className="w-9 h-9 grid place-items-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)] shrink-0">
                  <Award size={16} />
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold mb-1">{cert.title}</h3>
                  <p className="text-xs text-[var(--color-text-muted)] mb-1">{cert.issuer}</p>
                  {cert.date && (
                    <p className="text-xs text-[var(--color-text-muted)] mb-2">{cert.date}</p>
                  )}
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
                    >
                      View Certificate <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
