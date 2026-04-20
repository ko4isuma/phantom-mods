'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { docCategories, docPages } from '@/lib/docs-data'

const pageTitles: Record<string, string> = Object.fromEntries(
  Object.entries(docPages).map(([slug, p]) => [slug, p.title]),
)

function Sidebar() {
  const pathname = usePathname()
  const currentSlug = pathname.replace('/docs/', '').replace('/docs', '') || 'introduction'

  return (
    <aside className="w-56 flex-shrink-0 sticky top-16 self-start max-h-[calc(100vh-4rem)] overflow-y-auto pr-2 py-6">
      {docCategories.map(cat => (
        <div key={cat.name} className="mb-5">
          <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 px-3">{cat.name}</div>
          <ul className="space-y-0.5">
            {cat.pages.map(slug => (
              <li key={slug}>
                <Link
                  href={`/docs/${slug}`}
                  className={`block px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    currentSlug === slug
                      ? 'bg-[#7f2f30]/20 text-white border border-[#7f2f30]/40'
                      : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {pageTitles[slug] ?? slug}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  )
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8">
        {/* Desktop sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Mobile sidebar toggle */}
        <div className="lg:hidden fixed bottom-6 right-6 z-40">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-12 h-12 rounded-full bg-[#7f2f30] shadow-lg flex items-center justify-center text-white"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile sidebar */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-30 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}>
            <div
              className="absolute left-0 top-0 bottom-0 w-64 bg-[#141416] border-r border-[#7f2f30]/20 pt-20 px-4 overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              {docCategories.map(cat => (
                <div key={cat.name} className="mb-5">
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 px-3">{cat.name}</div>
                  <ul className="space-y-0.5">
                    {cat.pages.map(slug => (
                      <li key={slug}>
                        <Link
                          href={`/docs/${slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-1.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/[0.04] transition-colors"
                        >
                          {pageTitles[slug] ?? slug}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 min-w-0 py-6">
          {children}
        </main>
      </div>
    </div>
  )
}
