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
    'bg-[#22d3ee] text-white shadow-[0_8px_24px_rgba(34,211,238,0.35)] ring-0 hover:bg-[#06b6d4] hover:shadow-[0_10px_28px_rgba(34,211,238,0.4)]',
  secondary:
    'surface-card text-[var(--color-ink)] hover:bg-white hover:shadow-[var(--shadow-md)]',
  ghost:
    'text-[var(--color-ink-secondary)] hover:bg-white/70 hover:text-[var(--color-ink)]',
  outline:
    'border border-[var(--color-border)] bg-white text-[var(--color-ink-secondary)] shadow-[var(--shadow-xs)] hover:border-cyan-300 hover:bg-cyan-50/50 hover:text-cyan-700',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-9 px-5 text-[13px] rounded-full',
  md: 'h-11 px-6 text-sm rounded-full',
  lg: 'h-12 px-8 text-[15px] font-semibold rounded-full',
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
      whileHover={{ y: -2, scale: 1.015 }}
      whileTap={{ scale: 0.985, y: 0 }}
      transition={{ type: 'spring', stiffness: 480, damping: 28 }}
      className={cn(
        'inline-flex cursor-pointer items-center justify-center gap-2 font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
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
