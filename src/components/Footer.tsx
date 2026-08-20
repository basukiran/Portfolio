import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="border-t border-white/8 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-white/35 md:flex-row">
        <span className="font-mono">
          © {new Date().getFullYear()} {siteConfig.fullName}
        </span>
        <span className="font-mono">Designed & built with intent.</span>
      </div>
    </footer>
  );
}
