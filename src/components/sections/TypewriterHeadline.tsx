import { useEffect, useState } from 'react'

const LINE_1 = 'Build Stunning'
const LINE_2A = 'Websites with '
const LINE_2B = 'AI'
const TOTAL = LINE_1.length + LINE_2A.length + LINE_2B.length

const TYPE_SPEED = 70
const HOLD_AFTER_DONE = 2200

function Cursor() {
  return (
    <span className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.1em] animate-pulse rounded-sm bg-cyan-400 align-middle" />
  )
}

interface TypewriterHeadlineProps {
  className?: string
}

export function TypewriterHeadline({ className }: TypewriterHeadlineProps) {
  const [visible, setVisible] = useState(0)
  const done = visible >= TOTAL

  useEffect(() => {
    const delay = done ? HOLD_AFTER_DONE : TYPE_SPEED
    const timer = setTimeout(() => {
      setVisible((prev) => (prev >= TOTAL ? 0 : prev + 1))
    }, delay)
    return () => clearTimeout(timer)
  }, [visible, done])

  const shown1 = Math.min(LINE_1.length, visible)
  const rem = Math.max(0, visible - LINE_1.length)
  const shown2a = Math.min(LINE_2A.length, rem)
  const shown2b = Math.max(0, Math.min(LINE_2B.length, rem - LINE_2A.length))
  const cursorOnLine1 = visible <= LINE_1.length

  return (
    <h1 className={className} aria-label="Build Stunning Websites with AI">
      <span className="block min-h-[1.12em] whitespace-pre">
        {LINE_1.slice(0, shown1)}
        {cursorOnLine1 && <Cursor />}
      </span>
      <span className="block min-h-[1.12em] whitespace-pre">
        {LINE_2A.slice(0, shown2a)}
        <span className="text-gradient-cyan">{LINE_2B.slice(0, shown2b)}</span>
        {!cursorOnLine1 && <Cursor />}
      </span>
    </h1>
  )
}
