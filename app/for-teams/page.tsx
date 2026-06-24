import type { Metadata } from 'next';
import { SiteNav, SiteFooter, FadeIn } from '@leader/marketing-ui';
import { MarketingIcon, type MarketingIconName } from '../_marketing/icons';

const APP_URL = 'https://ops.leaderhq.io';

export const metadata: Metadata = {
  title: 'LeaderOps for Teams — LeaderOps',
  description:
    'Give every leader on your team the same operational intelligence — rank data, coaching signals, and daily action priorities — so your whole organization moves together.',
  alternates: { canonical: '/for-teams' },
};

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

const TEAM_FEATURES = [
  'Every leader in your organization gets their own daily priority feed',
  'Shared comp plan upload — one extract, available to the whole leadership team',
  'Coaching signal visibility across your downline structure',
  'Rank advancement tracking at every level of the organization',
  'Content and recruiting intelligence for the whole team',
  'No IT setup — each leader is ready in under 10 minutes',
];

const TEAM_FITS: { icon: MarketingIconName; title: string; body: string }[] = [
  {
    icon: 'users',
    title: 'MLM / Direct Sales Leadership Lines',
    body: 'Put your entire leadership team on LeaderOps. Everyone sees the same rank windows, the same coaching signals, the same priorities — and your line moves in the same direction at the same time.',
  },
  {
    icon: 'trending-up',
    title: 'Emerging Leader Development',
    body: 'Teach new leaders how to lead operationally, not just motivationally. LeaderOps gives emerging leaders the same intelligence framework the top producers use — and a daily habit that builds real field skills.',
  },
  {
    icon: 'bar-chart',
    title: 'Cross-Line Coaching Organizations',
    body: "Whether you coach inside your own line or support leaders across multiple legs, LeaderOps gives you a consistent operating system that every leader can execute — regardless of what company they're building with.",
  },
];

interface Plan {
  name: string;
  price: string;
  cadence: string;
  note?: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

const PLANS: Plan[] = [
  {
    name: 'Starter',
    price: '$0',
    cadence: '/mo',
    note: 'Up to 50 downline members',
    features: [
      'Comp plan upload (1 plan)',
      'Daily priority feed',
      'Basic rank tracking',
      'LeaderSuite integration',
    ],
    cta: 'Get Started Free',
  },
  {
    name: 'Leader',
    price: '$29',
    cadence: '/mo',
    note: 'For active field leaders',
    features: [
      'Everything in Starter',
      'Unlimited downline members',
      'Coaching signals & alerts',
      'Content intelligence',
      'Real-time rank alerts',
    ],
    highlighted: true,
    cta: 'Start Free Trial',
  },
  {
    name: 'Executive',
    price: '$59',
    cadence: '/mo',
    note: 'For top producers',
    features: [
      'Everything in Leader',
      'Multiple comp plans',
      'Team performance reports',
      'Advanced downline analytics',
      'Priority support',
    ],
    cta: 'Start Free Trial',
  },
];

export default function ForTeamsPage() {
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
          className="relative overflow-hidden text-white"
          style={{ background: '#0d1b2e' }}
        >
          <div className="mx-auto max-w-[720px] px-4 py-20 text-center sm:px-6 sm:py-24">
            <FadeIn>
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-green">
                For Leadership Teams
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
                One system.
                <br />
                Every leader.
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
                When every leader in your organization wakes up to the same
                intelligence and the same ranked priorities, your line stops
                moving in different directions — and starts moving together.
              </p>
              <div className="mt-8">
                <a
                  href={`${APP_URL}/signup`}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-md shadow-black/30 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get LeaderOps Free
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Features + Fits */}
        <section className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                What every leader gets
              </h2>
              <ul className="mt-6 space-y-3 text-base text-zinc-700">
                {TEAM_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="mt-0.5 shrink-0 text-brand-green" aria-hidden>&#x2713;</span>
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={120}>
              <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                Built for these organizations
              </h2>
              <div className="mt-6 space-y-4">
                {TEAM_FITS.map((t) => (
                  <div
                    key={t.title}
                    className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition hover:shadow-md"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                      <MarketingIcon name={t.icon} size={24} />
                    </div>
                    <h3 className="mt-3 text-base font-bold text-brand-navy">
                      {t.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-zinc-600">{t.body}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          className="border-y border-zinc-100"
          style={{ background: 'color-mix(in srgb, #5CAC23 6%, #fff)' }}
        >
          <div className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 sm:py-24">
            <FadeIn>
              <h2 className="text-center text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                Pricing that scales with your team.
              </h2>
            </FadeIn>
            <div className="mt-12 grid items-stretch gap-5 sm:grid-cols-3">
              {PLANS.map((plan, i) => (
                <FadeIn
                  key={plan.name}
                  delay={i * 80}
                  className={`flex flex-col rounded-2xl border bg-white p-6 ${
                    plan.highlighted
                      ? 'border-brand-green/40 shadow-md ring-1 ring-brand-green/20'
                      : 'border-zinc-100 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-brand-navy">{plan.name}</h3>
                    {plan.highlighted && (
                      <span className="rounded-full bg-brand-green px-2.5 py-0.5 text-xs font-semibold text-white">
                        Most popular
                      </span>
                    )}
                  </div>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-brand-navy">
                      {plan.price}
                    </span>
                    <span className="text-sm text-zinc-400">{plan.cadence}</span>
                  </div>
                  {plan.note && (
                    <p className="mt-1 text-xs text-zinc-500">{plan.note}</p>
                  )}
                  <ul className="mt-5 flex-1 space-y-2.5 text-sm text-zinc-600">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="text-brand-green" aria-hidden>&#x2713;</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`${APP_URL}/signup`}
                    className={`mt-6 inline-flex min-h-[44px] w-full items-center justify-center rounded-xl px-4 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      plan.highlighted
                        ? 'bg-brand-green text-white hover:brightness-110 focus-visible:outline-brand-navy'
                        : 'bg-brand-navy text-white hover:brightness-125 focus-visible:outline-brand-green'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section style={{ background: '#0d1b2e' }}>
          <div className="mx-auto max-w-[1100px] px-4 py-20 text-center sm:px-6 sm:py-24">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-green">
                Your entire leadership team can be live before tomorrow morning.
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Start with one leader. Scale to the whole organization.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-300">
                Get your first leader on LeaderOps free today.
              </p>
              <a
                href={`${APP_URL}/signup`}
                className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get LeaderOps Free
              </a>
            </FadeIn>
          </div>
        </section>
      </main>
      <SiteFooter productSuffix="Ops" columns={FOOTER_COLUMNS} />
    </div>
  );
}
