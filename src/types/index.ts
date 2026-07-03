export interface Feature {
  id: string
  title: string
  description: string
  icon: 'sparkles' | 'zap' | 'layers' | 'shield' | 'code' | 'rocket'
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  avatar: string
}

export interface NavLink {
  label: string
  href: string
}

export interface FooterLink {
  label: string
  href: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}
