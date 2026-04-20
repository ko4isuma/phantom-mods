import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const type = req.nextUrl.searchParams.get('type') ?? 'FABRIC'

  // Placeholder download info — replace JAR_URL with real hosted file URL
  const JAR_URL = process.env.TAUNAHI_JAR_URL ?? 'https://phantom-mods.com/downloads/taunahi-v4.jar'

  if (type !== 'FABRIC') {
    return NextResponse.json(
      { error: 'Only FABRIC type is currently supported' },
      { status: 400 },
    )
  }

  // Proxy the file so the browser gets a direct download
  try {
    const upstream = await fetch(JAR_URL)
    if (!upstream.ok) {
      return NextResponse.json({ error: 'Upstream unavailable' }, { status: 502 })
    }
    const blob = await upstream.arrayBuffer()
    return new NextResponse(blob, {
      headers: {
        'Content-Type': 'application/java-archive',
        'Content-Disposition': 'attachment; filename="taunahi-v4.jar"',
        'Cache-Control': 'no-store',
      },
    })
  } catch {
    return NextResponse.json({ error: 'Download failed' }, { status: 500 })
  }
}
