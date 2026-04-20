import type { Metadata } from 'next'
import './globals.css'
import ShellWrapper from '@/components/layout/ShellWrapper'

export const metadata: Metadata = {
  title: 'Phantom Mods — Free Hypixel Skyblock Macro & Automation Scripts',
  description: 'Phantom Mods is a free Hypixel Skyblock macro download with Taunahi V4 free access, farming and mining automation, skyblock scripts, and free bot alternatives for money making.',
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
    'taunahi v4 free',
    'taunahi v4 crack',
    'taunahi crack download',
    'taunahi free download',
    'taunahi skyblock free',
    'hypixel skyblock macro free',
    'hypixel skyblock bot free download',
    'hypixel skyblock farming macro free',
    'skyblock mining macro',
    'skyblock mining bot free',
    'hypixel mining macro',
    'taunahi v4 free download 2024',
    'phantom mods free',
    'phantom mods hypixel',
    'free skyblock macro download',
    'skyblock automation bot',
    'hypixel skyblock script free',
    'taunahi alternative free',
    'best skyblock macro free',
    'hypixel skyblock money making bot',
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'Phantom Mods — Free Hypixel Skyblock Macro & Automation',
    description: 'Free Hypixel Skyblock automation — Taunahi V4 with 35+ AFK scripts: farming, ghost, fishing, foraging and more.',
    type: 'website',
    url: 'https://phantom-mods.net',
    siteName: 'Phantom Mods',
    images: [
      {
        url: 'https://phantom-mods.net/og-image.png',
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
    images: ['https://phantom-mods.net/og-image.png'],
  },
  alternates: {
    canonical: 'https://phantom-mods.net',
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
