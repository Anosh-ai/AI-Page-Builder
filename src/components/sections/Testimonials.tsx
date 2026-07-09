import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeUp } from '../ui/FadeUp'
import { TestimonialCard } from '../ui/TestimonialCard'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { cn } from '../../lib/cn'
import type { Testimonial } from '../../types'

const featuredVideo = {
  author: 'Sarah Chen',
  role: 'VP of Product',
  company: 'Flowstack',
  quote:
    'We replaced a 6-week agency sprint with a single afternoon in Coder-Z. Our conversion rate went up 34% on the first launch.',
  metric: '34%',
  metricLabel: 'higher conversion',
  thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=500&fit=crop&q=80',
  avatar: 'https://i.pravatar.cc/96?img=47',
}

const quoteWall = [
  {
    quote: '10× faster shipping. Zero compromise on code quality.',
    author: 'Marcus Rivera',
    company: 'Nexus Labs',
    metric: '10×',
  },
  {
    quote: 'The only AI builder our security team approved.',
    author: 'James Okonkwo',
    company: 'Meridian Health',
    metric: 'SOC 2',
  },
  {
    quote: 'From idea to paying customers in one weekend.',
    author: 'Elena Kowalski',
    company: 'Pixel Forge',
    metric: '48h',
  },
  {
    quote: 'Our marketing team finally owns the full funnel.',
    author: 'Priya Sharma',
    company: 'Scalepath',
    metric: '3 teams',
  },
]

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
  const [playing, setPlaying] = useState(false)

  return (
    <section id="testimonials" className="section-padding overflow-hidden">
      <Container>
        <SectionHeading
          animated
          label="Testimonials"
          title="Loved by builders worldwide"
          description="Join thousands of developers, designers, and founders who ship faster with Coder-Z."
        />

        <FadeUp delay={0.08} className="mt-12">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
            {/* Featured video testimonial */}
            <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] bg-white shadow-[var(--shadow-md)]">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={featuredVideo.thumbnail}
                  alt=""
                  className="h-full w-full object-cover opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/20 to-transparent" />

                <AnimatePresence>
                  {!playing ? (
                    <motion.button
                      key="play"
                      type="button"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setPlaying(true)}
                      className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                      aria-label="Play testimonial video"
                    >
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#22d3ee] text-white shadow-[0_8px_32px_rgba(34,211,238,0.45)] transition-transform hover:scale-105">
                        <svg className="ml-1 h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                      <span className="text-sm font-medium text-white/90">Watch 1:24 story</span>
                    </motion.button>
                  ) : (
                    <motion.div
                      key="playing"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8"
                    >
                      <div className="flex items-start gap-4">
                        <img
                          src={featuredVideo.avatar}
                          alt=""
                          className="h-12 w-12 rounded-full border-2 border-white/30 object-cover"
                        />
                        <div>
                          <p className="text-lg font-semibold leading-snug text-white sm:text-xl">
                            &ldquo;{featuredVideo.quote}&rdquo;
                          </p>
                          <p className="mt-3 text-sm text-cyan-300">
                            {featuredVideo.author} · {featuredVideo.role}, {featuredVideo.company}
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setPlaying(false)}
                        className="mt-4 self-start text-xs font-medium text-white/60 hover:text-white"
                      >
                        Close
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-cyan-700 shadow-sm">
                  Featured story
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
                <div>
                  <p className="font-semibold text-[var(--color-ink)]">{featuredVideo.author}</p>
                  <p className="text-sm text-[var(--color-ink-muted)]">
                    {featuredVideo.role}, {featuredVideo.company}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-display text-2xl font-bold text-cyan-600">{featuredVideo.metric}</p>
                  <p className="text-[11px] text-[var(--color-ink-muted)]">{featuredVideo.metricLabel}</p>
                </div>
              </div>
            </div>

            {/* Quote wall */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {quoteWall.map((item, i) => (
                <motion.div
                  key={item.author}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className={cn(
                    'rounded-xl border border-[var(--color-border-subtle)] bg-white p-4 shadow-[var(--shadow-xs)] transition-shadow hover:shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_8px_24px_rgba(15,23,42,0.06)]',
                    i === 0 && 'lg:col-span-1',
                  )}
                >
                  <span className="inline-block rounded-full bg-cyan-50 px-2 py-0.5 text-[10px] font-bold text-cyan-700">
                    {item.metric}
                  </span>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-[var(--color-ink)]">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <p className="mt-3 text-xs text-[var(--color-ink-muted)]">
                    {item.author} · {item.company}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeUp>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <FadeUp key={item.id} delay={0.15 + i * 0.08}>
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
