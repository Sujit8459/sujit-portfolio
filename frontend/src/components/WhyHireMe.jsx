import { Check } from "lucide-react";
import Reveal from "./Reveal";

const points = [
  "Strong SQL & database design",
  "Hands-on ETL pipeline development with PySpark",
  "Apache Airflow orchestration experience",
  "Google Cloud Platform experience (BigQuery, Dataproc, Cloud Composer, Looker)",
  "Full-stack development (React, Node.js, Express, MongoDB)",
  "Adaptable, collaborative, and a quick learner",
];

export default function WhyHireMe() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <Reveal className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10">
        <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)]">
          Why Hire Me
        </span>
        <h2 className="font-[var(--font-display)] font-bold text-3xl md:text-4xl mt-2 mb-8">
          What I Bring
        </h2>

        <ul className="grid sm:grid-cols-2 gap-4">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-sm transition-transform hover:translate-x-1">
              <span className="w-5 h-5 grid place-items-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)] shrink-0 mt-0.5">
                <Check size={12} strokeWidth={3} />
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
