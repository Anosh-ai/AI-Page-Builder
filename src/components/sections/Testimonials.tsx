import { FadeUp } from '../ui/FadeUp'
import { TestimonialCard } from '../ui/TestimonialCard'
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

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      <Container>
        <SectionHeading
          animated
          label="Testimonials"
          title="Loved by builders worldwide"
          description="Join thousands of developers, designers, and founders who ship faster with Coder-Z."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <FadeUp key={item.id} delay={i * 0.08}>
              <TestimonialCard
                quote={item.quote}
                author={item.author}
                role={item.role}
                company={item.company}
                avatar={item.avatar}
              />
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  )
}
