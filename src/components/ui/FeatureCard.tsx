import { cn } from '../../lib/cn'
import { Card } from './Card'
import { IconBadge } from './IconBadge'

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  className?: string
}

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  return (
    <Card className={cn('group h-full', className)}>
      <div className="mb-5">
        <IconBadge>{icon}</IconBadge>
      </div>
      <h3 className="font-display text-base font-semibold tracking-tight text-[var(--color-ink)]">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-secondary)]">
        {description}
      </p>
    </Card>
  )
}
