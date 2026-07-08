import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { LandingPagePreview } from './LandingPagePreview'
import { PromptCursor, useTypewriterPrompt } from './TypewriterPrompt'
import { cn } from '../../lib/cn'

const starterPrompts = [
  'A SaaS landing page for an AI note-taking app with pricing',
  'A sleek portfolio site for a product designer',
  'An e-commerce store for handmade coffee mugs',
  'A webinar registration page with speakers and agenda',
]

const buildSteps = [
  'Analyzing your prompt',
  'Designing the layout',
  'Writing conversion copy',
  'Finalizing components',
]

const AUTO_LOOP_DELAY = 4500

type Status = 'idle' | 'generating' | 'done'

export function Generate() {
  const [prompt, setPrompt] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [stepIndex, setStepIndex] = useState(0)
  const [variant, setVariant] = useState(0)
  const [autoEnabled, setAutoEnabled] = useState(true)
  const [isTyping, setIsTyping] = useState(true)
  const [activePrompt, setActivePrompt] = useState(starterPrompts[0])
  const loopTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const previewScrollRef = useRef<HTMLDivElement>(null)

  const startGenerate = useCallback((text: string) => {
    setActivePrompt(text)
    setStepIndex(0)
    setStatus('generating')
    setIsTyping(false)
  }, [])

  const handlePromptReady = useCallback(
    (text: string) => {
      startGenerate(text)
    },
    [startGenerate],
  )

  const { advanceToNextPrompt } = useTypewriterPrompt({
    prompts: starterPrompts,
    onPromptReady: handlePromptReady,
    onPromptChange: (text) => {
      setPrompt(text)
      setIsTyping(true)
    },
    enabled: autoEnabled && status === 'idle',
  })

  useEffect(() => {
    if (status !== 'generating') return
    if (stepIndex < buildSteps.length - 1) {
      const t = setTimeout(() => setStepIndex((s) => s + 1), 650)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setStatus('done'), 700)
    return () => clearTimeout(t)
  }, [status, stepIndex])

  useEffect(() => {
    if (status !== 'done' || !autoEnabled) return
    loopTimerRef.current = setTimeout(() => {
      setVariant((v) => v + 1)
      advanceToNextPrompt()
      setStatus('idle')
      setIsTyping(true)
    }, AUTO_LOOP_DELAY)
    return () => {
      if (loopTimerRef.current) clearTimeout(loopTimerRef.current)
    }
  }, [status, autoEnabled, advanceToNextPrompt])

  // Auto-scroll the preview through the generated page once it's ready.
  useEffect(() => {
    if (status !== 'done') return
    const el = previewScrollRef.current
    if (!el) return
    el.scrollTop = 0
    let raf = 0
    const duration = 3200
    const startDelay = setTimeout(() => {
      const start = performance.now()
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / duration)
        const ease = t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2
        el.scrollTop = (el.scrollHeight - el.clientHeight) * ease
        if (t < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    }, 500)
    return () => {
      clearTimeout(startDelay)
      cancelAnimationFrame(raf)
    }
  }, [status, variant])

  const handleManualGenerate = () => {
    if (loopTimerRef.current) clearTimeout(loopTimerRef.current)
    setAutoEnabled(false)
    setIsTyping(false)
    const text = prompt.trim() || starterPrompts[0]
    setPrompt(text)
    if (status === 'done') setVariant((v) => v + 1)
    startGenerate(text)
  }

  const handlePromptFocus = () => {
    setAutoEnabled(false)
    setIsTyping(false)
  }

  return (
    <section id="generate" className="section-padding">
      <Container>
        <SectionHeading
          animated
          label="AI Generator"
          title="Describe it. Watch it build."
          description="Type your idea in plain language and Coder-Z drafts a complete, responsive page — hero, features, and CTAs included."
        />

        <div className="mx-auto mt-10 grid max-w-5xl items-stretch gap-6 lg:grid-cols-2">
          {/* Prompt panel */}
          <div className="surface-card glow-brand flex h-[500px] flex-col rounded-2xl p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold tracking-wide text-sky-600 uppercase">
                Your prompt
              </label>
              {autoEnabled && isTyping && status === 'idle' && (
                <span className="flex items-center gap-1.5 text-[10px] font-medium text-sky-600">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400" />
                  Auto-writing…
                </span>
              )}
            </div>
            <div className="relative mt-3 min-h-[128px] flex-1">
              {autoEnabled && isTyping && status === 'idle' ? (
                <div
                  className="absolute inset-0 h-full w-full cursor-text overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-4 text-sm leading-relaxed text-[var(--color-ink)]"
                  onClick={handlePromptFocus}
                  onFocus={handlePromptFocus}
                  tabIndex={0}
                  role="textbox"
                  aria-label="Your prompt, auto-writing"
                >
                  {prompt}
                  <PromptCursor />
                </div>
              ) : (
                <textarea
                  value={prompt}
                  onChange={(e) => {
                    setAutoEnabled(false)
                    setIsTyping(false)
                    setPrompt(e.target.value)
                  }}
                  onFocus={handlePromptFocus}
                  placeholder="Describe the website you want to build..."
                  className="absolute inset-0 h-full w-full resize-none rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-4 text-sm leading-relaxed text-[var(--color-ink)] placeholder:text-[var(--color-ink-muted)] transition-all duration-200 focus:border-sky-400 focus:ring-4 focus:ring-sky-500/10 focus:outline-none"
                />
              )}
            </div>

            <div className="mt-3 flex shrink-0 flex-wrap gap-2">
              {starterPrompts.map((sp) => (
                <button
                  key={sp}
                  type="button"
                  onClick={() => {
                    setAutoEnabled(false)
                    setIsTyping(false)
                    setPrompt(sp)
                  }}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-1)] px-3 py-1.5 text-xs font-medium text-[var(--color-ink-muted)] transition-all duration-200 hover:border-sky-300 hover:text-sky-600"
                >
                  {sp.length > 34 ? `${sp.slice(0, 34)}…` : sp}
                </button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              type="button"
              onClick={handleManualGenerate}
              disabled={status === 'generating'}
              className="mt-4 inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#22d3ee] text-sm font-semibold text-white shadow-[0_8px_24px_rgba(34,211,238,0.35)] transition-all hover:bg-[#06b6d4] disabled:opacity-70"
            >
              {status === 'generating' ? (
                <>
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                    <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z" />
                  </svg>
                  Generating…
                </>
              ) : (
                <>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                  {status === 'done' ? 'Regenerate' : 'Generate Landing Page'}
                </>
              )}
            </motion.button>
          </div>

          {/* Output panel — fixed height, scrolls internally */}
          <div className="relative flex h-[500px] flex-col overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] bg-[#0a1628]">
            <div className="relative flex shrink-0 items-center justify-between px-5 py-3 sm:px-6">
              <span className="flex items-center gap-2 text-xs font-medium text-cyan-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Preview
              </span>
              <span className="rounded-md border border-cyan-400/20 bg-cyan-400/10 px-2 py-0.5 text-[10px] text-cyan-300">
                coder-z.app
              </span>
            </div>

            <div
              ref={previewScrollRef}
              className="no-scrollbar relative flex-1 overflow-y-auto px-3 pb-3 sm:px-4 sm:pb-4"
            >
              <AnimatePresence mode="wait">
                {status === 'idle' && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="overflow-hidden rounded-xl opacity-60"
                  >
                    <LandingPagePreview variant={variant} compact />
                    <p className="mt-3 text-center text-xs text-zinc-500">
                      {autoEnabled ? 'Prompt writing… preview will generate automatically' : 'Enter a prompt to generate your page'}
                    </p>
                  </motion.div>
                )}

                {status === 'generating' && (
                  <motion.div
                    key="generating"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex min-h-[280px] flex-col justify-center gap-3 px-2"
                  >
                    {buildSteps.map((step, i) => (
                      <div key={step} className="flex items-center gap-3">
                        <span
                          className={cn(
                            'flex h-5 w-5 items-center justify-center rounded-full border text-[10px]',
                            i < stepIndex
                              ? 'border-cyan-400 bg-cyan-400 text-[#0a1628]'
                              : i === stepIndex
                                ? 'border-cyan-400 text-cyan-300'
                                : 'border-zinc-700 text-zinc-600',
                          )}
                        >
                          {i < stepIndex ? '✓' : i + 1}
                        </span>
                        <span
                          className={cn(
                            'text-sm',
                            i <= stepIndex ? 'text-zinc-200' : 'text-zinc-600',
                          )}
                        >
                          {step}
                          {i === stepIndex && <span className="animate-pulse">…</span>}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                )}

                {status === 'done' && (
                  <motion.div
                    key={`done-${variant}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <LandingPagePreview variant={variant} />
                    <p className="mt-3 truncate px-1 text-[11px] text-zinc-500">
                      Generated from: &ldquo;{activePrompt}&rdquo;
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
