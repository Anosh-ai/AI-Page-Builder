import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

/**
 * Seamless flowing wave. The path spans two identical periods (0–2880) so
 * translating it left by one period (-50% of its own width) loops perfectly.
 */
const WAVE_LINE =
  'M0,55 C240,95 480,15 720,55 C960,95 1200,25 1440,55 C1680,95 1920,15 2160,55 C2400,95 2640,25 2880,55'
const WAVE_FILL = `${WAVE_LINE} L2880,100 L0,100 Z`

function AnimatedWave() {
  return (
    <div
      className="absolute right-0 left-0 z-10 overflow-hidden"
      style={{ top: 'calc(var(--hero-h, 640px) - 60px)' }}
    >
      <motion.svg
        viewBox="0 0 2880 100"
        preserveAspectRatio="none"
        className="block h-[70px] w-[200%] sm:h-[90px]"
        aria-hidden
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      >
        {/* soft fill blends into the content below */}
        <path d={WAVE_FILL} fill="rgba(34,211,238,0.05)" />
        {/* the animated cyan line */}
        <path
          d={WAVE_LINE}
          fill="none"
          stroke="#22d3ee"
          strokeWidth="2.5"
          opacity="0.85"
        />
      </motion.svg>
    </div>
  )
}

/**
 * Full-page light background. Soft cyan glows + a subtle dot grid give the
 * light hero some depth, with an animated cyan wave line below the hero.
 */
export function LandingBackground() {
  const rootRef = useRef<HTMLDivElement>(null)

  // Track the hero height so the animated wave always sits at its bottom.
  useEffect(() => {
    const root = rootRef.current
    const hero = document.getElementById('hero')
    if (!root || !hero) return

    const update = () => {
      root.style.setProperty('--hero-h', `${Math.round(hero.offsetHeight)}px`)
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
    >
      {/* Base wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #eef4f9 0%, #f5f8fc 30%, #f8fafc 100%)',
        }}
      />

      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle, #cbd5e1 0.75px, transparent 0.75px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Soft cyan glows for a premium SaaS feel */}
      <div className="absolute -top-32 -right-24 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.16),transparent_65%)] blur-2xl" />
      <div className="absolute -top-10 left-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.12),transparent_65%)] blur-2xl" />
      <div className="absolute top-[42%] right-[8%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.08),transparent_65%)] blur-2xl" />

      {/* Animated flowing wave line below the hero */}
      <AnimatedWave />
    </div>
  )
}
