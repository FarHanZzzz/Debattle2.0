import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import iubdcLogo from '../assets/iubdc-logo.png'
import { NAV_LINKS } from '../data/constants'
import { ScrollProgress } from './ui/ScrollProgress'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <motion.header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-scrolled py-3' : 'py-4'
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.2 }}
    >
      <ScrollProgress />
      <nav className="section-container relative flex items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#" className="group flex shrink-0 items-center gap-3">
          <img
            src={iubdcLogo}
            alt="IUB Debate Club"
            className="nav-logo h-8 sm:h-9"
            width={120}
            height={36}
          />
          <span className="hidden border-l border-purple-bright/20 pl-3 lg:block">
            <span
              className="block text-sm font-semibold text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Debattle 2.0
            </span>
            <span className="block text-[10px] tracking-wider text-white uppercase">
              Clash of Departments
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#register" className="btn-primary hidden text-xs sm:inline-flex">
          Register
        </a>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-5 bg-purple-bright transition-all ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`h-0.5 w-5 bg-purple-bright transition-all ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`h-0.5 w-5 bg-purple-bright transition-all ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 top-[60px] z-[100] mx-4 mt-2 h-fit max-h-[calc(100vh-80px)] overflow-y-auto rounded-2xl bg-[#0d0518] bg-opacity-95 border border-purple-bright/20 shadow-2xl backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-1 p-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base text-ink-muted transition-all hover:bg-white/5 hover:text-white active:bg-white/10"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <a href="#register" onClick={() => setMenuOpen(false)} className="btn-primary w-full">
                Register Now
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
