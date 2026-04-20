'use client'
import { useState, useEffect, useRef } from 'react'

type Review = {
  id: number
  name: string
  initials: string
  rating: number
  text: string
  date: string
  tag: string
  verified: boolean
  rotation: number
  gradientVariant: number
}

const TAGS = ['Farming', 'Combat', 'Fishing', 'Foraging', 'Support', 'General', 'Pests', 'Setup']

const gradients = [
  'from-[#6B1C2E]/40 to-[#4A1220]/20',
  'from-[#8B2540]/40 to-[#6B1C2E]/20',
  'from-[#6B1C2E]/30 to-[#7f2f30]/25',
  'from-[#4A1220]/40 to-[#6B1C2E]/30',
  'from-[#8B2540]/30 to-[#4A1220]/20',
]

const PRESET_REVIEWS: Review[] = [
  {
    id: 1, name: 'TolXiK', initials: 'TX', rating: 5,
    text: "Ghost farming profits are insane with Taunahi. Averaging 42M/hr on a good session. The Mist pathfinding is smooth — never got stuck once in 3 weeks.",
    date: '2026-03-12', tag: 'Combat', verified: true, rotation: -1.2, gradientVariant: 0,
  },
  {
    id: 2, name: 'ak1nfall', initials: 'AK', rating: 5,
    text: "Been using this for 2 months. Updates drop within hours of Hypixel patches — literally never been down for more than a day. No other free macro comes close.",
    date: '2026-02-28', tag: 'General', verified: true, rotation: 1.5, gradientVariant: 1,
  },
  {
    id: 3, name: 'Odinochestvo', initials: 'OD', rating: 5,
    text: "Setup took me literally 4 minutes. The GUI is clean, the farming scripts just work. Pest cleaner saves me so much time — it handles everything automatically.",
    date: '2026-02-14', tag: 'Pests', verified: true, rotation: -0.8, gradientVariant: 2,
  },
  {
    id: 4, name: 'souljahwitch', initials: 'SO', rating: 4,
    text: "Zealot melee script is solid. Routes are optimized, bruiser areas give great XP. Only wish the ranged mode had a few more config options, but overall great.",
    date: '2026-01-30', tag: 'Combat', verified: false, rotation: 1.8, gradientVariant: 3,
  },
  {
    id: 5, name: 'Jacob777', initials: 'JK', rating: 5,
    text: "AFK fishing while at work is a game changer. Lava fishing setup was super easy. Made 200M last week just from passive sessions. Discord support is fast too.",
    date: '2026-01-18', tag: 'Fishing', verified: true, rotation: -1.6, gradientVariant: 4,
  },
  {
    id: 6, name: 'CobaltMiner', initials: 'CB', rating: 5,
    text: "Foraging scripts are the best I've seen. Fig foraging with etherwarp is crazy efficient. David's Cloak leveling through Shards is basically free stats.",
    date: '2026-01-05', tag: 'Foraging', verified: true, rotation: 0.9, gradientVariant: 0,
  },
  {
    id: 7, name: 'kaido', initials: 'KA', rating: 4,
    text: "The visitor filter is really smart — rejects bad visitors instantly. Only wish there was a profit calculator built in. Still 10x better than managing it manually.",
    date: '2025-12-22', tag: 'Pests', verified: false, rotation: -1.1, gradientVariant: 1,
  },
  {
    id: 8, name: 'Avenue', initials: 'AV', rating: 5,
    text: "Support team in Discord is actually amazing. Got help configuring echo farming in under 10 minutes. The documentation covers everything clearly.",
    date: '2025-12-10', tag: 'Support', verified: true, rotation: 1.3, gradientVariant: 2,
  },
  {
    id: 9, name: 'n1mlok', initials: 'NK', rating: 5,
    text: "I was skeptical it was really free. It is. All 35+ scripts, no paywall. Ghost farming alone paid for my main's gear in a week. Absolutely recommend.",
    date: '2025-11-27', tag: 'General', verified: true, rotation: -0.6, gradientVariant: 3,
  },
  {
    id: 10, name: 'FGOOSE', initials: 'FE', rating: 5,
    text: "Worm fishing party mode is a great feature. Running it with 3 alts, the drops are multiplied. Easy to set up once you read the docs.",
    date: '2025-11-14', tag: 'Fishing', verified: false, rotation: 2.0, gradientVariant: 4,
  },
  {
    id: 11, name: 'Panda_Hub', initials: 'PH', rating: 4,
    text: "Crop farming scripts are perfectly tuned. Rewarp system works flawlessly, even on long plots. Had a small issue with echo farming at first but Discord support fixed it.",
    date: '2025-10-30', tag: 'Farming', verified: true, rotation: -1.4, gradientVariant: 0,
  },
  {
    id: 12, name: 'Coinspiner', initials: 'CP', rating: 5,
    text: "Switched from a paid macro after seeing this recommended. Not going back. Better anti-staff protection, more scripts, and it's free. Easy decision.",
    date: '2025-10-15', tag: 'Setup', verified: true, rotation: 1.1, gradientVariant: 1,
  },
]

