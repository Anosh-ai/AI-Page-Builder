import { cn } from '../../lib/cn'
import { Card } from './Card'

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
  avatar: string
  className?: string
}

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-3.5 w-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
  className,
}: TestimonialCardProps) {
  return (
    <Card variant="elevated" className={cn('flex h-full flex-col', className)}>
      <StarRating />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-[var(--color-ink-secondary)]">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-6 flex items-center gap-3 border-t border-[var(--color-border-subtle)] pt-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 text-[11px] font-bold text-white shadow-[var(--shadow-sm)]">
          {avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--color-ink)]">{author}</p>
          <p className="text-xs text-[var(--color-ink-muted)]">
            {role}, {company}
          </p>
        </div>
      </div>
    </Card>
  )
}
