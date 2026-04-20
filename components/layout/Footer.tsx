import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-phantom-accent/20 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-phantom-accent flex items-center justify-center">
              <img src="/logo.png" alt="Phantom Mods" className="w-8 h-8 rounded-lg" />
            </div>
            <span className="font-bold text-white">Phantom Mods</span>
          </Link>

          {/* Nav links */}
          <nav className="flex items-center gap-6 flex-wrap justify-center">
            {[
              ['/', 'Home'],
              ['/clients', 'Clients'],
              ['/edition', 'Edition v4.0'],
              ['/docs', 'Documentation'],
              ['/dashboard', 'Dashboard'],
              ['/reviews', 'Reviews'],
              ['/support', 'Support'],
              ['/terms', 'Terms'],
              ['/privacy', 'Privacy'],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="text-gray-400 hover:text-phantom-accent text-sm transition-colors">
                {label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-gray-500 text-sm shrink-0">© {new Date().getFullYear()} Phantom Mods</p>
        </div>
      </div>
    </footer>
  )
}
