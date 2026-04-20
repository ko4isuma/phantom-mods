'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const BASE = '/video-edition/'

interface VideoItem {
  title: string
  file: string
  desc: string
}

interface Section {
  name: string
  left: VideoItem[]
  right: VideoItem[]
}

const sections: Section[] = [
  {
    name: 'Foraging',
    left: [
      { title: 'Fig', file: 'Foraging-video1.webm', desc: 'Automated Fig foraging on the Galatea island with efficient pathing.' },
      { title: 'Lushlilac', file: 'Foraging-video2.webm', desc: 'Lushlilac foraging with smart collection and teleport optimization.' },
      { title: 'Etherwarp Shortcuts', file: 'Foraging-video3.webm', desc: 'Lightning-fast Etherwarp routing between foraging spots.' },
      { title: 'Park Foraging', file: 'Foraging-video4.webm', desc: 'Hub Park foraging with automated route switching.' },
    ],
    right: [
      { title: 'Jumping & Scaffolding', file: 'Foraging-video5.webm', desc: 'Dynamic jumping and scaffolding for elevated foraging areas.' },
      { title: 'Mangrove', file: 'Foraging-video6.webm', desc: 'Mangrove foraging with full Galatea integration.' },
      { title: 'Shards', file: 'Foraging-video7.webm', desc: 'Automated Shard collection while foraging.' },
    ],
  },
  {
    name: 'Farming',
    left: [
      { title: 'Megafarm Builder', file: 'Farming-video1.webm', desc: 'Automatically constructs large-scale farming setups.' },
      { title: 'Echo Farming', file: 'Farming-video2.webm', desc: 'Next-gen Echo farming with improved fail-safes.' },
      { title: 'Failsafe Flying', file: 'Farming-video3.webm', desc: 'Smart failsafe system for flying-based farming scripts.' },
      { title: 'New Visitor Filtering', file: 'Farming-video4.webm', desc: 'Advanced filtering to accept only profitable visitors.' },
    ],
    right: [
      { title: 'Flower S-Shape Farming', file: 'Farming-video5.webm', desc: 'Optimized S-shape pattern for maximum flower yield.' },
      { title: 'Squeaky Mousemat', file: 'Farming-video6.webm', desc: 'Humanized mouse movement for flower farming.' },
      { title: 'Pest Traps', file: 'Farming-video7.webm', desc: 'Automated pest trap management for the Garden.' },
    ],
  },
  {
    name: 'Combat',
    left: [
      { title: 'New Tarantula', file: 'Combat-video1.webm', desc: 'Reworked Spider/Tara slayer with improved targeting.' },
      { title: 'Dynamic Weapon Choice', file: 'Combat-video2.webm', desc: 'Auto-swaps weapons based on mob HP and distance.' },
    ],
    right: [
      { title: 'Sven Caves', file: 'Combat-video3.webm', desc: 'Efficient Wolf/Sven slayer in cave environments.' },
    ],
  },
  {
    name: 'Miscellaneous',
    left: [
      { title: 'Fishing Hunting', file: 'Miscellaneous-video1.webm', desc: 'Hunts sea creatures during fishing sessions automatically.' },
      { title: 'Experiments', file: 'Miscellaneous-video2.webm', desc: 'Automated Experiments table solver.' },
      { title: 'Alchemy Builder', file: 'Miscellaneous-video3.webm', desc: 'Builds alchemy setups and brews potions automatically.' },
      { title: 'Carpentry', file: 'Miscellaneous-video4.webm', desc: 'Automated Carpentry skill leveling.' },
    ],
    right: [
      { title: 'Upgraded Pathfinding', file: 'Miscellaneous-video5.webm', desc: 'Smoother, more human-like pathfinding for all scripts.' },
      { title: 'New Alchemy', file: 'Miscellaneous-video6.webm', desc: 'Fully reworked Alchemy script for Modern Minecraft.' },
      { title: 'Chest Bottle Filler', file: 'Miscellaneous-video7.webm', desc: 'Fills empty bottles from a chest automatically.' },
    ],
  },
  {
    name: 'Fishing',
    left: [
      { title: 'Etherwarping', file: 'Fishing-video1.webm', desc: 'Uses Etherwarp to teleport to fishing locations instantly.' },
      { title: 'Setup Script', file: 'Fishing-video2.webm', desc: 'Automatically sets up an optimal fishing spot.' },
    ],
    right: [
      { title: 'Black Hole', file: 'Fishing-video3.webm', desc: 'Black Hole fishing mode with automated positioning.' },
    ],
  },
  {
    name: 'Other',
    left: [
      { title: 'Modern Minecraft', file: 'Other-video1.webm', desc: 'Full 1.21.x compatibility with all Taunahi features.' },
    ],
    right: [
      { title: 'Other Improvements', file: 'Other-video2.webm', desc: 'Dozens of QoL fixes, performance improvements, and bug fixes.' },
    ],
  },
]

