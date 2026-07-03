import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeUp } from '../ui/FadeUp'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { cn } from '../../lib/cn'
import type { FAQItem } from '../../types'

const faqs: FAQItem[] = [
  {
    id: '1',
    question: 'What can I build with Coder-Z?',
    answer:
      'Anything from landing pages and dashboards to full-stack SaaS applications. Describe your idea in plain language and Coder-Z generates production-ready React, TypeScript, and Tailwind code.',
  },
  {
    id: '2',
    question: 'Do I own the code that gets generated?',
    answer:
      'Yes, completely. Export to GitHub, download as a ZIP, or continue editing in your IDE. There are no vendor lock-ins — the code is yours.',
  },
  {
    id: '3',
    question: 'Is there a free plan available?',
    answer:
      'Coder-Z offers a generous free tier for personal projects. No credit card required to get started. Paid plans unlock more generations, team features, and priority support.',
  },
  {
    id: '4',
    question: 'How does Coder-Z compare to traditional development?',
    answer:
      'Most users report 10–50x faster time-to-ship. Coder-Z handles boilerplate, architecture decisions, and UI polish so you can focus on your product logic and business goals.',
  },
  {
    id: '5',
    question: 'Can I deploy directly from Coder-Z?',
    answer:
      'Yes. One-click deploy includes custom domains, SSL certificates, and a global CDN. You can also connect your own Vercel or Netlify account.',
  },
]

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null)

  return (
    <section id="faq" className="section-padding">
      <Container>
        <SectionHeading
          label="FAQ"
          title="Common questions"
          description="Everything you need to know about Coder-Z. Can't find an answer? Reach out to our team."
        />

        <div className="mx-auto mt-10 max-w-2xl divide-y divide-[var(--color-border-subtle)]">
          {faqs.map((item, i) => {
            const isOpen = openId === item.id
            return (
              <FadeUp key={item.id} delay={i * 0.05}>
                <div className="py-1">
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="flex w-full items-center justify-between gap-4 rounded-xl px-2 py-5 text-left transition-colors hover:bg-[var(--color-surface-2)]"
                  >
                    <span className="font-display text-sm font-semibold text-[var(--color-ink)] sm:text-base">
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        'flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-1)] text-[var(--color-ink-muted)] transition-transform duration-200',
                        isOpen && 'rotate-45',
                      )}
                    >
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-2 pb-5 text-sm leading-relaxed text-[var(--color-ink-secondary)]">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
