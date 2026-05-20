import { createContext, useContext, type ReactNode } from 'react'
import { useScrollSection, type ScrollSection } from '../hooks/useScrollSection'

type ScrollSectionContextValue = {
  section: ScrollSection
  progress: number
}

const ScrollSectionContext = createContext<ScrollSectionContextValue | null>(null)

export function ScrollSectionProvider({ children }: { children: ReactNode }) {
  const value = useScrollSection()
  return (
    <ScrollSectionContext.Provider value={value}>{children}</ScrollSectionContext.Provider>
  )
}

export function useScrollSectionContext() {
  const ctx = useContext(ScrollSectionContext)
  if (!ctx) {
    throw new Error('useScrollSectionContext must be used within ScrollSectionProvider')
  }
  return ctx
}
