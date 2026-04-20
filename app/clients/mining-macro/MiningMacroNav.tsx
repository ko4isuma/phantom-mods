import Link from 'next/link'

type ActiveTab = 'home' | 'download' | 'docs'

const navItems: Array<{ href: string; label: string; key: ActiveTab }> = [
  { href: '/clients/mining-macro', label: 'Home', key: 'home' },
  { href: '/clients/mining-macro/download', label: 'Download', key: 'download' },
  { href: '/clients/mining-macro/docs', label: 'Docs', key: 'docs' },
]

export default function MiningMacroNav({ active }: { active: ActiveTab }) {
  return (
    <nav className="glass rounded-2xl border border-phantom-accent/30 p-2 inline-flex flex-wrap gap-2">
      {navItems.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
            item.key === active
              ? 'bg-phantom-accent text-white glow-accent'
              : 'text-gray-300 hover:text-white hover:bg-white/5'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
