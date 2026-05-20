import { motion } from 'framer-motion'
import {
  AdventurerSilhouette,
  CloudPuff,
  FloatingRune,
  HakiRing,
  SailFragment,
  ShipSilhouette,
} from './art/EnvironmentArt'

export function HeroAmbient() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Background layer — slow drift */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.6, 0.85, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className="absolute -left-[10%] top-[12%] h-[55%] w-[70%] rounded-full opacity-80"
          style={{
            background:
              'radial-gradient(ellipse, rgba(139, 92, 246, 0.2) 0%, transparent 65%)',
            filter: 'blur(50px)',
          }}
        />
        <div
          className="absolute -right-[5%] top-[5%] h-[50%] w-[55%] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse, rgba(196, 181, 253, 0.35) 0%, transparent 60%)',
            filter: 'blur(40px)',
          }}
        />
      </motion.div>

      {/* Mid layer — clouds & haki */}
      <motion.div
        className="absolute left-[5%] top-[18%] text-purple/30"
        animate={{ x: [0, 12, 0], y: [0, -8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      >
        <CloudPuff className="h-16 w-40" />
      </motion.div>
      <motion.div
        className="absolute right-[8%] top-[22%] text-purple/25"
        animate={{ x: [0, -10, 0], y: [0, 6, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      >
        <CloudPuff className="h-14 w-36 scale-x-[-1]" />
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-[8%] -translate-x-1/2 text-purple/20"
        animate={{ scale: [1, 1.06, 1], rotate: [0, 8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <HakiRing className="h-56 w-56 md:h-72 md:w-72" />
      </motion.div>

      {/* Ship — horizon */}
      <motion.div
        className="absolute bottom-[18%] left-1/2 w-[min(420px,85vw)] -translate-x-1/2 text-purple-deep/25"
        animate={{ y: [0, -6, 0], rotate: [-0.5, 0.5, -0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ShipSilhouette className="w-full" />
      </motion.div>

      {/* Character silhouettes — environmental */}
      <motion.div
        className="absolute bottom-[22%] left-[8%] h-28 w-24 text-purple-deep/20 max-sm:hidden"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      >
        <AdventurerSilhouette variant="left" className="h-full w-full" />
      </motion.div>
      <motion.div
        className="absolute bottom-[20%] right-[10%] h-32 w-28 text-purple-deep/18 max-sm:hidden"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
      >
        <AdventurerSilhouette variant="right" className="h-full w-full" />
      </motion.div>

      {/* Foreground — runes & sails */}
      <motion.div
        className="absolute left-[15%] top-[38%] text-gold/25"
        animate={{ y: [0, -16, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FloatingRune className="h-10 w-10" />
      </motion.div>
      <motion.div
        className="absolute right-[18%] top-[42%] text-purple/20"
        animate={{ y: [0, 14, 0], rotate: [0, -12, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      >
        <SailFragment className="h-14 w-10" />
      </motion.div>

      {/* Fog overlay */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[45%]"
        style={{
          background:
            'linear-gradient(to top, rgba(250,248,245,0.85) 0%, rgba(250,248,245,0.4) 40%, transparent 100%)',
        }}
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Cinematic light streak */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)',
          backgroundSize: '200% 100%',
        }}
        animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}
