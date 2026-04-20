import Link from 'next/link'
import MiningMacroNav from '../MiningMacroNav'

export default function MiningMacroDownloadPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/clients/mining-macro"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-phantom-accent text-sm mb-8 transition-colors"
        >
          ← Back to Home
        </Link>

        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Mining Macro Download</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Dedicated download zone for the Mining Macro client.
          </p>
          <MiningMacroNav active="download" />
        </div>

        <section className="glass rounded-3xl p-8 md:p-10 border border-phantom-accent/35">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <p className="text-phantom-accent text-sm font-semibold uppercase tracking-wide mb-2">JAR File</p>
              <h2 className="text-3xl font-black text-white mb-2">Mining Macro v1.0.0</h2>
              <p className="text-gray-400">Build: Stable • Minecraft 1.8.9 / 1.21.1 • Updated April 2026</p>
            </div>
            <a
              href="/api/v1/downloads/mining-macro"
              className="px-8 py-4 rounded-xl bg-phantom-accent hover:bg-phantom-accent-light text-white font-bold text-lg transition-all duration-300 glow-accent text-center"
            >
              Download .JAR
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-phantom-accent/20 bg-white/[0.03] p-4">
              <p className="text-gray-500 text-xs uppercase mb-1">File name</p>
              <p className="text-white font-semibold">mining-macro.jar</p>
            </div>
            <div className="rounded-2xl border border-phantom-accent/20 bg-white/[0.03] p-4">
              <p className="text-gray-500 text-xs uppercase mb-1">Loader</p>
              <p className="text-white font-semibold">Fabric / Forge</p>
            </div>
            <div className="rounded-2xl border border-phantom-accent/20 bg-white/[0.03] p-4">
              <p className="text-gray-500 text-xs uppercase mb-1">Type</p>
              <p className="text-white font-semibold">Standalone Mining Client</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
