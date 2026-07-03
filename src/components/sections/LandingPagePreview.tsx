export interface PreviewImageSet {
  dashboard: string
  workspace: string
  avatar: string
  gallery1: string
  gallery2: string
  gallery3: string
}

/**
 * Multiple real image sets — each "Regenerate" cycles to the next set,
 * so the AI-generated preview shows fresh photos every time.
 * Sources: Unsplash (free to use, hotlink-friendly).
 */
export const imageVariants: PreviewImageSet[] = [
  {
    dashboard: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=520&fit=crop&q=80',
    workspace: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&q=80',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&q=80',
    gallery1: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=280&fit=crop&q=80',
    gallery2: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=280&fit=crop&q=80',
    gallery3: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=280&fit=crop&q=80',
  },
  {
    dashboard: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=520&fit=crop&q=80',
    workspace: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=600&h=400&fit=crop&q=80',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&q=80',
    gallery1: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=280&fit=crop&q=80',
    gallery2: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=280&fit=crop&q=80',
    gallery3: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=280&fit=crop&q=80',
  },
  {
    dashboard: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=520&fit=crop&q=80',
    workspace: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=400&fit=crop&q=80',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&q=80',
    gallery1: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=280&fit=crop&q=80',
    gallery2: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=280&fit=crop&q=80',
    gallery3: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=280&fit=crop&q=80',
  },
  {
    dashboard: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&h=520&fit=crop&q=80',
    workspace: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop&q=80',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&q=80',
    gallery1: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=280&fit=crop&q=80',
    gallery2: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=280&fit=crop&q=80',
    gallery3: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=280&fit=crop&q=80',
  },
  {
    dashboard: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&h=520&fit=crop&q=80',
    workspace: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&h=400&fit=crop&q=80',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&q=80',
    gallery1: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=280&fit=crop&q=80',
    gallery2: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&h=280&fit=crop&q=80',
    gallery3: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=280&fit=crop&q=80',
  },
]

/** Default set (used where no variant is supplied). */
export const previewImages = imageVariants[0]

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=520&fit=crop&q=80'

function handleImgError(e: React.SyntheticEvent<HTMLImageElement>) {
  const el = e.currentTarget
  if (el.src !== FALLBACK_IMAGE) el.src = FALLBACK_IMAGE
}

interface LandingPagePreviewProps {
  compact?: boolean
  className?: string
  /** Which image set to render; cycles on regenerate. Defaults to 0. */
  variant?: number
}

