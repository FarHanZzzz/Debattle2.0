import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

export function useGsapSections() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const transitions = [
      { to: '#about', overlay: 'wave' as const },
      { to: '#format', overlay: 'haki' as const },
      { to: '#departments', overlay: 'wave' as const },
      { to: '#prizes', overlay: 'gold' as const },
      { to: '#organizer', overlay: 'fog' as const },
    ]

    const triggers: ScrollTrigger[] = []

    transitions.forEach(({ to, overlay }) => {
      const el = document.querySelector(`[data-transition="${overlay}"]`)
      if (!el) return

      triggers.push(
        ScrollTrigger.create({
          trigger: to,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.fromTo(
              el,
              { opacity: 0 },
              { opacity: 1, duration: 0.5, ease: 'power2.out' },
            )
            gsap.to(el, { opacity: 0, duration: 1, delay: 0.4, ease: 'power2.in' })
          },
        }),
      )
    })

    return () => {
      triggers.forEach((t) => t.kill())
    }
  }, [])
}
