import { cn } from '../../lib/cn'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
  className?: string
  wrapperClassName?: string
}

export function Input({
  icon,
  className,
  wrapperClassName,
  ...props
}: InputProps) {
  return (
    <div className={cn('relative', wrapperClassName)}>
      {icon && (
        <div className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[var(--color-ink-muted)]">
          {icon}
        </div>
      )}
      <input
        className={cn(
          'h-12 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-1)] text-[var(--color-ink)] placeholder:text-[var(--color-ink-muted)] transition-all duration-200 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10 focus:outline-none',
          icon ? 'pl-12 pr-4' : 'px-4',
          className,
        )}
        {...props}
      />
    </div>
  )
}