export function LandingPagePreview({
  compact = false,
  className,
  variant = 0,
}: LandingPagePreviewProps) {
  const images = imageVariants[variant % imageVariants.length]
  return (
    <div
      className={`overflow-hidden rounded-xl border border-[var(--color-border-subtle)] bg-white shadow-[var(--shadow-md)] ${className ?? ''}`}
    >
      {/* Navbar */}
      <header className="flex items-center justify-between border-b border-slate-100 bg-white px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 text-[10px] font-bold text-white">
            Z
          </div>
          <span className="text-sm font-bold text-slate-900">
            Coder<span className="text-cyan-500">-Z</span>
          </span>
        </div>
        <nav className="hidden items-center gap-4 sm:flex">
          {['Features', 'Pricing', 'Docs'].map((link) => (
            <span key={link} className="text-xs font-medium text-slate-500">
              {link}
            </span>
          ))}
        </nav>
        <span className="rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-500 px-3 py-1.5 text-[11px] font-semibold text-[#0a1628]">
          Get Started
        </span>
      </header>

      {/* Hero — split with real image */}
      <section className="relative overflow-hidden bg-[#0a1628]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(34,211,238,0.18),transparent_55%)]" />
        <div className={`relative grid items-center gap-4 ${compact ? 'p-4' : 'p-5 sm:grid-cols-2 sm:p-6'}`}>
          <div className="text-left">
            <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-0.5 text-[10px] font-medium text-cyan-300">
              ✨ AI Website Builder
            </span>
            <h2 className={`mt-2 font-bold leading-tight text-white ${compact ? 'text-base' : 'text-lg sm:text-xl'}`}>
              Build stunning websites{' '}
              <span className="text-cyan-400">with AI</span>
            </h2>
            <p className={`mt-2 leading-relaxed text-zinc-400 ${compact ? 'text-[10px]' : 'text-xs'}`}>
              Create beautiful, responsive sites in minutes. No code required.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-500 px-3 py-1.5 text-[10px] font-semibold text-[#0a1628]">
                Start Free
              </span>
              <span className="rounded-lg border border-white/20 px-3 py-1.5 text-[10px] font-medium text-zinc-300">
                Watch Demo
              </span>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-cyan-400/20 shadow-[0_8px_32px_rgba(34,211,238,0.2)]">
            <img
              src={images.dashboard}
              alt="Analytics dashboard preview"
              className={`w-full bg-slate-800 object-cover ${compact ? 'h-24' : 'h-32 sm:h-36'}`}
              onError={handleImgError}
            />
          </div>
        </div>
      </section>

      {/* Features — real thumbnail images */}
      <section
        className={`grid grid-cols-3 gap-2 bg-slate-50 ${compact ? 'mt-3 p-3' : 'mt-5 gap-3 px-4 pb-4 pt-5'}`}
      >
        {[
          { title: 'Instant AI', desc: 'Generate in seconds', img: images.gallery1 },
          { title: 'Drag & Drop', desc: 'Visual editor', img: images.gallery2 },
          { title: 'One-Click Deploy', desc: 'Go live instantly', img: images.gallery3 },
        ].map((f) => (
          <div
            key={f.title}
            className="overflow-hidden rounded-lg border border-slate-100 bg-white shadow-sm"
          >
            <img
              src={f.img}
              alt={f.title}
              className={`w-full bg-slate-100 object-cover ${compact ? 'h-12' : 'h-14 sm:h-16'}`}
              onError={handleImgError}
            />
            <div className={compact ? 'p-2' : 'p-2.5 sm:p-3'}>
              <p className={`font-semibold text-slate-900 ${compact ? 'text-[10px]' : 'text-xs'}`}>
                {f.title}
              </p>
              <p className={`mt-0.5 text-slate-500 ${compact ? 'text-[9px]' : 'text-[10px]'}`}>
                {f.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Image gallery row — real photos */}
      {!compact && (
        <section className="grid grid-cols-3 gap-2 border-t border-slate-100 p-4">
          {[images.gallery1, images.gallery2, images.gallery3].map(
            (src, i) => (
              <img
                key={i}
                src={src}
                alt={`Gallery ${i + 1}`}
                className="h-20 w-full rounded-lg bg-slate-100 object-cover sm:h-24"
                onError={handleImgError}
              />
            ),
          )}
        </section>
      )}

      {/* Stats / rating — light top space after hero + features */}
      <section className="mt-4 grid grid-cols-4 gap-2 border-y border-slate-100 bg-white px-4 py-3 pt-4">
        {[
          { v: '50K+', l: 'Users' },
          { v: '2M+', l: 'Sites' },
          { v: '98%', l: 'Faster' },
          { v: '4.9★', l: 'Rating' },
        ].map((s) => (
          <div key={s.l} className="text-center">
            <p className={`font-bold text-slate-900 ${compact ? 'text-xs' : 'text-sm'}`}>
              {s.v}
            </p>
            <p className={`text-slate-500 ${compact ? 'text-[9px]' : 'text-[10px]'}`}>{s.l}</p>
          </div>
        ))}
      </section>

      {/* Testimonial with real avatar */}
      <section className={`flex items-start gap-3 ${compact ? 'p-3' : 'p-4'}`}>
        <img
          src={images.avatar}
          alt="Sarah Chen"
          className={`shrink-0 rounded-full bg-slate-100 object-cover ring-2 ring-cyan-100 ${compact ? 'h-8 w-8' : 'h-10 w-10'}`}
          onError={handleImgError}
        />
        <div>
          <p className={`leading-relaxed text-slate-600 ${compact ? 'text-[10px]' : 'text-xs'}`}>
            &ldquo;Coder-Z cut our launch time from weeks to hours. The AI-generated pages look
            incredible.&rdquo;
          </p>
          <p className={`mt-1 font-semibold text-slate-900 ${compact ? 'text-[10px]' : 'text-xs'}`}>
            Sarah Chen
            <span className="font-normal text-slate-400"> · Founder, Flowstack</span>
          </p>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-gradient-to-r from-cyan-500 to-cyan-600 px-4 py-4 text-center sm:px-5">
        <p className={`font-bold text-white ${compact ? 'text-xs' : 'text-sm'}`}>
          Ready to build your site?
        </p>
        <span className="mt-2 inline-block rounded-lg bg-white px-4 py-1.5 text-[11px] font-semibold text-cyan-700">
          Start Building Free →
        </span>
      </section>

      {/* Footer */}
      <footer className="flex items-center justify-between bg-[#0a1628] px-4 py-3">
        <span className="text-[10px] font-bold text-white">
          Coder<span className="text-cyan-400">-Z</span>
        </span>
        <span className="text-[10px] text-zinc-500">© 2026 Coder-Z</span>
      </footer>
    </div>
  )
}
