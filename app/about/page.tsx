import type { Metadata } from 'next';
import { SiteNav, SiteFooter, FadeIn } from '@leader/marketing-ui';
import { MarketingIcon } from '@/app/_marketing/icons';

export const metadata: Metadata = {
  title: 'About — LeaderOps',
  description:
    'LeaderOps is part of the Leader Suite — built by the people who lived the problem of managing a downline across too many disconnected tools.',
  alternates: { canonical: '/about' },
};

const APP_URL = 'https://ops.leaderhq.io';

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

const VALUES = [
  {
    icon: 'target',
    title: 'Decisions, not dashboards',
    body: 'Data is only useful when it tells you what to do. LeaderOps turns your downline numbers into a ranked action list — every morning, without you having to interpret anything.',
  },
  {
    icon: 'bolt',
    title: 'Simple by default',
    body: "If it requires training, it won't get used. LeaderOps has to work for a top producer who is moving fast and doesn't have time to learn another tool.",
  },
  {
    icon: 'users',
    title: 'Built for field leaders',
    body: 'We build for the people who are actually in the field — recruiting, coaching, qualifying, and closing — not for enterprise IT buyers. The best tool wins the most leaders.',
  },
] as const;

export default function AboutPage() {
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
        {/* Hero */}
        <section
          className="text-white"
          style={{ background: '#0d1b2e' }}
        >
          <div className="mx-auto max-w-[820px] px-4 py-24 sm:px-6">
            <FadeIn>
              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
                We built this because
                <br />
                we lived the problem.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-zinc-300 sm:text-xl">
                LeaderOps is part of the Leader Suite — a set of tools built for
                the people who lead, sell, and build organizations in the real
                world. Not for enterprise IT. For the field.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Story */}
        <section className="mx-auto max-w-[820px] px-4 py-20 sm:px-6 sm:py-24">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              The story behind the product
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-zinc-600">
              Field leaders in network marketing and direct sales share one
              operational problem: every morning starts with a question that
              should already be answered — who do I call today? The back-office
              shows volume numbers. The CRM shows pipeline. The scheduler shows
              appointments. But none of them tell you what actually matters
              right now.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              LeaderOps was built to answer that question automatically. Upload
              your comp plan once, connect your tools, and wake up to a
              prioritized action list — who is close to advancing, who needs
              coaching, where your recruiting momentum is, and what to do about
              it. Every morning.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              We&apos;re part of the Leader Suite of software products. LeaderOps
              is where your intelligence lives. The rest of the suite is built
              around the tools you use to act on it.
            </p>
            <div className="mt-10">
              <a
                href="https://leaderhq.io"
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-6 text-base font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
              >
                Explore the Leader Suite — LeaderHQ &rarr;
              </a>
            </div>
          </FadeIn>
        </section>

        {/* Values */}
        <section
          className="border-y border-zinc-100"
          style={{ background: 'color-mix(in srgb, #0d1b2e 4%, #fff)' }}
        >
          <div className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 sm:py-24">
            <FadeIn>
              <h2 className="text-center text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                What we stand for
              </h2>
            </FadeIn>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {VALUES.map((v, i) => (
                <FadeIn
                  key={v.title}
                  delay={i * 80}
                  className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                    <MarketingIcon name={v.icon} size={24} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-brand-navy">
                    {v.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-zinc-600">{v.body}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Suite CTA */}
        <section className="mx-auto max-w-[560px] px-4 py-20 text-center sm:px-6 sm:py-24">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Part of the Leader Suite
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              LeaderOps is one product in a growing suite of tools for leaders,
              sales professionals, and the organizations they build. Visit
              LeaderHQ to see what else we&apos;re building.
            </p>
            <a
              href="https://leaderhq.io"
              className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-navy px-6 text-base font-semibold text-white shadow-md transition hover:brightness-125 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
            >
              Explore LeaderHQ
            </a>
          </FadeIn>
        </section>
      </main>
      <SiteFooter productSuffix="Ops" columns={FOOTER_COLUMNS} />
    </div>
  );
}
