import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeUp } from '../ui/FadeUp'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { cn } from '../../lib/cn'

const BRAND = 'Lumen Studio'
const navLinks = ['Services', 'Work', 'About', 'Contact']

const HEADING_DEFAULT = 'Digital experiences that drive real growth.'
const HEADING_ALT = 'We turn bold ideas into products people love.'
const SUBTITLE_DEFAULT =
  'We design and build modern websites and products that help ambitious brands stand out, engage users, and convert.'
const SUBTITLE_ALT =
  'From strategy to launch, our team ships polished, high-performing digital experiences your customers will remember.'

const featureCardsDefault = [
  {
    title: 'Strategy & branding',
    desc: 'Positioning, identity, and messaging that give your brand a clear, confident voice.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
      />
    ),
  },
  {
    title: 'Product design',
    desc: 'Intuitive interfaces and design systems crafted for clarity, speed, and scale.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
      />
    ),
  },
  {
    title: 'Web development',
    desc: 'Fast, reliable, SEO-ready builds engineered to perform on every device.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
      />
    ),
  },
]

type ElementId = 'heading' | 'subtitle' | 'logo' | `card-${number}`
type TextAlign = 'left' | 'center' | 'right'

interface ElementStyle {
  color: string
  fontSize: number
  fontWeight: number
  align: TextAlign
  bold: boolean
  italic: boolean
  underline: boolean
}

const defaultHeading: ElementStyle = {
  color: '#0f1729',
  fontSize: 28,
  fontWeight: 700,
  align: 'center',
  bold: true,
  italic: false,
  underline: false,
}

const defaultSubtitle: ElementStyle = {
  color: '#64748b',
  fontSize: 12,
  fontWeight: 400,
  align: 'center',
  bold: false,
  italic: false,
  underline: false,
}

function BrandLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden>
      <defs>
        <linearGradient id="lumen-mark" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22d3ee" />
          <stop offset="1" stopColor="#0891b2" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="30" height="30" rx="9" fill="url(#lumen-mark)" />
      <path
        d="M11 9v14h10"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="21" cy="11" r="2.2" fill="white" />
    </svg>
  )
}

function SelectionHandles() {
  return (
    <>
      <span className="absolute -left-1 -top-1 h-2 w-2 rounded-[2px] border border-white bg-cyan-500" />
      <span className="absolute -right-1 -top-1 h-2 w-2 rounded-[2px] border border-white bg-cyan-500" />
      <span className="absolute -bottom-1 -left-1 h-2 w-2 rounded-[2px] border border-white bg-cyan-500" />
      <span className="absolute -bottom-1 -right-1 h-2 w-2 rounded-[2px] border border-white bg-cyan-500" />
    </>
  )
}

