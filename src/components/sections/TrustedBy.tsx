import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { FadeUp } from '../ui/FadeUp'
import { trustedBrands } from '../ui/BrandLogos'

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
            className="flex w-max items-center gap-14 sm:gap-20"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          >
            {[...trustedBrands, ...trustedBrands].map((brand, i) => (
              <brand.Logo key={`${brand.name}-${i}`} />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
