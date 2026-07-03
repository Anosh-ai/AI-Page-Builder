import { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { previewImages, imageVariants } from './LandingPagePreview'
import { cn } from '../../lib/cn'

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=520&fit=crop&q=80'

function handleImgError(e: React.SyntheticEvent<HTMLImageElement>) {
  const el = e.currentTarget
  if (el.src !== FALLBACK_IMAGE) el.src = FALLBACK_IMAGE
}

type BlockType = 'navbar' | 'heading' | 'text' | 'image' | 'button' | 'features' | 'form'

interface PaletteItem {
  type: BlockType
  label: string
  icon: ReactNode
}

interface CanvasBlock {
  key: string
  type: BlockType
}

const palette: PaletteItem[] = [
  {
    type: 'navbar',
    label: 'Navbar',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    ),
  },
  {
    type: 'heading',
    label: 'Heading',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3.75v16.5M17.25 3.75v16.5M6.75 12h10.5" />
    ),
  },
  {
    type: 'text',
    label: 'Text',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5M3.75 9.75h16.5M3.75 14.25h10.5M3.75 18.75h10.5" />
    ),
  },
  {
    type: 'image',
    label: 'Image',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022 18.75V5.25A2.25 2.25 0 0019.75 3H4.25A2.25 2.25 0 002 5.25v13.5A2.25 2.25 0 004.25 21z" />
    ),
  },
  {
    type: 'button',
    label: 'Button',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 8.25h10.5a2.25 2.25 0 012.25 2.25v3a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 13.5v-3A2.25 2.25 0 016.75 8.25z" />
    ),
  },
  {
    type: 'features',
    label: 'Features',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25A2.25 2.25 0 018.25 10.5H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25A2.25 2.25 0 0113.5 8.25V6z" />
    ),
  },
  {
    type: 'form',
    label: 'Form',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5v4.5H3.75v-4.5zm0 9h16.5v4.5H3.75v-4.5z" />
    ),
  },
]

function BlockPreview({ type }: { type: BlockType }) {
  switch (type) {
    case 'navbar':
      return (
        <div className="flex items-center justify-between rounded-lg bg-white px-3 py-2">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400 to-cyan-600 text-[9px] font-bold text-white">
              Z
            </div>
            <span className="text-xs font-bold text-slate-900">
              Coder<span className="text-cyan-500">-Z</span>
            </span>
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            {['Features', 'Pricing'].map((l) => (
              <span key={l} className="text-[10px] text-slate-500">{l}</span>
            ))}
          </div>
          <span className="rounded-md bg-cyan-400 px-2 py-1 text-[10px] font-semibold text-[#0a1628]">
            Get Started
          </span>
        </div>
      )
    case 'heading':
      return (
        <div className="py-1">
          <h3 className="text-lg font-bold text-slate-900">
            Build stunning websites{' '}
            <span className="text-cyan-500">with AI</span>
          </h3>
          <p className="mt-1 text-xs text-slate-500">
            Ship production-ready pages in minutes.
          </p>
        </div>
      )
    case 'text':
      return (
        <p className="text-sm leading-relaxed text-slate-600">
          Coder-Z transforms your ideas into beautiful, responsive websites. Describe
          what you want — our AI handles design, layout, and deployment automatically.
        </p>
      )
    case 'image':
      return (
        <div className="overflow-hidden rounded-lg border border-slate-100 bg-slate-100">
          <img
            src={previewImages.workspace}
            alt="Developer workspace"
            className="h-36 w-full object-cover sm:h-44"
            onError={handleImgError}
          />
          <p className="bg-slate-50 px-3 py-1.5 text-[10px] text-slate-400">
            workspace.jpg · AI-selected image
          </p>
        </div>
      )
    case 'button':
      return (
        <div className="flex flex-wrap items-center gap-2 py-1">
          <span className="rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-[#0a1628] shadow-[0_4px_14px_rgba(34,211,238,0.35)]">
            Start Building Free
          </span>
          <span className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-600">
            Watch Demo
          </span>
        </div>
      )
    case 'features':
      return (
        <div className="grid gap-2 sm:grid-cols-3">
          {[
            { title: 'AI Generation', img: previewImages.gallery1 },
            { title: 'Live Preview', img: previewImages.gallery2 },
            { title: 'One-Click Deploy', img: previewImages.gallery3 },
          ].map((f) => (
            <div key={f.title} className="overflow-hidden rounded-lg border border-cyan-100 bg-white">
              <img src={f.img} alt={f.title} className="h-16 w-full bg-slate-100 object-cover" onError={handleImgError} />
              <div className="p-2">
                <p className="text-xs font-semibold text-slate-900">{f.title}</p>
                <p className="text-[10px] text-slate-500">Built for speed</p>
              </div>
            </div>
          ))}
        </div>
      )
    case 'form':
      return (
        <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
          <p className="mb-3 text-sm font-semibold text-slate-900">Get early access</p>
          <input
            readOnly
            placeholder="you@company.com"
            className="mb-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600"
          />
          <input
            readOnly
            placeholder="Your name"
            className="mb-3 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600"
          />
          <span className="inline-block rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-500 px-4 py-2 text-xs font-semibold text-[#0a1628]">
            Join waitlist
          </span>
        </div>
      )
  }
}

