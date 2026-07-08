import { useState } from 'react'
import { cn } from '../../lib/cn'

interface IconBadgeProps {
  children: React.ReactNode
  className?: string
  size?: 'md' | 'lg'
}

/**
 * Icon badge — turns violet/purple when clicked.
 */
export function IconBadge({ children, className, size = 'md' }: IconBadgeProps) {
  const [active, setActive] = useState(false)

  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={(e) => {
        e.stopPropagation()
        setActive((v) => !v)
      }}
      className={cn(
        'relative z-10 flex shrink-0 items-center justify-center rounded-full border transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-violet-400/40',
        size === 'md' ? 'h-11 w-11' : 'h-12 w-12',
        active
          ? 'border-violet-200 bg-violet-100 text-violet-600 shadow-[0_0_0_4px_rgba(139,92,246,0.12)]'
          : 'border-cyan-100 bg-cyan-50 text-cyan-600 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-500',
        className,
      )}
    >
      {children}
    </button>
  )
}
