import { useEffect, useRef, useState } from 'react'

const TYPE_SPEED = 42
const PAUSE_BEFORE_GENERATE = 700

interface TypewriterPromptProps {
  prompts: string[]
  /** Called when a prompt finishes typing — parent should start generation. */
  onPromptReady: (prompt: string) => void
  /** Called on each character while auto-typing. */
  onPromptChange: (text: string) => void
  /** When false, auto-typing pauses (e.g. user is editing). */
  enabled: boolean
  /** Increment to restart typing from the first prompt. */
  resetKey?: number
}

export function useTypewriterPrompt({
  prompts,
  onPromptReady,
  onPromptChange,
  enabled,
  resetKey = 0,
}: TypewriterPromptProps) {
  const [promptIndex, setPromptIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const readyRef = useRef(false)

  useEffect(() => {
    setPromptIndex(0)
    setCharIndex(0)
    readyRef.current = false
  }, [resetKey])

  useEffect(() => {
    if (resetKey > 0) onPromptChange('')
  }, [resetKey, onPromptChange])

  useEffect(() => {
    if (!enabled || prompts.length === 0) return

    const full = prompts[promptIndex % prompts.length]

    if (charIndex < full.length) {
      const t = setTimeout(() => {
        const next = charIndex + 1
        setCharIndex(next)
        onPromptChange(full.slice(0, next))
      }, TYPE_SPEED)
      return () => clearTimeout(t)
    }

    if (!readyRef.current) {
      readyRef.current = true
      const t = setTimeout(() => {
        onPromptReady(full)
      }, PAUSE_BEFORE_GENERATE)
      return () => clearTimeout(t)
    }
  }, [enabled, prompts, promptIndex, charIndex, onPromptReady, onPromptChange])

  const advanceToNextPrompt = () => {
    readyRef.current = false
    setCharIndex(0)
    setPromptIndex((i) => (i + 1) % prompts.length)
    onPromptChange('')
  }

  return { promptIndex, advanceToNextPrompt }
}

/** Blinking cursor shown at the end of auto-typed text. */
export function PromptCursor() {
  return (
    <span className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-cyan-500 align-middle" />
  )
}
