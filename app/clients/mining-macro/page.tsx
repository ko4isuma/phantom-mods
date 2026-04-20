import Link from 'next/link'
import MiningMacroNav from './MiningMacroNav'

const highlights = [
  {
    title: 'Route Mining',
    description: 'Flexible waypoint routes for Gemstone and Tunnel mining with smart recovery logic.',
    icon: '⛏️',
  },
  {
    title: 'Powder Grinding',
    description: 'Automated chest loops and optimized powder sessions for long AFK runs.',
    icon: '💎',
  },
  {
    title: 'Session Safety',
    description: 'Human-like delays and fail-safe checks built for stable daily usage.',
    icon: '🛡️',
  },
]

export default function MiningMacroHomePage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/clients"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-phantom-accent text-sm mb-8 transition-colors"
        >
          ← Back to Clients
        </Link>

        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            Mining Macro <span className="text-phantom-accent">Ecosystem</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            A standalone space for Mining Macro — separate navigation, dedicated download page, and quick docs.
          </p>
          <MiningMacroNav active="home" />
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {highlights.map(item => (
            <article key={item.title} className="glass rounded-2xl p-6 border border-phantom-accent/20">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h2 className="text-xl font-bold text-white mb-2">{item.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="glass rounded-3xl p-8 border border-phantom-accent/30">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Start in one click</h2>
          <p className="text-gray-400 mb-6">
            Download the latest Mining Macro JAR and follow a quick setup checklist in Docs.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/clients/mining-macro/download"
              className="px-6 py-3 rounded-xl bg-phantom-accent hover:bg-phantom-accent-light text-white font-semibold transition-all duration-300 glow-accent"
            >
              Open Download
            </Link>
            <Link
              href="/clients/mining-macro/docs"
              className="px-6 py-3 rounded-xl glass border border-phantom-accent/30 text-white font-semibold hover:border-phantom-accent/60 transition-all duration-300"
            >
              Open Docs
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
