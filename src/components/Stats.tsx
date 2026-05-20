import { useEffect, useRef } from 'react'
import { STATS } from '../data/constants'
import { SectionHeader } from './ui/SectionHeader'

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null)
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([])
  const animated = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated.current) return
        animated.current = true

        const duration = 1600
        const start = performance.now()
        const targets = STATS.map((s) => s.value)

        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 3)

          STATS.forEach((stat, i) => {
            const el = numberRefs.current[i]
            if (!el) return
            const v = Math.floor(eased * targets[i])
            el.textContent =
              'format' in stat && stat.format
                ? v.toLocaleString('en-BD')
                : String(v)
          })

          if (t < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
        observer.disconnect()
      },
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="section-padding section-surface relative"
    >
      <div className="section-container-wide relative z-[5]">
        <SectionHeader
          eyebrow="By the numbers"
          title="A fleet of debaters"
          description="The largest inter-department parliamentary clash at IUB — built for scale, rigor, and championship-level competition."
        />

        <div className="stats-grid mt-12">
          {STATS.map((stat, i) => (
            <article key={stat.label} className="stat-card">
              <p className="stat-card__value">
                {'prefix' in stat && stat.prefix && (
                  <span className="stat-card__prefix">{stat.prefix}</span>
                )}
                <span
                  ref={(el) => {
                    numberRefs.current[i] = el
                  }}
                  className="stat-card__number"
                >
                  0
                </span>
                {'suffix' in stat && stat.suffix && (
                  <span className="stat-card__suffix">{stat.suffix}</span>
                )}
              </p>
              <p className="stat-card__label">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
