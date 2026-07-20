import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { site } from "../data/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrollPct, setScrollPct] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      const pct = total > 0 ? (doc.scrollTop / total) * 100 : 0;
      setScrollPct(pct);
      setScrolled(doc.scrollTop > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "backdrop-blur bg-[var(--color-bg)]/80 border-b border-[var(--color-border)]" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="flex items-center gap-2 font-[var(--font-display)] font-semibold text-lg"
        >
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-[var(--color-accent)] text-white text-sm font-bold">
            {site.initials}
          </span>
          <span>{site.name}</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-[var(--color-text-muted)]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative hover:text-[var(--color-text)] transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-[var(--color-accent)] after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 grid place-items-center rounded-lg border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className="md:hidden w-9 h-9 grid place-items-center rounded-lg border border-[var(--color-border)]"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden flex flex-col gap-1 px-6 pb-4 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="py-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <div
        className="h-[2px] bg-[var(--color-accent)] transition-[width] duration-150"
        style={{ width: `${scrollPct}%` }}
        aria-hidden="true"
      />
    </header>
  );
}