import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { SECTION_CHARACTERS } from '../../data/sectionCharacters'
import { useScrollSectionContext } from '../../context/ScrollSectionContext'

export function SectionCharacterLayer() {
  const { section } = useScrollSectionContext()
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = () => setReducedMotion(mq.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const config = reducedMotion ? undefined : SECTION_CHARACTERS[section]

  return (
    <div className="section-char-layer" aria-hidden>
      <AnimatePresence mode="wait">
        {config && (
          <motion.div
            key={section}
            className="section-char-layer__scene"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className={`section-char-figure section-char-figure--${config.side}`}
              style={{
                backgroundImage: `url(${config.image})`,
                backgroundPosition: config.backgroundPosition ?? 'center',
                backgroundSize: config.backgroundSize ?? 'contain',
                opacity: config.opacity ?? 0.14,
              }}
            />
            <div className="section-char-glass" />
            <div className="section-char-vignette" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
