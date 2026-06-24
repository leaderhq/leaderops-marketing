import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteNav, SiteFooter, FadeIn } from '@leader/marketing-ui';

const APP_URL = 'https://ops.leaderhq.io';

export const metadata: Metadata = {
  title: 'How It Works — LeaderOps',
  description:
    'Upload your comp plan, connect your data, and get your first daily priority feed in under 10 minutes. See exactly how LeaderOps works.',
  alternates: { canonical: '/how-it-works' },
};

const NAV_LINKS = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Intelligence', href: '/#intelligence' },
  { label: 'Pricing', href: '/#pricing' },
];

const FOOTER_COLUMNS = [
  {
    heading: 'Product',
    links: [
      { label: 'How It Works', href: '/how-it-works' },
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

const STEPS: { n: number; title: string; body: React.ReactNode }[] = [
  {
    n: 1,
    title: 'Upload your comp plan PDF',
    body: 'Click "Get LeaderOps Free" and upload your company compensation plan as a PDF. LeaderOps AI reads it and extracts your rank structure, volume requirements, leg rules, and qualification windows — automatically. No manual entry. No spreadsheet required.',
  },
  {
    n: 2,
    title: 'Import your downline data',
    body: "Export your downline from your company back-office as a CSV and drop it in. If you're also on LeaderLeads, LeaderSend, or LeaderCal, connect those directly — LeaderOps maps your data across all of them automatically.",
  },
  {
    n: 3,
    title: 'Get your first priority feed',
    body: 'Within minutes of setup, LeaderOps generates your first ranked action list — who is close to advancing, who is losing momentum, where your recruiting pipeline is, and what to do about each. Your morning briefing starts today.',
  },
  {
    n: 4,
    title: 'Action Intelligence updates every day',
    body: 'Every morning, LeaderOps re-runs your data against your comp plan and recalculates. Rank windows update. Coaching alerts surface. Recruiting signals refresh. You always wake up to a current list — not last week\'s snapshot.',
  },
  {
    n: 5,
    title: 'Act with context, not guesswork',
    body: (
      <>
        Every item in your priority feed tells you why it matters, what the
        urgency is, and what action to take. No interpretation required. The
        work you used to spend Sunday night reconstructing is already done
        before you open your eyes Monday morning.{' '}
        <Link href="/#intelligence" className="font-semibold text-brand-green hover:underline">
          See the intelligence types &rarr;
        </Link>
      </>
    ),
  },
];

const FAQS = [
  {
    q: 'What comp plans does LeaderOps support?',
    a: 'LeaderOps supports binary, unilevel, matrix, and hybrid comp plans. If your company has a PDF comp plan document, LeaderOps can read it. The AI extracts your rank names, PV requirements, leg structure, and qualification windows — regardless of how the plan is formatted.',
  },
  {
    q: 'Do I need to connect Leader Suite apps to use LeaderOps?',
    a: 'No. You can start with just a CSV downline export from your back-office. Leader Suite integrations (LeaderLeads, LeaderSend, LeaderCal) add more signal types — recruiting velocity, content performance, booking data — but the core comp plan intelligence works from a CSV alone.',
  },
  {
    q: 'How often does LeaderOps update my priorities?',
    a: 'Your priority feed refreshes daily. If a rank alert fires mid-day — a leg crosses a qualification threshold, a downline member drops off — an immediate notification is triggered in addition to the daily feed.',
  },
  {
    q: 'Is my comp plan data kept private?',
    a: 'Yes. Your comp plan extract and downline data are private to your account. We do not share or sell your data to third parties. See our Privacy Policy for the full details.',
  },
];

export default function HowItWorksPage() {
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
          <div className="mx-auto max-w-[720px] px-4 py-20 text-center sm:px-6 sm:py-24">
            <FadeIn>
              <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-green">
                Simple by design
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
                Up and running
                <br />
                in under 10 minutes.
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
                No IT team. No complex setup. Just your comp plan PDF, your
                downline export, and your first daily priority feed.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Steps */}
        <section className="mx-auto max-w-[820px] px-4 py-20 sm:px-6 sm:py-24">
          <ol className="space-y-10">
            {STEPS.map((step, i) => (
              <FadeIn as="li" key={step.n} delay={i * 60}>
                <div className="flex gap-5 sm:gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-green text-lg font-bold text-white shadow-md shadow-brand-green/30">
                    {step.n}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-zinc-600">{step.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </ol>
        </section>

        {/* FAQs */}
        <section
          className="border-y border-zinc-100"
          style={{ background: 'color-mix(in srgb, #0d1b2e 4%, #fff)' }}
        >
          <div className="mx-auto max-w-[720px] px-4 py-20 sm:px-6 sm:py-24">
            <FadeIn>
              <h2 className="text-center text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                Questions we hear every time
              </h2>
            </FadeIn>
            <dl className="mt-12 space-y-6">
              {FAQS.map((faq, i) => (
                <FadeIn
                  key={faq.q}
                  delay={i * 60}
                  className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm"
                >
                  <dt className="text-base font-bold text-brand-navy">{faq.q}</dt>
                  <dd className="mt-2 leading-relaxed text-zinc-600">{faq.a}</dd>
                </FadeIn>
              ))}
            </dl>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#0d1b2e' }}>
          <div className="mx-auto max-w-[820px] px-4 py-20 text-center sm:px-6 sm:py-24">
            <FadeIn>
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-green">
                Ready to see it in action?
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Your first daily priority feed is 10 minutes away.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-300">
                Upload your comp plan. Import your data. Wake up tomorrow with
                a ranked action list waiting for you.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={`${APP_URL}/signup`}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get LeaderOps Free
                </a>
                <Link
                  href="/#pricing"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/30 px-5 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  See Pricing &rarr;
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <SiteFooter productSuffix="Ops" columns={FOOTER_COLUMNS} />
    </div>
  );
}
