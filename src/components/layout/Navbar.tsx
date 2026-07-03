import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'
import { cn } from '../../lib/cn'
import type { NavLink } from '../../types'

const navLinks: NavLink[] = [
  { label: 'Builder', href: '#builder' },
  { label: 'Generate', href: '#generate' },
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Hero is light now, so the navbar always uses light-on-light styling.
  const onDark = false

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
        scrolled ? 'py-3' : 'py-4',
      )}
    >
      <Container>
        <nav
          className={cn(
            'flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5',
            scrolled
              ? 'glass border-[var(--color-border-subtle)] shadow-[var(--shadow-sm)]'
              : 'border border-white/10 bg-white/5 backdrop-blur-md',
          )}
        >
          <Logo
            textClassName={cn(
              'transition-colors',
              onDark ? 'text-white' : 'text-[var(--color-ink)]',
            )}
          />

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-lg px-3.5 py-2 text-sm font-medium transition-colors',
                  onDark
                    ? 'text-zinc-300 hover:bg-white/10 hover:text-white'
                    : 'text-[var(--color-ink-secondary)] hover:bg-[var(--color-surface-3)] hover:text-[var(--color-ink)]',
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Button
              variant="ghost"
              size="sm"
              className={onDark ? 'text-zinc-300 hover:bg-white/10 hover:text-white' : undefined}
            >
              Sign in
            </Button>
            <Button
              size="sm"
              className={
                onDark
                  ? 'bg-cyan-400 text-[#0a1628] ring-0 hover:bg-cyan-300'
                  : 'bg-cyan-500 text-white ring-0 hover:bg-cyan-600'
              }
            >
              Get Started
            </Button>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:hidden',
              onDark
                ? 'text-zinc-300 hover:bg-white/10'
                : 'text-[var(--color-ink-secondary)] hover:bg-[var(--color-surface-3)]',
            )}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              'mt-2 rounded-2xl p-3 md:hidden',
              onDark ? 'border border-white/10 bg-[#0a1628]/90 backdrop-blur-xl' : 'glass',
            )}
          >
            <div className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'rounded-xl px-4 py-3 text-sm font-medium',
                    onDark
                      ? 'text-zinc-300 hover:bg-white/10 hover:text-white'
                      : 'text-[var(--color-ink-secondary)] hover:bg-[var(--color-surface-2)]',
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div
                className={cn(
                  'mt-2 flex flex-col gap-2 border-t pt-3',
                  onDark ? 'border-white/10' : 'border-[var(--color-border-subtle)]',
                )}
              >
                <Button variant="ghost" size="sm" className="w-full">
                  Sign in
                </Button>
                <Button
                  size="sm"
                  className={cn(
                    'w-full ring-0',
                    onDark
                      ? 'bg-cyan-400 text-[#0a1628] hover:bg-cyan-300'
                      : 'bg-cyan-500 text-white hover:bg-cyan-600',
                  )}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </Container>
    </motion.header>
  )
}
