'use client';

export function OpsCommandMock() {
  const ALERTS = [
    {
      type: 'rank',
      color: '#F87171',
      label: 'Rank Alert',
      text: '3 people in your Silver leg are 200 PV away. Contact window closes in 9 days.',
      meta: 'Comp Plan AI · Downline Data',
    },
    {
      type: 'coach',
      color: '#FDE047',
      label: 'Coaching Needed',
      text: 'Show rate dropped 67% to 38% this month. Your confirmation sequence needs attention.',
      meta: 'LeaderCal · Last 30 days',
    },
    {
      type: 'content',
      color: '#93B5F6',
      label: 'Content Signal',
      text: 'Your Sunday posts outperform by 3.2x. Emails beat social 3:1 on open rate.',
      meta: 'LeaderStreams · LeaderSend',
    },
    {
      type: 'momentum',
      color: '#86EFAC',
      label: 'Momentum',
      text: '14 new contacts via LeaderLeads this week — highest in 60 days.',
      meta: 'LeaderLeads · This week',
    },
  ];

  return (
    <div
      className="w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden border border-zinc-800"
      style={{ background: '#06163E' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 48 48" fill="none">
            <path d="M10 14 L24 3 L38 14 L38 20 L24 9 L10 20 Z" fill="#1862EA" />
            <path d="M10 26 L24 15 L38 26 L38 32 L24 21 L10 32 Z" fill="#FFFFFF" opacity="0.3" />
            <path d="M10 38 L24 27 L38 38 L38 44 L24 33 L10 44 Z" fill="#5CAC23" />
          </svg>
          <span className="text-sm font-bold text-white tracking-tight">
            Leader<span className="text-[#5CAC23]">Ops</span>
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 animate-pulse rounded-full bg-[#5CAC23]" />
          <span className="text-xs text-zinc-400">Live</span>
        </div>
      </div>

      {/* Panel title */}
      <div className="px-5 py-3 border-b border-white/5 bg-white/5">
        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Today&apos;s Priorities</div>
      </div>

      {/* Alert cards */}
      <div className="divide-y divide-white/5">
        {ALERTS.map((alert) => (
          <div key={alert.type} className="flex gap-3 px-5 py-4">
            <div
              className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
              style={{ background: alert.color + '18' }}
            >
              <div className="h-2 w-2 rounded-full" style={{ background: alert.color }} />
            </div>
            <div className="min-w-0">
              <div className="mb-1 text-xs font-semibold" style={{ color: alert.color }}>{alert.label}</div>
              <div className="text-sm leading-relaxed text-zinc-300">{alert.text}</div>
              <div className="mt-1.5 text-xs text-zinc-500">{alert.meta}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 px-5 py-3 flex items-center justify-between">
        <div className="flex gap-1">
          {['S', 'C', 'St', 'L'].map((l) => (
            <div key={l} className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-zinc-400">{l}</div>
          ))}
          <span className="ml-2 text-xs text-zinc-500">4 sources</span>
        </div>
        <span className="text-xs text-zinc-600">Updated just now</span>
      </div>
    </div>
  );
}
