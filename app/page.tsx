'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

/* ── Inline SVG icons styled in phantom-accent (#6B1C2E) ─────────────────── */
function IconShield() {
  return (
    <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" fill="#6B1C2E" stroke="#8B2540" strokeWidth="0.5"/>
      <path d="M9 12l2 2 4-4" stroke="#ffcdd2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
function IconBolt() {
  return (
    <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13 2L4.5 13.5H11L10 22L20.5 10.5H14L13 2Z" fill="#6B1C2E" stroke="#8B2540" strokeWidth="0.5"/>
      <path d="M13 2L4.5 13.5H11L10 22L20.5 10.5H14L13 2Z" fill="url(#boltGrad)"/>
      <defs>
        <linearGradient id="boltGrad" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B2540"/>
          <stop offset="1" stopColor="#6B1C2E"/>
        </linearGradient>
      </defs>
    </svg>
  )
}
function IconGamepad() {
  return (
    <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="7" width="20" height="12" rx="4" fill="#6B1C2E" stroke="#8B2540" strokeWidth="0.5"/>
      <path d="M8 11v4M6 13h4" stroke="#ffcdd2" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="16" cy="12" r="1.2" fill="#ffcdd2"/>
      <circle cx="14" cy="14.5" r="1.2" fill="#ffcdd2"/>
    </svg>
  )
}
function IconChat() {
  return (
    <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" fill="#6B1C2E" stroke="#8B2540" strokeWidth="0.5"/>
      <path d="M8 9h8M8 13h5" stroke="#ffcdd2" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )
}
function IconWheat() {
  return (
    <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 22V6" stroke="#6B1C2E" strokeWidth="2" strokeLinecap="round"/>
      <ellipse cx="12" cy="6" rx="3" ry="5" fill="#6B1C2E" stroke="#8B2540" strokeWidth="0.5" transform="rotate(-20 12 6)"/>
      <ellipse cx="12" cy="6" rx="3" ry="5" fill="#6B1C2E" stroke="#8B2540" strokeWidth="0.5" transform="rotate(20 12 6)"/>
      <ellipse cx="12" cy="11" rx="3" ry="5" fill="#8B2540" stroke="#8B2540" strokeWidth="0.5" transform="rotate(-20 12 11)"/>
      <ellipse cx="12" cy="11" rx="3" ry="5" fill="#8B2540" stroke="#8B2540" strokeWidth="0.5" transform="rotate(20 12 11)"/>
    </svg>
  )
}
function IconGhost() {
  return (
    <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9v11l2.5-2 2.5 2 2.5-2 2.5 2 2.5-2L20 20V9c0-3.87-3.13-7-8-7z" fill="#6B1C2E" stroke="#8B2540" strokeWidth="0.5"/>
      <circle cx="9.5" cy="10" r="1.5" fill="#ffcdd2"/>
      <circle cx="14.5" cy="10" r="1.5" fill="#ffcdd2"/>
    </svg>
  )
}
function IconSword() {
  return (
    <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14.5 2L20 7.5 9 18.5l-4 1 1-4L14.5 2z" fill="#6B1C2E" stroke="#8B2540" strokeWidth="0.5"/>
      <path d="M3 21l3-3" stroke="#ffcdd2" strokeWidth="2" strokeLinecap="round"/>
      <path d="M14.5 2L20 7.5" stroke="#ffcdd2" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
function IconFish() {
  return (
    <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 7c-2-2-5-3-8-2C9 6 7 8 6 10c-1 1-3 2-4 4 2 0 3 1 4 2 1 2 3 4 6 4 3 1 6 0 8-2 3-3 4-7 3-10l-3-1z" fill="#6B1C2E" stroke="#8B2540" strokeWidth="0.5"/>
      <circle cx="17" cy="9" r="1" fill="#ffcdd2"/>
    </svg>
  )
}
function IconMushroom() {
  return (
    <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2C7.03 2 3 6 3 11h18c0-5-4.03-9-9-9z" fill="#6B1C2E" stroke="#8B2540" strokeWidth="0.5"/>
      <rect x="9" y="11" width="6" height="9" rx="1" fill="#8B2540" stroke="#8B2540" strokeWidth="0.5"/>
      <circle cx="8" cy="7" r="1.5" fill="#ffcdd2" opacity="0.6"/>
      <circle cx="15" cy="6" r="1" fill="#ffcdd2" opacity="0.6"/>
    </svg>
  )
}
function IconPickaxe() {
  return (
    <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 8l4-4 8 8-4 4L4 8z" fill="#6B1C2E" stroke="#8B2540" strokeWidth="0.5"/>
      <path d="M11 11l9 9" stroke="#ffcdd2" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="7" cy="7" r="1.5" fill="#ffcdd2" opacity="0.8"/>
    </svg>
  )
}
function IconFire() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2C12 2 7 8 7 13a5 5 0 0010 0c0-2-1.5-4-2-5 0 2-1 3.5-3 4 1-2 1-4 0-6z" fill="#6B1C2E" stroke="#8B2540" strokeWidth="0.5"/>
    </svg>
  )
}
function IconCoins() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="8" cy="14" r="6" fill="#6B1C2E" stroke="#8B2540" strokeWidth="0.5"/>
      <circle cx="16" cy="10" r="6" fill="#8B2540" stroke="#8B2540" strokeWidth="0.5"/>
      <path d="M16 8v4M14 10h4" stroke="#ffcdd2" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
function IconRocket() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2C12 2 7 7 7 14l5 5 5-5C17 7 12 2 12 2z" fill="#6B1C2E" stroke="#8B2540" strokeWidth="0.5"/>
      <path d="M9 17l-3 3M15 17l3 3" stroke="#ffcdd2" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="10" r="2" fill="#ffcdd2" opacity="0.7"/>
    </svg>
  )
}

