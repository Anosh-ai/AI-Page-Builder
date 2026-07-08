import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { FadeUp } from '../ui/FadeUp'

const logos = [
  'Northwind',
  'Helix Cloud',
  'Vertex Labs',
  'Brightline',
  'Cascade',
  'Orbit Pay',
  'Lumina',
  'Forgeworks',
]

export function TrustedBy() {
  return (
    <section id="trusted" className="py-12 sm:py-16">
      <Container>
        <FadeUp>
          <p className="text-center text-xs font-semibold tracking-[0.16em] text-[var(--color-ink-muted)] uppercase">
            Trusted by product teams at modern enterprises
          </p>
        </FadeUp>

        <div className="relative mt-8 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--page-bg)] to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--page-bg)] to-transparent sm:w-24" />

          <motion.div
            className="flex w-max gap-12 sm:gap-16"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <span
                key={`${logo}-${i}`}
                className="font-display shrink-0 text-sm font-semibold tracking-[0.08em] text-slate-400/90 uppercase sm:text-base"
              >
                {logo}
              </span>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
