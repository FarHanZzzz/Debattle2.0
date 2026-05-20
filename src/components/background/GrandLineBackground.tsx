import { motion, useScroll, useTransform } from 'framer-motion'
import { useScrollSectionContext } from '../../context/ScrollSectionContext'
import parchmentTexture from '../../assets/parchment.jpg'
import {
  AdventurerSilhouette,
  CloudPuff,
  CompassRoseLarge,
  IslandHorizon,
  ShipSilhouette,
} from './art/EnvironmentArt'

function WaveSvg({ id, opacity = 0.12 }: { id: string; opacity?: number }) {
  return (
    <svg
      className="absolute bottom-0 left-0 w-[200%] min-w-full"
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      style={{ opacity }}
      aria-hidden
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#5b21b6" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${id})`}
        d="M0,100 C240,40 480,140 720,80 C960,30 1200,120 1440,70 L1440,200 L0,200 Z"
      />
    </svg>
  )
}

function NauticalGrid() {
  return (
    <svg className="absolute inset-0 h-full w-full opacity-[0.035]" aria-hidden>
      <defs>
        <pattern id="nav-grid-gl" width="72" height="72" patternUnits="userSpaceOnUse">
          <path d="M 72 0 L 0 0 0 72" fill="none" stroke="#5b21b6" strokeWidth="0.5" />
          <circle cx="36" cy="36" r="1.2" fill="#6d28d9" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#nav-grid-gl)" />
    </svg>
  )
}

