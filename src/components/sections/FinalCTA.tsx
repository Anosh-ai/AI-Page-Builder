import { FadeUp } from '../ui/FadeUp'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function FinalCTA() {
  return (
    <section className="section-padding-sm">
      <Container>
        <FadeUp>
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#0a1628] px-6 py-16 text-center sm:px-12 sm:py-20">
            <div className="absolute inset-0 mesh-gradient opacity-60" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.3),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.18),transparent_60%)]" />

            <div className="relative">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to build the future?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
                Start creating with Coder-Z today. No setup, no learning curve — just
                describe what you want and watch it happen.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-[#0a1628] shadow-[0_8px_30px_rgba(34,211,238,0.35)] ring-0 hover:from-cyan-300 hover:to-cyan-400"
                >
                  Get Started Free
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-zinc-700 bg-transparent text-zinc-300 hover:border-zinc-500 hover:bg-zinc-800/50 hover:text-white"
                >
                  View Demo
                </Button>
              </div>
              <p className="mt-6 text-sm text-zinc-500">
                Free forever for personal projects · No credit card required
              </p>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  )
}
