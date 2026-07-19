import { MapPin, Mail, CircleDot } from "lucide-react";
import { site } from "../data/site";
import Reveal from "./Reveal";

export default function About() {
  const facts = [
    { icon: MapPin, label: "Location", value: site.location },
    { icon: Mail, label: "Email", value: site.email },
    { icon: CircleDot, label: "Status", value: site.status },
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <Reveal className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10">
        <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)]">
          The Profile
        </span>
        <h2 className="font-[var(--font-display)] font-bold text-3xl md:text-4xl mt-2 mb-6">
          About Me
        </h2>

        <p className="text-[var(--color-text-muted)] leading-relaxed max-w-2xl mb-8">
          {site.bio}
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          {facts.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] p-4 transition-transform hover:-translate-y-0.5"
            >
              <Icon size={18} className="text-[var(--color-accent)] mt-0.5 shrink-0" />
              <div>
                <div className="text-xs text-[var(--color-text-muted)]">{label}</div>
                <div className="text-sm font-medium break-words">{value}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-4 text-sm">
          <div className="rounded-xl border border-[var(--color-border)] p-4">
            <div className="text-xs text-[var(--color-text-muted)]">Education</div>
            <div className="font-medium">{site.education}</div>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] p-4">
            <div className="text-xs text-[var(--color-text-muted)]">Languages</div>
            <div className="font-medium">{site.languages}</div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
