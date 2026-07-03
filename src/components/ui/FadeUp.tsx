import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'

interface FadeUpProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  amount?: number
}

export function FadeUp({
  children,
  className,
  delay = 0,
  duration = 0.6,
  amount = 0.2,
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
