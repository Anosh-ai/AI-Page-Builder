import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FadeUp } from '../ui/FadeUp'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { cn } from '../../lib/cn'

const HOURS_PER_PAGE_TRADITIONAL = 16
const HOURS_PER_PAGE_CODERZ = 0.5
const CODERZ_MONTHLY_PER_SEAT = 49

function formatCurrency(n: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n)
}

function formatNumber(n: number) {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(n)
}

type SliderProps = {
  label: string
  value: number
  min: number
  max: number
  step: number
  display: string
  onChange: (v: number) => void
}

function Slider({ label, value, min, max, step, display, onChange }: SliderProps) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-[var(--color-ink)]">{label}</label>
        <span className="rounded-full bg-cyan-50 px-2.5 py-0.5 text-sm font-semibold text-cyan-700">
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="roi-slider mt-3 w-full"
      />
    </div>
  )
}

export function RoiCalculator() {
  const [teamSize, setTeamSize] = useState(8)
  const [pagesPerMonth, setPagesPerMonth] = useState(12)
  const [hourlyRate, setHourlyRate] = useState(95)

  const results = useMemo(() => {
    const hoursSavedPerPage = HOURS_PER_PAGE_TRADITIONAL - HOURS_PER_PAGE_CODERZ
    const monthlyHoursSaved = hoursSavedPerPage * pagesPerMonth
    const annualHoursSaved = monthlyHoursSaved * 12
    const monthlyCostSaved = monthlyHoursSaved * hourlyRate
    const annualCostSaved = monthlyCostSaved * 12
    const annualCoderzCost = teamSize * CODERZ_MONTHLY_PER_SEAT * 12
    const netAnnualSavings = annualCostSaved - annualCoderzCost
    const roiPercent = annualCoderzCost > 0 ? (netAnnualSavings / annualCoderzCost) * 100 : 0
    const weeksSaved = annualHoursSaved / 40

    return {
      monthlyHoursSaved,
      annualHoursSaved,
      annualCostSaved,
      netAnnualSavings,
      roiPercent,
      weeksSaved,
    }
  }, [teamSize, pagesPerMonth, hourlyRate])

  const resultCards = [
    {
      label: 'Hours saved / year',
      value: formatNumber(results.annualHoursSaved),
      sub: `${formatNumber(results.monthlyHoursSaved)} hrs every month`,
    },
    {
      label: 'Cost saved / year',
      value: formatCurrency(results.annualCostSaved),
      sub: 'vs traditional dev workflow',
    },
    {
      label: 'Net savings / year',
      value: formatCurrency(Math.max(0, results.netAnnualSavings)),
      sub: 'after Coder-Z subscription',
    },
    {
      label: 'ROI',
      value: `${Math.max(0, Math.round(results.roiPercent))}%`,
      sub: `~${formatNumber(results.weeksSaved)} dev-weeks reclaimed`,
    },
  ]

  return (
    <section id="roi" className="section-padding">
      <Container>
        <SectionHeading
          animated
          label="ROI calculator"
          title="See how much time you save"
          description="Adjust your team size and output. We'll estimate hours reclaimed, cost savings, and return on your Coder-Z investment."
        />

        <FadeUp delay={0.1} className="mx-auto mt-10 max-w-4xl">
          <Card hover={false} className="overflow-hidden p-0">
            <div className="grid lg:grid-cols-[1fr_1fr]">
              <div className="border-b border-[var(--color-border-subtle)] p-6 sm:p-8 lg:border-r lg:border-b-0">
                <p className="text-xs font-semibold tracking-wide text-cyan-600 uppercase">
                  Your inputs
                </p>
                <div className="mt-6 space-y-7">
                  <Slider
                    label="Team size"
                    value={teamSize}
                    min={1}
                    max={50}
                    step={1}
                    display={`${teamSize} people`}
                    onChange={setTeamSize}
                  />
                  <Slider
                    label="Pages launched per month"
                    value={pagesPerMonth}
                    min={1}
                    max={80}
                    step={1}
                    display={`${pagesPerMonth} pages`}
                    onChange={setPagesPerMonth}
                  />
                  <Slider
                    label="Avg. developer hourly rate"
                    value={hourlyRate}
                    min={50}
                    max={200}
                    step={5}
                    display={formatCurrency(hourlyRate) + '/hr'}
                    onChange={setHourlyRate}
                  />
                </div>
                <p className="mt-6 text-[11px] leading-relaxed text-[var(--color-ink-muted)]">
                  Assumes ~{HOURS_PER_PAGE_TRADITIONAL}h per page with traditional workflows vs ~
                  {HOURS_PER_PAGE_CODERZ}h with Coder-Z. Actual results vary by team and complexity.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50/80 via-white to-sky-50/50 p-6 sm:p-8">
                <p className="text-xs font-semibold tracking-wide text-cyan-600 uppercase">
                  Your estimated impact
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {resultCards.map((card, i) => (
                    <motion.div
                      key={card.label}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="rounded-xl border border-cyan-100/80 bg-white p-4 shadow-[var(--shadow-xs)]"
                    >
                      <p className="text-[11px] font-medium text-[var(--color-ink-muted)]">
                        {card.label}
                      </p>
                      <p
                        className={cn(
                          'font-display mt-1 text-2xl font-bold tracking-tight',
                          i === 3 ? 'text-cyan-600' : 'text-[var(--color-ink)]',
                        )}
                      >
                        {card.value}
                      </p>
                      <p className="mt-1 text-[10px] text-[var(--color-ink-muted)]">{card.sub}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </FadeUp>
      </Container>
    </section>
  )
}
