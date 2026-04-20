import Link from 'next/link'

const sections = [
  {
    icon: '📖',
    title: 'Documentation',
    desc: 'Full API reference, config options, and script descriptions — coming soon.',
  },
  {
    icon: '🔧',
    title: 'How to Install',
    desc: 'Step-by-step setup guide for Fabric 1.21.1 and Forge 1.8.9 — coming soon.',
  },
  {
    icon: '📋',
    title: 'Changelog',
    desc: 'Version history, patch notes, and upcoming features — coming soon.',
  },
  {
    icon: '💬',
    title: 'Community',
    desc: 'Join thousands of players, share configs, and get help — coming soon.',
  },
]

export default function TaunahiPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/clients"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-phantom-accent text-sm mb-10 transition-colors"
        >
          ← Back to Clients
        </Link>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-phantom-accent/30 text-sm text-gray-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" aria-hidden="true" />
            <span className="sr-only">Status: </span>
            Ecosystem — Coming Soon
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
            Taunahi <span className="text-phantom-accent">V4</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            The full Taunahi V4 ecosystem is being built. Soon you will have access to
            documentation, install guides, changelogs, and a thriving community — all in one place.
          </p>
        </div>

        {/* Placeholder cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {sections.map((s, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-8 border border-phantom-accent/20 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-phantom-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-white font-bold text-xl mb-3">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-6">
                <span className="px-3 py-1 rounded-full bg-phantom-accent/15 border border-phantom-accent/30 text-phantom-accent text-xs font-semibold uppercase tracking-wide">
                  Soon
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="glass rounded-3xl p-10 border border-phantom-accent/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want to get started now?</h2>
          <p className="text-gray-400 mb-8">
            Check out the existing setup guide while the full ecosystem is being built.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/guide"
              className="px-8 py-4 rounded-xl bg-phantom-accent hover:bg-phantom-accent-light text-white font-bold text-lg transition-all duration-300 glow-accent"
            >
              Setup Guide
            </Link>
            <Link
              href="/clients"
              className="px-8 py-4 rounded-xl glass border border-phantom-accent/30 text-white font-bold text-lg hover:border-phantom-accent/60 transition-all duration-300"
            >
              ← Back to Clients
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
