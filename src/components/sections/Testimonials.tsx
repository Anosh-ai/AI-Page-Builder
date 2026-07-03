import { FadeUp } from '../ui/FadeUp'
import { Card } from '../ui/Card'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import type { Testimonial } from '../../types'

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'Coder-Z cut our MVP timeline from 3 months to 2 days. The generated code is clean, typed, and actually maintainable. This is the future of development.',
    author: 'Sarah Chen',
    role: 'Founder & CEO',
    company: 'Flowstack',
    avatar: 'SC',
  },
  {
    id: '2',
    quote:
      "I've tried every AI coding tool out there. Coder-Z is the only one that understands design intent — not just syntax. Our team ships 10x faster now.",
    author: 'Marcus Rivera',
    role: 'Lead Engineer',
    company: 'Nexus Labs',
    avatar: 'MR',
  },
  {
    id: '3',
    quote:
      'The live preview and one-click deploy changed how we prototype. We went from idea to paying customers in a single weekend. Absolutely incredible.',
    author: 'Elena Kowalski',
    role: 'Product Designer',
    company: 'Pixel Forge',
    avatar: 'EK',
  },
]

const logos = ['Vercel', 'Stripe', 'Linear', 'Notion', 'Figma', 'Supabase']

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-3.5 w-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      <Container>
        <SectionHeading
          label="Testimonials"
          title="Loved by builders worldwide"
          description="Join thousands of developers, designers, and founders who ship faster with Coder-Z."
        />

        <FadeUp delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {logos.map((logo) => (
              <span
                key={logo}
                className="text-xs font-semibold tracking-[0.15em] text-[var(--color-ink-faint)] uppercase"
              >
                {logo}
              </span>
            ))}
          </div>
        </FadeUp>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <FadeUp key={item.id} delay={i * 0.08}>
              <Card variant="elevated" className="flex h-full flex-col">
                <StarRating />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-[var(--color-ink-secondary)]">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3 border-t border-[var(--color-border-subtle)] pt-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-ink)] text-[10px] font-bold text-white">
                    {item.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-ink)]">{item.author}</p>
                    <p className="text-xs text-[var(--color-ink-muted)]">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>
              </Card>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  )
}
