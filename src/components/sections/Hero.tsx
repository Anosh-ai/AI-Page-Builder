import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Hero3D } from './Hero3D'
import { TypewriterHeadline } from './TypewriterHeadline'

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pt-32">
      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left — content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1.5 text-xs font-medium text-cyan-300 backdrop-blur-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
                </span>
                AI Website Builder
              </span>
            </motion.div>

            <TypewriterHeadline className="font-display mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.08]" />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-4 max-w-md text-base leading-relaxed text-zinc-400 sm:text-lg lg:mx-0"
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
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-cyan-400 to-cyan-500 text-[#0a1628] shadow-[0_8px_30px_rgba(34,211,238,0.35)] ring-0 hover:from-cyan-300 hover:to-cyan-400 sm:w-auto"
              >
                Start Building Free
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-white/15 bg-white/5 text-zinc-200 hover:border-cyan-400/40 hover:bg-white/10 hover:text-white sm:w-auto"
              >
                <svg className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z" />
                </svg>
                Watch Demo
              </Button>
            </motion.div>

          </div>

          {/* Right — 3D visual */}
          <div className="relative">
            <Hero3D />
          </div>
        </div>
      </Container>
    </section>
  )
}