export function GrandLineBackground() {
  const { scrollYProgress } = useScroll()
  const { section, progress } = useScrollSectionContext()

  const skyY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const midY = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const deepY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const farY = useTransform(scrollYProgress, [0, 1], ['0%', '45%'])
  const cloudY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const particleY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const waveY1 = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const waveY2 = useTransform(scrollYProgress, [0, 1], ['3%', '18%'])
  const silLeftX = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])
  const silRightX = useTransform(scrollYProgress, [0, 1], ['0%', '-6%'])
  const oceanOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.5, 0.75, 0.85, 0.5])
  const parchmentOpacity = useTransform(scrollYProgress, [0, 0.45, 0.8, 1], [0, 0.04, 0.09, 0.12])
  const heroBlurOpacity = useTransform(scrollYProgress, [0, 0.12], [0, 0.35])
  const compassRotate = useTransform(scrollYProgress, [0, 1], [0, 90])
  const compassScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 0.95])

  const shipOpacity = section === 'hero' ? 0.35 : section === 'about' ? 0.2 : 0.12
  const silhouetteOpacity = section === 'hero' || section === 'format' ? 0.22 : 0.1

  return (
    <motion.div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 50% -10%, #ede9fe 0%, transparent 50%),
            linear-gradient(175deg,
              #faf8f5 0%,
              #f0ebff 25%,
              #e4dcfc 48%,
              #ebe4ff 68%,
              #f5f0ff 85%,
              #faf8f5 100%
            )
          `,
        }}
      />

      <motion.div className="absolute inset-0" style={{ y: farY, opacity: oceanOpacity }}>
        <div
          className="absolute top-[40%] left-1/2 h-[70vh] w-[140vw] -translate-x-1/2"
          style={{
            background:
              'radial-gradient(ellipse, rgba(91, 33, 182, 0.2) 0%, rgba(109, 40, 217, 0.08) 45%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </motion.div>

      <motion.div className="absolute inset-0" style={{ y: skyY }}>
        <motion.div
          className="absolute -top-[10%] right-0 h-[min(560px,75vw)] w-[min(560px,75vw)] rounded-full"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            background:
              'radial-gradient(circle, rgba(167, 139, 250, 0.5) 0%, rgba(109, 40, 217, 0.1) 50%, transparent 70%)',
            filter: 'blur(45px)',
          }}
        />
        <motion.div
          className="absolute top-[5%] left-[-12%] h-[min(400px,60vw)] w-[min(400px,60vw)] rounded-full"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{
            background:
              'radial-gradient(circle, rgba(237, 233, 254, 0.95) 0%, rgba(196, 181, 253, 0.2) 55%, transparent 75%)',
            filter: 'blur(35px)',
          }}
        />
      </motion.div>

      <motion.div className="absolute inset-0" style={{ y: midY }}>
        <div
          className="absolute bottom-[25%] left-0 w-full text-purple/12"
          style={{ opacity: silhouetteOpacity }}
        >
          <IslandHorizon className="h-32 w-full" />
        </div>
        <motion.div
          className="absolute bottom-[28%] left-1/2 w-[min(500px,90vw)] -translate-x-1/2 text-purple-deep/30"
          style={{ opacity: shipOpacity }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ShipSilhouette className="w-full" />
        </motion.div>
      </motion.div>

      <motion.div className="absolute inset-0" style={{ y: deepY, opacity: silhouetteOpacity }}>
        <motion.div
          className="absolute top-[42%] left-[3%] h-36 w-28 text-purple-deep/15 max-lg:hidden"
          style={{ x: silLeftX }}
        >
          <AdventurerSilhouette variant="left" className="h-full w-full" />
        </motion.div>
        <motion.div
          className="absolute top-[48%] right-[4%] h-40 w-32 text-purple-deep/12 max-lg:hidden"
          style={{ x: silRightX }}
        >
          <AdventurerSilhouette variant="right" className="h-full w-full" />
        </motion.div>
        <div className="absolute top-[38%] left-[42%] h-28 w-24 text-purple/10 max-xl:hidden">
          <AdventurerSilhouette variant="center" className="h-full w-full" />
        </div>
      </motion.div>

      <motion.div className="absolute inset-0" style={{ y: cloudY }}>
        <div className="absolute top-[15%] left-[10%] text-white/40">
          <CloudPuff className="h-20 w-48 opacity-60" />
        </div>
        <motion.div
          className="absolute top-[22%] right-[12%] text-purple-soft/50"
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        >
          <CloudPuff className="h-16 w-40" />
        </motion.div>
      </motion.div>

      <NauticalGrid />

      <motion.div
        className="absolute top-[12%] right-[6%] text-purple/18 max-md:hidden"
        style={{ rotate: compassRotate, scale: compassScale }}
      >
        <CompassRoseLarge className="h-52 w-52 lg:h-64 lg:w-64" />
      </motion.div>

      <motion.div className="absolute inset-0" style={{ y: deepY }}>
        {[
          { top: '20%', left: '75%', size: 48, delay: 0 },
          { top: '55%', left: '12%', size: 32, delay: 1.2 },
          { top: '70%', left: '80%', size: 40, delay: 0.6 },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-lg border border-purple/10 bg-purple/5 backdrop-blur-sm"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              transform: 'rotate(45deg)',
            }}
            animate={{ y: [0, -14, 0], rotate: [45, 52, 45] }}
            transition={{ duration: 8 + i, repeat: Infinity, delay: p.delay }}
          />
        ))}
      </motion.div>

      <motion.div style={{ y: particleY }}>
        {Array.from({ length: 36 }).map((_, i) => (
          <span
            key={i}
            className="animate-drift absolute rounded-full"
            style={{
              width: 1.5 + (i % 4),
              height: 1.5 + (i % 4),
              left: `${(i * 13 + 5) % 100}%`,
              top: `${(i * 19 + 9) % 100}%`,
              background:
                i % 7 === 0 ? 'rgba(212, 168, 75, 0.4)' : 'rgba(139, 92, 246, 0.35)',
              boxShadow:
                i % 7 === 0
                  ? '0 0 10px rgba(212, 168, 75, 0.3)'
                  : '0 0 8px rgba(109, 40, 217, 0.25)',
              animationDelay: `${(i % 10) * 0.5}s`,
              animationDuration: `${6 + (i % 6)}s`,
            }}
          />
        ))}
      </motion.div>

      <motion.div className="absolute bottom-0 left-0 w-full" style={{ y: waveY1 }}>
        <WaveSvg id="wave-gl-a" opacity={0.14} />
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 w-full -translate-x-[15%]"
        style={{ y: waveY2 }}
      >
        <WaveSvg id="wave-gl-b" opacity={0.08} />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-cover bg-center mix-blend-multiply"
        style={{
          backgroundImage: `url(${parchmentTexture})`,
          opacity: parchmentOpacity,
        }}
      />

      <motion.div
        className="absolute inset-x-0 top-0 h-[70vh]"
        style={{
          opacity: heroBlurOpacity,
          background: 'linear-gradient(to bottom, transparent, rgba(250,248,245,0.25))',
        }}
      />

      <div
        className="absolute inset-0 transition-[background] duration-1000"
        style={{
          background:
            section === 'prizes'
              ? `radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,168,75,${0.06 + progress * 0.04}) 0%, transparent 70%)`
              : section === 'format'
                ? 'radial-gradient(ellipse 70% 50% at 30% 40%, rgba(109,40,217,0.08) 0%, transparent 65%)'
                : 'transparent',
        }}
      />

      <div
        className="absolute inset-x-0 top-0 h-36"
        style={{ background: 'linear-gradient(to bottom, rgba(250,248,245,0.85), transparent)' }}
      />
      <motion.div
        className="absolute inset-x-0 bottom-0 h-28"
        style={{ background: 'linear-gradient(to top, rgba(250,248,245,0.7), transparent)' }}
      />
    </motion.div>
  )
}
