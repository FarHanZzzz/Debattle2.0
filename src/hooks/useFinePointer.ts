import { useEffect, useState } from 'react'

/** True only for mouse/trackpad desktops — skips touch phones & tablets */
function readFinePointer() {
  if (typeof window === 'undefined') return false
  return (
    window.matchMedia('(pointer: fine)').matches &&
    !window.matchMedia('(pointer: coarse)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export function useFinePointer() {
  const [enabled, setEnabled] = useState(readFinePointer)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)')
    const coarse = window.matchMedia('(pointer: coarse)')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')

    const update = () => {
      setEnabled(fine.matches && !coarse.matches && !reduced.matches)
    }

    update()
    fine.addEventListener('change', update)
    coarse.addEventListener('change', update)
    reduced.addEventListener('change', update)

    return () => {
      fine.removeEventListener('change', update)
      coarse.removeEventListener('change', update)
      reduced.removeEventListener('change', update)
    }
  }, [])

  return enabled
}
