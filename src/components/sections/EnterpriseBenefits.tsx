import { FadeUp } from '../ui/FadeUp'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { IconBadge } from '../ui/IconBadge'

const benefits = [
  {
    title: 'Scalability without rewrites',
    description:
      'Reusable templates, shared components, and environment-aware deploys keep growth from becoming technical debt.',
    metric: '10x',
    metricLabel: 'faster page launch cycles',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
  },
  {
    title: 'Speed with guardrails',
    description:
      'AI drafts the first 80%. Brand rules, review flows, and typed exports protect the last 20% that matters.',
    metric: '<5 min',
    metricLabel: 'from prompt to preview',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Collaboration at scale',
    description:
      'Give marketing, design, and engineering a shared canvas with roles, comments, and change history.',
    metric: '1 workspace',
    metricLabel: 'for every stakeholder',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
]

export function EnterpriseBenefits() {
  return (
    <section id="enterprise" className="section-padding">
      <Container>
        <SectionHeading
          animated
          label="Enterprise"
          title="Built for security, speed, and collaboration"
          description="Coder-Z gives platform and marketing leaders the controls they need — without slowing the teams shipping campaigns."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {benefits.map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.08}>
              <Card className="group flex h-full flex-col">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <IconBadge>{item.icon}</IconBadge>
                  <div className="text-right">
                    <p className="font-display text-xl font-bold text-gradient-cyan">{item.metric}</p>
                    <p className="mt-0.5 text-[11px] text-[var(--color-ink-muted)]">{item.metricLabel}</p>
                  </div>
                </div>
                <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-secondary)]">
                  {item.description}
                </p>
              </Card>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  )
}
