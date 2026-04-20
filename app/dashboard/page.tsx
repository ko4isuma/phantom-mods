'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

// ─── SVG Icons ────────────────────────────────────────────────────────────────
function IconHome({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  )
}
function IconDownload({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  )
}
function IconEdition({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}
function IconDocs({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  )
}
function IconLogout({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
  )
}
function IconChart({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  )
}
function IconActivity({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )
}
function IconCheck({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}
function IconPuzzle({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
  )
}
function IconWrench({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

const scriptLabels = [
  'Wart/Crops', 'Sugarcane', 'Pumpkin/Melon', 'Cactus', 'Mushroom',
  'Echo Farming', 'Fishing', 'Ghost', 'Zealot', 'Crypt/Rev',
]
const scriptColors = [
  '#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6',
  '#8b5cf6', '#06b6d4', '#ec4899', '#a855f7', '#14b8a6',
]

function generateChartData() {
  const points: number[] = []
  for (let i = 0; i < 30; i++) {
    points.push(Math.floor(20 + Math.random() * 60))
  }
  return points
}

function AreaChart({ data, color }: { data: number[]; color: string }) {
  const width = 400
  const height = 80
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const stepX = width / (data.length - 1)

  const pts = data.map((v, i) => ({
    x: i * stepX,
    y: height - ((v - min) / range) * (height - 8) - 4,
  }))

  const pathD = pts.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(' ')
  const areaD = `${pathD} L ${pts[pts.length - 1].x} ${height} L 0 ${height} Z`

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-20" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`grad-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <path d={areaD} fill={`url(#grad-${color.replace('#', '')})`} />
      <path d={pathD} stroke={color} strokeWidth="2" fill="none" />
    </svg>
  )
}

// ─── Download modal ────────────────────────────────────────────────────────────
function ForgeModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-[#1a1a1c] border border-[#7f2f30]/40 rounded-2xl p-6 max-w-md w-full shadow-2xl">
        <h3 className="text-white font-bold text-xl mb-3">Is Taunahi safe?</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-3">
          Taunahi loads as a standard Forge mod. It never modifies game files permanently —
          all patches are applied at runtime only.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed mb-3">
          The mod communicates only with Hypixel servers and our update endpoint. No
          personal data is transmitted without your consent.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          Forge 1.8.9 is <span className="text-red-400 font-semibold">no longer actively updated</span>.
          We recommend using the Fabric 1.21.1 version for the latest features and fixes.
        </p>
        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-[#7f2f30] hover:bg-[#9f3f40] text-white font-semibold transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  )
}

function FabricPostModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-[#1a1a1c] border border-[#7f2f30]/40 rounded-2xl p-6 max-w-md w-full shadow-2xl">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[#7f2f30]"><IconCheck className="w-6 h-6" /></span>
          <h3 className="text-white font-bold text-xl">Download started!</h3>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          Make sure you have the following dependencies installed:
        </p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[#7f2f30]"><IconPuzzle /></span>
            <div>
              <div className="text-white font-semibold text-sm">Fabric Language Kotlin</div>
              <div className="text-gray-500 text-xs">Required for all Taunahi scripts</div>
            </div>
          </li>
          <li className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[#7f2f30]"><IconWrench /></span>
            <div>
              <div className="text-white font-semibold text-sm">Fabric API</div>
              <div className="text-gray-500 text-xs">Core API for Fabric 1.21.x mods</div>
            </div>
          </li>
        </ul>
        <p className="text-gray-500 text-xs mb-6">
          Place all .jar files in your <code className="text-phantom-accent">.minecraft/mods</code> folder.
        </p>
        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-[#7f2f30] hover:bg-[#9f3f40] text-white font-semibold transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  )
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────
type Tab = 'home' | 'download' | 'logout'

// ─── Home Tab ─────────────────────────────────────────────────────────────────
function HomeTab() {
  const chartData = useRef(generateChartData())

  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <div className="rounded-2xl p-8 border border-[#7f2f30]/40 bg-gradient-to-br from-[#7f2f30]/20 to-[#3a1010]/10 backdrop-blur">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-[#7f2f30] flex items-center justify-center text-white font-black text-lg">P</div>
          <div>
            <h2 className="text-white font-bold text-xl">Welcome to Phantom Mods</h2>
            <p className="text-gray-400 text-sm">Dashboard v4.0</p>
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
          Manage your mod installation, download the latest version, and explore what&apos;s new in Edition v4.0.
          Use the sidebar to navigate between sections.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/edition"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#7f2f30] hover:bg-[#9f3f40] text-white text-sm font-semibold transition-colors"
          >
            <IconEdition className="w-4 h-4" />
            View Edition v4.0
          </Link>
          <Link
            href="/docs/introduction"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#7f2f30]/40 hover:border-[#7f2f30]/70 text-gray-300 text-sm font-semibold transition-colors"
          >
            <IconDocs className="w-4 h-4" />
            Documentation
          </Link>
        </div>
      </div>

      {/* Stats overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-2xl p-5 border border-[#7f2f30]/30 bg-white/[0.04] backdrop-blur text-center">
          <div className="text-3xl font-black text-[#9f3f40] mb-1">35+</div>
          <div className="text-gray-400 text-sm">Scripts Available</div>
        </div>
        <div className="rounded-2xl p-5 border border-[#7f2f30]/30 bg-white/[0.04] backdrop-blur text-center">
          <div className="text-3xl font-black text-[#9f3f40] mb-1">1.21</div>
          <div className="text-gray-400 text-sm">Minecraft Version</div>
        </div>
        <div className="rounded-2xl p-5 border border-[#7f2f30]/30 bg-white/[0.04] backdrop-blur text-center">
          <div className="text-3xl font-black text-green-400 mb-1">Free</div>
          <div className="text-gray-400 text-sm">No Paywall</div>
        </div>
      </div>

      {/* Brief Statistics */}
      <div className="dashboard-card rounded-2xl p-5 border border-[#7f2f30]/30 bg-white/[0.04] backdrop-blur">
        <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
          <span className="text-[#9f3f40]"><IconChart /></span> Brief Statistics
        </h3>
        <div className="mb-3">
          <AreaChart data={chartData.current} color="#9f3f40" />
        </div>
        <div className="flex flex-wrap gap-2">
          {scriptLabels.slice(0, 8).map((label, i) => (
            <span key={label} className="inline-flex items-center gap-1.5 text-xs text-gray-400">
              <span className="w-2 h-2 rounded-full inline-block" style={{ background: scriptColors[i] }} />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Activity */}
      <div className="dashboard-card rounded-2xl p-5 border border-[#7f2f30]/30 bg-white/[0.04] backdrop-blur">
        <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
          <span className="text-[#9f3f40]"><IconActivity /></span> Activity
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className="text-gray-500 text-xs mb-1">Hardware ID</div>
            <div className="text-white font-mono text-sm truncate">HWID-****-****-A4F2-B9D1</div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <div className="text-gray-500 text-xs mb-1">Location</div>
            <div className="text-white text-sm">Unknown / VPN</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Download Tab ─────────────────────────────────────────────────────────────
function DownloadTab() {
  const [showForgeModal, setShowForgeModal]         = useState(false)
  const [showFabricModal, setShowFabricModal]       = useState(false)
  const [downloading, setDownloading]               = useState(false)

  async function handleFabricDownload() {
    setDownloading(true)
    try {
      const a    = document.createElement('a')
      a.href     = '/downloads/taunahi-v4.jar'
      a.download = 'taunahi-v4.jar'
      a.click()
      setShowFabricModal(true)
    } catch {
      alert('Download failed. Please try again.')
    } finally {
      setDownloading(false)
    }
  }

  return (
    <>
      {showForgeModal  && <ForgeModal  onClose={() => setShowForgeModal(false)}  />}
      {showFabricModal && <FabricPostModal onClose={() => setShowFabricModal(false)} />}

      <div className="max-w-2xl">
        <h2 className="text-white font-bold text-xl mb-2">Download Taunahi V4</h2>
        <p className="text-gray-500 text-sm mb-6">Choose your Minecraft version below.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Forge — disabled */}
          <div className="rounded-2xl p-5 border border-white/10 bg-white/[0.03] opacity-60">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white font-bold text-base">Forge 1.8.9</span>
              <span className="px-2 py-0.5 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-semibold">Discontinued</span>
            </div>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
              Legacy version. No longer receives updates or new scripts.
            </p>
            <div className="flex flex-col gap-2">
              <button disabled className="w-full py-2 rounded-xl bg-white/[0.06] text-gray-600 text-sm font-semibold cursor-not-allowed">
                Not Available
              </button>
              <button
                onClick={() => setShowForgeModal(true)}
                className="text-xs text-gray-500 hover:text-gray-400 transition-colors underline underline-offset-2"
              >
                Is that safe?
              </button>
            </div>
          </div>

          {/* Fabric — active */}
          <div className="rounded-2xl p-5 border border-[#7f2f30]/50 bg-[#7f2f30]/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white font-bold text-base">Fabric 1.21.1</span>
              <span className="px-2 py-0.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-semibold">Active</span>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Latest version with all 35+ scripts. Requires Fabric Loader + Kotlin + Fabric API.
            </p>
            <button
              onClick={handleFabricDownload}
              disabled={downloading}
              className="w-full py-2 rounded-xl bg-[#7f2f30] hover:bg-[#9f3f40] disabled:opacity-60 disabled:cursor-wait text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <IconDownload className="w-4 h-4" />
              {downloading ? 'Downloading…' : 'Download .JAR'}
            </button>
          </div>
        </div>

        <div className="rounded-xl p-4 bg-white/[0.03] border border-white/[0.06] text-xs text-gray-500">
          <p className="mb-1 font-semibold text-gray-400">After downloading:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Place the .jar in <code className="text-[#e88]">.minecraft/mods/</code></li>
            <li>Also add <strong className="text-gray-400">Fabric Language Kotlin</strong> and <strong className="text-gray-400">Fabric API</strong></li>
            <li>Launch Minecraft with the Fabric 1.21.1 profile</li>
            <li>Press <kbd className="px-1 py-0.5 rounded bg-white/10 text-gray-300">Right Shift</kbd> to open the Taunahi menu</li>
          </ol>
        </div>
      </div>
    </>
  )
}

// ─── Remote Control Tab ───────────────────────────────────────────────────────
function RemoteTab() {
  return (
    <div className="max-w-xl">
      <h2 className="text-white font-bold text-xl mb-2">Remote Control</h2>
      <p className="text-gray-500 text-sm mb-6">
        Control your running Taunahi instances remotely via the web or Discord bot.
      </p>
      <div className="rounded-2xl p-6 border border-[#7f2f30]/30 bg-white/[0.04] text-center">
        <div className="flex justify-center mb-3 text-[#7f2f30]">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
          </svg>
        </div>
        <div className="text-white font-bold mb-2">Coming Soon</div>
        <div className="text-gray-500 text-sm">
          Remote control allows you to start, stop, and configure scripts without being at your computer.
        </div>
      </div>
    </div>
  )
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────
export default function DashboardPage() {
  const [tab, setTab]               = useState<Tab>('home')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  function handleTabClick(id: Tab) {
    if (id === 'logout') {
      window.location.href = '/'
      return
    }
    setTab(id)
    setSidebarOpen(false)
  }

  return (
    <div
      className="min-h-screen flex"
      style={{
        background: 'radial-gradient(ellipse at top left, #3a1010 0%, #1d1e20 50%, #0e0e0f 100%)',
      }}
    >
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static inset-y-0 left-0 z-30
          w-56 flex-shrink-0 flex flex-col
          bg-[#141416]/90 backdrop-blur border-r border-[#7f2f30]/20
          transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        {/* Logo */}
        <div className="h-14 flex items-center px-5 border-b border-[#7f2f30]/20">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Phantom Mods" className="w-7 h-7 rounded-lg" />
            <span className="text-white font-bold text-sm">Phantom Mods</span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {/* Home — link to landing page */}
          <a
            href="/"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 text-left text-gray-400 hover:text-white hover:bg-white/[0.06]"
          >
            <span className="text-[#9f3f40]"><IconHome /></span>
            Home
          </a>

          {/* Download — internal tab */}
          <button
            onClick={() => handleTabClick('download')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 text-left ${
              tab === 'download'
                ? 'bg-[#7f2f30]/30 text-white border border-[#7f2f30]/50'
                : 'text-gray-400 hover:text-white hover:bg-white/[0.06]'
            }`}
          >
            <span className="text-[#9f3f40]"><IconDownload /></span>
            Download
          </button>

          {/* Edition — link */}
          <a
            href="/edition"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 text-left text-gray-400 hover:text-white hover:bg-white/[0.06]"
          >
            <span className="text-[#9f3f40]"><IconEdition /></span>
            Edition v4.0
          </a>

          {/* Docs — link */}
          <a
            href="/docs/introduction"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 text-left text-gray-400 hover:text-white hover:bg-white/[0.06]"
          >
            <span className="text-[#9f3f40]"><IconDocs /></span>
            Docs
          </a>

          {/* Logout — pushed to bottom */}
          <div className="pt-4 mt-4 border-t border-[#7f2f30]/20">
            <button
              onClick={() => handleTabClick('logout')}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 text-left text-gray-500 hover:text-red-400 hover:bg-red-500/10"
            >
              <span><IconLogout /></span>
              Log out
            </button>
          </div>
        </nav>

        {/* Version */}
        <div className="px-5 py-3 border-t border-[#7f2f30]/20">
          <span className="text-gray-600 text-xs">v4.0 · Free Edition</span>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-14 flex items-center justify-between px-4 md:px-6 border-b border-[#7f2f30]/20 bg-[#141416]/60 backdrop-blur">
          <button
            className="md:hidden p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setSidebarOpen(true)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-white font-semibold text-sm capitalize">
            {tab === 'download' ? 'Download' : 'Dashboard'}
          </h1>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-gray-400 text-xs hidden sm:inline">Connected</span>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          {tab === 'home'     && <HomeTab />}
          {tab === 'download' && <DownloadTab />}
        </main>
      </div>
    </div>
  )
}
