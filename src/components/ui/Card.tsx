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
    default:
      'rounded-2xl border border-[var(--color-border-subtle)] bg-white shadow-[var(--shadow-sm)]',
    elevated:
      'rounded-2xl border border-[var(--color-border-subtle)] bg-white shadow-[var(--shadow-md)]',
    glass: 'glass glow-hover',
  }

  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -4,
              scale: 1.02,
              boxShadow: '0 0 0 1px rgba(34,211,238,0.14), 0 16px 40px rgba(15,23,42,0.1)',
              transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
            }
          : undefined
      }
      className={cn(
        'rounded-2xl p-6 transition-[border-color,box-shadow] duration-300',
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}
