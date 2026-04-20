'use client'
import Link from 'next/link'

const comingSoon = [
  {
    name: 'Donut SMP Client',
    desc: 'Dedicated automation client for Donut SMP servers. Crafted for the unique mechanics of the network.',
    icon: '🍩',
  },
  {
    name: 'Void Client',
    desc: 'Next-generation client with advanced pathfinding and PvP automation modules.',
    icon: '🌀',
  },
  {
    name: 'Nova Client',
    desc: 'Lightweight and ultra-fast automation client for competitive Minecraft servers.',
    icon: '✨',
  },
]

export default function ClientsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">Clients</h1>
          <p className="text-gray-400 text-xl">Premium automation clients for Minecraft</p>
        </div>

        {/* Taunahi V4 card */}
        <div className="main-card glass rounded-3xl p-8 md:p-12 border border-phantom-accent/40 mb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-phantom-accent/5 to-transparent pointer-events-none" />
          <div className="relative">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h2 className="text-4xl font-black text-white">Taunahi V4</h2>
                  <span className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 text-sm font-semibold whitespace-nowrap">
                    ✅ Working
                  </span>
                </div>
                <p className="text-gray-300 text-sm">v4.0 | Fabric 1.21.1 / Forge 1.8.9</p>
              </div>
              <div className="text-left sm:text-right flex-shrink-0">
                <div className="text-4xl font-black text-phantom-accent">Free</div>
                <div className="text-gray-400 text-sm">All scripts included</div>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-3xl">
              The most advanced free Hypixel Skyblock automation macro. 35+ fully AFK scripts,
              farming, combat, fishing, foraging — all unlocked from day one.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/dashboard"
                className="px-6 py-3 rounded-xl bg-phantom-accent hover:bg-phantom-accent-light text-white font-semibold transition-all duration-300 glow-accent"
              >
                Open Dashboard →
              </Link>
              <Link
                href="/docs"
                className="px-6 py-3 rounded-xl glass border border-phantom-accent/30 text-white font-semibold hover:border-phantom-accent/60 transition-all duration-300"
              >
                Documentation
              </Link>
            </div>
          </div>
        </div>

        {/* Mining Macro card */}
        <div className="main-card glass rounded-3xl p-8 md:p-12 border border-phantom-accent/40 mb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-phantom-accent/5 to-transparent pointer-events-none" />
          <div className="relative">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h2 className="text-4xl font-black text-white">Mining Macro</h2>
                  <span className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 text-sm font-semibold whitespace-nowrap">
                    ✅ Working
                  </span>
                </div>
                <p className="text-gray-300 text-sm">Hypixel Skyblock | Gemstone, Powder, Tunnel</p>
              </div>
              <div className="text-left sm:text-right flex-shrink-0">
                <div className="text-4xl font-black text-phantom-accent">Free</div>
                <div className="text-gray-400 text-sm">Included in Phantom Mods</div>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-3xl">
              Dedicated mining macro ecosystem for Hypixel Skyblock: Mining routes, Gemstone mining,
              Powder grinding, and more automated workflows with safe AFK behavior.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/dashboard"
                className="px-6 py-3 rounded-xl bg-phantom-accent hover:bg-phantom-accent-light text-white font-semibold transition-all duration-300 glow-accent"
              >
                Open Dashboard →
              </Link>
              <Link
                href="/docs"
                className="px-6 py-3 rounded-xl glass border border-phantom-accent/30 text-white font-semibold hover:border-phantom-accent/60 transition-all duration-300"
              >
                Documentation
              </Link>
            </div>
          </div>
        </div>

        {/* Coming Soon section */}
        <div className="mb-10">
          <h3 className="text-3xl font-bold text-white mb-2">Coming Soon</h3>
          <p className="text-gray-400">More clients are in development</p>
        </div>

        <div className="soon-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {comingSoon.map((client, i) => (
            <div
              key={i}
              className="soon-card glass rounded-2xl p-6 border border-phantom-accent/20 opacity-80 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full bg-phantom-accent/20 border border-phantom-accent/40 text-phantom-accent text-xs font-bold uppercase tracking-wide">
                  Coming Soon
                </span>
              </div>
              <div className="text-4xl mb-4 mt-2 pr-28">{client.icon}</div>
              <h4 className="text-white font-bold text-xl mb-3">{client.name}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{client.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
