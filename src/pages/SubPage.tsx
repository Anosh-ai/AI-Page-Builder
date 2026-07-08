import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { FadeUp } from '../components/ui/FadeUp'
import { FeatureCard } from '../components/ui/FeatureCard'
import { PageHero } from '../components/ui/PageHero'
import type { SubPageContent } from '../data/navigation'

interface SubPageProps {
  content: SubPageContent
}

export function SubPage({ content }: SubPageProps) {
  return (
    <div className="pb-16 sm:pb-20">
      {/* Compact, unique hero per menu page */}
      <PageHero content={content} />

      <Container size="wide">
        <div className="grid gap-4 sm:grid-cols-2">
          {content.highlights.map((item, i) => (
            <FadeUp key={item} delay={i * 0.05}>
              <FeatureCard
                title={item}
                description={`How ${content.title} helps your team move faster with Coder-Z.`}
                icon={
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
              />
            </FadeUp>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 overflow-hidden rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-sky-50 px-6 py-8 sm:px-8"
        >
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div className="max-w-md">
              <h2 className="font-display text-xl font-bold tracking-tight text-[var(--color-ink)] sm:text-2xl">
                Try {content.title}
              </h2>
              <p className="mt-1.5 text-sm text-[var(--color-ink-secondary)]">
                Open the generator and build a production-ready draft in minutes.
              </p>
            </div>
            <Link to="/product/ai-generator">
              <Button size="md">
                Start building
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </div>
  )
}
