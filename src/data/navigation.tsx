import type { MegaMenuSection } from '../types'

const icon = (d: string) => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
)

export const menuSections: MegaMenuSection[] = [
  {
    id: 'product',
    label: 'Product',
    featured: {
      title: 'AI Page Generator',
      description: 'Describe a page in plain language and get a production-ready layout in seconds.',
      href: '/product/ai-generator',
    },
    items: [
      {
        title: 'AI Generator',
        description: 'Prompt-to-page in seconds with clean, typed output.',
        href: '/product/ai-generator',
        icon: icon('M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z'),
      },
      {
        title: 'Visual Builder',
        description: 'Drag, drop, and refine layouts without fighting CSS.',
        href: '/product/visual-builder',
        icon: icon('M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z'),
      },
      {
        title: 'Live Preview',
        description: 'See every change instantly across breakpoints.',
        href: '/product/live-preview',
        icon: icon('M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z'),
      },
      {
        title: 'One-Click Deploy',
        description: 'Ship globally with SSL, CDN, and custom domains.',
        href: '/product/deploy',
        icon: icon('M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'),
      },
      {
        title: 'Component Library',
        description: 'Enterprise-ready UI blocks that match your brand.',
        href: '/product/components',
        icon: icon('M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3'),
      },
      {
        title: 'Code Export',
        description: 'Own clean TypeScript/React output — no lock-in.',
        href: '/product/code-export',
        icon: icon('M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'),
      },
    ],
  },
  {
    id: 'solutions',
    label: 'Solutions',
    items: [
      {
        title: 'For Developers',
        description: 'Ship MVPs and marketing sites without leaving your flow.',
        href: '/solutions/developers',
        icon: icon('M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'),
      },
      {
        title: 'For Product Teams',
        description: 'Align design and eng on a single source of truth.',
        href: '/solutions/product-teams',
        icon: icon('M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'),
      },
      {
        title: 'For Enterprises',
        description: 'Governance, SSO, and scale for global brands.',
        href: '/solutions/enterprises',
        icon: icon('M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0v-.375c0-.621.504-1.125 1.125-1.125h.375'),
      },
      {
        title: 'Agencies',
        description: 'Deliver client sites faster with reusable systems.',
        href: '/solutions/agencies',
        icon: icon('M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z'),
      },
      {
        title: 'Startups',
        description: 'Launch a polished brand presence before your runway ends.',
        href: '/solutions/startups',
        icon: icon('M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'),
      },
      {
        title: 'Design Systems',
        description: 'Keep every page on-brand across products and locales.',
        href: '/solutions/design-systems',
        icon: icon('M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42'),
      },
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    items: [
      {
        title: 'Documentation',
        description: 'Guides, APIs, and patterns to build with confidence.',
        href: '/resources/docs',
        icon: icon('M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'),
      },
      {
        title: 'Templates',
        description: 'Battle-tested starting points for landing pages and apps.',
        href: '/resources/templates',
        icon: icon('M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'),
      },
      {
        title: 'Changelog',
        description: 'See what shipped this week across the platform.',
        href: '/resources/changelog',
        icon: icon('M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'),
      },
      {
        title: 'Customer Stories',
        description: 'How modern teams cut time-to-ship with Coder-Z.',
        href: '/resources/stories',
        icon: icon('M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'),
      },
      {
        title: 'Community',
        description: 'Ask questions and share builds with other creators.',
        href: '/resources/community',
        icon: icon('M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.065 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155'),
      },
      {
        title: 'Support',
        description: 'Priority help when launches cannot wait.',
        href: '/resources/support',
        icon: icon('M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z'),
      },
    ],
  },
]

export interface SubPageContent {
  path: string
  category: string
  title: string
  description: string
  highlights: string[]
  cta?: string
}

export const pageContent: Record<string, SubPageContent> = {
  '/product/ai-generator': {
    path: '/product/ai-generator',
    category: 'Product',
    title: 'AI Generator',
    description:
      'Turn a plain-language brief into a complete, responsive page — structure, copy, and components included. Iterate with follow-up prompts until it matches your brand.',
    highlights: [
      'Prompt-to-page in under a minute',
      'Typed React output you can keep',
      'Brand-aware layouts and typography',
      'Safe regenerate with history',
    ],
  },
  '/product/visual-builder': {
    path: '/product/visual-builder',
    category: 'Product',
    title: 'Visual Builder',
    description:
      'Fine-tune AI-generated layouts with a drag-and-drop canvas. Adjust spacing, swap sections, and polish CTAs without touching CSS.',
    highlights: [
      'Pixel-aware drag and drop',
      'Responsive breakpoint editor',
      'Reusable section blocks',
      'Undo / redo with change history',
    ],
  },
  '/product/live-preview': {
    path: '/product/live-preview',
    category: 'Product',
    title: 'Live Preview',
    description:
      'Preview every edit instantly across desktop, tablet, and mobile. Share a live link with stakeholders before anything ships.',
    highlights: [
      'Instant multi-device preview',
      'Shareable review links',
      'Comment on specific sections',
      'No publish required to preview',
    ],
  },
  '/product/deploy': {
    path: '/product/deploy',
    category: 'Product',
    title: 'One-Click Deploy',
    description:
      'Ship to a global CDN with SSL and custom domains in one click. Roll back instantly if a launch needs a second look.',
    highlights: [
      'Global CDN + automatic SSL',
      'Custom domains in minutes',
      'Environment-aware deploys',
      'One-click rollback',
    ],
  },
  '/product/components': {
    path: '/product/components',
    category: 'Product',
    title: 'Component Library',
    description:
      'Start from enterprise-ready UI blocks — heroes, pricing, FAQs, forms — already tuned for conversion and brand consistency.',
    highlights: [
      'Battle-tested section library',
      'Themeable to your brand tokens',
      'Accessible by default',
      'Save team private components',
    ],
  },
  '/product/code-export': {
    path: '/product/code-export',
    category: 'Product',
    title: 'Code Export',
    description:
      'Own your code. Export clean TypeScript and React, push to GitHub, or continue in your IDE — no proprietary lock-in.',
    highlights: [
      'Clean React + TypeScript',
      'GitHub sync',
      'ZIP download anytime',
      'No runtime lock-in',
    ],
  },
  '/solutions/developers': {
    path: '/solutions/developers',
    category: 'Solutions',
    title: 'For Developers',
    description:
      'Ship marketing pages and MVPs without leaving your engineering flow. Keep typed source, wire real APIs, and deploy on your terms.',
    highlights: [
      'Export maintainable source',
      'Fits into existing Git workflows',
      'Skip boilerplate layout work',
      'API-ready sections',
    ],
  },
  '/solutions/product-teams': {
    path: '/solutions/product-teams',
    category: 'Solutions',
    title: 'For Product Teams',
    description:
      'Align design, marketing, and engineering on one live canvas. Move from brief to polished page without endless handoff docs.',
    highlights: [
      'Shared live workspaces',
      'Inline comments & reviews',
      'Brand presets for campaigns',
      'Faster experiment cycles',
    ],
  },
  '/solutions/enterprises': {
    path: '/solutions/enterprises',
    category: 'Solutions',
    title: 'For Enterprises',
    description:
      'Give every business unit a governed way to ship on-brand pages — with SSO, roles, audit trails, and private templates.',
    highlights: [
      'SSO / SCIM ready',
      'RBAC and audit logs',
      'Private org templates',
      'Dedicated success & SLAs',
    ],
  },
  '/solutions/agencies': {
    path: '/solutions/agencies',
    category: 'Solutions',
    title: 'For Agencies',
    description:
      'Deliver more client sites in less time. Reuse systems across accounts while still exporting clean code for each client.',
    highlights: [
      'Multi-client workspaces',
      'Reusable design systems',
      'Faster proposal-to-launch',
      'White-label ready exports',
    ],
  },
  '/solutions/startups': {
    path: '/solutions/startups',
    category: 'Solutions',
    title: 'For Startups',
    description:
      'Launch a credible brand presence before runway runs out. Generate, iterate, and publish without hiring a full web team.',
    highlights: [
      'Ship a site this week',
      'Iterate with AI prompts',
      'Affordable team plans',
      'Export when you grow',
    ],
  },
  '/solutions/design-systems': {
    path: '/solutions/design-systems',
    category: 'Solutions',
    title: 'Design Systems',
    description:
      'Encode your tokens, type, and components once — then generate every new landing page in the same visual language.',
    highlights: [
      'Brand token sync',
      'Shared component library',
      'Locale-ready layouts',
      'Consistent multi-product presence',
    ],
  },
  '/resources/docs': {
    path: '/resources/docs',
    category: 'Resources',
    title: 'Documentation',
    description:
      'Learn how to prompt, customize, collaborate, and deploy with Coder-Z — from first page to enterprise rollout.',
    highlights: [
      'Getting started guides',
      'Prompt patterns that convert',
      'API & integration docs',
      'Security & admin handbooks',
    ],
  },
  '/resources/templates': {
    path: '/resources/templates',
    category: 'Resources',
    title: 'Templates',
    description:
      'Start from proven SaaS, portfolio, and campaign templates — then rewrite them with AI to match your product.',
    highlights: [
      'SaaS & product launches',
      'Agency & studio sites',
      'Event & webinar pages',
      'Pricing & waitlist kits',
    ],
  },
  '/resources/changelog': {
    path: '/resources/changelog',
    category: 'Resources',
    title: 'Changelog',
    description:
      'Track what shipped across the platform — generator quality, builder controls, collaboration, and deploy improvements.',
    highlights: [
      'Weekly product updates',
      'Generator quality notes',
      'Builder & preview fixes',
      'Enterprise feature drops',
    ],
  },
  '/resources/stories': {
    path: '/resources/stories',
    category: 'Resources',
    title: 'Customer Stories',
    description:
      'See how product teams, agencies, and startups cut time-to-ship with Coder-Z — without sacrificing design quality.',
    highlights: [
      'MVP weekends that converted',
      'Agency delivery speedups',
      'Enterprise self-serve pages',
      'Measurable launch gains',
    ],
  },
  '/resources/community': {
    path: '/resources/community',
    category: 'Resources',
    title: 'Community',
    description:
      'Ask questions, share builds, and learn prompt patterns from other creators building with Coder-Z.',
    highlights: [
      'Builder Discord / forums',
      'Prompt showcases',
      'Office hours',
      'Template contributions',
    ],
  },
  '/resources/support': {
    path: '/resources/support',
    category: 'Resources',
    title: 'Support',
    description:
      'Get help when a launch cannot wait. From docs and chat to priority enterprise support with SLAs.',
    highlights: [
      'Help center & docs',
      'In-app chat support',
      'Priority enterprise queue',
      'Dedicated success managers',
    ],
  },
  '/pricing': {
    path: '/pricing',
    category: 'Product',
    title: 'Pricing',
    description:
      'Simple plans for individuals, teams, and enterprises. Start free, collaborate on Team, and add governance when you scale.',
    highlights: [
      'Free forever for personal projects',
      'Team workspaces & brand presets',
      'Enterprise SSO & SLAs',
      'No credit card to start',
    ],
  },
}
