import { motion } from 'framer-motion'

const METRICS = [
  { value: '50K', label: 'Prize Pool (BDT)', accent: 'text-gold' },
  { value: '20', label: 'Departments', accent: 'text-purple-bright' },
  { value: '180+', label: 'Debaters', accent: 'text-cyan' },
  { value: '2', label: 'Days · EN & BN', accent: 'text-white' },
] as const

export function Hero() {
  return (
    <section
      id="hero"
      className="section-surface-clear relative flex min-h-[100vh] min-h-[100dvh] items-center overflow-hidden pt-28 pb-20 md:pt-32"
    >
      <div className="section-container-wide relative z-[3] w-full px-5 sm:px-8 lg:px-12">
        <motion.div
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <motion.div className="flex flex-col justify-center text-center lg:text-left">
            <motion.span
              className="hero-badge mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              Grand Line Tournament · Season 01
            </motion.span>

            <motion.h1
              className="heading-display mt-6 lg:text-6xl xl:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              Debattle <span className="text-purple-bright">2.0</span>
            </motion.h1>

            <motion.p
              className="hero-sub mt-5 text-xl sm:text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.75 }}
            >
              Clash of Departments
            </motion.p>

            <motion.div
              className="section-intro-band mx-auto mt-6 max-w-xl lg:mx-0 lg:max-w-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.85 }}
            >
              <p className="section-intro-band__text text-left lg:text-left">
                A prestigious inter-department parliamentary debate voyage this is where academic
                rigor meets competitive spirit on the Grand Line of argumentation.<br />
                <span className="font-semibold text-purple-bright">#SailToDebattle</span>
              </p>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <span className="highlight-chip">June 19–20, 2026</span>
              <span className="highlight-chip">Independent University, Bangladesh</span>

            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1 }}
            >
              <a href="#register" className="btn-primary">
                Register Now
              </a>
              <a href="#schedule" className="btn-secondary">
                View Schedule
              </a>
              <a href="#format" className="btn-secondary">
                Rulebook
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            <div className="hero-stats-bar">
              <div className="hero-stats-bar__primary">
                <p className="hero-stats-bar__eyebrow">IUB Debate Club presents</p>
                <div className="hero-stats-bar__headline">
                  <span className="hero-stats-bar__value">60+</span>
                  <span className="hero-stats-bar__label">Teams Expected</span>
                </div>
              </div>

              <div className="hero-stats-bar__metrics">
                {METRICS.map((m) => (
                  <div key={m.label} className="hero-stats-bar__metric">
                    <span className={`hero-stats-bar__metric-value ${m.accent}`}>{m.value}</span>
                    <span className="hero-stats-bar__metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="scroll-chevron absolute bottom-8 left-1/2 z-[3] flex -translate-x-1/2 flex-col items-center gap-2 text-ink-dim"
        aria-label="Scroll to about"
      >
        <span
          className="text-[10px] uppercase tracking-widest"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Explore
        </span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-purple-bright">
          <path d="M8 3 L8 13 M4 9 L8 13 L12 9" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </a>
    </section>
  )
}
