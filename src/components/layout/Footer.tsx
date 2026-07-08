import { Link } from 'react-router-dom'
import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'
import type { FooterLink } from '../../types'

const productLinks: FooterLink[] = [
  { label: 'AI Generator', href: '/product/ai-generator' },
  { label: 'Visual Builder', href: '/product/visual-builder' },
  { label: 'Live Preview', href: '/product/live-preview' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Code Export', href: '/product/code-export' },
]

const solutionLinks: FooterLink[] = [
  { label: 'Developers', href: '/solutions/developers' },
  { label: 'Product Teams', href: '/solutions/product-teams' },
  { label: 'Enterprises', href: '/solutions/enterprises' },
  { label: 'Agencies', href: '/solutions/agencies' },
]

const resourceLinks: FooterLink[] = [
  { label: 'Documentation', href: '/resources/docs' },
  { label: 'Templates', href: '/resources/templates' },
  { label: 'Customer Stories', href: '/resources/stories' },
  { label: 'Support', href: '/resources/support' },
]

const companyLinks: FooterLink[] = [
  { label: 'About', href: '/' },
  { label: 'Changelog', href: '/resources/changelog' },
  { label: 'Community', href: '/resources/community' },
  { label: 'Contact', href: '/resources/support' },
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
    label: 'LinkedIn',
    href: '#',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
]

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-semibold tracking-[0.14em] text-sky-600 uppercase">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.href}
              className="text-sm text-[var(--color-ink-secondary)] transition-colors duration-200 hover:text-sky-700"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--color-border-subtle)] bg-gradient-to-b from-white/60 via-white to-[var(--color-surface-2)]">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[640px] -translate-x-1/2 rounded-full bg-sky-400/10 blur-[100px]" />
      <div className="pointer-events-none absolute top-20 right-[10%] h-48 w-48 rounded-full bg-violet-400/10 blur-[80px]" />

      <Container className="relative py-16" size="wide">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-[var(--color-border-subtle)] pb-12 lg:flex-row lg:items-center">
          <div className="max-w-md">
            <Logo textClassName="text-[var(--color-ink)]" />
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-secondary)]">
              The enterprise AI page builder that turns ideas into production-ready sites —
              generate, collaborate, and ship with governance built in.
            </p>
          </div>

          <div className="w-full max-w-sm">
            <p className="mb-2 text-sm font-medium text-[var(--color-ink)]">Stay in the loop</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@company.com"
                className="h-11 flex-1 rounded-xl border border-[var(--color-border)] bg-white/80 px-4 text-sm text-[var(--color-ink)] shadow-[var(--shadow-xs)] backdrop-blur-sm placeholder:text-[var(--color-ink-muted)] transition-all focus:border-sky-400/60 focus:ring-4 focus:ring-sky-500/10 focus:outline-none"
              />
              <button
                type="submit"
                className="h-11 shrink-0 rounded-full bg-[#22d3ee] px-5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(34,211,238,0.35)] transition-all hover:bg-[#06b6d4]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Solutions" links={solutionLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />
          <FooterColumn title="Company" links={companyLinks} />
        </div>

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
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--color-border)] bg-white/80 text-[var(--color-ink-secondary)] shadow-[var(--shadow-xs)] transition-all duration-200 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600"
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
