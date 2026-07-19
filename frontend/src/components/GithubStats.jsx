import { useEffect, useState } from "react";
import { site } from "../data/site";

const username = site.githubUrl.replace(/\/$/, "").split("/").pop();

export default function GithubStats() {
  const [stats, setStats] = useState(null);
  const [status, setStatus] = useState("loading"); // loading | ready | error

  useEffect(() => {
    let cancelled = false;

    async function fetchStats() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100`),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API request failed");

        const user = await userRes.json();
        const repos = await reposRes.json();

        const totalStars = Array.isArray(repos)
          ? repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0)
          : 0;

        if (!cancelled) {
          setStats({
            publicRepos: user.public_repos ?? 0,
            followers: user.followers ?? 0,
            totalStars,
          });
          setStatus("ready");
        }
      } catch (err) {
        if (!cancelled) setStatus("error");
      }
    }

    fetchStats();
    return () => {
      cancelled = true;
    };
  }, []);

  // Fails quietly — a broken GitHub stats widget looks worse than no widget.
  if (status === "error") return null;

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <StatCard label="Public Repos" value={stats?.publicRepos} loading={status === "loading"} />
      <StatCard label="Followers" value={stats?.followers} loading={status === "loading"} />
      <StatCard label="Total Stars" value={stats?.totalStars} loading={status === "loading"} />
    </div>
  );
}

function StatCard({ label, value, loading }) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-4 min-w-[120px] text-center">
      <div className="text-2xl font-bold font-[var(--font-display)] text-[var(--color-accent)]">
        {loading ? "—" : value}
      </div>
      <div className="text-xs text-[var(--color-text-muted)] mt-1">{label}</div>
    </div>
  );
}
