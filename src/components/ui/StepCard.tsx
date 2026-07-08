import { cn } from '../../lib/cn'
import { Card } from './Card'
import { IconBadge } from './IconBadge'

interface StepCardProps {
  step: string
  title: string
  description: string
  icon: React.ReactNode
  className?: string
  align?: 'center' | 'left'
}

export function StepCard({
  step,
  title,
  description,
  icon,
  className,
  align = 'left',
}: StepCardProps) {
  return (
    <Card
      className={cn(
        'relative h-full',
        align === 'center' && 'text-center',
        className,
      )}
    >
      <div className={cn('mb-5', align === 'center' && 'flex justify-center')}>
        <IconBadge size="lg">{icon}</IconBadge>
      </div>
      <span className="label-overline mb-2 inline-block">{step}</span>
      <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--color-ink)]">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-secondary)]">
        {description}
      </p>
    </Card>
  )
}
