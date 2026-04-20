import Link from 'next/link'
import MiningMacroNav from '../MiningMacroNav'

export default function MiningMacroDocsPage() {
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
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Mining Macro Docs</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Basic documentation structure to onboard new users quickly.
          </p>
          <MiningMacroNav active="docs" />
        </div>

        <div className="doc-content glass rounded-3xl p-8 md:p-10 border border-phantom-accent/30">
          <h2>Installation</h2>
          <ol>
            <li>Download the latest JAR from the Download tab.</li>
            <li>Place <code>mining-macro.jar</code> into your <code>.minecraft/mods</code> folder.</li>
            <li>Launch Minecraft with your preferred loader profile.</li>
          </ol>

          <h2>Configuration</h2>
          <ul>
            <li>Select your mining profile (Gemstone, Powder, Tunnel).</li>
            <li>Set route points and break intervals in the macro settings.</li>
            <li>Enable fail-safe checks before long AFK sessions.</li>
          </ul>

          <h2>Usage</h2>
          <ul>
            <li>Join your target mining area and load the route.</li>
            <li>Start macro and monitor the first 1-2 minutes for validation.</li>
            <li>Use the pause hotkey anytime to safely stop the macro.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
