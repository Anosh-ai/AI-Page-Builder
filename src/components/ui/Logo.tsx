import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

interface LogoProps {
  href?: string
  showText?: boolean
  textClassName?: string
  className?: string
}

export function Logo({
  href = '/',
  showText = true,
  textClassName,
  className,
}: LogoProps) {
  return (
    <Link to={href} className={cn('group flex items-center gap-2.5', className)}>
      <span className="relative h-8 w-8 shrink-0">
        <svg
          viewBox="0 0 40 40"
          className="h-full w-full drop-shadow-[0_3px_10px_rgba(59,130,246,0.4)] transition-transform duration-300 group-hover:scale-105"
          aria-hidden
        >
          <defs>
            <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40">
              <stop offset="0%" stopColor="#7dd3fc" />
              <stop offset="45%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="36" height="36" rx="11" fill="url(#logoGrad)" />
          <rect
            x="2.5"
            y="2.5"
            width="35"
            height="35"
            rx="10.5"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.3"
          />
          <path
            d="M13 14 H27 L13 26 H27"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="30.5" cy="9.5" r="2.4" fill="#ecfeff" />
          <circle cx="30.5" cy="9.5" r="4.2" fill="none" stroke="#ecfeff" strokeOpacity="0.5" strokeWidth="0.8" />
        </svg>
      </span>
      {showText && (
        <span className={cn('font-display text-base font-bold tracking-tight', textClassName)}>
          Coder<span className="text-sky-500">-Z</span>
        </span>
      )}
    </Link>
  )
}
