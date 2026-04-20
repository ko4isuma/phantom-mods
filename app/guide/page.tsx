'use client'
import { useEffect, useState } from 'react'

const steps = [
  { n: '01', icon: '⬇️', title: 'Download Fabric/Forge Loader', desc: 'Download Fabric Loader for Minecraft 1.21.1 or Forge for 1.8.9 from their official websites. Install the loader for your preferred version.' },
  { n: '02', icon: '📦', title: 'Install Taunahi V4 Mod File', desc: 'Download the latest Taunahi V4 .jar file. Place it in your Minecraft mods folder (%appdata%\\.minecraft\\mods on Windows).' },
  { n: '03', icon: '🚀', title: 'Launch Minecraft with Mod Profile', desc: 'Open the Minecraft Launcher and select the Fabric/Forge profile. Launch the game and wait for it to load completely.' },
  { n: '04', icon: '⌨️', title: 'Open Taunahi GUI', desc: 'Once in-game on Hypixel Skyblock, press the assigned keybind (default: Right Shift) to open the Taunahi V4 configuration panel.' },
  { n: '05', icon: '⚙️', title: 'Configure & Start Scripts', desc: 'Select your desired script from the menu, configure the settings, enable failsafes, and click Start. The macro will begin running automatically.' },
]

const faqs = [
  { q: 'Is Taunahi V4 free?', a: 'Yes, Taunahi V4 is completely free with all 35+ scripts unlocked from day one. No premium tiers, no paywalls.' },
  { q: 'Will I get banned?', a: 'There is always a risk when using automation software. Use the built-in failsafes, randomize your playtimes, and play smart. We cannot guarantee ban protection.' },
  { q: 'What versions are supported?', a: 'Taunahi V4 supports Fabric 1.21.1 and Forge 1.8.9. We recommend Fabric 1.21.1 for the latest features.' },
  { q: 'How much can I earn?', a: 'Earnings vary by script: Farming up to 30M coins/hour, Ghost Farming up to 45M coins/hour, Zealot Grinding up to 20M coins/hour.' },
  { q: 'How do I update Taunahi V4?', a: 'Simply download the latest version from our site and replace the old .jar file in your mods folder. Settings are preserved.' },
]

const compatibility = [
  { version: '1.21.1', loader: 'Fabric', status: 'Full Support', req: 'Fabric API, Java 21' },
  { version: '1.8.9', loader: 'Forge', status: 'Full Support', req: 'Forge 11.15.1, Java 8' },
  { version: '1.20.x', loader: 'Fabric', status: 'Limited', req: 'Fabric API' },
]

function Accordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="glass rounded-xl overflow-hidden border border-phantom-accent/20 hover:border-phantom-accent/40 transition-colors">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left">
        <span className="text-white font-semibold">{q}</span>
        <span className={`text-phantom-accent transition-transform duration-300 text-xl ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-phantom-accent/10">{a}</div>}
    </div>
  )
}

export default function GuidePage() {
  useEffect(() => {
    let scrollTriggerInstances: { kill(): void }[] = []

    import('gsap').then(({ gsap }) => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger)
        const st1 = ScrollTrigger.create({
          trigger: '.steps-container',
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.from('.step-card', { x: -60, opacity: 0, duration: 0.7, stagger: 0.15 })
          },
        })
        const st2 = ScrollTrigger.create({
          trigger: '.faq-container',
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.from('.faq-item', { y: 30, opacity: 0, duration: 0.5, stagger: 0.1 })
          },
        })
        scrollTriggerInstances.push(st1, st2)
      })
    })

    return () => {
      scrollTriggerInstances.forEach(st => st.kill())
    }
  }, [])

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-white mb-4">Setup Guide</h1>
          <p className="text-gray-400 text-xl">Get Taunahi V4 running in 5 easy steps</p>
        </div>

        <div className="steps-container space-y-4 mb-20">
          {steps.map((s, i) => (
            <div key={i} className="step-card glass rounded-2xl p-6 flex items-start gap-6 hover:border-phantom-accent/50 transition-all duration-300">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-phantom-accent/20 border border-phantom-accent/40 flex items-center justify-center text-2xl">
                  {s.icon}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-phantom-accent font-mono text-sm font-bold">{s.n}</span>
                  <h3 className="text-white font-bold text-lg">{s.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-6">Compatibility</h2>
          <div className="glass rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-phantom-accent/20">
                  <th className="text-left p-4 text-gray-400 font-semibold text-sm">Version</th>
                  <th className="text-left p-4 text-gray-400 font-semibold text-sm">Loader</th>
                  <th className="text-left p-4 text-gray-400 font-semibold text-sm">Status</th>
                  <th className="text-left p-4 text-gray-400 font-semibold text-sm">Requirements</th>
                </tr>
              </thead>
              <tbody>
                {compatibility.map((r, i) => (
                  <tr key={i} className="border-b border-phantom-accent/10 hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-white font-mono">{r.version}</td>
                    <td className="p-4 text-gray-300">{r.loader}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${r.status === 'Full Support' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'}`}>
                        {r.status}
                      </span>
                    </td>
                    <td className="p-4 text-gray-400 text-sm">{r.req}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="faq-container">
          <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="faq-item"><Accordion q={f.q} a={f.a} /></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
