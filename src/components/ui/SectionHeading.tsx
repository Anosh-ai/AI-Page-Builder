import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { cn } from '../../lib/cn'

interface SectionHeadingProps {
  label: string
  title: string
  description?: string
  align?: 'center' | 'left'
  className?: string
  /** Word-by-word reveal: black → cyan, plays once then stops */
  animated?: boolean
}

const ease = [0.22, 1, 0.36, 1] as const
const BRAND = '#22d3ee'
const INK = '#0b1220'

export function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  className,
  animated = false,
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const [done, setDone] = useState(false)
  const words = title.split(' ')

  // After the last word finishes, lock to cyan and stop animating
  useEffect(() => {
    if (!animated || !inView || done) return
    const totalMs = words.length * 140 + 700
    const timer = setTimeout(() => setDone(true), totalMs)
    return () => clearTimeout(timer)
  }, [animated, inView, done, words.length])

  return (
    <div
      ref={ref}
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <motion.p
        className="label-overline"
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.4, ease }}
      >
        {label}
      </motion.p>

      <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
        {animated ? (
          <span className="inline">
            {words.map((word, i) =>
              done ? (
                <span
                  key={`${word}-${i}`}
                  className="mr-[0.28em] inline-block last:mr-0"
                  style={{ color: BRAND }}
                >
                  {word}
                </span>
              ) : (
                <motion.span
                  key={`${word}-${i}`}
                  className="mr-[0.28em] inline-block last:mr-0"
                  initial={{ opacity: 0, y: 16, color: INK }}
                  animate={
                    inView
                      ? { opacity: 1, y: 0, color: BRAND }
                      : { opacity: 0, y: 16, color: INK }
                  }
                  transition={{
                    opacity: { duration: 0.35, delay: i * 0.14, ease },
                    y: { duration: 0.35, delay: i * 0.14, ease },
                    // Single black → cyan transition, no keyframe loop
                    color: {
                      duration: 0.45,
                      delay: i * 0.14 + 0.25,
                      ease: 'easeOut',
                    },
                  }}
                >
                  {word}
                </motion.span>
              ),
            )}
          </span>
        ) : (
          <motion.span
            className="inline-block text-[var(--color-ink)]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, ease }}
          >
            {title}
          </motion.span>
        )}
      </h2>

      {description && (
        <motion.p
          className={cn(
            'mt-4 max-w-xl text-base leading-relaxed text-[var(--color-ink-secondary)]',
            align === 'center' && 'mx-auto',
          )}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{
            duration: 0.4,
            delay: animated ? Math.min(words.length * 0.14 + 0.2, 1.2) : 0.1,
            ease,
          }}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
