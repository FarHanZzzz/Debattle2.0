import { useEffect, useRef } from 'react'
import { BackgroundEngine, type BgSection } from '../../engine/BackgroundEngine'
import { subscribeScrollProgress } from '../../hooks/useScrollSection'
import { useScrollSectionContext } from '../../context/ScrollSectionContext'

export function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const engineRef = useRef<BackgroundEngine | null>(null)
  const { section } = useScrollSectionContext()
  const mouseRaf = useRef(0)
  const pendingMouse = useRef({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const engine = new BackgroundEngine(canvas)
    engineRef.current = engine
    engine.start()

    const onResize = () => engine.resize()

    const flushMouse = () => {
      mouseRaf.current = 0
      engine.setMouse(pendingMouse.current.x, pendingMouse.current.y)
    }

    const onMouse = (e: MouseEvent) => {
      pendingMouse.current.x = e.clientX / window.innerWidth
      pendingMouse.current.y = e.clientY / window.innerHeight
      if (!mouseRaf.current) {
        mouseRaf.current = requestAnimationFrame(flushMouse)
      }
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMouse, { passive: true })

    const unsubProgress = subscribeScrollProgress((p) => {
      engine.setScrollProgress(p)
    })

    return () => {
      if (mouseRaf.current) cancelAnimationFrame(mouseRaf.current)
      unsubProgress()
      engine.stop()
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  useEffect(() => {
    engineRef.current?.setSection(section as BgSection)
  }, [section])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 h-full w-full"
      aria-hidden
    />
  )
}
