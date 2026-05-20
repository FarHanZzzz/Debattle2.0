import { useEffect, useRef, useState } from 'react'

export type ScrollSection =
  | 'hero'
  | 'about'
  | 'format'
  | 'stats'
  | 'departments'
  | 'schedule'
  | 'prizes'
  | 'register'
  | 'gallery'
  | 'organizer'
  | 'footer'

const SECTION_IDS: ScrollSection[] = [
  'hero',
  'about',
  'format',
  'stats',
  'departments',
  'schedule',
  'prizes',
  'register',
  'gallery',
  'organizer',
  'footer',
]

function detectSection(): ScrollSection {
  const viewportMid = window.scrollY + window.innerHeight * 0.35
  let current: ScrollSection = 'hero'

  for (const id of SECTION_IDS) {
    const el = document.getElementById(id)
    if (!el) continue
    if (viewportMid >= el.offsetTop - 80) {
      current = id
    }
  }
  return current
}

function scrollProgress(): number {
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  return docHeight > 0 ? window.scrollY / docHeight : 0
}

type ProgressListener = (p: number) => void

const progressListeners = new Set<ProgressListener>()

/** Imperative scroll progress — avoids React re-renders while scrolling. */
export function subscribeScrollProgress(listener: ProgressListener) {
  progressListeners.add(listener)
  listener(scrollProgress())
  return () => {
    progressListeners.delete(listener)
  }
}

export function getScrollProgress() {
  return scrollProgress()
}

export function useScrollSection() {
  const [section, setSection] = useState<ScrollSection>('hero')
  const rafId = useRef(0)
  const lastSection = useRef<ScrollSection>('hero')
  const lastProgressEmit = useRef(0)

  useEffect(() => {
    const tick = () => {
      const p = scrollProgress()
      const s = detectSection()

      if (Math.abs(p - lastProgressEmit.current) > 0.008) {
        lastProgressEmit.current = p
        progressListeners.forEach((fn) => fn(p))
      }

      if (s !== lastSection.current) {
        lastSection.current = s
        setSection(s)
      }
    }

    const onScroll = () => {
      if (rafId.current) return
      rafId.current = requestAnimationFrame(() => {
        rafId.current = 0
        tick()
      })
    }

    tick()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [])

  return { section, progress: scrollProgress() }
}
