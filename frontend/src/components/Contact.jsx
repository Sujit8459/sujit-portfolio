import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { LinkedinIcon } from "./BrandIcons";
import { site } from "../data/site";
import Reveal from "./Reveal";

const API_URL = import.meta.env.VITE_API_URL || "";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    if (!API_URL) {
      setStatus("error");
      setErrorMsg(
        "Contact form isn't wired to a backend yet — set VITE_API_URL in your environment."
      );
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong sending your message.");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <Reveal className="grid md:grid-cols-2 gap-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10">
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)]">
            Inquiry
          </span>
          <h2 className="font-[var(--font-display)] font-bold text-3xl md:text-4xl mt-2 mb-4">
            Looking for a Data Engineer, SQL Developer, or Software Engineer?
          </h2>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-8 max-w-sm">
            I'm open to internships and full-time opportunities — let's talk about how I can help.
          </p>

          <div className="space-y-4">
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 group">
              <span className="w-9 h-9 grid place-items-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                <Mail size={16} />
              </span>
              <div className="text-sm">
                <div className="font-medium group-hover:text-[var(--color-accent)] transition-colors">
                  Email Me
                </div>
                <div className="text-[var(--color-text-muted)]">{site.email}</div>
              </div>
            </a>
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 group"
            >
              <span className="w-9 h-9 grid place-items-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                <LinkedinIcon size={16} />
              </span>
              <div className="text-sm">
                <div className="font-medium group-hover:text-[var(--color-accent)] transition-colors">
                  LinkedIn
                </div>
                <div className="text-[var(--color-text-muted)]">{site.linkedinUrl.replace("https://", "")}</div>
              </div>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label="Your Name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
            <Field
              label="Email Address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wide text-[var(--color-text-muted)] mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              placeholder="How can I help you with your data pipeline?"
              className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-4 py-3 text-sm outline-none focus:border-[var(--color-accent)] transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] text-white font-medium px-5 py-3 hover:bg-[var(--color-accent-hover)] active:scale-95 transition-all disabled:opacity-60 disabled:active:scale-100"
          >
            {status === "sending" ? "Sending..." : "Send Message"} <Send size={15} />
          </button>

          <div aria-live="polite" className="text-sm min-h-[1.25rem]">
            {status === "success" && (
              <p className="text-emerald-400">Message sent — I'll get back to you soon.</p>
            )}
            {status === "error" && <p className="text-red-400">{errorMsg}</p>}
          </div>

          <p className="text-xs text-[var(--color-text-muted)]">
            Messages go directly to my personal inbox. I typically respond within 24–48 hours.
          </p>
        </form>
      </Reveal>
    </section>
  );
}

function Field({ label, name, type, value, onChange, placeholder, required }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-medium uppercase tracking-wide text-[var(--color-text-muted)] mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-4 py-3 text-sm outline-none focus:border-[var(--color-accent)] transition-colors"
      />
    </div>
  );
}
