import type { JSX } from 'react';
import Link from 'next/link';
import { SiteNav, SiteFooter, FadeIn, TypewriterHeadline } from '@leader/marketing-ui';
import { OpsCommandMock } from './_marketing/mocks';
import { MarketingIcon, type MarketingIconName } from './_marketing/icons';

const SITE_URL = 'https://leaderops.io';
const APP_URL = 'https://ops.leaderhq.io';

const OPS_PHRASES = [
  'Start leading people.',
  'Start closing rank gaps.',
  'Start coaching your team.',
  'Start growing your downline.',
  'Start winning the season.',
] as const;

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

interface Intelligence {
  title: string;
  body: string;
  sub: string;
  sources: string[];
  color: string;
}

const INTELLIGENCE: Intelligence[] = [
  {
    title: 'Rank Advancement',
    body: `"3 people in your Silver leg are within 200 PV of qualifying. Contact window closes in 9 days."`,
    sub: 'LeaderOps reads your qualification window from your comp plan and counts down in real time. No spreadsheet required.',
    sources: ['Comp Plan AI', 'Downline Data'],
    color: '#F87171',
  },
  {
    title: 'Coaching Alert',
    body: `"Your team show rate dropped from 67% to 38% this month. Review your post-booking confirmation sequence."`,
    sub: 'Cross-references LeaderCal booking data with show data and surfaces the coaching conversation before people go quiet.',
    sources: ['LeaderCal'],
    color: '#FDE047',
  },
  {
    title: 'Content Signal',
    body: `"Your Sunday posts outperform daily content by 3.2x. Recruiting emails have 3x the open rate of social posts."`,
    sub: 'Compares performance across channels so you know where to spend your energy — and where to stop.',
    sources: ['LeaderStreams', 'LeaderSend'],
    color: '#93B5F6',
  },
  {
    title: 'Recruiting Velocity',
    body: `"14 new contacts entered your pipeline from LeaderLeads this week — your highest in 60 days. Keep your follow-up running."`,
    sub: 'Tracks top-of-funnel momentum from your digital card and links it to downstream conversion data.',
    sources: ['LeaderLeads', 'LeaderSend'],
    color: '#86EFAC',
  },
];

interface Feature {
  title: string;
  body: string;
  icon: MarketingIconName;
}

const FEATURES: Feature[] = [
  {
    title: 'Comp Plan AI.',
    body: 'Upload your company comp plan PDF. LeaderOps extracts rank structure, volume requirements, and qualification windows automatically.',
    icon: 'document',
  },
  {
    title: 'Daily Priorities.',
    body: 'Wake up to a ranked list of actions — who to call, what to fix, where to focus. Not vanity metrics. Real decisions.',
    icon: 'target',
  },
  {
    title: 'Rank Alerts.',
    body: 'Know exactly who is close to advancing and how many days you have. Never miss a qualification window again.',
    icon: 'trending-up',
  },
  {
    title: 'Coaching Signals.',
    body: 'See who on your team needs help before they go quiet. Surface the right coaching conversation at the right time.',
    icon: 'users',
  },
  {
    title: 'Content Intelligence.',
    body: 'Know which channel is working and which one is wasting your time. Stop guessing. Start spending energy where it converts.',
    icon: 'bar-chart',
  },
  {
    title: 'Suite Integration.',
    body: 'Every insight is sourced from your real Leader Suite data — LeaderLeads, LeaderCal, LeaderSend, LeaderStreams — all in one view.',
    icon: 'link',
  },
];

interface Step {
  n: number;
  title: string;
  body: string;
  detail: string;
}

const STEPS: Step[] = [
  {
    n: 1,
    title: 'Upload your comp plan.',
    body: 'Upload your company compensation plan as a PDF. LeaderOps AI extracts your rank structure, volume requirements, and leg rules automatically.',
    detail: 'Supports binary, unilevel, matrix, and hybrid plans. Works with any MLM company.',
  },
  {
    n: 2,
    title: 'Connect your data.',
    body: 'Export your downline from your company back-office as a CSV — or connect your Leader Suite apps directly. LeaderOps maps everything automatically.',
    detail: 'Connects to LeaderLeads, LeaderSend, LeaderCal, LeaderStreams, and your back-office export.',
  },
  {
    n: 3,
    title: 'Get daily action priorities.',
    body: 'Wake up to a prioritized list of actions — who to call, what to fix, where to focus. Refreshes daily with new data.',
    detail: 'Alerts fire the moment something changes in your downline or your tools.',
  },
];

