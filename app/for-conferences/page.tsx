import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteNav, SiteFooter, FadeIn } from '@leader/marketing-ui';

const APP_URL = 'https://ops.leaderhq.io';

export const metadata: Metadata = {
  title: 'LeaderOps for Conferences & Events — LeaderOps',
  description:
    'Walk into your next national conference knowing exactly who on your team is close to advancing — and what to do about it before you leave.',
  alternates: { canonical: '/for-conferences' },
};

const STATS: { num: string; label: string }[] = [
  { num: '4–7', label: 'days to act on rank advancement windows at events' },
  { num: '40+', label: 'downline conversations at a typical 2-day conference' },
  { num: '3X', label: 'coaching impact when you know who needs it before you arrive' },
  { num: '$0', label: 'to get started with LeaderOps' },
];

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

const FIX_ITEMS = [
  { text: 'See exactly who on your team is within striking distance of the next rank — before you walk the floor' },
  { text: 'Know which legs need volume and by how many days — so conference conversations become coaching, not catch-up' },
  { text: 'Surface the team members whose engagement has dropped — and have the right conversation before they go quiet' },
  { text: 'Leave the conference with actions already ranked — no debrief required' },
];

export default function ForConferencesPage() {
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
            style={{
              background:
                'radial-gradient(80% 520px at 50% -10%, color-mix(in srgb, #0d1b2e 9%, transparent), transparent)',
            }}
          />
          <div className="mx-auto grid max-w-[1100px] items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:py-24">
            <FadeIn>
              <span className="inline-flex items-center rounded-full bg-brand-navy px-3 py-1 text-xs font-semibold text-white">
                For Conferences &amp; Events
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-brand-navy sm:text-5xl lg:text-[3.4rem]">
                Walk in knowing
                <br />
                who needs you most.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600">
                The best leaders at every national conference already know who
                is close to ranking, who is slipping, and who needs a
                conversation before they leave. LeaderOps gives you that
                intelligence before you walk through the door.
              </p>
              <ul className="mt-7 space-y-3 text-base text-zinc-700">
                {[
                  { text: 'Rank advancement windows surfaced before the conference starts.' },
                  { text: 'Coaching alerts for team members who are going quiet.' },
                  { text: 'Daily priority list updates throughout the event.' },
                  { text: 'Leave with actions ranked — no debrief required.' },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-2">
                    <span className="text-brand-green" aria-hidden>&#x2713;</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`${APP_URL}/signup`}
                className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-6 text-base font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
              >
                Get LeaderOps Free
              </a>
            </FadeIn>
            <FadeIn delay={120}>
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-zinc-100 bg-white p-6 text-center shadow-sm"
                  >
                    <div className="text-4xl font-extrabold text-brand-navy">
                      {s.num}
                    </div>
                    <div className="mt-2 text-sm leading-snug text-zinc-600">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Problem / Fix */}
        <section className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 sm:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                The conference
                <br />
                intelligence gap.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-zinc-600">
                Most leaders walk into a national conference with the same
                information they always have — a vague sense of who is doing
                well and a mental list of people they want to check in with.
                That&apos;s not enough.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-zinc-600">
                Rank advancement windows close in days, not weeks. Coaching
                conversations are most effective when you know the specific
                gap — not just that someone is &ldquo;struggling.&rdquo; The
                leaders who use conference time best arrive with a briefing, not
                a vibe.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-zinc-600">
                Without a system, you spend conference time gathering
                information you should already have — instead of using it.
              </p>
            </FadeIn>
            <FadeIn delay={120}>
              <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                The LeaderOps fix.
              </h2>
              <ul className="mt-5 space-y-3 text-base text-zinc-700">
                {FIX_ITEMS.map((item) => (
                  <li key={item.text} className="flex items-start gap-2">
                    <span className="text-brand-green" aria-hidden>&#x2713;</span>
                    <span className="leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* Dark band */}
        <section style={{ background: '#0d1b2e' }}>
          <div className="mx-auto max-w-[720px] px-4 py-20 text-center sm:px-6 sm:py-24">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-green">
                Daily Intelligence
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Conference week is a sprint.
                <br />
                Show up ready.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-zinc-300">
                LeaderOps recalculates your priorities every day — so even in
                the middle of a four-day event, you always know what changed
                overnight and who moved to the top of your list.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={`${APP_URL}/signup`}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get LeaderOps Free
                </a>
                <Link
                  href="/#how"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/30 px-6 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  How it works &rarr;
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Final CTA */}
        <section
          className="border-t border-zinc-100"
          style={{ background: 'color-mix(in srgb, #5CAC23 6%, #fff)' }}
        >
          <div className="mx-auto max-w-[820px] px-4 py-20 text-center sm:px-6 sm:py-24">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                Your next conference is your best leadership test.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">
                Show up with intelligence. Leave with momentum. Get LeaderOps
                free and be ready for your next event.
              </p>
              <a
                href={`${APP_URL}/signup`}
                className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
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
