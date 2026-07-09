import { FadeUp } from '../ui/FadeUp'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'

const securityPillars = [
  {
    title: 'SSO & SCIM',
    description:
      'Connect Okta, Azure AD, Google Workspace, or any SAML 2.0 provider. Automate user provisioning and deprovisioning at scale.',
    features: ['SAML 2.0 & OIDC', 'SCIM directory sync', 'Domain verification', 'Just-in-time provisioning'],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 00-9 0v3.75m-.75 0h10.5a2.25 2.25 0 012.25 2.25v6a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25v-6a2.25 2.25 0 012.25-2.25z"
      />
    ),
  },
  {
    title: 'Role-based access',
    description:
      'Granular permissions for admins, editors, reviewers, and viewers. Control who can publish, export code, or manage billing.',
    features: ['Custom roles & policies', 'Workspace-level permissions', 'Approval workflows', 'Guest access controls'],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    ),
  },
  {
    title: 'Audit logs',
    description:
      'Every action is recorded — publishes, permission changes, exports, and admin events. Export logs for compliance reviews.',
    features: ['Immutable event history', '90-day retention (Enterprise)', 'SIEM integrations', 'Export to CSV / API'],
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      />
    ),
  },
]

const trustBadges = [
  { label: 'SOC 2 Type II', status: 'In progress' },
  { label: 'GDPR ready', status: 'Compliant' },
  { label: 'AES-256 encryption', status: 'At rest & in transit' },
  { label: '99.9% uptime SLA', status: 'Enterprise' },
]

export function EnterpriseSecurity() {
  return (
    <section id="security" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-50/60 via-white to-white" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-cyan-200/25 blur-3xl" />

      <Container className="relative">
        <SectionHeading
          animated
          label="Enterprise security"
          title="Built for teams that can't compromise"
          description="The same controls your IT and security teams expect — without slowing down your builders."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {securityPillars.map((pillar, i) => (
            <FadeUp key={pillar.title} delay={i * 0.08}>
              <Card hover className="flex h-full flex-col">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-100 bg-cyan-50 text-cyan-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    {pillar.icon}
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--color-ink)]">{pillar.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-ink-secondary)]">
                  {pillar.description}
                </p>
                <ul className="mt-4 space-y-2 border-t border-[var(--color-border-subtle)] pt-4">
                  {pillar.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-[var(--color-ink-secondary)]">
                      <svg className="h-3.5 w-3.5 shrink-0 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 rounded-full border border-cyan-100 bg-white px-4 py-2 shadow-[var(--shadow-xs)]"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold text-[var(--color-ink)]">{badge.label}</p>
                  <p className="text-[10px] text-[var(--color-ink-muted)]">{badge.status}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-sky-50 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="font-display text-lg font-semibold text-[var(--color-ink)]">
                Need a security review or custom DPA?
              </p>
              <p className="mt-1 text-sm text-[var(--color-ink-secondary)]">
                Our team will walk your stakeholders through architecture, data handling, and compliance.
              </p>
            </div>
            <Button variant="primary" size="md" className="shrink-0">
              Request security pack
            </Button>
          </div>
        </FadeUp>
      </Container>
    </section>
  )
}