interface Plan {
  name: string;
  price: string;
  cadence: string;
  note: string;
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
    cta: 'Get LeaderOps Free',
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

export default function HomePage(): JSX.Element {
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
        <section className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            aria-hidden
            style={{ background: 'radial-gradient(80% 520px at 50% -10%, color-mix(in srgb, #06163E 9%, transparent), transparent)' }}
          />
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-8 md:px-6 lg:grid-cols-2 lg:gap-12 lg:pb-24 lg:pt-12">
            <FadeIn>
              <TypewriterHeadline
                staticPrefix="Stop managing apps."
                phrases={OPS_PHRASES}
                className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
              />
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600">
                LeaderOps reads your comp plan, connects your tools, and tells you exactly who to call and what to do — every single morning.
              </p>
              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <a
                  href={`${APP_URL}/signup`}
                  className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-brand-green px-6 text-base font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy sm:w-auto"
                >
                  Get LeaderOps Free
                </a>
                <a
                  href="#how"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl px-4 text-base font-semibold text-brand-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
                >
                  See how it works
                </a>
              </div>
              <p className="mt-5 text-sm text-zinc-500">
                Free forever on the Starter plan.{' '}
                <strong className="font-semibold text-zinc-700">No IT team. No complex setup.</strong>
              </p>
            </FadeIn>
            <FadeIn delay={120} className="flex justify-center lg:justify-end">
              <OpsCommandMock />
            </FadeIn>
          </div>
        </section>

        {/* Trust band */}
        <FadeIn as="section" className="border-y border-zinc-100 bg-zinc-50 py-5">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Trusted by field leaders across the Leader ecosystem
            </p>
          </div>
        </FadeIn>

        {/* Problem section */}
        <section
          className="border-y border-zinc-100"
          style={{ background: 'color-mix(in srgb, #06163E 5%, #fff)' }}
        >
          <div className="mx-auto max-w-[820px] px-4 py-16 text-center md:px-6 md:py-20">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                Your business is spread across 6 tabs.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">
                Top leaders log into a back-office, a CRM, a scheduler, a social tool, and an email app every day just to figure out what to focus on. That is not leadership. That is administration.
              </p>
              <p className="mt-6 text-lg font-semibold text-brand-navy">
                LeaderOps fixes all of it.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 md:px-6 md:py-24">
          <FadeIn>
            <div className="text-center">
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                Not dashboards. Decisions.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
                Other tools show you what happened. LeaderOps tells you what to do about it — in plain language, with the right urgency.
              </p>
            </div>
          </FadeIn>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <FadeIn
                key={f.title}
                delay={i * 80}
                className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                  <MarketingIcon name={f.icon} size={24} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-brand-navy">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-zinc-600">{f.body}</p>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section
          id="how"
          className="scroll-mt-24 border-y border-zinc-100"
          style={{ background: 'color-mix(in srgb, #5CAC23 6%, #fff)' }}
        >
          <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
            <FadeIn>
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">How it works</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                  Up and running in under 10 minutes.
                </h2>
                <p className="mt-4 text-lg text-zinc-600">
                  No IT team. No complex setup. Just your comp plan PDF, your downline export, and your Leader Suite apps.
                </p>
              </div>
            </FadeIn>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {STEPS.map((s, i) => (
                <FadeIn key={s.n} delay={i * 80}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green/10 text-lg font-extrabold text-brand-green">
                    {s.n}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-brand-navy">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-zinc-600">{s.body}</p>
                  <p className="mt-2 text-sm text-zinc-500">{s.detail}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Intelligence grid */}
        <section id="intelligence" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 md:px-6 md:py-24">
          <FadeIn>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Action Intelligence</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                Real signals. Right now.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
                Four types of intelligence delivered every morning — sourced from your actual Leader Suite data, not generic AI guesses.
              </p>
            </div>
          </FadeIn>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {INTELLIGENCE.map((item, i) => (
              <FadeIn
                key={item.title}
                delay={i * 80}
                className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold" style={{ background: item.color + '18', color: item.color }}>
                  {item.title}
                </div>
                <p className="mb-3 text-base font-medium italic text-zinc-800">{item.body}</p>
                <p className="text-sm leading-relaxed text-zinc-600">{item.sub}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.sources.map((src) => (
                    <span key={src} className="rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-xs text-zinc-500">{src}</span>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          className="scroll-mt-24 border-y border-zinc-100"
          style={{ background: 'color-mix(in srgb, #5CAC23 6%, #fff)' }}
        >
          <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
            <FadeIn>
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                  Simple pricing. No surprises.
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">
                  Start free. Upgrade when your team grows.
                </p>
              </div>
            </FadeIn>
            <div className="mt-12 grid items-stretch gap-5 sm:grid-cols-3">
              {PLANS.map((plan, i) => (
                <FadeIn
                  key={plan.name}
                  delay={i * 80}
                  className={`flex flex-col rounded-2xl border bg-white p-6 ${plan.highlighted ? 'border-brand-green/40 shadow-md ring-1 ring-brand-green/20' : 'border-zinc-100 shadow-sm'}`}
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
                    <span className="text-4xl font-extrabold text-brand-navy">{plan.price}</span>
                    {plan.cadence && <span className="text-sm text-zinc-400">{plan.cadence}</span>}
                  </div>
                  <p className="mt-1 text-xs text-zinc-500">{plan.note}</p>
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
                    className={`mt-6 inline-flex min-h-[44px] w-full items-center justify-center rounded-xl px-4 text-sm font-semibold transition ${plan.highlighted ? 'bg-brand-green text-white hover:brightness-110' : 'bg-brand-navy text-white hover:brightness-125'}`}
                  >
                    {plan.cta}
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section style={{ background: 'linear-gradient(160deg, #06163E, #030b22)' }}>
          <div className="mx-auto max-w-6xl px-4 py-20 text-center md:px-6 md:py-24">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-green">
                Ready to lead like a pro?
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Your best leaders deserve better than a spreadsheet.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-300">
                Give your top performers a command center that thinks alongside them — every morning, every rank cycle, every season.
              </p>
              <a
                href={`${APP_URL}/signup`}
                className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-110"
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