/** Compact single-screen page: navbar · heading · text · image · button (no scroll). */
function AIPage({ variant = 0 }: { variant?: number }) {
  const image = imageVariants[variant % imageVariants.length].dashboard
  return (
    <div className="overflow-hidden rounded-xl border border-[var(--color-border-subtle)] bg-white shadow-[var(--shadow-sm)]">
      {/* Navbar */}
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400 to-cyan-600 text-[9px] font-bold text-white">
            Z
          </div>
          <span className="text-xs font-bold text-slate-900">
            Coder<span className="text-cyan-500">-Z</span>
          </span>
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          {['Features', 'Pricing', 'Docs'].map((l) => (
            <span key={l} className="text-[10px] font-medium text-slate-500">{l}</span>
          ))}
        </div>
        <span className="rounded-md bg-gradient-to-r from-cyan-400 to-cyan-500 px-2.5 py-1 text-[10px] font-semibold text-[#0a1628]">
          Get Started
        </span>
      </div>

      {/* Body: heading + text + button + image */}
      <div className="grid items-center gap-4 p-5 sm:grid-cols-2">
        <div className="text-left">
          {/* Heading */}
          <h3 className="text-lg font-bold leading-tight text-slate-900 sm:text-xl">
            Build stunning websites{' '}
            <span className="text-cyan-500">with AI</span>
          </h3>
          {/* Text */}
          <p className="mt-2 text-xs leading-relaxed text-slate-500">
            Coder-Z turns your ideas into beautiful, responsive pages in minutes — no code
            required.
          </p>
          {/* Button */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-500 px-4 py-2 text-xs font-semibold text-[#0a1628] shadow-[0_4px_14px_rgba(34,211,238,0.35)]">
              Start Building Free
            </span>
            <span className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-medium text-slate-600">
              Watch Demo
            </span>
          </div>
        </div>
        {/* Image */}
        <div className="overflow-hidden rounded-lg border border-slate-100 bg-slate-100 shadow-sm">
          <img
            key={image}
            src={image}
            alt="Generated hero visual"
            className="h-36 w-full object-cover sm:h-40"
            onError={handleImgError}
          />
        </div>
      </div>
    </div>
  )
}

type Mode = 'edit' | 'ai'

export function DragDropBuilder() {
  const [blocks, setBlocks] = useState<CanvasBlock[]>([])
  const [draggingOver, setDraggingOver] = useState(false)
  const [building, setBuilding] = useState(false)
  const [progress, setProgress] = useState(0)
  const [mode, setMode] = useState<Mode>('edit')
  const [variant, setVariant] = useState(0)
  const idRef = useRef(0)

  const addBlock = (type: BlockType) => {
    if (mode === 'ai') return
    idRef.current += 1
    setBlocks((prev) => [...prev, { key: `${type}-${idRef.current}`, type }])
  }

  const removeBlock = (key: string) => {
    setBlocks((prev) => prev.filter((b) => b.key !== key))
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDraggingOver(false)
    if (mode === 'ai') return
    const type = e.dataTransfer.getData('block-type') as BlockType
    if (type) addBlock(type)
  }

  const buildWithAI = () => {
    setBuilding(true)
    setProgress(0)
    setBlocks([])
    // Show a fresh set of images on every (re)generate.
    if (mode === 'ai') setVariant((v) => v + 1)
  }

  const startOver = () => {
    setMode('edit')
    setBlocks([])
  }

  useEffect(() => {
    if (!building) return
    if (progress >= 100) {
      const t = setTimeout(() => {
        setMode('ai')
        setBuilding(false)
      }, 300)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setProgress((p) => Math.min(100, p + 5)), 70)
    return () => clearTimeout(t)
  }, [building, progress])

  return (
    <section id="builder" className="pt-8 pb-24 sm:pt-10 sm:pb-32">
      <Container>
        <SectionHeading
          label="Drag & Drop"
          title="Drag it. Drop it. We build it."
          description="Drag components onto the canvas to compose your page — or let AI assemble it for you in seconds."
        />

        <div className="mx-auto mt-10 max-w-5xl">
          <div className="grid gap-4 lg:grid-cols-[200px_1fr]">
            {/* Component palette */}
            <div className="surface-card rounded-2xl p-3">
              <p className="px-2 pb-2 text-xs font-semibold tracking-wide text-cyan-600 uppercase">
                Components
              </p>
              <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
                {palette.map((item) => (
                  <button
                    key={item.type}
                    type="button"
                    draggable
                    onDragStart={(e) => e.dataTransfer.setData('block-type', item.type)}
                    onClick={() => addBlock(item.type)}
                    className="flex cursor-grab items-center gap-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-1)] px-3 py-2.5 text-sm font-medium text-[var(--color-ink-secondary)] transition-all duration-200 hover:border-cyan-300 hover:bg-cyan-50/50 hover:text-cyan-700 active:cursor-grabbing"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                        {item.icon}
                      </svg>
                    </span>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Canvas */}
            <div className="overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface-1)] shadow-[var(--shadow-md)]">
              {/* toolbar */}
              <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] bg-[var(--color-surface-2)] px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-2 text-xs text-[var(--color-ink-muted)]">
                    {mode === 'ai'
                      ? 'AI-generated landing page'
                      : `canvas · ${blocks.length} block${blocks.length === 1 ? '' : 's'}`}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {mode === 'ai' ? (
                    <button
                      type="button"
                      onClick={startOver}
                      className="rounded-lg px-2.5 py-1 text-xs font-medium text-[var(--color-ink-muted)] transition-colors hover:bg-[var(--color-surface-3)] hover:text-[var(--color-ink)]"
                    >
                      Start over
                    </button>
                  ) : (
                    blocks.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setBlocks([])}
                        className="rounded-lg px-2.5 py-1 text-xs font-medium text-[var(--color-ink-muted)] transition-colors hover:bg-[var(--color-surface-3)] hover:text-[var(--color-ink)]"
                      >
                        Clear
                      </button>
                    )
                  )}
                  <button
                    type="button"
                    onClick={buildWithAI}
                    disabled={building}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-500 px-3 py-1.5 text-xs font-semibold text-[#0a1628] shadow-[0_4px_14px_rgba(34,211,238,0.3)] transition-all hover:from-cyan-300 hover:to-cyan-400 disabled:opacity-70"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                    {mode === 'ai' ? 'Regenerate' : 'Build with AI'}
                  </button>
                </div>
              </div>

              {/* progress bar */}
              <AnimatePresence>
                {building && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-b border-[var(--color-border-subtle)] bg-[#0a1628] px-4 py-3"
                  >
                    <div className="mb-2 flex items-center gap-2 text-xs text-cyan-300">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                      AI is building your website…
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 transition-all duration-75"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* drop zone */}
              <div
                onDragOver={(e) => {
                  e.preventDefault()
                  setDraggingOver(true)
                }}
                onDragLeave={() => setDraggingOver(false)}
                onDrop={handleDrop}
                className={cn(
                  'min-h-[340px] space-y-3 p-4 transition-colors duration-200 sm:p-5',
                  draggingOver && 'bg-cyan-50/60',
                )}
              >
                {mode === 'ai' ? (
                  <motion.div
                    key={variant}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                  >
                    <span className="absolute -top-1 right-1 z-10 inline-flex items-center gap-1 rounded-full border border-cyan-400/30 bg-cyan-400/15 px-2.5 py-1 text-[10px] font-medium text-cyan-700 backdrop-blur-sm">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                      </svg>
                      Generated with AI
                    </span>
                    <AIPage variant={variant} />
                  </motion.div>
                ) : blocks.length === 0 && !building ? (
                  <div
                    className={cn(
                      'flex h-[300px] flex-col items-center justify-center rounded-xl border-2 border-dashed text-center transition-colors',
                      draggingOver ? 'border-cyan-400 bg-cyan-50' : 'border-[var(--color-border)]',
                    )}
                  >
                    <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-500">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </span>
                    <p className="text-sm font-medium text-[var(--color-ink-secondary)]">
                      Drop components here
                    </p>
                    <p className="mt-1 text-xs text-[var(--color-ink-muted)]">
                      Drag from the left, or tap a component to add it
                    </p>
                  </div>
                ) : (
                  <AnimatePresence initial={false}>
                    {blocks.map((block) => (
                      <motion.div
                        key={block.key}
                        layout
                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="group relative rounded-xl border border-[var(--color-border-subtle)] bg-white p-3.5 transition-shadow hover:border-cyan-200 hover:shadow-[var(--shadow-sm)]"
                      >
                        <BlockPreview type={block.type} />
                        <button
                          type="button"
                          onClick={() => removeBlock(block.key)}
                          aria-label="Remove block"
                          className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-ink-muted)] opacity-0 shadow-sm transition-all hover:border-red-200 hover:text-red-500 group-hover:opacity-100"
                        >
                          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
