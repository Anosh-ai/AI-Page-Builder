import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { NeuralNetwork } from './NeuralNetwork'

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: `${(i * 17 + 7) % 100}%`,
  y: `${(i * 23 + 11) % 65}%`,
  size: i % 3 === 0 ? 3 : i % 3 === 1 ? 2 : 1.5,
  delay: i * 0.15,
  duration: 3 + (i % 5),
}))

const STREAKS = [
  { top: '18%', width: '35%', delay: 0 },
  { top: '42%', width: '28%', delay: 1.2 },
  { top: '58%', width: '40%', delay: 2.4 },
]

function FloatingParticles() {
  return (
    <>
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
          }}
          animate={{
            opacity: [0.15, 0.6, 0.15],
            y: [0, -12, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </>
  )
}

function LightStreaks() {
  return (
    <>
      {STREAKS.map((s, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
          style={{ top: s.top, width: s.width, left: `${15 + i * 20}%` }}
          animate={{ opacity: [0, 0.7, 0], x: [0, 30, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: s.delay }}
        />
      ))}
    </>
  )
}

function WaveTransition() {
  return (
    <div
      className="absolute right-0 left-0 z-10"
      style={{ top: 'calc(var(--dark-h) - 80px)' }}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="block h-[80px] w-full sm:h-[100px]"
        aria-hidden
      >
        <path
          d="M0,55 C240,95 480,15 720,55 C960,95 1200,25 1440,55 L1440,100 L0,100 Z"
          fill="#eef4f9"
        />
        <path
          d="M0,55 C240,95 480,15 720,55 C960,95 1200,25 1440,55"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="2.5"
          opacity="0.9"
        />
      </svg>
    </div>
  )
}

export function LandingBackground() {
  const rootRef = useRef<HTMLDivElement>(null)

  // Match the dark zone height to the actual hero height so the wave
  // transition always lands at the hero's bottom — consistent on every
  // screen size instead of drifting with viewport height.
  useEffect(() => {
    const root = rootRef.current
    const hero = document.getElementById('hero')
    if (!root || !hero) return

    const update = () => {
      root.style.setProperty('--dark-h', `${Math.round(hero.offsetHeight)}px`)
    }

    update()
    const ro = new ResizeObserver(update)
    ro.observe(hero)
    window.addEventListener('resize', update)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div
      ref={rootRef}
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden
      style={{ ['--dark-h' as string]: '860px' }}
    >
      {/* ── Dark hero zone ── */}
      <div
        className="absolute inset-x-0 top-0"
        style={{
          height: 'var(--dark-h)',
          background: 'linear-gradient(180deg, #030712 0%, #0a1628 45%, #0d2137 100%)',
        }}
      >
        <NeuralNetwork />
        <FloatingParticles />
        <LightStreaks />

        {/* Corner vignettes */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,transparent_40%,rgba(3,7,18,0.6)_100%)]" />
      </div>

      <WaveTransition />

      {/* ── Light content zone (rest of page) ── */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          top: 'calc(var(--dark-h) - 80px)',
          background: 'linear-gradient(180deg, #eef4f9 0%, #f5f8fc 8%, #f8fafc 100%)',
        }}
      >
        {/* Subtle light-section texture */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'radial-gradient(circle, #cbd5e1 0.75px, transparent 0.75px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(34,211,238,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(34,211,238,0.03),transparent_45%)]" />
      </div>
    </div>
  )
}
