import heroPoster from '../assets/hero.png'
import type { ScrollSection } from '../hooks/useScrollSection'

/**
 * Ambient character backdrops per section (glassy, low-opacity).
 * Format, Schedule, Prizes, Register, Gallery now use inline SectionCharacter components.
 */
export type SectionCharacterConfig = {
  /** Image URL — crew poster or individual character PNG */
  image: string
  side: 'left' | 'right' | 'center'
  /** CSS background-position when using a sprite/poster sheet */
  backgroundPosition?: string
  backgroundSize?: string
  opacity?: number
  /** Display name (accessibility / debug) */
  name: string
}

export const SECTION_CHARACTERS: Partial<Record<ScrollSection, SectionCharacterConfig>> = {
  hero: {
    image: heroPoster,
    side: 'right',
    backgroundPosition: '88% 18%',
    backgroundSize: '220% auto',
    name: 'Grand Line crew',
  },
  about: {
    image: heroPoster,
    side: 'left',
    backgroundPosition: '12% 22%',
    backgroundSize: '200% auto',
    name: 'Navigator',
  },
  stats: {
    image: heroPoster,
    side: 'left',
    backgroundPosition: '8% 20%',
    backgroundSize: '195% auto',
    opacity: 0.16,
    name: 'Captain',
  },
  departments: {
    image: heroPoster,
    side: 'right',
    backgroundPosition: '72% 15%',
    backgroundSize: '200% auto',
    name: 'First mate',
  },
  organizer: {
    image: heroPoster,
    side: 'center',
    backgroundPosition: '48% 22%',
    backgroundSize: '170% auto',
    opacity: 0.1,
    name: 'Crew',
  },
}