function StarRating({ rating, interactive = false, onRate }: { rating: number; interactive?: boolean; onRate?: (r: number) => void }) {
  const [hover, setHover] = useState(0)
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <button
          key={i}
          type="button"
          disabled={!interactive}
          onClick={() => interactive && onRate?.(i)}
          onMouseEnter={() => interactive && setHover(i)}
          onMouseLeave={() => interactive && setHover(0)}
          className={`transition-all duration-150 ${interactive ? 'cursor-pointer hover:scale-125' : 'cursor-default'} ${i <= (hover || rating) ? 'text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]' : 'text-gray-600'}`}
          style={{ fontSize: interactive ? '1.5rem' : '1rem' }}
          aria-label={`${i} star`}
        >
          ★
        </button>
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: Review }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`review-card relative rounded-2xl p-5 border border-phantom-accent/20 hover:border-phantom-accent/50 transition-all duration-500 flex flex-col bg-gradient-to-br ${gradients[review.gradientVariant]} backdrop-blur-sm ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Tag */}
      <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-phantom-accent/20 border border-phantom-accent/30 text-phantom-accent text-xs font-semibold">
        {review.tag}
      </span>

      {/* Header */}
      <div className="flex items-center gap-3 mb-3 pr-16">
        <div className="w-10 h-10 rounded-full bg-phantom-accent flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg shadow-phantom-accent/30">
          {review.initials}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold text-sm">{review.name}</span>
            {review.verified && (
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-green-500/20 border border-green-500/30 text-green-400 text-xs">
                <svg className="w-2.5 h-2.5" viewBox="0 0 12 12" fill="currentColor"><path d="M10 3L5 8.5 2 5.5l1-1 2 2 4-4 1 1z"/></svg>
                Verified
              </span>
            )}
          </div>
          <StarRating rating={review.rating} />
        </div>
      </div>

      {/* Quote icon */}
      <svg className="w-6 h-6 text-phantom-accent/30 mb-2 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
      </svg>

      <p className="text-gray-300 text-sm leading-relaxed flex-1">{review.text}</p>

      <div className="text-gray-600 text-xs mt-3 pt-3 border-t border-phantom-accent/10">
        {new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
      </div>
    </div>
  )
}

function ScrollingQuotes({ reviews }: { reviews: Review[] }) {
  return (
    <div className="relative overflow-hidden py-4 mb-12 border-y border-phantom-accent/10">
      <div
        className="flex gap-8 w-max"
        style={{
          animation: 'scroll 40s linear infinite',
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
      >
        {[...reviews, ...reviews].map((r, i) => (
          <div key={i} className="flex-shrink-0 flex items-center gap-3 text-gray-500 text-sm">
            <span className="text-phantom-accent font-bold">★</span>
            <span className="italic">&ldquo;{r.text.slice(0, 60)}…&rdquo;</span>
            <span className="text-phantom-accent/50">— {r.name}</span>
            <span className="mx-2 text-phantom-accent/20">|</span>
          </div>
        ))}
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0) translateZ(0); } to { transform: translateX(-50%) translateZ(0); } }`}</style>
    </div>
  )
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>(PRESET_REVIEWS)
  const [form, setForm] = useState({ name: '', rating: 0, text: '' })
  const [submitted, setSubmitted] = useState(false)
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  const avgRating = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)

  useEffect(() => {
    // Animate hero elements with CSS class addition
    const heroEl = heroRef.current
    if (heroEl) {
      heroEl.querySelectorAll('.rating-hero').forEach(el => {
        (el as HTMLElement).style.transition = 'opacity 0.9s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)';
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'scale(1)';
      })
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || form.rating === 0 || !form.text.trim()) return
    const newReview: Review = {
      id: Date.now(),
      name: form.name.trim(),
      initials: form.name.trim().slice(0, 2).toUpperCase(),
      rating: form.rating,
      text: form.text.trim(),
      date: new Date().toISOString().split('T')[0],
      tag: 'General',
      verified: false,
      rotation: (Math.random() - 0.5) * 3,
      gradientVariant: Math.floor(Math.random() * gradients.length),
    }
    setReviews(prev => [newReview, ...prev])
    setForm({ name: '', rating: 0, text: '' })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const filtered = activeTag ? reviews.filter(r => r.tag === activeTag) : reviews

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div ref={heroRef} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-phantom-accent/30 text-sm text-gray-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Community Reviews
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4">What Players Say</h1>
          <p className="text-gray-400 text-xl mb-10">Real experiences from the Phantom Mods community</p>

          {/* Rating hero */}
          <div className="rating-hero inline-flex flex-col sm:flex-row items-center gap-8 glass rounded-3xl px-10 py-8 border border-phantom-accent/30 mb-4" style={{ opacity: 0, transform: 'scale(0.85)' }}>
            <div className="text-center">
              <div className="text-7xl font-black text-phantom-accent drop-shadow-[0_0_30px_rgba(107,28,46,0.6)]">{avgRating}</div>
              <div className="flex gap-1 justify-center my-2">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className={`text-2xl ${i <= Math.round(Number(avgRating)) ? 'text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]' : 'text-gray-600'}`}>★</span>
                ))}
              </div>
              <div className="text-gray-400 text-sm">Average rating</div>
            </div>
            <div className="w-px h-16 bg-phantom-accent/20 hidden sm:block" />
            <div className="text-center">
              <div className="review-counter text-5xl font-black text-white">{reviews.length}</div>
              <div className="text-gray-400 text-sm mt-1">Total reviews</div>
            </div>
            <div className="w-px h-16 bg-phantom-accent/20 hidden sm:block" />
            <div className="text-center">
              <div className="text-5xl font-black text-green-400">98%</div>
              <div className="text-gray-400 text-sm mt-1">Would recommend</div>
            </div>
          </div>
        </div>

        {/* Scrolling quotes marquee */}
        <ScrollingQuotes reviews={PRESET_REVIEWS} />

        {/* Tag filter */}
        <div className="flex items-center gap-3 flex-wrap mb-8">
          <span className="text-gray-500 text-sm font-medium">Filter:</span>
          <button
            onClick={() => setActiveTag(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${activeTag === null ? 'bg-phantom-accent text-white' : 'glass border border-phantom-accent/20 text-gray-400 hover:text-white'}`}
          >
            All
          </button>
          {TAGS.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${activeTag === tag ? 'bg-phantom-accent text-white' : 'glass border border-phantom-accent/20 text-gray-400 hover:text-white'}`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="reviews-masonry columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 mb-20">
          {filtered.map(r => (
            <div key={r.id} className="mb-5 break-inside-avoid">
              <ReviewCard review={r} />
            </div>
          ))}
        </div>

        {/* Submit form */}
        <div className="max-w-2xl mx-auto">
          <div className="glass rounded-3xl p-8 border border-phantom-accent/30">
            <h2 className="text-2xl font-bold text-white mb-2">Leave a Review</h2>
            <p className="text-gray-400 text-sm mb-6">Share your experience with Phantom Mods</p>

            {submitted && (
              <div className="mb-6 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                ✓ Thanks for your review! It has been added to the list.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Nickname *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  placeholder="Your Minecraft username"
                  maxLength={30}
                  className="w-full px-4 py-3 rounded-xl glass border border-phantom-accent/20 focus:border-phantom-accent/60 text-white placeholder-gray-500 outline-none transition-colors text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Rating *</label>
                <StarRating rating={form.rating} interactive onRate={r => setForm(f => ({ ...f, rating: r }))} />
                {form.rating > 0 && (
                  <span className="text-gray-500 text-xs mt-1 block">{['', 'Poor', 'Fair', 'Good', 'Great', 'Excellent'][form.rating]}</span>
                )}
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Review *</label>
                <textarea
                  value={form.text}
                  onChange={e => setForm(f => ({ ...f, text: e.target.value }))}
                  placeholder="Tell others about your experience..."
                  rows={4}
                  maxLength={300}
                  className="w-full px-4 py-3 rounded-xl glass border border-phantom-accent/20 focus:border-phantom-accent/60 text-white placeholder-gray-500 outline-none transition-colors text-sm resize-none"
                  required
                />
                <div className="text-right text-gray-600 text-xs mt-1">{form.text.length}/300</div>
              </div>

              <button
                type="submit"
                disabled={!form.name || form.rating === 0 || !form.text}
                className="w-full py-4 rounded-xl bg-phantom-accent hover:bg-phantom-accent-light disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-sm transition-all duration-300 glow-accent hover:scale-[1.02]"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}
