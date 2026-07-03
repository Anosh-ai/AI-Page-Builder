import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '../../lib/cn'

interface BadgeProps extends HTMLMotionProps<'span'> {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'success' | 'dark'
  className?: string
}

const variantStyles = {
  default:
    'border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-ink-secondary)]',
  accent:
    'border border-cyan-200/70 bg-cyan-50/90 text-cyan-700',
  success:
    'border border-emerald-200/70 bg-emerald-50/90 text-emerald-700',
  dark:
    'border border-[var(--color-dash-border)] bg-[var(--color-dash-elevated)] text-[var(--color-dash-muted)]',
}

export function Badge({
  children,
  variant = 'default',
  className,
  ...props
}: BadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-wide',
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </motion.span>
  )
}
