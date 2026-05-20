import { useEffect, useRef } from 'react'
import { subscribeScrollProgress } from '../../hooks/useScrollSection'

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    return subscribeScrollProgress((p) => {
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${p})`
      }
    })
  }, [])

  return (
    <div ref={barRef} className="scroll-progress" style={{ transform: 'scaleX(0)' }} aria-hidden />
  )
}