const features = [
  { icon: <IconShield />, title: 'Undetected', desc: 'Advanced anti-staff protection with human-like behavior patterns' },
  { icon: <IconBolt />,   title: 'Fast Updates', desc: 'Always compatible with the latest Hypixel patches, within hours' },
  { icon: <IconGamepad />, title: 'Easy Setup', desc: 'One-click install, intuitive GUI — no technical knowledge needed' },
  { icon: <IconChat />,  title: '24/7 Support', desc: 'Active community with instant help any time of day' },
]

const stats = [
  { value: 10000, suffix: '+', label: 'Users' },
  { value: 35, suffix: '+', label: 'Scripts' },
  { value: 99.9, suffix: '%', label: 'Uptime' },
]

const earnings = [
  { icon: <IconWheat />,    activity: 'Crop Farming',    rate: '30M/hr', color: 'text-green-400' },
  { icon: <IconGhost />,    activity: 'Ghost Farming',   rate: '45M/hr', color: 'text-phantom-accent' },
  { icon: <IconPickaxe />,  activity: 'Mining / Gemstones', rate: '35M/hr', color: 'text-purple-400' },
  { icon: <IconSword />,    activity: 'Zealot Grinding', rate: '20M/hr', color: 'text-blue-400' },
  { icon: <IconFish />,     activity: 'AFK Fishing',     rate: '15M/hr', color: 'text-cyan-400' },
  { icon: <IconMushroom />, activity: 'Mushroom Farm',   rate: '25M/hr', color: 'text-yellow-400' },
]

