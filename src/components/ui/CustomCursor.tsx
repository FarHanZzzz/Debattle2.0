import { useEffect, useRef } from 'react'
import { useFinePointer } from '../../hooks/useFinePointer'

const HOVER_SELECTOR =
  'a, button, [role="button"], input, select, textarea, .btn-primary, .btn-secondary, .dept-card, .treasure-card, .feature-card, .stat-card, .gallery-card'

function setPos(el: HTMLElement, x: number, y: number) {
  el.style.setProperty('--cx', `${x}px`)
  el.style.setProperty('--cy', `${y}px`)
}

export function CustomCursor() {
  const enabled = useFinePointer()
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const hovering = useRef(false)
  const visible = useRef(false)

  useEffect(() => {
    if (!enabled) return

    const dot = dotRef.current
    const ringEl = ringRef.current
    if (!dot || !ringEl) return

    document.body.classList.add('custom-cursor-active')

    const show = () => {
      if (visible.current) return
      visible.current = true
      dot.classList.add('cursor-dot--visible')
      ringEl.classList.add('cursor-ring--visible')
    }

    const hide = () => {
      if (!visible.current) return
      visible.current = false
      dot.classList.remove('cursor-dot--visible')
      ringEl.classList.remove('cursor-ring--visible')
    }

    const setHover = (on: boolean) => {
      if (on === hovering.current) return
      hovering.current = on
      ringEl.classList.toggle('cursor-ring--hover', on)
    }

    const onMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e
      setPos(dot, x, y)
      setPos(ringEl, x, y)
      show()
    }

    const onOver = (e: Event) => {
      const t = e.target
      if (!(t instanceof Element)) return
      setHover(Boolean(t.closest(HOVER_SELECTOR)))
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true, capture: true })
    document.documentElement.addEventListener('mouseleave', hide)
    document.documentElement.addEventListener('mouseenter', show)

    return () => {
      document.body.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver, true)
      document.documentElement.removeEventListener('mouseleave', hide)
      document.documentElement.removeEventListener('mouseenter', show)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden />
    </>
  )
}
