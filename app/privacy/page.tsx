import type { Metadata } from 'next';
import { SiteNav, SiteFooter } from '@leader/marketing-ui';

export const metadata: Metadata = {
  title: 'Privacy Policy — LeaderOps',
  description:
    'How LeaderHQ collects, uses, and protects information when you use LeaderOps.',
  alternates: { canonical: '/privacy' },
};

const APP_URL = 'https://ops.leaderhq.io';
const LAST_UPDATED = 'June 2026';

const NAV_LINKS = [
  { label: 'How It Works', href: '/#how' },
  { label: 'Intelligence', href: '/#intelligence' },
  { label: 'Pricing', href: '/#pricing' },
];

const FOOTER_COLUMNS = [
  {
    heading: 'Product',
    links: [
      { label: 'How It Works', href: '/#how' },
      { label: 'Intelligence', href: '/#intelligence' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'System Status', href: 'https://leaderhq.io/status', external: true },
    ],
  },
  {
    heading: 'Leader Suite',
    links: [
      { label: 'LeaderHQ', href: 'https://leaderhq.io', external: true },
      { label: 'LeaderLeads', href: 'https://leaderleads.io', external: true },
      { label: 'LeaderSend', href: 'https://leadersend.io', external: true },
      { label: 'LeaderCal', href: 'https://leadercal.io', external: true },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900">
      <SiteNav
        productSuffix="Ops"
        links={NAV_LINKS}
        ctaLabel="Get LeaderOps Free"
        ctaHref={`${APP_URL}/signup`}
        loginHref={`${APP_URL}/login`}
      />
      <main className="flex-1">
        <article className="mx-auto max-w-[720px] px-4 py-12 sm:px-6 sm:py-16">
          <header className="mb-10 border-b border-zinc-100 pb-8">
            <h1 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-zinc-500">
              Last updated: {LAST_UPDATED}
            </p>
            <p className="mt-4 rounded-lg bg-zinc-50 px-4 py-3 text-sm leading-relaxed text-zinc-600">
              This is a general template provided for transparency and is not
              legal advice. It describes our standard data practices and may be
              updated as the product evolves. If you have questions, contact us
              at{' '}
              <a
                href="mailto:support@leaderhq.io"
                className="font-medium text-brand-blue hover:underline"
              >
                support@leaderhq.io
              </a>
              .
            </p>
          </header>

          <div className="space-y-8 text-[15px] leading-relaxed text-zinc-700">
            <section>
              <p>
                LeaderOps (&ldquo;LeaderOps,&rdquo; &ldquo;we,&rdquo;
                &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a product of LeaderHQ,
                a division of Know Freedom Technologies. This Privacy Policy
                explains what information we collect, how we use it, and the
                choices you have. By using LeaderOps, you agree to the
                practices described here.
              </p>
            </section>

            <Section title="Information we collect">
              <p>We collect the following categories of information:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-zinc-900">Account email.</strong> The
                  email address you use to sign in and receive notifications.
                </li>
                <li>
                  <strong className="text-zinc-900">Comp plan data.</strong> The
                  compensation plan PDFs you upload and the structured data we
                  extract from them.
                </li>
                <li>
                  <strong className="text-zinc-900">Downline data.</strong> Contact
                  records and performance data you import via CSV or Leader Suite
                  integrations.
                </li>
                <li>
                  <strong className="text-zinc-900">
                    Cookies and session data.
                  </strong>{' '}
                  We use a session cookie to keep you logged in and to operate
                  the service. We do not use third-party advertising trackers.
                </li>
              </ul>
            </Section>

            <Section title="How we use information">
              <p>We use the information we collect to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Provide, maintain, and improve LeaderOps.</li>
                <li>Generate your daily action priorities and rank alerts.</li>
                <li>
                  Send transactional and account-related email (for example,
                  alerts and sign-in messages).
                </li>
                <li>Process subscriptions and billing.</li>
                <li>Protect against fraud, abuse, and security issues.</li>
              </ul>
            </Section>

            <Section title="Service providers">
              <p>
                We share information only with the vendors needed to run the
                service:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-zinc-900">Postmark</strong> processes
                  our transactional email so we can deliver alerts and
                  sign-in messages.
                </li>
                <li>
                  <strong className="text-zinc-900">Stripe</strong> processes
                  payments and manages subscriptions. We do not store your full
                  card numbers; Stripe handles payment data directly.
                </li>
              </ul>
              <p className="mt-3">
                We do not sell your personal information.
              </p>
            </Section>

            <Section title="Data retention">
              <p>
                We retain your account information, comp plan data, and downline
                records for as long as your account is active. When you delete
                content or close your account, we remove the associated data
                within a reasonable period, except where we are required to
                retain it to comply with legal obligations or resolve disputes.
              </p>
            </Section>

            <Section title="Your rights">
              <p>
                You may access, correct, export, or delete your information at
                any time from within the app, or by contacting us. Depending on
                where you live, you may have additional rights under applicable
                privacy laws. To exercise any right, email{' '}
                <a
                  href="mailto:support@leaderhq.io"
                  className="font-medium text-brand-blue hover:underline"
                >
                  support@leaderhq.io
                </a>
                .
              </p>
            </Section>

            <Section title="Security">
              <p>
                We use reasonable technical and organizational measures to
                protect your information. No method of transmission or storage is
                completely secure, but we work to safeguard your data and limit
                access to it.
              </p>
            </Section>

            <Section title="Changes to this policy">
              <p>
                We may update this Privacy Policy from time to time. When we do,
                we will revise the &ldquo;Last updated&rdquo; date above.
                Continued use of LeaderOps after a change constitutes
                acceptance of the updated policy.
              </p>
            </Section>

            <Section title="Governing law">
              <p>
                This Privacy Policy is governed by the laws of the State of
                Wyoming, without regard to its conflict-of-laws principles.
              </p>
            </Section>

            <Section title="Contact us">
              <p>
                If you have questions about this Privacy Policy or your data,
                reach out to:
              </p>
              <address className="mt-3 not-italic leading-relaxed text-zinc-600">
                LeaderHQ
                <br />
                30 N. Gould Street, Suite N
                <br />
                Sheridan, WY 82801
                <br />
                <a
                  href="mailto:support@leaderhq.io"
                  className="font-medium text-brand-blue hover:underline"
                >
                  support@leaderhq.io
                </a>
              </address>
            </Section>
          </div>
        </article>
      </main>
      <SiteFooter productSuffix="Ops" columns={FOOTER_COLUMNS} />
    </div>
  );
}

/* --------------------------------------------------------------- Shared -- */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-3 text-xl font-semibold tracking-tight text-brand-navy">
        {title}
      </h2>
      {children}
    </section>
  );
}