export function Demo() {
  const [selected, setSelected] = useState<ElementId>('heading')
  const [editing, setEditing] = useState(false)
  const [saved, setSaved] = useState(false)
  const [autoPlay, setAutoPlay] = useState(true)

  const [headingText, setHeadingText] = useState(HEADING_DEFAULT)
  const [subtitleText, setSubtitleText] = useState(SUBTITLE_DEFAULT)
  const [logoText, setLogoText] = useState(BRAND)
  const [cards] = useState(featureCardsDefault)

  const [headingStyle, setHeadingStyle] = useState<ElementStyle>(defaultHeading)
  const [subtitleStyle, setSubtitleStyle] = useState<ElementStyle>(defaultSubtitle)

  const headingAreaRef = useRef<HTMLTextAreaElement>(null)
  const subtitleAreaRef = useRef<HTMLTextAreaElement>(null)

  const autosize = (el: HTMLTextAreaElement | null) => {
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight}px`
  }

  // Draft copies while editing
  const [draftHeading, setDraftHeading] = useState(headingText)
  const [draftSubtitle, setDraftSubtitle] = useState(subtitleText)
  const [draftLogo, setDraftLogo] = useState(logoText)
  const [draftHeadingStyle, setDraftHeadingStyle] = useState(defaultHeading)
  const [draftSubtitleStyle, setDraftSubtitleStyle] = useState(defaultSubtitle)

  const activeStyle =
    selected === 'heading'
      ? editing
        ? draftHeadingStyle
        : headingStyle
      : selected === 'subtitle'
        ? editing
          ? draftSubtitleStyle
          : subtitleStyle
        : null

  const updateActiveStyle = (patch: Partial<ElementStyle>) => {
    if (selected === 'heading') {
      setDraftHeadingStyle((s) => ({ ...s, ...patch }))
    } else if (selected === 'subtitle') {
      setDraftSubtitleStyle((s) => ({ ...s, ...patch }))
    }
  }

  const startEdit = () => {
    setDraftHeading(headingText)
    setDraftSubtitle(subtitleText)
    setDraftLogo(logoText)
    setDraftHeadingStyle({ ...headingStyle })
    setDraftSubtitleStyle({ ...subtitleStyle })
    setEditing(true)
    setSaved(false)
  }

  const cancelEdit = () => {
    setEditing(false)
    setSaved(false)
  }

  const saveEdit = () => {
    setHeadingText(draftHeading)
    setSubtitleText(draftSubtitle)
    setLogoText(draftLogo)
    setHeadingStyle({ ...draftHeadingStyle })
    setSubtitleStyle({ ...draftSubtitleStyle })
    setEditing(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  // Stop the self-playing demo as soon as the user interacts.
  const stopAuto = () => setAutoPlay(false)

  // Self-playing walkthrough: selects elements, tweaks styles, retypes copy and saves, then loops.
  useEffect(() => {
    if (!autoPlay) return
    let cancelled = false
    const sleep = (ms: number) =>
      new Promise<void>((resolve) => setTimeout(resolve, ms))
    const type = async (
      setter: (v: string) => void,
      text: string,
      speed = 26,
    ) => {
      for (let i = 0; i <= text.length; i++) {
        if (cancelled) return
        setter(text.slice(0, i))
        await sleep(speed)
      }
    }

    const run = async () => {
      while (!cancelled) {
        // Reset to a clean starting state each cycle.
        setEditing(false)
        setSaved(false)
        setSelected('heading')
        setHeadingText(HEADING_DEFAULT)
        setSubtitleText(SUBTITLE_DEFAULT)
        setLogoText(BRAND)
        setHeadingStyle(defaultHeading)
        setSubtitleStyle(defaultSubtitle)
        await sleep(1100)
        if (cancelled) return

        // --- Edit the heading ---
        setSelected('heading')
        await sleep(650)
        if (cancelled) return
        setDraftHeading(HEADING_DEFAULT)
        setDraftHeadingStyle(defaultHeading)
        setDraftSubtitle(SUBTITLE_DEFAULT)
        setDraftSubtitleStyle(defaultSubtitle)
        setDraftLogo(BRAND)
        setEditing(true)
        setSaved(false)
        await sleep(600)
        if (cancelled) return
        setDraftHeadingStyle((s) => ({ ...s, color: '#0891b2' }))
        await sleep(650)
        if (cancelled) return
        setDraftHeadingStyle((s) => ({ ...s, fontSize: 32 }))
        await sleep(650)
        if (cancelled) return
        await type(setDraftHeading, HEADING_ALT)
        await sleep(600)
        if (cancelled) return
        setHeadingText(HEADING_ALT)
        setHeadingStyle({ ...defaultHeading, color: '#0891b2', fontSize: 32 })
        setEditing(false)
        setSaved(true)
        await sleep(1500)
        if (cancelled) return
        setSaved(false)

        // --- Edit the subtitle ---
        setSelected('subtitle')
        await sleep(650)
        if (cancelled) return
        setDraftHeading(HEADING_ALT)
        setDraftHeadingStyle({ ...defaultHeading, color: '#0891b2', fontSize: 32 })
        setDraftSubtitle(SUBTITLE_DEFAULT)
        setDraftSubtitleStyle(defaultSubtitle)
        setEditing(true)
        setSaved(false)
        await sleep(600)
        if (cancelled) return
        setDraftSubtitleStyle((s) => ({ ...s, color: '#334155', fontSize: 13 }))
        await sleep(650)
        if (cancelled) return
        setDraftSubtitle('')
        await type(setDraftSubtitle, SUBTITLE_ALT, 14)
        await sleep(600)
        if (cancelled) return
        setSubtitleText(SUBTITLE_ALT)
        setSubtitleStyle({ ...defaultSubtitle, color: '#334155', fontSize: 13 })
        setEditing(false)
        setSaved(true)
        await sleep(1600)
        if (cancelled) return
        setSaved(false)

        // --- Highlight the logo, then a feature card ---
        setSelected('logo')
        await sleep(1200)
        if (cancelled) return
        setSelected('card-1')
        await sleep(1400)
        if (cancelled) return
      }
    }

    run()
    return () => {
      cancelled = true
    }
  }, [autoPlay])

  // Keep the editable text boxes hugging their content as size/text changes.
  useEffect(() => {
    autosize(headingAreaRef.current)
  }, [draftHeading, draftHeadingStyle.fontSize, editing, selected])

  useEffect(() => {
    autosize(subtitleAreaRef.current)
  }, [draftSubtitle, draftSubtitleStyle.fontSize, editing, selected])

  const displayHeading = editing ? draftHeading : headingText
  const displaySubtitle = editing ? draftSubtitle : subtitleText
  const displayLogo = editing ? draftLogo : logoText
  const hStyle = editing ? draftHeadingStyle : headingStyle
  const sStyle = editing ? draftSubtitleStyle : subtitleStyle

  const textDecoration = (s: ElementStyle) =>
    [s.underline ? 'underline' : 'none'].join(' ')

  const elementTag =
    selected === 'heading'
      ? '<h2>'
      : selected === 'subtitle'
        ? '<p>'
        : selected === 'logo'
          ? '<span>'
          : selected?.startsWith('card-')
            ? '<div>'
            : '—'

  return (
    <section id="demo" className="section-padding">
      <Container>
        <SectionHeading
          label="Visual editor"
          title="Edit anything, visually"
          description="Click any element to fine-tune text, colors, spacing, and layout — no code required. What you see is exactly what you ship."
        />

        <FadeUp delay={0.12} className="relative mx-auto mt-10 max-w-5xl">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-b from-cyan-500/12 via-sky-500/6 to-transparent blur-2xl" />

          <motion.div
            initial={{ y: 32, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onPointerDownCapture={stopAuto}
            className="relative overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] bg-white shadow-[0_32px_80px_rgba(15,20,25,0.14)]"
          >
            {/* Toolbar */}
            <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/80 px-3 py-2.5 sm:px-4">
              <div className="flex items-center gap-1 text-slate-400">
                <button type="button" className="flex h-6 w-6 items-center justify-center rounded-md hover:bg-slate-200/70">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button type="button" className="flex h-6 w-6 items-center justify-center rounded-md hover:bg-slate-200/70">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
              <div className="mx-auto flex h-7 min-w-0 max-w-xs flex-1 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-[11px] text-slate-400 sm:max-w-sm">
                <svg className="h-3 w-3 shrink-0 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 00-9 0v3.75m-.75 0h10.5a2.25 2.25 0 012.25 2.25v6a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25v-6a2.25 2.25 0 012.25-2.25z" />
                </svg>
                lumenstudio.coder-z.app
              </div>
              <div className="flex items-center gap-1.5">
                <AnimatePresence>
                  {autoPlay && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="hidden items-center gap-1 text-[10px] font-medium text-cyan-600 sm:flex"
                    >
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-500" />
                      Auto demo
                    </motion.span>
                  )}
                  {saved && (
                    <motion.span
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="hidden text-[10px] font-medium text-emerald-600 sm:inline"
                    >
                      Saved ✓
                    </motion.span>
                  )}
                </AnimatePresence>
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-cyan-500 text-white">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex min-h-[420px]">
              {/* Canvas */}
              <div
                className="flex-1 cursor-default bg-gradient-to-b from-slate-50 to-white p-4 sm:p-6"
                onClick={() => setSelected('heading')}
              >
                {/* Navbar */}
                <div className="flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelected('logo')
                      if (!editing) startEdit()
                    }}
                    className={cn(
                      'flex items-center gap-1.5 rounded-md px-1 py-0.5 transition-all',
                      selected === 'logo' && 'ring-2 ring-cyan-500',
                    )}
                  >
                    <BrandLogo className="h-6 w-6 shrink-0" />
                    {editing && selected === 'logo' ? (
                      <input
                        value={draftLogo}
                        onChange={(e) => setDraftLogo(e.target.value)}
                        className="w-28 border-b border-cyan-400 bg-transparent text-sm font-bold text-slate-800 outline-none"
                        onClick={(e) => e.stopPropagation()}
                      />
                    ) : (
                      <span className="text-sm font-bold text-slate-800">{displayLogo}</span>
                    )}
                  </button>
                  <div className="hidden items-center gap-4 md:flex">
                    {navLinks.map((l) => (
                      <span key={l} className="cursor-pointer text-[11px] font-medium text-slate-500 hover:text-cyan-600">
                        {l}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="hidden rounded-md px-2 py-1 text-[11px] font-medium text-slate-600 sm:inline">
                      View Work
                    </span>
                    <span className="cursor-pointer rounded-md bg-gradient-to-r from-cyan-400 to-cyan-500 px-2.5 py-1 text-[11px] font-semibold text-[#0a1628] hover:from-cyan-300 hover:to-cyan-400">
                      Start a Project
                    </span>
                  </div>
                </div>

                {/* Heading */}
                <div
                  className="relative mt-6"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelected('heading')
                  }}
                >
                  {selected === 'heading' && (
                    <div className="absolute -top-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1 rounded-lg border border-slate-200 bg-white px-1.5 py-1 shadow-[0_6px_20px_rgba(15,20,25,0.1)]">
                      {(['bold', 'italic', 'underline'] as const).map((fmt) => (
                        <button
                          key={fmt}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            if (!editing) startEdit()
                            if (fmt === 'bold') updateActiveStyle({ bold: !draftHeadingStyle.bold, fontWeight: draftHeadingStyle.bold ? 400 : 700 })
                            if (fmt === 'italic') updateActiveStyle({ italic: !draftHeadingStyle.italic })
                            if (fmt === 'underline') updateActiveStyle({ underline: !draftHeadingStyle.underline })
                          }}
                          className={cn(
                            'flex h-5 w-5 items-center justify-center rounded text-[10px] font-semibold text-slate-500 hover:bg-slate-100',
                            fmt === 'bold' && hStyle.bold && 'bg-cyan-50 text-cyan-700',
                            fmt === 'italic' && hStyle.italic && 'bg-cyan-50 text-cyan-700 italic',
                            fmt === 'underline' && hStyle.underline && 'bg-cyan-50 text-cyan-700 underline',
                          )}
                        >
                          {fmt === 'bold' ? 'B' : fmt === 'italic' ? 'I' : 'U'}
                        </button>
                      ))}
                    </div>
                  )}

                  <div
                    className={cn(
                      'relative rounded-md transition-all',
                      selected === 'heading' && 'ring-2 ring-cyan-500',
                    )}
                  >
                    {selected === 'heading' && <SelectionHandles />}
                    {editing && selected === 'heading' ? (
                      <textarea
                        ref={headingAreaRef}
                        value={draftHeading}
                        onChange={(e) => {
                          setDraftHeading(e.target.value)
                          autosize(e.target)
                        }}
                        onClick={(e) => e.stopPropagation()}
                        rows={1}
                        className="block w-full resize-none overflow-hidden bg-transparent px-2 py-1 leading-tight tracking-tight outline-none"
                        style={{
                          color: hStyle.color,
                          fontSize: hStyle.fontSize,
                          fontWeight: hStyle.bold ? 700 : hStyle.fontWeight,
                          fontStyle: hStyle.italic ? 'italic' : 'normal',
                          textDecoration: textDecoration(hStyle),
                          textAlign: hStyle.align,
                        }}
                      />
                    ) : (
                      <h3
                        className="px-2 py-1 tracking-tight"
                        style={{
                          color: hStyle.color,
                          fontSize: hStyle.fontSize,
                          fontWeight: hStyle.bold ? 700 : hStyle.fontWeight,
                          fontStyle: hStyle.italic ? 'italic' : 'normal',
                          textDecoration: textDecoration(hStyle),
                          textAlign: hStyle.align,
                        }}
                      >
                        {displayHeading}
                      </h3>
                    )}
                  </div>
                </div>

                {/* Subtitle */}
                <div
                  className="relative mx-auto mt-3 max-w-md"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelected('subtitle')
                  }}
                >
                  <div
                    className={cn(
                      'rounded-md transition-all',
                      selected === 'subtitle' && 'ring-2 ring-cyan-500',
                    )}
                  >
                    {selected === 'subtitle' && <SelectionHandles />}
                    {editing && selected === 'subtitle' ? (
                      <textarea
                        ref={subtitleAreaRef}
                        value={draftSubtitle}
                        onChange={(e) => {
                          setDraftSubtitle(e.target.value)
                          autosize(e.target)
                        }}
                        onClick={(e) => e.stopPropagation()}
                        rows={1}
                        className="block w-full resize-none overflow-hidden bg-transparent px-2 py-1 leading-relaxed outline-none"
                        style={{
                          color: sStyle.color,
                          fontSize: sStyle.fontSize,
                          textAlign: sStyle.align,
                        }}
                      />
                    ) : (
                      <p
                        className="px-2 py-1 leading-relaxed"
                        style={{
                          color: sStyle.color,
                          fontSize: sStyle.fontSize,
                          textAlign: sStyle.align,
                        }}
                      >
                        {displaySubtitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Feature cards */}
                <div className="mt-5 grid gap-3 sm:grid-cols-3" onClick={(e) => e.stopPropagation()}>
                  {cards.map((card, i) => (
                    <button
                      key={card.title}
                      type="button"
                      onClick={() => setSelected(`card-${i}` as ElementId)}
                      className={cn(
                        'rounded-xl border border-slate-100 bg-white p-3 text-left shadow-sm transition-all hover:border-cyan-200',
                        selected === `card-${i}` && 'ring-2 ring-cyan-500',
                      )}
                    >
                      <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                          {card.icon}
                        </svg>
                      </div>
                      <p className="text-xs font-semibold text-slate-800">{card.title}</p>
                      <p className="mt-1 text-[10px] leading-relaxed text-slate-500">{card.desc}</p>
                    </button>
                  ))}
                </div>

                {/* Edit bar */}
                <div
                  className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-2 py-1.5 shadow-[0_8px_24px_rgba(15,20,25,0.1)]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={startEdit}
                    className="flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-slate-600 hover:text-cyan-700"
                  >
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" />
                    </svg>
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={cancelEdit}
                    disabled={!editing}
                    className="rounded-lg px-2.5 py-1 text-[11px] font-medium text-slate-400 hover:text-slate-600 disabled:opacity-40"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={saveEdit}
                    disabled={!editing}
                    className="flex items-center gap-1 rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-500 px-2.5 py-1 text-[11px] font-semibold text-[#0a1628] hover:from-cyan-300 hover:to-cyan-400 disabled:opacity-40"
                  >
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Save Changes
                  </button>
                </div>
              </div>

              {/* Inspector sidebar */}
              <aside className="hidden w-56 shrink-0 border-l border-slate-100 bg-slate-50/60 p-3 lg:block">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Element</p>
                  <span className="rounded bg-cyan-100 px-1.5 py-0.5 text-[9px] font-semibold text-cyan-700">
                    {elementTag}
                  </span>
                </div>

                {(selected === 'heading' || selected === 'subtitle') && activeStyle && (
                  <>
                    <p className="mt-4 text-[10px] font-semibold tracking-wider text-slate-400 uppercase">Text</p>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-slate-500">Color</span>
                        <div className="flex items-center gap-1.5">
                          <input
                            type="color"
                            value={activeStyle.color}
                            onChange={(e) => {
                              if (!editing) startEdit()
                              updateActiveStyle({ color: e.target.value })
                            }}
                            className="h-6 w-6 cursor-pointer rounded border border-slate-200 bg-white p-0"
                          />
                          <span className="text-[9px] text-slate-400">{activeStyle.color}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-slate-500">Size</span>
                        <input
                          type="number"
                          min={10}
                          max={48}
                          value={activeStyle.fontSize}
                          onChange={(e) => {
                            if (!editing) startEdit()
                            updateActiveStyle({ fontSize: Number(e.target.value) })
                          }}
                          className="w-12 rounded-md border border-slate-200 bg-white px-2 py-1 text-right text-[10px] text-slate-600"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-slate-500">Weight</span>
                        <select
                          value={activeStyle.fontWeight}
                          onChange={(e) => {
                            if (!editing) startEdit()
                            updateActiveStyle({ fontWeight: Number(e.target.value) })
                          }}
                          className="w-16 rounded-md border border-slate-200 bg-white px-1 py-1 text-[10px] text-slate-600"
                        >
                          <option value={400}>400</option>
                          <option value={500}>500</option>
                          <option value={600}>600</option>
                          <option value={700}>700</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-slate-500">Align</span>
                        <div className="flex items-center gap-0.5 rounded-md border border-slate-200 bg-white p-0.5">
                          {(['left', 'center', 'right'] as TextAlign[]).map((a) => (
                            <button
                              key={a}
                              type="button"
                              onClick={() => {
                                if (!editing) startEdit()
                                updateActiveStyle({ align: a })
                              }}
                              className={cn(
                                'flex h-4 w-4 items-center justify-center rounded text-[8px] uppercase',
                                activeStyle.align === a
                                  ? 'bg-cyan-500 text-white'
                                  : 'text-slate-400 hover:bg-slate-100',
                              )}
                            >
                              {a[0]}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {selected === 'logo' && (
                  <p className="mt-4 text-[11px] leading-relaxed text-slate-500">
                    Click the logo text to rename your brand. Use Save Changes to apply.
                  </p>
                )}

                {selected?.startsWith('card-') && (
                  <p className="mt-4 text-[11px] leading-relaxed text-slate-500">
                    Feature card selected. Drag &amp; drop to reorder in the full editor.
                  </p>
                )}

                <p className="mt-4 border-t border-slate-100 pt-3 text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                  Advanced CSS
                </p>
              </aside>
            </div>
          </motion.div>

          {/* Select to edit callout */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute -bottom-6 right-4 hidden items-center gap-2 rounded-2xl border border-cyan-200 bg-white px-4 py-2.5 shadow-[0_12px_32px_rgba(34,211,238,0.25)] sm:flex"
          >
            <svg className="h-5 w-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
            <span className="font-display text-base font-semibold text-cyan-600">
              {autoPlay ? 'Auto-editing…' : 'Select to edit'}
            </span>
          </motion.div>
        </FadeUp>
      </Container>
    </section>
  )
}
