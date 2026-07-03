import { FadeUp } from './FadeUp'
import { cn } from '../../lib/cn'

interface SectionHeadingProps {
  label: string
  title: string
  description?: string
  align?: 'center' | 'left'
  className?: string
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <FadeUp
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <p className="label-overline">{label}</p>
      <h2 className="font-display mt-2.5 text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-3xl lg:text-[2.25rem] lg:leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[var(--color-ink-secondary)] sm:text-base">
          {description}
        </p>
      )}
    </FadeUp>
  )
}
