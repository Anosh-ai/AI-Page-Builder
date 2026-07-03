import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '../../lib/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-ink)] text-white shadow-[var(--shadow-sm)] hover:bg-[#1a1f2e] hover:shadow-[var(--shadow-md)] ring-1 ring-inset ring-white/10',
  secondary:
    'surface-card text-[var(--color-ink)] hover:bg-[var(--color-surface-2)] hover:shadow-[var(--shadow-md)]',
  ghost:
    'text-[var(--color-ink-secondary)] hover:bg-[var(--color-surface-3)] hover:text-[var(--color-ink)]',
  outline:
    'border border-[var(--color-border)] bg-[var(--color-surface-1)] text-[var(--color-ink-secondary)] hover:border-cyan-300 hover:bg-[var(--color-surface-2)] hover:text-[var(--color-ink)]',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-8 px-3.5 text-[13px]',
  md: 'h-10 px-5 text-sm',
  lg: 'h-11 px-6 text-sm font-semibold',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      className={cn(
        'inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}
