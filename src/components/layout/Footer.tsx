import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'
import type { FooterLink } from '../../types'

const productLinks: FooterLink[] = [
  { label: 'Builder', href: '#builder' },
  { label: 'AI Generator', href: '#generate' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#' },
]

const companyLinks: FooterLink[] = [
  { label: 'About', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Contact', href: '#' },
]

const resourceLinks: FooterLink[] = [
  { label: 'Docs', href: '#' },
  { label: 'Templates', href: '#' },
  { label: 'Changelog', href: '#' },
  { label: 'Support', href: '#' },
]

const socials = [
  {
    label: 'Twitter',
    href: '#',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    label: 'GitHub',
    href: '#',
    path: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z',
  },
  {
    label: 'Discord',
    href: '#',
    path: 'M20.317 4.369a19.79 19.79 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.369a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.009c.12.099.246.198.373.292a.077.077 0 01-.006.127 12.3 12.3 0 01-1.873.891.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.057c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.331c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z',
  },
]

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-semibold tracking-[0.12em] text-cyan-600 uppercase">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-[var(--color-ink-secondary)] transition-colors duration-200 hover:text-cyan-700"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--color-border-subtle)] bg-gradient-to-b from-slate-50/80 via-white to-[var(--color-surface-2)]">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-cyan-400/8 blur-[100px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(34,211,238,0.12) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <Container className="relative py-16">
        {/* CTA + newsletter row */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-[var(--color-border-subtle)] pb-12 lg:flex-row lg:items-center">
          <div className="max-w-md">
            <Logo textClassName="text-[var(--color-ink)]" />
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-secondary)]">
              The AI website builder that turns ideas into production-ready sites —
              drag, drop, generate, and ship in minutes.
            </p>
          </div>

          <div className="w-full max-w-sm">
            <p className="mb-2 text-sm font-medium text-[var(--color-ink)]">Stay in the loop</p>
            <form
              className="flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="you@company.com"
                className="h-11 flex-1 rounded-xl border border-[var(--color-border)] bg-white px-4 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-ink-muted)] transition-all focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-500/10 focus:outline-none"
              />
              <button
                type="submit"
                className="h-11 shrink-0 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 px-5 text-sm font-semibold text-[#0a1628] shadow-[0_4px_20px_rgba(34,211,238,0.25)] transition-all hover:from-cyan-300 hover:to-cyan-400"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid gap-10 py-12 sm:grid-cols-3">
          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border-subtle)] pt-8 sm:flex-row">
          <p className="text-sm text-[var(--color-ink-muted)]">
            &copy; {new Date().getFullYear()} Coder-Z. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-ink-secondary)] transition-all duration-200 hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-600"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
