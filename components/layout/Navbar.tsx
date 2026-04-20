'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/clients', label: 'Clients' },
  { href: '/edition', label: 'Edition v4.0' },
  { href: '/docs', label: 'Documentation' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/support', label: 'Support' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-phantom-accent/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-phantom-accent flex items-center justify-center">
              <img src="/logo.png" alt="Phantom Mods" className="w-8 h-8 rounded-lg" />
            </div>
            <span className="font-bold text-xl text-white">Phantom Mods</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === l.href
                    ? 'bg-phantom-accent text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <button className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white" onClick={() => setOpen(!open)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-phantom-accent/20 px-4 py-3 flex flex-col gap-1">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${pathname === l.href ? 'bg-phantom-accent text-white' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
