import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteNav, SiteFooter, FadeIn } from '@leader/marketing-ui';

const APP_URL = 'https://ops.leaderhq.io';

export const metadata: Metadata = {
  title: 'Pricing — LeaderOps',
  description:
    'Simple pricing. Start free with up to 50 downline members — upgrade when your team grows.',
  alternates: { canonical: '/pricing' },
};

const NAV_LINKS = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Intelligence', href: '/#intelligence' },
  { label: 'Pricing', href: '/pricing' },
];

const FOOTER_COLUMNS = [
  {
    heading: 'Product',
    links: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Intelligence', href: '/#intelligence' },
      { label: 'Pricing', href: '/pricing' },
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

interface Plan {
  name: string;
  price: string;
  cadence: string;
  note: string;
  desc: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
  ctaStyle: 'outline' | 'green' | 'dark';
}

const PLANS: Plan[] = [
  {
    name: 'Starter',
    price: '$0',
    cadence: '/mo',
    note: 'Up to 50 downline members',
    desc: 'Everything you need to get your first daily priority feed running.',
    features: [
      'Comp plan upload (1 plan)',
      'Daily priority feed',
      'Basic rank tracking',
      'Leader Suite integration',
    ],
    cta: 'Get Started Free',
    ctaStyle: 'outline',
  },
  {
    name: 'Leader',
    price: '$29',
    cadence: '/mo',
    note: 'For active field leaders',
    desc: 'Full intelligence for leaders building an active downline.',
    features: [
      'Everything in Starter',
      'Unlimited downline members',
      'Coaching signals & alerts',
      'Content intelligence',
      'Real-time rank alerts',
    ],
    highlighted: true,
    cta: 'Start Free Trial',
    ctaStyle: 'green',
  },
  {
    name: 'Executive',
    price: '$59',
    cadence: '/mo',
    note: 'For top producers',
    desc: 'Advanced analytics and multi-plan intelligence for top producers.',
    features: [
      'Everything in Leader',
      'Multiple comp plans',
      'Team performance reports',
      'Advanced downline analytics',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    ctaStyle: 'dark',
  },
];

const FAQS = [
  {
    q: 'Is the Starter plan actually free forever?',
    a: 'Yes. No credit card required. No trial that expires. The Starter plan gives you real comp plan intelligence and a daily priority feed for up to 50 downline members — permanently. It is not a crippled preview.',
  },
  {
    q: 'What is included in the free trial for paid plans?',
    a: 'The free trial gives you full access to the Leader or Executive plan for 14 days — no credit card required. At the end of the trial you choose a plan or stay on Starter.',
  },
  {
    q: 'Can I change plans at any time?',
    a: 'Yes. Upgrade instantly. Downgrade or cancel at the end of your billing period. No lock-in, no penalty.',
  },
  {
    q: 'What counts toward the 50-member Starter limit?',
    a: 'Any person in your imported downline counts as one member. Contacts from Leader Suite integrations (LeaderLeads, LeaderCal, etc.) do not count toward the limit.',
  },
  {
    q: 'Do you offer discounts for large teams?',
    a: 'For organizations of 10+ leaders, we offer custom pricing. Email support@leaderhq.io with "LeaderOps Team" in the subject line.',
  },
];

export default function PricingPage() {
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
              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
                Simple pricing.
                <br />
                No surprises.
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
                Start free. Upgrade when your team grows.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Plans */}
        <section
          className="border-y border-zinc-100"
          style={{ background: 'color-mix(in srgb, #5CAC23 6%, #fff)' }}
        >
          <div className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 sm:py-24">
            <div className="grid items-stretch gap-5 sm:grid-cols-3">
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
                  {plan.highlighted && (
                    <span className="self-start rounded-full bg-brand-green px-2.5 py-0.5 text-xs font-semibold text-white">
                      Most popular
                    </span>
                  )}
                  <h3 className="mt-3 text-lg font-bold text-brand-navy">
                    {plan.name}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-brand-navy">
                      {plan.price}
                    </span>
                    <span className="text-sm text-zinc-400">{plan.cadence}</span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-500">{plan.note}</p>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                    {plan.desc}
                  </p>
                  <hr className="my-5 border-zinc-100" />
                  <ul className="flex-1 space-y-2.5 text-sm text-zinc-600">
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
                      plan.ctaStyle === 'green'
                        ? 'bg-brand-green text-white hover:brightness-110 focus-visible:outline-brand-navy'
                        : plan.ctaStyle === 'dark'
                          ? 'bg-brand-navy text-white hover:brightness-125 focus-visible:outline-brand-green'
                          : 'border border-brand-navy/20 bg-white text-brand-navy hover:bg-zinc-50 focus-visible:outline-brand-green'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mx-auto max-w-[720px] px-4 py-20 sm:px-6 sm:py-24">
          <FadeIn>
            <h2 className="text-center text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Pricing questions, answered.
            </h2>
          </FadeIn>
          <dl className="mt-12 space-y-6">
            {FAQS.map((faq, i) => (
              <FadeIn
                key={faq.q}
                delay={i * 50}
                className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm"
              >
                <dt className="text-base font-bold text-brand-navy">{faq.q}</dt>
                <dd className="mt-2 leading-relaxed text-zinc-600">{faq.a}</dd>
              </FadeIn>
            ))}
          </dl>
        </section>

        {/* CTA */}
        <section style={{ background: '#0d1b2e' }}>
          <div className="mx-auto max-w-[820px] px-4 py-20 text-center sm:px-6 sm:py-24">
            <FadeIn>
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-green">
                Ready to stop flying blind?
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Start free. Upgrade when you&apos;re ready.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-300">
                No credit card. No time limit. Your first daily priority feed is
                10 minutes away.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={`${APP_URL}/signup`}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get LeaderOps Free
                </a>
                <Link
                  href="/how-it-works"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/30 px-5 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  See How It Works &rarr;
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
