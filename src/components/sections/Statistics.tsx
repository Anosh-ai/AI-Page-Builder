import { FadeUp } from '../ui/FadeUp'
import { Container } from '../ui/Container'

const stats = [
  { value: '50K+', label: 'Active creators', sub: 'Building with Coder-Z' },
  { value: '2M+', label: 'Projects shipped', sub: 'In production worldwide' },
  { value: '98%', label: 'Time saved', sub: 'vs traditional dev' },
  { value: '4.9', label: 'Average rating', sub: 'From 12k+ reviews' },
]

export function Statistics() {
  return (
    <section className="relative z-10 pt-16 pb-12 sm:pt-20 sm:pb-16">
      <Container>
        <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeUp key={stat.label} delay={i * 0.08}>
              <div className="text-center lg:border-r lg:border-[var(--color-border-subtle)]/60 lg:px-6 lg:last:border-r-0">
                <p className="font-display text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-[1.75rem]">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-semibold text-[var(--color-ink)]">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-[11px] text-[var(--color-ink-muted)]">{stat.sub}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  )
}
