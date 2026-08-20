import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

export function GitHubSection() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const username = siteConfig.social.github.split('/').filter(Boolean).pop();
    if (!username) {
      setError(true);
      return;
    }
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then((data: Repo[]) => setRepos(data))
      .catch(() => setError(true));
  }, []);

  return (
    <section className="relative px-6 py-32 md:py-48">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Open Source</span>
            <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              My code lives
              <br />
              <span className="text-white/40">here.</span>
            </h2>
          </div>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="Open"
            className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-white/70 transition-colors hover:border-white/40 hover:text-white"
          >
            <Github size={16} />
            GitHub Profile
          </a>
        </div>

        {repos && repos.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Open"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group flex flex-col justify-between rounded-xl border border-white/8 bg-white/[0.015] p-5 transition-colors hover:border-white/20"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-medium text-white/90">
                      {repo.name}
                    </span>
                    <ExternalLink size={14} className="text-white/30 transition-colors group-hover:text-white/70" />
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm text-white/45">
                    {repo.description || 'No description provided.'}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-4 text-xs text-white/40">
                  {repo.language && <span>{repo.language}</span>}
                  <span className="flex items-center gap-1">
                    <Star size={12} /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} /> {repo.forks_count}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-white/8 bg-white/[0.015] p-8 text-center text-white/40">
            {error
              ? 'Update your GitHub username in the config to display live repositories.'
              : 'Loading repositories…'}
          </div>
        )}
      </div>
    </section>
  );
}
