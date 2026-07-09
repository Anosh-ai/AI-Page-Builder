import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type BrandLogoProps = {
  className?: string
}

function LogoShell({
  name,
  className,
  children,
}: {
  name: string
  className?: string
  children: ReactNode
}) {
  return (
    <svg
      role="img"
      aria-label={name}
      viewBox="0 0 24 24"
      className={cn('h-7 w-7 shrink-0 sm:h-8 sm:w-8', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  )
}

export function StripeLogo({ className }: BrandLogoProps) {
  return (
    <LogoShell name="Stripe" className={className}>
      <path
        fill="#635BFF"
        d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.724 0 4.957-.735 6.55-2.088 1.627-1.38 2.477-3.507 2.477-6.14 0-3.916-2.346-5.577-6.765-7.622z"
      />
    </LogoShell>
  )
}

export function NotionLogo({ className }: BrandLogoProps) {
  return (
    <LogoShell name="Notion" className={className}>
      <path
        fill="#000000"
        d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.933-.56.933-1.167V6.354c0-.606-.233-.933-.746-.886l-15.177.887c-.56.047-.747.327-.747.933zm14.337.606c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.746 0-.933-.234-1.495-.933l-4.577-7.186v6.952l1.449.327s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.886.747-.933zM1.936 1.035l13.033-.793c1.635-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.933.653.933 1.213v16.378c0 1.026-.373 1.635-1.682 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.956V2.667c0-.839.374-1.54 1.682-1.632z"
      />
    </LogoShell>
  )
}

export function VercelLogo({ className }: BrandLogoProps) {
  return (
    <LogoShell name="Vercel" className={className}>
      <path fill="#000000" d="M12 1.5L1.5 21h21L12 1.5z" />
    </LogoShell>
  )
}

export function LinearLogo({ className }: BrandLogoProps) {
  return (
    <LogoShell name="Linear" className={className}>
      <path fill="#5E6AD2" d="M2.25 2.25v19.5L12 12 2.25 2.25zm9.75 0L21.75 21.75V2.25H12z" />
    </LogoShell>
  )
}

export function NextjsLogo({ className }: BrandLogoProps) {
  return (
    <LogoShell name="Next.js" className={className}>
      <path
        fill="#000000"
        d="M11.572 0c-.176 0-.31.001-.358.007a6.005 6.005 0 0 0-5.085 5.085C6.123 5.14 6.122 5.274 6.122 5.45v11.142c0 .176.001.31.007.358a6.005 6.005 0 0 0 5.085 5.085c.048.006.182.007.358.007h.856c.176 0 .31-.001.358-.007a6.005 6.005 0 0 0 5.085-5.085c.006-.048.007-.182.007-.358V5.45c0-.177-.001-.31-.007-.358A6.005 6.005 0 0 0 12.786.007C12.738.001 12.604 0 12.428 0h-.856zM9.816 17.573V8.716l6.668 8.857H9.816z"
      />
    </LogoShell>
  )
}

export function DropboxLogo({ className }: BrandLogoProps) {
  return (
    <LogoShell name="Dropbox" className={className}>
      <path
        fill="#0061FF"
        d="M6 1.807L0 5.629l6 3.822 6.001-3.822L6 1.807zM18 1.807l-6 3.822 6 3.822 6-3.822-6-3.822zM0 13.274l6 3.822 6.001-3.822L6 9.452l-6 3.822zM18 9.452l-6 3.822 6 3.822 6-3.822-6-3.822zM6 18.371l6.001 3.822 6-3.822L12.001 14.55 6 18.371z"
      />
    </LogoShell>
  )
}

export function FigmaLogo({ className }: BrandLogoProps) {
  return (
    <LogoShell name="Figma" className={className}>
      <path fill="#F24E1E" d="M12 24a4 4 0 1 0 0-8h-4v8h4z" />
      <path fill="#FF7262" d="M8 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      <path fill="#A259FF" d="M12 8a4 4 0 1 0 0-8h-4v8h4z" />
      <path fill="#1ABCFE" d="M16 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      <path fill="#0ACF83" d="M12 16a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
    </LogoShell>
  )
}

export function SlackLogo({ className }: BrandLogoProps) {
  return (
    <LogoShell name="Slack" className={className}>
      <path
        fill="#E01E5A"
        d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"
      />
      <path
        fill="#36C5F0"
        d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"
      />
      <path
        fill="#2EB67D"
        d="M18.958 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.271 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"
      />
      <path
        fill="#ECB22E"
        d="M15.165 18.958a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.528 2.528 0 0 1-2.52-2.522v-2.522h2.52zm0-1.271a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
      />
    </LogoShell>
  )
}

export function GitHubLogo({ className }: BrandLogoProps) {
  return (
    <LogoShell name="GitHub" className={className}>
      <path
        fill="#181717"
        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      />
    </LogoShell>
  )
}

export const trustedBrands = [
  { name: 'Vercel', Logo: VercelLogo },
  { name: 'Next.js', Logo: NextjsLogo },
  { name: 'Linear', Logo: LinearLogo },
  { name: 'Dropbox', Logo: DropboxLogo },
  { name: 'Slack', Logo: SlackLogo },
  { name: 'GitHub', Logo: GitHubLogo },
  { name: 'Stripe', Logo: StripeLogo },
  { name: 'Notion', Logo: NotionLogo },
  { name: 'Figma', Logo: FigmaLogo },
] as const
