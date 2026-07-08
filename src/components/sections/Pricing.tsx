import { FadeUp } from '../ui/FadeUp'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { cn } from '../../lib/cn'

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'For individuals exploring AI page generation.',
    features: ['3 projects', 'AI generator', 'Export source', 'Community support'],
    cta: 'Start Free',
    featured: false,
  },
  {
    name: 'Team',
    price: '$49',
    period: 'per seat / mo',
    description: 'For product and marketing teams shipping weekly.',
    features: [
      'Unlimited projects',
      'Shared workspaces',
      'Brand presets',
      'Priority preview & deploy',
      'Email support',
    ],
    cta: 'Start Trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'annual',
    description: 'For organizations that need security and scale.',
    features: [
      'SSO & SCIM',
      'RBAC + audit logs',
      'Private templates',
      'Dedicated success',
      'Custom SLAs',
    ],
    cta: 'Talk to Sales',
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="section-padding">
      <Container>
        <SectionHeading
          animated
          label="Pricing"
          title="Simple plans that scale with your team"
          description="Start free, collaborate on Team, and unlock governance when you go enterprise."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <FadeUp key={plan.name} delay={i * 0.08}>
              <Card
                hover={!plan.featured}
                className={cn(
                  'relative flex h-full flex-col',
                  plan.featured &&
                    'border-sky-200/90 bg-gradient-to-b from-white to-sky-50/60 shadow-[var(--shadow-glow)] ring-1 ring-sky-200/60',
                )}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#22d3ee] px-3 py-1 text-[10px] font-semibold tracking-wide text-white uppercase shadow-[var(--shadow-sm)]">
                    Most popular
                  </span>
                )}
                <p className="text-sm font-semibold text-[var(--color-ink)]">{plan.name}</p>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="font-display text-4xl font-bold tracking-tight text-[var(--color-ink)]">
                    {plan.price}
                  </span>
                  <span className="text-xs text-[var(--color-ink-muted)]">{plan.period}</span>
                </div>
                <p className="mt-3 text-sm text-[var(--color-ink-secondary)]">{plan.description}</p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-[var(--color-ink-secondary)]">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-8 w-full"
                  variant={plan.featured ? 'primary' : 'outline'}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </Card>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  )
}
