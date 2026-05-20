import { motion, AnimatePresence } from 'framer-motion'
import { useScrollSectionContext } from '../../context/ScrollSectionContext'
import { CompassRoseLarge, HakiRing, IslandHorizon } from './art/EnvironmentArt'

const sectionGlow: Record<string, string> = {
  hero: 'rgba(139, 92, 246, 0.12)',
  about: 'rgba(167, 139, 250, 0.1)',
  format: 'rgba(109, 40, 217, 0.14)',
  prizes: 'rgba(212, 168, 75, 0.18)',
  default: 'rgba(124, 58, 237, 0.08)',
}

export function SectionAtmosphere() {
  const { section } = useScrollSectionContext()
  const glow = sectionGlow[section] ?? sectionGlow.default
  const isPrizes = section === 'prizes'
  const isFormat = section === 'format' || section === 'about'

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden>
      <AnimatePresence mode="wait">
        <motion.div
          key={section}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 70% 50% at 50% 40%, ${glow} 0%, transparent 70%)`,
            }}
          />

          {isPrizes && (
            <motion.div
              className="absolute left-1/2 top-[30%] -translate-x-1/2 text-gold/15"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <HakiRing className="h-96 w-96 animate-haki-pulse" />
            </motion.div>
          )}

          {isFormat && (
            <motion.div
              className="absolute right-[5%] top-[25%] text-purple/15 max-md:hidden"
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
            >
              <CompassRoseLarge className="h-56 w-56" />
            </motion.div>
          )}

          {(section === 'gallery' || section === 'footer') && (
            <motion.div className="absolute bottom-[15%] left-0 w-full text-purple/10">
              <IslandHorizon className="h-24 w-full" />
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Persistent motion blur fog band */}
      <motion.div
        className="absolute inset-x-0 top-0 h-32 backdrop-blur-[2px]"
        style={{
          background: 'linear-gradient(to bottom, rgba(250,248,245,0.5), transparent)',
        }}
      />
    </div>
  )
}
