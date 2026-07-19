import { FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { site } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm font-medium">
          <span className="grid place-items-center w-7 h-7 rounded-md bg-[var(--color-accent)] text-white text-xs font-bold">
            {site.initials}
          </span>
          {site.name}
        </div>

        <p className="text-xs text-[var(--color-text-muted)] text-center">
          © {year} {site.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4 text-[var(--color-text-muted)]">
          <a href={site.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-[var(--color-accent)] transition-colors">
            <GithubIcon size={17} />
          </a>
          <a href={site.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[var(--color-accent)] transition-colors">
            <LinkedinIcon size={17} />
          </a>
          <a href={site.resumeUrl} aria-label="Download resume" className="hover:text-[var(--color-accent)] transition-colors">
            <FileDown size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
