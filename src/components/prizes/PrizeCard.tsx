import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type PrizeCardProps = {
  rank: string
  tier: string
  highlight?: string
  items: readonly string[]
  orderClass: 'treasure-card--first' | 'treasure-card--second' | 'treasure-card--third'
  delay?: number
}

export function PrizeCard({
  rank,
  tier,
  highlight,
  items,
  orderClass,
  delay = 0,
}: PrizeCardProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <motion.article
      ref={ref}
      className={`treasure-card ${orderClass} ${visible ? 'treasure-card--visible' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="corner-flourish corner-flourish--tl" aria-hidden />
      <span className="corner-flourish corner-flourish--br" aria-hidden />

      <p className="treasure-rank">{rank}</p>
      <h3 className="mt-2 text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
        {tier}
      </h3>

      {highlight && <p className="treasure-amount mt-3">{highlight}</p>}

      <ul className="mt-5 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-ink-muted">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
            {item}
          </li>
        ))}
      </ul>
    </motion.article>
  )
}
