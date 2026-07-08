import { FadeUp } from '../ui/FadeUp'
import { StepCard } from '../ui/StepCard'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const steps = [
  {
    step: '01',
    title: 'Describe your idea',
    description:
      'Type a prompt in plain English — a landing page, dashboard, or full app. Be as detailed or brief as you like.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'AI builds it instantly',
    description:
      'Coder-Z generates clean, typed code with modern UI components, responsive layouts, and best-practice architecture.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Ship to production',
    description:
      'Preview live, iterate with prompts, then deploy with one click. Export to GitHub or your IDE anytime.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding">
      <Container>
        <SectionHeading
          animated
          label="How it works"
          title="From prompt to production in three steps"
          description="No setup, no config files, no waiting. Just describe, generate, and ship."
        />

        <div className="relative mt-12">
          <div className="absolute top-[3.25rem] right-8 left-8 hidden h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent lg:block" />

          <div className="grid gap-5 lg:grid-cols-3">
            {steps.map((item, i) => (
              <FadeUp key={item.step} delay={i * 0.1}>
                <StepCard
                  step={item.step}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              </FadeUp>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
