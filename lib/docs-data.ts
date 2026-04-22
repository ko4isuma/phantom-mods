export interface DocPage {
  title: string
  category: string
  content: string
}

export const docPages: Record<string, DocPage> = {
  introduction: {
    title: 'Introduction',
    category: 'Getting Started',
    content: `
      <p>Welcome to Phantom Mods documentation. This section helps you set up the project and download the latest client builds.</p>
      <h2>What is Phantom Mods?</h2>
      <p>Phantom Mods is a web portal for downloading supported client JAR files and reading setup guidance.</p>
      <h2>Quick Start</h2>
      <ol>
        <li>Open the Dashboard and pick your client.</li>
        <li>Download the latest file from the downloads endpoint.</li>
        <li>Place the file in your <code>.minecraft/mods</code> folder.</li>
      </ol>
    `,
  },
  downloads: {
    title: 'Downloads',
    category: 'Getting Started',
    content: `
      <p>All client files are served from the public downloads path.</p>
      <h2>Default file paths</h2>
      <ul>
        <li><code>/downloads/taunahi-v4.jar</code></li>
        <li><code>/downloads/mining-macro.jar</code></li>
      </ul>
      <h3>Server note</h3>
      <p>On deployment, upload JAR files into <code>public/downloads/</code> before running production builds.</p>
    `,
  },
  faq: {
    title: 'FAQ',
    category: 'Support',
    content: `
      <h2>Build fails with docs import errors</h2>
      <p>Ensure the docs data module is present and exports <code>docPages</code>, <code>docCategories</code>, and <code>getDocPage</code>.</p>
      <h2>Where can I get help?</h2>
      <p>Visit the support page and open a ticket if your issue is not covered in docs.</p>
    `,
  },
}

export const docCategories: Array<{ name: string; pages: string[] }> = [
  { name: 'Getting Started', pages: ['introduction', 'downloads'] },
  { name: 'Support', pages: ['faq'] },
]

export function getDocPage(slug: string): DocPage | null {
  return docPages[slug] ?? null
}
