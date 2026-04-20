import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Phantom Mods',
  description: 'Read the Phantom Mods Privacy Policy. Learn how we handle data, cookies, and user information.',
  robots: 'index, follow',
}

const sections = [
  {
    title: '1. Introduction',
    content: `Phantom Mods ("we", "us", or "our") operates the phantom-mods.com website and associated software. This Privacy Policy explains how we collect, use, and safeguard any information when you visit our website or use our software. By using the Service, you agree to the practices described in this policy.`,
  },
  {
    title: '2. Information We Collect',
    content: `We collect minimal information to operate the Service. This may include: (a) Usage data — anonymized analytics about pages visited and features used (no personally identifiable information); (b) Account data — if you register on our Dashboard, we store your username and a hashed password; (c) Log data — standard server logs including IP address (retained for up to 30 days for security purposes); (d) No payment data is collected — all purchases are processed by third-party payment providers.`,
  },
  {
    title: '3. How We Use Information',
    content: `We use collected information solely to: operate and maintain the Service; improve the website and user experience; detect and prevent fraudulent or abusive behavior; send service-related communications (e.g., update announcements via Discord). We do not sell, trade, or transfer your personal information to third parties.`,
  },
  {
    title: '4. Cookies',
    content: `We use session cookies to maintain login state on the Dashboard. We may also use anonymous analytics cookies to understand aggregate usage patterns. You can disable cookies in your browser settings; note that some features of the Dashboard may not function correctly without cookies.`,
  },
  {
    title: '5. Third-Party Services',
    content: `The Service may use third-party services including: Discord (for community and support — governed by Discord's Privacy Policy); analytics providers using anonymized data only. We do not share personally identifiable information with these services beyond what is necessary for their function.`,
  },
  {
    title: '6. Data Security',
    content: `We implement reasonable technical and organizational measures to protect your information. However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security of data stored or transmitted through the Service.`,
  },
  {
    title: '7. Data Retention',
    content: `We retain account data for as long as your account is active or as needed to provide the Service. You may request deletion of your account and associated data at any time by contacting us via Discord. Log data is automatically purged after 30 days.`,
  },
  {
    title: '8. Children\'s Privacy',
    content: `The Service is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected such information, we will promptly delete it. If you believe a child under 13 has provided us with personal information, please contact us.`,
  },
  {
    title: '9. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. We will notify users of significant changes by posting a notice on our website or Discord server. Your continued use of the Service after changes are posted constitutes your acceptance of the updated policy. The "Last Updated" date at the bottom of this page reflects the most recent revision.`,
  },
  {
    title: '10. Contact Us',
    content: `If you have questions or concerns about this Privacy Policy or your data, please contact us via our Discord server.`,
    link: true,
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-phantom-accent/30 text-sm text-gray-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-phantom-accent" />
            Legal
          </div>
          <h1 className="text-5xl font-black text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400 text-lg">We take your privacy seriously. Here&apos;s how we handle your data.</p>
          <p className="text-gray-500 text-sm mt-3">Last Updated: January 1, 2025</p>
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
          <p className="text-gray-500 text-sm mb-4">Also see our <Link href="/terms" className="text-phantom-accent hover:text-phantom-accent-light transition-colors">Terms of Service</Link>.</p>
          <Link href="/" className="inline-flex px-6 py-3 rounded-xl bg-phantom-accent hover:bg-phantom-accent-light text-white font-semibold text-sm transition-all duration-300">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