const floatingBadges = [
  { icon: <IconFire />,   text: '35+ Scripts',   pos: 'top-1/4 left-8 md:left-16',  anim: 'float-slow' },
  { icon: <IconCoins />,  text: 'Up to 45M/hr',  pos: 'top-1/3 right-8 md:right-16', anim: 'float-mid' },
  { icon: <IconShield />, text: 'Undetected',     pos: 'bottom-1/3 left-8 md:left-20', anim: 'float-fast' },
  { icon: <IconBolt />,   text: 'Instant Setup',  pos: 'bottom-1/4 right-8 md:right-20', anim: 'float-slow' },
]

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const earningsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let scrollTriggerInstances: { kill(): void }[] = []

    document.body.classList.add('gsap-ready')

    const init = async () => {
      try {
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        gsap.registerPlugin(ScrollTrigger)

        if (heroRef.current) {
          const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
          tl.fromTo('.hero-badge',     { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
            .fromTo('.hero-title',     { y: 60,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.2')
            .fromTo('.hero-sub',       { y: 40,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.4')
            .fromTo('.hero-taglines',  { y: 30,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3')
            .fromTo('.hero-badges',    { y: 20,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, '-=0.2')
            .fromTo('.hero-cta',       { y: 30,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.2')
            .fromTo('.hero-stats',     { y: 30,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.2')
        }

        if (featuresRef.current) {
          const st = ScrollTrigger.create({
            trigger: featuresRef.current,
            start: 'top 80%',
            once: true,
            onEnter: () => {
              gsap.fromTo('.feature-card', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out' })
            },
          })
          scrollTriggerInstances.push(st)
        }

        if (earningsRef.current) {
          const st = ScrollTrigger.create({
            trigger: earningsRef.current,
            start: 'top 80%',
            once: true,
            onEnter: () => {
              gsap.fromTo('.earnings-card', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' })
            },
          })
          scrollTriggerInstances.push(st)
        }

        if (statsRef.current) {
          const statEls = statsRef.current.querySelectorAll('.stat-number')
          statEls.forEach((el, i) => {
            const target = stats[i].value
            const suffix = stats[i].suffix
            const isDecimal = target % 1 !== 0
            const obj = { val: 0 }
            const st = ScrollTrigger.create({
              trigger: statsRef.current!,
              start: 'top 80%',
              once: true,
              onEnter: () => {
                gsap.to(obj, {
                  val: target,
                  duration: 2,
                  ease: 'power2.out',
                  onUpdate: () => {
                    const v = isDecimal ? obj.val.toFixed(1) : Math.round(obj.val)
                    ;(el as HTMLElement).textContent = v + suffix
                  },
                })
              },
            })
            scrollTriggerInstances.push(st)
          })
        }
      } catch (err) {
        // GSAP failed to load — elements remain visible (CSS default opacity:1)
        console.warn('GSAP init failed:', err)
        document.body.classList.remove('gsap-ready')
      }
    }

    init()

    return () => {
      scrollTriggerInstances.forEach(st => st.kill())
      document.body.classList.remove('gsap-ready')
    }
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Grid background */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(107,28,46,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(107,28,46,0.07) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ opacity: 0.07 }}
          src="/hero.webm"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />

        {/* Glow orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-phantom-accent/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-phantom-accent/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-phantom-accent/5" />
        </div>

        {/* Floating badges */}
        {floatingBadges.map((b) => (
          <div
            key={b.text}
            className={`hero-badges absolute hidden md:flex items-center gap-2 px-3 py-2 rounded-full glass border border-phantom-accent/20 text-xs font-semibold text-gray-200 ${b.pos} ${b.anim}`}
          >
            {b.icon}
            <span>{b.text}</span>
          </div>
        ))}

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-phantom-accent/30 text-sm text-gray-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            v4.0 — Now Available
          </div>

          <h1 className="hero-title text-6xl md:text-8xl font-black mb-6 leading-none">
            <span className="text-gradient">Phantom</span>
            <br />
            <span className="text-white">Mods</span>
          </h1>

          <p className="hero-sub text-xl md:text-2xl text-gray-400 mb-6 max-w-2xl mx-auto">
            Premium Minecraft Automation for{' '}
            <span className="text-phantom-accent font-semibold">Hypixel Skyblock</span>
          </p>

          {/* Sales copy */}
          <div className="hero-taglines space-y-3 mb-10 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-white font-semibold leading-snug">
              Get ready to automate the boring tasks and get rich,<br className="hidden sm:block" />
              so you can finally play the fun parts.
            </p>
            <p className="text-base md:text-lg text-gray-400">
              Stop overpaying for bad scripts — get the best scripts on the market, for a great price.
            </p>
            <p className="text-sm md:text-base text-phantom-accent font-medium">
              In just a couple of weeks, you can be richer than players who've been grinding for years.
            </p>
          </div>

          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/clients"
              className="px-8 py-4 rounded-xl bg-phantom-accent hover:bg-phantom-accent-light text-white font-semibold text-lg transition-all duration-300 glow-accent hover:scale-105">
              Explore Taunahi V4
            </Link>
            <Link href="/dashboard"
              className="px-8 py-4 rounded-xl glass border border-phantom-accent/30 text-white font-semibold text-lg hover:border-phantom-accent/60 transition-all duration-300">
              Open Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider mx-auto max-w-4xl" />

      {/* Stats */}
      <section ref={statsRef} className="py-16 border-y border-phantom-accent/20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="hero-stats grid grid-cols-3 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="stat-number text-4xl md:text-5xl font-black text-phantom-accent mb-2">
                  {s.value}{s.suffix}
                </div>
                <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider mx-auto max-w-4xl mt-0" />

      {/* Features */}
      <section ref={featuresRef} className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Phantom Mods?</h2>
          <p className="text-gray-400 text-lg">Built for performance, designed for safety</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="feature-card glass rounded-2xl p-6 border border-phantom-accent/20 hover:border-phantom-accent/50 transition-all duration-300 group glow-hover">
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-white font-bold text-xl mb-2 group-hover:text-phantom-accent transition-colors">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider mx-auto max-w-4xl" />

      {/* Earnings Showcase */}
      <section ref={earningsRef} className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">The Phantom Advantage</h2>
          <p className="text-gray-400 text-lg">Real earning potential — while you sleep, work, or play</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {earnings.map((e, i) => (
            <div key={i} className="earnings-card glass rounded-2xl p-6 border border-phantom-accent/20 hover:border-phantom-accent/40 transition-all duration-300 text-center group glow-hover">
              <div className="flex justify-center mb-3">{e.icon}</div>
              <div className={`text-2xl md:text-3xl font-black mb-1 ${e.color}`}>{e.rate}</div>
              <div className="text-gray-400 text-sm font-medium">{e.activity}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm mt-6">
          Average earnings based on optimal script configurations. Results may vary.
        </p>
      </section>

      {/* Divider */}
      <div className="section-divider mx-auto max-w-4xl" />

      {/* CTA */}
      <section className="py-24 max-w-4xl mx-auto px-4 text-center">
        <div className="glass rounded-3xl p-12 border border-phantom-accent/30">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-phantom-accent/10 border border-phantom-accent/30 text-phantom-accent text-xs font-semibold mb-6">
            <IconRocket /> Join the #1 Skyblock automation community
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Start Earning Millions Today</h2>
          <p className="text-gray-400 text-lg mb-8">
            10,000+ players already use Phantom Mods to dominate Hypixel Skyblock.<br className="hidden sm:block" />
            Don't let them get further ahead.
          </p>
          <Link href="/clients" className="inline-flex px-10 py-4 rounded-xl bg-phantom-accent hover:bg-phantom-accent-light text-white font-bold text-lg transition-all duration-300 glow-accent hover:scale-105">
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  )
}
