import { cn } from '../../lib/cn'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'section' | 'header' | 'footer' | 'main'
  id?: string
  size?: 'default' | 'narrow' | 'wide'
}

const sizeStyles = {
  narrow: 'max-w-5xl',
  default: 'max-w-[1280px]',
  wide: 'max-w-[1400px]',
}

export function Container({
  children,
  className,
  as: Component = 'div',
  id,
  size = 'default',
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', sizeStyles[size], className)}
    >
      {children}
    </Component>
  )
}
