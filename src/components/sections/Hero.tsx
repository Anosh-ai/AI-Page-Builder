import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Hero3D } from './Hero3D'
import { TypewriterHeadline } from './TypewriterHeadline'

/** Seamless looping cyan wave — same as the classic hero */
const WAVE_LINE =
  'M0,55 C240,95 480,15 720,55 C960,95 1200,25 1440,55 C1680,95 1920,15 2160,55 C2400,95 2640,25 2880,55'
const WAVE_FILL = `${WAVE_LINE} L2880,100 L0,100 Z`

function HeroWave() {
  return (
    <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-20 overflow-hidden leading-none">
      <motion.svg
        viewBox="0 0 2880 100"
        preserveAspectRatio="none"
        className="block h-[70px] w-[200%] sm:h-[90px]"
        aria-hidden
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      >
        <path d={WAVE_FILL} fill="rgba(34,211,238,0.05)" />
        <path
          d={WAVE_LINE}
          fill="none"
          stroke="#22d3ee"
          strokeWidth="2.5"
          opacity="0.9"
        />
      </motion.svg>
    </div>
  )
}

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-24 pb-24 sm:pt-28 sm:pb-28 lg:pt-32 lg:pb-32">
      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left — content (unchanged copy & sizes) */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200 bg-cyan-50 px-3.5 py-1.5 text-xs font-medium text-cyan-700 backdrop-blur-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-500" />
                </span>
                AI Website Builder
              </span>
            </motion.div>

            <TypewriterHeadline className="font-display mt-5 text-4xl font-extrabold tracking-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl lg:leading-[1.08]" />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[var(--color-ink-secondary)] sm:text-lg lg:mx-0"
            >
              Create beautiful, responsive, production-ready websites in minutes using AI.
              Simply describe your idea, customize visually, and publish instantly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
            >
              <Link to="/product/ai-generator">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Building Free
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </Link>
              <a href="#demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-[var(--color-border)] bg-[var(--color-surface-1)] text-[var(--color-ink-secondary)] hover:border-cyan-300 hover:bg-cyan-50/50 hover:text-cyan-700 sm:w-auto"
                >
                  <svg className="h-4 w-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
                  </svg>
                  Watch Demo
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Right — 3D visual */}
          <div className="relative">
            <Hero3D />
          </div>
        </div>
      </Container>

      {/* Classic flowing cyan wave at hero bottom */}
      <HeroWave />
    </section>
  )
}
