import type { Metadata } from 'next'
import './globals.css'
import ShellWrapper from '@/components/layout/ShellWrapper'

export const metadata: Metadata = {
  title: 'Phantom Mods — Free Hypixel Skyblock Macro & Automation Scripts',
  description: 'Free Hypixel Skyblock automation — Taunahi V4 with 35+ AFK scripts: farming, combat, fishing, foraging and more. The best free alternative to paid macros.',
  keywords: [
    'Hypixel free script',
    'Taunahi crack',
    'Taunahi free',
    'Taunahi V4 download',
    'Hypixel Skyblock macro',
    'Hypixel bot free',
    'Phantom Mods',
    'Skyblock automation free',
    'free Hypixel macro',
    'Skyblock farming bot',
    'ghost farming macro',
    'Taunahi V4',
    'free Skyblock bot',
    'Hypixel Skyblock automation',
    'Skyblock AFK macro',
    'Hypixel macro free download',
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'Phantom Mods — Free Hypixel Skyblock Macro & Automation',
    description: 'Free Hypixel Skyblock automation — Taunahi V4 with 35+ AFK scripts: farming, ghost, fishing, foraging and more.',
    type: 'website',
    url: 'https://phantom-mods.com',
    siteName: 'Phantom Mods',
    images: [
      {
        url: 'https://phantom-mods.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Phantom Mods — Free Hypixel Skyblock Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phantom Mods — Free Hypixel Skyblock Macro',
    description: 'Free Hypixel Skyblock automation — 35+ AFK scripts, farming, ghost, fishing and more.',
    images: ['https://phantom-mods.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://phantom-mods.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#121212" />
      </head>
      <body>
        <ShellWrapper>{children}</ShellWrapper>
      </body>
    </html>
  )
}
