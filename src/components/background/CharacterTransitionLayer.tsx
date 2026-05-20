import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import heroPoster from '../../assets/hero.png'
import { useScrollSectionContext } from '../../context/ScrollSectionContext'
import type { ScrollSection } from '../../hooks/useScrollSection'

type CharacterPose = 'left-crew' | 'right-crew' | 'both'

const SECTION_POSE: Partial<Record<ScrollSection, CharacterPose>> = {
  about: 'left-crew',
  format: 'right-crew',
  departments: 'both',
  prizes: 'both',
  gallery: 'left-crew',
  organizer: 'left-crew',
  register: 'right-crew',
}

export function CharacterTransitionLayer() {
  const { section } = useScrollSectionContext()
  const prevSection = useRef(section)
  const [active, setActive] = useState<CharacterPose | null>(null)

  useEffect(() => {
    if (section === prevSection.current) return
    prevSection.current = section

    const pose = SECTION_POSE[section]
    if (!pose) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    setActive(pose)
    const timer = setTimeout(() => setActive(null), 2200)
    return () => clearTimeout(timer)
  }, [section])

  return (
    <div className="pointer-events-none fixed inset-0 z-[4] overflow-hidden" aria-hidden>
      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            key={`${section}-${active}`}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="character-flash-vignette absolute inset-0" />

            {(active === 'left-crew' || active === 'both') && (
              <motion.div
                className="character-cutout character-cutout--left"
                style={{ backgroundImage: `url(${heroPoster})` }}
                initial={{ x: '-55%', opacity: 0, scale: 1.05 }}
                animate={{ x: '-5%', opacity: 0.92, scale: 1 }}
                exit={{ x: '-60%', opacity: 0 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              />
            )}

            {(active === 'right-crew' || active === 'both') && (
              <motion.div
                className="character-cutout character-cutout--right"
                style={{ backgroundImage: `url(${heroPoster})` }}
                initial={{ x: '55%', opacity: 0, scale: 1.05 }}
                animate={{ x: '5%', opacity: 0.92, scale: 1 }}
                exit={{ x: '60%', opacity: 0 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              />
            )}

            <motion.div
              className="character-flash-title absolute bottom-[12%] left-1/2 -translate-x-1/2 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="eyebrow text-gold">The Grand Line awaits</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