function LazyVideo({ src, title, desc }: { src: string; title: string; desc: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef     = useRef<HTMLVideoElement>(null)
  const [loaded, setLoaded]     = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true)
          obs.disconnect()
        }
      },
      { rootMargin: '200px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  function onTimeUpdate() {
    const v = videoRef.current
    if (!v || !v.duration) return
    setProgress((v.currentTime / v.duration) * 100)
  }

  return (
    <div ref={containerRef} className="rounded-xl overflow-hidden border border-[#7f2f30]/30 bg-[#141416]">
      <div className="aspect-video bg-[#0e0e0f] relative">
        {loaded ? (
          <video
            ref={videoRef}
            src={src}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            onTimeUpdate={onTimeUpdate}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-[#7f2f30] border-t-transparent animate-spin" />
          </div>
        )}
      </div>
      {/* Progress bar */}
      <div className="h-0.5 bg-white/10">
        <div
          className="h-full bg-[#9f3f40] transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="p-3">
        <div className="text-white font-semibold text-sm mb-1">{title}</div>
        <div className="text-gray-500 text-xs leading-relaxed">{desc}</div>
      </div>
    </div>
  )
}

export default function EditionPage() {
  return (
    <div className="min-h-screen" style={{ background: '#0e0e0f' }}>
      {/* Animated gradient background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(127,47,48,0.25) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 text-center px-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7f2f30]/20 border border-[#7f2f30]/40 text-[#e88] text-xs font-semibold mb-6">
          🎉 New Release
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white mb-4">Edition v4.0</h1>
        <p className="text-gray-500 text-lg mb-4">30th of January 2026</p>
        <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
          The biggest Taunahi update ever. New scripts, reworked engines, and full Minecraft 1.21.x support.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link href="/dashboard" className="px-6 py-2.5 rounded-xl bg-[#7f2f30] hover:bg-[#9f3f40] text-white font-semibold text-sm transition-colors">
            Open Dashboard
          </Link>
          <Link href="/docs" className="px-6 py-2.5 rounded-xl border border-[#7f2f30]/40 hover:border-[#7f2f30]/70 text-gray-300 font-semibold text-sm transition-colors">
            Documentation
          </Link>
        </div>
      </section>

      {/* Sections */}
      <div className="max-w-6xl mx-auto px-4 pb-24 space-y-20">
        {sections.map(section => (
          <div key={section.name}>
            {/* Section heading */}
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-white font-black text-3xl">{section.name}</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-[#7f2f30]/60 to-transparent" />
            </div>

            {/* Two-column layout with dashed divider */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-0 md:gap-6">
              {/* Left column */}
              <div className="space-y-4 pb-4 md:pb-0">
                {section.left.map(v => (
                  <LazyVideo
                    key={v.file}
                    src={`${BASE}${v.file}`}
                    title={v.title}
                    desc={v.desc}
                  />
                ))}
              </div>

              {/* Dashed divider */}
              <div className="hidden md:block w-px border-l border-dashed border-[#7f2f30]/30 self-stretch" />

              {/* Right column */}
              <div className="space-y-4">
                {section.right.map(v => (
                  <LazyVideo
                    key={v.file}
                    src={`${BASE}${v.file}`}
                    title={v.title}
                    desc={v.desc}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
