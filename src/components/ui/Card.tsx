import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '../../lib/cn'

interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  className?: string
  hover?: boolean
  variant?: 'default' | 'elevated' | 'glass'
}

export function Card({
  children,
  className,
  hover = true,
  variant = 'default',
  ...props
}: CardProps) {
  const variantStyles = {
    default: 'surface-card surface-card-hover',
    elevated:
      'rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface-1)] shadow-[var(--shadow-md)]',
    glass: 'glass glow-hover',
  }

  return (
    <motion.div
      whileHover={
        hover
          ? { y: -3, transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } }
          : undefined
      }
      className={cn(
        'rounded-2xl p-6 transition-shadow duration-300',
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}
