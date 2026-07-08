import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'
import { MegaMenu } from './MegaMenu'
import { menuSections } from '../../data/navigation'
import { cn } from '../../lib/cn'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMenu(null)
        setMobileOpen(false)
      }
    }
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null)
      }
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('mousedown', onClick)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('mousedown', onClick)
    }
  }, [])

  const openMenu = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveMenu(id)
  }

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setActiveMenu(null), 160)
  }

  const activeSection = menuSections.find((s) => s.id === activeMenu)

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn('fixed top-0 right-0 left-0 z-50 transition-all duration-300', scrolled ? 'py-2.5' : 'py-4')}
    >
      <Container size="wide">
        <div ref={navRef} className="relative">
          <nav
            className={cn(
              'flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5',
              scrolled || activeMenu
                ? 'glass shadow-[var(--shadow-sm)]'
                : 'border border-white/40 bg-white/40 backdrop-blur-xl',
            )}
          >
            <Logo href="/" textClassName="text-[var(--color-ink)]" />

            <div className="hidden items-center gap-0.5 lg:flex">
              {menuSections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onMouseEnter={() => openMenu(section.id)}
                  onFocus={() => openMenu(section.id)}
                  onClick={() =>
                    setActiveMenu((prev) => (prev === section.id ? null : section.id))
                  }
                  className={cn(
                    'inline-flex items-center gap-1 rounded-xl px-3.5 py-2 text-sm font-medium transition-colors',
                    activeMenu === section.id
                      ? 'bg-sky-50 text-sky-700'
                      : 'text-[var(--color-ink-secondary)] hover:bg-white/70 hover:text-[var(--color-ink)]',
                  )}
                >
                  {section.label}
                  <svg
                    className={cn(
                      'h-3.5 w-3.5 transition-transform duration-200',
                      activeMenu === section.id && 'rotate-180',
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
              ))}
              <Link
                to="/pricing"
                className="rounded-xl px-3.5 py-2 text-sm font-medium text-[var(--color-ink-secondary)] transition-colors hover:bg-white/70 hover:text-[var(--color-ink)]"
                onMouseEnter={() => setActiveMenu(null)}
              >
                Pricing
              </Link>
            </div>

            <div className="hidden items-center gap-2 lg:flex">
              <Button variant="ghost" size="sm">
                Sign in
              </Button>
              <Link to="/product/ai-generator">
                <Button size="sm">Get Started</Button>
              </Link>
            </div>

            <button
              type="button"
              aria-label="Toggle menu"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--color-ink-secondary)] transition-colors hover:bg-white/70 lg:hidden"
              onClick={() => {
                setMobileOpen((prev) => !prev)
                setActiveMenu(null)
              }}
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

          <div
            onMouseEnter={() => activeMenu && openMenu(activeMenu)}
            onMouseLeave={scheduleClose}
          >
            <MegaMenu
              open={!!activeSection}
              items={activeSection?.items ?? []}
              featured={activeSection?.featured}
              onClose={() => setActiveMenu(null)}
            />
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="glass mt-2 max-h-[75vh] overflow-y-auto rounded-2xl p-3 lg:hidden"
            >
              <div className="flex flex-col gap-1">
                {menuSections.map((section) => (
                  <div key={section.id} className="border-b border-[var(--color-border-subtle)] py-2 last:border-0">
                    <p className="px-3 py-1.5 text-xs font-semibold tracking-wider text-sky-600 uppercase">
                      {section.label}
                    </p>
                    {section.items.map((item) => (
                      <Link
                        key={item.title}
                        to={item.href}
                        className="flex items-start gap-3 rounded-xl px-3 py-2.5 text-sm text-[var(--color-ink-secondary)] hover:bg-sky-50/80"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="mt-0.5 text-sky-600">{item.icon}</span>
                        <span>
                          <span className="block font-medium text-[var(--color-ink)]">{item.title}</span>
                          <span className="mt-0.5 block text-xs text-[var(--color-ink-muted)]">
                            {item.description}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                ))}
                <Link
                  to="/pricing"
                  className="rounded-xl px-4 py-3 text-sm font-medium text-[var(--color-ink)]"
                  onClick={() => setMobileOpen(false)}
                >
                  Pricing
                </Link>
                <div className="mt-1 flex flex-col gap-2 border-t border-[var(--color-border-subtle)] pt-3">
                  <Button variant="ghost" size="sm" className="w-full">
                    Sign in
                  </Button>
                  <Link to="/product/ai-generator" onClick={() => setMobileOpen(false)}>
                    <Button size="sm" className="w-full">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  )
}
