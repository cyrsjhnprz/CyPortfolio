import { developer, navLinks, socials } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <a href="#home" className="text-sm font-bold uppercase tracking-[0.2em] text-white">
            {developer.name2}
          </a>
          <nav className="flex flex-wrap gap-4" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-muted hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center">
          <p>Copyright {new Date().getFullYear()} Cyrus John S. Perez. All rights reserved.</p>
          <div className="flex gap-3">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted transition hover:border-accent hover:text-white"
                  aria-label={social.label}
                >
                  <Icon size={17} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
