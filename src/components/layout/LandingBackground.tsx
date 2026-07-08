import { motion } from 'framer-motion'

/**
 * Soft cyan light background for the page.
 * Wave animation lives on the Hero section itself (classic placement).
 */
export function LandingBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #eef4f9 0%, #f5f8fc 30%, #f8fafc 100%)',
        }}
      />

      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle, #cbd5e1 0.75px, transparent 0.75px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="absolute -top-32 -right-24 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.16),transparent_65%)] blur-2xl" />
      <div className="absolute -top-10 left-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.12),transparent_65%)] blur-2xl" />
      <div className="absolute top-[42%] right-[8%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.08),transparent_65%)] blur-2xl" />

      <motion.div
        className="absolute top-[20%] left-[40%] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.1),transparent_70%)] blur-3xl"
        animate={{ x: [0, 30, -10, 0], y: [0, -20, 15, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
