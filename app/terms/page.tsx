import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service — Phantom Mods',
  description: 'Read the Phantom Mods Terms of Service. Usage policies, disclaimers, and legal information.',
  robots: 'index, follow',
}

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using Phantom Mods and its associated software (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all of these Terms, you may not access or use the Service. These Terms apply to all users of the Service.`,
  },
  {
    title: '2. Description of Service',
    content: `Phantom Mods provides Minecraft automation software ("Taunahi V4") and related tools for use with Hypixel Skyblock. The Service is provided "as is" and is intended for educational and entertainment purposes only. Phantom Mods does not officially endorse or encourage violation of any third-party Terms of Service.`,
  },
  {
    title: '3. User Responsibility & Disclaimer',
    content: `You acknowledge that the use of automation software on Hypixel may violate Hypixel's Terms of Service. You use the Service entirely at your own risk. Phantom Mods is not responsible for any bans, account restrictions, item losses, or other consequences arising from your use of the software. By using the Service, you confirm that you are at least 13 years of age and accept full responsibility for your actions.`,
  },
  {
    title: '4. Prohibited Uses',
    content: `You agree NOT to: (a) redistribute, resell, or commercially exploit the software without written permission; (b) reverse-engineer or decompile any part of the software beyond what is permitted by applicable law; (c) use the software to harass, harm, or exploit other players; (d) use the software in any way that violates applicable local, national, or international law or regulation.`,
  },
  {
    title: '5. Intellectual Property',
    content: `All content, code, and materials provided by Phantom Mods are the intellectual property of Phantom Mods and its contributors. You are granted a limited, non-exclusive, non-transferable license to use the software for personal, non-commercial purposes only. This license does not include any right to sublicense, sell, or transfer the software.`,
  },
  {
    title: '6. Updates & Availability',
    content: `Phantom Mods reserves the right to modify, suspend, or discontinue the Service (or any feature thereof) at any time, with or without notice. We are not liable to you or any third party for any modification, suspension, or discontinuation of the Service. We strive to keep the software up to date with Hypixel patches, but do not guarantee continuous availability.`,
  },
  {
    title: '7. Limitation of Liability',
    content: `To the maximum extent permitted by applicable law, Phantom Mods and its contributors shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including loss of data, profits, accounts, or goodwill — arising out of or related to your use of, or inability to use, the Service, even if Phantom Mods has been advised of the possibility of such damages.`,
  },
  {
    title: '8. Indemnification',
    content: `You agree to defend, indemnify, and hold harmless Phantom Mods and its contributors from and against any claims, damages, obligations, losses, liabilities, costs, or expenses arising from: (a) your use of the Service; (b) your violation of these Terms; (c) your violation of any third-party rights, including any intellectual property or privacy rights.`,
  },
  {
    title: '9. Changes to Terms',
    content: `Phantom Mods reserves the right to amend these Terms at any time. When changes are made, we will update the "Last Updated" date at the bottom of this page. Your continued use of the Service after changes become effective constitutes your acceptance of the revised Terms.`,
  },
  {
    title: '10. Contact',
    content: `If you have any questions about these Terms, please contact us via our Discord server.`,
    link: true,
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-phantom-accent/30 text-sm text-gray-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-phantom-accent" />
            Legal
          </div>
          <h1 className="text-5xl font-black text-white mb-4">Terms of Service</h1>
          <p className="text-gray-400 text-lg">Please read these terms carefully before using Phantom Mods.</p>
          <p className="text-gray-500 text-sm mt-3">Last Updated: January 1, 2025</p>
        </div>

        {/* Disclaimer banner */}
        <div className="glass rounded-2xl p-6 border border-phantom-accent/40 mb-12 bg-phantom-accent/5">
          <p className="text-gray-300 text-sm leading-relaxed">
            <strong className="text-phantom-accent">Important:</strong> Using automation software on Hypixel violates their Terms of Service.
            Phantom Mods provides software for educational purposes. You use it entirely at your own risk.
            We are not responsible for bans or account penalties.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, i) => (
            <div key={i} className="glass rounded-2xl p-8 border border-phantom-accent/20 hover:border-phantom-accent/40 transition-colors">
              <h2 className="text-white font-bold text-xl mb-4 pb-3 border-b border-phantom-accent/20">
                {section.title}
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {section.content}
                {section.link && (
                  <>
                    {' '}
                    <a
                      href="https://discord.gg/NpVU5xmWDr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-phantom-accent hover:text-phantom-accent-light underline underline-offset-2 transition-colors"
                    >
                      Join Discord
                    </a>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>

        {/* Footer nav */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">Also see our <Link href="/privacy" className="text-phantom-accent hover:text-phantom-accent-light transition-colors">Privacy Policy</Link>.</p>
          <Link href="/" className="inline-flex px-6 py-3 rounded-xl bg-phantom-accent hover:bg-phantom-accent-light text-white font-semibold text-sm transition-all duration-300">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
