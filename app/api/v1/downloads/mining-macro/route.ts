import { NextResponse } from 'next/server'

export async function GET() {
  const jarUrl = process.env.MINING_MACRO_JAR_URL ?? 'https://phantom-mods.net/downloads/mining-macro.jar'

  try {
    const upstream = await fetch(jarUrl)
    if (!upstream.ok) {
      return NextResponse.json({ error: 'Upstream unavailable' }, { status: 502 })
    }

    const blob = await upstream.arrayBuffer()
    return new NextResponse(blob, {
      headers: {
        'Content-Type': 'application/java-archive',
        'Content-Disposition': 'attachment; filename="mining-macro.jar"',
        'Cache-Control': 'no-store',
      },
    })
  } catch {
    return NextResponse.json({ error: 'Download failed' }, { status: 500 })
  }
}
