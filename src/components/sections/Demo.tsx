import { motion } from 'framer-motion'
import { FadeUp } from '../ui/FadeUp'
import { Badge } from '../ui/Badge'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const sidebarItems = [
  { label: 'Dashboard', active: true },
  { label: 'Analytics', active: false },
  { label: 'Projects', active: false },
  { label: 'Team', active: false },
  { label: 'Settings', active: false },
]

const chartBars = [35, 58, 42, 72, 48, 85, 63]
const tableRows = [
  { name: 'NovaDash v2', status: 'Live', revenue: '$4,280' },
  { name: 'Portfolio Site', status: 'Draft', revenue: '—' },
  { name: 'E-commerce MVP', status: 'Live', revenue: '$12,450' },
]

export function Demo() {
  return (
    <section id="demo" className="section-padding">
      <Container>
        <SectionHeading
          label="Live preview"
          title="See your app come to life"
          description="Watch Coder-Z generate a full application in real-time — complete with UI, logic, and responsive design."
        />

        <FadeUp delay={0.12} className="relative mx-auto mt-10 max-w-5xl">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-b from-cyan-500/12 via-sky-500/6 to-transparent blur-2xl" />

          <motion.div
            initial={{ y: 32, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-2xl border border-[var(--color-dash-border)] dash-bg shadow-[0_32px_80px_rgba(0,0,0,0.35)]"
          >
            {/* Window chrome */}
            <div className="flex items-center gap-3 border-b dash-border px-4 py-3 dash-surface">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="mx-auto flex h-7 min-w-0 flex-1 max-w-xs items-center justify-center rounded-md border dash-border dash-elevated px-3 text-[11px] text-[var(--color-dash-muted)] sm:max-w-sm">
                app.coder-z.dev/dashboard
              </div>
              <Badge variant="dark" className="hidden sm:inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Live
              </Badge>
            </div>

            <div className="flex min-h-[420px]">
              {/* Sidebar */}
              <aside className="hidden w-52 shrink-0 border-r dash-border dash-surface p-4 sm:block">
                <div className="mb-8 flex items-center gap-2.5 px-2">
                  <div className="h-7 w-7 rounded-lg bg-cyan-500" />
                  <span className="text-sm font-semibold text-[var(--color-dash-text)]">
                    NovaDash
                  </span>
                </div>
                <nav className="space-y-0.5">
                  {sidebarItems.map((item) => (
                    <div
                      key={item.label}
                      className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        item.active
                          ? 'bg-white/[0.06] text-[var(--color-dash-text)]'
                          : 'text-[var(--color-dash-muted)] hover:bg-white/[0.03] hover:text-zinc-300'
                      }`}
                    >
                      {item.label}
                    </div>
                  ))}
                </nav>
                <div className="mt-8 rounded-xl border dash-border dash-elevated p-3">
                  <p className="text-[10px] font-medium tracking-wider text-[var(--color-dash-muted)] uppercase">
                    Usage
                  </p>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                    <div className="h-full w-[68%] rounded-full bg-cyan-500" />
                  </div>
                  <p className="mt-1.5 text-xs text-[var(--color-dash-muted)]">68% of plan used</p>
                </div>
              </aside>

              {/* Main content */}
              <div className="flex-1 p-4 sm:p-6">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-[var(--color-dash-text)]">
                      Overview
                    </h3>
                    <p className="text-sm text-[var(--color-dash-muted)]">Welcome back, Alex</p>
                  </div>
                  <button
                    type="button"
                    className="rounded-lg bg-cyan-500 px-3.5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-cyan-400"
                  >
                    + New Project
                  </button>
                </div>

                {/* Stats row */}
                <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    { label: 'Revenue', value: '$24.5k', change: '+12%', up: true },
                    { label: 'Users', value: '1,842', change: '+8%', up: true },
                    { label: 'Orders', value: '356', change: '+23%', up: true },
                    { label: 'Conversion', value: '3.2%', change: '-0.4%', up: false },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border dash-border dash-elevated p-3.5 transition-colors hover:border-zinc-600"
                    >
                      <p className="text-[11px] font-medium text-[var(--color-dash-muted)]">
                        {stat.label}
                      </p>
                      <p className="mt-1 text-lg font-semibold text-[var(--color-dash-text)]">
                        {stat.value}
                      </p>
                      <p
                        className={`mt-0.5 text-xs font-medium ${stat.up ? 'text-emerald-400' : 'text-red-400'}`}
                      >
                        {stat.change}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid gap-4 lg:grid-cols-5">
                  {/* Chart */}
                  <div className="rounded-xl border dash-border dash-elevated p-4 lg:col-span-3">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-sm font-medium text-zinc-200">Weekly performance</p>
                      <span className="rounded-md border dash-border px-2 py-0.5 text-[10px] text-[var(--color-dash-muted)]">
                        7 days
                      </span>
                    </div>
                    <div className="flex h-28 items-end justify-between gap-1.5">
                      {chartBars.map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.06 }}
                          className="flex-1 rounded-sm bg-gradient-to-t from-cyan-500 to-cyan-300/80"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Table */}
                  <div className="rounded-xl border dash-border dash-elevated p-4 lg:col-span-2">
                    <p className="mb-3 text-sm font-medium text-zinc-200">Recent projects</p>
                    <div className="space-y-2">
                      {tableRows.map((row) => (
                        <div
                          key={row.name}
                          className="flex items-center justify-between rounded-lg border border-transparent px-2 py-2 text-xs transition-colors hover:border-zinc-700 hover:bg-white/[0.02]"
                        >
                          <span className="font-medium text-zinc-300">{row.name}</span>
                          <div className="flex items-center gap-3">
                            <span
                              className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                                row.status === 'Live'
                                  ? 'bg-emerald-500/10 text-emerald-400'
                                  : 'bg-zinc-500/10 text-zinc-400'
                              }`}
                            >
                              {row.status}
                            </span>
                            <span className="text-[var(--color-dash-muted)]">{row.revenue}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute right-4 bottom-4 flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-[11px] text-cyan-300 backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
              AI generating components…
            </motion.div>
          </motion.div>
        </FadeUp>
      </Container>
    </section>
  )
}
