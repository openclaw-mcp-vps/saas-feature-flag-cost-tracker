export default function Page() {
  const faqs = [
    {
      q: 'Which feature flag platforms are supported?',
      a: 'FlagCost connects to LaunchDarkly, Split.io, Unleash, and Flagsmith via their APIs. More providers are added regularly.'
    },
    {
      q: 'How does cost tracking work?',
      a: 'We pull usage metrics from each provider on a schedule, calculate spend based on your plan tiers, and surface trends and anomalies in a unified dashboard.'
    },
    {
      q: 'Is my API key data secure?',
      a: 'All credentials are encrypted at rest and in transit. We never store raw API keys — only encrypted tokens used solely for data fetching.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Feature Flag Costs<br />
          <span className="text-[#58a6ff]">Across Every Platform</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Connect LaunchDarkly, Split, and more in minutes. Get real-time cost trends,
          usage analytics, and actionable optimization recommendations — all in one dashboard.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Saving — $16/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required to explore. Cancel anytime.</p>
      </section>

      {/* Stats strip */}
      <section className="grid grid-cols-3 gap-4 mb-20 text-center">
        {[
          { value: '4+', label: 'Providers Supported' },
          { value: '< 1min', label: 'Setup Time' },
          { value: '30%', label: 'Avg. Cost Saved' }
        ].map((s) => (
          <div key={s.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">{s.value}</div>
            <div className="text-[#8b949e] text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, Transparent Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$16</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited provider connections',
              'Real-time cost dashboards',
              'Usage trend analytics',
              'Optimization recommendations',
              'Email alerts on cost spikes',
              'Priority support'
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs mt-20">
        &copy; {new Date().getFullYear()} FlagCost. All rights reserved.
      </footer>
    </main>
  )
}
