'use client'
import { useState } from 'react'
import Link from 'next/link'
import type { Ticket } from '@/types'

const SUBJECTS = ['Bug Report', 'Feature Request', 'General Question', 'Other']

const FAQ_ITEMS = [
  {
    question: 'How to install Taunahi V4?',
    answer: 'Download the .jar file from the Dashboard, place it in your .minecraft/mods/ folder along with Fabric Language Kotlin and Fabric API. Launch Minecraft with the Fabric 1.21.1 profile and press Right Shift to open the menu.',
  },
  {
    question: 'Is Taunahi safe to use?',
    answer: 'Taunahi loads as a standard Fabric mod. It never modifies game files permanently — all patches are applied at runtime only. The mod communicates only with Hypixel servers and our update endpoint. No personal data is transmitted without your consent.',
  },
  {
    question: 'How to update to the latest version?',
    answer: 'Visit the Dashboard and download the latest .jar file. Replace the old .jar in your .minecraft/mods/ folder with the new one. Fabric API and Fabric Language Kotlin usually do not need to be updated.',
  },
  {
    question: 'My script is not working, what should I do?',
    answer: 'First, check the Documentation for setup instructions. Make sure you have the correct dependencies installed. If the issue persists, join our Discord server for fast community support or submit a ticket below.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-phantom-accent/20 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/[0.03] transition-colors"
      >
        <span className="text-white font-semibold text-sm">{question}</span>
        <svg
          className={`w-4 h-4 text-phantom-accent flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-4">
          <p className="text-gray-400 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

function StatusBadge({ status }: { status: Ticket['status'] }) {
  const map = {
    new: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    in_progress: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    resolved: 'bg-green-500/20 text-green-400 border-green-500/30',
  }
  const labels = { new: 'New', in_progress: 'In Progress', resolved: 'Resolved' }
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${map[status]}`}>{labels[status]}</span>
  )
}

function loadTickets(email: string): Ticket[] {
  if (typeof window === 'undefined') return []
  try {
    const all = JSON.parse(localStorage.getItem('phantom_tickets') || '[]')
    return all.filter((t: Ticket) => t.email.toLowerCase() === email.toLowerCase())
  } catch { return [] }
}

function saveTicket(ticket: Ticket) {
  if (typeof window === 'undefined') return
  const all: Ticket[] = JSON.parse(localStorage.getItem('phantom_tickets') || '[]')
  all.unshift(ticket)
  localStorage.setItem('phantom_tickets', JSON.stringify(all))
}

export default function SupportPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: SUBJECTS[0], message: '' })
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const ticket: Ticket = {
      id: `T-${Date.now()}`,
      ...form,
      status: 'new',
      created_at: new Date().toISOString(),
    }
    try {
      const res = await fetch('/api/tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ticket),
      })
      if (!res.ok) throw new Error('API error')
    } catch {
      // fallback to localStorage only
    }
    saveTicket(ticket)
    setTickets(loadTickets(form.email))
    setSubmitted(true)
    setLoading(false)
    setTimeout(() => setSubmitted(false), 4000)
    setForm(f => ({ ...f, message: '' }))
  }

  const fetchUserTickets = () => {
    if (form.email) setTickets(loadTickets(form.email))
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero header with gradient */}
        <div className="text-center mb-16 relative">
          <div
            className="absolute inset-x-0 top-0 h-48 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(127,47,48,0.25) 0%, transparent 70%)' }}
            aria-hidden="true"
          />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-phantom-accent/30 text-sm text-gray-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Support Center
            </div>
            <h1 className="text-5xl font-black text-white mb-4">Support</h1>
            <p className="text-gray-400 text-xl">Get help with Phantom Mods or report an issue</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map(item => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>

        {/* Quick Help cards */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Help</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="https://discord.gg/phantommods"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-5 border border-phantom-accent/20 hover:border-phantom-accent/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#5865f2]/20 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-[#8b9cf9]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.031.05a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                </svg>
              </div>
              <div className="text-white font-semibold text-sm mb-1 group-hover:text-[#9f3f40] transition-colors">Discord Support</div>
              <div className="text-gray-500 text-xs">Fast help from the community</div>
            </a>

            <Link
              href="/docs/introduction"
              className="glass rounded-2xl p-5 border border-phantom-accent/20 hover:border-phantom-accent/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-phantom-accent/20 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-phantom-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="text-white font-semibold text-sm mb-1 group-hover:text-[#9f3f40] transition-colors">Documentation</div>
              <div className="text-gray-500 text-xs">Read the setup guide</div>
            </Link>

            <Link
              href="/clients"
              className="glass rounded-2xl p-5 border border-phantom-accent/20 hover:border-phantom-accent/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-phantom-accent/20 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-phantom-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="text-white font-semibold text-sm mb-1 group-hover:text-[#9f3f40] transition-colors">Features</div>
              <div className="text-gray-500 text-xs">View all available scripts</div>
            </Link>

            <Link
              href="/reviews"
              className="glass rounded-2xl p-5 border border-phantom-accent/20 hover:border-phantom-accent/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-phantom-accent/20 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-phantom-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div className="text-white font-semibold text-sm mb-1 group-hover:text-[#9f3f40] transition-colors">Reviews</div>
              <div className="text-gray-500 text-xs">Read user experiences</div>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="glass rounded-2xl p-8 border border-phantom-accent/30">
            <h2 className="text-2xl font-bold text-white mb-6">Submit a Ticket</h2>
            {submitted && (
              <div className="mb-4 p-4 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400 text-sm">
                ✅ Ticket submitted successfully! We&apos;ll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-1">Your Name</label>
                <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full bg-white/5 border border-phantom-accent/30 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-phantom-accent transition-colors"
                  placeholder="Enter your name" />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1">Email</label>
                <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full bg-white/5 border border-phantom-accent/30 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-phantom-accent transition-colors"
                  placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1">Subject</label>
                <select value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  className="w-full bg-[#1a1a2e] border border-phantom-accent/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-phantom-accent transition-colors">
                  {SUBJECTS.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1">Message</label>
                <textarea required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  rows={5} className="w-full bg-white/5 border border-phantom-accent/30 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-phantom-accent transition-colors resize-none"
                  placeholder="Describe your issue..." />
              </div>
              <button type="submit" disabled={loading}
                className="w-full py-3 rounded-xl bg-phantom-accent hover:bg-phantom-accent-light text-white font-semibold transition-all duration-300 disabled:opacity-50">
                {loading ? 'Submitting...' : 'Submit Ticket'}
              </button>
            </form>
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Your Tickets</h2>
              <button onClick={fetchUserTickets} className="text-phantom-accent text-sm hover:text-phantom-accent-light transition-colors">
                Refresh
              </button>
            </div>
            {tickets.length === 0 ? (
              <div className="glass rounded-2xl p-8 text-center border border-phantom-accent/20">
                <div className="flex justify-center mb-3 text-gray-600">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.981l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                  </svg>
                </div>
                <p className="text-gray-400">No tickets yet. Submit one to see it here.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {tickets.map(t => (
                  <div key={t.id} className="glass rounded-xl p-5 border border-phantom-accent/20 hover:border-phantom-accent/40 transition-all">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-white font-semibold text-sm">{t.subject}</span>
                      <StatusBadge status={t.status} />
                    </div>
                    <p className="text-gray-400 text-sm mb-2 line-clamp-2">{t.message}</p>
                    <div className="text-gray-600 text-xs">{t.id} · {new Date(t.created_at).toLocaleDateString()}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
