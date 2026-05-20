import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type SectionCharacterProps = {
  image: string
  name: string
  /** Which side the character appears on */
  position?: 'left' | 'right'
}

export function SectionCharacter({
  image,
  name,
  position = 'right',
}: SectionCharacterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: false, amount: 0.25 })

  return (
    <motion.div
      ref={ref}
      className={`relative h-full min-h-[340px] md:min-h-[420px] overflow-hidden rounded-2xl ${
        position === 'left' ? 'order-first' : 'order-last'
      }`}
      initial={{ opacity: 0, x: position === 'right' ? 60 : -60, scale: 0.95 }}
      animate={
        inView
          ? { opacity: 1, x: 0, scale: 1 }
          : { opacity: 0, x: position === 'right' ? 60 : -60, scale: 0.95 }
      }
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <img
        src={image}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover object-top rounded-2xl"
        draggable={false}
      />
      {/* Bottom gradient for name label */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#06020f]/90 to-transparent rounded-b-2xl" />
      {/* Character name badge */}
      <div className="absolute bottom-4 left-4 z-10">
        <span
          className="inline-block rounded-full border border-purple-bright/30 bg-[#06020f]/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-purple-bright backdrop-blur-sm"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {name}
        </span>
      </div>
      {/* Subtle purple glow border */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-purple-bright/20" />
    </motion.div>
  )
}
