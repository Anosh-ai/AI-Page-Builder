import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from './Button'
import { Container } from './Container'
import { IconBadge } from './IconBadge'
import type { SubPageContent } from '../../data/navigation'
import { cn } from '../../lib/cn'

type HeroVariant = 'canvas' | 'split' | 'stack' | 'band' | 'mesh'

function pickVariant(path: string, category: string): HeroVariant {
  if (path.includes('ai-generator') || path.includes('live-preview')) return 'canvas'
  if (path.includes('visual-builder') || path.includes('components') || path.includes('deploy'))
    return 'split'
  if (category === 'Solutions') return 'stack'
  if (category === 'Resources' || path === '/pricing') return 'band'
  return 'mesh'
}

const variantMeta: Record<
  HeroVariant,
  { accent: string; chip: string; visualLabel: string }
> = {
  canvas: {
    accent: 'from-cyan-400/30 via-sky-300/20 to-transparent',
    chip: 'Prompt → Page',
    visualLabel: 'Live canvas',
  },
  split: {
    accent: 'from-violet-400/25 via-cyan-300/15 to-transparent',
    chip: 'Build & ship',
    visualLabel: 'Builder panel',
  },
  stack: {
    accent: 'from-indigo-400/25 via-cyan-300/15 to-transparent',
    chip: 'Team workflow',
    visualLabel: 'Workflow',
  },
  band: {
    accent: 'from-sky-400/20 via-emerald-300/10 to-transparent',
    chip: 'Learn & grow',
    visualLabel: 'Resources',
  },
  mesh: {
    accent: 'from-cyan-400/25 via-violet-300/15 to-transparent',
    chip: 'Product',
    visualLabel: 'Overview',
  },
}

function HeroVisual({ variant }: { variant: HeroVariant }) {
  if (variant === 'canvas') {
    return (
      <div className="relative h-40 w-full overflow-hidden rounded-2xl border border-cyan-200/60 bg-[#0a1628] p-4 shadow-[var(--shadow-md)] sm:h-44">
        <div className="mb-3 flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          <span className="h-2 w-2 rounded-full bg-cyan-400/40" />
          <span className="h-2 w-2 rounded-full bg-cyan-400/25" />
        </div>
        <div className="mb-2 h-2 w-28 rounded-full bg-cyan-400/70" />
        <div className="mb-2 h-1.5 w-full rounded-full bg-white/10" />
        <div className="mb-3 h-1.5 w-3/4 rounded-full bg-white/10" />
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-10 rounded-lg border border-cyan-400/20 bg-cyan-400/10" />
          ))}
        </div>
      </div>
    )
  }

  if (variant === 'split') {
    return (
      <div className="grid h-40 grid-cols-2 gap-3 sm:h-44">
        <div className="rounded-2xl border border-cyan-100 bg-white p-3 shadow-[var(--shadow-sm)]">
          <div className="mb-2 h-6 w-6 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600" />
          <div className="mb-1.5 h-1.5 w-full rounded-full bg-slate-200" />
          <div className="h-1.5 w-2/3 rounded-full bg-slate-100" />
        </div>
        <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-3 shadow-[var(--shadow-sm)]">
          <div className="mb-2 flex gap-1">
            <span className="h-5 w-8 rounded bg-violet-200/80" />
            <span className="h-5 flex-1 rounded bg-slate-100" />
          </div>
          <div className="h-16 rounded-lg border border-dashed border-violet-200 bg-white/70" />
        </div>
      </div>
    )
  }

  if (variant === 'stack') {
    return (
      <div className="relative h-40 sm:h-44">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute inset-x-2 rounded-2xl border border-white bg-white/90 p-3 shadow-[var(--shadow-sm)] backdrop-blur"
            style={{ top: i * 18, zIndex: 3 - i, transform: `scale(${1 - i * 0.04})` }}
          >
            <div className="flex items-center gap-2">
              <span className="h-7 w-7 rounded-full bg-cyan-100" />
              <div className="flex-1">
                <div className="h-1.5 w-1/2 rounded-full bg-slate-200" />
                <div className="mt-1.5 h-1.5 w-2/3 rounded-full bg-slate-100" />
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (variant === 'band') {
    return (
      <div className="flex h-40 flex-col justify-center gap-2 rounded-2xl border border-cyan-100 bg-gradient-to-r from-cyan-50 via-white to-sky-50 p-4 sm:h-44">
        {['Guide', 'Template', 'Support'].map((label) => (
          <div
            key={label}
            className="flex items-center justify-between rounded-xl border border-white bg-white/80 px-3 py-2 text-sm font-medium text-slate-700 shadow-[var(--shadow-xs)]"
          >
            {label}
            <span className="text-cyan-500">→</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-2xl border border-cyan-100 bg-white sm:h-44">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.2),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.15),transparent_55%)]" />
      <div className="relative rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold text-cyan-700">
        Coder-Z
      </div>
    </div>
  )
}

interface PageHeroProps {
  content: SubPageContent
}

export function PageHero({ content }: PageHeroProps) {
  const variant = pickVariant(content.path, content.category)
  const meta = variantMeta[variant]

  return (
    <section className="relative overflow-hidden pt-24 pb-10 sm:pt-28 sm:pb-12">
      <div
        className={cn(
          'pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-gradient-to-br blur-3xl',
          meta.accent,
        )}
        aria-hidden
      />

      <Container size="wide" className="relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap items-center gap-2"
            >
              <span className="label-overline">{content.category}</span>
              <span className="rounded-full border border-cyan-200 bg-cyan-50 px-2.5 py-0.5 text-[10px] font-semibold text-cyan-700">
                {meta.chip}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.06 }}
              className="font-display mt-3 text-3xl font-extrabold tracking-tight text-[var(--color-ink)] sm:text-4xl"
            >
              {content.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--color-ink-secondary)] sm:text-base"
            >
              {content.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <Link to="/product/ai-generator">
                <Button size="md">{content.cta ?? 'Get Started'}</Button>
              </Link>
              <Link to="/">
                <Button size="md" variant="outline">
                  Back to Home
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            <div className="mb-2 flex items-center justify-between px-1">
              <span className="text-[11px] font-medium text-[var(--color-ink-muted)]">
                {meta.visualLabel}
              </span>
              <IconBadge className="!h-8 !w-8">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
              </IconBadge>
            </div>
            <HeroVisual variant={variant} />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
