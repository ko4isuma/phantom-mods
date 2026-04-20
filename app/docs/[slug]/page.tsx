'use client'
import { useEffect, useRef, useState } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getDocPage, docCategories, docPages } from '@/lib/docs-data'
import { use } from 'react'

interface TocItem {
  id: string
  text: string
  level: number
}

function extractToc(html: string): TocItem[] {
  const matches = [...html.matchAll(/<h([23])[^>]*>(.*?)<\/h[23]>/gi)]
  return matches.map(m => {
    const text = m[2].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&')
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    return { id, text, level: parseInt(m[1]) }
  })
}

function addIdsToHeadings(html: string): string {
  return html.replace(/<h([23])([^>]*)>(.*?)<\/h[23]>/gi, (_m, level, attrs, inner) => {
    const text = inner.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&')
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    return `<h${level}${attrs} id="${id}">${inner}</h${level}>`
  })
}

function TableOfContents({ items, activeId }: { items: TocItem[]; activeId: string }) {
  if (!items.length) return null
  return (
    <aside className="hidden xl:block w-52 flex-shrink-0 sticky top-16 self-start max-h-[calc(100vh-4rem)] overflow-y-auto py-6">
      <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">On this page</div>
      <ul className="space-y-1">
        {items.map(item => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block text-xs py-1 transition-colors ${item.level === 3 ? 'pl-3' : ''}
                ${activeId === item.id
                  ? 'text-[#e88] font-semibold'
                  : 'text-gray-500 hover:text-gray-300'
                }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

// Find prev/next pages
function getAdjacentPages(slug: string) {
  const all = docCategories.flatMap(c => c.pages)
  const idx = all.indexOf(slug)
  return {
    prev: idx > 0 ? all[idx - 1] : null,
    next: idx < all.length - 1 ? all[idx + 1] : null,
  }
}

export default function DocSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const page = getDocPage(slug)
  if (!page) notFound()

  const contentRef   = useRef<HTMLDivElement>(null)
  const [activeId, setActiveId] = useState('')
  const toc   = extractToc(page.content)
  const html  = addIdsToHeadings(page.content)
  const { prev, next } = getAdjacentPages(slug)

  // Intersection observer for TOC highlighting
  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const headings = el.querySelectorAll('h2, h3')
    if (!headings.length) return

    const obs = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )
    headings.forEach(h => obs.observe(h))
    return () => obs.disconnect()
  }, [slug])

  return (
    <div className="flex gap-8">
      {/* Article */}
      <article className="flex-1 min-w-0 max-w-3xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
          <Link href="/docs" className="hover:text-gray-300 transition-colors">Docs</Link>
          <span>/</span>
          <span className="text-gray-400">{page.category}</span>
          <span>/</span>
          <span className="text-white">{page.title}</span>
        </div>

        <h1 className="text-4xl font-black text-white mb-8">{page.title}</h1>

        <div
          ref={contentRef}
          className="doc-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* Prev/Next navigation */}
        <div className="flex gap-4 mt-12 pt-6 border-t border-[#7f2f30]/20">
          {prev ? (
            <Link
              href={`/docs/${prev}`}
              className="flex-1 p-4 rounded-xl border border-[#7f2f30]/20 hover:border-[#7f2f30]/50 transition-colors"
            >
              <div className="text-gray-500 text-xs mb-1">← Previous</div>
              <div className="text-white text-sm font-semibold">{docPages[prev]?.title}</div>
            </Link>
          ) : <div className="flex-1" />}
          {next ? (
            <Link
              href={`/docs/${next}`}
              className="flex-1 p-4 rounded-xl border border-[#7f2f30]/20 hover:border-[#7f2f30]/50 transition-colors text-right"
            >
              <div className="text-gray-500 text-xs mb-1">Next →</div>
              <div className="text-white text-sm font-semibold">{docPages[next]?.title}</div>
            </Link>
          ) : <div className="flex-1" />}
        </div>
      </article>

      {/* TOC */}
      <TableOfContents items={toc} activeId={activeId} />
    </div>
  )
}
