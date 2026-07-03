import { motion } from 'framer-motion'
import './hero3d.css'

export function Hero3D() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="scene3d relative mx-auto h-[380px] w-full max-w-[520px] sm:h-[440px] lg:h-[500px]"
      aria-hidden
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-[90px]" />

      <div className="scene3d-stage absolute inset-0">
        {/* perspective grid floor */}
        <div className="grid-floor" />

        {/* Main browser panel */}
        <div
          className="panel3d panel3d-dark floaty"
          style={{
            width: 300,
            height: 210,
            left: '18%',
            top: '26%',
            ['--z' as string]: '0px',
          }}
        >
          <div className="flex items-center gap-1.5 border-b border-cyan-400/15 px-3 py-2.5">
            <span className="h-2 w-2 rounded-full bg-cyan-400/80" />
            <span className="h-2 w-2 rounded-full bg-cyan-400/40" />
            <span className="h-2 w-2 rounded-full bg-cyan-400/25" />
          </div>
          <div className="p-4">
            <div className="mb-3 h-2 w-24 rounded-full bg-cyan-400/60" />
            <div className="mb-2 h-1.5 w-full rounded-full bg-white/15" />
            <div className="mb-4 h-1.5 w-3/4 rounded-full bg-white/10" />
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="h-12 rounded-lg border border-cyan-400/15 bg-gradient-to-br from-cyan-400/15 to-transparent"
                />
              ))}
            </div>
            <div className="mt-4 h-6 w-24 rounded-md bg-gradient-to-r from-cyan-400 to-cyan-500" />
          </div>
        </div>

        {/* Floating light component card (front) */}
        <div
          className="panel3d floaty-2"
          style={{
            width: 150,
            height: 110,
            left: '2%',
            top: '52%',
            ['--z' as string]: '90px',
          }}
        >
          <div className="p-3">
            <div className="mb-2 h-6 w-6 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600" />
            <div className="mb-1.5 h-1.5 w-full rounded-full bg-cyan-900/15" />
            <div className="h-1.5 w-2/3 rounded-full bg-cyan-900/10" />
            <div className="mt-3 h-4 w-16 rounded-md bg-cyan-400/30" />
          </div>
        </div>

        {/* Floating stat chip (back-right) */}
        <div
          className="chip3d floaty-3"
          style={{
            width: 130,
            right: '2%',
            top: '14%',
            ['--z' as string]: '60px',
          }}
        >
          <p className="text-[10px] font-semibold tracking-wide text-cyan-700 uppercase">
            Auto Deploy
          </p>
          <p className="mt-0.5 text-lg font-bold text-[#0a1628]">98%</p>
          <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-cyan-900/10">
            <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500" />
          </div>
        </div>

        {/* Small pill chips */}
        <div
          className="chip3d floaty"
          style={{ right: '10%', top: '58%', ['--z' as string]: '120px' }}
        >
          <span className="text-[11px] font-medium text-cyan-700">⚡ AI Generated</span>
        </div>

        {/* Glowing 3D orb */}
        <div
          className="orb3d floaty-2"
          style={{
            width: 70,
            height: 70,
            left: '58%',
            top: '6%',
            ['--z' as string]: '150px',
          }}
        />
      </div>
    </motion.div>
  )
}
