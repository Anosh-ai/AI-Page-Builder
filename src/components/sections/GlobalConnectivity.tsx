import { motion } from 'framer-motion'
import { Container } from '../ui/Container'
import { FadeUp } from '../ui/FadeUp'
import {
  WorldMapChoropleth,
  worldMapViewBoxString,
  worldToPercent,
} from './WorldMapChoropleth'

const nodes = [
  { id: 'na', x: 205, y: 395, photo: 'https://i.pravatar.cc/96?img=11' },
  { id: 'sa', x: 295, y: 595, photo: 'https://i.pravatar.cc/96?img=32' },
  { id: 'eu', x: 445, y: 385, photo: 'https://i.pravatar.cc/96?img=47' },
  { id: 'af', x: 460, y: 515, photo: 'https://i.pravatar.cc/96?img=23' },
  { id: 'as', x: 610, y: 470, photo: 'https://i.pravatar.cc/96?img=52' },
  { id: 'oc', x: 720, y: 610, photo: 'https://i.pravatar.cc/96?img=68' },
]

const connections: [string, string][] = [
  ['na', 'eu'],
  ['na', 'sa'],
  ['eu', 'af'],
  ['eu', 'as'],
  ['af', 'sa'],
  ['af', 'as'],
  ['as', 'oc'],
]

function getNode(id: string) {
  return nodes.find((n) => n.id === id)!
}

function arcPath(a: { x: number; y: number }, b: { x: number; y: number }) {
  const mx = (a.x + b.x) / 2
  const my = Math.min(a.y, b.y) - 42
  return `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`
}

export function GlobalConnectivity() {
  return (
    <section id="global" className="section-padding overflow-hidden bg-white">
      <Container>
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full border border-[var(--color-border)] bg-white px-3.5 py-1 text-xs font-medium text-[var(--color-ink-muted)]">
              Availability
            </span>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-[var(--color-ink)] sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              We are available everywhere
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[var(--color-ink-secondary)]">
              Our platform is available in all countries, will support from over 20,000+
              representatives
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.12}>
          <div className="relative mx-auto mt-14 w-full max-w-5xl">
            <div className="relative aspect-[784/458] w-full">
              <WorldMapChoropleth className="absolute inset-0 h-full w-full [&_svg]:h-full [&_svg]:w-full" />

              <svg
                viewBox={worldMapViewBoxString}
                className="pointer-events-none absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden
              >
                {connections.map(([from, to], i) => (
                  <motion.path
                    key={`${from}-${to}`}
                    d={arcPath(getNode(from), getNode(to))}
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="1.4"
                    strokeOpacity="0.75"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] }}
                  />
                ))}
              </svg>

              {nodes.map((node, i) => {
                const pos = worldToPercent(node.x, node.y)
                return (
                  <motion.div
                    key={node.id}
                    className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${pos.left}%`, top: `${pos.top}%` }}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + i * 0.08, type: 'spring', stiffness: 280 }}
                  >
                    <img
                      src={node.photo}
                      alt=""
                      className="h-9 w-9 rounded-full border-2 border-white object-cover shadow-[0_4px_14px_rgba(15,23,42,0.12)] sm:h-11 sm:w-11"
                      loading="lazy"
                    />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  )
}
