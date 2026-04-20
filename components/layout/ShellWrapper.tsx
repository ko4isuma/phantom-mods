'use client'
import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Footer from './Footer'

const NO_SHELL_ROUTES = ['/dashboard']

export default function ShellWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hideShell = NO_SHELL_ROUTES.some(r => pathname === r || pathname.startsWith(r + '/'))

  if (hideShell) return <>{children}</>
  return (
    <div className="relative">
      <div className="site-ambient fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="site-ambient-grid absolute inset-0" />
        <div className="site-ambient-orb site-ambient-orb-a" />
        <div className="site-ambient-orb site-ambient-orb-b" />
        <div className="site-ambient-orb site-ambient-orb-c" />
      </div>
      <div className="relative z-10">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}
