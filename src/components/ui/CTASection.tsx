import { FadeUp } from './FadeUp'
import { Button } from './Button'
import { Container } from './Container'
import { cn } from '../../lib/cn'

interface CTASectionProps {
  title?: string
  description?: string
  primaryLabel?: string
  secondaryLabel?: string
  footnote?: string
  className?: string
}

export function CTASection({
  title = 'Ready to build at enterprise scale?',
  description = 'Give your team an AI page builder designed for speed, collaboration, and production-ready quality — from first prompt to global deploy.',
  primaryLabel = 'Get Started Free',
  secondaryLabel = 'Watch Demo',
  footnote = 'Free for individuals · SSO & SLAs on Enterprise · No credit card required',
  className,
}: CTASectionProps) {
  return (
    <section className={cn('section-padding-sm', className)}>
      <Container>
        <FadeUp>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/70 px-6 py-16 text-center shadow-[var(--shadow-lg)] backdrop-blur-2xl sm:px-12 sm:py-20">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-50/90 via-white to-violet-50/70" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.18),transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(129,140,248,0.14),transparent_55%)]" />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.4]"
              style={{
                backgroundImage:
                  'radial-gradient(circle, rgba(99,102,241,0.14) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />

            <div className="relative">
              <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--color-ink)] sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-[var(--color-ink-secondary)] sm:text-lg">
                {description}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg">{primaryLabel}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
                <Button size="lg" variant="outline">
                  <svg className="h-4 w-4 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
                  </svg>
                  {secondaryLabel}
                </Button>
              </div>
              <p className="mt-6 text-sm text-[var(--color-ink-muted)]">{footnote}</p>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  )
}
