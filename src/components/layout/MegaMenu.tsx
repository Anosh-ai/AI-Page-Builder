import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import type { MegaMenuItem } from '../../types'
import { cn } from '../../lib/cn'

interface MegaMenuProps {
  open: boolean
  items: MegaMenuItem[]
  featured?: {
    title: string
    description: string
    href: string
  }
  onClose: () => void
}

export function MegaMenu({ open, items, featured, onClose }: MegaMenuProps) {
  const location = useLocation()

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="mega-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[4.5rem] z-40 bg-slate-900/10 backdrop-blur-[2px]"
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            key="mega-panel"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full right-0 left-0 z-50 mt-2"
          >
            <div className="glass-strong overflow-hidden rounded-2xl p-5 sm:p-6">
              <div
                className={cn(
                  'grid gap-6',
                  featured ? 'lg:grid-cols-[1fr_240px]' : 'grid-cols-1',
                )}
              >
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item, i) => {
                    const isActive = location.pathname === item.href
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.04 * i, duration: 0.25 }}
                      >
                        <Link
                          to={item.href}
                          onClick={onClose}
                          className={cn(
                            'group flex gap-3 rounded-xl p-3 transition-all duration-200',
                            isActive ? 'bg-cyan-50' : 'hover:bg-cyan-50/80',
                          )}
                        >
                          <span
                            className={cn(
                              'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-200',
                              isActive
                                ? 'border-cyan-200 bg-cyan-100 text-cyan-600 shadow-[0_0_0_4px_rgba(34,211,238,0.15)]'
                                : 'border-cyan-100 bg-cyan-50 text-cyan-600 group-hover:border-cyan-200 group-hover:bg-cyan-100 group-hover:text-cyan-700',
                            )}
                          >
                            {item.icon}
                          </span>
                          <span className="min-w-0">
                            <span
                              className={cn(
                                'block text-sm font-semibold',
                                isActive ? 'text-cyan-700' : 'text-[var(--color-ink)] group-hover:text-cyan-700',
                              )}
                            >
                              {item.title}
                            </span>
                            <span className="mt-0.5 block text-xs leading-relaxed text-[var(--color-ink-muted)]">
                              {item.description}
                            </span>
                          </span>
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>

                {featured && (
                  <Link
                    to={featured.href}
                    onClick={onClose}
                    className="relative overflow-hidden rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-sky-50 p-5 transition-shadow hover:shadow-[var(--shadow-md)]"
                  >
                    <div className="absolute -top-8 -right-8 h-28 w-28 rounded-full bg-cyan-300/20 blur-2xl" />
                    <p className="label-overline">Featured</p>
                    <p className="font-display mt-2 text-base font-semibold text-[var(--color-ink)]">
                      {featured.title}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-[var(--color-ink-secondary)]">
                      {featured.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-cyan-600">
                      Learn more
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
