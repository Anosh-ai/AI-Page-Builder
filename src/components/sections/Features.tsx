import { FadeUp } from '../ui/FadeUp'
import { Card } from '../ui/Card'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import type { Feature } from '../../types'

const features: Feature[] = [
  {
    id: '1',
    title: 'Instant Generation',
    description:
      'Describe your vision in plain language. Coder-Z generates full-stack applications in seconds, not weeks.',
    icon: 'sparkles',
  },
  {
    id: '2',
    title: 'Smart Architecture',
    description:
      'AI picks the optimal stack, folder structure, and patterns — so your code stays clean and scalable.',
    icon: 'layers',
  },
  {
    id: '3',
    title: 'Live Preview',
    description:
      'See changes in real-time as you iterate. Edit with prompts or dive into the generated code directly.',
    icon: 'zap',
  },
  {
    id: '4',
    title: 'One-Click Deploy',
    description:
      'Ship to production instantly. Custom domains, SSL, and global CDN included out of the box.',
    icon: 'rocket',
  },
  {
    id: '5',
    title: 'Enterprise Security',
    description:
      'SOC 2 compliant infrastructure with encrypted secrets, role-based access, and audit logs.',
    icon: 'shield',
  },
  {
    id: '6',
    title: 'Export Anywhere',
    description:
      'Own your code. Export to GitHub, download as ZIP, or continue building in your favorite IDE.',
    icon: 'code',
  },
]

const iconMap: Record<Feature['icon'], React.ReactNode> = {
  sparkles: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  ),
  zap: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  layers: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
    </svg>
  ),
  shield: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  code: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  rocket: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
}

export function Features() {
  return (
    <section id="features" className="section-padding">
      <Container>
        <SectionHeading
          label="Features"
          title="Everything you need to ship faster"
          description="From idea to production in one seamless workflow. No boilerplate, no complexity — just results."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {features.map((feature, i) => (
            <FadeUp key={feature.id} delay={i * 0.06}>
              <Card className="group h-full">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-100 bg-cyan-50 text-cyan-600 transition-colors duration-300 group-hover:border-cyan-200 group-hover:bg-cyan-100">
                  {iconMap[feature.icon]}
                </div>
                <h3 className="font-display text-base font-semibold text-[var(--color-ink)]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-secondary)]">
                  {feature.description}
                </p>
              </Card>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  )
}
