import { FadeUp } from '../ui/FadeUp'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { IconBadge } from '../ui/IconBadge'

const useCases = [
  {
    title: 'Developers',
    description:
      'Go from backlog ticket to deployable page without rebuilding the same layout twice. Keep full code ownership.',
    points: ['Typed React export', 'Local-friendly workflows', 'GitHub sync'],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: 'Product & Design Teams',
    description:
      'Collaborate on live previews instead of static mocks. Align messaging, layout, and brand before engineering handoff.',
    points: ['Shared workspaces', 'Comment & iterate', 'Brand presets'],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Enterprises',
    description:
      'Standardize landing-page quality across regions and business units — with governance that security teams trust.',
    points: ['SSO & RBAC', 'Audit trails', 'Private templates'],
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0v-.375c0-.621.504-1.125 1.125-1.125h.375" />
      </svg>
    ),
  },
]

export function UseCases() {
  return (
    <section id="use-cases" className="section-padding">
      <Container>
        <SectionHeading
          label="Use cases"
          title="Built for how modern teams actually ship"
          description="Whether you are a solo builder or a global brand team, Coder-Z fits your delivery model — not the other way around."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {useCases.map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.1}>
              <Card className="group flex h-full flex-col">
                <div className="mb-5">
                  <IconBadge>{item.icon}</IconBadge>
                </div>
                <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-secondary)]">
                  {item.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-[var(--color-border-subtle)] pt-5">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm text-[var(--color-ink-secondary)]"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  )
}
